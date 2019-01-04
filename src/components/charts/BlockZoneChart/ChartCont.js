import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


var options = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Block Zones'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                    color: (Highcharts.theme && Highcharts.theme.contrastTextCcolor) || 'black'
                }
            }
        }
    },
    series: [{
        name: 'Block Zone',
        colorByPoint: true,
        data: []
    }]
}

const generateBlockZoneData = (name, count, total) => {
    return ({
        name,
        y: +((count/total * 100).toFixed(2))
    })
}


class BlockZoneChart extends React.Component {
    constructor(props) {
        super(props);

        this.chartRef = React.createRef();

        this.calculateData = this.calculateData.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.deck !== this.props.deck) {
            this.chartRef.current.chart.update(this.calculateData())
        }
    }

    calculateData() {
        if(this.props.deck.length === 0) {return 0}

        // NOTE:
        // This should be defined in a central
        // location and pulled in, but for the
        // time being we will reference it here
        // until it comes up in other locations.
        const blockZones = ["H","M","L","N"];
        var zoneCountArray = [0,0,0,0];
        var highBlocks, midBlocks, lowBlocks, noBlocks;

        this.props.deck.forEach(card => {
            zoneCountArray[blockZones.indexOf(card.block_zone)] += card.count;
        });

        [highBlocks,
         midBlocks,
         lowBlocks,
         noBlocks] = zoneCountArray;
        
        var deckSize = this.props.deck.reduce((total, card) => parseInt(total) + parseInt(card.count), 0);

        const highBlockData = generateBlockZoneData('High Blocks', highBlocks, deckSize);
        const midBlockData  = generateBlockZoneData('Mid Blocks', midBlocks, deckSize);
        const lowBlockData  = generateBlockZoneData('Low Blocks', lowBlocks, deckSize);
        const noBlockData   = generateBlockZoneData('No Blocks', noBlocks, deckSize);

        options.series[0].data = [highBlockData,
                                  midBlockData,
                                  lowBlockData,
                                  noBlockData];
        return options;
    }

    render() {
        return(
            this.props.deck.length === 0 ? <div/> :
            <HighchartsReact
                ref = {this.chartRef}
                highcharts = {Highcharts}
                options = {options}
            />
        )
    }
}

export default BlockZoneChart;
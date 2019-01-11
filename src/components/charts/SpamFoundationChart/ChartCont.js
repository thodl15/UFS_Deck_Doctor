import React from 'react';
import Highcharts from 'highcharts';
import HighchartReact from 'highcharts-react-official';

const spamDifficulty = 1;

var options = {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Foundation Costs'
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
        name: 'Difficulty',
        colorByPoint: true,
        data: []
    }]
}

class SpamFoundationChart extends React.Component {
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
        
        var spamFoundations = this.props.deck.map(x => parseInt(x.diff) <= spamDifficulty ? x.modCount : 0);
        var spamCount = spamFoundations.reduce((total, num) => total + num);
        var deckSize = this.props.deck.reduce((total, card) => parseInt(total) + parseInt(card.modCount), 0);

        const spamData = {
            name: 'Spam',
            y: +((spamCount/deckSize * 100).toFixed(2)),
        }

        const notSpamData = {
            name: 'Not Spam',
            y: +(((deckSize - spamCount)/deckSize * 100).toFixed(2))
        }
        options.series[0].data = [spamData, notSpamData];
        return options;

    }
    
    render() {
        return (
            this.props.deck.length === 0 ? <div/> :
            <HighchartReact
                ref={this.chartRef}
                highcharts = {Highcharts}
                options = {options}
            />
        );
    }
}

export default SpamFoundationChart;
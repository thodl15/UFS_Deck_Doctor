import React from 'react';
import { Formik } from 'formik';

import "stylesheets/input.css";

const DeckInputPres = (props) => (
    <Formik
        initialValues = {{ decklist: "" }}
        onSubmit = {(values, actions) => {
            var splitInput = values.decklist.split("\n").map(x => x.trim());

            // Regex Pattern:
            // Match lines that start with a number
            // and have a space
            var cardInputRegex = /^\d{1}\s{1}/;
            var cardOutputArr = {};
            splitInput.forEach(e => {
                if(cardInputRegex.test(e)) {
                    var count, name;
                    [count, ...name] = e.split(" ");
                    name = name.join(" ");
                    cardOutputArr[name] = {
                        count: parseInt(count),
                        name
                    };
                }
            });

            // Get the data of cards using the API
            // in order to determine the current
            // deck statistics.
            let nameArr = Object.keys(cardOutputArr).map(x => cardOutputArr[x].name);

            // ---- NEW TODO ---- 
            //      (David)
            // Use the nameArr variable to generate the list of IDs for the
            // API request for more detailed card data.

            // Steps:
            // 1. Match names against dictionary
            // 2. Build decklist query

            console.log(props.cardKeyDict);

            var decklistQueryObj = {};
            nameArr.forEach( name => {
                var cardData = props.cardKeyDict[name];
                if(decklistQueryObj[cardData.set]) {
                    decklistQueryObj[cardData.set].push(cardData.setId);
                } else {
                    decklistQueryObj[cardData.set] = [cardData.setId];
                }
            });

            var decklistQueryString = "";
            
            Object.keys(decklistQueryObj).forEach( setName => {
                let setString = `${setName}:`;
                decklistQueryObj[setName].forEach( cardID => {
                    setString += `${cardID},`;
                })
                decklistQueryString += `${setString.substring(0,setString.length-1)};`;
            });

            // Hotfix for dealing with an empty entry being created
            // on the set delineation with the extra delimiter
            // appearing at the end of the last set string.
            decklistQueryString = decklistQueryString.substring(0, decklistQueryString.length - 1)
            
            console.log(decklistQueryString);
            // ---- END TODO ----



            // Temporarily changing the API endpoint that I am hitting
            // to utilize the generic return until I properly build
            // out the query-based endpoint.
            var finalEndpoint = `http://localhost:8080/api/Cards?deckstring=${decklistQueryString}`;
            
            fetch(finalEndpoint, {
                method: "GET"
            }).then(response => 
                response.json()
            ).then(data => {

                // We know that the list of objects returned from the server
                // **must** be a subset of the requested cards, so we do not have
                // to do a verification of the existence of a given card name
                // in the original dictionary used to generate the request.
                let updatedArr = Object.keys(data).sort().map(x => {
                    return ({
                        ...data[x], 
                        id: `${data[x].set}-${data[x].setId}`,
                        count: cardOutputArr[x].count,
                        modCount: cardOutputArr[x].count
                    })
                });
                props.updateDecklist(updatedArr);
            })
            

            // var input = document.getElementById("initialDecklist");
            // input.style = [
            //     "height:0px;",
            //     "background-color:black;"
            // ].join("");
        }}
    >
        {formProps => {
            const {
                values,
                handleChange,
                handleBlur,
                handleSubmit
            } = formProps;
            return (
                <form id={"initialDecklist"} className={"deckInput"} onSubmit={handleSubmit}>
                    <textarea
                        id   = "decklist"
                        type = "text"

                        value = { values.decklist }

                        onChange = { handleChange }
                        onBlur   = { handleBlur   }
                    />
                    <button type="submit">Submit</button>
                </form>
            )
        }}
    </Formik>
)

export default DeckInputPres;
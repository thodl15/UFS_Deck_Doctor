import React from 'react';
import { Formik } from 'formik';

import "../stylesheets/input.css";

const DeckInputPres = (props) => (
    <Formik
        initialValues = {{ decklist: "" }}
        onSubmit = {(values, actions) => {
            var splitInput = values.decklist.split("\n").map(x => x.trim());

            // Regex Pattern:
            // Match lines that start with a number
            // and have a space
            var cardInputRegex = /^\d{1}\s{1}/;
            var cardOutputArr = [];
            splitInput.forEach(e => {
                if(cardInputRegex.test(e)) {
                    var count, name;
                    [count, ...name] = e.split(" ");
                    cardOutputArr.push({
                        count: parseInt(count),
                        name: name.join(" ")
                    });
                }
            })

            // props.updateDecklist(cardOutputArr);

            // Get the data of cards using the API
            // in order to determine the current
            // deck statistics.
            let nameArr = cardOutputArr.map(x => x.name);

            // Temporarily changing the API endpoint that I am hitting
            // to utilize the generic return until I properly build
            // out the query-based endpoint.
            var finalEndpoint = `http://localhost:4000/cards?names=${nameArr.join(',')}`;
            var tempEndpoint = `http://localhost:8080/api/Cards`;

            fetch(tempEndpoint, {
                method: "GET"
            }).then(response => 
                response.json()
            ).then(data => {
                console.log(data);
                let updatedArr = cardOutputArr.map(x => 
                    data[x.name] !== undefined ? 
                        ({...x, id: `${data[x.name].set}-${data[x.name].setId}`}) :
                        (x)
                )
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
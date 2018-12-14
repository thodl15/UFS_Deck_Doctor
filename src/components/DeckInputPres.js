import React from 'react';
import { Formik } from 'formik';

import "../stylesheets/input.css";

const DeckInputPres = (props) => (
    <Formik
        initialValues = {{ decklist: "" }}
        onSubmit = {(values, actions) => {
            var splitInput = values.decklist.split("\n").map(x => x.trim());
            console.log(splitInput);

            // Regex Pattern:
            // Match lines that start with a number
            // and have a space
            var cardInputRegex = /^\d{1}\s{1}/;
            var cardOutputArr = [];
            var idVal = 0;
            splitInput.forEach(e => {
                if(cardInputRegex.test(e)) {
                    console.log("Card Input:");
                    console.log(e);
                    var count, name;
                    [count, ...name] = e.split(" ");
                    cardOutputArr.push({
                        id: idVal++,
                        count,
                        name: name.join(" ")
                    });
                }
            })

            console.log(cardOutputArr);
            props.updateDecklist(cardOutputArr);
            

            var input = document.getElementById("initialDecklist");
            console.log(input);
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
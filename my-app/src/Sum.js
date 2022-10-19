import React from "react";

export function Sum(props) {
    const numbers = props.numbers

    return(
        <div>
            <h1>Il totale dell'array è di: {(numbers.reduce((a,b)=> a= a + b, 0))}</h1>
        </div>
    )
}
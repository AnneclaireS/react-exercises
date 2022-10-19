import React from "react";

export function Sum(props) {
    

    return(
        <div>
            <h1>Il totale dell'array è di: {(props.numbers.reduce((a,b)=> a= a + b, 0))}</h1>
        </div>
    )
}

Sum.defaultProps = {
    numbers: [1,2,3,9,6,4]
}
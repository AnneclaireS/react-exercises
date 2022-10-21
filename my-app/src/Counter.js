import React, { useEffect, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"



export function Counter({initialValue=0}) {
   
    const [counter, setCounter] = useState (initialValue)

        useEffect(() => {
            const interval = setInterval(() =>{
                setCounter(counter + 1)
            }, 1000)

            return () => clearInterval(interval)

        }, [counter])

        
   
        return (
            <>
                <CounterDisplay displCount={counter} />
            </>
        )
}
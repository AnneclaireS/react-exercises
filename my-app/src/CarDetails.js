import { useRef, useState } from 'react';

export function CarDetails({ initialData }) {
   

    const modelRef = useRef()
    const yearRef = useRef()
    const colorRef = useRef() 
    
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [color, setColor] = useState('')

    function handleModel() {
        setModel(modelRef.current.value)
    }

    function handleYear() {
        setYear(yearRef.current.value)
    }

    function handleColor() {
        setColor(colorRef.current.value)
    }

    function handleReset(e) {
        e.preventDefault() 
        modelRef.current.value = initialData.model
        yearRef.current.value = initialData.year
        colorRef.current.value = initialData.color
        console.log(model, year, color)
    }


    return (
        <form onSubmit={handleReset}>
            <h3>Model name: </h3>
            <input name='model' defaultValue={initialData.model} ref={modelRef} onChange={handleModel}></input>
            <h3>Year of production: </h3>
            <input name='year' defaultValue={initialData.year} ref={yearRef} onChange={handleYear}></input>
            <h3>Model color: </h3>
            <input name='color' defaultValue={initialData.color} ref={colorRef} onChange={handleColor}></input>
            <button type='submit'>Reset</button>
        </form>
    )
}
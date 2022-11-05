import { useMemo } from "react"

const objects = [
    {
        name: 'Joseph',
        id: 1,
        age: 27
    },
    {
        name: 'Malfoy',
        id: 2,
        age: 16
    },
    {
        name: 'Arthur',
        id: 3,
        age: 34
    },
    {
        name: 'Lilibeth',
        id: 4,
        age: 36
    },
    {
        name: 'Karen',
        id: 5,
        age: 17
    },
    {
        name: 'Andrea',
        id: 6,
        age: 14
    },
    {
        name: 'Marcus',
        id: 7,
        age: 24
    }
]

const FilteredList = () => {
    const users = useMemo(() => objects.map((user) => user.age >= 18 && <li key={user.id}>{'Name: ' + user.name}-{user.age + ' years'}</li>), [])
    return (  
    <div>
        <h3>Adults list: </h3>
            <ul>
                {users}
            </ul>

    </div>
    );
}
 
export default FilteredList;
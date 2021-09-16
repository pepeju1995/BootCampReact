import { deletePerson } from "../Services"

const Person = ({person}) => {
    return (
        <li>{person.name} {person.number} 
            <button onClick={() => {
                if(window.confirm(`Desea eliminar ${person.name}?`)){
                    deletePerson(person.id)
                }
            }}>
                Delete
            </button>
        </li>
    )
}


export const Persons = ({persons}) => {
    return (
        <ol>
            {persons.map((person) => <Person person={person} key={person.id} />)}
        </ol>
    )
}
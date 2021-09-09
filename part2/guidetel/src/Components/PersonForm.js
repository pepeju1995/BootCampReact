export const PersonForm = ({handleSubmit, handleChangeName, handleChangeNumber, newName, newNumber}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                name: <input onChange={handleChangeName} value={newName} />
            </div>
            <div>
                number: <input onChange={handleChangeNumber} value={newNumber}/>
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

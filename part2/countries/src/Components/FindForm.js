export const Find = ({ handleChange, value}) => {
    return (
        <div>
            <form>
                Find Countries: <input onChange={handleChange} value={value}/>
            </form>
        </div>
    )
}
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAllPersons = () => {
    return axios.get(baseUrl)
      .then((response) => response.data)
}

const setPerson = ({name, number, id}) => {
    return axios.post(baseUrl, {name, number, id})
        .then((response) => response.data)
}

const remove = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
        .then(response => response.data)
}

const update = (id, newPerson) => {
    return axios.put(`${baseUrl}/${id}`, newPerson)
        .then(response => response.data)
}

export default { getAllPersons, setPerson, remove, update }


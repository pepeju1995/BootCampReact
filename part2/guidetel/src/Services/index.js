import axios from 'axios'

const getAllPersons = (url) => {
    return axios.get(url)
      .then((response) => {
          const {data} = response
          return data
      })
}

const setPerson = (url, {name, number, id}) => {
    return axios.post(url, {name, number, id})
        .then((response) => {
            const {data} = response
            return data
        })
}

const remove = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
        .then(response => {
            const {data} = response
            return data
        })
}

export default { getAllPersons, setPerson, remove }


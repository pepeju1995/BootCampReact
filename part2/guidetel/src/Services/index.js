import axios from 'axios'

export const getAllPersons = (DATA) => {
    return axios.get(DATA)
      .then((response) => {
          const {data} = response
          return data
      })
}


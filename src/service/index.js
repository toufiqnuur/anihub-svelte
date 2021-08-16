import axios from 'axios'

const _axios = axios.create({ baseURL: 'https://kitsu.io/api/edge/' })

const apiReq = {
  search: (q) => _axios.get(`anime?filter[text]=${q}`),
  getTrending: _axios.get('trending/anime'),
  getAiring: _axios.get('anime?filter[status]=current&sort=-userCount'),
  getUpcoming: _axios.get('anime?filter[status]=upcoming&sort=-userCount'),
  getBest: _axios.get('anime?sort=-averageRating'),
  getPopular: _axios.get('anime?sort=-userCount')
}

export default apiReq
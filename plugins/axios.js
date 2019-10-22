export default ({ $axios, redirect }) => {
  $axios.defaults.timeout = 10000
  $axios.setHeader('Content-Type', 'application/json')
}

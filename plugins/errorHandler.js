export default (context, inject) => {
  inject('errorHandler', error => {
    try {
      const res = error.data
      if (res) {
        context.error({ statusCode: res.code, message: res.message })
      } else {
        context.error({ statusCode: error.statusCode || 999, message: error.message })
      }
    } catch {
      context.error({ statusCode: 500, message: 'Something wrong...' })
    }
  })
}

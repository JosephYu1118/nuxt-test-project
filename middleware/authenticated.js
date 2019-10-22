export default ({ store, route, redirect }) => {
  const usersInfo = store.state.users.usersInfo
  const isCorrectRoute = usersInfo.some(info => info.id === Number(route.params.id))
  if (route.meta[0].requiresAuth && isCorrectRoute) {
    const isAuthenticated = usersInfo.find(info => info.id === Number(route.params.id)).isAuthenticated
    if (!isAuthenticated) {
      redirect({ path: '/login', query: route.params })
    }
  }
}

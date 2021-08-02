export const fetchData = async (endpoint) => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
    try{
        const response = await fetch(endpoint, requestOptions)
        const jsonResponse = response.json()
        return jsonResponse
    } catch (error) {
        console.log(error)
        return {error}
    }
}
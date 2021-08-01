

export const fetchCountries = async () => {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
    try{
        const response = await fetch(`https://restcountries.eu/rest/v2/all`, requestOptions)
        const jsonResponse = response.json()
        return jsonResponse
    } catch (error) {
        console.log(error)
        return {error}
    }
}
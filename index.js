// Initialize axios
const axios = require('axios')
// Function to get random quote
async function getQuote() {

    try {
        // Request data from api endpoint
        const response = await axios.get('https://zenquotes.io/api/random')

        console.log("Here is a motivational quote for you:")
        // log the api response data
        console.log(`"${response.data[0].q}" - ${response.data[0].a}`)
    }
    // Display error message if api call fails
    catch {
        console.log("Could not fetch a quote. Tryagain later.")
    }
}
// Call the function
getQuote();
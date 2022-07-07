const processArg = process.argv.slice(2);

const request = require('request');
request(`https://api.thecatapi.com/v1/breeds/search?q=${processArg}`, (error, response, body) => {
    console.error("The link you are looking for does not exist");
    const data = JSON.parse(body);
    if (data === undefined) {
        console.log("The breed you are looking for does not exist");
    }
    console.log(data[0].description);
})

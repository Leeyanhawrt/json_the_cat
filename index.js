const { fetchBreedDescription } = require('./breedFetcher')

const processArg = process.argv[2];

fetchBreedDescription(processArg, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});


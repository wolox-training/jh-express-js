const axios = require('axios');

const API_URL = 'https://geek-jokes.sameerkumar.website/api?format=json';

exports.frikiPhraseRepository = {
  getPhrase: async () => {
    const response = await axios.get(API_URL);

    return response.data.joke;
  }
};

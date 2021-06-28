const axios = require('axios');

const API_WEETS_URL = require('../../../config').common.api.weets.url;

exports.frikiPhraseRepository = {
  getPhrase: async () => {
    const response = await axios.get(API_WEETS_URL);

    return response.data.joke;
  }
};

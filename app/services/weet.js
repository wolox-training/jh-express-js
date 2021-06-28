const { frikiPhraseRepository } = require('../repositories/witter/friki_phrase');

const getRandomWeet = async phraseRepository => {
  try {
    return await phraseRepository.getPhrase();
  } catch ({ message }) {
    throw Error(message);
  }
};

exports.getRandomWeet = () => getRandomWeet(frikiPhraseRepository);

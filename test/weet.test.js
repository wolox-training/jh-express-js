const weetService = require('../app/services/weet');

describe('Witter should return', () => {
  it('A phrase when calling the service method', async () => {
    const weet = await weetService.getRandomWeet();

    expect(weet).not.toBeUndefined();
  });
});

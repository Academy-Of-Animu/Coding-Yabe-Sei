const Configuration = require('../../library/configuration');
const IsColor = require('../../library/isColor');

describe('Configuration', () => {

  test('Correct version', () => {
    const { botVersion } = Configuration;
    expect(botVersion).toEqual('0.4.0');
  });

  test('Expected developers', () => {
    const { devIds } = Configuration;
    const expectedIds = [
      '427491040468140043',
      '407351772575694879',
      '428678912558628865'
    ];
    expect(devIds).toEqual(expectedIds);
  });

  test('embedColor is a color', () => {
    const { embedColor } = Configuration;
    const isColor = IsColor(embedColor);
    expect(isColor).toEqual(true);
  });

});
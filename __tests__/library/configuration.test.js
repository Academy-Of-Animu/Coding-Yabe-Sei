jest.mock('dotenv');
const config = require('../../library/configuration');
const IsColor = require('../../library/isColor');

describe('Configuration', () => {

  test('Correct version', () => {
    const { botVersion } = config;
    expect(botVersion).toEqual('0.4.0');
  });

  test('Expected developers', () => {
    const { devIds } = config;
    const expectedIds = [
      '427491040468140043',
      '407351772575694879',
      '428678912558628865'
    ];
    expect(devIds).toEqual(expectedIds);
  });

  test('embedColor is a color', () => {
    const { embedColor } = config;
    const isColor = IsColor(embedColor);
    expect(isColor).toEqual(true);
  });

  describe('defaults', () => {
    const OLD_ENV = process.env;

    beforeEach(() => {
      jest.resetModules() // this is important - it clears the cache
      process.env = { };
      delete process.env.NODE_ENV;
    });

    afterEach(() => {
      process.env = OLD_ENV;
    });

    describe('prefix', () => {
      test('default', () => {
        expect(config.prefix).toEqual('yabe');
      });
      test('set', () => {
        const testPrefix = 'testPrefix ';
        process.env.PREFIX = testPrefix;
        const config = require('../../library/configuration');
        expect(config.prefix).toEqual(testPrefix);
      });
    });

    describe('useNewHelp', () => {
      test('default', () => {
        expect(config.useNewHelp).toEqual('true');
      });
      test('set', () => {
        const useNewHelp = 'false';
        process.env.USE_NEW_HELP = useNewHelp;
        const config = require('../../library/configuration');
        expect(config.useNewHelp).toEqual('false');
      });
    });

    describe('embedColor', () => {
      test('default', () => {
        expect(config.embedColor).toEqual('0x1355A4');
      });
      test('set', () => {
        const newColor = '0xF00';
        process.env.EMBED_COLOR = newColor;
        const config = require('../../library/configuration');
        expect(config.embedColor).toEqual(newColor);
      });
    });

    describe('logChannel', () => {
      test('default', () => {
        expect(config.logChannel).toEqual('516054347008966667');
      });
      test('set', () => {
        const newChannel = '123';
        process.env.LOG_CHANNEL = newChannel;
        const config = require('../../library/configuration');
        expect(config.logChannel).toEqual(newChannel);
      });
    });

    describe('disconnectChannel', () => {
      test('default', () => {
        expect(config.disconnectChannel).toEqual('531654018909339650');
      });
      test('set', () => {
        const newChannel = '123';
        process.env.DISCONNECT_CHANNEL = newChannel;
        const config = require('../../library/configuration');
        expect(config.disconnectChannel).toEqual(newChannel);
      });
    });

    describe('bugChannel', () => {
      test('default', () => {
        expect(config.bugChannel).toEqual('533714573031899156');
      });
      test('set', () => {
        const newChannel = '123';
        process.env.BUG_CHANNEL = newChannel;
        const config = require('../../library/configuration');
        expect(config.bugChannel).toEqual(newChannel);
      });
    });


  });

});
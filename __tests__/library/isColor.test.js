const IsColor = require('../../library/isColor');

describe('ColorMatcher', () => {

  describe('3 Characters', () => {
    describe('matches', () => {
      test('lower case', () => {
        expect(IsColor('0xfff')).toEqual(true);
      });
      test('upper case', () => {
        expect(IsColor('0xFFF')).toEqual(true);
      });
    });

    describe('does not match', () => {
      test('out of bound characters', () => {
        expect(IsColor('0xGGG')).toEqual(false);
      });
    });
  });

  describe('6 Characters', () => {
    describe('matches', () => {
      test('lower case', () => {
        expect(IsColor('0xffffff')).toEqual(true);
      });
      test('upper case', () => {
        expect(IsColor('0xFFFFFF')).toEqual(true);
      });
    });

    describe('does not match', () => {
      test('out of bound characters', () => {
        expect(IsColor('0xGGGGGG')).toEqual(false);
      });
    });
  });

  describe('incorrect amount of characters', () => {

    test('0 characters does not match', () => {
      expect(IsColor('0x')).toEqual(false);
    });

    test('1 characters does not match', () => {
      expect(IsColor('0x0')).toEqual(false);
    });

    test('2 characters does not match', () => {
      expect(IsColor('0x12')).toEqual(false);
    });

    test('4 characters does not match', () => {
      expect(IsColor('0x1234')).toEqual(false);
    });

    test('5 characters does not match', () => {
      expect(IsColor('0x12345')).toEqual(false);
    });

    test('7 characters doese not match', () => {
      expect(IsColor('0x1234567')).toEqual(false);
    });
  });

  describe('no prefix', () => {
    test('3 characters', () => {
      expect(IsColor('fff')).toEqual(false);
    });
    test('6 characters', () => {
      expect(IsColor('FFFFFF')).toEqual(false);
    });
  });
});
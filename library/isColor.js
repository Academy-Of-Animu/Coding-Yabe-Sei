const ColorMatcher = /^0x(?:[\da-f]{3}){1,2}$/i;
const IsColor = color =>  ColorMatcher.test(color);
module.exports = IsColor;

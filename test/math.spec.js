const expect = require('chai').expect
const {sum, allUpper} = require('../index');

//
// it('calc sum with negative numbers', () => {
//   expect(sum(-5, -7)).equal(-12)

// });
describe('ALL UPPER', () => {
  it('input all lower cases', () => {
    expect(allUpper(['a', 'bc'])).eql(['A', 'BC']);
  })

  it('input all upper cases', () => {
    expect(allUpper(['A', 'BC'])).eql(['A', 'BC'])
  });
});




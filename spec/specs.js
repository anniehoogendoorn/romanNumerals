describe('romanNumeral', function() {
  it("will search for user number that matches a roman numeral", function() {
    expect(romanNumeral(5)).to.equal('V');
  });

  it("will convert 3 into roman numerals", function() {
    expect(romanNumeral(3)).to.equal('III');
  });
  it("will convert 6 into roman numerals", function() {
    expect(romanNumeral(6)).to.equal("VI");
  });
  it("will convert 7 into roman numerals", function() {
    expect(romanNumeral(7)).to.equal("VII");
  });
});

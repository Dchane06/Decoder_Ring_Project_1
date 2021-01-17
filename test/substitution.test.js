// Write your tests here!

const { expect } = require("chai");
const substitution = require("../src/substitution");


describe("substitutionLength26", () => {
    it("should return false if the given alphabet isnt exactly 26 characters long.", () => {
        const input = "random";
        const actual = substitution(input, "QWERTYUIOPASDFGHJKLZXCV", encode = true);
        const expected = false;
        expect(actual).to.eql(expected);
    });
});

describe("substitutionTranslation", () => {
    it("should return a correctly translated phrase, based on the alphabet given to the function.", () => {
        const input = "hello there";
        const actual = substitution(input, "QWERTYUIOPASDFGHJKLZXCVBNM", encode = true);
        const expected = "itssg zitkt";
        expect(actual).to.eql(expected);
    });
});

describe("substitutionNoDuplicates", () => {
    it("should return false if there are any duplicate letters in the alphabet given.", () => {
        const input = "random";
        const actual = substitution(input, "QQQRTYUIOPASDFGHJKLZXCVBNM", encode = true);
        const expected = false;
        expect(actual).to.eql(expected);
    });
});

describe("substitutionMaintainsSpaces", () => {
    it("should maintain spaces after encoding", () => {
        const input = "hello there";
        const actual = substitution(input, "QWERTYUIOPASDFGHJKLZXCVBNM", encode = true);
        const expected = "itssg zitkt";
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces after decoding", () => {
        const input = "itssg zitkt";
        const actual = substitution(input, "QWERTYUIOPASDFGHJKLZXCVBNM", encode = false);
        const expected = "hello there";
        expect(actual).to.eql(expected);
    });
});

describe("substitutionIgnoresCapitals", () => {
    it("should ignore capitals, the results of Hello There and hello there should be the same.", () => {
        const input = "Hello There hello there";
        const actual = substitution(input, "QWERTYUIOPASDFGHJKLZXCVBNM", encode = true);
        const expected = "itssg zitkt itssg zitkt";
        expect(actual).to.eql(expected);
    });
    });

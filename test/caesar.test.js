const { expect } = require("chai");

// Write your tests here!
const caesar = require("../src/caesar");

describe("caesarWithPositive", () => {
    it("should return an encoded string from an inputted string with the shift being a postive number.", () => {
        const input = "random";
        const actual = caesar(input, 3, encode = true);
        const expected = "udqgrp";
        expect(actual).to.eql(expected);
    });
});

describe("caesarWithNegative", () => {
    it ("should return an encoded string from an inputted string with the shift being a negative number.", () => {
        const input = "random";
        const actual = caesar(input, -3, encode = true);
        const expected = "oxkalj";
        expect(actual).to.eql(expected);
    });
});

describe("caesarDecodeWithPositiveNumber", () => {
    it ("should return a decoded string from an inputted string with the shift being a positive number.", () => {
        const input = "udqgrp";
        const actual = caesar(input, 3, encode = false);
        const expected = "random";
        expect(actual).to.eql(expected);
    });
});

describe("checkingShiftValue", () => {
    it ("should return false when given a value of 0.", () => {
        const input = "random";
        const actual = caesar(input, 0, encode = true);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it ("should return false when given a value less than -25.", () => {
        const input = "random";
        const actual = caesar(input, -27, encode = true);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it ("should return false when given a value greater than 25.", () => {
        const input = "random";
        const actual = caesar(input, 27, encode = true);
        const expected = false;
        expect(actual).to.eql(expected);
    });
    it ("should return false when given no value", () => {
        const input = "random";
        const actual = caesar(input, undefined, encode = true);
        const expected = false;
        expect(actual).to.eql(expected);
    });
});

describe("ignoringCapitalLetters", () => {
    it ("should return the same message despite the input having capital letters, example: A Message.", () => {
        const input = "A Message";
        const actual = caesar(input, 5, encode = true);
        const expected = "f rjxxflj";
        expect(actual).to.eql(expected);
    });
    it ("should return the same message despite the input having lowercase letters, example: a message.", () => {
        const input = "a message";
        const actual = caesar(input, 5, encode = true);
        const expected = "f rjxxflj";
        expect(actual).to.eql(expected);
    });
});

describe("maintainingSpacesAndSymbols", () => {
    it ("should maintain spaces or symbols that aren't in the alphabet. Before and after encoding.", () => {
        const input = "doing_weird *symbols_";
        const actual = caesar(input, 2, encode = true);
        const expected = "fqkpi_ygktf *uaodqnu_";
        expect(actual).to.eql(expected);
    });
    it ("should maintain spaces or symbols that aren't in the alphabet. Before and after decoding.", () => {
        const input = "fqkpi ygktf uaodqnu";
        const actual = caesar(input, 2, encode = false);
        const expected = "doing weird symbols";
        expect(actual).to.eql(expected);
    });
});

describe("shiftingPastTheEndOfAlphabet", () => {
    it ("should handle shifts that go past the end of the alphabet.", () => {
        const input = "Zebra";
        const actual = caesar(input, 3, encode = true);
        const expected = "cheud";
        expect(actual).to.eql(expected);
    });
});
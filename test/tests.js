
import { addTwoNumbers, subTwoNumbers, multTwoNumbers, divideTwoNumbers } from '../mathUtils.js';

const test = QUnit.test;

test('it should return 7 if I pass 3 and 4', (expect) => {
    const expected = 7;
    const actual = addTwoNumbers(3, 4);
    expect.equal(expected, actual);
})

test('it should return -1 if I pass 3 and 4', (expect) => {
    const expected = -1;
    const actual = subTwoNumbers(3, 4);
    expect.equal(expected, actual);
})

test('it should return 12 if I pass 3 and 4', (expect) => {
    const expected = 12;
    const actual = multTwoNumbers(3, 4);
    expect.equal(expected, actual);
})

test('it should return .75 if I pass 3 and 4', (expect) => {
    const expected = .75;
    const actual = divideTwoNumbers(3, 4);
    expect.equal(expected, actual);
})
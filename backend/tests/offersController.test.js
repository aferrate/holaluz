let validator = require('../validators/validatorClientOffer');
let supplyPoints = require('../datasources/supply-points.json');
let noDiscountClient = supplyPoints.filter(a => a.cups == '123456');
let discountClient = supplyPoints.filter(a => a.cups == '000000');

test('client eligible', () => {
  expect(validator.clientIsEligible("123456")).toStrictEqual([{
    "cups": "123456",
    "tariff": "One price",
    "invoiced_amount": "50.00",
    "power": {
      "p1": "4500",
      "p2": "4200"
    },
    "neighbors": ["234567", "345678"]
  }]);
});

test('client not eligible', () => {
    expect(validator.clientIsEligible("345678")).toStrictEqual(false);
});

test('has no discount', () => {
  expect(validator.checkOffer(noDiscountClient)).toStrictEqual(false);
});

test('has discount', () => {
  expect(validator.checkOffer(discountClient)).toStrictEqual(true);
});

test('new test', () => {
  const entryDataset = {
    cups: "123456",
    tariff: "One price",
    invoiced_amount: "50.00",
    power: {
      p1: "4500",
      p2: "4200"
    },
    neighbors: ["234567", "345678"]
  };
  expect(validator.checkOffer([entryDataset])).toStrictEqual(true);
});
# Holaluz Frontend and BFF coding test

## Exercice

At Holaluz we are releasing a new brand product related with our rooftop revolution.

Some clients did contact us asking for this new product and which requirements and offers we have in order to get enrolled.

We need a landing page that given a CUPS search we display both its client and supply point information, plus if the client can become part of the rooftop revolution including the type of offer they would get.

## Requirements

### Business requirements

* We need to know which clients are allowed to get enrolled with the rooftop revolution. In order to offer solar product, the client's `building_type` must be **house** and it needs to have **at least 1 neighbor**.

* We have two types of offers for those clients that can have be part of the rooftop revolution each of them with a different discount percentage and with their conditions:
    1. **Standard offer**: No discount, no conditions.
    2. **Basic discount**: 5% discount. Conditions: its neighbors should have `p1` and `p2` powers lower than the current client's supply point.

### Technical requirements
* You will have to build an web application using Vue.js framework.

* You can implement your own CSS or use a UI components library.

* CUPS search must be handled by an input.

* You should spend between 3 and 5 hours working on this.

* We will use the code you deliver to us for the pair programming step of the interview process.

* You will have to build a back for front using nodeJS. You will find two `.json` files. You should tread each of them like they are returned by a internal services not exposed to internet.

## Glossary
- **CUPS**: Universal acronym for the supply point identifier number in Spanish
- **Neighbors**: Clients that live near by identified by CUPS.
- **Tariff**: Name of the contracted supply point product.
- **Power**: Divided by two different periods, represents the provided energy to the supply point in Watts.
- **Invoiced amount**: Price that the client is paying monthly for the contracted power in euros.
- **Building type**: Type of building the client lives in.
- **Role**: The given type of client according to our internal marketing structure.
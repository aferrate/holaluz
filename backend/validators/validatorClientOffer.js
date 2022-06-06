'use strict';

let clients = require('../datasources/clients.json');
let supplyPoints = require('../datasources/supply-points.json');
const discountRequirement = 2;

module.exports = {
    clientIsEligible: function(cups) {
        var checkHouseType = clients.filter(a => a.building_type == "house" && a.cups == cups);
        var checkNeighbors = supplyPoints.filter(a => a.cups == cups && a.neighbors.length > 0);

        if(checkHouseType.length > 0 && checkNeighbors.length > 0) {
            return checkNeighbors;
        }

        return false;
    },
    checkOffer: function(checkNeighbors) {
        var arrNeighnorCups = checkNeighbors[0].neighbors;

        if(arrNeighnorCups) {
            var p1 = checkNeighbors[0].power.p1 / discountRequirement;
            var p2 = checkNeighbors[0].power.p2 / discountRequirement;

            for(let cupsNeighbor of arrNeighnorCups) {
                let neighborPowers = supplyPoints.filter(a => a.cups == cupsNeighbor)[0];

                if(Number(neighborPowers.power.p1) > Number(p1) || Number(neighborPowers.power.p2) > Number(p2)) {
                    return false;
                }
            }
        }

        return true;
    }
}

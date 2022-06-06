var validatorClient = require ('../validators/validatorClientOffer')

module.exports = {
    getOffer: async function(req, res) {
        try{
            var cups = req.body.cups;
            var clientIsEligible = validatorClient.clientIsEligible(cups);

            if(clientIsEligible === false) {
                res.status(200).json({ message: 'client is not eligible'});
            } else{
                var checkOffer = validatorClient.checkOffer(clientIsEligible);
            
                if(checkOffer) {
                    res.status(200).json({ message: 'client is eligible and has 5% discount'});
                } else {
                    res.status(200).json({ message: 'client is eligible but has not discounts'});
                }
            }
        } catch(e) {
            res.status(400).json({ message: e.message});
        }
    },
}
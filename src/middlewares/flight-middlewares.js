const validateCreateFlight = (req,res, next) => {
    if(
        !req.body.flightNumber||
        !req.body.airplaneId||
        !req.body.arrivalAirportId||
        !req.bodydepartureAirportId||
        !req.body.arrivalTime||
        !req.body.departureTime||
        !req.body.price
    ) {
        // if any of the body parsers is missing we come inside the if
        return res.status(400).json({
            data: {},
            success: false,
            message: "Invalid request body for creating the flight",
            err: "Missing mandatory properties to crate a flight", 
        });
    }

next();
}

module.exports = {
    validateCreateFlight
}    
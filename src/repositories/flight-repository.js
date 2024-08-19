const {Flights} = require('../models/index');
const { Op } = require('sequelize');

class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if(data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if (data.minPrice || data.maxPrice) {
            filter.price = {};
            if (data.minPrice) {
                filter.price[Op.gte] = data.minPrice;
            }
            if (data.maxPrice) {
                filter.price[Op.lt] = data.maxPrice;
            }
        /*
        if(data.minPrice) {
            Object.assign(filter, {price: {[Op.gte]: data.minPrice}});       
        }
         */
        return filter;
    }
}

    async createFlight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Somethinng went wrong in repository level");
            throw {error};
        }
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        }catch (error) {
            console.log("Somethinng went wrong in repository level");
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        }catch (error) {
            console.log("Somethinng went wrong in repository level");
            throw {error};
        }
    }


}

module.exports = FlightRepository;
/*
 {
    where: {
        arrivalAirportId: 2,
        departureAirportId: 4,
        price: {[Op.gte]: 4000}
    }
 }
*/

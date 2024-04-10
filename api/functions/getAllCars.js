const fs = require('fs');

// getAllCars.js

module.exports = async function (context, req) {
    try {
        const carData = fs.readFileSync('./cars.json');
        const cars = JSON.parse(carData);

        context.res = {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
            body: cars
        };
    } catch (error) {
        context.res = {
            status: 500,
            body: 'Internal Server Error'
        };
    }
};
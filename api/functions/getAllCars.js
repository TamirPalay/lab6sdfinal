// getAllCars.js
module.exports = async function (context, req) {
    try {
        const carData = fs.readFileSync('../cars.json');
        const cars = JSON.parse(carData);

        context.res = {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' // Add this line
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
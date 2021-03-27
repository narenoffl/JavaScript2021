'use strict';

/*const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 10); */

const flight = 'LH123';
const naren = {
  name: 'Naren Puru',
  passport: 234567,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 234567) {
    alert('Check In');
  } else {
    alert('Wrong passport');
  }
};
//checkIn(flight, naren);
//console.log(flight);
//console.log(naren);

//flightNum = flight;

//same as doing
//const flightNum = flight;
//const passenger = naren;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(naren);
checkIn(flight, naren);

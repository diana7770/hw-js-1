const hotels = [
  { name: "Luxury Resort", rating: 4.7, price: 250, location: "Beach" },
  { name: "City View Hotel", rating: 3.9, price: 120, location: "City" },
  { name: "Mountain Lodge", rating: 4.2, price: 180, location: "Mountain" },
];
const sortHotels = hotels
  .filter((hotel) => hotel.location === "Beach" && hotel.rating >= 4.0)
  .sort((a, b) => b.rating - a.rating)
  .map((hotel) => `${hotel.name} - $${hotel.price} per night`);
console.log(sortHotels);

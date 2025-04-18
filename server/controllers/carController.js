const Car = require("../models/car");

exports.addCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).send(car);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!car) return res.status(404).send("Car not found");
    res.send(car);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.updateManyCars = async (req, res) => {
  try {
    const result = await Car.updateMany(req.body.filter, req.body.update);
    res.send(result);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteCar = async (req, res) => {
  try {
    const car = await Car.findByIdAndDelete(req.params.id);
    if (!car) return res.status(404).send("Car not found");
    res.send(car);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.send(cars);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getOldCars = async (req, res) => {
  try {
    const currentYear = new Date().getFullYear();
    const cars = await Car.find({ year: { $lt: currentYear - 5 } }).select(
      "model make registrationNumber owner"
    );
    res.send(cars);
  } catch (error) {
    res.status(500).send(error);
  }
};

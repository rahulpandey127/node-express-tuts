import mongoose from "mongoose";

import user from "../models/user.model.js";

export let userRegistration = async (req, res) => {
  let data = req.body;
  if (
    req.body.name == "" ||
    req.body.mobile == "" ||
    req.body.email == "" ||
    req.body.message == ""
  ) {
    return res.status(400).json({ message: "Please fill all the fields" });
  } else {
    let result = await user.insertOne(data);
    res.status(201).json({ message: "Profile created successfully", result });
  }
};

export let getAllUsers = async (req, res) => {
  try {
    let users = await user.find();
    if (!users) {
      res.status(404).json({ message: "No users found" });
    } else {
      res.status(201).json(users);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export let userView = async (req, res) => {
  // let paramsId = mongoose.Types.ObjectId.isValid(req.params.id);
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(404).json({ message: "Invalid Id" });
  }

  try {
    let data = await user.findById(req.params.id);
    if (!data) {
      // return res.status(404).json({ message: "User not found" });
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(201).json(data);
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

export let profileUpdate = async (req, res) => {
  let result = await user.updateOne({ _id: req.body._id }, req.body);
  res.status(201).json(result);
};

export let userLogin = async (req, res) => {
  let data = await user.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (data) {
    res.status(201).json(data);
  } else {
    res.status(404).json({ message: "User not found Invalid credentials" });
  }
};

export let Error404 = (req, res) => {
  res.render("404", { message: "User not found" });
};

export let Error500 = (req, res) => {
  res.render("500", { message: "Internal server error" });
};

export let userDelete = async (req, res) => {
  console.log(req.body.id);
  let result = await user.deleteOne({ _id: req.body.id });
  res.status(201).json({ message: "User deleted successfully", data: result });
};

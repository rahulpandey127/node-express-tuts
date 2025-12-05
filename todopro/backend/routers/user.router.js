import express from "express";
let router = express.Router();

import {
  userRegistration,
  getAllUsers,
  userView,
  profileUpdate,
  userLogin,
  userDelete,
  Error404,
  Error500
} from "../controllers/user.controllers.js";

//create profile
router.post("/api/user/profile/registration", userRegistration);

//all users
router.get("/api/getAllUsers", getAllUsers);

//read profile
router.get("/api/user/view/:id", userView);

//update profile
router.put("/api/profile/update", profileUpdate);

router.post("/api/user/login", userLogin);

//delete profile
router.post("/api/profile/delete", userDelete);

//404 Page Not Found
router.get("/api/Error/404", Error404);

//500 Server Error
router.get("/api/Error/500", Error500);

export default router;

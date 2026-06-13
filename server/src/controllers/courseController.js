const courseModel = require("../models/courseModel");
const categoryModel = require("../models/categoryModel");
const { isValid, isValidObjectId } = require("../utils/validator");

// Create Courses
const createCourse = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// Get All Courses
const getAllCourses = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// Get Course By Id
const getCourseById = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// Update Course
const updateCourse = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

// Delete Course
const deleteCourse = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
};

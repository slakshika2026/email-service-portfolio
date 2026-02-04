// src/helpers/emailTransporter.js
const nodemailer = require("nodemailer");
require("dotenv").config();

const createTransporter = () => {
  console.log("DEBUG: Email User is:", process.env.EMAIL_USER);
  console.log(
    "DEBUG: Password Length is:",
    process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : "undefined",
  );
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

module.exports = createTransporter;

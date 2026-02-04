// src/services/email.service.js
const createTransporter = require("../helpers/emailTransporter");

/**
 * Service to handle the logic of sending the email
 * @param {Object} data - { senderName, senderEmail, subject, message, phone }
 * @returns {Promise} - Resolves if sent, rejects if error
 */
const sendPortfolioEmail = async ({
  senderName,
  senderEmail,
  subject,
  message,
  phone,
}) => {
  const transporter = createTransporter();

  const mailOptions = {
    from: senderEmail, // The sender's email (from the form)
    to: process.env.EMAIL_USER, // YOUR email
    subject: subject,
    text: `Sender Name: ${senderName}\nSender Email: ${senderEmail}\nPhone: ${phone}\n\nMessage:\n${message}`,
    // html: `<p>You have a new message...</p>` // Optional: You can add HTML here later
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return info;
  } catch (error) {
    throw error; // Pass the error up to the controller
  }
};

module.exports = {
  sendPortfolioEmail,
};

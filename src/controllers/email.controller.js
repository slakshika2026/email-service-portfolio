// src/controllers/email.controller.js
const emailService = require("../services/email.service");

const sendEmail = async (req, res) => {
  try {
    // 1. Extract data from request body
    const { senderName, senderEmail, subject, message, phone } = req.body;

    // 2. Validation (Optional but recommended)
    if (!senderName || !senderEmail || !subject || !message || !phone) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // 3. Call the Service
    const info = await emailService.sendPortfolioEmail({
      senderName,
      senderEmail,
      subject,
      message,
      phone,
    });

    // 4. Send Success Response
    console.log("Email sent: " + info.response);
    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    // 5. Handle Errors
    console.error("Email Error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
};

module.exports = {
  sendEmail,
};

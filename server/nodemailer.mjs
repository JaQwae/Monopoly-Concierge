import nodemailer from "nodemailer";

// Sends from to email address once user successfully fills out the form 
export const sendEmail = async (data, res) => {
  const transporter = nodemailer.createTransport({
    service: "yahoo",
    auth: {
      user: process.env.EMAILSENDER,
      pass: process.env.PASSWORDSENDER,
    },
  });

  const formattedMessage = Object.entries(data)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n');

  const formattedHTML = Object.entries(data)
    .map(([key, value]) => `<p><b>${key}:</b> ${value}</p>`)
    .join('');

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAILSENDER,
      to: process.env.EMAILRECIPIENT,
      subject: `New Form Submission from Monopoly Concierge`,
      text: `Message:\n${formattedMessage}`,
      html: `<h3>New Form Submission:</h3>${formattedHTML}`,
    });

    // console.log("Message sent:", info.messageId);
    res.json({ message: "Email sent successfully", info });
  } catch (error) {
    // console.error("Error sending email:", error);
    res.status(500).json({ message: "Error sending email", error });
  }
}
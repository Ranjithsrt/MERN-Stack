"use server";

import nodemailer from "nodemailer";

export const sendEmail = async (formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(name, email, message);

  // Validate input
  if (!name || !email || !message) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.NEXT_PUBLIC_SMTP_HOST,
    port: process.env.NEXT_PUBLIC_SMTP_PORT,
    secure: false, // Use true for 465, false for other ports
    auth: {
      user: process.env.NEXT_PUBLIC_SMTP_USER,
      pass: process.env.NEXT_PUBLIC_SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.NEXT_PUBLIC_SMTP_FROM_EMAIL,
    to: process.env.NEXT_PUBLIC_SMTP_FROM_EMAIL,
    subject: `Contact Form Submission from ${name}`,
    text: `
Message from:
Name: ${name}
Email: ${email}
Message: ${message}`,
    html: `
<h3>New Contact Form Submission</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Message:</strong></p>
<p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      success: true,
      message: "Email sent successfully! We'll get back to you soon.",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
};

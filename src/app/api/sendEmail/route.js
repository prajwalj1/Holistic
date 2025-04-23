import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, phone, email, subject, message } = body;

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'prajwal.gautam2727@gmail.com', // Use your email
        pass: 'ztfm iowf opwn whmd', // Replace with a valid app-specific password
      },
    });

    // Create email options with HTML content and inline image (using `cid`)
    const mailOptions = {
      from: `"Contact Us" <${email}>`, // User's email in the "from" field
      to: 'prajwal.gautam2727@gmail.com', // Replace with the owner's email
      subject: `Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 10px; max-width: 600px; margin: auto;">
          <div style="text-align: center;">
            <img src="cid:logo" alt="Company Logo" style="width: 100px; margin-bottom: 20px;" />
            <h2 style="color: #333;">Contact Form Submission</h2>
          </div>
          <div style="background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p style="padding: 10px; background: #f1f1f1; border-radius: 5px;">${message}</p>
          </div>
          <p style="margin-top: 20px; text-align: center; font-size: 12px; color: #aaa;">
            This is an automated message from your website. Please do not reply.
          </p>
        </div>
      `,
      attachments: [
        {
          filename: 'home.jpg',
          path: './public/images/home.jpg', // Replace with the actual path to your logo
          cid: 'logo', // Same as the "cid" in the HTML img tag
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully!' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Email sending error:', error); // Log the error for debugging
    return new Response(
      JSON.stringify({ success: false, message: 'Failed to send email.', error }),
      { status: 500 }
    );
  }
}
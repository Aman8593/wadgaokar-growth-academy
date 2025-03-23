"use client"
import { Form, Input } from "antd";
import "../styles/Contact.scss";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_no: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const notifySuccess = () => {
    console.log("Entered success func toast");
    toast.success("Message sent");
  };

  const notifyError = () => {
    toast.error("Failed to send message");
  };

  const handleChange = (name, value) => {
    // const { name, value } = event.target;
    console.log({ name, value });
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    // event.preventDefault();
    setLoading(true);
    const emailJsUrl = "https://api.emailjs.com/api/v1.0/email/send";
    const emailData = {
      service_id: "service_h5r8inp",
      template_id: "template_krzx3nn",
      user_id: "gmYL4P1zgaLRZnNL0",
      template_params: {
        to_name: "Ram",
        user_name: formData.name,
        user_email: formData.email,
        phone_no: formData.phone_no,
        message: formData.message,
      },
    };
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const response = await axios.post(emailJsUrl, emailData);
      console.log(response.data);
      // change to response.ok
      if (response.status === 200) {
        notifySuccess();
        setFormData({
          name: "",
          email: "",
          phone_no: "",
          message: "",
        });
      }
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Request aborted due to timeout");
      }
      notifyError();
    } finally {
      setLoading(false);
      clearTimeout(timeoutId);
    }
  };
  return (

    <div className="contact-container">
      {/* Left Side: Background Image + Contact Info */}
      <div className="contact-left">
        <div className="overlay">
          <h1 className="contact-heading">Get in Touch</h1>
          <div className="contact-info">
            <div className="info-item">
              <svg
                viewBox="0 0 21 21"
                fill="currentColor"
                height="1.5rem"
                width="1.5rem"
              >
                <g
                  fill="none"
                  fillRule="evenodd"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(4 2)"
                >
                  <path d="M6.5 16.54l.631-.711c.716-.82 1.36-1.598 1.933-2.338l.473-.624c1.975-2.661 2.963-4.773 2.963-6.334C12.5 3.201 9.814.5 6.5.5s-6 2.701-6 6.033c0 1.561.988 3.673 2.963 6.334l.473.624a54.84 54.84 0 002.564 3.05z" />
                  <path d="M9 6.5 A2.5 2.5 0 0 1 6.5 9 A2.5 2.5 0 0 1 4 6.5 A2.5 2.5 0 0 1 9 6.5 z" />
                </g>
              </svg>

              <p>Location: Golibar Square Near Dorlikar Hospital, Nagpur</p>
            </div>
            <div className="info-item">
              <svg fill="none" viewBox="0 0 24 24" height="1.5rem" width="1.5rem">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3.01 5.838a1 1 0 011-1H20a1 1 0 011 1v11.324a2 2 0 01-2 2H5a2 2 0 01-2-2v-11c0-.048.003-.094.01-.14v-.184zM5 8.062v9.1h14v-9.1l-4.879 4.879a3 3 0 01-4.242 0L5 8.06zm1.572-1.256h10.856l-4.72 4.72a1 1 0 01-1.415 0l-4.72-4.72z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Email: ramwadgaonkar1@gmail.com</p>
            </div>
            <div className="info-item">
              <svg fill="none" viewBox="0 0 24 24" height="1.5rem" width="1.5rem">
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M3.01 5.838a1 1 0 011-1H20a1 1 0 011 1v11.324a2 2 0 01-2 2H5a2 2 0 01-2-2v-11c0-.048.003-.094.01-.14v-.184zM5 8.062v9.1h14v-9.1l-4.879 4.879a3 3 0 01-4.242 0L5 8.06zm1.572-1.256h10.856l-4.72 4.72a1 1 0 01-1.415 0l-4.72-4.72z"
                  clipRule="evenodd"
                />
              </svg>
              <p>Email: amanwadgaonkar8593@gmail.com</p>
            </div>
            <div className="info-item">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1.5rem"
                width="1.5rem"
              >
                <path d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.46 405.46 0 01-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 00-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9 0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9 6.5 0 12.8-.5 19.2-1.6 132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4zm-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9 295.7 611l119.8 120 .9.9 21.6-8a481.29 481.29 0 00285.7-285.8l8-21.6-120.8-120.7 110.8-110.9 104.5 104.5c10.8 10.8 15.8 26 13.3 40.8z" />
              </svg>
              <p>Phone: +91 9370980349</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="contact-right">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2 className="form-heading">Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="input-field"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone_no">Phone Number</label>
            <input
              id="phone_no"
              type="text"
              placeholder="Your Phone Number"
              value={formData.phone_no}
              onChange={(e) => handleChange("phone_no", e.target.value)}
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              className="input-field"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;

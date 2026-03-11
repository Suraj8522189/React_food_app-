import React from "react";
import "../styles/Contact.css";
import Header from "./layouts/Header";
import Layout from "./layouts/layout";

function Contact() {
  return (
    <Layout>
    <div className="contact-container">
    
      <h2>Contact Us</h2>
      <p>Have questions about your food order? Send us a message!</p>

      <div className="contact-content">

        <div className="contact-info">
          <h3>Our Contact Details</h3>
          <p>📍 Yamunanagar, Haryana</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 support@foodapp.com</p>
        </div>

        <form className="contact-form">

          <label>Name</label>
          <input type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea placeholder="Write your message"></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </div>
    </Layout>
  );
}

export default Contact;
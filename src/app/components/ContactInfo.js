import React from "react";
import { Form } from "react-bootstrap";
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

const ContactInfo = ({ handleChange }) => {
  return (
    <div className={`d-flex flex-column align-items-center ${ptSans.className}`}>
      <h2>Contact Info</h2>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Email"
          onChange={handleChange("email")}
          name="email"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Phone Number"
          onChange={handleChange("phone_number")}
          name="phone_number"
        />
      </Form.Group>
    </div>
  );
};

export default ContactInfo;

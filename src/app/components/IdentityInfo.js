import React from "react";
import { Form } from "react-bootstrap";

const ContactInfo = ({ handleChange }) => {
  return (
    <div className="thm_consultmultiform">
      {/* <h2>Personal Info</h2> */}
      <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Your Name
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Phone/ WhatsApp
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Email
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
      {/* <Form.Group className="w-75 mt-4">
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
      </Form.Group> */}
    </div>
  );
};

export default ContactInfo;

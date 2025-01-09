import React from "react";
import { Form } from "react-bootstrap";

const PersonalInfo = ({ handleChange }) => {
  return (
    <div className="thm_consultmultiform">
      {/* <h2>Project Info</h2> */}
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Project Description
        </label>
        <textarea
          rows="6"
          className="form-control"
          id="exampleInputPassword1"
        />
        <div id="emailHelp" className="form-text">
          Short brief about your project and goals you want to achieve
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Project Status
        </label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Ideation
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            Early Stage
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            Beta Version
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Project Category
        </label>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label class="form-check-label" for="flexCheckChecked">
            UI/ UX Research & Design
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Website Development & Maintenance
          </label>
        </div>

        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label class="form-check-label" for="flexCheckChecked">
            Search Engine Optimization
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
          />
          <label class="form-check-label" for="flexCheckChecked">
            Social Media Campaign
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          What kind of help or insights do you need?
        </label>
        <textarea
          rows="6"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>

      {/* <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="First Name"
          onChange={handleChzange("first_name")}
          name="first_name"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="Last Name"
          onChange={handleChange("last_name")}
          name="last_name"
        />
      </Form.Group>
      <Form.Group className="w-75 mt-4">
        <Form.Control
          placeholder="First Name"
          as="select"
          onChange={handleChange("gender")}
          name="gender"
        >
          <option>Male</option>
          <option>Female</option>
        </Form.Control>
      </Form.Group> */}
    </div>
  );
};

export default PersonalInfo;

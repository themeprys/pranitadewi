"use client";
import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import LocationInfo from "./LocationInfo";
import ProjectInfo from "./ProjectInfo";
import IdentityInfo from "./IdentityInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { Form } from "react-bootstrap";

const MultiForm = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    phone_number: "",
    city: "",
    state: "",
  });

  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 2) {
      setStep(step + 1);
    } else if (step === 2) {
      console.log(values);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="thm_formconsult">
      <div>
        {step > 1 ? (
          <div class="thm_backbutton">
            <button className="btn" onClick={prevStep}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </button>
          </div>
        ) : null}
        {/* <div class="d-grid gap-2">
          <button className="btn btn-primary" onClick={nextStep}>
            {step === 2 ? "Submit" : "Continue"}{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div> */}
      </div>
      {
        {
          1: <ProjectInfo handleChange={handleChange} />,
          2: <IdentityInfo handleChange={handleChange} />,
          // 3: <LocationInfo handleChange={handleChange} />,
        }[step]
      }
      <div>
        {/* {step > 1 ? (
          <div class="d-grid gap-2">
            <button className="btn" onClick={prevStep}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </button>
          </div>
        ) : null} */}
        <div class="d-grid gap-2">
          <button className="btn btn-primary" onClick={nextStep}>
            {step === 2 ? "Submit" : "Continue"}{" "}
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MultiForm;

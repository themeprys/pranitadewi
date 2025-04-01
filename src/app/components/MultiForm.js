"use client";
import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import ContactInfo from "./ContactInfo";
import LocationInfo from "./LocationInfo";
import ProjectInfo from "./ProjectInfo";
import IdentityInfo from "./IdentityInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { PT_Sans } from 'next/font/google';

const ptSans = PT_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

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
    <div className={`thm_formconsult ${ptSans.className}`}>
      <div>
        {step > 1 ? (
          <div class="thm_backbutton">
            <button className="btn" onClick={prevStep}>
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </button>
          </div>
        ) : null}
      </div>
      {
        {
          1: <ProjectInfo handleChange={handleChange} />,
          2: <IdentityInfo handleChange={handleChange} />,
        }[step]
      }
      <div>
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

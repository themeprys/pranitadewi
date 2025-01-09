import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Lato } from "next/font/google";
import Skills from "./Skills";
import MultiForm from "./MultiForm";

const lato = Lato({ subsets: ["latin"], weight: ["700"],display: "swap" });

function Leads() {
  return (
    <section className="thm_leads mt-md-5">
      <div className="row g-5">
        <div className="col-12 col-md-5 mt-2">
          <Image
            alt="Priyono Santosa"
            width={500}
            height={500}
            src="/consult.svg"
            className="img-fluid"
          />
          <Skills />
        </div>
        <div className="col-12 col-md-7 mt-3 mt-md-5">
          <h1 className={`${lato.className}`}>
            Do you have projects to share and kickstarting soon?
          </h1>
          <p>
            Fill this form to get my perspectives and insights as a free
            consultation for your digital campaign success before launch to
            public.
          </p>
<MultiForm />
          {/* <form className="thm_formconsult">
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
            <div class="d-grid gap-2">
              <button class="btn btn-primary" type="button">
                Continue <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </section>
  );
}

export default Leads;

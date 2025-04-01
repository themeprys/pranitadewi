import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  display: "swap",
  weight: ['400', '700'],
});

function Intro() {
  return (
    <div className={`row g-5 ${lato.className}`}>
      <div className="col-md-6">
        <h2 className="thm_introheading">
          <FontAwesomeIcon icon={faDashboard} /> Startup <span className="text-body-secondary">Projects</span>
        </h2>
        <p>
          Various product development, digital campaign and bootstrap business
          that I&apos;ve involved in past 7 years
        </p>
        <ul className="list-unstyled ps-0">
          <li>
            <a className="icon-link mb-1" href="/">
              Alun App - 2023
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/">
              Mondiblanc - 2021
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/">
              People Reunite - 2019
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/">
              PosBeritaKota - ß2017
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/">
              Ripstore Asia - 2014
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/">
              Jakartabeat - 2010
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-6">
        <h2 className="thm_introheading">
          <FontAwesomeIcon icon={faBriefcase} /> Personal <span className="text-body-secondary">Works</span>
        </h2>
        <p>
          Read more detailed instructions and documentation on using or
          contributing to Bootstrap.
        </p>
        <ul className="list-unstyled ps-0">
          <li>
            <a className="icon-link mb-1" href="/">
              The Tales of The Urban Misfits
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/">
              a Zeke and The Popo Story
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/">
              Wondergel Reunion
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/">
              SRM Bands
            </a>
          </li>
          <li>
            <a className="icon-link mb-1" href="/">
              Kredo Puisi untuk Sutardji
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Intro;

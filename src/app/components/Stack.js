import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  display: "swap",
  weight: ['400', '700'],
});

function Stack() {
  return (
    <section className={`py-5 ${lato.className}`}>
      <div className="container">
        <h2 className="thm_introheading">
          <FontAwesomeIcon icon={faDashboard} /> Tech <span className="text-body-secondary">Stack</span>
        </h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Frontend</h5>
                <p className="card-text">
                  React, Next.js, TypeScript, Tailwind CSS, Bootstrap
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Backend</h5>
                <p className="card-text">
                  Node.js, Express, Python, Django, PostgreSQL, MongoDB
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">DevOps</h5>
                <p className="card-text">
                  Docker, Kubernetes, AWS, CI/CD, Git, Jenkins
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;

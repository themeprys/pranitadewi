import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard } from "@fortawesome/free-solid-svg-icons";

function Stack() {
  return (
    <section className="thm_feature mt-5 mb-3">
      <div className="row featurette">
        <div className="col order-md-2">
        <h2 className="thm_introheading">
          <FontAwesomeIcon icon={faDashboard} /> Selected <span className="text-body-secondary">Portfolio</span>
        </h2>
          <p>
          I help local musicians, bloggers, startups, companies and non-profit organization to write and code digital campaign that works
          </p>

        </div>
        {/* <div className="col-md-3 order-md-1">
            <Image src="/porto.jpeg"
            width="500"
            height="500"
            className="img-fluid"
            alt="Priyono Santosa"
          />
        </div> */}
      </div>
    </section>
  );
}

export default Stack;

import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

function Billing() {
  return (
    <section id="billing" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5] "
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient"></div>
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient"></div>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoices
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam sit. Diam quis enim lobortis scelerisque
          fermentum dui faucibus in ornare. Nunc aliquet bibendum enim facilisis
          gravida neque convallis a cras.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="apple"
            className="mr-5 w-[128px] h-[42px] object-contain cursor-pointer "
          />
          <img
            src={google}
            alt="google"
            className="w-[128px] h-[42px] object-contain cursor-pointer "
          />
        </div>
      </div>
    </section>
  );
}

export default Billing;

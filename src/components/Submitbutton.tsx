import React, { useState, Fragment } from "react";
import Options from "./Options";

function Submitbutton(props: any) {
  function setsubmit(): void {
    props.setSubmitted(true);
  }

  return (
    <Fragment>
      <button
        className="bg-green hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl m-20 ml-1001"
        onClick={setsubmit}
      >
        Submit
      </button>
    </Fragment>
  );
}

export default Submitbutton;

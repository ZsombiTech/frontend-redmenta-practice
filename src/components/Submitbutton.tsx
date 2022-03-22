import React, { useState, Fragment } from "react";
import Options from "./Options";

function Submitbutton(props: any) {
  function setsubmit(): void {
    if (!props.submitted) {
      props.setSubmitted(true);
    } else {
      props.setSubmitted(false);
      props.setRefresh(true);
    }
  }

  return (
    <Fragment>
      <button
        className={
          !props.submitted
            ? "bg-green hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl m-20 ml-1001"
            : "bg-red hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl m-20 ml-1001"
        }
        onClick={setsubmit}
      >
        {!props.submitted ? "Submit" : "Try Again"}
      </button>
    </Fragment>
  );
}

export default Submitbutton;

import React, { Fragment } from "react";

function MainTitle(props: any) {
  let text: string = "Welcome to Super Quiz";
  if (props.submitted) {
    text = "Correct answers";
  }

  return (
    <Fragment>
      <h1 className="mt-10 text-2xl text-center font-bold  text-gray-900 sm:text-3xl sm:truncate">
        {text}
      </h1>
      <h1 className="mt-3 text-2xl text-center font-bold  text-gray-900 sm:text-3xl sm:truncate">
        {props.submitted && ` ${props.length} / ${props.gansw}`}
      </h1>
    </Fragment>
  );
}

export default MainTitle;

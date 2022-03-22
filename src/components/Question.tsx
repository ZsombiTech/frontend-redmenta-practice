import React, { useState, Fragment, useEffect } from 'react';
import Options from "./Options";

function Question(props: any) {
  return (
      <Fragment>
          <div className="bg-graylight p-20 pt-10 m-20 rounded-2xl">
              <h2 className="text-2xl text-black-900 sm:truncate ml-5">{props.data.instruction}</h2>
              <Options submitted={props.submitted} elso={props.elso} data={props.data} token={props.token} setGansw={props.setGansw} gansw={props.gansw}/>
        </div>
    </Fragment>
  );
}

export default Question;

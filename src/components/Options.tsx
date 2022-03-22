import React, { useState, Fragment, useEffect } from "react";
import axios from "axios";
import "../styles/App.css";

function Options(props: any) {
  const [clicked, setClicked] = useState<boolean>();
  const [clicked2, setClicked2] = useState<boolean>();
  const [clicked3, setClicked3] = useState<boolean>();
  const [clicked4, setClicked4] = useState<boolean>();
  const [absolute, setAbsolute] = useState<number>();

  const options: any = JSON.parse(props.data.options);

  const config = {
    headers: { Authorization: props.token },
  };

  const bodyparameter = {
    key: absolute,
  };

  let data = "";

  function increasegansw() {
    if (data == "good") {
      props.setGansw((prev: number) => prev + 1);
    }
  }
  useEffect(() => {
    if (props.submitted) {
      axios
        .post(
          `https://frozen-hamlet-99845.herokuapp.com/tasks/${props.data.place}`,
          bodyparameter,
          config
        )
        .then((response) => (data = response.data))
        .then(increasegansw)
        .catch(function (error) {
          console.log(error);
        });
    }

    if (!props.submitted) {
      window.scrollTo(0, 0);
      props.setGansw(0);
      setClicked(false);
      setClicked2(false);
      setClicked3(false);
      setClicked4(false);
    }
  }, [props.submitted]);

  function settrue(): void {
    setClicked(true);
    setClicked2(false);
    setClicked3(false);
    setClicked4(false);
    setAbsolute(1);
  }
  function settrue2(): void {
    setClicked(false);
    setClicked2(true);
    setClicked3(false);
    setClicked4(false);
    setAbsolute(2);
  }
  function settrue3(): void {
    setClicked(false);
    setClicked2(false);
    setClicked3(true);
    setClicked4(false);
    setAbsolute(3);
  }
  function settrue4(): void {
    setClicked(false);
    setClicked2(false);
    setClicked3(false);
    setClicked4(true);
    setAbsolute(4);
  }

  return (
    <Fragment>
      <div className="flex flex-row mt-7 flex-wrap ">
        {!props.submitted ? (
          <>
            {" "}
            <div className="m-5 " onClick={settrue}>
              <p className="text-white bold text-xl">
                <span
                  className={
                    clicked
                      ? "bg-blue p-4 rounded-xl border-graydarker border-2 mb-2"
                      : "bg-graydark p-4 rounded-xl border-graydarker border-2 mb-2 hoverdiv"
                  }
                >
                  {options["1"]}
                </span>
              </p>
            </div>
            <div className="m-5" onClick={settrue2}>
              <p className="text-white bold text-xl">
                <span
                  className={
                    clicked2
                      ? "bg-blue p-4 rounded-xl border-graydarker border-2 mb-2"
                      : "bg-graydark p-4 rounded-xl border-graydarker border-2 mb-2 hoverdiv"
                  }
                >
                  {options["2"]}
                </span>
              </p>
            </div>
            <div className="m-5" onClick={settrue3}>
              <p className="text-white bold text-xl">
                <span
                  className={
                    clicked3
                      ? "bg-blue p-4 rounded-xl border-graydarker border-2 mb-2"
                      : "bg-graydark ed p-4 rounded-xl border-graydarker border-2 mb-2 hoverdiv"
                  }
                >
                  {options["3"]}
                </span>
              </p>
            </div>
            <div className="m-5" onClick={settrue4}>
              <p className="text-white bold text-xl">
                <span
                  className={
                    clicked4
                      ? "bg-blue p-4 rounded-xl border-graydarker border-2 mb-2"
                      : "hoverdiv bg-graydark ed p-4 rounded-xl border-graydarker border-2 mb-2"
                  }
                >
                  {options["4"]}
                </span>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="m-5 ">
              <p className="text-white bold text-xl">
                <span
                  className={
                    props.data.ganswer == 1
                      ? "bg-green p-4 rounded-xl border-graydarker border-2 mb-2"
                      : clicked
                      ? "bg-red p-4 rounded-xl border-blue border-4 mb-2"
                      : "bg-red p-4 rounded-xl border-graydarker border-2 mb-2"
                  }
                >
                  {options["1"]}
                </span>
              </p>
            </div>
            <div className="m-5">
              <p className="text-white bold text-xl">
                <span
                  className={
                    props.data.ganswer == 2
                      ? "bg-green p-4 rounded-xl border-graydarker border-2 mb-2"
                      : clicked2
                      ? "bg-red p-4 rounded-xl border-blue border-4 mb-2"
                      : "bg-red p-4 rounded-xl border-graydarker border-2 mb-2"
                  }
                >
                  {options["2"]}
                </span>
              </p>
            </div>
            <div className="m-5">
              <p className="text-white bold text-xl">
                <span
                  className={
                    props.data.ganswer == 3
                      ? "bg-green p-4 rounded-xl border-graydarker border-2 mb-2"
                      : clicked3
                      ? "bg-red p-4 rounded-xl border-blue border-4 mb-2"
                      : "bg-red p-4 rounded-xl border-graydarker border-2 mb-2"
                  }
                >
                  {options["3"]}
                </span>
              </p>
            </div>
            <div className="m-5">
              <p className="text-white bold text-xl">
                <span
                  className={
                    props.data.ganswer == 4
                      ? "bg-green p-4 rounded-xl border-graydarker border-2 mb-2"
                      : clicked4
                      ? "bg-red p-4 rounded-xl border-blue  border-4 mb-2"
                      : "bg-red p-4 rounded-xl border-graydarker border-2 mb-2"
                  }
                >
                  {options["4"]}
                </span>
              </p>
            </div>
          </>
        )}
      </div>
    </Fragment>
  );
}

export default Options;

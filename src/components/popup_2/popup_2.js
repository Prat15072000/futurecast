import React, { useState } from "react";
import { Fragment } from "react";
import { Cookies, useCookies } from "react-cookie";
import "./popup_2.scss";

const Popup2 = ({ use }) => {
  const [modalstate, setmodalstate] = useState(true);

  // const [cookies, setCookie] = useCookies(["po"]);

  const handleShow = () => {
    setmodalstate(!modalstate);
    // setCookie("shown", true, { path: "/" });
  };

  return (
    <div
      className={
        "modal modal2 fade" + (modalstate ? " show d-block" : " d-none")
      }
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog " role="document">
        <div class="modal-content ">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">
              Thank You!
            </h4>
            <span
              type="button"
              class="close"
              data-dismiss="modal"
              onClick={handleShow}
            >
              &times;
            </span>
          </div>
          <div class="modal-body">
            <p>Successfully Submitted.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup2;

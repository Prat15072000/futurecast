import React, { useState } from "react";
import { Fragment } from "react";
import { Cookies, useCookies } from "react-cookie";
import "./popup.scss";

const Popup = ({ use }) => {
  const [modalstate, setmodalstate] = useState(true);

  const [cookies, setCookie] = useCookies(["po"]);

  const handleShow = () => {
    setmodalstate(!modalstate);
    setCookie("shown", true, { path: "/" });
  };

  return modalstate === true ? (
    <div className="modal1 modal fade show " tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content ">
          <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">
              <Fragment>Hey!</Fragment>
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
            <p>For better experience use the desktop verion of our site</p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Fragment />
  );
};

export default Popup;

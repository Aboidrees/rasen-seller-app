import React from "react";

export default function RightMenu() {
  return (
    <div className="right-sidebar">
      <div className="slimscrollright">
        <div className="rpanel-title">
          Service Panel
          <span>
            <i className="ti-close right-side-toggle"></i>
          </span>
        </div>
        <div className="r-panel-body">
          <ul id="themecolors" className="m-t-20">
            <li>
              <b>With Light sidebar</b>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="default"
                className="default-theme"
              >
                1
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="green"
                className="green-theme"
              >
                2
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="red"
                className="red-theme"
              >
                3
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="blue"
                className="blue-theme working"
              >
                4
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="purple"
                className="purple-theme"
              >
                5
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="megna"
                className="megna-theme"
              >
                6
              </a>
            </li>
            <li className="d-block m-t-30">
              <b>With Dark sidebar</b>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="default-dark"
                className="default-dark-theme"
              >
                7
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="green-dark"
                className="green-dark-theme"
              >
                8
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="red-dark"
                className="red-dark-theme"
              >
                9
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="blue-dark"
                className="blue-dark-theme"
              >
                10
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="purple-dark"
                className="purple-dark-theme"
              >
                11
              </a>
            </li>
            <li>
              <a
                href="javascript:void(0)"
                data-theme="megna-dark"
                className="megna-dark-theme"
              >
                12
              </a>
            </li>
          </ul>
          <ul className="m-t-20 chatonline">
            <li>
              <b>Chat option</b>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img
                  src="assets/images/users/1.jpg"
                  alt="user-img"
                  className="img-circle"
                />
                <span>
                  Varun Dhavan
                  <small className="text-success">online</small>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img
                  src="assets/images/users/2.jpg"
                  alt="user-img"
                  className="img-circle"
                />
                <span>
                  Genelia Deshmukh
                  <small className="text-warning">Away</small>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img
                  src="assets/images/users/3.jpg"
                  alt="user-img"
                  className="img-circle"
                />
                <span>
                  Ritesh Deshmukh
                  <small className="text-danger">Busy</small>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img
                  src="assets/images/users/4.jpg"
                  alt="user-img"
                  className="img-circle"
                />
                <span>
                  Arijit Sinh
                  <small className="text-muted">Offline</small>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img
                  src="assets/images/users/5.jpg"
                  alt="user-img"
                  className="img-circle"
                />
                <span>
                  Govinda Star
                  <small className="text-success">online</small>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img
                  src="assets/images/users/6.jpg"
                  alt="user-img"
                  className="img-circle"
                />
                <span>
                  John Abraham<small className="text-success">online</small>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img
                  src="assets/images/users/7.jpg"
                  alt="user-img"
                  className="img-circle"
                />
                <span>
                  Hritik Roshan<small className="text-success">online</small>
                </span>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <img
                  src="assets/images/users/8.jpg"
                  alt="user-img"
                  className="img-circle"
                />
                <span>
                  Pwandeep rajan
                  <small className="text-success">online</small>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

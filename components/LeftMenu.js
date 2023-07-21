import React from "react";
import Link from "next/link";
import Icon from "@mdi/react";
import {
  mdiGauge,
  mdiPackageVariantClosed,
  mdiPackageVariant,
  mdiLaptop,
} from "@mdi/js";

export default function LeftMenu() {
  return (
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar">
        {/* User profile */}
        <div
          className="user-profile"
          style={{
            backgroundImage: `url("assets/images/background/user-info.jpg")`,
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* User profile image */}
          <div className="profile-img">
            <img src="assets/images/users/profile.png" alt="user" />
          </div>
          {/* User profile text*/}
          <div className="profile-text">
            <a
              href="#"
              className="dropdown-toggle u-dropdown"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Markarn Doe
            </a>
            <div className="dropdown-menu animated flipInY">
              <a href="#" className="dropdown-item">
                <i className="ti-user"></i> My Profile
              </a>
              <a href="#" className="dropdown-item">
                <i className="ti-wallet"></i> My Balance
              </a>
              <a href="#" className="dropdown-item">
                <i className="ti-email"></i> Inbox
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                <i className="ti-settings"></i> Account Setting
              </a>
              <div className="dropdown-divider"></div>
              <a href="login.html" className="dropdown-item">
                <i className="fa fa-power-off"></i> Logout
              </a>
            </div>
          </div>
        </div>
        {/* End User profile text*/}
        {/* Sidebar navigation*/}
        <nav className="sidebar-nav">
          <ul id="sidebarnav">
            <li>
              <Link href="/" className="waves-effect waves-dark">
                <Icon path={mdiGauge} size={1} />
                <span className="hide-menu">Home</span>
              </Link>
            </li>
            <li>
              <Link className="waves-effect waves-dark" href="/products">
                <Icon path={mdiPackageVariantClosed} size={1} />
                <span className="hide-menu">Products</span>
              </Link>
            </li>
            <li>
              <a className="waves-effect waves-dark" href="/orders">
                <Icon path={mdiPackageVariant} size={1} />
                <span className="hide-menu">Orders</span>
              </a>
            </li>
            <li>
              <Link
                className="has-arrow waves-effect waves-dark"
                href="#"
                aria-expanded="false"
              >
                <Icon path={mdiLaptop} size={1} />
                <span className="hide-menu">Root</span>
              </Link>
              <ul className="collapse">
                <li>
                  <Link href="#">Sub 1</Link>
                </li>
                <li>
                  <Link href="#">Sub 2</Link>
                </li>
                <li>
                  <Link href="#">Sub 3</Link>
                </li>
                <li>
                  <Link href="#">Sub 4</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        {/* End Sidebar navigation */}
      </div>
      {/* End Sidebar scroll*/}
      {/* Bottom points*/}
      <div className="sidebar-footer">
        {/* item*/}
        <a href="" className="link" data-toggle="tooltip" title="Settings">
          <i className="ti-settings"></i>
        </a>
        {/* item*/}
        <a href="" className="link" data-toggle="tooltip" title="Email">
          <i className="mdi mdi-gmail"></i>
        </a>
        {/* item*/}
        <a href="" className="link" data-toggle="tooltip" title="Logout">
          <i className="mdi mdi-power"></i>
        </a>
      </div>
      {/* End Bottom points*/}
    </aside>
  );
}

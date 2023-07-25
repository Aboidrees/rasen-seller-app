"use client";
import React from "react";
import Link from "next/link";
import LeftMenuLink from "./LeftMenuLink";

import {
  mdiGauge,
  mdiPackageVariantClosed,
  mdiPackageVariant,
  mdiLaptop,
  mdiPower,
} from "@mdi/js";
import Icon from "@mdi/react";

export default function LeftMenu() {
  return (
    <aside className="left-sidebar">
      {/* Sidebar scroll*/}
      <div className="scroll-sidebar">
        {/* User profile */}
        <div
          className="user-profile"
          style={{
            backgroundImage: `url(/assets/images/background/user-info.jpg)`,
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* User profile image */}
          <div className="profile-img">
            <img src="/assets/images/users/profile.png" alt="user" />
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
            <LeftMenuLink href="/dashboard" iconPath={mdiGauge} title="Home" />
            <LeftMenuLink
              href="/dashboard/products"
              iconPath={mdiPackageVariantClosed}
              title="Products"
            />
            <LeftMenuLink
              href="/dashboard/orders"
              iconPath={mdiPackageVariant}
              title="Orders"
            />
            <LeftMenuLink href="#" iconPath={mdiLaptop} title="Root">
              <ul className="collapse">
                <LeftMenuLink href="#" title="Sub 1" />

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
            </LeftMenuLink>
          </ul>
        </nav>
      </div>
      <div className="sidebar-footer">
        <Link
          href=""
          className="link float-left"
          data-toggle="tooltip"
          title="Settings"
        >
          <i className="ti-settings"></i>
        </Link>
        {/* <Link href="" className="link" data-toggle="tooltip" title="Email">
          <Icon path={mdiGmail} size={1} />
        </Link> */}
        <Link
          href="/login"
          className="link float-right"
          data-toggle="tooltip"
          title="Logout"
        >
          <Icon path={mdiPower} size={1} />
        </Link>
      </div>
    </aside>
  );
}

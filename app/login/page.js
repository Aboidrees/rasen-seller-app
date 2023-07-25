"use client";

import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";
import CheckBox from "@components/CheckBox";

export default function RegisterScreen() {
  return (
    <>
      <form className="form-horizontal form-material" id="loginform">
        <a href="#" className="text-center db">
          <Image
            src="/assets/images/logo-icon.png"
            width={160}
            height={160}
            alt="Home"
          />
        </a>
        <h3 className="box-title m-b-20">Sign In</h3>
        <div className="form-group m-t-40">
          <div className="col-xs-12">
            <input
              className="form-control"
              type="text"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-xs-12">
            <input
              className="form-control"
              type="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <div className="d-flex no-block align-items-center">
            <div className="checkbox checkbox-primary p-t-0">
              <CheckBox label="Remember me" />
            </div>
            <div className="ml-auto">
              <a
                href="javascript:void(0)"
                id="to-recover"
                className="text-muted"
              >
                <i className="fa fa-lock m-r-5"></i> Forgot pwd?
              </a>
            </div>
          </div>
        </div>
        <div className="form-group text-center m-t-20">
          <div className="col-xs-12">
            <Link
              href="/dashboard"
              className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light"
              type="submit"
            >
              Log In
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
            <div className="social">
              <button
                className="btn btn-facebook mr-3"
                data-toggle="tooltip"
                title=""
                data-original-title="Login with Facebook"
                style={{ width: 45, height: 45 }}
              >
                <i aria-hidden="true" className="fab fa-facebook-f"></i>
              </button>
              <button
                className="btn btn-googleplus"
                data-toggle="tooltip"
                title=""
                data-original-title="Login with Google"
                style={{ width: 45, height: 45 }}
              >
                <i aria-hidden="true" className="fab fa-google-plus-g"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="form-group m-b-0">
          <div className="col-sm-12 text-center">
            Don&rsquo;t have an account?
            <Link href="/register" className="text-primary m-l-5">
              <b>Sign Up</b>
            </Link>
          </div>
        </div>
      </form>
      <form className="form-horizontal" id="recoverform">
        <div className="form-group ">
          <div className="col-xs-12">
            <h3>Recover Password</h3>
            <p className="text-muted">
              Enter your Email and instructions will be sent to you!
            </p>
          </div>
        </div>
        <div className="form-group ">
          <div className="col-xs-12">
            <input className="form-control" type="text" placeholder="Email" />
          </div>
        </div>
        <div className="form-group text-center m-t-20">
          <div className="col-xs-12">
            <button
              className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light"
              type="submit"
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

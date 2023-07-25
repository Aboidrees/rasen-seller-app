import React from "react";
import Link from "next/link";
import { Image } from "react-bootstrap";

export default function RegisterScreen() {
  return (
    <form className="form-horizontal form-material" id="loginform">
      <a href="#" className="text-center db">
        <Image
          src={"/assets/images/logo-icon.png"}
          width={160}
          height={160}
          alt="Home"
        />
      </a>
      <h3 className="box-title m-t-40 m-b-0">Register Now</h3>
      <small>Create your account and enjoy</small>
      <div className="form-group">
        <div className="col-xs-12">
          <input className="form-control" type="text" placeholder="Name" />
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-12">
          <input
            className="form-control"
            type="text"
            placeholder="Phone Number"
          />
        </div>
      </div>
      <div className="form-group ">
        <div className="col-xs-12">
          <input className="form-control" type="text" placeholder="Email" />
        </div>
      </div>
      <div className="form-group ">
        <div className="col-xs-12">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="col-xs-12">
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
          />
        </div>
      </div>
      <div className="form-group">
        <div className="">
          <div className="checkbox checkbox-success p-t-0">
            <input id="checkbox-signup" type="checkbox" />
            <label>
              I agree to all <a href="#">Terms</a>
            </label>
          </div>
        </div>
      </div>
      <div className="form-group text-center m-t-20">
        <div className="col-xs-12">
          <Link
            href="/store_details"
            className="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light"
          >
            Sign Up
          </Link>
        </div>
      </div>
      <div className="form-group m-b-0">
        <div className="col-sm-12 text-center">
          Already have an account?
          <Link href="/login" className="text-primary m-l-5">
            <b>Sign In</b>
          </Link>
        </div>
      </div>
    </form>
  );
}

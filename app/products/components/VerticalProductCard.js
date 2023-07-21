"use client";
import React from "react";
import Icon from "@mdi/react";
import { mdiBellRingOutline, mdiInfinity, mdiPlus } from "@mdi/js";

export default function VerticalProductCard({ product }) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src="assets/images/big/img1.jpg"
        alt="Card image cap"
      />
      <div
        style={{
          position: "absolute",
          left: "1rem",
          top: "1rem",
        }}
      >
        {!!product ? (
          <label className="icheck">
            <input type="checkbox" />
            <span className="icheck-default"></span>
          </label>
        ) : (
          <button
            className="btn btn-danger btn-circle p-0"
            style={{ height: 30 + "px", width: 30 + "px" }}
          >
            <i className="mdi mdi-close"></i>
          </button>
        )}
      </div>
      <div className="card-body">
        <div className="form-row">
          <div className="form-group col-12 mb-2">
            <input
              type="text"
              id="productNo"
              className="form-control"
              placeholder="product name"
            />
          </div>
          <div className="form-group col-12 mb-2">
            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
              <input
                type="text"
                className="form-control"
                placeholder="Price"
                data-bts-button-down-className="btn btn-secondary btn-outline"
                data-bts-button-up-className="btn btn-secondary btn-outline"
              />
              <span className="input-group-addon bootstrap-touchspin-postfix input-group-append">
                <span className="input-group-text">
                  <span style={{ width: "1.5rem", height: "1.5rem" }}>QR</span>

                </span>
              </span>
            </div>
          </div>
          <div className="form-group col-12 mb-2">
            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
              <input
                type="text"
                className="form-control"
                placeholder="Avail. quantity"
                data-bts-button-down-className="btn btn-secondary btn-outline"
                data-bts-button-up-className="btn btn-secondary btn-outline"
              />
              <span className="input-group-addon bootstrap-touchspin-postfix input-group-append">
                <span
                  className="input-group-text p-0"
                  title="Activate Inventory Notifications"
                >
                  <button
                    type="button"
                    className="btn btn-sm p-1 pr-2 pl-2"
                    data-toggle="modal"
                    data-target=".inventory-notifications-modal"
                  >
                    <Icon path={mdiBellRingOutline} size={0.8} />
                  </button>
                </span>
                <span className="input-group-text" title="Infinite Inventory">
                  <Icon path={mdiInfinity} size={0.8} />
                </span>
                <span className="input-group-text" title='Quantity Options'>
                  Options
                </span>
              </span>
            </div>
          </div>
          <div className="form-group col-12 mb-2">
            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
              <select
                className="form-control"
                id="educationDate"
                name="educationDate[]"
              >
                <option value="">Root Category A</option>
                <option value="">-- Sub Category 1</option>
                <option value="">-- Sub Category 2</option>
                <option value="">Root Category B</option>
                <option value="">-- Sub Category 3</option>
                <option value="">-- Sub Category 4</option>
              </select>
              <span className="input-group-addon bootstrap-touchspin-postfix input-group-append">
                <span className="input-group-text p-0" title="New category">
                  <button
                    type="button"
                    className="btn btn-sm p-1 pr-2 pl-2"
                    data-toggle="modal"
                    data-target=".new-category-modal"
                  >
                    <Icon path={mdiPlus} size={1} />
                  </button>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer p-0">
        <div className="btn-group d-block text-center">
          <button
            type="button"
            className="btn btn-lg p-1 pr-3 pl-3"
            title="Product Details"
            data-toggle="modal"
            data-target=".product-details-modal"
            style={{ boxShadow: "none" }}
          >
            <i className="mdi mdi-tune"></i>
          </button>
          <button
            type="button"
            className="btn dropdown-toggle p-1 pr-3 pl-3"
            title="More Actions"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            More
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-link"></i> Copy Link
            </a>
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-package-variant-closed"></i> Product Orders
            </a>
            <a className="dropdown-item" href="#">
              <i className="mdi mdi-star"></i> Ratings
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item text-danger" href="#">
              <i className="mdi mdi-delete"></i> Delete
            </a>
          </div>
        </div>
      </div>
      <div className="card-footer btn btn-primary p-0">
        <button type="button" className="btn btn-block text-white">
          Save
        </button>
      </div>
    </div>
  );
}

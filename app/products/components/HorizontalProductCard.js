import React from 'react'

import Icon from "@mdi/react";
import { mdiBellRingOutline, mdiInfinity, mdiPlus } from "@mdi/js";

export default function HorizontalProductCard({ product }) {

  return (
    <div className="card">
      <div className="card-body">


        <div className="row">

        </div>


        <div className="row">
          <div className="col-1 col-content-width">
            {product ? <label className="icheck">
              <input type="checkbox" />
              <span className="icheck-default"></span>
            </label> : <button
              className="btn btn-danger btn-circle p-0"
              style={{ height: 26 + "px", width: 26 + "px" }}
            >
              <i className="mdi mdi-close"></i>
            </button>}
          </div>
          <div className="col-2 col-content-width pl-0 pr-1">
            <img
              src="assets/images/big/img1.jpg"
              style={{ width: 92, aspectRatio: 1, objectFit: "cover", borderRadius: 5 }}

            />
          </div>
          <div className="col-8 pr-1 pl-1">
            <div className='row m-0'>
              <div className="form-group col-8 pr-1 pl-1 mb-2">
                <input
                  type="text"
                  id="productNo"
                  className="form-control"
                  placeholder="product name"
                />
              </div>
              <div className="form-group col-4 pr-1 pl-1 mb-2">
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
              <div className="form-group col-6 pr-1 pl-1 mb-0">
                <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Available quantity"
                    data-bts-button-down-className="btn btn-secondary btn-outline"
                    data-bts-button-up-className="btn btn-secondary btn-outline"
                  />
                  <span className="input-group-addon bootstrap-touchspin-postfix input-group-append">
                    <span
                      className="input-group-text"
                      title="New category"
                    >
                      <button
                        type="button"
                        className="btn btn-sm"
                        data-toggle="modal"
                        data-target=".inventory-notifications-modal"
                      >
                        <Icon path={mdiBellRingOutline} size={0.8} />
                      </button>
                    </span>
                    <span
                      className="input-group-text"
                      title="infinite inventory"
                    >
                      <Icon path={mdiInfinity} size={0.8} />
                    </span>
                    <span className="input-group-text" title='Quantity Options'>
                      Options
                    </span>
                  </span>
                </div>
                {/* <small className="form-control-feedback"> This is inline help</small> */}
              </div>
              <div className="form-group col-6 pr-1 pl-1 mb-0">
                {/* <label className="control-label">First Name</label> */}
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
                    <span
                      className="input-group-text"
                      title="New category"
                      data-toggle="modal"
                      data-target=".new-category-modal"

                    >
                      <Icon path={mdiPlus} size={1} />
                    </span>
                  </span>
                </div>
                {/* <small className="form-control-feedback"> This is inline help</small> */}
              </div>
            </div>
          </div>
          <div className="col-2 text-center">

            <div class="btn-group mb-2" style={{ width: "100%" }} role="group" aria-label="Button group with nested dropdown">
              <button
                type="button"
                className="btn btn-outline-primary no-shadow btn-block"
                data-toggle="modal"
                data-target=".product-details-modal"
              >
                <i className="mdi mdi-tune"></i>
              </button>
              <div class="btn-group btn-block mt-0" role="group">
                <button id="btnGroupDrop1" type="button" class="btn btn-outline-primary dropdown-toggle no-shadow" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  More
                </button>
                <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item text-danger" href="#">
                    <i className="mdi mdi-delete"></i> Delete
                  </a>
                </div>
              </div>
            </div>
            <button type="button" className="btn btn-primary btn-block ">
              Save
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

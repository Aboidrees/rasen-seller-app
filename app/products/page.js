import React from "react";
import VerticalProductCard from "./components/VerticalProductCard";

export default function ProductsPage() {
  return (
    <div className="fluid-container">
      <div className="row mb-4">
        <div className="col-10">
          <button type="button" className="btn btn-primary btn-rounded ">
            Add New Product <i className="mdi mdi-plus-circle "></i>
          </button>
        </div>
        <div className="col-2 text-right">
          <button className="btn">
            Filter <i className="mdi mdi-filter"></i>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <VerticalProductCard />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <div className="card">
            <div className="card-body p-0">
              <div className="row pt-0 pl-3 pb-3 pr-3">
                <div className="col p-0">
                  <button
                    className="btn btn-danger btn-circle p-0"
                    style={{ height: 26 + "px", width: 26 + "px" }}
                  >
                    <i className="mdi mdi-close"></i>
                  </button>
                </div>
                <div className="col p-0">
                  <label className="icheck">
                    <input type="checkbox" />
                    <span className="icheck-default"></span>
                  </label>
                </div>
              </div>
              <div className="row p-0 pr-3 pl-3 mb-2">
                <div className="col-12 p-0">
                  <img
                    src="assets/images/big/img1.jpg"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div className="col-9 pl-0 pr-0">
                  <div className="row m-0">
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        id="productNo"
                        className="form-control"
                        placeholder="product name"
                      />
                    </div>
                    <div className="form-group m-0">
                      <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Price"
                          data-bts-button-down-className="btn btn-secondary btn-outline"
                          data-bts-button-up-className="btn btn-secondary btn-outline"
                        />
                        <span className="input-group-addon bootstrap-touchspin-postfix input-group-append">
                          <span className="input-group-text">QR</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pr-0 mb-2">
                <div className="col-12">
                  <div className="form-group m-0">
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
                          className="input-group-text p-0"
                          title="New category"
                        >
                          <button
                            type="button"
                            className="btn btn-sm p-1 pr-2 pl-2"
                            data-toggle="modal"
                            data-target=".inventory-notifications-modal"
                          >
                            <i className="mdi mdi-bell-ring-outline"></i>
                          </button>
                        </span>
                        <span
                          className="input-group-text"
                          title="infinite inventory"
                        >
                          <i className="mdi mdi-infinity"></i>
                        </span>
                        <span className="input-group-text">
                          Quantity Options
                        </span>
                      </span>
                    </div>
                    {/* <small className="form-control-feedback"> This is inline help</small> */}
                  </div>
                </div>
              </div>
              <div className="row pr-0 mb-2">
                <div className="col-12">
                  <div className="form-group m-0">
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
                          className="input-group-text p-0"
                          title="New category"
                        >
                          <button
                            type="button"
                            className="btn btn-sm p-1 pr-2 pl-2"
                            data-toggle="modal"
                            data-target=".new-category-modal"
                          >
                            <i className="mdi mdi-plus"></i>
                          </button>
                        </span>
                      </span>
                    </div>
                    {/* <small className="form-control-feedback"> This is inline help</small> */}
                  </div>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-12 text-center p-0">
                  <div className="btn-group d-block">
                    <button
                      type="button"
                      className="btn btn-lg mr-3"
                      data-toggle="modal"
                      data-target=".product-details-modal"
                    >
                      <i className="mdi mdi-tune"></i>
                    </button>
                    <button
                      type="button"
                      className="btn dropdown-toggle ml-3"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      More
                    </button>
                    <div className="dropdown-menu">
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
              </div>
            </div>
            <div className="card-footer btn btn-primary p-0">
              <button type="button" className="btn btn-block text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

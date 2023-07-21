import React from "react";
import VerticalProductCard from "./components/VerticalProductCard";
import HorizontalProductCard from "./components/HorizontalProductCard";
import Icon from "@mdi/react";
import { mdiPlusCircle } from "@mdi/js";

export default function ProductsPage() {
  return (
    <div className="fluid-container">
      <div className="row mb-4">
        <div className="col-10">
          <button type="button" className="btn btn-primary btn-rounded text-white">
            Add New Product &nbsp;&nbsp;<Icon path={mdiPlusCircle} size={1} />
          </button>
        </div>
        <div className="col-2 text-right">
          <button className="btn">
            Filter <i className="mdi mdi-filter"></i>
          </button>
        </div>
      </div>


      <div className="row">
        <div className="col-12">
          <HorizontalProductCard />
        </div>
        <div className="col-12">
          <HorizontalProductCard product={true} />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12">
          <VerticalProductCard />
        </div>
        <div className="col-lg-3 col-md-4 col-sm-12">
          <VerticalProductCard product={true} />
        </div>
      </div>
    </div>
  );
}

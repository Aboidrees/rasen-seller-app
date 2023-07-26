import "@assets/plugins/dropzone-master/dist/dropzone.css";

import React from "react";
import VerticalProductCard from "./components/VerticalProductCard";
import HorizontalProductCard from "./components/HorizontalProductCard";
import Icon from "@mdi/react";
import { mdiPlusCircle } from "@mdi/js";
import { Col, Row } from "react-bootstrap";

export default function ProductsPage() {
  return (
    <div className="fluid-container">
      <Row className="mb-4">
        <Col xl={10}>
          <button
            type="button"
            className="btn btn-primary btn-rounded text-white"
          >
            Add New Product &nbsp;&nbsp;
            <Icon path={mdiPlusCircle} size={1} />
          </button>
        </Col>
        <Col xl={2} className="text-right">
          <button className="btn">
            Filter <i className="mdi mdi-filter"></i>
          </button>
        </Col>
      </Row>

      <Row>
        <Col xxl={2} xl={3} lg={4}>
          <VerticalProductCard product={false} />
        </Col>
        <Col xl={3} lg={4}>
          <VerticalProductCard product={true} />
        </Col>
        <Col xl={3} lg={4}>
          <VerticalProductCard product={true} />
        </Col>
        <Col xl={3} lg={4}>
          <VerticalProductCard product={true} />
        </Col>
      </Row>
      <Row>
        <Col>
          <HorizontalProductCard product={false} />
        </Col>
        <Col>
          <HorizontalProductCard product={true} />
        </Col>
      </Row>
    </div>
  );
}

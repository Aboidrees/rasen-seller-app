"use client";
import React from "react";
import Icon from "@mdi/react";
import { mdiFilter, mdiHumanEdit, mdiPlusCircle } from "@mdi/js";
import { Row, Col, Button, Table, Form, Badge, Card } from "react-bootstrap";
import ProductStatusCard from "./component/ProductStatusCard";
import CheckBox from "@components/CheckBox";
import Link from "next/link";

export default function Home() {
  return (
    <div className="fluid-container">
      <Row className="mb-4">
        <Col xl={10}>
          {/* <Button className="btn-rounded">
            New Order &nbsp;&nbsp;
            <Icon path={mdiPlusCircle} size={1} />
          </Button> */}
        </Col>
        <Col xl={2}>
          <span className="btn text-muted">
            Filter <Icon path={mdiFilter} size={1} />
          </span>
        </Col>
      </Row>
      <Row>
        <Col xl={3} md={3}>
          <ProductStatusCard />
        </Col>
        <Col xl={3} md={3}>
          <ProductStatusCard />
        </Col>
        <Col xl={3} md={3}>
          <ProductStatusCard />
        </Col>
        <Col xl={3} md={3}>
          <ProductStatusCard />
        </Col>
      </Row>

      <Card>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>
                  <CheckBox />
                </th>
                <th className="w-100" colSpan={3}>
                  <div className="float-left mt-3 font-weight-bold">Orders</div>
                  <Button
                    variant="outline-primary"
                    className="btn-rounded float-right"
                    title="ToDo"
                  >
                    <Icon path={mdiHumanEdit} size={1} className="mr-2" />
                    Fast Editing
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              <OrderRecord />
              <OrderRecord />
              <OrderRecord />
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}
function OrderRecord() {
  return (
    <tr>
      <td>
        <CheckBox />
      </td>
      <td>
        <Link href="/dashboard/orders/ORAH0215865486">
          <div>Full User Name </div>
          <div className="d-inline small text-muted">
            Order Number:{" "}
            <Badge className="p-1 text-white">#ORAH0215865486</Badge>
          </div>
          <div className="d-inline small text-muted ml-3">
            Order Status:{" "}
            <Badge className="p-1 text-white" bg="success">
              Delivered
            </Badge>
          </div>
        </Link>
      </td>
      <td>500 QR</td>
      <td className="text-right text-muted">Before 10 hours</td>
    </tr>
  );
}

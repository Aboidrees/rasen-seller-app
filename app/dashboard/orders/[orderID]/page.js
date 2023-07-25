"use client";
import React from "react";
import Icon from "@mdi/react";
import { Button, Card, Col, Row, Image, Table } from "react-bootstrap";
import {
  mdiCalendarMonth,
  mdiChevronRight,
  mdiEmailOutline,
  mdiExclamation,
  mdiFlagOutline,
  mdiMessageTextOutline,
  mdiPrinter,
  mdiTag,
  mdiWhatsapp,
} from "@mdi/js";
import Link from "next/link";

export default function OrderScreen({ params }) {
  console.log(params.orderID);
  return (
    <div className="fluid-container">
      <Row>
        <Col>
          <Card>
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Row className="text-center mb-3">
                <Col>
                  <Icon path={mdiTag} size={0.8} />
                  Order Number
                </Col>
                <Col>
                  <Icon path={mdiCalendarMonth} size={0.8} />
                  Order Date
                </Col>
                <Col xl-2>
                  <Icon path={mdiFlagOutline} size={0.8} />
                  Order Status
                </Col>
              </Row>
              <Row className="text-center">
                <Col>{params.orderID}</Col>
                <Col>Sunday 23 July 2023 | 08:05 AM</Col>
                <Col xl-2>
                  <Button variant="outline-primary" className="btn-rounded">
                    Shipped
                    <Icon path={mdiChevronRight} size={1} />
                  </Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card style={{ minHeight: 250 }}>
            <Card.Header>Client</Card.Header>
            <Card.Body>
              <Row>
                <Col style={{ maxWidth: "fit-content" }}>
                  <Image
                    roundedCircle
                    src="/assets/images/users/1.jpg"
                    height={55}
                    width={55}
                    alt="Client Name"
                  />
                </Col>
                <Col>
                  <div className="mb-2">Client Full Name</div>
                  <div className="mb-2">+974xxxxxxxx</div>
                  <div>
                    <Link
                      href="https://api.whatsapp.com/send/?phone={97400000000}&text&type=phone_number&app_absent=0##########"
                      className="mr-3"
                    >
                      <Icon path={mdiWhatsapp} size={0.8} />
                      WhatsApp
                    </Link>
                    <span className="mr-3">
                      <Icon path={mdiMessageTextOutline} size={0.8} /> SMS
                    </span>
                    <span className="mr-3">
                      <Icon path={mdiEmailOutline} size={0.8} /> Email
                    </span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ minHeight: 250 }}>
            <Card.Header>Shipping</Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ minHeight: 250 }}>
            <Card.Header>Payment</Card.Header>
            <Card.Body></Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Header>Ordered Products</Card.Header>
            <Card.Body>
              <Table bordered striped hover>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Item Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{ maxWidth: "fit-content" }}>
                          <Image
                            roundedCircle
                            src="/assets/images/background/socialbg.jpg"
                            height={55}
                            width={55}
                            alt="Client Name"
                          />
                        </Col>
                        <Col>
                          <div className="mb-2">
                            Product Name Product Name Product Name Product Name
                          </div>
                          <div className="mb-2">
                            <span className="small text-muted">
                              SKU: 348543539
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </td>
                    <td>3</td>
                    <td>20</td>
                    <td>60</td>
                  </tr>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{ maxWidth: "fit-content" }}>
                          <Image
                            roundedCircle
                            src="/assets/images/background/socialbg.jpg"
                            height={55}
                            width={55}
                            alt="Client Name"
                          />
                        </Col>
                        <Col>
                          <div className="mb-2">
                            Product Name Product Name Product Name Product Name
                          </div>
                          <div className="mb-2">
                            <span className="small text-muted">
                              SKU: 348543539
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </td>
                    <td>3</td>
                    <td>20 QR</td>
                    <td>60 QR</td>
                  </tr>
                  <tr>
                    <td>
                      <Row>
                        <Col style={{ maxWidth: "fit-content" }}>
                          <Image
                            roundedCircle
                            src="/assets/images/background/socialbg.jpg"
                            height={55}
                            width={55}
                            alt="Client Name"
                          />
                        </Col>
                        <Col>
                          <div className="mb-2">
                            Product Name Product Name Product Name Product Name
                          </div>
                          <div className="mb-2">
                            <span className="small text-muted">
                              SKU: 348543539
                            </span>
                          </div>
                        </Col>
                      </Row>
                    </td>
                    <td>3</td>
                    <td>20 QR</td>
                    <td>60 QR</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <div className="p-3">Cart Total</div>
                    </td>
                    <td>120 QR</td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <div className="p-3">Shipping fees</div>
                    </td>
                    <td>15 QR</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th colSpan={3}>Order total</th>
                    <th>135 QR</th>
                  </tr>
                </tfoot>
              </Table>
            </Card.Body>
            <Card.Footer className="text-center">
              <Button variant="outline-primary" className="btn-rounded">
                <Icon path={mdiPrinter} size={1} className="mr-2" />
                Print Invoice
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Header>Client Notes</Card.Header>
            <Card.Body className="pt-4 pb-4 ">
              <Card.Text>No Notes!</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <ul className="timeline">
                <li className="timeline">
                  <TimeLineRow />
                </li>
                <li className="timeline-inverted">
                  <TimeLineRow />
                </li>
                <li className="timeline">
                  <TimeLineRow />
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export const TimeLineRow = () => {
  return (
    <>
      <div className="timeline-badge primary">
        <Icon path={mdiExclamation} size={2} />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading clearfix">
          <h4 className="timeline-title d-inline ">Genelia</h4>
          <small className="text-muted float-right">11 hours ago</small>
        </div>
        <div className="timeline-body">Description</div>
      </div>
    </>
  );
};

"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

import Icon from "@mdi/react";
import {
  mdiBellRingOutline,
  mdiChevronDown,
  mdiClose,
  mdiDelete,
  mdiInfinity,
  mdiLink,
  mdiPackageVariantClosed,
  mdiPlus,
  mdiStar,
  mdiTune,
} from "@mdi/js";

import productPlaceholder from "@assets/images/big/img1.jpg";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    ref={ref}
    onClick={(e) => {
      e.preventDefault();

      console.log(e);
      onClick(e);
    }}
  >
    {children} <Icon path={mdiChevronDown} size={0.8} />
  </a>
));

CustomToggle.displayName = "Search";

export default function VerticalProductCard({ product }) {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <Card>
      <Image
        className="card-img-top"
        src={productPlaceholder}
        alt="Card image cap"
        sizes="100vw"
        height={300}
        style={{ aspectRatio: 1, objectFit: "cover" }}
      />
      <div style={{ position: "absolute", left: "1rem", top: "1rem" }}>
        {!!product ? (
          <label className="icheck">
            <input type="checkbox" />
            <span className="icheck-default"></span>
          </label>
        ) : (
          <Button variant="danger" className="btn-circle p-0">
            <Icon path={mdiClose} size={1} />
          </Button>
        )}
      </div>
      <Card.Body>
        <Row>
          <Form.Group className="col-12 mb-2">
            <Form.Control id="productNo" placeholder="Product Name" />
          </Form.Group>
          <Form.Group className="col-12 mb-2">
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Price"
                aria-label="Price"
                aria-describedby="price"
              />
              <InputGroup.Text className="input-group-append">
                QR
              </InputGroup.Text>
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Avail. Qty."
                aria-label="Avail. Qty."
                aria-describedby="Available Quantity"
              />
              <span className="input-group-addon bootstrap-touchspin-postfix input-group-append">
                <InputGroup.Text
                  title="Inventory Notifications"
                  onClick={toggleShow}
                >
                  <Icon path={mdiBellRingOutline} size={0.8} />
                </InputGroup.Text>
                <InputGroup.Text title="Infinite Inventory">
                  <Icon path={mdiInfinity} size={0.8} />
                </InputGroup.Text>
                <InputGroup.Text title="Variations Options">
                  Options
                </InputGroup.Text>
              </span>
            </InputGroup>
          </Form.Group>
          <Form.Group className="col-12 mb-2">
            <div className="input-group bootstrap-touchspin bootstrap-touchspin-injected">
              <Form.Select
                className="form-control"
                id="category"
                name="category"
              >
                <option value="">Root Category A</option>
                <option value="">-- Sub Category 1</option>
                <option value="">-- Sub Category 2</option>
                <option value="">Root Category B</option>
                <option value="">-- Sub Category 3</option>
                <option value="">-- Sub Category 4</option>
              </Form.Select>
              <span className="input-group-addon bootstrap-touchspin-postfix input-group-append">
                <InputGroup.Text title="New category">
                  <Icon path={mdiPlus} size={1} />
                </InputGroup.Text>
              </span>
            </div>
          </Form.Group>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col className="text-right">
            <Icon path={mdiTune} size={1} />
          </Col>
          <Col className="text-left">
            <Dropdown className="no-shadow no-border">
              <Dropdown.Toggle as={CustomToggle}>More</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Icon path={mdiLink} size={1} /> Copy Link
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Icon path={mdiPackageVariantClosed} size={1} /> Product
                  Orders
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                  <Icon path={mdiStar} size={1} /> Ratings
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className="text-danger">
                  <Icon path={mdiDelete} size={1} /> Delete
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Card.Footer>
      <Card.Footer className="btn btn-primary btn-block">Save</Card.Footer>

      <Modal backdrop="static" keyboard={false} show={show}>
        <Modal.Header>
          <Modal.Title>Inventory Notifications</Modal.Title>
          <Button variant="danger" size="sm" className=" btn-circle p-0">
            <Icon path={mdiClose} size={1} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form.Group className="col-12 mb-2">
              <label for="notification-limit">
                Notify me when quantity exceeds
              </label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Price"
                  aria-label="Price"
                  aria-describedby="price"
                />
                <span class="input-group-addon bootstrap-touchspin-postfix input-group-append">
                  <InputGroup.Text className="input-group-append">
                    Unit
                  </InputGroup.Text>
                </span>
              </InputGroup>
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={toggleShow}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

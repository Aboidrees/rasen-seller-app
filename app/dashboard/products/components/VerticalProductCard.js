"use client";
import React, { useState } from "react";
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
  mdiContentSave,
  mdiCrop,
  mdiDelete,
  mdiDeleteEmpty,
  mdiInfinity,
  mdiLink,
  mdiPackageVariantClosed,
  mdiPlus,
  mdiStar,
  mdiTune,
} from "@mdi/js";
import { Image, ModalBody } from "react-bootstrap";
import Script from "next/script";
import CheckBox from "@components/CheckBox";

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
  const [inventoryNotifications, setInventoryNotifications] = useState(false);
  const [mediaUploadModal, setMediaUpload] = useState(false);

  return (
    <Card>
      <Image
        className="card-img-top"
        src="/assets/images/big/img1.jpg"
        alt="Card image cap"
        sizes="100vw"
        height={300}
        style={{ aspectRatio: 1, objectFit: "cover" }}
        onClick={() => setMediaUpload(true)}
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
            <InputGroup>
              <Form.Control
                placeholder="Price"
                aria-label="Price"
                aria-describedby="price"
              />
              <InputGroup.Text className="input-group-append">
                QR
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
          <Form.Group className="col-12 mb-2">
            <InputGroup>
              <Form.Control
                placeholder="Avail. Qty."
                aria-label="Avail. Qty."
                aria-describedby="Available Quantity"
              />
              <span className="input-group-addon bootstrap-touchspin-postfix input-group-append">
                <InputGroup.Text
                  title="Inventory Notifications"
                  onClick={() => setInventoryNotifications(true)}
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

      <Modal backdrop="static" keyboard={false} show={inventoryNotifications}>
        <Modal.Header>
          <Modal.Title>Inventory Notifications</Modal.Title>
          <Button
            variant="danger"
            size="sm"
            className=" btn-circle p-0"
            onClick={() => setInventoryNotifications(false)}
          >
            <Icon path={mdiClose} size={1} />
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Form.Group className="col-12 mb-2">
              <label>Notify me when quantity exceeds</label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Quantity"
                  aria-label="Quantity"
                  aria-describedby="Quantity"
                />
                <span className="input-group-addon bootstrap-touchspin-postfix input-group-append">
                  <InputGroup.Text className="input-group-append">
                    Unit
                  </InputGroup.Text>
                </span>
              </InputGroup>
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={() => setInventoryNotifications(false)}
          >
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>

      <Modal
        backdrop="static"
        size="xl"
        keyboard={false}
        show={mediaUploadModal}
      >
        <Script src="/assets/plugins/dropzone-master/dist/dropzone.js" />

        <Modal.Header>
          <Modal.Title>Upload Product Images & Videos</Modal.Title>
          <Button
            variant="danger"
            size="sm"
            className=" btn-circle p-0"
            onClick={() => setMediaUpload(false)}
          >
            <Icon path={mdiClose} size={1} />
          </Button>
        </Modal.Header>
        <ModalBody>
          <Form.Group className="mb-3">
            <form action="#" className="dropzone">
              <div className="fallback">
                <input name="file" type="file" multiple />
              </div>
            </form>
          </Form.Group>

          <Form.Group className="mb-3">
            <label>Youtube Video Link</label>

            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Add the link here"
                aria-label="Youtube Link"
                aria-describedby="Youtube Link"
              />

              <span className="input-group-addon bootstrap-touchspin-postfix input-group-append">
                <InputGroup.Text className="input-group-append btn-primary no-shadow no-border">
                  <Icon path={mdiContentSave} size={1} />
                </InputGroup.Text>
              </span>
            </InputGroup>
          </Form.Group>
          <Row>
            <Col>
              <MediaCard />
            </Col>
            <Col>
              <MediaCard />
            </Col>
            <Col>
              <MediaCard />
            </Col>
            <Col>
              <MediaCard />
            </Col>
          </Row>
        </ModalBody>
        <Modal.Footer>
          <Button variant="danger" onClick={() => setMediaUpload(false)}>
            Close
          </Button>
          <Button variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
    </Card>
  );
}

function MediaCard() {
  return (
    <Card>
      <Image
        className="card-img-top img-responsive"
        style={{ aspectRatio: 0.8 }}
        src="/assets/images/big/img1.jpg"
        width={100}
        alt=""
      />

      <div
        className="position-absolute"
        style={{
          width: "100%",
          top: 0,
          left: 0,
          padding: 15,
          background: "linear-gradient(#00000080, #00000000)",
        }}
      >
        <CheckBox label={<span className="text-white">Default Image</span>} />
      </div>

      <div
        className="position-absolute w-100 text-center"
        style={{ bottom: 0 }}
      >
        <Button
          variant="primary"
          size="sm"
          className="btn-rounded text-white m-1 mb-2"
          style={{ aspectRatio: 1 }}
        >
          <Icon path={mdiCrop} size={0.7} />
        </Button>
        <Button
          variant="danger"
          size="sm"
          className="btn-rounded text-white m-1 mb-2"
          style={{ aspectRatio: 1 }}
        >
          <Icon path={mdiDeleteEmpty} size={0.7} />
        </Button>
      </div>
    </Card>
  );
}

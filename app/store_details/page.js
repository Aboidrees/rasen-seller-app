"use client";
import React from "react";
import { Button, Form, Col, Row, ButtonGroup } from "react-bootstrap";
import { useStoreDetailsContext } from "./context";
import Icon from "@mdi/react";
import {
  mdiChevronDoubleLeft,
  mdiChevronDoubleRight,
  mdiFloppy,
} from "@mdi/js";

const totalSteps = 4;

export default function StoreDetailsPage() {
  const { step } = useStoreDetailsContext();

  switch (step) {
    case 1:
      return <StoreNameAndDetails />;
    case 2:
      return <StoreAddress />;
    case 3:
      return <StoreLicense />;
    case 4:
      return <StoreLogoAndBackground />;
  }
}

const StoreNameAndDetails = () => {
  const { step } = useStoreDetailsContext();

  return (
    <Form>
      <h3 className="box-title m-b-20">Store Details</h3>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Store Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Store Details" as="textarea" rows={4} />
      </Form.Group>

      <WizardButtons onNext={() => {}} />
    </Form>
  );
};

const StoreAddress = () => {
  const { step } = useStoreDetailsContext();

  return (
    <Form>
      <h3 className="box-title m-b-20">Store Details</h3>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Store Address" as="textarea" rows={4} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control disabled={true} placeholder="Geo Location" />
      </Form.Group>
      <WizardButtons onNext={() => {}} />
    </Form>
  );
};

const StoreLicense = () => {
  const { step } = useStoreDetailsContext();

  return (
    <Form>
      <h3 className="box-title m-b-20">Store Details</h3>
      <Form.Group className="mb-3">
        <Form.Control
          type="file"
          placeholder="Store License"
          title="Upload store license as PDF"
        />
      </Form.Group>
      <WizardButtons onNext={() => {}} />
    </Form>
  );
};

const StoreLogoAndBackground = () => {
  const { step } = useStoreDetailsContext();

  return (
    <Form>
      <h3 className="box-title m-b-20">Store Details</h3>
      <Form.Group className="mb-3">
        <Form.Control
          type="file"
          placeholder="Store Logo"
          title="Upload store logo"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control
          type="file"
          placeholder="Store Background"
          title="Upload store background"
        />
      </Form.Group>
      <WizardButtons onNext={() => {}} />
    </Form>
  );
};

const WizardButtons = ({ onNext }) => {
  const { step, plusStep, minusStep } = useStoreDetailsContext();

  return (
    <ButtonGroup className="d-blok w-100">
      {step > 1 && (
        <Button
          className=" text-uppercase waves-effect waves-light"
          onClick={() => minusStep()}
        >
          <Icon path={mdiChevronDoubleLeft} size={1} />
          Back
        </Button>
      )}

      {step < totalSteps && (
        <Button
          className=" text-uppercase waves-effect waves-light"
          onClick={() => {
            onNext();
            plusStep();
          }}
        >
          Next
          <Icon path={mdiChevronDoubleRight} size={1} />
        </Button>
      )}

      {step === totalSteps && (
        <Button
          className=" text-uppercase waves-effect waves-light"
          onClick={() => onNext()}
        >
          Finish
          <Icon path={mdiFloppy} size={1} />
        </Button>
      )}
    </ButtonGroup>
  );
};

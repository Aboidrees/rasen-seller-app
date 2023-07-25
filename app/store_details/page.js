"use client";
import React from "react";
import Icon from "@mdi/react";
import { useRouter } from "next/navigation";
import { Button, Form, ButtonGroup, Image } from "react-bootstrap";
import {
  mdiChevronDoubleLeft,
  mdiChevronDoubleRight,
  mdiFloppy,
} from "@mdi/js";

import { useStoreDetailsContext } from "./context";

const totalSteps = 4;

export default function StoreDetailsPage() {
  const { step } = useStoreDetailsContext();

  return (
    <Form style={{ minHeight: "100vh" }}>
      <a href="#" className="text-center db">
        <Image
          src="/assets/images/logo-icon.png"
          width={160}
          height={160}
          alt="Home"
        />
      </a>
      <h3 className="box-title m-b-20">Store Details</h3>

      {step === 1 && <StoreNameAndDetails />}
      {step === 2 && <StoreAddress />}
      {step === 3 && <StoreLicense />}
      {step === 4 && <StoreLogoAndBackground />}
    </Form>
  );
}

const StoreNameAndDetails = () => {
  const { step } = useStoreDetailsContext();

  return (
    <>
      <h6 className="box-title m-b-20">Store Name & Description</h6>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Store Name" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Store Details" as="textarea" rows={4} />
      </Form.Group>

      <WizardButtons onNext={() => {}} />
    </>
  );
};

const StoreAddress = () => {
  const { step } = useStoreDetailsContext();

  return (
    <>
      <h6 className="box-title m-b-20">Store Address & Geo Location</h6>
      <Form.Group className="mb-3">
        <Form.Control placeholder="Store Address" as="textarea" rows={4} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control disabled={true} placeholder="Geo Location" />
      </Form.Group>
      <WizardButtons onNext={() => {}} />
    </>
  );
};

const StoreLicense = () => {
  const { step } = useStoreDetailsContext();

  return (
    <>
      <h6 className="box-title m-b-20">Store License Document</h6>
      <Form.Group className="mb-3">
        <Form.Control
          type="file"
          placeholder="Store License"
          title="Upload store license as PDF"
        />
      </Form.Group>
      <WizardButtons onNext={() => {}} />
    </>
  );
};

const StoreLogoAndBackground = () => {
  const { step } = useStoreDetailsContext();
  const router = useRouter();

  return (
    <>
      <h6 className="box-title m-b-20">Store Logo & Background</h6>
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
      <WizardButtons onNext={() => router.push("/dashboard")} />
    </>
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

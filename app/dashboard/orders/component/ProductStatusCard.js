"use client";
import React from "react";
import Icon from "@mdi/react";
import { mdiWatchVibrate } from "@mdi/js";
import { Card } from "react-bootstrap";

export default function ProductStatusCard() {
  return (
    <Card>
      <Card.Title className="p-3 pb-1 m-0">
        <Icon path={mdiWatchVibrate} size={1.5} className="text-primary" />
      </Card.Title>
      <Card.Body>
        <Card.Title style={{ fontSize: "1rem" }} className="float-left">
          Total Visit
        </Card.Title>
        <Card.Title
          className="float-right font-weight-bold"
          style={{ fontSize: "1rem" }}
        >
          19653
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

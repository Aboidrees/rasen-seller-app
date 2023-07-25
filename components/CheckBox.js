import React from "react";

export default function CheckBox({ label = null, checked = false }) {
  return (
    <label className="icheck">
      {!!label && <span className="ml-2">{label}</span>}
      <input type="checkbox" defaultChecked={checked} />
      <span className="icheck-default"></span>
    </label>
  );
}

import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Primary", () => <Button label="Primary" type="primary" />)
  .add("Primary2", () => <Button label="Primary2" type="primary2" />)
  .add("Primary3", () => <Button label="Primary3" type="primary3" />)
  .add("Primary4", () => <Button label="Primary4" type="primary4" />)
  .add("BPrimary5", () => (
    <Button label="BPrimary5" type="Bprimary5 button-large" />
  ))
  .add("BPrimary6", () => (
    <Button label="BPrimary6" type="Bprimary6 button-large" />
  ))
  .add("BPrimary7", () => (
    <Button label="BPrimary7" type="Bprimary7 button-large" />
  ))

  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Danger2", () => <Button label="Danger2" type="danger2" />)
  .add("Danger3", () => <Button label="Danger3" type="danger3" />)
  .add("Danger4", () => <Button label="Danger4" type="danger4" />)
  .add("BDanger5", () => (
    <Button label="BDanger5" type="Bdanger5 button-large" />
  ))
  .add("BDanger6", () => (
    <Button label="BDanger6" type="Bdanger6 button-large" />
  ))
  .add("BDanger7", () => (
    <Button label="BDanger7" type="Bdanger7 button-large" />
  ))

  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Warning2", () => <Button label="Warning2" type="warning2" />)
  .add("Warning3", () => <Button label="Warning3" type="warning3" />)
  .add("Warning3", () => <Button label="Warning3" type="warning3" />)
  .add("Warning4", () => <Button label="Warning4" type="warning4" />)
  .add("BWarning5", () => (
    <Button label="BWarning5" type="Bwarning5 button-large" />
  ))
  .add("BWarning6", () => (
    <Button label="BWarning6" type="Bwarning6 button-large" />
  ))
  .add("BWarning7", () => (
    <Button label="BWarning7" type="Bwarning7 button-large" />
  ))

  .add("Success", () => <Button label="Success" type="success" />)
  .add("Success2", () => <Button label="Success2" type="success2" />)
  .add("Success3", () => <Button label="Success3" type="success3" />)
  .add("Success4", () => <Button label="Success4" type="success4" />)
  .add("BSuccess5", () => (
    <Button label="BSuccess5" type="Bsuccess5 button-large" />
  ))
  .add("BSuccess6", () => (
    <Button label="BSuccess6" type="Bsuccess6 button-large" />
  ))
  .add("BSuccess7", () => (
    <Button label="BSuccess7" type="Bsuccess7 button-large" />
  ))

  .add("Default", () => <Button label="Default" type="default" />)
  .add("Default2", () => <Button label="Default2" type="default2" />)
  .add("Default3", () => <Button label="Default3" type="default3" />)
  .add("Default4", () => <Button label="Default4" type="default4" />)
  .add("BDefault5", () => (
    <Button label="BDefault5" type="Bdefault5 button-large" />
  ))
  .add("BDefault6", () => (
    <Button label="BDefault6" type="Bdefault6 button-large" />
  ))
  .add("BDefault7", () => (
    <Button label="BDefault7" type="Bdefault7 button-large" />
  ));

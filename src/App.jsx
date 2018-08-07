import React, { Component } from "react";
import "./App.css";
import { ButtonGroup } from "./component/ButtonGroup";

class App extends Component {
  render() {
    let models = [
      {
        id: "detail",
        // label: "Detail",
        icon: "far fa-eye",
        iconPos: "left",
        disabled: false,
        className: "",
        tooltip: "Detail",
        tooltipPos: "top",
        onClick: item => {
          alert("Detail: " + item.name);
        }
      },
      {
        id: "edit",
        label: "Edit",
        icon: "far fa-edit",
        iconPos: "left",
        className: "ui-button-warning",
        disabled: false,
        tooltip: "Edit",
        tooltipPos: "left",
        onClick: item => {
          alert("Edit: " + item.name);
        }
      },
      {
        id: "delete",
        label: "Delete",
        icon: "far fa-trash-alt",
        iconPos: "right",
        className: "ui-button-danger",
        disabled: false,
        tooltip: "Delete",
        tooltipPos: "right",
        onClick: item => {
          alert("Delete: " + item.name);
        }
      }
    ];
    let items = { name: "abc" };
    return (
      <div>
        <h2>hello</h2>
        <ButtonGroup model={models} item={items} />
      </div>
    );
  }
}

export default App;

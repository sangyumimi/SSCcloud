import React, { Component } from "react";
import "./App.css";

class App extends Component {
  objList = [
    {
      User:
        "IMSWest\\welsh (Welsh, Armand -- Application Dev Cnslt, AVP, Irvine)",
      Manager: "Smith,Eric",
      Contact: [
        "AWelsh@statestreet.com",
        "P: 949-932-1415",
        "C: 9851-990-0882",
        "F:949-809-1148"
      ],
      Department: "Development (Technology)",
      Company: "State Street IMS Irvine"
    },
    {
      User: "Ye, Xinyu",
      Manager: "Smith,Eric",
      Contact: [
        "AWelsh@statestreet.com",
        "P: 949-932-1415",
        "C: 9851-990-0882",
        "F: 949-809-1148"
      ],
      Department: "Development (Technology)",
      Company: "State Street IMS Irvine"
    }
  ];

  renderListItem(item, index) {
    let array = [];
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        let element = item[key];
        if (element.constructor === Array) {
          element = element.map(value => {
            return <div className="value">{value}&nbsp;</div>;
          });
        } else {
          element = <div className="value">{element}&nbsp;</div>;
        }
        array.push(<div className="key">{key + ":"}&nbsp;</div>);
        array.push(element);
      }
    }
    return (
      <div className="box" key={index}>
        {array}
      </div>
    );
  }

  render() {
    let list = this.objList.map((value, index) => {
      return this.renderListItem(value, index);
    });
    return <div style={{ width: "50%" }}>{list}</div>;
  }
}

export default App;

import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./ButtonGroup.css";
import { Button } from "primereact/components/button/Button";
import { Tooltip } from "primereact/components/tooltip/Tooltip";

export class ButtonGroup extends Component {
  static defaultProps = {
    id: null,
    model: null,
    style: null,
    className: null
  };

  static propTypes = {
    id: PropTypes.string,
    model: PropTypes.array,
    style: PropTypes.object,
    className: PropTypes.string
  };

  constructor(props) {
    super();
    this.state = {
      columnDirection: false,
      tooltipTitle: "",
      tooltipPosition: "bottom"
    };
    this.onTooltipRender = this.onTooltipRender.bind(this);
  }

  onTooltipRender(e) {
    const attributes = e.target.attributes;
    let tooltip = attributes.datatooltip.value;
    let tooltipPos = attributes.datatooltippos.value;
    this.setState({
      tooltipTitle: tooltip,
      tooltipPosition: tooltipPos
    });
  }

  renderButtons() {
    if (this.props.model) {
      return this.props.model.map((item, index) => {
        return (
          <Button
            key={item.id ? item.id : item.label ? item.label : index}
            id={item.id}
            label={item.label}
            onClick={() => item.onClick(this.props.item)}
            icon={item.icon}
            iconPos={item.iconPos}
            disabled={item.disabled}
            className={item.className}
            style={item.style}
            datatooltip={item.tooltip}
            datatooltippos={item.tooltipPos}
          />
        );
      });
    } else {
      return null;
    }
  }

  render() {
    const className = classNames("ims-button-group", this.props.className);

    let style = {
      flexDirection: this.state.columnDirection ? "column" : "row"
    };
    Object.assign(style, this.props.style);

    const buttons = this.renderButtons();

    return (
      <div id={this.props.id} className={className} style={style}>
        <Tooltip
          for={"button"}
          title={this.state.tooltipTitle}
          tooltipPosition={this.state.tooltipPosition}
          onBeforeShow={this.onTooltipRender}
        />
        {buttons}
      </div>
    );
  }
}

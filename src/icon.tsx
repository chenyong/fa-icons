import * as React from "react";

import { cx } from "emotion";
import { IFaIconProps } from "../lib/fa-icons";

export default class FaIcon extends React.Component<IFaIconProps, any> {
  render() {
    const { name, className, style, size, fixedWidth, pullLeft, spin, onClick } = this.props;
    let classNames = "fa";
    classNames += " fa-" + name;

    if (size) {
      classNames += " fa-" + size;
    }

    if (fixedWidth) {
      classNames += " fa-fw";
    }

    if (pullLeft) {
      classNames += " fa-pull-left";
    }

    if (spin) {
      classNames += " fa-spin";
    }

    classNames = className ? cx(classNames, className) : classNames;

    return <i style={style} className={classNames} aria-hidden="true" onClick={onClick} />;
  }
}

import { FC } from "react";
import clx from "classnames";

import { useStyles } from "./style";
const CatFullView: FC<{ className: string }> = (props) => {
  const classes = useStyles();
  return (
    <div className={clx(classes.fullView, props.className)}>
      {props.children}
    </div>
  );
};

export default CatFullView;

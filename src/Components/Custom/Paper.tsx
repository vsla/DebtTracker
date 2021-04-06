import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import MaterialPaper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

interface Props {
  children: React.ReactNode;
}

export default function Paper({ children }: Props) {
  const classes = useStyles();

  return <MaterialPaper elevation={3}>{children}</MaterialPaper>;
}

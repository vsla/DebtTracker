import React from "react";
import {
  createStyles,
  Theme,
  withStyles,
  WithStyles,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import MaterialDialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { CircularProgress } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

interface DialogProps {
  children: React.ReactNode;
  handleClose: () => void;
  open: boolean;
  fullWidth: boolean;
  maxWidth: false | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  title: String;
  actionButton?: {
    hasActionButton: boolean;
    titleActionButton: String;
    onClick: () => void;
    loading?: boolean;
  };
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function Dialog({
  children,
  open,
  handleClose,
  title,
  fullWidth,
  maxWidth,
  actionButton = {
    hasActionButton: false,
    titleActionButton: "",
    onClick: () => {},
    loading: false,
  },
}: DialogProps) {
  const {
    hasActionButton,
    titleActionButton,
    onClick: onClickAction,
    loading,
  } = actionButton;
  return (
    <MaterialDialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onClose={() => {
        handleClose();
      }}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        {title}
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
      <DialogActions>
        {hasActionButton && !loading && (
          <Button autoFocus onClick={onClickAction} color="primary">
            {titleActionButton}
          </Button>
        )}
         {hasActionButton && loading && (
         <CircularProgress color='primary'/>
        )}
      </DialogActions>
    </MaterialDialog>
  );
}

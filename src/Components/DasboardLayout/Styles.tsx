import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      border: 0,
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },

    toolbar: theme.mixins.toolbar,

    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },

    drawerPaper: {
      border: 0,
      width: drawerWidth,
    },

    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default useStyles;

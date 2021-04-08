import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "block",
    },
    drawer: {
      border: 0,
      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },

    toolbar: theme.mixins.toolbar,

    appBar: {
      // background: theme.palette.background.default,
      [theme.breakpoints.up("md")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
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
      [theme.breakpoints.up("md")]: {
        marginLeft: 240,
      },
    },
    backButton: {
      marginBottom: theme.spacing(2),
    },
    rootContent: {},
  })
);

export default useStyles;

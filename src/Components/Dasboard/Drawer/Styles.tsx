import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
    },
    toolbar: {
      ...theme.mixins.toolbar,
      display: "flex",
      flexDirection: "row",
      alignItems: "ceter",
      justifyContent: "center",
      padding: 8,
      position:'relative',
      boxShadow:
        "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      "&:after": {
        content: "''",
        width: 2,
        height: '60%',
        backgroundColor: theme.palette.primary.main,
        top: '20%',
        right: 0,
        position:'absolute',

      },
      // background: theme.palette.background.default,
    },
    mainIcon: {
      height: 60,
    },

    drawerContent: {
      background: theme.palette.primary.dark,
      display: "flex",
      flexGrow: 1,
      // borderRadius: "10px 10px 0px 0px ",
    },
    list: {
      color: theme.palette.primary.contrastText,
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      paddingTop: 20,
    },
    rootItem: {
      background: theme.palette.primary.dark,
      paddingLeft: 4,
      marginBottom: 8,
      "&:hover": {
        background: "white",
      },
    },

    actualItem: {
      background: "white",
    },

    listItem: {
      background: theme.palette.primary.dark,
      "&:hover": {
        background: theme.palette.primary.dark,
      },
    },

    icon: {
      color: theme.palette.primary.contrastText,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

export default useStyles;

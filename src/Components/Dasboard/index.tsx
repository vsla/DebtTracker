import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";

import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { useTheme } from "@material-ui/core/styles";

import useStyles from "./Styles";
import DrawerContent from "./Drawer";
import { Button } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router";

interface Props {
  children: JSX.Element;
  type: "Débitos";
  title: String;
  back?: {
    showBackButton?: boolean;
    backTitle?: String;
    to: string;
  };
}

export default function DashboardLayout({
  children,
  type,
  title,
  back = { showBackButton: false, to: "" },
}: Props) {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { showBackButton, backTitle, to } = back;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleBack = () => history.push(to);

  const handleClickMenu = (actualClick: string): void => {};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={1}
        color="secondary"
        className={classes.appBar}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>

      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden xlUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerContent handleClickMenu={handleClickMenu} />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerContent handleClickMenu={handleClickMenu} />
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {showBackButton && (
          <div className={classes.backButton}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ArrowBack />}
              onClick={handleBack}
            >
              {backTitle}
            </Button>
          </div>
        )}

        <div className={classes.rootContent}>{children}</div>
      </main>
    </div>
  );
}

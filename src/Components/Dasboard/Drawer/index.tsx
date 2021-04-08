import React from "react";

import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import List from "@material-ui/core/List";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SettingsIcon from "@material-ui/icons/Settings";

import classNames from "classnames";

import useStyles from "./Styles";
import { Home } from "@material-ui/icons";

interface Props {
  handleClickMenu(text: string): void;
}

interface Item {
  text: string;
  Icon: React.ElementType;
  actualRoute: Boolean;
  index: number;
}

export default function DrawerContent({ handleClickMenu }: Props) {
  const classes = useStyles();

  const ListComponent = ({
    text,
    Icon,
    actualRoute,
  }: Item): React.ReactNode => {
    return (
      <div
        className={classNames(classes.rootItem, {
          [classes.actualItem]: actualRoute,
        })}
        key={text}
      >
        <ListItem
          button
          key={text}
          className={classes.listItem}
          onClick={() => handleClickMenu(text)}
        >
          <ListItemIcon>
            <Icon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.toolbar}>
        <img
          src="https://img.icons8.com/ios/452/debt.png"
          className={classes.mainIcon}
          alt="Logo do DebtTracker"
        />
      </div>
      <div className={classes.drawerContent}>
        <List className={classes.list}>
          {[
            { text: "Home", Icon: Home, actualRoute: false },
            { text: "Débitos", Icon: AttachMoneyIcon, actualRoute: true },
            { text: "Configurações", Icon: SettingsIcon, actualRoute: false },
          ].map(({ text, Icon, actualRoute }, index) => (
            <>{ListComponent({ text, Icon, actualRoute, index })}</>
          ))}
        </List>
      </div>
    </div>
  );
}

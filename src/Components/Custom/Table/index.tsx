import { makeStyles, Theme } from "@material-ui/core/styles";

import IconButton from "@material-ui/core/IconButton";
import MaterialTable from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import { RemoveRedEye } from "@material-ui/icons";
import { Button, createStyles, Toolbar } from "@material-ui/core";

import { UserInterface } from "Interfaces/UserIntefaces";
import { DebtInterface } from "Interfaces/DebInterface";

const useToolbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
    highlight:
      theme.palette.type === "light"
        ? {
            color: theme.palette.secondary.main,
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flexGrow: 1,
    },
  })
);

interface headerButton {
  showButton: boolean;
  onClick?: () => void;
  text: String;
}
interface EnhancedTableToolbarProps {
  headerAddButton?: headerButton;
}

const EnhancedTableToolbar = ({
  headerAddButton = {
    showButton: false,
    text: "",
  },
}: EnhancedTableToolbarProps) => {
  const classes = useToolbarStyles();
  const { showButton, text } = headerAddButton;

  return (
    <Toolbar className={classes.root}>
      <Typography
        className={classes.title}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        Veja o débito dos usuários
      </Typography>

      {showButton && (
        <Button variant="contained" color="primary" onClick={() => {}}>
          {text}
        </Button>
      )}
    </Toolbar>
  );
};

interface seeButton {
  showSeeButton: boolean;
  onClick?: (data: any) => {} | undefined;
}

interface rowInterface {
  row: UserInterface | DebtInterface;
  tableRowOrder: Array<string>;
  rowSeebutton: seeButton;
}

function Row({
  row,
  tableRowOrder,
  rowSeebutton: { showSeeButton, onClick },
}: rowInterface) {
  return (
    <TableRow>
      {showSeeButton && (
        <TableCell padding="checkbox">
          <IconButton
            aria-label="open debts"
            onClick={() => {
              if (onClick) {
                onClick(row);
              }
            }}
          >
            <RemoveRedEye />
          </IconButton>
        </TableCell>
      )}

      {tableRowOrder.map((rowKey) => (
        <TableCell component="th" scope="row" padding="default">
          {row[rowKey]}
        </TableCell>
      ))}
    </TableRow>
  );
}

interface Props {
  data: Array<DebtInterface | UserInterface>;
  tableHeaders: Array<String>;
  tableRowOrder: Array<string>;
  rowSeebutton: seeButton;
  headerAddButton?: headerButton;
}

export default function Table({
  data,
  tableHeaders,
  tableRowOrder,
  rowSeebutton,
  headerAddButton,
}: Props) {
  return (
    <TableContainer component={Paper}>
      <EnhancedTableToolbar headerAddButton={headerAddButton} />
      <MaterialTable aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell size="small" />
            {tableHeaders.map((tableHead) => (
              <TableCell>{tableHead}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row
              row={row}
              rowSeebutton={rowSeebutton}
              tableRowOrder={tableRowOrder}
            />
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  );
}

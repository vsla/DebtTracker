import { useState, useEffect } from "react";
import Table from "Components/Custom/Table";
import { Grid } from "@material-ui/core";

import { getAllUsers } from "Services/UserService";

import { UserInterface } from "Interfaces/UserIntefaces";
import { useHistory } from "react-router";

export default function UsersTable() {
  const [users, setUsers] = useState<Array<UserInterface>>([]);

  const history = useHistory();

  const getUsers = async () => {
    const { data } = await getAllUsers();

    setUsers(data);
  };

  const handleUserDebts = async (user: UserInterface | null) => {
    history.push('/');
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Table
          data={users}
          tableHeaders={["Nome"]}
          tableRowOrder={["username"]}
          headerAddButton={{
            showButton: true,
            text: "Nova dívida",
          }}
          rowSeebutton={{ onClick: handleUserDebts, showSeeButton: true }}
        />
      </Grid>
    </Grid>
  );
}

import { useState, useEffect } from "react";
import Table from "Components/Custom/Table";
import { Grid } from "@material-ui/core";

import { getAllUsers } from "Services/UserService";

import { UserInterface } from "Interfaces/UserIntefaces";
import { useHistory } from "react-router";

export default function UsersTable() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Array<UserInterface>>([]);

  const history = useHistory();

  const getUsers = async () => {
    setLoading(true);
    const { data } = await getAllUsers();

    setUsers(data);
    setLoading(false);
  };

  const handleUserDebts = async (user: UserInterface | null) => {
    history.push("/usuarios/" + user?.id);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Table
          tableTitle="Veja o débito dos usuários"
          loading={loading}
          emptyMessage="Nenhum usuário encontrado"
          data={users}
          tableHeaders={["Nome"]}
          tableRowOrder={["name"]}
          headerAddButton={{
            showButton: false,
          }}
          rowSeebutton={{ onClick: handleUserDebts, showSeeButton: true }}
        />
      </Grid>
    </Grid>
  );
}

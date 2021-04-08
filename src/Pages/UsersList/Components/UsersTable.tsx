import { useState, useEffect } from "react";
import Table from "Components/Custom/Table";
import { Grid } from "@material-ui/core";

import { getUsersWithDebt } from "Services/UserService";

import { UserInterface } from "Interfaces/UserIntefaces";
import { useHistory } from "react-router";
import DebtForm from "Pages/DebtForm";

import DebtModalDelete from "Pages/DebtModalDelete";

export default function UsersTable() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<Array<UserInterface>>([]);

  const [editForm, setEditForm] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [deleteObject, setDeleteObject] = useState<UserInterface | null>(null);

  const history = useHistory();

  const getUsers = async () => {
    setLoading(true);
    const data = await getUsersWithDebt();

    setUsers(data);
    setLoading(false);
  };

  const handleUserDebts = async (user: UserInterface | null) => {
    history.push("/usuarios/" + user?.id);
  };

  const handleNewDebt = () => {
    setEditForm(false);
    setOpen(true);
  };

  const handleDialogOpen = (reload: boolean): void => {
    setOpen(!open);
    if (reload) {
      getUsers();
    }
  };

  const handleDeleteOpen = (reload: boolean): void => {
    setOpenDelete(!openDelete);
    if (reload) {
      getUsers();
    }
  };

  const handleDelete = async (user: UserInterface | null) => {
    setDeleteObject(user);

    setOpenDelete(true);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <DebtForm
          edit={editForm}
          debt={null}
          open={open}
          setOpen={handleDialogOpen}
        />
        <DebtModalDelete
          open={openDelete}
          setOpen={handleDeleteOpen}
          deleteObject={deleteObject}
          deleteAllDebts
        />
        <Table
          tableTitle="Veja o débito dos usuários"
          loading={loading}
          emptyMessage="Nenhum usuário encontrado"
          data={users}
          tableHeaders={["Nome"]}
          tableRowOrder={["name"]}
          headerAddButton={{
            showButton: true,
            text: "Nova dívida",
            onClick: handleNewDebt,
          }}
          rowSeebutton={{ onClick: handleUserDebts, showSeeButton: true }}
          rowDeleteButton={{
            onClick: handleDelete,
            showDeleteButton: true,
          }}
        />
      </Grid>
    </Grid>
  );
}

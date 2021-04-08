/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Table from "Components/Custom/Table";
import { Grid } from "@material-ui/core";

import { getOneUser } from "Services/UserService";

import { DebtInterface } from "Interfaces/DebInterface";
import { useParams } from "react-router";
import { getUserDebts } from "Services/DebtService";
import DebtForm from "Pages/DebtForm";
import { Edit } from "@material-ui/icons";
import DebtModalDelete from "Pages/DebtModalDelete";

export default function UsersTable() {
  let { id } = useParams<{ id: string }>();
  const [userName, setUserName] = useState<String>("");
  const [userDebts, setUserDebts] = useState<Array<DebtInterface>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [debtSelected, setDebtSelected] = useState<DebtInterface | null>(null);
  const [editForm, setEditForm] = useState(false);
  const [open, setOpen] = useState<boolean>(false);

  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [deleteObject, setDeleteObject] = useState<DebtInterface | null>(null);

  const getUsersDebts = async () => {
    setLoading(true);
    const debts = await getUserDebts(id);
    console.log(debts);

    setUserDebts(debts);
    setLoading(false);
  };

  const getUserName = async () => {
    const response = await getOneUser(id);
    if (!response.error) {
      const { name } = response;
      setUserName(name);
    }
  };

  const handleSeeDebt = async (debt: DebtInterface | null) => {
    setDebtSelected(debt);
    setEditForm(true);
    setOpen(true);
  };

  const handleNewDebt = () => {
    setEditForm(false);
    setOpen(true);
  };

  const handleDialogOpen = (reload: boolean): void => {
    setOpen(!open);
    if (reload) {
      getUsersDebts();
    }
  };

  const handleDeleteOpen = (reload: boolean): void => {
    setOpenDelete(!openDelete);
    if (reload) {
      getUsersDebts();
    }
  };

  const handleDelete = async (debt: DebtInterface | null) => {
    setDeleteObject(debt);

    setOpenDelete(true);
  };

  useEffect(() => {
    getUserName();
    getUsersDebts();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <DebtForm
          edit={editForm}
          debt={debtSelected}
          open={open}
          setOpen={handleDialogOpen}
        />
        <DebtModalDelete
          open={openDelete}
          setOpen={handleDeleteOpen}
          deleteObject={deleteObject}
        />
        <Table
          tableTitle={"Débitos do usuário: " + userName}
          loading={loading}
          data={userDebts}
          tableHeaders={["id", "Motivo", "Valor", "Data de criação"]}
          tableRowOrder={["_id", "motivo", "valor", "criado"]}
          emptyMessage="O usuário não tem débitos"
          headerAddButton={{
            showButton: true,
            text: "Nova dívida",
            onClick: handleNewDebt,
          }}
          rowSeebutton={{
            onClick: handleSeeDebt,
            showSeeButton: true,
            Icon: <Edit />,
          }}
          rowDeleteButton={{
            onClick: handleDelete,
            showDeleteButton: true,
          }}
        />
      </Grid>
    </Grid>
  );
}

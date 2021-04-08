import { useState, useEffect } from "react";
import Table from "Components/Custom/Table";
import { Grid } from "@material-ui/core";

import { getAllUsers, getOneUser } from "Services/UserService";

import { DebtInterface } from "Interfaces/DebInterface";
import { useLocation, useParams } from "react-router";
import { getUserDebts } from "Services/DebtService";
// import UserDebts from "./UserDebts";

export default function UsersTable() {
  let { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState<String>("");
  const [userDebts, setUserDebts] = useState<Array<DebtInterface>>([]);
  const [debtSelected, setDebtSelected] = useState<DebtInterface | null>(null);

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
  };

  useEffect(() => {
    getUserName();
    getUsersDebts();
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        {/* <UserDebts userSelected={userSelected} handleUserDebts={handleUserDebts} /> */}
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
          }}
          rowSeebutton={{ onClick: handleSeeDebt, showSeeButton: true }}
        />
      </Grid>
    </Grid>
  );
}

import { useState, useEffect } from "react";
import Dialog from "Components/Custom/Dialog";
import Table from "Components/Custom/Table";

import { UserInterface } from "Interfaces/UserIntefaces";
import { getUserDebts } from "Services/DebtService";
import { DebtListInterface } from "Interfaces/DebInterface";

interface Props {
  userSelected: UserInterface | null;
  handleUserDebts: (data: null) => {};
}
export default function UserDebts({ userSelected, handleUserDebts }: Props) {
  const [debts, setDebts] = useState<DebtListInterface>([]);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
    handleUserDebts(null);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const getDebts = async ({ id }: UserInterface) => {
    const data = await getUserDebts(id);

    setDebts(data);
    handleOpen();
  };

  useEffect(() => {
    if (userSelected !== null) getDebts(userSelected);
  }, [userSelected]);

  return (
    <Dialog title="Novo débito" open={open} handleClose={handleClose}>
      <Table
        data={debts}
        tableHeaders={["Nome"]}
        tableRowOrder={["username"]}
        headerAddButton={{
          showButton: true,
          text: "Nova dívida",
        }}
        rowSeebutton={{ showSeeButton: false }}
      />
    </Dialog>
  );
}

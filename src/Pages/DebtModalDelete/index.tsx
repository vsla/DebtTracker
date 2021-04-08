import React, { useState } from "react";
import Dialog from "Components/Custom/Dialog";

import { DebtInterface } from "Interfaces/DebInterface";

import { Typography } from "@material-ui/core";

import { UserInterface } from "Interfaces/UserIntefaces";

import { deleteDebt } from "Services/DebtService";
import { deleteOneUser } from "Services/UserService";

interface Props {
  // userSelected: UserInterface | null;
  deleteObject: DebtInterface | UserInterface | null;
  deleteAllDebts?: boolean;
  open: boolean;
  setOpen: (reload: boolean) => void;
}

export default function DebtModalDelete({
  deleteAllDebts = false,
  deleteObject,
  open,
  setOpen,
}: Props) {
  const [loading, setLoading] = useState(false);

  const { title, buttonText } = deleteAllDebts
    ? { title: "Deletar usuário", buttonText: "Deletar" }
    : { title: "Deletar Débito", buttonText: "Deletar" };

  const handleClose = () => {
    setOpen(false);
  };

  const sendDelete = async () => {
    setLoading(true);
    if (deleteObject !== null) {
      if (deleteAllDebts) {
        const { id } = deleteObject;
        await deleteOneUser(id);

        setOpen(true);
      } else {
        const { _id } = deleteObject;
        const response = await deleteDebt(_id);
        if (!response.error) {
          setOpen(true);
        }
      }
    }
    setLoading(false);
  };

  const renderContent = (): React.ReactNode => {
    if (deleteObject !== null) {
      if (deleteAllDebts) {
        const { name } = deleteObject;
        return <Typography>Deletar todos os débitos de {name} ?</Typography>;
      } else {
        const { motivo } = deleteObject;
        return <Typography>Deletar o débito {motivo} ?</Typography>;
      }
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth={"xs"}
      title={title}
      open={open}
      handleClose={handleClose}
      actionButton={{
        hasActionButton: true,
        titleActionButton: buttonText,
        onClick: sendDelete,
        loading: loading,
      }}
    >
      {renderContent()}
    </Dialog>
  );
}

import React from "react";
import Dialog from "Components/Custom/Dialog";

import { DebtInterface } from "Interfaces/DebInterface";

import { Typography } from "@material-ui/core";

import { UserInterface } from "Interfaces/UserIntefaces";

import { deleteDebt } from "Services/DebtService";

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
  console.log(deleteObject);

  const { title, buttonText } = deleteAllDebts
    ? { title: "Deletar usuário", buttonText: "Deletar" }
    : { title: "Deletar Débito", buttonText: "Deletar" };

  const handleClose = () => {
    setOpen(false);
  };

  const sendDelete = async () => {
    if (deleteObject !== null) {
      if (deleteAllDebts) {
        // const { _id } = debt;
        // const response = await updateDebt({ idUsuario, motivo, valor }, _id);
        // if (!response.error) {
        //   setOpen(true);
        // }
      } else {
        const { _id } = deleteObject;
        const response = await deleteDebt(_id);
        if (!response.error) {
          setOpen(true);
        }
      }
    }
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
      }}
    >
      {renderContent()}
    </Dialog>
  );
}

import { useState, useEffect } from "react";
import Dialog from "Components/Custom/Dialog";

import { DebtFormInterface, DebtInterface } from "Interfaces/DebInterface";
import { Formik, FormikHelpers } from "formik";
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";

import MenuItem from "@material-ui/core/MenuItem";

import { UserInterface, UserListInterface } from "Interfaces/UserIntefaces";
import { getAllUsers } from "Services/UserService";
import { createDebt, updateDebt } from "Services/DebtService";

import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  motivo: Yup.string().required("Motivo é necessário"),
  valor: Yup.string().required("Valor é necessário"),
  idUsuario: Yup.string().required("Escolha um usuário"),
});

interface Props {
  // userSelected: UserInterface | null;
  debt: DebtInterface | null;
  edit?: boolean;
  open: boolean;
  setOpen: (reload: boolean) => void;
}

export default function DebtForm({ edit = false, open, setOpen, debt }: Props) {
  const [users, setUsers] = useState<UserListInterface | []>([]);

  const { title, buttonText } = edit
    ? { title: "Editar Débito", buttonText: "Editar" }
    : { title: "Nova Débito", buttonText: "Criar" };

  const handleClose = () => {
    setOpen(false);
  };

  const getUsers = async () => {
    const data = await getAllUsers();

    setUsers(data);
  };

  useEffect(() => {
    if (open === true) getUsers();
  }, [open]);

  const getInitialValues = () => {
    if (debt !== null) {
      const { idUsuario, motivo, valor } = debt;
      return {
        motivo,
        valor,
        idUsuario: idUsuario.toString(),
      };
    }
    return {
      motivo: "",
      valor: "",
      idUsuario: "",
    };
  };

  const sendForm = async ({ idUsuario, motivo, valor }: DebtFormInterface) => {
    if (debt !== null) {
      const { _id } = debt;
      const response = await updateDebt({ idUsuario, motivo, valor }, _id);
      if (!response.error) {
        setOpen(true);
      }
    } else {
      const response = await createDebt({ idUsuario, motivo, valor });
      if (!response.error) {
        setOpen(true);
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
    >
      <Formik
        initialValues={getInitialValues()}
        validationSchema={SignupSchema}
        onSubmit={(
          values: DebtFormInterface,
          { setSubmitting }: FormikHelpers<DebtFormInterface>
        ) => {
          sendForm(values);
        }}
      >
        {({ values, handleSubmit, handleChange, errors, touched }) => (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  variant="outlined"
                  id="Usuário"
                  value={values.idUsuario}
                  name="idUsuario"
                  onChange={handleChange}
                  label="Usuário"
                  select
                >
                  {users.map(({ id, name }: UserInterface) => {
                    return (
                      <MenuItem key={id} value={id}>
                        {name}
                      </MenuItem>
                    );
                  })}
                </TextField>
                <Typography variant="subtitle2">
                  {errors.idUsuario && touched.idUsuario && errors.idUsuario}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="valor"
                  fullWidth
                  label="Valor"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                  variant="outlined"
                  value={values.valor}
                  onChange={handleChange}
                />
                <Typography variant="subtitle2">
                  {errors.valor && touched.valor && errors.valor}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="motivo"
                  fullWidth
                  label="Motivo"
                  variant="outlined"
                  value={values.motivo}
                  onChange={handleChange}
                />
                <Typography variant="subtitle2">
                  {errors.motivo && touched.motivo && errors.motivo}
                </Typography>
              </Grid>
              <Grid item container xs={12} justify="flex-end">
                <Button variant="contained" color="primary" type="submit">
                  {buttonText}
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </Dialog>
  );
}

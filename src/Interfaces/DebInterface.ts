export interface DebtInterface {
  [key: string]: any;
  _id: String;
  motivo: String;
  valor: String;
  idUsuario: number;
  uuid: String;
  criado: String;
}

export type DebtListInterface = Array<DebtInterface>;

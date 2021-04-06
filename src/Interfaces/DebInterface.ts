export interface DebtInterface {
  [key: string]: any;
  _id: number;
  motivo: String;
  valor: number;
  idUsuario: number;
  uuid: String;
  criado: String;
}

export type DebtListInterface = Array<DebtInterface>;

export interface DebtInterface {
  [key: string]: any;
  _id: string;
  motivo: string;
  valor: string;
  idUsuario: number;
  uuid: string;
  criado?: string;
}

export interface DebtFormInterface {
  motivo: string;
  valor: string;
  idUsuario: string;
}

export type DebtListInterface = Array<DebtInterface>;

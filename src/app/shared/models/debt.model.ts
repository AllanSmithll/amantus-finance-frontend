import {DebtType} from "./debt-type.enum";

export interface Debt {
  id: string;
  debtor_name: string;
  value: number;
  value_pending: number;
  type: DebtType;
  interest_rates_tax?: number;
  penalties?: number;
  date: Date;
  date_expiration: Date;
  status: DebtType;
  contact_information?: string;
}

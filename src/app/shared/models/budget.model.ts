export interface Budget {
    id: string;
    description: string;
    value_total: number;
    value_missing: number;
    date_creation: string;
    date_expiration: string;
    type: string;
}

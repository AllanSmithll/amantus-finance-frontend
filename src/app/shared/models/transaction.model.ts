export interface Transaction {
    id: number;
    description: string;
    value: number;
    date: Date;
    category: string;
    frequency: string;
    add_information?: string | null;
    user_id: number;
}

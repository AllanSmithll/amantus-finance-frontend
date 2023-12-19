export interface Transaction {
    id: string;
    description: string;
    value: number;
    date: string;
    category: string;
    frequency: string;
    add_information?: string;
}
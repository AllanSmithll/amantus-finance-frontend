export abstract class Transaction {
    public id?: string
    constructor(
        id: string,
        public description: string,
        public value: number,
        public date: Date,
        public category: string,
        public frequency: string,
        public user_id: string,
        public add_information?: string | undefined
    ) {
        this.id = id;
    }
}

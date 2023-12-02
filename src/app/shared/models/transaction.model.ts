export abstract class Transaction {
    constructor(
        public id: string,
        public description: string,
        public value: number,
        public date: Date,
        public category: string,
        public frequency: string,
        public addInformation?: string
    ) {}

    get userId(): string {
        return this.userId;
    }

    set userId(userId: string) {
        this.userId = userId;
    }
}
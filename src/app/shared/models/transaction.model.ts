export abstract class Transaction {
    protected _id: string = "";
    _description: string = "";
    _value: number = 0;
    _date: Date;
    _category: string = "";
    _frequency?: string = "";
    _add_information?: string = "";

    protected constructor(id: string, description: string, value: number,
                          date: Date, category: string,
                          frequency: string, add_information: string) {
      this._id = id;
      this._description = description;
      this._value = value;
      this._date = date;
      this._category = category;
      this._frequency = frequency;
      this._add_information = add_information;
    }

      get id(): string {
          return this._id;
      }

      get description(): string {
          return this._description;
      }

      get value(): number {
          return this._value;
      }

      get date(): Date {
          return this._date;
      }

      get category(): string {
          return this._category;
      }

      get frequency(): string | undefined {
          return this._frequency;
      }

      get addInformation(): string | undefined {
          return this._add_information;
      }

      set description(description: string) {
          this._description = description;
      }

      set value(value: number) {
          this._value = value;
      }

      set date(date: Date) {
          this._date = date;
      }

      set category(category: string) {
          this._category = category;
      }

      set frequency(frequency: string) {
          this._frequency = frequency;
      }

      set addInformation(addInformation: string) {
          this._add_information = addInformation;
      }
  }

export class User {
  private _email: string;
  private _password: string;
  private _name: string;
  private _birthdate: Date;

  constructor(
    email: string,
    password: string,
    name: string,
    birthdate: Date
  ) {
    this._email = email;
    this._password = password;
    this._name = name;
    this._birthdate = birthdate;
  }

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get birthdate(): Date {
    return this._birthdate;
  }

  set birthdate(birthdate: Date) {
    this._birthdate = birthdate;
  }
}

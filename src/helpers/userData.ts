export class User {
    name : string;
    surname : string;
    adress : string;
    dateOfBirth : string;

    constructor (name: string, surname: string, adress: string, dateOfBirth: string) {
      this.name = name
      this.surname = surname
      this.adress = adress
      this.dateOfBirth = dateOfBirth
    }

    writeCredentials () : void {
      console.log(this.name, this.surname, this.adress, this.dateOfBirth)
    }
}

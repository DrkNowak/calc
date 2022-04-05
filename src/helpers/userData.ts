import { userCredentials } from '@/types/global'

export class User implements userCredentials<string> {
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

export class SatisfiedUser extends User implements userCredentials<string> {
  satisfaction : 1|2|3|4|5|6;

  constructor (name: string, surname: string, adress: string, dateOfBirth: string, satisfaction: 1|2|3|4|5|6) {
    super(name, surname, adress, dateOfBirth)
    this.satisfaction = satisfaction
  }
}

export class Users {
  users: userCredentials<string>[]

  constructor (users: userCredentials<string>[]) {
    this.users = users
  }

  addUser (user: userCredentials<string>): void {
    this.users.push(user)
  }

  sendUsers (): void {
    console.log(this.users)
  }
}

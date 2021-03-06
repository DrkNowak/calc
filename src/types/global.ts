type InputRef = {
    input: { value: string | number},
}

type LoanData = {
    years: number,
    percentages: number,
    income: number,
    people: number,
}

type loanUserFields = {
    fields : string[]
}

interface userCredentials<T> {
    name: T,
    dateOfBirth: T,
    adress: T,
    surname: T,
    satisfaction?: 1|2|3|4|5|6,
}

type satisfiedUserCredentials<T> = {
  readonly [P in keyof T]-?: T[P]
}

export {
  InputRef,
  LoanData,
  loanUserFields,
  userCredentials,
  satisfiedUserCredentials
}

type InputRef = {
    input: { value: string | number},
}

type LoanData = {
    [index: string]: number,
    years: number,
    percentages: number,
    income: number,
    peoples: number,
}

type loanUserFields = {
    fields : string[]
}

interface userCredentials<T> {
    [index: string]: T | number | undefined,
    name: T,
    dateOfBirth: T,
    adress: T,
    surname: T,
    satisfy?: 1|2|3|4|5|6,
}

export {
  InputRef,
  LoanData,
  loanUserFields,
  userCredentials
}

type InputRef = {
    input: { value: string | number},
}

type LoanField = {
    [index: string]: string
}

type LoanData = {
    [index: string]: number,
    years: number,
    percentages: number,
    income: number,
    peoples: number,
}

export {
  InputRef,
  LoanField,
  LoanData
}

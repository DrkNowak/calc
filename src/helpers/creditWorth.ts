import { LoanData } from '@/types/global'

export function calcCredit ({ percentage, years, income, people }: LoanData) : number {
  console.log('got', percentage, years, income, people)
  return percentage * years * income * people
}

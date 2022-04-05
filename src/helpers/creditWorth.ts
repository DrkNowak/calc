import { LoanData } from '@/types/global'

export function calcCredit ({ percentages, years, income, people }: LoanData) : number {
  return percentages * years * income * people
}

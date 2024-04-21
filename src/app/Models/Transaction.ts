import { Company } from './Company';

export class Transaction {
  id!: number;
  startDate: Date = new Date() ; // Consider using string for LocalDateTime, or use Date object
  endDate!: string; // Consider using string for LocalDateTime, or use Date object
  description!: string;
  accountNumber!: string;
  amount!: number;
  type!: string; // Type C or D
  status!: string;
  details!: string;
  pending!: string;
  fee!: number;
  remarks!: string;
  company!: Company;
}

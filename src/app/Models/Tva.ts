import {Company} from "./Company";

export class Tva{
  id!: number;
  vente!: number;
  aoi!: number;
  tvaBrute20!: number;
  tvaBrute10!: number;
  tvaBrute55!: number;
  totTvaBruteDue!: number;
  aBService!: number;
  totTvaDed!: number;
  totTvaDue!: number;
  tvaNetDue!: number;
  taxAss!: number;
  totPayer!: number;
  creationDate: Date = new Date();
  company: Company = new Company();
}

import { History } from "../history/History";

export type Operation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  operand1: number | null;
  result: number | null;
  operand2: number | null;
  typeField: string | null;
  histories?: Array<History>;
};

import { Operation } from "../operation/Operation";
import { User } from "../user/User";

export type History = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  operationDate: Date | null;
  operation?: Operation | null;
  user?: User | null;
};

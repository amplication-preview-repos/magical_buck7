import { SortOrder } from "../../util/SortOrder";

export type OperationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  operand1?: SortOrder;
  result?: SortOrder;
  operand2?: SortOrder;
  typeField?: SortOrder;
};

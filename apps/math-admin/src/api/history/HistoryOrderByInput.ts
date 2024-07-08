import { SortOrder } from "../../util/SortOrder";

export type HistoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  operationDate?: SortOrder;
  operationId?: SortOrder;
  userId?: SortOrder;
};

import { OperationWhereUniqueInput } from "../operation/OperationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HistoryCreateInput = {
  operationDate?: Date | null;
  operation?: OperationWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OperationWhereUniqueInput } from "../operation/OperationWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type HistoryWhereInput = {
  id?: StringFilter;
  operationDate?: DateTimeNullableFilter;
  operation?: OperationWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

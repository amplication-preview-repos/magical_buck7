import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { HistoryListRelationFilter } from "../history/HistoryListRelationFilter";

export type OperationWhereInput = {
  id?: StringFilter;
  operand1?: FloatNullableFilter;
  result?: FloatNullableFilter;
  operand2?: FloatNullableFilter;
  typeField?: StringNullableFilter;
  histories?: HistoryListRelationFilter;
};

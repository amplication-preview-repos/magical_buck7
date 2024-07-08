import { HistoryCreateNestedManyWithoutOperationsInput } from "./HistoryCreateNestedManyWithoutOperationsInput";

export type OperationCreateInput = {
  operand1?: number | null;
  result?: number | null;
  operand2?: number | null;
  typeField?: string | null;
  histories?: HistoryCreateNestedManyWithoutOperationsInput;
};

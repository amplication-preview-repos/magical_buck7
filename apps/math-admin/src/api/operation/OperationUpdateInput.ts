import { HistoryUpdateManyWithoutOperationsInput } from "./HistoryUpdateManyWithoutOperationsInput";

export type OperationUpdateInput = {
  operand1?: number | null;
  result?: number | null;
  operand2?: number | null;
  typeField?: string | null;
  histories?: HistoryUpdateManyWithoutOperationsInput;
};

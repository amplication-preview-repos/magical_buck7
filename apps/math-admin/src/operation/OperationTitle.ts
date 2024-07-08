import { Operation as TOperation } from "../api/operation/Operation";

export const OPERATION_TITLE_FIELD = "typeField";

export const OperationTitle = (record: TOperation): string => {
  return record.typeField?.toString() || String(record.id);
};

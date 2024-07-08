import { History as THistory } from "../api/history/History";

export const HISTORY_TITLE_FIELD = "id";

export const HistoryTitle = (record: THistory): string => {
  return record.id?.toString() || String(record.id);
};

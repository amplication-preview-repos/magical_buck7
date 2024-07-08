import { InputJsonValue } from "../../types";
import { HistoryUpdateManyWithoutUsersInput } from "./HistoryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  histories?: HistoryUpdateManyWithoutUsersInput;
};

import { InputJsonValue } from "../../types";
import { HistoryCreateNestedManyWithoutUsersInput } from "./HistoryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  histories?: HistoryCreateNestedManyWithoutUsersInput;
};

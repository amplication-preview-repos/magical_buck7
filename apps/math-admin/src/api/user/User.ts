import { JsonValue } from "type-fest";
import { History } from "../history/History";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  histories?: Array<History>;
};

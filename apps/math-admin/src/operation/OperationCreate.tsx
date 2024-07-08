import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HistoryTitle } from "../history/HistoryTitle";

export const OperationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="operand1" source="operand1" />
        <NumberInput label="result" source="result" />
        <NumberInput label="operand2" source="operand2" />
        <TextInput label="type" source="typeField" />
        <ReferenceArrayInput
          source="histories"
          reference="History"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HistoryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

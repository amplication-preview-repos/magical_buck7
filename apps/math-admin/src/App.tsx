import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HistoryList } from "./history/HistoryList";
import { HistoryCreate } from "./history/HistoryCreate";
import { HistoryEdit } from "./history/HistoryEdit";
import { HistoryShow } from "./history/HistoryShow";
import { OperationList } from "./operation/OperationList";
import { OperationCreate } from "./operation/OperationCreate";
import { OperationEdit } from "./operation/OperationEdit";
import { OperationShow } from "./operation/OperationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Math+"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="History"
          list={HistoryList}
          edit={HistoryEdit}
          create={HistoryCreate}
          show={HistoryShow}
        />
        <Resource
          name="Operation"
          list={OperationList}
          edit={OperationEdit}
          create={OperationCreate}
          show={OperationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

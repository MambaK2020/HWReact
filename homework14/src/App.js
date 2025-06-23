import React from "react";
import { Provider } from "react-redux";
import store from "../src/redux/store";
import User from "./User";
import UserForm from "./UserForm";
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <User />
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;

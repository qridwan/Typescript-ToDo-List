import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

export interface MyState {
  form: {
    name: string;
    time: number;
    comment?: string; // review?:string denotes the value of review could either be a string or undefined
  }[]; //[] denotes MyState state variables could be An array
}
function App() {
  const [form, setForm] = useState<MyState["form"]>([
    {
      name: "Break-fast",
      time: 9,
      comment: "Healthy Food",
    },
    {
      name: "Learn Typescript",
      time: 10,
      comment: "10 pm - 12 pm",
    },
  ]);
  return (
    <div className="App">
      <main>
      <List form={form} />
      <Form form={form} setForm ={setForm} />
      </main>
    </div>
  );
}

export default App;

import React from "react";
import { Button } from 'antd'
import "./App.css";
import pic from './tres_commas.jpg'
import BillingForm from "./components/BillingForm";

function App() {
  return (
    <div className='App'>
      <h1>design-system-app</h1>
      <h3>Trés Commás</h3>
      <BillingForm />
    </div>
  );
}

export default App;

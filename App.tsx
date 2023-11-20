import { StatusBar } from "react-native"
import { Home } from "./src/screens/home"
import { Login } from "./src/screens/login"
import { Money } from "./src/screens/money"
import { InputOutput } from "./src/screens/inputOutputValues"
import { Routes } from './src/routes';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        translucent
      />
      <Routes/>
    
    </>
  )
}
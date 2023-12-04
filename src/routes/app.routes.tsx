import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/login';
import { Singin } from '../screens/singin';
import { Money } from "../screens/money"
import { InputOutput } from "../screens/inputOutputValues"
import { Release } from "../screens/releases"
import { Reports } from "../screens/reports"
import { ExpensesPay } from "../screens/expensesTopay"
import { Revenue } from "../screens/revenues"
import { CreditCards } from "../screens/creditCards"
import { CardDatails } from "../screens/cardDatails"
import { AddCard } from "../screens/addCard"
import { AddCardF } from "../screens/finishAdd"
import { AddBills } from "../screens/addBills"
import { AddBillsF } from "../screens/addBills/finishAdd"
import { AddRevenue } from "../screens/addRevenue"
import { AddRevenueF } from "../screens/addRevenue/finishAdd"


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="login"
        component={Login}
      />
      <Screen
        name="home"
        component={Money}
      />
      <Screen
        name="balance"
        component={InputOutput}
      />
      <Screen
        name="release"
        component={Release}
      />
      <Screen
        name="reports"
        component={Reports}
      /><Screen
        name="expenses"
        component={ExpensesPay}
      /><Screen
        name="revenue"
        component={Revenue}
      /><Screen
        name="cards"
        component={CreditCards}
      /><Screen
        name="cardDetails"
        component={CardDatails}
      /><Screen
        name="addCard"
        component={AddCard}
      /><Screen
        name="addCardF"
        component={AddCardF}
      />
      <Screen
        name="addBills"
        component={AddBills}
      />
      <Screen
        name="addBillsF"
        component={AddBillsF}
      />
      <Screen
        name="addRevenue"
        component={AddRevenue}
      />
      <Screen
        name="addRevenueF"
        component={AddRevenueF}
      />
      <Screen
        name="singin"
        component={Singin}
      />
    </Navigator>
  );
}
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Money } from "../screens/money"
import { InputOutput } from "../screens/inputOutputValues"
import { Release } from "../screens/releases"
import { Reports } from "../screens/reports"
import { ExpensesPay } from "../screens/expensesTopay"
import { Revenue } from "../screens/revenues"


const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
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
      />
    </Navigator>
  );
}
import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tollbar from "../../componets/toolbar"
import { Expenses } from "../../componets/expenses";
import { ReceiveBills } from "../../componets/receiveBills";
import EntypoIcon from "react-native-vector-icons/Entypo";
import { Image } from "expo-image";
import {CardView} from "../../componets/cardView/index"

export function Money() {
    const [expenses, setExpenses] = useState<string[]>(["Mãe", "Salario", "Vendas"])
    const [expensesName, setExpensesName] = useState("")
    const [receiveBills, setreceiveBills] = useState<string[]>(["Aliexpress", "Amazon", "Roupas"])
    const [receiveBillsName, setReceiveBillsName] = useState("")
    const [showBalance, setShowBalance] = useState(true);
    const balanceValue = showBalance ? 'R$1700' : '-----';
    const [revenue, setRevenue] = useState('R$1700');
    const [expense, setExpense] = useState('R$1700');

    const toggleBalance = () => {
        setShowBalance(!showBalance);
        setRevenue(showBalance ? '-----' : 'R$1700');
        setExpense(showBalance ? '-----' : 'R$1700');
    };

    function handleParticipantAdd() {
        if (expenses.includes(expensesName)) {
            return Alert.alert("Participante existe", "Já existe um participante com esse nome!")
        }
        //setExpenses(prevState => [...prevState, setExpensesName])
        setExpensesName("")
    }
    function handleExpenseRemove(name: string) {
        Alert.alert("Remover participante", `Deseja remover a despesa ${name}?`, [
            {
                text: "Sim",
                onPress: () => setExpenses(prevState => prevState.filter(expenses => expenses !== name))
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
    }
    function handleReceiveBillsRemove(name: string) {
        Alert.alert("Remover participante", `Deseja remover a Receita a receber ${name}?`, [
            {
                text: "Sim",
                onPress: () => setreceiveBills(prevState => prevState.filter(receiveBills => receiveBills !== name))
            },
            {
                text: "Não",
                style: "cancel"
            }
        ])
    }

    return (
        <>
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.rect2}>
                <View style={styles.speceRow}>
                    <FeatherIcon name="user" style={styles.iconUser}></FeatherIcon>
                    <FeatherIcon name="bell-off" style={styles.iconBell}></FeatherIcon>
                </View>
                <View style={styles.notSpeceRow}>
                    <Text style={styles.wecolmeName}
                    >Olá
                    </Text>
                    <Text style={styles.userName}> Eduardo!</Text>
                </View>
            </View>

            <View style={[styles.container2]}>
                <View style={styles.speceRow}>
                    <Text style={styles.currentBalance}
                    >Saldo Atual
                    </Text>
                <Icon name="chevron-right" style={styles.arrowIcon} />
                </View>
                <View style={styles.speceRow}>
                    <Text style={styles.balanceValue}>{balanceValue}</Text>
                    <TouchableOpacity onPress={toggleBalance}>
                        {showBalance ? (
                            <EntypoIcon name="eye-with-line" style={styles.iconEye} />
                        ) : (
                            <EntypoIcon name="eye" style={styles.iconEye} />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={styles.separator2}></View>
                <CardView/>
                <View style={styles.separator2}></View>
                <View style={styles.container3}>
                    <View style={styles.speceRow}>
                        <Text style={styles.textContainer}>Balanço do Mês </Text>
                    </View>
                    <View style={styles.notSpeceRow}>
                        <Text style={styles.values}>Receita Mensal</Text>
                        <Image
                            style={styles.iconMoneyRecive}
                            contentFit="cover"
                            source={require("../../../assets/-icon-money-recive.png")}
                        />
                    </View>
                    <View style={styles.speceRow}>
                        <Text style={styles.balanceValue}>{revenue}</Text>
                        <EntypoIcon name="plus" style={styles.balanceValue} />
                    </View>
                    <View style={styles.notSpeceRow}>
                        <Text style={styles.values}>Despesa Mensal</Text>
                        <Image
                            style={styles.iconMoneyRecive}
                            contentFit="cover"
                            source={require("../../../assets/-icon-money-recive1.png")}
                        />
                    </View>
                    <View style={styles.speceRow}>
                        <Text style={styles.expenseValue}>{expense}</Text>
                        <EntypoIcon name="plus" style={styles.expenseValue} />
                    </View>
                </View>

                {/* <<<<<<<<<<<<<<<<<<CONTAS A PAGAR >>>>>>>>>>>>>>>>> */}
                <View style={styles.container4}>
                        <Text style={styles.values}>Contas a Pagar</Text>

                    <View style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                        <Image
                            style={styles.iconBills}
                            contentFit="cover"
                            source={require("../../../assets/icon-cart-market.png")}
                        />
                        <Text style={styles.billsMonth}>Mercado</Text>
                        </View>
                        <Text style={styles.billsMonthValue}>{revenue}</Text>
                    </View>

                    <View style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                        <Image
                            style={styles.iconBills}
                            contentFit="cover"
                            source={require("../../../assets/icon-car.png")}
                        />
                        <Text style={styles.billsMonth}>Carro</Text>
                        </View>
                        <Text style={styles.billsMonthValue}>{revenue}</Text>
                    </View>

                    <View style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                        <Image
                            style={styles.iconBills}
                            contentFit="cover"
                            source={require("../../../assets/icon-home.png")}
                        />
                        <Text style={styles.billsMonth}>Imóvel</Text>
                        </View>
                        <Text style={styles.billsMonthValue}>{revenue}</Text>
                    </View>

                    <View style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                        <Image
                            style={styles.iconBills}
                            contentFit="cover"
                            source={require("../../../assets/icon-online-shopping.png")}
                        />
                        <Text style={styles.billsMonth}>Compras Online</Text>
                        </View>
                        <Text style={styles.billsMonthValue}>{revenue}</Text>
                    </View>

                    <View style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                        <Image
                            style={styles.iconBills}
                            contentFit="cover"
                            source={require("../../../assets/icon-roupas.png")}
                        />
                        <Text style={styles.billsMonth}>Roupas</Text>
                        </View>
                        <Text style={styles.billsMonthValue}>{revenue}</Text>
                    </View>

                    <View style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                        <Image
                            style={styles.iconBills}
                            contentFit="cover"
                            source={require("../../../assets/icon-recurring-expenses.png")}
                        />
                        <Text style={styles.billsMonth}>Contas</Text>
                        </View>
                        <Text style={styles.billsMonthValue}>{revenue}</Text>
                    </View>

                    <View style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                        <Image
                            style={styles.iconBills}
                            contentFit="cover"
                            source={require("../../../assets/icon-shopping.png")}
                        />
                        <Text style={styles.billsMonth}>Compras no shopping</Text>
                        </View>
                        <Text style={styles.billsMonthValue}>{revenue}</Text>
                    </View>
                    {/* <<<<<<<<<<<<<<<<<<<<<<CONTAS A RECEBER>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                    <View style={styles.notSpeceRow}>
                        <Text style={styles.values}>Contas a Receber</Text>
                    </View>
                    <View style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                        <Image
                            style={styles.iconBills}
                            contentFit="cover"
                            source={require("../../../assets/icon-recieve-bills.png")}
                        />
                        <Text style={styles.billsMonth}>Venda Online</Text>
                        </View>
                        <Text style={styles.billsMonthValue}>{revenue}</Text>
                    </View>

                    <View style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                        <Image
                            style={styles.iconBills}
                            contentFit="cover"
                            source={require("../../../assets/icon-recieve-bills.png")}
                        />
                        <Text style={styles.billsMonth}>Investimento</Text>
                        </View>
                        <Text style={styles.billsMonthValue}>{revenue}</Text>
                    </View>

                    <View style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                        <Image
                            style={styles.iconBills}
                            contentFit="cover"
                            source={require("../../../assets/icon-recieve-bills.png")}
                        />
                        <Text style={styles.billsMonth}>Salário</Text>
                        </View>
                        <Text style={styles.billsMonthValue}>{revenue}</Text>
                    </View>

                    <View style={styles.speceRowBills}>
                        <View style={styles.speceRow}>
                        <Image
                            style={styles.iconBills}
                            contentFit="cover"
                            source={require("../../../assets/icon-recieve-bills.png")}
                        />
                        <Text style={styles.billsMonth}>Jobs</Text>
                        </View>
                        <Text style={styles.billsMonthValue}>{revenue}</Text>
                    </View>

                    
                </View>
                <View style={styles.separator2}></View>

                

            </View>
        </View>
        </ScrollView>
        
            <View style={styles.toolbar} >
                <Tollbar />
            </View>
            </>
    )
} 

import { Text, View, FlatList, Alert, TouchableOpacity, ScrollView } from "react-native"
import { styles } from "./styles"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
interface HeadPagesProps {
    currentPage: "Entradas e saídas" | "Lançamentos" | "Relatórios" | "Contas a Pagar" | "Contas a Receber" | "Cartões de Crédito" | "Gastos  Cartão" | "default"; // Adicione mais páginas conforme necessário
}

export function HeadPages({ currentPage }: HeadPagesProps) {
    const navigation = useNavigation();

    const getPageTitle = () => {
        switch (currentPage) {
            case "Entradas e saídas":
                return "Entradas e saídas";
            case "Lançamentos":
                return "Lançamentos";
            case "Relatórios":
                return "Relatórios";
            case "Contas a Pagar":
                return "Contas a Pagar";
            case "Contas a Receber":
                return "Contas a Receber";
            case "Cartões de Crédito":
                return "Cartões de Crédito";
            case "Gastos  Cartão":
                return "Gastos  Cartão";
            default:
                return "";
        }
    };
    const handleBackPress = () => {
        navigation.goBack()
    };
    return (
        <>
            <View style={styles.container}>
                <View style={styles.rowContainer}>

                    <TouchableOpacity onPress={handleBackPress}>
                        <Icon name="chevron-left" style={styles.arrowIconLeft} />
                    </TouchableOpacity>
                    <Text style={styles.textName}
                    >{getPageTitle()}
                    </Text>
                    <Image
                        style={styles.icon}
                        contentFit="cover"
                        source={require("../../../assets/icon.png")}
                    />
                </View>
            </View>
        </>
    )
} 

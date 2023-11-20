import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  rowContainer: {
    justifyContent: 'space-between', // Alinha os ícones nos extremos
    flexDirection: 'row',
    alignItems: 'center', // Centraliza verticalmente
  },
  speceRowNBetWeen: {
    flexDirection: "row",
  },
  speceRow: {
    padding: 18,
    flexDirection: "row",
    justifyContent: 'space-between',
  },
  textMid: {
    color: "#4F4E4E",
    fontSize: 16,
  },
  textBig: {
    color: "#4F4E4E",
    fontSize: 24,
  },
  textMidB: {
    color: "#4F4E4E",
    fontSize: 16,
    fontWeight: 'bold',
  },
  textBigB: {
    color: "#4F4E4E",
    fontWeight: 'bold',
    fontSize: 24,
  },

  separator1: {
    marginTop: 40,
    marginBottom: 40,
    paddin: -24,
    height: 2, // Altura da barra
    width: "100%",
    backgroundColor: '#E6E6E6', // Cor da barra
  },
  arrowIconRight: {
    marginTop: -5,
    fontSize: 30,
    color: "#505050"
  },
  buttonRel: {
    backgroundColor: "#695CFE",
    borderRadius: 8,
  },
  borderMonth: {
    backgroundColor: "#695CFE",
    borderRadius: 10,
    width: 90,
    alignItems: "center"
  },
  H1: {
    color: "#4F4E4E",
    fontSize: 20,
    fontWeight: "bold",
  },
  sizeMidB: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center"
  },
  sizeMid: {
    color: "#4F4E4E",
    fontSize: 16,
  },
  sizeSmall: {
    color: "#4F4E4E",
    fontSize: 14,
  },
  colorExpense: {
    color: "#FF6262",
  },
  arrowIcon: {
    fontSize: 32,
    color: "#4F4E4E",
  },
  spaceCircle: {
    marginLeft: 16,
    justifyContent: "space-between",
  },
  notSpeceRowM: {
    flexDirection: "row",
    marginLeft: 120,
    marginRight: 120,
    alignItems: "center",
  },
  notSpeceRow: {
    flexDirection: "row",
  },
  marginValueExpense: {
    marginTop: 2,
    marginLeft: 12

  },
  iconUser: {
    color: "#FFFFFF",
    fontSize: 30,
  },
  iconBills: {
    width: 30, // Defina o tamanho da imagem aqui
    height: 30, // Defina o tamanho da imagem aqui
  },
  billsMonth: {
    marginTop: 3,
    marginLeft: 12,
    color: "#4F4E4E",
    fontSize: 14,
  },
  billsMonthValue: {
    marginLeft: 12,
    color: "#4F4E4E",
    fontSize: 14,
    marginTop: 20,
  },
  monthsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  centerItems: {
    alignItems: 'center',
    justifyContent: "flex-end",
  },
  speceRowBills: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  endStyle: {
    justifyContent: "flex-end",
  }



});

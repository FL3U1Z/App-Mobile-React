import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  container2: {
    paddingLeft: 20,
    position: "relative",
    flex: 1,
    padding: 12,
    marginTop: -32,
    backgroundColor: "#fff",
    borderRadius: 12,
    width: "100%",
    marginLeft: 'auto',  // Centraliza horizontalmente
    marginRight: 'auto', // Centraliza horizontalmente
  },
  container3: {
    marginTop: 20,
    justifyContent: "space-between",
  },
  container4: {
    marginTop: 8,
    justifyContent: "space-between",
  },
  container41: {
    margin: 5,
  },
  container42: {
    margin: 5,
    marginTop: "-72%"
  },
  wecolmeName: {
    color: "#f5f5f5",
    fontSize: 24,
    fontWeight: "bold",
  },
  userName: {
    color: "#f5f5f5",
    fontSize: 24,
    fontWeight: "bold",
  },
  currentBalance: {
    color: "#4F4E4E",
    fontSize: 20,
    fontWeight: "bold",
  },
  speceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  speceRowBills: {
    marginTop:16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notSpeceRow: {
    marginTop: 10,
    flexDirection: "row",
  },
  notSpeceRowNMargin: {
    flexDirection: "row",
  },
  values: {
    color: "#4F4E4E",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  billsPay: {
    color: "#4F4E4E",
    fontSize: 20,
  },
  balanceValue: {
    marginTop:10,
    color: "#00875F",
    fontSize: 20,
    fontWeight: "500",
  },
  expenseValue: {
    color: "#FF6262",
    fontSize: 20,
    fontWeight: "500",
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#FDFCFE",
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#00875F",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42,
  },
  iconUser: {
    color: "#FFFFFF",
    fontSize: 50,
    paddingTop: 12
  },
  rect2: {
    paddingTop: 12,
    width: 428,
    height: 170,
    backgroundColor: '#7300ba',
    marginLeft: '-10%', // Metade da largura negativa para centralizar
    //marginRight: '-10%', // Metade da largura negativa para centralizar
    paddingLeft: 20,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 22,
  },

  iconInterrogation: {
    color: "#000",
    fontSize: 30,
    height: 30,
    width: 30,
    marginTop: 10,
  },
  iconEye: {
    marginTop: 10,
    marginRight: 10,
    color: "#4F4E4E",
    fontSize: 20,
    height: 20,
    width: 20,
  },
  iconBell: {
    paddingRight: 20,
    paddingTop: 20,
    color: "#fff",
    fontSize: 30,
  },
  toolbar: {
    justifyContent: "center",
    alignItems: "center",
  },
  separator: {
    marginLeft: 10,
    width: 3, // Largura da barra
    backgroundColor: '#4F4E4E', // Cor da barra
    marginHorizontal: 10, // Espaçamento horizontal
  },
  separator2: {
    marginTop: 26,
    paddingLeft: -26,
    height: 1, // Altura da barra
    width: "100%",
    backgroundColor: '#E6E6E6', // Cor da barra
  },
  listEmptyText: {
    color: '#FDFCFE',
    fontSize: 14,
    textAlign: "center"
  },
  boxMoney: {
    backgroundColor: "#7300ba",
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    width: 9,
    height: "115%",
    position: "absolute"
  },
  rowContainer: {
    justifyContent: 'space-between', // Alinha os ícones nos extremos
    flexDirection: 'row',
    alignItems: 'center', // Centraliza verticalmente
  },
  userContainer: {
    marginRight: 10, // Espaço entre o ícone e o texto
  },
  textContainer: {
    flex: 1, // Expande para ocupar todo o espaço disponível
    textAlign: 'center', // Centraliza horizontalmente
    color: '#4F4E4E',
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcomeText: {
    color: '#f5f5f5',
    fontSize: 24,
  },
  arrowIcon: {
    fontSize: 32,
  },
  iconMoneyRecive: {
    marginTop: 15,
    width: 24, // Defina o tamanho da imagem aqui
    height: 24, // Defina o tamanho da imagem aqui
    marginLeft: 10,
  },
  iconBills: {
    width: 30, // Defina o tamanho da imagem aqui
    height:30, // Defina o tamanho da imagem aqui
  },
  billsMonth: {
    marginLeft: 12,
    color: "#4F4E4E",
    fontSize: 16,
  },
  billsMonthValue: {
    marginLeft: 12,
    color: "#4F4E4E",
    fontSize: 18,
    fontWeight: 'bold',
  },

});

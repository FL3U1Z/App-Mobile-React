import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  rect: {
    borderWidth: 0.05,
    opacity: 0.9,
    position: 'absolute',
    bottom: 0,
    width: "70%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom:20,
  },
  icon: {
    color: "#4F4E4E",
    fontSize: 30,
  },
  selectedIcon: {
    color: "#B92CFC",
    fontSize: 30,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});




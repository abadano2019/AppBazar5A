import { StyleSheet } from "react-native";
import { THEME } from '../../constants/theme/index';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: THEME.colors.primary,
    borderBottomWidth: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: THEME.colors.primary,
  },
  info: {
    marginLeft: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize:16,
    fontWeight: "500",
    color: THEME.colors.text,
    marginBottom: 10,
  },
});

import { StyleSheet } from "react-native";
import {THEME} from '../../constants/theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "40%",
    minHeight: 220,
    width: "100%",
  },
  location: {
    margin: 20,
    width: "90%",
    maxWidth: 320,
    backgroundColor: THEME.colors.white,
    shadowColor: THEME.colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: THEME.colors.primary,
    textAlign: "center",
  },
  map: {
    height: 220,
  },
});

import { StatusBar, StyleSheet } from "react-native";

import {THEME} from '../../constants/theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerSafeArea: {
    flex: 1,
  },
  image: {
    height: "40%",
    minHeight: 220,
    width: "100%",
  },
  location: {
    margin: 40,
    width: "90%",
    maxWidth: 320,
    backgroundColor: THEME.colors.white,
    shadowColor: THEME.colors.black,
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    alignitems: 'center',
  },
  addressContainer: {
    padding: 2,
  },
  nameContainer:{
    padding:20,
  },
  address: {
    color: THEME.colors.primary,
    textAlign: "center",
    fontSize:20,
    fontWeight: "500"
  },
  mapAddress: {
    color: THEME.colors.primary,
    textAlign: "center",
    fontSize:18
  },
  map: {
    height: 220,
  },
  mapContainer:{
    alignContent: 'center',
    marginBottom: 50,
  }
});

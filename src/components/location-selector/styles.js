import { StyleSheet } from "react-native";
import { THEME } from '../../constants/theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  preview: {
    width: "100%",
    height: 180,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: THEME.colors.primary,
    borderWidth: 1,
  },
  buttonContainer:{
    margin:5    
  }
});

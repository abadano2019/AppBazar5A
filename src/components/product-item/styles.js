import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 10,
    height: 250,
    backgroundColor: THEME.colors.text,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',        
  },
  detail_Conteiner: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  title: {
    fontFamily: 'Bitter-Medium',
    fontSize: 18,
    color: THEME.colors.white,
    paddingTop: 5,
  },
  price: {
    fontFamily: 'Bitter-Bold',
    fontSize: 16,
    color: THEME.colors.white,
    padding: 5,
  },
  image:{
    
    width: 180,
    height: 180,
  }
});

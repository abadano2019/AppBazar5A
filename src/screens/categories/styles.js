import { StatusBar, StyleSheet } from 'react-native';

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.colors.background,
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Bitter-Bold',
    color: THEME.colors.title,
    padding: 10,
  },
  containerList: {
    flex: 1,
    marginTop: 50,
  },
  contentContainerList: {
    paddingBottom: 30,
  },
  contentContainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#7B7BD3', 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 1,
  },
  buttonContainer: {
  
      marginHorizontal: 20,
      marginVertical: 20,
      height: 50,
      
    }  
});

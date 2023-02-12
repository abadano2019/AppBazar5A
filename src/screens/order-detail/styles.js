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
    color: THEME.colors.white,
    paddingTop: 20,
    marginHorizontal:20
  },
  containerList: {
    flex: 1,
    marginTop: 50,
  },
  contentContainerList: {
    paddingBottom: 30,
  },
});


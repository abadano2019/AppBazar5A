import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.background,
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textContainer: {
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.colors.white,
    marginTop: 20,
  },

  listContainer: {
    flex: 1,
    backgroundColor: THEME.colors.white,
  },
  footer: {
    backgroundColor: THEME.colors.white,
    borderTopColor: THEME.colors.primary,
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonConfirm: {
    backgroundColor: THEME.colors.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: THEME.colors.primary,
    fontSize: 18,
    fontFamily: 'Bitter-Medium',
  },
  textFormat: {
    color: THEME.colors.primary,
    fontSize: 14,
    fontFamily: 'Bitter-Medium',
    borderBottomWidth: 1,
    width: 300,
    padding: 5,
  },
  totalPrice: {
    color: THEME.colors.white,
    fontSize: 16,
    fontFamily: 'Bitter-Bold',
  },
});

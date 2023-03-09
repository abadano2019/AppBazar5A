import { ActivityIndicator, View } from 'react-native';

import AppNavigator from './navigation';
import  { Provider } from 'react-redux'
import { THEME } from './constants/theme';
import { init } from "../src/constants/db";
import  store  from './store/index.js';
import { styles } from './styles';
import { useFonts } from 'expo-font';

init()
  .then(() => {
    console.log("Initialized database");
  })
  .catch((err) => {
    console.log("Initializing db failed.");
    console.log(err);
  });

const App = () => {
  const [loaded] = useFonts({
    'Bitter-Regular': require('../assets/fonts/Bitter-Regular.ttf'),
    'Bitter-Bold': require('../assets/fonts/Bitter-Bold.ttf'),
    'Bitter-Light': require('../assets/fonts/Bitter-Light.ttf'),
    'Bitter-Medium': require('../assets/fonts/Bitter-Medium.ttf'),
  });

  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={THEME.colors.primary} />
      </View>
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
};

export default App;

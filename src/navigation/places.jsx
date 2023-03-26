import { MapsScreen, NewPlaceScreen, PlaceDetailScreen, PlaceListScreen } from '../screens/index';
import { Platform, TouchableOpacity } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { THEME } from '../constants/theme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Places"
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.white,
        },
        headerTintColor: THEME.colors.primary,
        headerTitleStyle: {
          fontFamily: 'Bitter-Bold',
          fontSize: 18,
          color: THEME.colors.title,
        },
      }}>
      <Stack.Screen
        name="Places"
        component={PlaceListScreen}
        options={({ navigation }) => ({
          title: 'Addresses',
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('NewPlace')}>
              <Ionicons name="add" size={26} color={THEME.colors.primary} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{ title: 'Address details' }}
      />
      <Stack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={({ route }) => ({
          title: 'New Places',
        })}
        //options={{ title: "Nueva dirección" }}
      />
      <Stack.Screen name="Maps" component={MapsScreen} options={{ title: 'Mapa' }} />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;

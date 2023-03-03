import { MapsScreen, NewPlaceScreen, PlaceDetailScreen, PlaceListScreen } from "../screens/index";
import { Platform, TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { THEME } from '../constants/theme';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const PlacesNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Place"
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.primary
        },
        headerTintColor: THEME.colors.white,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}>
      <Stack.Screen
        name="Places"
        component={PlaceListScreen}
        options={({ navigation }) => ({
          title: "Direcciones",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewPlace")}>
              <Ionicons name="add" size={24} color={THEME.colors.white} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="PlaceDetail"
        component={PlaceDetailScreen}
        options={{ title: "Detalles de la dirección" }}
      />
      <Stack.Screen
        name="NewPlace"
        component={NewPlaceScreen}
        options={({ route }) => ({
          title: "New Places",
        })}
        //options={{ title: "Nueva dirección" }}
        
      />
      <Stack.Screen 
        name="Maps" 
        component={MapsScreen} 
        options={{ title: "Mapa" }} 
        
      />
    </Stack.Navigator>
  );
};

export default PlacesNavigator;

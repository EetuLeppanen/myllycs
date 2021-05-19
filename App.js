import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';  
import Database from './Database';
import Shop from './Shop';
import Pelaajat from './Pelaajat';





function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>Tervetuloa MYLLY.cs:n sovellukseen, jonka avulla voit nähdä joukkueen nykyisen
        kokoonpanon, ja jos kuvetta löytyy voit vaikka liittyä joukkueen kannattajaksi! {"\n"} {"\n"}
        MYLLY.cs on pienen kaveriporukan perustama videopelijoukkue, joka perustettiin vuonna 2020</Text>
        
        
    </View>
  );
}


  





const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'Home') {
      iconName = 'md-home';
    } else if (route.name === 'Päiväkirja') {
      iconName = 'book';
    } else if (route.name === 'Jäsenyys') {
      iconname = 'person-add'; 
    } else if (route.name === 'Pelaajat') {
      iconname = 'md-list-circle';
    }

    return <Ionicons name={iconName} size={size} color={'#4f9deb'} />;
  }
});

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Päiväkirja" component={Database}/>
        <Tab.Screen name="Jäsenyys" component={Shop}/>
        <Tab.Screen name="Pelaajat" component={Pelaajat}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
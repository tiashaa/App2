import { NativeModules, PanResponder } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import FacultyList from './src/screens/FacultyList';
import semester1 from './src/screens/semester1';
import Profile from './src/screens/Profile';
import semester2 from './src/screens/semester2';
import semester3 from './src/screens/semester3';
import Semesters from './src/screens/Semesters';

 
const Stack = createStackNavigator()

 
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component= {HomeScreen} />
      <Stack.Screen name="Profile" component= {Profile}/>
      <Stack.Screen name="Semesters" component= {Semesters}/>
      <Stack.Screen name="semester1" component= {semester1}/>
      <Stack.Screen name="semester2" component= {semester2}/>
      <Stack.Screen name="semester3" component= {semester3}/>
      <Stack.Screen name="FacultyList" component= {FacultyList}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};
 
export default App;


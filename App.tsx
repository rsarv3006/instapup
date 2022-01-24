import 'react-native-gesture-handler';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Main} from './src/screens/Main';
import {res} from './src/resources/res';
import {DogView} from './src/screens/DogView';
import {RootStackParamList} from './src/typings/RootStackParamList';
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={res.Screens.main}
          component={Main}
          options={{title: 'InstaPup'}}
        />
        <Stack.Screen
          name={res.Screens.dog}
          component={DogView}
          options={{title: 'Pupper View'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

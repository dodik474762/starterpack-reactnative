/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainApp from './modules/main/mainapp';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Example from './modules/example/example';

type SectionProps = PropsWithChildren<{
  title: string;
}>;
const Stack: any = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Example}
        options={{title: 'Welcome'}}
      />
      <Stack.Screen name="Profile" component={Example} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;

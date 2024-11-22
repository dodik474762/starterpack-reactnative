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

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Home />
      {/* <Stack.Navigator initialRouteName="MainApp">
        <Stack.Screen name="MainApp" component={Home} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;

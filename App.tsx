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
import ButtonComponent from './components/actions/button-components';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import AppBar from './components/appbar/appbar';
import FloatingButton from './components/actions/floating-button';
import CircleLoading from './components/loading/circle-loading';
import Input from './components/inputs/input';
import InputDatePicker from './components/inputs/input-date';
import InputSelect from './components/inputs/input-select';
import InputCheckbox from './components/inputs/input-checkbox';
import InputRadioBox from './components/inputs/input-radio';
import InputSingleImage from './components/inputs/input-single-image';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <AppBar />
        <Input />
        <InputDatePicker onConfirm={(date: any) => {
          
        }} onCancel={() => {}} title="Input Date"/>
        <InputSelect data={[{
          label: 'English',
          value: 'en',
        }, {
          label: 'Spanish',
          value: 'es',
        }]} onValueChanges={(value: any) => {
          console.log(value);
        }}/>
        <InputCheckbox title = "Example Checkbox" onChecked={(value: any) => {
          console.log('checkbox', value);
        }}/>
        <InputRadioBox title = "Example RadioBox" onChecked={(value: any) => {
          console.log('radiobox', value);
        }}/>
        <InputSingleImage/>
        
        <ButtonComponent
          title="Submit"
          margin={10}
          borderRadius={10}
          onPress={() => Alert.alert('Button pressed')}
        />
        <CircleLoading/>
      </ScrollView>
      <FloatingButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

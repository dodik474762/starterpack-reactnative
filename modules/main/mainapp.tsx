/* eslint-disable react/react-in-jsx-scope */
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import AppBar from '../../components/appbar/appbar';
import Input from '../../components/inputs/input';
import InputDatePicker from '../../components/inputs/input-date';
import InputSelect from '../../components/inputs/input-select';
import InputCheckbox from '../../components/inputs/input-checkbox';
import InputRadioBox from '../../components/inputs/input-radio';
import InputSingleImage from '../../components/inputs/input-single-image';
import ButtonComponent from '../../components/actions/button-components';
import CircleLoading from '../../components/loading/circle-loading';
import FloatingButton from '../../components/actions/floating-button';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';

const MainApp = (props: any) => {
  const {} = props;
  const isDarkMode = useColorScheme() === 'dark';
  const navigation: any = useNavigation();

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
        <InputDatePicker
          onConfirm={(date: any) => {
            console.log('date', date);
          }}
          onCancel={() => {}}
          title="Input Date"
        />
        <InputSelect
          data={[
            {
              label: 'English',
              value: 'en',
            },
            {
              label: 'Spanish',
              value: 'es',
            },
          ]}
          onValueChanges={(value: any) => {
            console.log(value);
          }}
        />
        <InputCheckbox
          title="Example Checkbox"
          onChecked={(value: any) => {
            console.log('checkbox', value);
          }}
        />
        <InputRadioBox
          title="Example RadioBox"
          onChecked={(value: any) => {
            console.log('radiobox', value);
          }}
        />
        <InputSingleImage
          onImageResult={(file: any) => {
            console.log(file);
          }}
        />
        <InputSingleImage
          onImageResult={(file: any) => {
            console.log(file);
          }}
        />

        <ButtonComponent
          title="Submit"
          margin={10}
          borderRadius={10}
          onPress={() => Alert.alert('Button pressed')}
        />
        <ButtonComponent
          title="Navigation"
          margin={10}
          borderRadius={10}
          onPress={() => {
            navigation.navigate('example');
          }}
        />
        <CircleLoading />
      </ScrollView>
      <FloatingButton onPress={() => console.log('Button pressed')} />
    </SafeAreaView>
  );
};

export default MainApp;

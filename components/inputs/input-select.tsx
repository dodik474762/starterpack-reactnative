import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const InputSelect = (props: any) => {
  const {title = 'Select', onValueChanges = () => {}, data = []} = props;
  const [selectedLanguage, setSelectedLanguage] = useState(
    data.length > 0 ? data[0].value : '',
  );

  return (
    <>
      <Text style={{fontSize: 16, margin: 10}}>{title}</Text>
      <Picker
        style={{
          backgroundColor: 'white',
          marginRight: 10,
          marginLeft: 10,
          borderRadius: 10,
        }}
        selectedValue={selectedLanguage}
        itemStyle={{fontSize: 16}}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedLanguage(itemValue);
          onValueChanges(itemValue);
        }}>
        {data.length > 0 &&
          data.map((item: any) => {
            return <Picker.Item key={item.value} label={item.label} value={item.value} />;
          })}
      </Picker>
    </>
  );
};

export default InputSelect;

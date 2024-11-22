import {Text, View} from 'react-native';
import {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../utils/color';

const InputRadioBox = (props: any) => {
  const {
    title = '',
    colorChecked = Colors.bluePrimary,
    size = 24,
    fontSize = 16,
    colorOutline = Colors.gray,
    onChecked = () => {},
  } = props;
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <>
      <View
        style={{
          padding: 10,
          margin: 3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        {toggleCheckBox ? (
          <MaterialIcons
            name="radio-button-checked"
            size={size}
            color={colorChecked}
            onPress={() => {
              setToggleCheckBox(!toggleCheckBox);
              onChecked(!toggleCheckBox);
            }}
          />
        ) : (
          <MaterialIcons
            name="radio-button-unchecked"
            size={size}
            color={colorOutline}
            onPress={() => {
              setToggleCheckBox(!toggleCheckBox);
              onChecked(!toggleCheckBox);
            }}
          />
        )}
        <Text style={{fontSize: fontSize, marginLeft: 10}}>{title}</Text>
      </View>
    </>
  );
};

export default InputRadioBox;

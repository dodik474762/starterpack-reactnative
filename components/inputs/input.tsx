import {Text, TextInput, View} from 'react-native';
import {Colors} from '../../utils/color';

const Input = (props: any) => {
  const {
    type = 'text',
    onChangeText = () => {},
    borderWidth = 1,
    backgroundColor = Colors.white,
    borderColor = Colors.white,
    shadowColor = Colors.black,
    title = 'Example',
    colorTitle = Colors.black,
    withTitle = true,
    value = '',
  } = props;
  return (
    <View style={{padding: 10}}>
      {withTitle && (
        <Text style={{marginBottom: 5, fontSize: 16, color: colorTitle}}>
          {title}
        </Text>
      )}
      <TextInput
        style={{
          height: 50,
          borderColor: borderColor,
          borderWidth: borderWidth,
          borderRadius: 5,
          backgroundColor: backgroundColor,
          padding: 10,
          shadowColor: shadowColor,
        }}
        placeholder="Example"
        onChangeText={onChangeText}
        keyboardType={type}
        value={value}
      />
    </View>
  );
};

export default Input;

import {Text, TouchableNativeFeedback, View} from 'react-native';

const ButtonComponent = (props: any) => {
  const {
    onPress = () => {},
    title = '',
    backgroundColor = '#2196f3',
    color = '#fff',
    margin = 0,
    borderRadius = 0,
    fontSize = 16,
  } = props;
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View
        style={{
          height: 50,
          backgroundColor: backgroundColor,
          padding: 10,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: margin,
          borderRadius: borderRadius,
        }}>
        <Text
          style={{
            color: color,
            width: '100%',
            textAlign: 'center',
            fontSize: fontSize,
          }}>
          {title}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

// Example Used
/* <ButtonComponent title="Submit" margin={10} borderRadius={10} onPress={() => Alert.alert('Button pressed')}/>*/
export default ButtonComponent;

import {Button} from 'react-native';

const ButtonComponent = (props: any) => {
  const {onPress = () => {}, title = ''} = props;
  return <Button title={title} onPress={onPress} />;
};

// const styles = StyleSheet.create({
//   button: {
//     width: 100,
//     height: 100,
//     backgroundColor: 'red',
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

export default ButtonComponent;

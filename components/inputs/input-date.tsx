import {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {Colors} from '../../utils/color';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InputDatePicker = (props: any) => {
  const {
    mode = 'date',
    onConfirm = () => {},
    withTitle = true,
    colorTitle = Colors.black,
    title = 'Example Date',
    backgroundColor = Colors.white,
    borderColor = Colors.white,
    shadowColor = Colors.black,
    fontSize = 16,
  } = props;
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={{padding: 10}}>
        {withTitle && (
          <Text style={{marginBottom: 5, fontSize: fontSize, color: colorTitle}}>
            {title}
          </Text>
        )}
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <View
            style={{
              flex: 0.5,
              height: 50,
              marginTop: 5,
              borderColor: borderColor,
              borderWidth: 1,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
              backgroundColor: backgroundColor,
              display: 'flex',
              paddingLeft: 5,
              justifyContent: 'center',
            }}>
            <MaterialIcons
              name="date-range"
              size={30}
              color={Colors.gray}
              onPress={() => setOpen(true)}
            />
          </View>
          <View
            style={{
              flex: 4,
              height: 50,
              marginTop: 5,
              borderColor: borderColor,
              borderWidth: 1,
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              backgroundColor: backgroundColor,
              shadowColor: shadowColor,
              padding: 5,
            }}>
            <TextInput
              value={date.toString()}
              editable={false}
              style={{fontSize: fontSize, paddingTop: 10}}
            />
          </View>
        </View>
        <DatePicker
          modal
          mode={mode}
          open={open}
          date={date}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            onConfirm(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </>
  );
};

export default InputDatePicker;

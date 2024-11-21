import {useState} from 'react';
import {Button, Text, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

const InputDatePicker = (props: any) => {
  const {mode = 'date', onConfirm = () => {}} = props;
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <>
      <View style={{padding: 10,}}>
        <Button title="Open" onPress={() => setOpen(true)} />
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

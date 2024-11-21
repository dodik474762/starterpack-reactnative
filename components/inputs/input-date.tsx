import { View } from "react-native";
import DatePicker from "react-native-date-picker";

const InputDatePicker = (props : any) => {
    const {date = new Date()} = props;
  return (
    <View style={{ height: 50 }}>
      <DatePicker date={date} onDateChange={(date) => console.log(date)}/>
    </View>
  );
};

export default InputDatePicker;

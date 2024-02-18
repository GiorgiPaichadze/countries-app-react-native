import RNPickerSelect from 'react-native-picker-select';
import { AppSelectProps } from '../../types';

const AppSelect: React.FC<AppSelectProps> = ({ options, region, setRegion }) => {
  const placeholder = {
    label: 'Select an option...',
    value: null,
  };

  const selectStyles = {
    inputIOS: {
      fontSize: 16,
      paddingVertical: 18,
      paddingHorizontal: 18,
      backgroundColor: 'white',
      borderRadius: 8,
      color: 'black',
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 18,
      paddingVertical: 18,
      borderRadius: 8,
      color: 'black',
    },
    placeholder: {
      color: '#000',
    },
  };

  return (
    <RNPickerSelect
      placeholder={placeholder}
      items={options}
      style={selectStyles}
      onValueChange={(value) => setRegion(value)}
      value={region}
    />
  );
};

export default AppSelect;

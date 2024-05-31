import {useState} from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  Text,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
// import Icons from 'react-native-vector-icons/Ionicons';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

interface Props {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
}

const Input: React.FC<Props> = ({
  title,
  value,
  onChangeText,
  secureTextEntry = false,
  style = {},
  placeholder = '',
  keyboardType,
}) => {
  const [securePassowrdText, setSecurePasswordText] = useState<boolean>(true);

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.row}>
        <TextInput
          placeholder={placeholder}
          editable={true}
          style={styles.input}
          secureTextEntry={secureTextEntry && securePassowrdText}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
        />
      </View>
    </View>
  );
};

export default Input;

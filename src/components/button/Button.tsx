import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import styles from './buttonStyles';

interface Props {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const Button: React.FC<Props> = ({
  title,
  onPress = () => {},
  style = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

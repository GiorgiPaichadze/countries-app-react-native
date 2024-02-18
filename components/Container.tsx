import { StyleSheet, View } from 'react-native';
import { ChildrenProps } from '../types';

const Container: React.FC<ChildrenProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default Container;

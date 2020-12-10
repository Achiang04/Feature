import {StyleSheet} from 'react-native';
import {hp, wp} from '../../reusable/Responsive/dimen';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 10,
    padding: hp(5),
    backgroundColor: 'black',
    borderColor: 'black',
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;

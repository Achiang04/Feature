import {StyleSheet} from 'react-native';
import {hp, wp} from '../../reusable/Responsive/dimen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputan: {
    borderWidth: 1,
    width: '90%',
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: hp(20),
    padding: hp(5),
  },
  button: {
    borderWidth: 1,
    width: wp(100),
    alignSelf: 'center',
    marginTop: hp(20),
    alignItems: 'center',
    padding: hp(5),
  },
});

export default styles;

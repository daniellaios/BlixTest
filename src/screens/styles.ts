import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  dropdown: {
    borderWidth: 1,
    padding: 10,
    borderColor: '#BBBFC7',
  },
  protInput: {flex: 0.5, marginRight: 20},
  checkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {marginLeft: 10},
  submitButton: {
    marginTop: 20,
  },
  inputError: {
    borderColor: 'red',
  },
  portContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  errorText: {
    color: 'red',
  },
});

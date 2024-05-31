import {useState} from 'react';
import {Alert, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import {Button, Input} from '../components';
import {Dropdown} from 'react-native-element-dropdown';
import CheckBox from '@react-native-community/checkbox';
import validator from 'validator';

type AccountType = 'Advanced' | 'Manual';

interface Error {
  username?: string;
  password?: string;
  serverAddress?: string;
  serverPath?: string;
  port?: string;
}

const Home: React.FC = () => {
  const [accountType, setAccountType] = useState<AccountType>('Advanced');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [serverAddress, setServerAddress] = useState<string>('');
  const [serverPath, setServerPath] = useState<string>('');
  const [port, setPort] = useState<string>('');
  const [useSSL, setUseSSL] = useState<boolean>(false);
  const [errors, setErrors] = useState<Error>({});

  const accountTypes: {label: AccountType; value: AccountType}[] = [
    {label: 'Advanced', value: 'Advanced'},
    {label: 'Manual', value: 'Manual'},
  ];

  const validate = () => {
    let valid = true;
    let errors: Error = {};

    if (!validator.isEmail(username)) {
      valid = false;
      errors.username = 'Username must be a valid email address';
    }

    if (validator.isEmpty(username)) {
      valid = false;
      errors.username = 'Username is required';
    }

    if (validator.isEmpty(password)) {
      valid = false;
      errors.password = 'Password is required';
    }

    if (serverAddress && !validator.isFQDN(serverAddress)) {
      valid = false;
      errors.serverAddress = 'Server address must be a valid host';
    }

    if (
      serverPath &&
      !validator.isAlphanumeric(serverPath, 'en-US', {ignore: '/'})
    ) {
      valid = false;
      errors.serverPath = 'Server path must be alphanumeric';
    }

    if (port && !validator.isInt(port, {min: 1, max: 65535})) {
      valid = false;
      errors.port = 'Port must be a number between 1 and 65535';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = () => {
    setErrors({});
    if (validate()) {
      Alert.alert(
        'Submit',
        'Account type: ' +
          accountType +
          '\n' +
          'Username: ' +
          username +
          '\n' +
          'Password: ' +
          password +
          '\n' +
          'Server Address: ' +
          serverAddress +
          '\n' +
          'Server path: ' +
          serverPath +
          '\n' +
          'Port: ' +
          port +
          '\n' +
          'Use SSL: ' +
          useSSL,
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        value={accountType}
        data={accountTypes}
        labelField={'label'}
        valueField={'value'}
        onChange={({value}: {label: AccountType; value: AccountType}) =>
          setAccountType(value)
        }
      />
      <Input
        placeholder="name@example.com"
        style={[!!errors.username && styles.inputError]}
        title={'User Name'}
        value={username}
        onChangeText={setUsername}
      />
      {!!errors.username && (
        <Text style={styles.errorText}>{errors.username}</Text>
      )}
      <Input
        placeholder="Required"
        style={[!!errors.password && styles.inputError]}
        title={'Password'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      {!!errors.password && (
        <Text style={styles.errorText}>{errors.password}</Text>
      )}
      <Input
        placeholder="example.com"
        style={[!!errors.serverAddress && styles.inputError]}
        title={'Server Address'}
        value={serverAddress}
        onChangeText={setServerAddress}
      />
      {!!errors.serverAddress && (
        <Text style={styles.errorText}>{errors.serverAddress}</Text>
      )}
      {accountType == 'Advanced' && (
        <>
          <Input
            placeholder="/calendars/user"
            style={[!!errors.serverPath && styles.inputError]}
            title={'Server Path'}
            value={serverPath}
            onChangeText={setServerPath}
          />
          {!!errors.serverPath && (
            <Text style={styles.errorText}>{errors.serverPath}</Text>
          )}
          <View style={styles.portContainer}>
            <Input
              title={'Port'}
              value={port}
              onChangeText={setPort}
              style={[styles.protInput, !!errors.port && styles.inputError]}
              keyboardType="numeric"
            />
            <View style={styles.checkContainer}>
              <CheckBox
                disabled={false}
                value={useSSL}
                onValueChange={setUseSSL}
              />
              <Text style={styles.checkboxText}>Use SSL</Text>
            </View>
          </View>
          {!!errors.port && <Text style={styles.errorText}>{errors.port}</Text>}
        </>
      )}
      <Button
        title={'Submit'}
        style={styles.submitButton}
        onPress={handleSubmit}
      />
    </SafeAreaView>
  );
};

export default Home;

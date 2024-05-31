/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Main = () => {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView>
        <App />
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

AppRegistry.registerComponent(appName, () => Main);

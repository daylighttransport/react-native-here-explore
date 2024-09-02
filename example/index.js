import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
import { HERE_ACCESS_KEY_ID, HERE_ACCESS_KEY_SECRET } from '@env';
import { HEREConfig } from 'react-native-here-explore';

HEREConfig.initializeHereSDK(
  HERE_ACCESS_KEY_ID,
  HERE_ACCESS_KEY_SECRET
);

AppRegistry.registerComponent(appName, () => App);

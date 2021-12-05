import 'react-native-gesture-handler'
import { LogBox } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { defaultConfigrations } from './src/navigation/navConfigrations'
import registerScreens from './src/navigation';
import { AppStack } from './src/navigation/Roots';

LogBox.ignoreAllLogs()
Navigation.setDefaultOptions(defaultConfigrations);
registerScreens()

Navigation.events().registerAppLaunchedListener(() => Navigation.setRoot(AppStack));

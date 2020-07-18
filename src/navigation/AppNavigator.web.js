import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';
import FeedNavigator from './FeedNavigator';
import LoginNavigator from './LoginNavigator';
import RegisterNavigator from './RegisterNavigator';

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  Login: LoginNavigator,
  Register: RegisterNavigator,
  Feed: FeedNavigator,
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
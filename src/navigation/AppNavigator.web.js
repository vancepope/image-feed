import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';
import FeedNavigator from './FeedNavigator';

const switchNavigator = createSwitchNavigator({
  // You could add another route here for authentication.
  Feed: FeedNavigator,
});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
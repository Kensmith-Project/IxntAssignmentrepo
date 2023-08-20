import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HackerNewsAppNavigationProps} from './types';
import {RootNavigationProps} from './types';
import HomeLandingPage from '../../screens/HomeLandingPage';
import HotUpdatesPage from '../../screens/HotUpdatesPage';
import NewsDetailPage from '../../screens/NewsDetailPage';
// import { RootNavigationProps } from './types';
import {RootStackParameterList} from './types';

const Stack = createNativeStackNavigator<RootStackParameterList>();

function HackerNewsAppStackNaviagtor() {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}>
      <Stack.Screen component={HomeLandingPage} name="HomeLandingPage" />
      <Stack.Screen component={HotUpdatesPage} name="HotUpdatesPage" />
      <Stack.Screen component={NewsDetailPage} name="NewsDetailPage" />
    </Stack.Navigator>
  );
}

export default HackerNewsAppStackNaviagtor;

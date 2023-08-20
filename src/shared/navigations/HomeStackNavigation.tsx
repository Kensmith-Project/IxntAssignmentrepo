import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeLandingPage from '../../screens/HomeLandingPage';
import ViewDetails from '../../screens/ViewDetails';
import ViewHotNews from '../../screens/ViewHotNews';

export type HomeStackParameterList = {
  HomePage: undefined;
  ViewDetails: undefined;
  ViewHotNews: undefined;
};

const HomePageStack = createNativeStackNavigator<HomeStackParameterList>();

const HomeStackNavigator: React.FC<any> = ({navigation}) => {
  return (
    <HomePageStack.Navigator
      initialRouteName="HomePage"
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      <HomePageStack.Screen name="HomePage" component={HomeLandingPage} />
      <HomePageStack.Screen name="ViewDetails" component={ViewDetails} />
      <HomePageStack.Screen name=" ViewHotNews" component={ViewHotNews} />
    </HomePageStack.Navigator>
  );
};

export default HomeStackNavigator;


// <HomeStack.Screen
// name="ProfileImageUpload"
// component={ProfileImageUpload}
// />

import {NavigatorScreenParams} from '@react-navigation/native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParameterList = {
    HomePage: undefined;
  Favourite: undefined;
  Profile: undefined;
};

type MyTabRoutes = {
  HomePage: undefined;
  Favourite: undefined;
  Profile: undefined;
};

export type HackerNewsAppNavigationProps<
  Screen extends keyof RootStackParameterList,
> = CompositeScreenProps<
  NativeStackScreenProps<RootStackParameterList, Screen>,
  BottomTabScreenProps<MyTabRoutes>
>;

export type RootNavigationProps<Screen extends keyof RootStackParameterList> =
  NativeStackScreenProps<RootStackParameterList, Screen>;

import {
  View,
  ScrollView,
  FlatList,
  Text,
  TextField,
  VStack,
  HStack,
  Pressable,
} from 'native-base';
import {
  SafeAreaView,
  Platform,
  StatusBar,
  Animated,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {VFC} from 'react';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import {HomeStackParameterList} from '../../shared/navigations/HomeStackNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArticleResponseType} from '../../shared/redux/types';
export type TopCardProps = {
  image?: () => void;
  poster?: string;
  title?: string;
  text?: string;
};

/*

{
  source: {
    id?: any;
    name?: string;
  };
  author?: string;
  title?: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  content?: string;
};



*/

const TopCard = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}: ArticleResponseType) => {
  const route = useRoute<RouteProp<HomeStackParameterList, 'HomePage'>>();

  // ViewDetails
  const {goBack, navigate} =
    useNavigation<NativeStackNavigationProp<HomeStackParameterList>>();
  const insets = useSafeAreaInsets();
  const {params} = route;
  return (
    <TouchableOpacity
      onPress={() =>
        navigate('ViewDetails', {
          source,
          author,
          title,
          description,
          url,
          urlToImage,
          publishedAt,
          content,
        })
      }>
      <View>
        <ImageBackground
          source={{uri: urlToImage}}
          resizeMode="cover"
          style={{
            overflow: 'hidden',
            backgroundColor: 'rgb(131 129 133, 0.5)',
            width: 370,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            paddingHorizontal: 10,
          }}>
          <View>
            <Text
              style={{
                marginTop: 60,
                fontWeight: '800',
                fontSize: 10,
                color: '#ffffff',
              }}>
              by {author}
            </Text>
            <Text
              style={{
                marginTop: 30,
                fontWeight: '700',
                fontSize: 16,
                color: '#ffffff',
                fontFamily: 'Nunito-Black',
              }}>
              {title}
            </Text>
            <Text
              style={{
                marginTop: 50,
                fontWeight: '400',
                fontSize: 10,
                color: '#ffffff',
                lineHeight: 13,
              }}>
              {content}
            </Text>
            {publishedAt}
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default TopCard;

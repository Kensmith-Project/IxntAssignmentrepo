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
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {VFC} from 'react';
import React from 'react';
import {Searchbar} from 'react-native-paper';
import {ArticleResponseType} from '../../shared/redux/types';

import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';

import {HomeStackParameterList} from '../../shared/navigations/HomeStackNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export type DownCardProps = {
  image?: () => void;
  poster?: string;
  title?: string;
  text?: string;
  navigate?: () => void;
  date?: string;
};

const DownCard = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}: ArticleResponseType) => {




  // ViewDetails

  const route = useRoute<RouteProp<HomeStackParameterList, 'HomePage'>>();
  const {goBack, navigate} =
    useNavigation<NativeStackNavigationProp<HomeStackParameterList>>();
  const insets = useSafeAreaInsets();
  const {params} = route;
  return (
    <TouchableOpacity style={{width: '100%', marginTop: 3}}
    
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
    }
    >
      <View>
        <ImageBackground
          source={{uri: urlToImage}}
          resizeMode="cover"
          style={{
            overflow: 'hidden',
            backgroundColor: 'rgb(131 129 133, 0.5)',
            width: '100%',
            height: 120,
            justifyContent: 'space-between',
            //   alignItems:'center',
            borderRadius: 10,
          }}>
          <View style={{paddingHorizontal: 10, paddingVertical: 5}}>
            <View>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 16,
                  color: '#ffffff',
                  fontFamily: 'Nunito-Regular',
                }}>
                {title?.toString(70)}
              </Text>
            </View>
            <View
              justifyContent={'space-between'}
              alignItems={'flex-end'}
              flexDirection={'row'}
              marginTop={60}>
              <View>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 12,
                    color: '#ffffff',
                    fontFamily: 'Nunito-Medium',
                  }}>
                  {author}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 12,
                    color: '#ffffff',
                    fontFamily: 'Nunito-Medium',
                  }}>
                  {publishedAt}
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default DownCard;

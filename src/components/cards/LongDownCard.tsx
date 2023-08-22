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
export type DownCardProps = {
  image?: () => void;
  poster?: string;
  title?: string;
  text?: string;
  navigate?: () => void;
  date?: string;
};

const DownCard = ({
  image,
  poster,
  title,
  text,
  navigate,
  date,
}: DownCardProps) => {
  return (
    <TouchableOpacity style={{width: '100%', marginTop: 10}}>
      <View>
        <ImageBackground
          source={image}
          resizeMode="cover"
          style={{
            overflow: 'hidden',
            backgroundColor: 'rgb(131 129 133, 0.5)',
            width: '100%',
            height: 120,
            justifyContent: 'space-between',
            //   alignItems:'center',
            borderRadius: 10,
          }}></ImageBackground>

        <View style={{marginTop: 15}}>
          <Text
            style={{
              color: '#2E0505',
              fontFamily: 'Nunito-regular',
              fontSize: 12,
            }}>
           {date}
          </Text>

          <Text
            style={{
              color: '#121212',
              fontFamily: 'Nunito-Bold',
              fontSize: 14,
              marginTop: 15,
            }}>
           {title}
          </Text>
          <Text
            style={{
              color: '#121212',
              fontFamily: 'Nunito-Regular',
              fontSize: 14,
              marginTop: 15,
              lineHeight: 20,
            }}>
           {text}
            <Text
              style={{
                color: '#0080FF',
                fontFamily: 'Nunito-Regular',
                fontSize: 14,
              }}>
              ...Read More
            </Text>
          </Text>

          <Text
            style={{
              color: '#2E0505',
              fontFamily: 'Nunito-Bold',
              fontSize: 12,
              marginTop: 15,
            }}>
            Published by {poster}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DownCard;

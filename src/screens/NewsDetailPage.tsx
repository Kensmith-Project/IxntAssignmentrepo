import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  TextField,
  VStack,
  HStack,
} from 'native-base';
import {SafeAreaView, Platform} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {VFC} from 'react';
import {Box} from '../shared/layout/Box';
import {ImageBackground} from 'react-native';

const NewsDetailPage = () => {
  return (
    <Box>
      <ImageBackground
        source={require('../assets/DetailBack.png')}
        resizeMode="cover"
        style={{
          backgroundColor: 'rgb(131 129 133, 0.5)',
          width: '100%',

          //   alignItems:'center',
          borderRadius: 10,
        }}>
        <Text>Helleo</Text>
      </ImageBackground>
    </Box>
  );
};

export default NewsDetailPage;

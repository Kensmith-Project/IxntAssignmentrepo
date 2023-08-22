import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  TextField,
  VStack,
  HStack,
  Image,
  Pressable,
} from 'native-base';
import {SafeAreaView, Platform, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {VFC} from 'react';
import {Box} from '../shared/layout/Box';
import {ImageBackground} from 'react-native';
import {BounceIn} from 'react-native-reanimated';
import {ArticleResponseType} from '../shared/redux/types';

const NewsDetailPage = ({navigation, route}) => {
  type Title = {
    title?: string;
  };
  console.log('Dee========params=====', route.params);
  const details: ArticleResponseType = route.params;
  const Data: Title[] = [
    {
      title: `LONDON — Cryptocurrencies “have no intrinsic value” and people who invest in them should be prepared to lose all their money, Bank of England Governor Andrew Bailey said.

    Digital currencies like bitcoin, ether and even dogecoin have been on a tear this year, reminding some investors of the 2017 crypto bubble in which bitcoin blasted toward $20,000, only to sink as low as $3,122 a year later.
    
    Asked at a press conference Thursday about the rising value of cryptocurrencies, Bailey said: “They have no intrinsic value. That doesn’t mean to say people don’t put value on them, because they can have extrinsic value. But they have no intrinsic value.”
    
    “I’m going to say this very bluntly again,” he added. “Buy them only if you’re prepared to lose all your money.”
    
    Bailey’s comments echoed a similar warning from the U.K.’s Financial Conduct Authority.
    
    “Investing in cryptoassets, or investments and lending linked to them, generally involves taking very high risks with investors’ money,” the financial services watchdog said in January.
    
    “If consumers invest in these types of product, they should be prepared to lose all their money.”
    
    Bailey, who was formerly the chief executive of the FCA, has long been a skeptic of crypto. In 2017, he warned: “If you want to invest in bitcoin, be prepared to lose all your money.”`,
    },
  ];

  const renderItem = ({item}: {item: Title}) => {
    return <Text>{item.title}</Text>;
  };
  return (
    <Box style={{flex: 1}}>
      <ImageBackground
        source={{uri: details.urlToImage}}
        resizeMode="cover"
        style={{
          // backgroundColor: 'rgb(131 129 133, 0.5)',

          flex: 1,
        }}>
        <Pressable
          style={{marginLeft: 10, marginTop: 15}}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('../assets/navbackarrow.png')}
            style={{width: 30, height: 30}}
          />
        </Pressable>

        <View
          style={{
            backgroundColor: '#ffffff',
            marginTop: '70%',
            height: '60%',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}>
          <Box
            style={{
              marginTop: -90,
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}>
            <Pressable
              style={{
                borderRadius: 10,
                width: '100%',
                backgroundColor: '#a9a3a7',
                padding: 15,
              }}>
              <Text
                style={{
                  color: '#2E0505',
                  fontSize: 12,
                  fontFamily: 'Nunito-Regular',
                }}>
                {details.publishedAt}
              </Text>
              <Text
                style={{
                  fontFamily: 'Nunito-Bold',
                  marginTop: 15,
                  fontSize: 16,
                  color: '#2E0505',
                }}>
                {details.title}
              </Text>

              <Text style={{color: '#2E0505', fontSize: 10, marginTop: 15}}>
                Published by {details.author}
              </Text>
            </Pressable>
          </Box>
          <ScrollView
            style={{height: '100%', paddingVertical: 20}}
            showsVerticalScrollIndicator={false}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '600',
                color: 'black',
                fontFamily: 'Nunito-Medium',
              }}>
              {details.content}
            </Text>
          </ScrollView>

          <Box
            style={{
              // borderRadius: 10,
              // backgroundColor: '#ee6e73',
              width: 300,
              position: 'absolute',
              bottom: 100,
              right: -220,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../assets/FAB.png')}
                style={{width: 50, height: 50, borderRadius: 50}}
              />
            </TouchableOpacity>
          </Box>
          {/* <FlatList data={Data} renderItem={renderItem}/> */}
        </View>
      </ImageBackground>
    </Box>
  );
};

export default NewsDetailPage;

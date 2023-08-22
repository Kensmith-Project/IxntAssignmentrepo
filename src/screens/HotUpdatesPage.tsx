import React from 'react';
import {
  View,
  ScrollView,
  FlatList,
  Text,
  TextField,
  VStack,
  HStack,
  useDisclose,
  Actionsheet,
  Pressable,
  Image,
} from 'native-base';

import {
  SafeAreaView,
  Platform,
  StatusBar,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {VFC, useState} from 'react';

import {Searchbar} from 'react-native-paper';
import {SearchBarEle} from '@rneui/themed';
import {Box} from '../shared/layout/Box';
import TopCard from '../components/cards/TopCard';
import {TopCardProps} from '../components/cards/TopCard';
import icon from '../assets/TopScroolframeImagBack.png';
import DownCard from '../components/cards/DownCard';
import {DownCardProps} from '../components/cards/DownCard';
import {TapGestureHandler} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useGetNewsByNameQuery} from '../shared/redux/news';
import {ArticleResponseType} from '../shared/redux/types';
import {constants} from '../shared/redux/constant';
import Spinner from 'react-native-loading-spinner-overlay';

const HotUpdatesPage = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const searchwith = Dimensions.get('window').width * 0.85;

  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search);
  };

  //Searcg Queries

  const [searchQuery, setSearchQuery] = React.useState('');

  //Serearch
  const onChangeSearch = (query: any) => setSearchQuery(query);

  const {isOpen, onOpen, onClose} = useDisclose();

  const topdata: TopCardProps[] = [
    {
      image: require('../assets/TopScroolframeImagBack.png'),
      poster: 'Michelee',
      title: 'Seen the main',
      text: 'The representative of the African Continents for the betterment of civil society',
    },
    {
      image: require('../assets/TopScroolframeImagBack.png'),
      poster: 'Michelee',
      title: 'Seen the main',
      text: 'The representative of the African Continents for the betterment of civil society',
    },
    {
      image: require('../assets/TopScroolframeImagBack.png'),
      poster: 'Michelee',
      title: 'Seen the main',
      text: 'The representative of the African Continents for the betterment of civil society',
    },
    {
      image: require('../assets/TopScroolframeImagBack.png'),
      poster: 'Michelee',
      title: 'Seen the main',
      text: 'The representative of the African Continents for the betterment of civil society',
    },
  ];
  const downdata: DownCardProps[] = [
    {
      image: require('../assets/hotupdateTopImage.png'),
      poster: 'Michelee',
      title: 'Seen the main',
      // text: 'The representative of the African Continents for the betterment of civil society',
      date: 'Sunday, 9 May 2021',
    },
    {
      image: require('../assets/hotupdateTopImage.png'),
      poster: 'Michelee',
      title: 'Seen the main',
      // text: 'The representative of the African Continents for the betterment of civil society',
      date: 'Sunday, 9 May 2021',
    },
    {
      image: require('../assets/hotupdateTopImage.png'),
      poster: 'Michelee',
      title: 'Seen the main',
      // text: 'The representative of the African Continents for the betterment of civil society',
      date: 'Sunday, 9 May 2021',
    },
    {
      image: require('../assets/hotupdateTopImage.png'),
      poster: 'Michelee',
      title: 'Seen the main',
      // text: 'The representative of the African Continents for the betterment of civil society',
      date: 'Sunday, 9 May 2021',
    },
  ];

  type ItemData = {
    id: string;
    title: string;
  };
  type ItemInnerData = {
    id: string;
    title: string;
  };

  const DATA: ItemData[] = [
    {
      id: '1',
      title: 'Health',
    },
    {
      id: '2',
      title: 'Technology',
    },
    {
      id: '3',
      title: 'Finance',
    },
    {
      id: '4',
      title: 'Arts',
    },
    {
      id: '5',
      title: 'Sports',
    },
  ];
  const DATA2: ItemInnerData[] = [
    {
      id: '1ww',
      title: 'Recommended',
    },
    {
      id: '2ee',
      title: 'Latest',
    },
    {
      id: '3ee',
      title: 'Most Viewed',
    },
    {
      id: '4ee',
      title: 'Channel',
    },
    {
      id: '5dd',
      title: 'Following',
    },
  ];

  ///Network state management

  const {
    data: topNewsData,
    error,
    isLoading,
    isSuccess,
  } = useGetNewsByNameQuery(constants.key);

  React.useEffect(() => {
    if (isSuccess) {
      console.log('successfully fetched', topNewsData);
    } else if (error) {
      Alert.alert('failed to fetch');
      console.log('====error is====', JSON.stringify(error));
    }
  }, [topNewsData]);

  const completeData: ArticleResponseType[] = topNewsData?.articles;

  type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
  };
  type ItemInnerProps = {
    item: temInnerData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
  };

  const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
    <TouchableOpacity
      style={{
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 8,
        paddingBottom: 8,
        borderWidth: 1,
        borderColor: '#F0F1FA',
        borderRadius: 20,
        marginRight: 11,
        backgroundColor: backgroundColor,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: textColor,
          fontFamily: 'Nunito-Medium',
        }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
  const ItemTwo = ({
    item,
    onPress,
    backgroundColor,
    textColor,
  }: ItemInnerPropss) => (
    <TouchableOpacity
      style={{
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 8,
        paddingBottom: 8,
        borderWidth: 1,
        borderColor: '#F0F1FA',
        borderRadius: 20,
        marginRight: 11,
        backgroundColor: backgroundColor,
      }}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: '600',
          color: textColor,
          fontFamily: 'Nunito-Medium',
        }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const renderItemColor = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#ff434c' : '#FFFFFF';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
          onOpen();
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };
  const renderItemColorInner = ({item}: {item: ItemInnerData}) => {
    const backgroundColor = item.id === selectedId ? '#ff434c' : '#FFFFFF';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const renderItem = ({item}: {item: TopCardProps}) => {
    return (
      <TopCard
        image={item.image}
        poster={item.poster}
        title={item.title}
        text={item.text}
      />
    );
  };

  const renderItemsecond = ({item}: {item: ArticleResponseType}) => {
    return (
      <DownCard
        urlToImage={item.urlToImage}
        author={item.author}
        title={item.title}
        date={item.publishedAt}
      />
    );
  };
  return (
    <>
      <Spinner visible={isLoading} />

      <ScrollView
        style={{padding: 10, flex: 1, backgroundColor: '#FFFFFF'}}
        showsVerticalScrollIndicator={false}>
        <Box>
          <HStack
            style={{
              width: '100%',
              marginBottom: 15,
              justifyContent: 'space-between',
            }}>
            <Searchbar
              style={{
                width: '100%',
                backgroundColor: 'transparent',
                borderColor: '#818181',
                borderWidth: 0.5,
                borderRadius: 50,
                alignContent: 'center',
                height: 45,
                alignItems: 'center',
              }}
              placeholder="Dogecoin to the Moon..."
              placeholderTextColor={'#818181'}
              onChangeText={onChangeSearch}
              value={searchQuery}
              iconColor="#6a6a6a"
            />
          </HStack>

          <View style={{marginTop: 30}}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={DATA}
              renderItem={renderItemColor}
              keyExtractor={item => item.id}
              extraData={selectedId}
            />
          </View>

          <View
            style={{
              width: '100%',

              marginTop: 20,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                // color: '#ffffff',
                fontFamily: 'Nunito-Regular',
              }}>
              About 11,130,0000 results for{' '}
              <Text
                style={{
                  fontWeight: '500',
                  fontSize: 15,
                  // color: '#ffffff',
                  fontFamily: 'Nunito-Bold',
                }}>
                COVID NEW Variant
              </Text>
            </Text>
          </View>
          <View style={{}}>
            <FlatList
              data={completeData}
              renderItem={renderItemsecond}
              showsVerticalScrollIndicator={true}
              ItemSeparatorComponent={
                <Text style={{marginLeft: 10}}>{''}</Text>
              }
              style={{marginTop: 10, paddingVertical: 20}}
            />

            {/* <ScrollView style={{}}>
      {downdata.map((item,idx)=>{
        return (
          <DownCard
            image={item.image}
            poster={item.poster}
            title={item.title}
            date={item.date}
          />

        )
      })}
      </ScrollView> */}
          </View>

          <Actionsheet
            hideDragIndicator={true}
            isOpen={isOpen}
            onClose={onClose}>
            <Actionsheet.Content p={0} pt={5}>
              <View
                style={{
                  width: '100%',
                  paddingHorizontal: 10,
                  paddingTop: 20,
                  paddingBottom: 40,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 20,
                      // color: '#ffffff',
                      fontFamily: 'Nunito-Bold',
                    }}>
                    Filter
                  </Text>
                  <TouchableOpacity
                    style={{
                      paddingTop: 4,
                      paddingBottom: 4,
                      paddingHorizontal: 20,
                      borderWidth: 1,
                      borderColor: 'black',
                      borderRadius: 20,
                      marginRight: 11,
                      backgroundColor: 'tranparent',
                    }}>
                    <Image
                      source={require('../assets/deleteicon.png')}
                      alt=""
                      style={{width: 15, height: 15}}
                    />
                  </TouchableOpacity>
                </View>

                <View style={{marginTop: 30}}>
                  <View style={{marginBottom: 10}}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: '600',
                        color: 'black',
                        fontFamily: 'Nunito-Medium',
                      }}>
                      Sort By
                    </Text>
                  </View>
                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={DATA2}
                    renderItem={renderItemColorInner}
                    keyExtractor={item => item.id}
                    extraData={selectedId}
                  />
                </View>

                <Pressable
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 30,
                    backgroundColor: '#FF3A44',
                    paddingVertical: 5,
                    borderRadius: 30,
                    height: 50,
                  }}
                  onPress={() => onClose()}>
                  <Text
                    style={{
                      fontWeight: '500',
                      fontSize: 15,
                      color: '#ffffff',
                      fontFamily: 'Nunito-Bold',
                    }}>
                    SAVE
                  </Text>
                </Pressable>
              </View>
            </Actionsheet.Content>
          </Actionsheet>
        </Box>
      </ScrollView>
    </>
  );
};

export default HotUpdatesPage;

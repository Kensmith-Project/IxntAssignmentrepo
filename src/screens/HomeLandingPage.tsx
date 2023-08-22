import {
  View,
  ScrollView,
  FlatList,
  Text,
  TextField,
  VStack,
  HStack,
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
  Alert,
  ImageBackground,
} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {VFC, useState} from 'react';
import React from 'react';
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
import {useGetTopHeadLinesByNameQuery} from '../shared/redux/news';
import {constants} from '../shared/redux/constant';
import {ArticleResponseType} from '../shared/redux/types';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParameterList} from '../shared/navigations/HomeStackNavigation';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Spinner from 'react-native-loading-spinner-overlay';

const HomeLandingPage = () => {
  const [selectedId, setSelectedId] = useState<string>();
  const searchwith = Dimensions.get('window').width * 0.85;

  const [search, setSearch] = useState('');

  //NetworkSates

  // Using a query hook automatically fetches data and returns query values
  const {
    data: topNewsData,
    error,
    isLoading,
    isSuccess,
  } = useGetTopHeadLinesByNameQuery(constants.key);
  // Individual hooks are also accessible under the generated endpoints:
  React.useEffect(() => {
    if (isSuccess) {
      console.log('successfully fetched', topNewsData);
    } else if (error) {
      Alert.alert('failed to fetch');
      console.log('====error is====', JSON.stringify(error));
    }
  }, [topNewsData]);

  const updateSearch = search => {
    setSearch(search);
  };

  const route = useRoute<RouteProp<HomeStackParameterList, 'HomePage'>>();

  // ViewDetails
  const {goBack, navigate} =
    useNavigation<NativeStackNavigationProp<HomeStackParameterList>>();
  const insets = useSafeAreaInsets();
  const {params} = route;

  //Searcg Queries

  const [searchQuery, setSearchQuery] = React.useState('');

  //Serearch
  const onChangeSearch = (query: any) => setSearchQuery(query);

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
  const completeData: ArticleResponseType[] = topNewsData?.articles;

  type ItemData = {
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

  type ItemProps = {
    item: ItemData;
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

  const handleTypeSelect = (value: any) => {
    console.log(value);
    setState(prevState => ({
      ...prevState,
      type: value,
    }));
  };
  const renderItemColor = ({item}: {item: ItemData}) => {
    const backgroundColor = item.id === selectedId ? '#ff434c' : '#FFFFFF';
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  const renderItem = ({item}: {item: ArticleResponseType}) => {
    return (
      <TopCard
        urlToImage={item.urlToImage}
        author={item.author}
        title={item.title}
        content={item.content?.substring(0, 300)}
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
                width: searchwith,
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
            <View
              style={{
                width: 35,
                height: 35,
                backgroundColor: '#FF3A44',
                borderRadius: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../assets/notificationbell.png')}
                style={{width: 13, height: 13}}
              />
            </View>
          </HStack>

          <View
            style={{
              width: '100%',
              justifyContent: 'space-between',
              marginTop: 20,
              flexDirection: 'row',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                fontFamily: 'Nunito-Black',
              }}>
              Latest News
            </Text>
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: '#0080FF',
                  marginRight: 10,
                  fontFamily: 'Nunito-Medium',
                }}>
                See All
              </Text>
              <Image
                source={require('../assets/leftarrow.png')}
                style={{width: 12, height: 10}}
              />
            </Pressable>
          </View>

          <View>
            {/* <TopCard image={}/> */}
            <FlatList
              data={completeData}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={
                <Text style={{marginLeft: 10}}>{''}</Text>
              }
              style={{marginTop: 10}}
            />
          </View>

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
        </Box>
      </ScrollView>
    </>
  );
};

export default HomeLandingPage;

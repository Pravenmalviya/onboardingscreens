import {
  View,
  Dimensions,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../ReusebleComponent/Button';
const OnBoarding = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const [scrollIndex, setscrollIndex] = useState(0);
  const OnBoardingData = [
    {
      id: 1,
      title: 'Explore Your Best Route',
      desc: 'It’s easier than ever to travel throughout \nNew Jersey to New York ans Philadelphia',
      img: require('../../Assets/Image/Search.png'),
    },
    {
      id: 2,
      title: 'Explore Your Best Route',
      desc: 'It’s easier than ever to travel throughout \nNew Jersey to New York ans Philadelphia',

      img: require('../../Assets/Image/Search.png'),
    },
    {
      id: 3,
      title: 'Explore Your Best Route',
      desc: 'It’s easier than ever to travel throughout \nNew Jersey to New York ans Philadelphia',
      img: require('../../Assets/Image/Search.png'),
    },
  ];

  //   define scroll indicator
  const renderIndicator = () => {
    return (
      <View style={styles.indicatorContainer}>
        {OnBoardingData.map((item, index) => (
          <View
            key={index}
            style={[
              styles.indicators,
              {backgroundColor: scrollIndex == index ? 'black' : '#e1e2e3'},
            ]}
          />
        ))}
      </View>
    );
  };
  //   handle Scroll event with change indicator color
  const handleonScroll = event => {
    const ScrollIndex = event.nativeEvent.contentOffset.x;
    const index = ScrollIndex / width;
    setscrollIndex(index);
  };

  // Display data in flatlist
  const renderDAta = ({item, index}) => {
    return (
      <View>
        <Text style={styles.displaytitle}>{item.title}</Text>
        <Text style={styles.displayDiscripton}>{item.desc}</Text>
        <Image source={item.img} style={{height: height / 2, width: width}} />
      </View>
    );
  };

  return (
    <View style={styles.conatiner}>
      {renderIndicator()}

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={item => item.id}
        data={OnBoardingData}
        onScroll={handleonScroll}
        renderItem={renderDAta}
        pagingEnabled={true}
      />
      {/* get started Button */}
      <CustomButton
        title={'Get Started'}
        buttonStyle={{width: '80%',  backgroundColor: 'black'}}
      />

      {/*bottom line text*/}
      <View
        style={{
          justifyContent: 'center',
          marginVertical: 20,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={styles.normalText}>Want a ride? Launch the </Text>
        <TouchableOpacity>
          <Text style={styles.linkText}>Booking App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },

  //   design indicators
  indicatorContainer: {
    flexDirection: 'row', // To make the indicators appear horizontally
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  indicators: {
    flexDirection: 'column',

    height: 5,
    width: 45,
    borderRadius: 5,
    margin: 10,
  },
  //   diplay data style in flatlist

  displaytitle: {
    textAlign: 'center',
    color: '#090A0A',
    fontSize: 20,
    fontWeight: '800',
    padding: 10,
  },
  displayDiscripton: {
    textAlign: 'center',
    color: '#090A0A',
    fontSize: 16,
    padding: 10,
  },

  //   bottom line Text
  normalText: {
    fontSize: 16,
    color: '#090A0A',
    fontWeight: '400',
  },
  linkText: {
    fontSize: 16,
    color: '#470AB4',
    fontWeight: '600',
  },
});
export default OnBoarding;

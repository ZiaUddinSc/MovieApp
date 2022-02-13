/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {POSTER_IMAGE} from '../config';
import Constants from '../Constants';
import {GET} from '../Services/API';
import Styles from '../Styles';
import Loader from './Loader';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const MoviesList = props => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();

  useEffect(() => {
    const getMovies = async () => {
      const data = await GET(props.url);
      // alert(JSON.stringify(data));
      setMovies(data.results);
      setLoading(false);
    };

    getMovies();
  }, []);

  const onPressDetails = item => {
    props.navigation.push('movieDetails', {movieId: item.id});
  };

  return (
    <View style={{backgroundColor: Constants.baseColor}}>
      {loading ? (
        <Loader />
      ) : (
        <View>
          <Text style={Styles.heading}>{props.title}</Text>

          <ScrollView style={{height: windowHeight}}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-evenly',
              }}>
              {movies.map((item, i) => (
                <TouchableOpacity
                  key={i}
                  onPress={() => onPressDetails(item)}
                  testID="myButton"
                  style={{marginHorizontal: 10}}>
                  <Image
                    source={{uri: `${POSTER_IMAGE}${item.poster_path}`}}
                    style={Styles.posterImage}
                  />
                  <Text style={Styles.movieTitle}>{item.original_title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default MoviesList;

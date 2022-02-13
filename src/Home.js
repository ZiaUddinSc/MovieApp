import React from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import MoviesList from './Components/MoviesList';
import Constants from './Constants';

const Home = props => {
  return (
    <View style={[Styles.sectionBg, {backgroundColor: Constants.baseColor}]}>
      <MoviesList url="movie/popular" navigation={props.navigation} />
    </View>
  );
};

export default Home;

import React from 'react-native';

// Pick react parts
const {
  Image,
  View,
  StatusBar,
} = React;

// Load Images
import { Images } from './theme';

// Load stylesheets
import { RootStyle } from './styles';

// Main application container component
const Root = () =>
  (
    <View style={RootStyle.applicationView}>
      <StatusBar barStyle="default" />

      <View style={RootStyle.applicationContainer}>
        <Image source={Images.Logo} style={RootStyle.headlineImage} />
      </View>
    </View>
  );

export default Root;

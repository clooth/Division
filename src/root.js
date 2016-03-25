import React from 'react-native';

// Pick react parts
const {
  Component,
  Image,
  View,
  StatusBar,
  Text,
} = React;

// Load Images
import { Images } from './theme';

// Load stylesheets
import { RootStyle, CommonStyle } from './styles';

// Main application container component
export default class Root extends Component {
  render() {
    return (
      <View style={RootStyle.applicationView}>
        <StatusBar barStyle='default' />

        <View style={RootStyle.applicationContainer}>
          <Image source={Images.Logo} style={RootStyle.headlineImage} />
        </View>
      </View>
    )
  }
}

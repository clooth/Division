import React from 'react-native';
import { Colors } from '../theme';

const Styles = React.StyleSheet.create({
  applicationView: {
    flex: 1,
  },

  applicationContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  headlineImage: {
    height: 128,
    marginBottom: 20,
    resizeMode: 'contain',
    tintColor: Colors.CapeCod,
    width: 128,
  },
});

export default Styles;

import {StyleSheet} from 'react-native';
import {
  responsiveHeight as rh,
  responsiveWidth as rw,
  responsiveFontSize as rf,
} from 'react-native-responsive-dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  firstEndView: {
    height: rh(1),
  },
  spotifyIcon: {
    alignItems: 'center',
    height: rh(14.29),
    width: rw(30.5),
    tintColor: '#FFFFFF',
    alignSelf: 'center',
    marginTop: rh(10),
  },
  spotifyText: {
    color: '#FFFFFF',
    fontSize: rf(5.4),
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: rh(5),
  },
  singInwithSpotify: {
    justifyContent: 'center',
    backgroundColor: '#1DB954',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: rw(90),
    borderRadius: rh(3),
    alignItems: 'center',
    padding: rh(2),
    marginTop: rh(5),
    marginBottom: rh(1),
  },

  TouchableOpacityMainView: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  singInwithOther: {
    justifyContent: 'space-evenly',
    margin: rh(1),
    width: rw(90),
    borderRadius: rh(3),
    alignItems: 'center',
    padding: rh(2),
    flexDirection: 'row',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },

  phoneIcon: {
    height: rh(3),
    width: rw(5),
    marginRight: rh(4),
    tintColor: '#fff',
  },

  gogoleIcon: {
    height: rh(3.1),
    width: rw(6.5),
    marginRight: rh(4),
  },
  facebookIcon: {
    height: rh(3.4),
    width: rw(7),
    marginRight: rh(4),
  },

  singInwithSpotifyText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: rf(2),
    fontWeight: 'bold',
  },
});

export default styles;

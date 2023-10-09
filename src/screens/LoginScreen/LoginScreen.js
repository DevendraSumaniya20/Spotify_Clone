import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import ImagePath from '../../constants/ImagePath';

const LoginScreen = () => {
  const authenticate = () => {};

  return (
    <LinearGradient colors={['#040306', '#131624']} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <View style={styles.firstEndView} />
        <Image source={ImagePath.SPOTIFY1} style={styles.spotifyIcon} />
        <Text style={styles.spotifyText}>
          Million of songs Free on Spotify!
        </Text>

        <View style={styles.firstEndView} />
        <TouchableOpacity
          style={styles.singInwithSpotify}
          onPress={() => {
            authenticate();
          }}>
          <Text style={styles.singInwithSpotifyText}>Sign In with Spotify</Text>
        </TouchableOpacity>

        <View style={styles.TouchableOpacityMainView}>
          <TouchableOpacity style={styles.singInwithOther}>
            <Image source={ImagePath.PHONE} style={styles.phoneIcon} />
            <Text style={styles.singInwithSpotifyText}>
              Continue with Phone
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singInwithOther}>
            <Image source={ImagePath.GOGGLE} style={styles.gogoleIcon} />
            <Text style={styles.singInwithSpotifyText}>
              Continue with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.singInwithOther}>
            <Image source={ImagePath.FACEBOOK} style={styles.facebookIcon} />
            <Text style={styles.singInwithSpotifyText}>
              Continue with FaceBook
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;

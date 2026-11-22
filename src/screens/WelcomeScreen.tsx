import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Logo from '../components/Logo';
import CustomButton from '../components/CustomButton';

type Props = {
  navigation: (screen: string) => void;
};

export default function WelcomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>

      <View style={styles.logo}>
        <Logo />
      </View>

      <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Welcome to Skin Firts Dermatology Center.
      </Text>

      <View style={styles.buttons}>
        <CustomButton
          title="Log In"
          onPress={() => navigation('login')}
        />

        <CustomButton
          title="Sign Up"
          light
          onPress={() => navigation('signup')}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  logo: {
    marginBottom: 70,
  },
  description: {
    fontSize: 11,
    color: '#777777',
    textAlign: 'center',
    marginBottom: 30,
  },
  buttons: {
    width: '85%',
  },
});
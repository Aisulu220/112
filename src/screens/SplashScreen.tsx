import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
} from 'react-native';

import Logo from '../components/Logo';

type Props = {
  navigation: (screen: string) => void;
};

export default function SplashScreen({ navigation }: Props) {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation('welcome');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <Logo color="#FFFFFF" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3561F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
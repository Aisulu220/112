import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  light?: boolean;
};

export default function CustomButton({
  title,
  onPress,
  light = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        light && styles.lightButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          light && styles.lightText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3561F6',
    padding: 13,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  lightButton: {
    backgroundColor: '#DCE4FF',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  lightText: {
    color: '#3561F6',
  },
});
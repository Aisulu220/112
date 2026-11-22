import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

type Props = {
  title: string;
  placeholder: string;
  secure?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
};

export default function CustomInput({
  title,
  placeholder,
  secure = false,
  value,
  onChangeText,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9AA9D1"
        secureTextEntry={secure}
        value={value}
        onChangeText={onChangeText}
        autoCapitalize="none"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 7,
    color: '#222222',
  },
  input: {
    backgroundColor: '#EDF1FF',
    borderRadius: 9,
    paddingHorizontal: 13,
    height: 43,
    fontSize: 13,
    color: '#222222',
  },
});
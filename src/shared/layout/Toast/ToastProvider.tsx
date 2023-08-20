import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Toast from 'react-native-toast-message';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: '80%',
    backgroundColor: 'red',
    justifyContent: 'center',
    borderRadius: 8,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const toastConfig = {
  success: ({text1, text2}: {text1: string; text2: string}) => (
    <View style={[styles.container, {backgroundColor: 'green'}]}>
      <Text style={[styles.text, {fontSize: 16}]}>{text1}</Text>
      <Text style={styles.text}>{text2}</Text>
    </View>
  ),

  error: ({text1, text2}: {text1: string; text2: string}) => (
    <View style={styles.container}>
      <Text style={[styles.text, {fontSize: 16}]}>{text1}</Text>
      <Text style={[styles.text]}>{text2}</Text>
    </View>
  ),
};

const ToastMessage = () => <Toast config={toastConfig} />;

export default ToastMessage;

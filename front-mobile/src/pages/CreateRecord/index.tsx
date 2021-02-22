import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';

const CreatRecord = () => {
  return (
    <>
      <Header />
      <Text style={styles.text}> Hello create-record! </Text>
    </>
  );

}

const styles = StyleSheet.create({
  text: {
    color: '#FFF'
  }
});


export default CreatRecord;
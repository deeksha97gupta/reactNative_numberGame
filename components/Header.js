import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Colors from '../constants/color';

const Header = (props) => {
    return (
      <View style={{
          ...styles.header,
          ...Platform.select({
            ios: styles.headerIOS,
            android: styles.headerAndroid
          })}}>
          <Text style={styles.headerTitle}>{props.title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 90,
      paddingTop: 36,
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerIOS: {
      backgroundColor: 'white',
      borderBottomColor: '#ccc',
      borderBottomWidth: 1,
    },
    headerAndroid: {
      backgroundColor: Colors.primary
    },
    headerTitle: {
       color: 'black',
       fontSize: 18,
    }
});

export default Header;
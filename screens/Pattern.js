//imports 
import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import database from '@react-native-firebase/database';
// base color #1E88E5  royal blue

const Home = () => {
    return (
        <>
            <View style={styles.body}>
                <Text>
                    Hello World
                </Text>



            </View>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        display: flex,
        fontSize: 30
    }
})

export default Home;
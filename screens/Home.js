//imports 
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getStudents } from '../Store/Action'


/// --- yahn students render hongy

const Home = ({ navigation }) => {
    const Students = useSelector(state => state.student.students);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getStudents());
    }, [Students])

    const fetchData = () => {
        fetch("https://api.github.com/users/Muhammad-Usama-lab")
            .then((results) => {
                console.log(results)
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <>
            <Text style={styles.Text}>---Students---</Text>
            <ScrollView>
                {
                    Students.map((person, index) => {
                        return <View key={index} style={styles.Student}>
                            <Text style={styles.Name}>{person.Name}</Text>

                            <Text style={styles.Email}>{person.EmailAddress}</Text>
                            <Text style={styles.contact} >{`${person.Number} (Contact)`}</Text>
                            <Text style={styles.cnic}>{`${person.CNIC} (CNIC)`}</Text>
                        </View>
                    })
                }
            </ScrollView>
            <TouchableOpacity
                onPress={() => fetchData()}>
                <Text>GET DATA</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        fontSize: 30,
        alignItems: 'center'
    }, Student: {
        width: '90%',
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#90CAF9',
        margin: 5
    }, Name: {
        fontSize: 20,
        color: '#1E88E5', padding: 2
    }, Email: {
        fontSize: 13,
        color: '#455A64'
    }, contact: {
        fontSize: 13,
        color: '#455A64'
    }, cnic: {
        fontSize: 13,
        color: '#455A64'
    }, Text: {
        fontSize: 30,
        color: '#37474F',
        alignSelf: 'center',
        padding: 5
    }
})

export default Home;
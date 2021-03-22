//imports 
import React, { useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getCompany } from '../Store/Action'


const Company = () => {
    const Companies = useSelector(state => state.company.Company);
    const dispatch = useDispatch();
    useEffect(() => {
           
        dispatch(getCompany());

    },[Companies]);


   
    return (
        <>
         <Text style={styles.Text}>---Companies---</Text>
            <ScrollView>
                {
                    Companies.map((person, index) => {
                        return <View key={index} style={styles.Student}>
                            <Text style={styles.Name}>{`${person.JobDescription} (Job)`}</Text>
                                <Text style={styles.cnic}>{`${person.Name} (Company)`} </Text>
                            <Text style={styles.Email}>{person.EmailAddress}</Text>
                            <Text style={styles.contact} >{`${person.Number} (Contact)`}</Text>
                        </View>
                    })
                }
            </ScrollView>    

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
        alignSelf:'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#90CAF9',
        margin: 5
    }, Name: {
        fontSize:20,
        color:'#2f3640',padding:2
    },Email: {
        fontSize:13,
        color:'#455A64'
    },contact:{
        fontSize:13,
        color:'#455A64'
    },cnic:{
        fontSize:13,
        color:'#455A64'
    },Text:{
        fontSize:30,
        color:'#37474F',
        alignSelf:'center',
        padding:5
    }
})

export default Company;
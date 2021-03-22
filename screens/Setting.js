//imports 
import 'react-native-gesture-handler'
import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import Img from '../assets/Images/profile-user.png'
import database from '@react-native-firebase/database'
import { useSelector } from 'react-redux';


const Setting = ({ navigation }) => {
    const [user, setUser] = useState({});
    const uid = useSelector(state => state.user.UserID);
    const User = useSelector(state => state.user.User);

    useEffect(() => {
        setTimeout(() => {
            if (User === "Student") {
                database().ref(`/Students/${uid}`).on('value', (data) => {
                    console.log(data.val())
                    setUser(data.val());
                });
            }else if(User === "Admin"){
                database().ref(`/Admins/${uid}`).on('value', (data) => {
                    console.log(data.val())
                    setUser(data.val());
                });
            }else if(User === "Company"){
                database().ref(`/Company/${uid}`).on('value', (data) => {
                    console.log(data.val())
                    setUser(data.val());
                });
            }
        }, 1000)

    }, []);

    return (
        <>
            <View style={styles.body}>
                <View style={styles.Container1}>
                    <Image source={Img} style={{ width: '50%', height: '50%', borderRadius: 50 }} />
                    <Text style={styles.Name}>
                        {user.Name}
                    </Text>
                    <Text style={styles.email}>
                        {`${user.EmailAddress}`}
                    </Text>

                </View>
                <View style={styles.Container2}>
                    <Text style={styles.Text}> Information </Text>
                    { (User === "Student" || User ==="Admin")?
                    <Text style={{fontSize:15,color:'#546E7A'}}> {`CNIC    : ${user.CNIC}`} </Text>:
                    <Text style={{fontSize:15,color:'#546E7A'}}> {`Job Description    : ${user.JobDescription}`} </Text>}
                    <Text style={{fontSize:15,color:'#546E7A'}}> {`Contact : ${user.Number}`} </Text>
                    <Text style={{fontSize:15,color:'#546E7A'}}> {`Address : ${user.Address}`} </Text>


                </View>

                <Text>

                </Text>



            </View>
        </>
    )
}

const styles = StyleSheet.create({
    body: {
        fontSize: 30
    }, Container1: {
        justifyContent: 'center'
        , alignItems: 'center',
        // flexDirection:'column',
        backgroundColor: '#4FC3F7'

    },
    Container2: {
        justifyContent: 'center' 

    }, Name: {
        fontSize: 30,
        color: '#455A64'
    }, email: {
        fontSize: 15,
        color: '#78909C'
    },Text:{
        fontSize:30,
        color:'#37474F',
        alignSelf:'center',
        padding:5
    }
})

export default Setting;
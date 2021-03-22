import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
const drop = require('../assets/Images/recruitment.png');
import { setUserID } from '../Store/Action';
import { useSelector, useDispatch } from 'react-redux';


export default function LoginScreen({ navigation }) {
    const UID = useSelector(state => state.user.UserID);
    const User = useSelector(state => state.user.User);
    const dispatch = useDispatch();


    useEffect(() => {
    }, [UID]);


    const Login = () => {
        auth().signInWithEmailAndPassword(username, password)
            .then(() => {
                console.log('User account created & signed in!');
                auth().onAuthStateChanged((user) => {
                    if (user) {
                        setTimeout(() => {
                            console.log("In Login recieved from server uid: " + user.uid);
                            dispatch(setUserID(user.uid));
                            console.log("In Login recieved from Redux: " + UID);
                        }, 1000);
                    }
                });

                navigation.navigate('Navigator')
            })
            .catch(error => {
                if (error.code === 'auth/user-not-found') {
                    alert('User not Found')
                }

                if (error.code === 'auth/invalid-email') {
                    alert('Invalid Email')
                }
                if (error.code === 'auth/wrong-password') {
                    alert('Wrong Password')
                }

                console.error(error);
            });

    }
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <ScrollView style={styles.body}>
            <View style={styles.section1}>
                <Image source={drop} style={styles.image} />
                <Text style={styles.Heading}>{`Login as ${User}`} </Text>


            </View>
            <View style={styles.section2}>
                <TextInput
                    style={styles.input}
                    placeholder="enter email address"
                    keyboardType='email-address'
                    onChangeText={(text) => setUsername(text)}
                    value={username}
                />

                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                    placeholder="enter password"
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />


                <TouchableOpacity
                    onPress={() => Login()}
                >
                    <Text style={styles.Btn}>
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.section3}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('createaccount')}
                >
                    <Text style={styles.text}>
                        Don't have account ? <Text style={{ textDecorationLine: 'underline' }}>SignUp</Text>
                    </Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1

    }, section1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
    , section2: {
        flex: 2,
        alignItems: 'center'

    }, section3: {
        flex: 0.5,

    }, image: {
        width: 100,
        height: 100,

    }, Heading: {
        color: '#1E88E5',
        fontSize: 30,

    }, input: {
        height: 45,
        width: '80%',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 10,
        fontSize: 20,
    }, Btn: {
        width: 80,
        textAlign: 'center',
        fontSize: 18,
        backgroundColor: '#1E88E5',
        color: 'white',
        padding: 10,
        margin: 20,
        borderRadius: 10
    }, text: {
        color: 'gray',
        fontSize: 15,
        margin: 10,
        alignSelf: 'center'
    }
});
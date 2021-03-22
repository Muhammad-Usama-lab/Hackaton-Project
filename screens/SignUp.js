import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { addStudent, setUserID } from '../Store/Action'
import { useDispatch, useSelector } from 'react-redux'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Switch, TextInput } from 'react-native'
import auth from '@react-native-firebase/auth';
// import { Picker } from '@react-native-picker/picker';
import database from '@react-native-firebase/database';

const SignUp = ({ navigation }) => {

    useEffect(() => {
        
    }, [UID]);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cnic, setCnic] = useState('');
    const [description,setDescription]=useState('');

    const dispatch = useDispatch();
    const User = useSelector(state => state.user.User);
    const UID = useSelector(state => state.user.UserID);
    const createAccount = () => {
//!(name != "" && address != "" && phoneNumber != "" && cnic != "")
        if (true){
            auth().createUserWithEmailAndPassword(email, password)
                .then(() => {
                    auth().onAuthStateChanged((user) => {
                        if (user) {
                            setTimeout(() => {
                                console.log("IN SignUp UID receieved from Server : " + user.uid)
                                dispatch(setUserID(user.uid))
                                console.log("IN SignUp UID receieved from Redux : " + UID)
                            }, 1000);
                            let obj = {};
                            if (User === "Company") {
                                obj = {
                                    id: `${user.uid}`,
                                    Name: name,
                                    Address: address,
                                    EmailAddress: email,
                                    Number: phoneNumber,
                                    JobDescription:description
                                }
                            } else {
                                obj = {
                                    id: `${user.uid}`,
                                    Name: name,
                                    Address: address,
                                    EmailAddress: email,
                                    CNIC: cnic,
                                    Number: phoneNumber
                                }
                            }
                            if (User === "Student") {
                                database().ref('/').child(`Students/${user.uid}`).set(obj)
                                dispatch(addStudent(obj))
                                navigation.navigate('Navigator');
                            } else if (User === "Admin") {
                                database().ref('/').child(`Admins/${user.uid}`).set(obj)
                                dispatch(addStudent(obj))
                                navigation.navigate('Navigator');
                            } else if (User === "Company") {
                                database().ref('/').child(`Company/${user.uid}`).set(obj)
                                dispatch(addStudent(obj))
                                navigation.navigate('Navigator');

                            }
                        }
                    });
                }).catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        alert('This email address is already in use! SignIn instead');
                    }

                    if (error.code === 'auth/invalid-email') {
                        alert('Please provide valid Email Address')
                    }
                    if (error.code === 'auth/weak-password') {
                        alert('Enter a strong password for your account');
                    }

                    console.error(error);
                });








        } else {
            alert('Please fill all fields')
        }

    }

    return (
        <ScrollView>
            <View style={styles.body}>


                <View style={styles.section1}>

                    <Text style={styles.Heading}>Sign <Text style={{ color: 'gray' }}>Up</Text></Text>

                </View>
                <View style={styles.section2}>

                    <TextInput
                        placeholder={`${(User === "Student" || User === "Admin") ? 'Enter Name' : 'Enter Company Name'}`}
                        name={`${(User === "Student" || User === "Admin") ? 'Name' : 'companyName'}`}
                        value={name}
                        style={styles.input}
                        onChangeText={(text) => setName(text)}
                    />


                    <TextInput
                        placeholder='Email Address'
                        name="email"
                        value={email}
                        keyboardType="email-address"
                        style={styles.input}
                        onChangeText={(text) => setEmail(text)}
                    />
                    {(User === "Student" || User === "Admin") ?
                        <TextInput
                            placeholder='Enter 13 digit CNIC'
                            name="cnic"
                            value={cnic}
                            keyboardType="number-pad"
                            style={styles.input}
                            maxLength={13}
                            onChangeText={(text) => setCnic(text)}
                        /> : 
                        <TextInput
                            placeholder='Enter Job Description'
                            name="description"
                            value={description}
                            style={styles.input}
                            onChangeText={(text) => setDescription(text)}
                        /> }
                    <TextInput
                        placeholder={`${(User === "Student" || User === "Admin") ? 'Address' : 'Company Address'}`}
                        name="address"
                        value={address}
                        style={styles.input}
                        onChangeText={(text) => setAddress(text)}
                    />
                    <TextInput
                        placeholder='Phone number'
                        name="phoneNumber"
                        value={phoneNumber}
                        maxLength={11}
                        keyboardType="number-pad"
                        style={styles.input}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />


                    <TextInput
                        placeholder='Password'
                        name="password"
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                </View>
                <View style={styles.section3}>
                    <TouchableOpacity
                        onPress={() => createAccount()}
                        style={styles.Btn}
                    >
                        <Text style={styles.text}>
                            Create Account
                    </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section3}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ color: 'gray', fontSize: 15, padding: 10, width: '100%', textAlign: 'center' }}>
                            Already have account ? <Text style={{ textDecorationLine: 'underline' }}>SignIn</Text>
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    )


}

const styles = StyleSheet.create({
    body: {
        flex: 1

    }, section1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, Heading: {
        fontSize: 30,
        color: '#1E88E5',
        letterSpacing: 0
    }
    , section2: {
        flex: 4,
        alignItems: 'center'
    }, section3: {
        flex: 1,

    }, input: {
        height: 45,
        width: '80%',
        borderColor: '#E0E0E0',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        margin: 5,
        fontSize: 20,
    }, text: {
        color: 'white',
        fontSize: 18,
        margin: 5,
        alignSelf: 'center'
    }, Btn: {
        width: '80%',
        alignSelf: 'center',
        fontSize: 18,
        backgroundColor: '#1E88E5',
        color: 'white',
        padding: 5,
        margin: 20,
        borderRadius: 10
    }, pickerView: {
        borderWidth: 1,
        width: '80%',
        borderColor: '#E0E0E0'
        , borderRadius: 10


    }, note: {
        fontSize: 15,
        color: 'gray',
        alignSelf: 'flex-start',
        marginRight: 100

    }
});

export default SignUp;


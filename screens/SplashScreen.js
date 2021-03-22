import 'react-native-gesture-handler'
//imports 
import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import logo from '../assets/Images/recruitment.png';
import { RadioButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from '../Store/Action';

// base color #1E88E5  royal blue

const SplashScreen = ({navigation}) => {

    const [checked, setChecked] = React.useState('');
    const dispatch = useDispatch();
    
    
    useEffect(() => {        

        }, [checked]);
    return (
        <>
            <View style={styles.body}>
                <View style={styles.container1} >

                    <Image style={styles.Logo} source={logo} />

                </View>
                <View style={styles.container2} >

                    <Text style={styles.text}>
                        Recruiter App
                    </Text>

                </View>
                    <Text style={{fontSize:20,color:'gray',textAlign:'center'}}>
                        Continue as
                    </Text>
                <View style={styles.RadioContainer}>
                <Text>Admin</Text><RadioButton
                    value="Admin"
                    color="#1E88E5"
                    status={checked === 'Admin' ? 'checked' : 'unchecked'}
                    onPress={() => {setChecked('Admin')
                    dispatch(setUser("Admin"))
                    navigation.navigate('Login');}}
                />

                <Text>Student</Text>
                <RadioButton
                    value="Student"
                    color="#1E88E5"
                    status={checked === 'Student' ? 'checked' : 'unchecked'}
                    onPress={() => {setChecked('Student');
                    dispatch(setUser("Student"))
                    navigation.navigate('Login');
                }}
                />
                <Text>Company</Text>
                <RadioButton
                    value="Company"
                    color="#1E88E5"
                    status={checked === 'Company' ? 'checked' : 'unchecked'}
                    onPress={() => {setChecked('Company')
                    dispatch(setUser("Company"));
                    navigation.navigate('Login')
                }}
                />
            </View>
                <View style={styles.container3} >

                    <Text style={styles.copyright}>
                        @copyright <Text style={{fontWeight:'bold'}}>iTech by Usama</Text>
                    </Text>

                </View>


                <Text>

                </Text>
            </View>
        </>
    )
}
//#1E88E5
const styles = StyleSheet.create({
    body: {
        flex: 1,
        fontSize: 30,
        backgroundColor: '#42A5F5'

    }, container1: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'whitesmoke'
    }, container2: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    }, container3: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    }, copyright: {
        fontSize: 18,
        color: '#90CAF9'
    }, Logo: {
        width: '50%',
        height: '50%',
        borderRadius:100
    }, text:{
        color: 'whitesmoke',
        fontSize: 30,
        textAlign:'center',
        fontFamily:'sans-serif'
    }, RadioContainer: {
        flex: 1,
        alignSelf: 'center',
         alignItems: 'center',
         justifyContent:'center',
        flexDirection: 'row',
        backgroundColor: '#90CAF9'
        , padding: 10,
        width: '90%'
    }
})

export default SplashScreen;
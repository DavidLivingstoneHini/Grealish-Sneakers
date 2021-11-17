import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Login(params) {
    const navigation = params.navigation;
    return (
            <View>
                <TextInput 
                    placeholder='Card Number'
                    onChangeText={newTerm => this.setState({CardNumber: newTerm})}
                    style={styles.input}
                    multiline
                />
                <TextInput 
                    placeholder='Exp. Month/Year'
                    onChangeText={newTerm => this.setState({Expiration: newTerm})}
                    style={styles.input}
                    multiline
                />
                <TextInput 
                    placeholder='CVV'
                    onChangeText={newTerm => this.setState({CVV: newTerm})}
                    style={styles.input}
                    multiline
                />
                <View style={styles.row}>
                    {/* <EvilIcons name='lock' size={17}/> */}
                    <Text>Your privacy is important to us. We will only contact you if there is an issue with your order.</Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => {
          navigation.navigate("Finish");
        }}>
                        <Text style={styles.text}>
                            CONFIRM ORDER
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

const styles = StyleSheet.create({
    input:{
        fontSize: 17,
        borderWidth: 1,
        borderColor: 'grey',
        marginHorizontal: '5%',
        marginVertical: '2.5%'
    },
    row:{
        flexDirection: 'row',
        marginHorizontal: '5%'
    },
    button:{
        backgroundColor: '#001a33',
        marginHorizontal: '5%',
        height: 30,
        justifyContent: 'center',
        marginTop: 10
    },
    text:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
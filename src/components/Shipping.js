import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {EvilIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class Shipping extends React.Component{
    state = {
        FirstName: null,
        LastName: null,
        City: null,
        State: null,
        Zip: null,
        Address: null,
        Email: null,
        PhoneNumber: null
    }

    request = () => {

    }
    render(){
        return(
            <View>
                <TextInput 
                    placeholder='Your Name'
                    onChangeText={newTerm => this.setState({FirstName: newTerm})}
                    style={styles.input}
                    multiline
                />
                <TextInput 
                    placeholder='Address'
                    onChangeText={newTerm => this.setState({Address: newTerm})}
                    style={styles.input}
                    multiline
                />
                <TextInput 
                    placeholder='Enter Amount'
                    onChangeText={newTerm => this.setState({City: newTerm})}
                    style={styles.input}
                    multiline
                />
                <TextInput 
                    placeholder='State'
                    onChangeText={newTerm => this.setState({State: newTerm})}
                    style={styles.input}
                    multiline
                />
                <TextInput 
                    placeholder='Postal Code'
                    onChangeText={newTerm => this.setState({Zip: newTerm})}
                    style={styles.input}
                    multiline
                />
                <TextInput 
                    placeholder='First Name'
                    onChangeText={newTerm => this.setState({FirstName: newTerm})}
                    style={styles.input}
                    multiline
                />
                <TextInput 
                    placeholder='Email'
                    onChangeText={newTerm => this.setState({Email: newTerm})}
                    style={styles.input}
                    multiline
                />
                <TextInput 
                    placeholder='Phone Number'
                    onChangeText={newTerm => this.setState({PhoneNumber: newTerm})}
                    style={styles.input}
                    multiline
                />
                <View style={styles.row}>
                    {/* <EvilIcons name='lock' size={17}/> */}
                    <Text>Your privacy is important to us. We will only contact you if there is an issue with your order.</Text>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => this.props.changeState(1)}>
                        <Text style={styles.text}>
                            SAVE AND CONTINUTE
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
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
        backgroundColor: 'orange',
        marginHorizontal: '5%',
        height: 40,
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 10
    },
    text:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})
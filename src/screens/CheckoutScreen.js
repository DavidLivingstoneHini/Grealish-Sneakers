import React from 'react';
import {View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Shipping from '../components/Shipping';
import Finish from '../components/Finish';
import { SafeAreaView } from 'react-native-safe-area-context';


export default class CheckoutScreen extends React.Component{
    state = {
        stage: 0
    }

    changeStage = (number) => {
        this.setState({stage: number})
    }

    render(){
        let component = null
        let component2 = null
        let component3 = null
        if (this.state.stage === 0){
            component = <Shipping changeStage={this.changeStage}/>
        } else if (this.state.stage === 1){
            component2 = 9
        } else if (this.state.stage === 2){
            component3 = <Finish/>
        }
        return(
            <SafeAreaView style={styles.page}>
                <ScrollView>
                    <View style={styles.blockView}>
                        <Text style={styles.blockViewText}>1. Shipping</Text>
                    </View>
                    {component}
                    <View style={styles.blockView}>
                        <Text style={styles.blockViewText}>2. Payment</Text>
                    </View>
                    {component2}
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        height: '100%',
        backgroundColor: 'white'
    },
    blockView:{
        height: 50,
        marginHorizontal: '5%',
        backgroundColor: 'black',
        justifyContent: 'center',
        marginVertical: 10
    },
    blockViewText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    },
    blockViewItems:{
        height: 50,
        marginHorizontal: '5%',
        backgroundColor: 'grey',
        justifyContent: 'center',
        marginVertical: 10,
        flexDirection: 'row'
    },
    blockViewItemsText:{
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left'
    },
    icon:{
        //position: 'absolute',
        //marginLeft: '80%'
    }
})
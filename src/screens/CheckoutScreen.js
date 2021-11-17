import React from 'react';
import {View, ScrollView, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Shipping from '../components/Shipping';
import Payment from '../components/Payment';
import Finish from '../components/Finish';
import { SafeAreaView } from 'react-native-safe-area-context';

    export default function CheckoutScreen(params) {
        const navigation = params.navigation;
        return(
            <SafeAreaView style={styles.page}>
                    <View style={styles.blockView}>
                        <Text style={styles.blockViewText}>Payment & Shipping</Text>
                    </View>

                    <Image
        style={{
          borderRadius: 20,
          width: "100%",
          height: 240,
        }}
        source={require('../images/visa.jpg')}
      />
                    <Payment />
            </SafeAreaView>
        )
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
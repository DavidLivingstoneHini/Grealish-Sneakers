import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const BikeCard = () => {
    return (
        <View style={styles.container}>
        
        <View style={styles.cardContainer}>
            <Image
        style={{
          borderRadius: 15,
          marginBottom: 60,
          width: 150,
          height: 150,
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVkJTIwc25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
        }}
        />

        <Text style={styles.titleStyle}>Air Jordan 3</Text>
        </View>

        <View style={styles.cardContainer}>
            <Image
        style={{
          borderRadius: 15,
          marginBottom: 60,
          width: 150,
          height: 150,
          justifyContent: "space-between",
        }}
        source={{
          uri: "https://www.pngitem.com/pimgs/m/114-1149906_sneakers-skate-shoe-nike-one-transparent-background-png.png",
        }}
        />

        <Text style={styles.titleStyle}>Nike Retro</Text>
        </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '50%',
        padding: 5,
        flexDirection: 'row',
        flexwrap: 'wrap',
        justifyContent: 'Center',
    },
    cardContainer: {
        width: '50%', 
        backgroundColor: '#f5f5f0',
        height: '80%',
        padding: 5,
        borderRadius: 15,
        marginTop: 50,
        marginHorizontal: 8,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: '600',
    },
});

export default BikeCard;
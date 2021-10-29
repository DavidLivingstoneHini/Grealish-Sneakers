import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";

const KicksCard1 = () => {
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
          uri: "https://m.media-amazon.com/images/I/41Cab7pjHYL.jpg",
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
          uri: "https://di2ponv0v5otw.cloudfront.net/posts/2020/07/18/5f13599effba94f53862d0a4/m_5f135a3f074d24378901ec59.jpg",
        }}
        />

        <Text style={styles.titleStyle}>Air Jordan 3</Text>
        </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '85%',
        padding: 5,
        flexDirection: 'row',
        flexwrap: 'wrap',
        justifyContent: 'Center',
    },
    cardContainer: {
        width: '50%', 
        backgroundColor: '#f5f5f0',
        height: '50%',
        padding: 5,
        borderRadius: 15,
        marginHorizontal: 8,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: '600',
    },
});

export default KicksCard1;
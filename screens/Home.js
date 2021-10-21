import React,{useState} from "react";
import { StyleSheet, View, Modal, Text, TouchableOpacity, TextInput, FlatList } from "react-native";
import { Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";

import Card from "../components/BikeCard";
import Card1 from "../components/BikeCard1";

export default function Home(params) {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        paddingTop: 55,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Ionicons name="ios-menu-outline" size={24} color="black" />
        <FontAwesome name="gg-circle" size={24} color="black" />
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <AntDesign name="search1" size={20} color="black" />
          <Ionicons name="notifications-outline" size={20} color="black" />
        </View>
    </View>
    <Card />
    <Card1 />
    </View>
  );
}

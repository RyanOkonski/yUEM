import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";

const Tweet = ({ tweet }) => {
  const onSubmit = () => {
    console.log("Criar a telinha para editar o post!");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{ flexDirection: "row", marginLeft: 10 }}>
        <Text style={styles.name}>Anônimo</Text>
        <Pressable
          onPress={onSubmit}
          style={{
            position: "absolute",
            right: 0,
          }}
        >
          <Entypo name="dots-three-horizontal" size={16} color="black" />
        </Pressable>
      </View>
      <Text style={styles.content}>{tweet.message}</Text>
      <View style={styles.footer}>
        <Entypo name="heart-outlined" size={14} color="grey" />
        <Text style={{ color: "gray", marginLeft: 5 , fontSize: 12 }}>{tweet.likePost || 0}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "lightgrey",
    backgroundColor: "white",
  },
  name: {
    fontWeight: "600",
  },
  useremail: {
    color: "gray",
    marginLeft: 5,
  },
  content: {
    lineHeight: 20,
    marginTop: 5,
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 10,
  },
});

export default Tweet;

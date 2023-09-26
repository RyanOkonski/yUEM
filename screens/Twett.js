import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Twett = (props) => {
  const user = props.twett;
  return (
    <View style={styles.mainContainer}>
      <View style={{ flexDirection: "row", marginLeft: 10 }}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.username}>(@{user.email})</Text>
      </View>
      <Text style={styles.content}>{user.post.text}</Text>
      <View style={styles.footer}>
        <IconButton
          icon={(props) => <Icon name="plus" {...props} size={20} />}
        />
        <IconButton
          icon={(props) => <Icon name="pencil" {...props} size={20} />}
        />
        <IconButton
          icon={(props) => <Icon name="delete" {...props} size={20} />}
          color="red"
        />
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
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontWeight: "600",
  },
  username: {
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
  },
});

export default Twett;

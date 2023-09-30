import React, { useState, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Modal,
  findNodeHandle,
  UIManager,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const Tweet = ({ tweet }) => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [buttonPosition, setButtonPosition] = useState(null);
  const [postId, setPostId] = useState(null);
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState(null);
  const pressableRef = useRef();

  const onSubmit = (postId, userId, message) => {
    const pressableNode = findNodeHandle(pressableRef.current);
    if (pressableNode) {
      UIManager.measure(pressableNode, (x, y, width, height, pageX, pageY) => {
        setButtonPosition({ top: pageY - 10, left: pageX - 100 });
      });
    }
    setPostId(postId);
    setUserId(userId);
    setMessage(message);
    setModalVisible(true);
  };

  function editarPost() {
    navigation.navigate("EditarPost", {
      postId: postId,
      userId: userId,
      message: message,
    });
    setModalVisible(false);
  }

  function deletarPost() {
    const url = `https://gnat-huge-gibbon.ngrok-free.app/User/${userId}/DeletePost/${postId}`;
    try {
      axios.delete(url);
      console.log("Post " + postId + " deletado com sucesso!");
    } catch (error) {
      console.error("Deu ruim:", error);
    }
    setModalVisible(false);
  }

  function anonimo() {
    if (tweet.anonymous == true) {
      return "Anônimo";
    } else {
      return tweet.name;
    }
  }

  function userPost() {
    const matchingPosts = [];
    for (let index = 0; index < tweet.posts.length; index++) {
      if (tweet.posts[index].userId == tweet.id) {
        matchingPosts.push(
          <View style={styles.mainContainer}>
            <View style={{ flexDirection: "row", marginLeft: 10 }}>
              <Text style={styles.name}>{anonimo()}</Text>
              <Text style={styles.usercourse}>({tweet.course})</Text>
              <Pressable
                ref={pressableRef}
                onPress={() => {
                  onSubmit(
                    tweet.posts[index].id,
                    tweet.posts[index].userId,
                    tweet.posts[index].message
                  );
                }}
                style={{
                  position: "absolute",
                  right: 5,
                }}
              >
                <Entypo name="dots-three-horizontal" size={14} color="grey" />
              </Pressable>
            </View>
            <Text style={styles.content}>{tweet.posts[index].message}</Text>
            <View style={styles.footer}>
              <Pressable
                onPress={() => {
                  const url = `https://gnat-huge-gibbon.ngrok-free.app/User/LikePost/${tweet.posts[index].id}`;
                  try {
                    axios.put(url);
                  } catch (error) {
                    console.error("Deu ruim:", error);
                  }
                  navigation.navigate("Home", tweet.posts[index].userId);
                }}
              >
                <Entypo name="heart-outlined" size={18} color="grey" />
              </Pressable>
              <Text style={{ color: "gray", marginLeft: 5, fontSize: 14 }}>
                {tweet.posts[index].likePost || 0}
              </Text>
            </View>
          </View>
        );
      }
    }
    return matchingPosts;
  }

  return (
    <View style={styles.mainContainer}>
      {userPost()}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
        backdropPressable={true}
      >
        {buttonPosition && (
          <View
            style={{
              position: "absolute",
              top: buttonPosition.top,
              left: buttonPosition.left,
              gap: 4,
              backgroundColor: "white",
              borderRadius: 18,
              paddingHorizontal: 10,
              paddingVertical: 8,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}
          >
            <Pressable style={styles.buttonClose} onPress={() => editarPost()}>
              <Text style={styles.textStyle}>Editar Post</Text>
            </Pressable>
            <Pressable style={styles.buttonClose} onPress={() => deletarPost()}>
              <Text style={styles.textStyle}>Deletar Post</Text>
            </Pressable>
          </View>
        )}
      </Modal>
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
  usercourse: {
    color: "gray",
    marginLeft: 5,
  },
  content: {
    lineHeight: 24,
    marginTop: 5,
    marginLeft: 10,
  },
  footer: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 10,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    width: 100,
  },
  textStyle: {
    color: "black",
    textAlign: "center",
    backgroundColor: "white",
  },
});

export default Tweet;

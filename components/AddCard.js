import React, { Component } from "react";
import { View, Text } from "react-native";

class AddCard extends Component {
  state = {
    question: "",
    answer: "",
    uuid: ""
  };
  render() {
    return (
      <View>
        <Text> Add Card </Text>
      </View>
    );
  }
}
export default AddCard;

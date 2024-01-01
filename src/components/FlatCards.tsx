import { View, Text, StyleSheet } from "react-native";
import React from "react";

const FlatCards = () => {
  return (
    <View style={{ width: "100%", height: 150 }}>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Green</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
    padding: 8,
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  card: {
    height: 100,
    width: "32%",
    borderRadius: 10,
    // margin: 8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cardOne: {
    backgroundColor: "#ef5354",
  },
  cardTwo: {
    backgroundColor: "#50dbb4",
  },
  cardThree: {
    backgroundColor: "#5da3fa",
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default FlatCards;

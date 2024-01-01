import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

const ElevatedCards = () => {
  return (
    <View style={{ width: "100%" }}>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.text}>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.text}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.text}>Green</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginRight: 8,
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

export default ElevatedCards;

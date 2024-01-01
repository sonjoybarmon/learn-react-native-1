import { Image, StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Trending Places</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/60999976?v=4",
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Lorem ipsum dolor sit amet.</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
            vel, nam tempora molestiae veritatis ex consequuntur aspernatur at
            autem ut!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  card: {
    marginTop: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  cardElevated: {
    backgroundColor: "#f9f9f9",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 250,
  },
  cardBody: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 16,
  },
});

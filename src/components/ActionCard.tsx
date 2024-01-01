import { Image, Linking, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(websiteLink: string) {
    // Open the website in the default browser
    Linking.openURL(websiteLink);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Blog Card</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <View style={styles.cardContainer}>
          <Text style={styles.cardText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
            necessitatibus consequatur odit laboriosam quaerat iure aliquam,
            eaque aspernatur, repellendus dolorem molestiae asperiores vel
            dolorum tempora consequuntur rerum obcaecati. Asperiores, sit?
          </Text>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/60999976?v=4",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum ...
          </Text>

          {/* read more */}
          <Text
            style={{
              color: "blue",
              textDecorationLine: "underline",
              textAlign: "right",
              paddingBottom: 20,
              paddingRight: 16,
            }}
            onPress={() =>
              openWebsite("https://www.google.com/search?q=google")
            }
          >
            Read more
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  headingText: {
    fontSize: 30,
    fontWeight: "bold",
  },

  card: {},
  cardElevated: {
    backgroundColor: "#f9f9f9",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 3,
  },
  cardContainer: {},
  cardText: {
    padding: 20,
  },
  cardImage: {
    height: 100,
  },
});

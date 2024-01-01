import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ContactList() {
  const contacts = [
    {
      id: "1",
      name: "Jane Doe",
      email: "jane@gmail.com",
      status: "Manager",
      image: "https://avatars.githubusercontent.com/u/60999976?v=4",
    },
    {
      id: "2",
      name: "John Doe",
      email: "john@yahoo.com",
      status: "Employee",
      image: "https://avatars.githubusercontent.com/u/60999976?v=4",
    },
    {
      id: "3",
      name: "Bob Doe",
      email: "bob@hotmail.com",
      status: "Employee",
      image: "https://avatars.githubusercontent.com/u/60999976?v=4",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>

      <ScrollView scrollEnabled={false}>
        {contacts.map((contact) => (
          <View key={contact.id} style={[styles.card, styles.cardElevated]}>
            <View style={styles.cardBody}>
              <View>
                <Image
                  source={{
                    uri: contact.image,
                  }}
                  style={styles.cardImage}
                />
              </View>

              <View>
                <Text style={styles.cardTitle}>{contact.name}</Text>
                <Text style={styles.cardDescription}>{contact.email}</Text>
                <Text style={styles.cardDescription}>{contact.status}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
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
    width: 80,
    height: 80,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cardBody: {
    padding: 20,
    gap: 20,
    flex: 1,
    flexDirection: "row",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 4,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: "normal",
  },
});

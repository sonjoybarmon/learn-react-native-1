import { StyleSheet, SafeAreaView, ScrollView } from "react-native";
import FlatCards from "./src/components/FlatCards";
import ElevatedCards from "./src/components/ElevatedCards";
import FancyCard from "./src/components/FancyCard";
import ActionCard from "./src/components/ActionCard";
import ContactList from "./src/components/ContactList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView keyboardShouldPersistTaps="handled">
        <FlatCards />
        <ElevatedCards />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});

export default App;

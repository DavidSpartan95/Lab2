import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { styles } from "../styles";

/* Set labPart variable to 4, to view this part of the lab */
export default function WorkingWithDictionaries() {
  const [shopDict, setShopDict] = useState({
    onions: 5,
    garlic: 3,
    breed: 1 
  })
  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Working with Dictionaries</Text>

        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Shopping Cart
          </Text>

          <Text style={{ ...styles.bodyText }}>Onions: {shopDict.onions}</Text>
          <Text style={{ ...styles.bodyText }}>Garlic: {shopDict.garlic}</Text>
          <Text style={{ ...styles.bodyText }}>Bread: {shopDict.breed}</Text>
          <Button title="Update bread count to 2"
          onPress={()=> setShopDict({...shopDict, breed:shopDict.breed+2})} />
        </View>
        <View style={styles.section}>
          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
            {"\n"}
            1. Create a dictionary to store the following items in a shopping
            list: 5 onions, 3 garlic, 1 bread
            {"\n\n"}
            2. Use the dictionary you created, to replace the '?' with the
            stored values
            {"\n\n"}
            3. Implement the button press to update the amount of bread in the
            dictionary. It should update the amount on screen when pressed.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

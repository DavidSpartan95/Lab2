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

/* TODO: DEFINE THE CART ITEM COMPONENT HERE */

const CartItemMilk = ({setCartDict, cartDict}) => {
  
  return (
    <View style = {{backgroundColor: "yellow", margin:2}}>
      <Text style>Milk:<Button title="+"
        onPress={() => setCartDict({...cartDict, milk:cartDict.milk + 1})}
      />
      {" " + cartDict.milk + " "}
      
      <Button title="-"
        onPress={() => setCartDict({...cartDict, milk:cartDict.milk - 1})}
      /></Text>
    </View>
  )
}
const CartItemBread = ({setCartDict, cartDict}) => {
  
  return (
    <View style = {{backgroundColor: "yellow", margin:2}}>
      <Text style>Bread:<Button title="+"
        onPress={() => setCartDict({...cartDict, bread:cartDict.bread + 1})}
      />
      {" " + cartDict.bread + " "}
      
      <Button title="-"
        onPress={() => setCartDict({...cartDict, bread:cartDict.bread - 1})}
      /></Text>
    </View>
  )
}
const CartItemEggs = ({setCartDict, cartDict}) => {

  return (
    <View style = {{backgroundColor: "yellow", margin:2}}>
      <Text style>Eggs:<Button title="+"
        onPress={() => setCartDict({...cartDict, eggs:cartDict.eggs + 1})}
      />
      {" " + cartDict.eggs + " "}
      
      <Button title="-"
        onPress={() => setCartDict({...cartDict, eggs:cartDict.eggs - 1})}
      /></Text>
    </View>
  )
}

export default function CreatingCustomComponents() {
  const [cartDict, setCartDict] = useState({
    milk: 0,
    bread: 0,
    eggs: 0,
  })
  /* Bonus is on line 75 */
  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <Text style={styles.headerText}>Creating Custom Components</Text>
        
        <View style={{ ...styles.section, backgroundColor: "#ffeb7a" }}>
          <Text style={{ fontWeight: "bold", marginBottom: 5 }}>
            Shopping Cart {cartDict.eggs+cartDict.bread+cartDict.milk}
          </Text>
          {CartItemMilk({setCartDict,cartDict})}
          {CartItemBread({setCartDict,cartDict})}
          {CartItemEggs({setCartDict,cartDict})}
        </View>
        <View style={styles.section}>
          <Text style={styles.bodyText}>
            <Text style={{ fontWeight: "bold" }}>Your Task: </Text>
            {"\n\n"}
            1. Create a custom component called CartItem. It should have a text
            that displays the item name, and the amount of items with a button
            to increase and decrease the amount.
            {"\n\n"}
            2. Create three cart item components, one for Milk, bread and eggs
            with initial values of 0. Take a look at the 'shopping cart items'
            image in the assets folder to see what it should look like in the
            end.
            {"\n\n"}
            <Text style={{ fontWeight: "bold" }}>Bonus: </Text>Display the total
            number of items in the cart. Think about how you could use a
            dictionary state variable to do this.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

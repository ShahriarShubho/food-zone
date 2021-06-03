import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const CategoryMealsScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen component</Text>
      <Button
        title="Meals Details"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetailS" });
        }}
      />
      <Button
      style={styles.buttonStyle}
        title="Go Back"
        onPress={() => {
          props.navigation.pop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    margin: '20px',
  }
});

export default CategoryMealsScreen;

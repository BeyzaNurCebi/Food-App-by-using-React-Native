import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import ResultsDetail from "../components/ResultsDetail";

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();

  if (!results.length) {
    return null; //eğer results array 0 ise null dön hiçbir şey gösterme.
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(result) => result.id}
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Results", { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      ></FlatList>
      <View
        style={{
          height: 3,
          backgroundColor: "#F0EEEE",
          marginTop: 5,
          marginLeft: 15,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
});

export default ResultsList;

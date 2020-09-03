import React from "react";
import { View, Image, FlatList, StyleSheet, Text } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = React.useState(null);
  const { id } = route.params;

  const getResult = async (id) => {
    const response = await yelp.get(`${id}`);
    setResult(response.data);
  };

  React.useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <FlatList
        keyExtractor={(id) => id}
        data={result.photos}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default ResultsShowScreen;

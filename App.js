import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';
import Header from './components/header';
import ListItem from './components/list';
import Form from './components/form';

export default function App() {
  const deleteHandler = (key) => {
    setListOfItems((list) => { return list.filter((listOfItems) => listOfItems.key != key) });
  }
  const addHandler = (text) => {
    setListOfItems((list) => {
      return [{ text: text, key: Math.random().toString(36).substring(7) }, ...list]
    });
  };
  const [listOfItems, setListOfItems] = useState([
    { text: "Купить слона", key: "1" },
    { text: "Помыть крокодила", key: "2" },
    { text: "Сделать дело", key: "3" },
  ]);
  return (
    <View style={styles.container}>
      <Header />
      <Form addHandler={addHandler} />
      <View>
        <FlatList data={listOfItems}
          renderItem={({ item }) => <ListItem el={item} deleteHandler={deleteHandler} />} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
});

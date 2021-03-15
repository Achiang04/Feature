import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './LazyLoadsStyle';

export default function LazyLoads() {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  console.log(data);

  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setData(json));
  };

  useEffect(() => {
    getData();
  }, []);

  const Render = ({item}) => {
    let completed;
    if (item.completed) {
      completed = 'true';
    } else {
      completed = 'false';
    }
    return (
      <View style={styles.renderContainer}>
        <Text>userId : {item.userId}</Text>
        <Text>id : {item.id}</Text>
        <Text>title : {item.title}</Text>
        <Text>completed : {completed}</Text>
      </View>
    );
  };

  const onRefresh = async () => {
    const fetchedRecords = await getData();
    const newRecords = fetchedRecords.concat(data);
    setData(newRecords);
    setRefreshing(false);
  };

  return (
    <View>
      <Text>Lazy Loads</Text>
      <FlatList
        onRefresh={onRefresh}
        refreshing={refreshing}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return <Render item={item} />;
        }}
      />
    </View>
  );
}

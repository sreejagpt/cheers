import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Hero from './hero';
import FulfilledIcon from './fulfilledIcon';

export default ({ status, onFulfilled, fulfilledOrders }) => {
    return (
        <List style={styles.container}>
            {
                fulfilledOrders.map(({ avatar_url, id, createdAt, amount }, index) => (
                    <ListItem
                        roundAvatar
                        key={index}
                        avatar={{ uri: avatar_url }}
                        title={`Order #${id}`}
                        subtitle={createdAt}
                        rightIcon={<FulfilledIcon onPress={() => onFulfilled(id)}/>}
                    />
                ))
            }
        </List>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
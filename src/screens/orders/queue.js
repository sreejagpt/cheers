import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { orders } from './data';

export default () => (
    <View style={styles.container}>
    {
        orders.map(({ avatar_url, id, createdAt, amount }, index) => (
            <ListItem
                roundAvatar
                hideChevron
                key={index}
                avatar={{ uri: avatar_url }}
                title={`Order #${id}`}
                subtitle={createdAt}
                rightTitle={amount}
            />
        ))
    }
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
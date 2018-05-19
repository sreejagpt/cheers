import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { orders } from './data';
import Hero from './hero';

export default () => {
    const [head, ...tail] = orders;
    return (
        <List style={styles.container}>
            <Hero data={head} />
            {
                tail.map(({ avatar_url, id, createdAt, amount }, index) => (
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
        </List>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
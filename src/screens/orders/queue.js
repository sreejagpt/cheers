import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import Hero from './hero';

export default ({ status, onPress, orders }) => {
    const [head, ...tail] = orders;
    return (
        <List containerStyle={styles.container}>
            <Hero data={head} status={status} onPress={onPress}/>
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
      backgroundColor: '#EFF0F3',
      marginTop: 0,
    },
  });
  
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, List, ListItem, Button } from 'react-native-elements'
import RightIcon from './rightIcon';

const drinksList = [
    {
        name: 'Vodka Lime Soda',
        quantity: 1,
    },
    {
        name: 'Martini',
        quantity: 1,
    }
];

export default ({ data, status, onPress }) => {
    return (
        <View style={styles.container}>
            <List containerStyle={styles.list}>
                <ListItem
                    roundAvatar
                    avatar={{ uri: data.avatar_url }}
                    title={`Order #${data.id}`}
                    subtitle={data.createdAt}
                    rightIcon={<RightIcon status={status} onPress={onPress}/>}
                    containerStyle={styles.listItem}
                />
            </List>
            <List containerStyle={styles.list}>
                { drinksList.map(dl => (
                    <ListItem
                        key={dl.name}
                        hideChevron
                        title={`${dl.quantity} X ${dl.name}`}
                        containerStyle={styles.listItem}
                    />
                )) }
            </List>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: 'red',
        borderBottomColor: 'red',
    },
    list: {
        marginTop: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    listItem: {
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
  });

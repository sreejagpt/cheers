import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, List, ListItem, Button } from 'react-native-elements'
import RightIcon from './rightIcon';

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
                { data.drinksList.map(dl => (
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
        borderTopColor: '#cbd2d9',
        borderBottomColor: '#cbd2d9',
        backgroundColor: 'white',
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

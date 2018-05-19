import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Badge } from 'react-native-elements'

const states = [ 'Assign to me', 'Mark as done' ];
const renderStatus = status => states[status];

export default ({ status, onPress }) => (
    <Badge containerStyle={{ backgroundColor: 'pink'}} onPress={onPress}>
        <Text>{ renderStatus(status) }</Text>
    </Badge>
);
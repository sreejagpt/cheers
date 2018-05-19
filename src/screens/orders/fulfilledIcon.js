import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Badge } from 'react-native-elements'

export default ({ status, onPress }) => (
    <Badge containerStyle={{ backgroundColor: 'pink'}} onPress={onPress}>
        <Text>Mark as fulfilled</Text>
    </Badge>
);
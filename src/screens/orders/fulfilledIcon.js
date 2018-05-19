import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Badge } from 'react-native-elements'

export default ({ status, onPress }) => (
    <Badge containerStyle={{ backgroundColor: 'white', borderColor: '#903266', borderWidth: 1}} onPress={onPress}>
        <Text>MARK AS FULFILLED</Text>
    </Badge>
);
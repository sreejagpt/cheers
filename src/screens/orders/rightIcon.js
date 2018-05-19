import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Badge } from 'react-native-elements'

const states = [ 'ASSIGN TO ME', 'MARK AS DONE' ];
const renderStatus = status => states[status];

export default ({ status, onPress }) => (
    <Badge containerStyle={{ backgroundColor: '#903266' }} onPress={onPress}>
        <Text style={{ color: 'white', fontFamily: 'open-sans', fontSize: 15 }}>{ renderStatus(status) }</Text>
    </Badge>
);
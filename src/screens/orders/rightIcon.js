import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'
import { Badge } from 'react-native-elements'

export default () => (
    <Badge containerStyle={{ backgroundColor: 'pink'}}>
        <Text>Assign To Me</Text>
    </Badge>
);
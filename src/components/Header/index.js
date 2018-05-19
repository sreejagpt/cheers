import React from 'react';
import { Header, Icon } from 'react-native-elements';

export default ({ navigation }) => (
    <Header
        leftComponent={<Icon
            name='bars'
            type='font-awesome'
            color='#903266'
            onPress={() => navigation.openDrawer() } />}
        centerComponent={{ text: 'cheers!', style: { color: '#903266', fontWeight: 'bold', fontSize: 25, fontFamily: 'open-sans' } }}
        outerContainerStyles={{ borderBottomWidth: 0, backgroundColor: '#fff' }}
        innerContainerStyles={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}
    />
);
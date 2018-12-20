import React, { Component } from 'react';

import {
    View,
    Text
} from 'react-native';

type Props = {};

class SideMenu extends Component<Props> {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text>SideMenu</Text>
            </View>
        );
    }
}

export default SideMenu;
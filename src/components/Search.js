import React, { Component } from 'react';

import {
    View,
    Text
} from 'react-native';

type Props = {};

class Search extends Component<Props> {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Search</Text>
            </View>
        );
    }
}

export default Search;
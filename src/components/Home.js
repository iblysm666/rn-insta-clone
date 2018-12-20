import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { getFeed } from '../actions/feedActions';

import {
    StyleSheet,
    View,
    Image,
    Text,
    FlatList,
    Dimensions,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';

const { width, height } = Dimensions.get('window');

type Props = {};

class Home extends Component<Props> {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getFeed();
    }

    render() {
        let data = [];

        for (let key in this.props.feed) {
            let item = {
                user: {
                    name: this.props.feed[key].post_title,
                    image: 'https://scontent-sin6-1.cdninstagram.com/vp/ad06c53c94e133483090c2e68859b60c/5CAF1FD1/t51.2885-19/s150x150/44692938_194057168143366_9066520127557599232_n.jpg',
                },
                post: {
                    image: this.props.feed[key].attachments[0].image_url,
                    caption: 'Lorem ipsum dolro sit amet Lorem ipsum dolro sit amet Lorem ipsum dolro sit amet Lorem ipsum dolro sit amet'
                }
            };

            data.push(item);
        }

        console.log(data);

        return (
            <View style={styles.outerWrap}>
                <ScrollView style={styles.wrap}>
                    {data.map((p, i) => {
                        return (
                            <View style={styles.itemPost} key={i}>
                                <View style={styles.userPost}>
                                    <Image style={styles.imageUser} source={{uri: p.user.image}}/>
                                    <View style={styles.userText}>
                                        <Text>{p.user.name}</Text>
                                    </View>
                                </View>
                                <View style={styles.postContent}>
                                    <Image style={styles.imagePost} source={{uri: p.post.image}}/>
                                </View>
                                <View style={styles.caption}>
                                    <Text style={styles.userName}>{p.user.name}</Text>
                                    <Text>{p.post.caption}</Text>
                                </View>
                            </View>
                        );
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outerWrap: {
        height: height,
        width: width,
        flex: 1
    },
    wrap: {
        backgroundColor: '#e5e5e5'
    },
    itemPost: {
        position: 'relative',
    },
    userPost: {
        padding: 10
    },
    userText: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        left: 50
    },
    imageUser: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    postContent: {

    },
    imagePost: {
        width: width,
        height: 350
    },
    caption: {
        padding: 10,
    },
    userName: {
        fontWeight: 'bold',
        marginRight: 10,
    }
});

const mapStateToProps = (state) => {
    return {
        feed: state.instaFeed.post
    };
};

Home.propTypes = {
    feed: PropTypes.object,
    getFeed: PropTypes.func
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFeed: () => {
            dispatch(getFeed());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
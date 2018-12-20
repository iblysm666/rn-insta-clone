import Axios from 'axios';

export const getFeed = () => {
    return (dispatch) => {
        return Axios.get('https://conference-api.sarccom.org/api/posts?category=news')
            .then(response => {
                dispatch({type: 'FETCH_POST_SUCCESS', data: response.data});
            })
            .catch(error => {
                throw(error);
            });
    };
};
var tweetStream = require('../../socket/tweets.io');
var React = require('react');
var _ = require('lodash');
var TwitterList = require('./components/twitter-list/titter-list.js');

var TwitterFeed = React.createClass({
    getInitialState: function () {
        return {
            tweets: []
        };
    },
    addTweet: function (tweet) {

        var tweets = _.cloneDeep(this.state.tweets);
        tweets.splice(0, 0, tweet);

        tweets = _.take(tweets, 10);

        this.setState({
            tweets: tweets
        });
    },
    componentWillMount: function () {
        tweetStream(function (tweet) {
            this.addTweet(tweet);
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <TwitterList tweets={this.state.tweets}/>
            </div>
        )
    }
});

module.exports = TwitterFeed;

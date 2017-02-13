var React = require('react');
var Tweet = require('../tweet/tweet');

var TwitterList = React.createClass({
    propTypes: {
        tweets: React.PropTypes.array.isRequired
    },
    mapTweets: function (tweet) {
        return (
            <Tweet key={tweet.id} tweet={tweet}/>
        )
    },
    render: function () {
        if (this.props && this.props.tweets) {
            var tweets = this.props.tweets.map(this.mapTweets) || [];
        } else {
            tweets = [];
        }

        return (
            <div className="tweet-container">
                {tweets}
            </div>
        );
    }

});

module.exports = TwitterList;

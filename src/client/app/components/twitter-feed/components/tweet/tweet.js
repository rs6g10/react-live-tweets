var React = require('react');

var Tweet = React.createClass({
    propTypes: {
        tweet: React.PropTypes.object.isRequired
    },
    render: function () {
        var tweet = this.props.tweet;
        return (
            <div className="box box-container">
                <div className="box-container-panel box-container-panel-text">
                    {tweet.text}
                </div>
            </div>
        );
    }
});

module.exports = Tweet;
import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';
import App from './App';
import './index.css';

var Card = React.createClass({
    getInitialState: function () {


        return {
            flipped: false,
            clicked: false,
            //result: getResult(url)
            result: ""
        }
    },
    flip: function () {
        this.setState({
            flipped: !this.state.flipped,
            clicked: true
        });
    },
    render: function () {
        var flippedCSS = this.state.flipped ? " Card-Back-Flip" : " Card-Front-Flip";
        if (!this.state.clicked) flippedCSS = "";
        return (
            <div className="Card" onClick={this.flip}>
                <div className={"Card-Front" + flippedCSS}>
                    <h3>{this.props.title }</h3>
                </div>
                <div className={"Card-Back" + flippedCSS}>
                    {this.props.children }
                </div>
            </div>
        );
    }
});
// End of Components

let app = (
    <div className="Cards">
        <Card title="One">
            <p>
                <span>buy</span>
            </p>
        </Card>
        <Card title="Two">
            <p>
            </p>
        </Card>
        <Card title="Three">
            <p>
            </p>
        </Card>
        <Card title="Four">
            <p>
            </p>
        </Card>
        <Card title="Five">
            <p>
            </p>
        </Card>
        <Card title="Six">
            <p>
            </p>
        </Card>
        <Card title="Seven">
            <p>
            </p>
        </Card>
        <Card title="Eight">
            <p>
            </p>
        </Card>
        <Card title="Nine">
            <p>
            </p>
        </Card>
    </div>
);

ReactDOM.render(app, document.getElementById('app'));



ReactDOM.render(
    <App />,
    document.getElementById('root')
);

//
// var getLink = React.createClass({
//     constructor() {
//         this.state = {};
//     },
//
//     componentWillMount() {
//         var url =  "http://localhost:12345/amazon_api";
//         Request.get(url, {"optional1": 1}).then((response) => {
//             this.setState({result: response});
//         });
//
//     },
//     render() {
//         return(
//             <div>{this.state}
//             </div>
//
//         );
//
//     }
//
// });

var test = (url) => {
    Request.get(url)
        .query({"optional1":1})
        .then((response) => {
            return JSON.parse(response.res.text).values
        });
};

var SearchResult = React.createClass({
    render: function () {
        let url =  "http://localhost:12345/amazon_api";
        let urls = test(urls);
        return ( <div className="test_field"><span>{urls[0]}</span></div>);
    },

});
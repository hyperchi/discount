import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// //
// // var getLink = React.createClass({
// //     constructor() {
// //         this.state = {};
// //     },
// //
// //     componentWillMount() {
// //         var url =  "http://localhost:12345/amazon_api";
// //         Request.get(url, {"optional1": 1}).then((response) => {
// //             this.setState({result: response});
// //         });
// //
// //     },
// //     render() {
// //         return(
// //             <div>{this.state}
// //             </div>
// //
// //         );
// //
// //     }
// //
// // });
//
// var test = (url) => {
//     Request.get(url)
//         .query({"optional1":1})
//         .then((response) => {
//             return JSON.parse(response.res.text).values
//         });
// };
//
// var SearchResult = React.createClass({
//     render: function () {
//         let url =  "http://localhost:12345/amazon_api";
//         let urls = test(urls);
//         return ( <div className="test_field"><span>{urls[0]}</span></div>);
//     },
//
// });
import React, {Component, PropTypes} from 'react'
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/match'
// user defined
import logo from '../../assets/logo.svg';
import './index.css'
import {getSearchResultRequest} from '../../action'
export default class Header extends Component {
    render() {
        return (

            <div className="app-header">
                <img src={logo} className="app-logo" alt="logo"/>
                <div className="container">
                    <h2>Amazon Discounts</h2>
                    <div className="btn">place-holder</div>
                    <div className="btn">place-holder</div>
                    <Example></Example>
                </div>
            </div>)
    }


// const people = [
//     {
//         first: 'Charlie',
//         last: 'Brown',
//         twitter: 'dancounsell'
//     },
//     {
//         first: 'Charlotte',
//         last: 'White',
//         twitter: 'mtnmissy'
//     },
//     {
//         first: 'Chloe',
//         last: 'Jones',
//         twitter: 'ladylexy'
//     },
//     {
//         first: 'Cooper',
//         last: 'King',
//         twitter: 'steveodom'
//     }
// ];

// // https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
// function escapeRegexCharacters(str) {
//     return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// }

// function getSuggestions(value) {
//     const escapedValue = escapeRegexCharacters(value.trim());

//     if (escapedValue === '') {
//         return [];
//     }

//     const regex = new RegExp('\\b' + escapedValue, 'i');

//     return people.filter(person => regex.test(getSuggestionValue(person)));
// }

// function getSuggestionValue(suggestion) {
//     return `${suggestion.first} ${suggestion.last}`;
// }

// function renderSuggestion(suggestion, {query}) {
//     const suggestionText = `${suggestion.first} ${suggestion.last}`;
//     const matches = AutosuggestHighlightMatch(suggestionText, query);
//     const parts = AutosuggestHighlightParse(suggestionText, matches);

//     return (
//         <span className={'suggestion-content ' + suggestion.twitter}>
//       <span className="name">
//         {
//             parts.map((part, index) => {
//                 const className = part.highlight ? 'highlight' : null;

//                 return (
//                     <span className={className} key={index}>{part.text}</span>
//                 );
//             })
//         }
//       </span>
//     </span>
//     );
}


//Imagine you have a list of languages that you'd like to autosuggest.

//  const languages = [
//    {
//      name: 'C',
//      year: 1972
//    },
//    {
//      name: 'Elm',
//      year: 2012
//    },

//  ];
const languages = [
    {
        first: 'Charlie',
        last: 'Brown',
        twitter: 'dancounsell'
    },
    {
        first: 'Charlotte',
        last: 'White',
        twitter: 'mtnmissy'
    },
    {
        first: 'Chloe',
        last: 'Jones',
        twitter: 'ladylexy'
    },
    {
        first: 'Cooper',
        last: 'King',
        twitter: 'steveodom'
    }
];
 // Teach Autosuggest how to calculate suggestions for any given input value.
 const getSuggestions = value => {
   const inputValue = value.trim().toLowerCase();
   const inputLength = inputValue.length;

   return inputLength === 0 ? [] : languages.filter(lang =>
     lang.first.toLowerCase().slice(0, inputLength) === inputValue
   );
 };

 // When suggestion is clicked, Autosuggest needs to populate the input element
 // based on the clicked suggestion. Teach Autosuggest how to calculate the
 // input value for every given suggestion.
 const getSuggestionValue = suggestion => suggestion.first;

 // Use your imagination to render suggestions.
 const renderSuggestion = (suggestion, {query}) => {
    //  alert(query);
     return (
  <div className="suggest_box">
    {suggestion.first}
  </div>);     
    // let suggestionText = `${suggestion.first} ${suggestion.last}`;
    // let matches = AutosuggestHighlightMatch(suggestionText, query);
    // let parts = AutosuggestHighlightParse(suggestionText, matches);

    // return (
    //     <span className={'suggestion-content ' + suggestion.twitter}>
    //   <span className="name">
    //     {
    //         parts.map((part, index) => {
    //             const className = part.highlight ? 'highlight' : null;

    //             return (
    //                 <span className={className} key={index}>{part.text}</span>
    //             );
    //         })
    //     }
    //   </span>
    // </span>
    // );
 };

// function renderSuggestion(suggestion, {query}) {
//     const suggestionText = `${suggestion.first} ${suggestion.last}`;
//     const matches = AutosuggestHighlightMatch(suggestionText, query);
//     const parts = AutosuggestHighlightParse(suggestionText, matches);

//     return (
//         <span className={'suggestion-content ' + suggestion.twitter}>
//       <span className="name">
//         {
//             parts.map((part, index) => {
//                 const className = part.highlight ? 'highlight' : null;

//                 return (
//                     <span className={className} key={index}>{part.text}</span>
//                 );
//             })
//         }
//       </span>
//     </span>
//     );
// };
class Example extends React.Component {
//  export default class Example extends React.Component {
   constructor() {
     super();

     // Autosuggest is a controlled component.
     // This means that you need to provide an input value
     // and an onChange handler that updates this value (see below).
     // Suggestions also need to be provided to the Autosuggest,
     // and they are initially empty because the Autosuggest is closed.
     this.state = {
       value: '',
       suggestions: []
     };
   }

   onChange = (event, { newValue }) => {
     this.setState({
       value: newValue
     });
   };

   // Autosuggest will call this function every time you need to update suggestions.
   // You already implemented this logic above, so just use it.
   onSuggestionsFetchRequested = ({ value }) => {
     this.setState({
       suggestions: getSuggestions(value)
     });
   };

   // Autosuggest will call this function every time you need to clear suggestions.
   onSuggestionsClearRequested = () => {
     this.setState({
       suggestions: []
     });
   };

   render() {
     const { value, suggestions } = this.state;

     // Autosuggest will pass through all these props to the input element.
     const inputProps = {
       placeholder: 'Type a programming language',
       value,
       onChange: this.onChange
     };

     // Finally, render it!
     return (
       <Autosuggest
         suggestions={suggestions}
         onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
         onSuggestionsClearRequested={this.onSuggestionsClearRequested}
         getSuggestionValue={getSuggestionValue}
         renderSuggestion={renderSuggestion}
         inputProps={inputProps}
       />
     );
   }
 }
// class SearchBar extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             value: '',
//             suggestions: []
//         };
//     }

//     onChange = (event, {newValue, method}) => {
//         this.setState({
//             value: newValue
//         });
//     };

//     onSuggestionsFetchRequested = ({value}) => {
//         this.setState({
//             suggestions: getSuggestions(value)
//         });
//     };

//     onSuggestionsClearRequested = () => {
//         this.setState({
//             suggestions: []
//         });
//     };
//     onSearch = () => {
//         let searchWords = this.state.value;
//         let searchResults = getSearchResultRequest(searchWords);
//         console.error(searchResults);
//         return searchResults;

//     };

//     render() {
//         const {value, suggestions} = this.state;
//         const inputProps = {
//             placeholder: "Search",
//             value,
//             onChange: this.onChange
//         };

//         return (
//             <div className="react-autosuggest__container">
//                 <Autosuggest
//                     suggestions={suggestions}
//                     onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
//                     onSuggestionsClearRequested={this.onSuggestionsClearRequested}
//                     getSuggestionValue={getSuggestionValue}
//                     renderSuggestion={renderSuggestion}
//                     inputProps={inputProps}/>
//                 <div className="search-bar-submit"

//                     onClick={this.onSearch}
//                     // change "" to {this.onSearch()} it will break
//                 />
//             </div>
//         );
//     }
// }
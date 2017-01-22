import React, {Component, PropTypes} from 'react'
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/match'
// user defined
import logo from '../../assets/logo.svg';
import './index.css'
import {getSearchResultRequest} from '../../actions'
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
      </div>
    );     

 };
export default class SearchBar extends Component {

 // Teach Autosuggest how to calculate suggestions for any given input value.

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
    onSearch = () => {
        let searchWords = this.state.value;
        let searchResults = getSearchResultRequest(searchWords);
        console.error(searchResults);
        return searchResults;
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
       <div className="react-autosuggest__container">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
          />
          <div className="search-bar-submit"
                onClick={this.onSearch}
          />
        </div>
     );
   }
 }

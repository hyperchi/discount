import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
// user defined
import './App.css';
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
    constructor(props) {
        super(props);
        this.render = this.render.bind(this);
        this.state = {
            items: this.props.items,
            disabled: true
        };
    }

    componentDidMount() {
        this.setState({
            disabled: false
        })
    }

    componentWillMount() {

    }

    handleClick() {
        this.setState({
            items: this.state.items.concat('Item ' + this.state.items.length)
        })
    }

    render() {
    return (
      <div className="">
          <Header></Header>
          {/*<Content></Content>*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.error(state);
//   const { selectedReddit, postsByReddit } = state
//   console.error(postsByReddit);
//   const {
//     isFetching,
//     lastUpdated,
//     items: posts
//   } = postsByReddit[selectedReddit] || {
//     isFetching: true,
//     items: []
//   }
//   console.error(isFetching);
//   console.error(lastUpdated);
//   console.error(posts);

//   return {
//     selectedReddit,
//     posts,
//     isFetching,
//     lastUpdated
//   }
    return state; 
}

export default connect(mapStateToProps)(App)


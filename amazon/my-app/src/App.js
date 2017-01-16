import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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



export default App;

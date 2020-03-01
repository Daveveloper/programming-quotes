import React, { Component } from 'react'
import Title from '../components/Title'
import Quote from '../components/Quote'
import { getRandomQuote } from '../api/api';
import Hero from '../components/Hero';
import {TiRefresh} from 'react-icons/ti';
import Menu from '../components/Menu';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    }
  }

   generateRandomQuote = async () => {
    const data = await getRandomQuote();
    this.setState({
      data
    })
  }

  componentDidMount() {
    this.generateRandomQuote();
  }

  render() {
    console.log(this.props.match);
    const {data} = this.state;
    return (
      <main className="Main">
        <Menu path={this.props.match.path}/>
        <Hero/>
        <Title title="Programming Quote" />
        {
          data ?
          <>
            <Quote data={data}/>
          </>
          : "Thinking..."
        }
        <div className="actions">
          <button type="button" className="Main__button-generate" onClick={this.generateRandomQuote}><TiRefresh size={32}/> Random quote</button>
        </div>
      </main>
    )
  }
}

export default Main

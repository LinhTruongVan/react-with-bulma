import React, { Component } from 'react';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Bulma hero title
          </h1>
          <h2 className="subtitle">
            Bulma hero subtitle
          </h2>
        </div>
      </div>
    </section>
    );
  }
}

export default App;

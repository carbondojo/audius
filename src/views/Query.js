import React, { Component } from 'react';
import TopAppBar from '../components/TopAppBar';
import QueryField from '../components/QueryField';

class Query extends Component {
  render() {
    return (
      <div className="App">
        <TopAppBar title="Search" showMenu={false} />
        <TopAppBar title="Search" showMenu={false} showBackIcon={true} />
      </div>
    );
  }
}

export default Query;

import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import LoadingBar from 'react-top-loading-bar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

export default class App extends Component {

  constructor() {
    super()
  
    this.state = {
      progress: 100
    }
  }
  render() {
    return (
      <>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        onLoaderFinished={() => this.setState({progress:0})}
      />
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<News country={'in'} pageSize={6} category={'general'}/>}/>
          <Route exact path='/general' element={<News country={'in'} pageSize={6} category={'general'}/>}/>
          <Route exact path='/business' element={<News country={'in'} pageSize={6} category={'business'}/>}/>
          <Route exact path='/technology' element={<News country={'in'} pageSize={6} category={'technology'}/>}/>
          <Route exact path='/science' element={<News country={'in'} pageSize={6} category={'science'}/>}/>
          <Route exact path='/entertainment' element={<News country={'in'} pageSize={6} category={'entertainment'}/>}/>
          <Route exact path='/sports' element={<News country={'in'} pageSize={6} category={'sports'}/>}/>
          <Route exact path='/health' element={<News country={'in'} pageSize={6} category={'health'}/>}/>
        </Routes>
        </Router>
      </>
    )
  }
}

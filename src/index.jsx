import './styles.css' 
import logo from './logo.jpg' 
import './style.scss'
import './babel.js'
import React from 'react'
import {render} from 'react-dom'

alert ('А я знаю как ты ненавидишь alert\'ы')

const App = () => (
  <div>
    <div class="container">
        <h1>Homework</h1>
    </div>
    <div class="container">part 1</div>
      
    <div class="logo" />

    <div class="box">
        <h2>scss</h2>
    </div>
  </div>  
)

render(<App />, document.getElementById('App'))

if (module.hot) {
       module.hot.accept('./print.js', function() {
         console.log('Accepting the updated printMe module!');
         printMe();
       })
     }
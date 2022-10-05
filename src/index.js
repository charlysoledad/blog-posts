import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment/SingleComment'

const App = () => {
  return (
    <div className='ui comments'>
      <SingleComment name="Pepe"  date='Today 5:00 PM'/>
      <SingleComment name="Roberto"  date='Today 7:00 PM'/>
      <SingleComment name="Sofia"  date='Today 9:00 PM'/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
)
import React ,{ useReducer } from 'react'
import './App.css'
import useMyhook from './useMyhook';
import Switch from '@material-ui/core/Switch';
function App() {
  const {darkTheme,changetheme,state,handleChange}=useMyhook();
  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
    <nav>
      <div className='button-container'>
      <Switch
        checked={state}
        onChange={handleChange}
        onClick={changetheme}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      >
          Toggle Theme
        </Switch>
      </div>
    </nav>
    <div className='content'>
      <h1>{darkTheme ? 'Dark Mode' : 'Light Mode'}</h1>
      <p>
       Good <code>{darkTheme ? 'Evening' : 'Morning'}</code> Highradian !!
      </p>
    </div>
  </div>
  )
}

export default App
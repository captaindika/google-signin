import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from 'react-google-login'
import axios from 'axios'
import { useState } from 'react';
function App() {

  const responseGoogle = response => {
    const { code } = response
    console.log(code)
    setToken(code)
    // axios.post('/api/v1/project-executive/create-token',{code})
    // .then(response => {
    //   console.log({data: response.data, msg: 'ini response'})
    //   setSignIn(true)
    // })
    // .catch(error => {
    //   console.log(error.message)
    // })

  }

  const responseError = error => {
    console.log('error bro');
    console.log(error);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('asdasd')
  }

  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [startDateTime, setStartDateTime] = useState('')
  const [endDateTime, setEndDateTime] = useState('')
  const [signIn, setSignIn] = useState(false)
  const [token, setToken] = useState('')

  return (
    <div>
      <div className="App">
        <h1>Google Calendar API</h1>
      </div>
      {
        !signIn ? (<div>
          <GoogleLogin clientId='381577986964-scht8fd1d758n3sv5u6jmga46t5h2gfi.apps.googleusercontent.com'
            buttonText='Sign in & Authorize Calendar'
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseError}
            cookiePolicy={'single_host_origin'}
            responseType='code'
            accessType='offline'
            scope='openid email profile https://www.googleapis.com/auth/calendar' />
          <p>{token}</p>
        </div>) : (<div>
          <form onSubmit={handleSubmit}>
            <label htmlFor='summary'>Summary</label>
            <br />
            <input type='text' id="summary" value={summary} onChange={e => setSummary(e.target.value)} />
            <br />
            <label htmlFor='description'>Description</label>
            <br />
            <textarea type='text' id="description" value={description} onChange={e => setDescription(e.target.value)} />
            <br />
            <label htmlFor='location'>Location</label>
            <br />
            <input type='text' id="location" value={location} onChange={e => setLocation(e.target.value)} />
            <br />
            <label htmlFor='startDateTime'>Start date time</label>
            <br />
            <input type='datetime-local' id="startDateTime" value={startDateTime} onChange={e => setStartDateTime(e.target.value)} />
            <br />
            <label htmlFor='endDateTime'>End date time</label>
            <br />
            <input type='datetime-local' id="endDateTime" value={endDateTime} onChange={e => setEndDateTime(e.target.value)} />
            <br />
            <button type='submit'>Create event</button>
          </form>
        </div>)
      }
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const data = {username:'admin',password:'1234'}

  const authenticate = () => {
    console.log(username,password)
    if(data.username === username && data.password===password){
      alert("Successfully logged in ")
      setUsername('')
      setPassword('')
    }
    else{
      alert("Invalid username and password ")
    }
  }
  return (
      <div className="container">
              <div className="row">
                <h2 style={{textAlign:"center"}}>Login with Social Media or Manually</h2>
                <div className="vl">
                <span className="vl-innertext">or</span>
                
              </div>
              <div className="col">
                <a href="#" className="fb btn">
                  <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                </a>
                <a href="#" className="twitter btn">
                  <i className="fa fa-twitter fa-fw"></i> Login with Twitter
                </a>
                <a href="#" className="google btn"><i className="fa fa-google fa-fw">
                  </i> Login with Google+
                </a>
              </div>
              <div className="col">
                <div className="hide-md-lg">
                  <p>Or sign in manually:</p>
                </div>

              <input type="text" name="username"  value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
              <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
              <input type="submit" onClick={() => authenticate()} value="Login" />
              </div>               
              </div>

           
      </div>
  );
}

export default App;

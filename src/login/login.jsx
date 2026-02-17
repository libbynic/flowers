import React from 'react';
import { registerUser, loginUser } from '../../service';

export function Login({setUser}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(' ')

    function register(event) {
        event.preventDefault();
        registerUser(email, password);
    }
    function login(){
        loginUser(email, password)
    }
  return (
   <main>
<iframe  src="https://www.youtube.com/embed/tgCm_fj9gvE?autoplay=1&mute=1&loop=1&playlist=tgCm_fj9gvE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
<div className="center-div">
    <h1>Welcome to Blossom Blueprint</h1>
</div>
    <br/>
    <form onSubmit={register} className="form">
        <div className="form-group"> 
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="varEmail" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password"> Password: </label>
            <input type="password" id="password" name="varPassword" onChange={(e) => setPassword(e.target.value)} />
        </div>
            <div className="form-buttons">
            <button type="button" className="btn btn-outline-success" onClick={login}>Log in</button>
            <button type="submit" className="btn btn-outline-success">Create Account</button>
        </div>
    </form>
<br/>
</main>
  );
}
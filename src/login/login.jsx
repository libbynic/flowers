import React from 'react';
import { registerUser, loginUser } from '../../service';
import  {useNavigate} from 'react-router-dom';

export function Login({setUser}) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState(' ')
    const [error, setError] = React.useState(null);
    const [success, setSuccess] = React.useState(null);
    const navigate = useNavigate();

    function register(event) {
        event.preventDefault();
        setError(null);
        setSuccess(null);
        const create = registerUser(email, password);
        if (create.success) {
            setSuccess("Account created! You can now log in.")
            setError(null);
        }
        else {
            setError(create.message);
        }
    }
    function login(event){
        event.preventDefault();
        const signIn =  loginUser(email, password)
        setError(null)
        setSuccess(null)
        if (signIn.success) {
            setSuccess("Sign in successful!")
            navigate("/projects");
        }
        else {
            setSuccess(null);
            setError(signIn.message || "Invalid credentials");
        }
    }
  return (
   <main>
<iframe  src="https://www.youtube.com/embed/tgCm_fj9gvE?autoplay=1&mute=1&loop=1&playlist=tgCm_fj9gvE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
<div className="center-div">
    <h1>Welcome to Blossom Blueprint</h1>
</div>
    <br/>
    <form onSubmit={register} className="form">
        {success && <div className="alert alert-success">{success}</div>}
        {error && <div className="alert alert-danger">{error}</div>}
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
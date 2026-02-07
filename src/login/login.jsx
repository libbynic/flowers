import React from 'react';

export function Login() {
  return (
   <main>
    <body>
<iframe width="600" height="300" src="https://www.youtube.com/embed/tgCm_fj9gvE?autoplay=1&mute=1&loop=1&playlist=tgCm_fj9gvE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> 
<div className="center-div">
    <h1>Welcome to Blossom Blueprint</h1>
</div>
    <br/>
    <form action="formSubmit.html" method="post" className="form">
        <div className="form-group"> 
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="varEmail" />
            <label htmlFor="password"> Password: </label>
            <input type="password" id="password" name="varPassword" />
        </div>
            <div className="form-buttons">
            <button type="button" className="btn btn-outline-success">Log in</button>
            <button type="button" className="btn btn-outline-success">Create Account</button>
        </div>
    </form>
<br/>
</body>
</main>
  );
}
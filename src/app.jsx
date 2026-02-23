import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Chat } from './chat/chat';
import { Login } from './login/login';
import { Projects } from './projects/projects';
import { About } from './about/about';

export default function App() {
    const [user, setUser] = React.useState(null);
    return(
        <BrowserRouter>
        <div>
         <header>
                   <nav className="navbar navbar-expand-lg my-nav-bar">
                <div className="container-fluid">
                    <NavLink className="navbar-brand  league-script-regular" to="/"> <b>Blossom Blueprint</b></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                <ul> <NavLink className="btn btn-outline-success" to=""> Home </NavLink> </ul>
                <ul> <NavLink className="btn btn-outline-success" to="projects"> Projects </NavLink> </ul>
                <ul> <NavLink className="btn btn-outline-success" to="chat"> Chat </NavLink> </ul>
                <ul> <NavLink className="btn btn-outline-success" to="about"> About </NavLink> </ul>
                
            </div>
        </div>
    </div>
</nav>
        </header>
            <Routes>
    <Route path='/' element={<Login setUser={setUser} />} />
    <Route path='/projects' element={<Projects user ={user} />} />
    <Route path='/chat' element={<Chat />} />
    <Route path='/about' element={<About />} />
    <Route path='*' element={<NotFound />} />
    </Routes>

        <footer className="foot">
               <br />
           Libby Nichols 
           <NavLink to= "https://github.com/libbynic/flowers"> Github Repo </NavLink>
       </footer> 
    </div>
    </BrowserRouter>
    );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}
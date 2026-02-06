export default function App() {
    return(
        <div>
         <header>
                   <nav className="navbar navbar-expand-lg my-nav-bar">
                <div className="container-fluid">
                    <a className="navbar-brand  league-script-regular" href="#"> <b>Blossom Blueprint</b></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                <ul> <a className="btn btn-outline-success" href="index.html"> Home </a></ul>
                <ul> <a className="btn btn-outline-success"href="projects.html"> Projects </a></ul>
                <ul> <a className="btn btn-outline-success"href="chat.html"> Chat </a></ul>
                <ul> <a className="btn btn-outline-success"href="about.html">About</a></ul>
                
            </div>
        </div>
    </div>
</nav>
             <p className="welcome"> Welcome User! </p>
        </header>
        <main> Router here </main>

        <footer className="foot">
               <br> 
           Libby Nichols 
           <a href = https://github.com/libbynic/flowers> Github Repo</a>
       </footer> 
    </div>
    );
}
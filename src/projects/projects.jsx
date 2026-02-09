import React from 'react';
export function Projects() {
  return (
   <main>
            <div className="center-div"/>
                <h1>Start New Project!</h1>
                <div className="form-buttons"> 
                    <button type="button" className="btn btn-outline-success">View Past Projects</button>
                </div>
                <br/>
                <form action="formSubmit.html" method="post">
                    <li>
                        <label htmlFor="text">Project Name:</label>
                        <input type="text" id="text" name="varText" placeholder="Name Here"/>
                    </li>
                </form>
                <form action="formSubmit.html" method="post">
                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    <input type="text" id="text" name="varText" placeholder="Arrangement Name"/> 
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                <div className="accordion-body">
                                    <p>  <label htmlFor="Arrangement">What type of arrangement are you making? </label>
                                        <select id="Arrangement" name="Arrangement">
                                            <option value="" disabled selected> Choose a design </option>
                                            <option value="Bouquet">Bouquet</option>
                                            <option value="Arch"> Arch </option>
                                            <option value="Corsage"> Corsage </option> 
                                            <option value="Boutonnieres"> Boutonniere </option>
                                            <option value="Bud Vases"> Bud Vase </option>
                                            <option value=" Custom "> Custom </option>
                                        </select>
                                    </p>
                                    <p>
                                        <label htmlFor="flower type"> Flower:</label>
            <select id="flower type" name="flower type">
                <option value="" disabled selected> Choose a flower type </option>
                <option value="flower"> Sun Flowers </option>
                <option value="flower"> Roses </option>
                <option value="flower"> Daliah </option>
                <option value="flower"> Chrysanthemums </option>
            </select>
                <label htmlFor="number">Number of Stems:</label>
                <input type="number" name="varNumber" id="number" min="1" step="1" placeholder="0"/>
            <button>
                <i className="bi bi-plus"></i>
            </button>
        </p>
    </div>
    </div>
  </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            <input type="text" id="text" name="varText" placeholder="Arrangement Name"/> 
        </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
      <p>
          <label htmlFor="Arrangement">What type of arrangement are you making? </label>
          <select id="Arrangement" name="Arrangement">
              <option value="" disabled selected> Choose a design </option>
              <option value="Bouquet">Bouquet</option>
                <option value="Arch"> Arch </option>
                <option value="Corsage"> Corsage </option> 
                <option value="Boutonnieres"> Boutonniere </option>
                <option value="Bud Vases"> Bud Vase </option>
                <option value=" Custom "> Custom </option>
            </select>
            </p>
            <p>
            <label htmlFor="flower type"> Flower:</label>
            <select id="flower type" name="flower type">
                <option value="" disabled selected> Choose a flower type </option>
                <option value="flower"> Sun Flowers </option>
                <option value="flower"> Roses </option>
                <option value="flower"> Daliah </option>
                <option value="flower"> Chrysanthemums </option>
            </select>
                <label htmlFor="number">Number of Stems:</label>
                <input type="number" name="varNumber" id="number" min="1" step="1" placeholder="0"/>
             <button>
                 <i className="bi bi-plus"></i>
                </button>
            </p>
        </div>
    </div>
    <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                <input type="text" id="text" name="varText" placeholder="Arrangement Name"/> 
            </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
      <div className="accordion-body">
        <p>
            <label htmlFor="Arrangement">What type of arrangement are you making? </label>
            <select id="Arrangement" name="Arrangement">
                <option value="" disabled selected> Choose a design </option>
                <option value="Bouquet">Bouquet</option>
                <option value="Arch"> Arch </option>
                <option value="Corsage"> Corsage </option> 
                <option value="Boutonnieres"> Boutonniere </option>
                <option value="Bud Vases"> Bud Vase </option>
                <option value=" Custom "> Custom </option>
            </select>
        </p>
        <p>
            <label htmlFor="flower type"> Flower:</label>
            <select id="flower type" name="flower type">
                <option value="" disabled selected> Choose a flower type </option>
                <option value="flower"> Sun Flowers </option>
                <option value="flower"> Roses </option>
                <option value="flower"> Daliah </option>
                <option value="flower"> Chrysanthemums </option>
            </select>
            <label htmlFor="number">Number of Stems:</label>
            <input type="number" name="varNumber" id="number" min="1" step="1" placeholder="0"/>
              <button>
                <i className="bi bi-plus"></i>
            </button>
        </p>
      </div>
    </div>
</div>
</div>
<div className="form-buttons">
    <button className="btn btn-outline-success"> Add Arrangment </button>
</div>
</form>
<br/>
<img src="projectsImage.jpg" width="300" />
<br/>
</main>
  );
}
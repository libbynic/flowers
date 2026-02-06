import React from 'react';

export function Login() {
  return (
   <main>
        <body>
            <div class="center-div"/>
                <h1>Start New Project!</h1>
                <div class="form-buttons"> 
                    <button type="button" class="btn btn-outline-success">View Past Projects</button>
                </div>
                <br/>
                <form action="formSubmit.html" method="post">
                    <li>
                        <label for="text">Project Name:</label>
                        <input type="text" id="text" name="varText" placeholder="Name Here"/>
                    </li>
                </form>
                <form action="formSubmit.html" method="post">
                    <div class="accordion" id="accordionPanelsStayOpenExample"/>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    <input type="text" id="text" name="varText" placeholder="Arrangement Name"/> 
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                                <div class="accordion-body">
                                    <p>  <label for="Arrangement">What type of arrangement are you making? </label>
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
                                        <label for="flower type"> Flower:</label>
            <select id="flower type" name="flower type">
                <option value="" disabled selected> Choose a flower type </option>
                <option value="flower"> Sun Flowers </option>
                <option value="flower"> Roses </option>
                <option value="flower"> Daliah </option>
                <option value="flower"> Chrysanthemums </option>
            </select>
                <label for="number">Number of Stems:</label>
                <input type="number" name="varNumber" id="number" min="1" step="1" placeholder="0"/>
            <button>
                <i class="bi bi-plus"></i>
            </button>
        </p>
    </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            <input type="text" id="text" name="varText" placeholder="Arrangement Name"/> 
        </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
      <div class="accordion-body">
      <p>
          <label for="Arrangement">What type of arrangement are you making? </label>
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
            <label for="flower type"> Flower:</label>
            <select id="flower type" name="flower type">
                <option value="" disabled selected> Choose a flower type </option>
                <option value="flower"> Sun Flowers </option>
                <option value="flower"> Roses </option>
                <option value="flower"> Daliah </option>
                <option value="flower"> Chrysanthemums </option>
            </select>
                <label for="number">Number of Stems:</label>
                <input type="number" name="varNumber" id="number" min="1" step="1" placeholder="0"/>
             <button>
                 <i class="bi bi-plus"></i>
                </button>
            </p>
        </div>
    </div>
    <div class="accordion-item">
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                <input type="text" id="text" name="varText" placeholder="Arrangement Name"/> 
            </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
      <div class="accordion-body">
        <p>
            <label for="Arrangement">What type of arrangement are you making? </label>
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
            <label for="flower type"> Flower:</label>
            <select id="flower type" name="flower type">
                <option value="" disabled selected> Choose a flower type </option>
                <option value="flower"> Sun Flowers </option>
                <option value="flower"> Roses </option>
                <option value="flower"> Daliah </option>
                <option value="flower"> Chrysanthemums </option>
            </select>
            <label for="number">Number of Stems:</label>
            <input type="number" name="varNumber" id="number" min="1" step="1" placeholder="0"/>
              <button>
                <i class="bi bi-plus"></i>
            </button>
        </p>
      </div>
    </div>
</div>
</div>
<div class="form-buttons">
    <button class="btn btn-outline-success"> Add Arrangment </button>
</div>
</form>
<br/>
<img src="projectsImage.jpg" width="300" />
</body>
<br/>
</main>
  );
}
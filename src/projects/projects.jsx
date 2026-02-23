import React from 'react';
import { Accordion } from 'react-bootstrap';
export function Projects({user}) {
  return (
   <main>
            <div className="center-div">
                <h1>{user ? user.email : 'Guest'}, start New Project!</h1>
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
                    <Accordion alwaysOpen>
                        <Accordion.Item eventKey="0">
                        <Accordion.Header><input type="text" id="text" name="varText" placeholder="Arrangement Name"/> </Accordion.Header>
                        <Accordion.Body>
                                                        <p>  <label htmlFor="Arrangement">What type of arrangement are you making? </label>
                                        <select defaultValue="" id="Arrangement" name="Arrangement">
                                            <option value="" disabled> Choose a design </option>
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
                        </Accordion.Body>
                     </Accordion.Item>
                  <Accordion.Item eventKey="1">
                        <Accordion.Header><input type="text" id="text" name="varText" placeholder="Arrangement Name"/> </Accordion.Header>
                        <Accordion.Body>
                                                        <p>  <label htmlFor="Arrangement">What type of arrangement are you making? </label>
                                        <select defaultValue="" id="Arrangement" name="Arrangement">
                                            <option value="" disabled> Choose a design </option>
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
                        </Accordion.Body>
                     </Accordion.Item>
                  <Accordion.Item eventKey="2">
                        <Accordion.Header><input type="text" id="text" name="varText" placeholder="Arrangement Name"/> </Accordion.Header>
                        <Accordion.Body>
                                                        <p>  <label htmlFor="Arrangement">What type of arrangement are you making? </label>
                                        <select defaultValue="" id="Arrangement" name="Arrangement">
                                            <option value="" disabled> Choose a design </option>
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
                        </Accordion.Body>
                     </Accordion.Item>
                </Accordion>
    <button className="btn btn-outline-success"> Add Arrangment </button>
</form>
</div>   
<br/>
<div className='center-img'>
<img src="projectsImage.jpg" width="300" />
</div>
<br/>
</main>
  );
}
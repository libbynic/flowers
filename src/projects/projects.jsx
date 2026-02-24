import React from 'react';
import { Accordion } from 'react-bootstrap';
export function Projects({user}) {
    const [arrangement, setArrangements] = React.useState([{id:1, name:"", flowers: [
        {id: 1, type:"", stems:0}
    ]}]); 
    
    function addArrangement() {
        setArrangements(prev => [
            ...prev, 
            {id:Date.now(), name:"" , flowers: []}
        ]);
    }

    function addFlower(arrangementId) {
        setArrangements(prev => 
            prev.map(arrangement =>
            {
                if (arrangement.id === arrangementId) {
                    return {
                        ...arrangement, 
                        flowers: [
                            ...arrangement.flowers, 
                            {
                                id: Date.now(),
                                type: "",
                                stems: 0
                            }
                        ]
                    };
                }
                return arrangement;
            })
        );
    }
    function removeFlower(arrangementId, flowerId) {
    setArrangements(prev =>
    prev.map(arrangement => {
      if (arrangement.id === arrangementId) {
        // Return a new arrangement with flowers filtered out
        return {
          ...arrangement,
          flowers: arrangement.flowers.filter(flower => flower.id !== flowerId)
        };
      }
      return arrangement;
    })
  );
}
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
                        {arrangement.map((arrangement, index) => (
                            <Accordion.Item 
                            eventKey={String(arrangement.id)}
                            key={arrangement.id}
                            > 
                            <Accordion.Header> 
                                <input type="text" id="text" name="varText" placeholder="Arrangement Name"/>
                                <button type="button"> <i className="bi bi-trash"> </i> </button>
                            </Accordion.Header>

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
                                        {arrangement.flowers.map(flower => (
                                            <div key={flower.id}>
                                                <label htmlFor="flower type"> Flower:</label>
                                            <select defaultValue="" id="flower type" name="flower type">
                                                <option value="" disabled> Choose a flower type </option>
                                                <option value="flower"> Sun Flowers </option>
                                                <option value="flower"> Roses </option>
                                                <option value="flower"> Daliah </option>
                                                <option value="flower"> Chrysanthemums </option>
                                            </select>
                                                <label htmlFor="number">Number of Stems:</label>
                                                <input type="number" name="varNumber" id="number" min="1" step="1" placeholder="0"/>
                                                <button type="button" onClick={() => removeFlower(arrangement.id, flower.id)}> <i className="bi bi-trash"> </i> </button>
                                            </div>
                                       ))}
                                            <button type="button" onClick={()=> addFlower(arrangement.id)}>
                                                <i className="bi bi-plus"></i>
                                            </button>
                            </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion> 
    <button type="button" className="btn btn-outline-success" onClick={addArrangement}> Add Arrangment </button>
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
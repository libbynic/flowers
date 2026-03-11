import React from 'react';
import { Accordion } from 'react-bootstrap';
export function Projects({user}) {
    const [arrangement, setArrangements] = React.useState([{id:1, name:"", flowers: [
        {id: 1, type:"", stems:0}
    ]}]); 

    const [savedProjects, setSavedProjects] = React.useState([]);
    const [showPastProjects, setShowPastProjects] = React.useState(false);
    
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
function removeArrangement(arrangementId){
    setArrangements( prev =>
        prev.filter(arrangement => arrangement.id !== arrangementId)
    );
}
async function saveProject() {
  await fetch('/api/projects', {
    method: 'POST',
    credentials: 'include', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      arrangements: arrangement
    })
  });
}

async function loadProjects() {
  const response = await fetch('/api/projects', { credentials: 'include'});
  const data = await response.json();
  setSavedProjects(data);
  setShowPastProjects(true);
}

function updateArrangementName(arrangementId, value) {
  setArrangements(prev =>
    prev.map(arr =>
      arr.id === arrangementId
        ? { ...arr, name: value }
        : arr
    )
  );
}
function updateFlowerType(arrangementId, flowerId, value) {
  setArrangements(prev =>
    prev.map(arr => {
      if (arr.id === arrangementId) {
        return {
          ...arr,
          flowers: arr.flowers.map(flower =>
            flower.id === flowerId
              ? { ...flower, type: value }
              : flower
          )
        };
      }
      return arr;
    })
  );
}
function updateFlowerStems(arrangementId, flowerId, value) {
  setArrangements(prev =>
    prev.map(arr => {
      if (arr.id === arrangementId) {
        return {
          ...arr,
          flowers: arr.flowers.map(flower =>
            flower.id === flowerId
              ? { ...flower, stems: value }
              : flower
          )
        };
      }
      return arr;
    })
  );
}
  return (
   <main>
            <div className="center-div">
                <h1>{user ? user.email : 'Guest'}, start New Project!</h1>
                <div className="form-buttons"> 
                    <button type="button" className="btn btn-outline-success" onClick={loadProjects}>View Past Projects</button>
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
                                <input type="text" id="text" name="varText" placeholder="Arrangement Name" value={arrangement.name} onChange={(e) => updateArrangementName(arrangement.id, e.target.value)}/>
                            </Accordion.Header>

                            <Accordion.Body> 
                                  <p>  <label htmlFor="Arrangement">What type of arrangement are you making? </label>
                                        <select id="Arrangement" name="Arrangement">
                                            <option value="" disabled> Choose a design </option>
                                            <option value="Bouquet">Bouquet</option>
                                            <option value="Arch"> Arch </option>
                                            <option value="Corsage"> Corsage </option> 
                                            <option value="Boutonnieres"> Boutonniere </option>
                                            <option value="Bud Vases"> Bud Vase </option>
                                            <option value=" Custom "> Custom </option>
                                        </select>
                                    </p>
                                        {arrangement.flowers.map((flower) => (
                                            <div key={flower.id}>
                                                <label htmlFor="flower type"> Flower:</label>
                                            <select  id="flower type" name="flower type" value={flower.type} onChange={(e) => updateFlowerType(arrangement.id, flower.id, e.target.value)}>
                                                <option value="" disabled> Choose a flower type </option>
                                                <option value=" Sunflower"> Sun Flowers </option>
                                                <option value="Roses"> Roses </option>
                                                <option value="Daliah"> Daliah </option>
                                                <option value="Chrysanthemums"> Chrysanthemums </option>
                                                <option value="Carnations"> Carnations </option>
                                            </select>
                                                <label htmlFor="number">Number of Stems:</label>
                                                <input type="number" name="varNumber" id="number" min="1" step="1" placeholder="0" value={flower.stems} onChange={(e) => updateFlowerStems(arrangement.id, flower.id, e.target.value)}/>
                                                <button type="button" onClick={() => removeFlower(arrangement.id, flower.id)}> <i className="bi bi-trash"> </i> </button>
                                            </div>
                                       ))}
                                            <button type="button" onClick={()=> addFlower(arrangement.id)}>
                                                <i className="bi bi-plus"></i>
                                            </button>
                                        <div>
                                       <button type="button" className="btn btn-outline-success"><i className="bi bi-trash" onClick={() => removeArrangement(arrangement.id)}> </i> </button>
                                        </div>
                            </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion> 
    <button type="button" className="btn btn-outline-success" onClick={addArrangement}> Add Arrangment </button>
    <button type="button" className="btn btn-outline-success" onClick={saveProject}> Save Project </button>
</form>

{showPastProjects && (
<div>
  <h2>Past Projects</h2>

  {savedProjects.map(project => (
    <div key={project.id}>
      <h4>{new Date(project.date).toLocaleDateString()}</h4>

      {project.arrangements.map(arr => (
        <div key={arr.id}>
          <strong>{arr.name || "Arrangement"}</strong>

          <ul>
            {arr.flowers.map(flower => (
              <li key={flower.id}>
                {flower.type} — {flower.stems} stems
              </li>
            ))}
          </ul>

        </div>
      ))}

    </div>
  ))}

</div>
)}
</div>   
<br/>
<div className='center-img'>
<img src="projectsImage.jpg" width="300" />
</div>
<br/>
</main>
  );
}
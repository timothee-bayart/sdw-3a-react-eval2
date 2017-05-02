import React, {Component} from 'react';

export default class ProjectAdd extends Component {
  constructor(props) {
    super(props);

    this.project = {};

    this.setTitle = (value) => {
          this.project.title = value;
      }

    this.setDescription = (value) => {
        this.project.description = value;
    }
    
    this.setCreator = (value) => {
        this.project.creator = value;
    }
  }


  render() {
    return (
      <div>
        <h3>Add a new project</h3>
         <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" placeholder="Title" onChange={(e)=> {this.setTitle(e.target.value)}} />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input type="text" className="form-control" id="description" placeholder="Description" onChange={(e)=> {this.setDescription(e.target.value)}} />
        </div>
        <button onClick={(e)=> {this.props.addProject(this.project)}}>Ajouter</button>
      </div>
    );
  }
}
// Pour lier à un createur, rajouter un id en clé aux users, passer les users à projectAdd et générer les options d'un select
// dans un nouveau component

// <div className="form-group">
//           <label htmlFor="type">Creator</label>
//           <select className="form-control" id="type" onChange={(e)=> {this.setCreator(e.target.value)}}>
//             <option value=""></option>
//           </select>
//         </div>

import React, {Component} from 'react';

export default class UserAdd extends Component {
  constructor(props) {
    super(props);

    this.user = {type:"M"};

    this.setUserName = (value) => {
          this.user.name = value;
      }

    this.setUserAge = (value) => {
        this.user.age = value;
    }
    
    this.setUserType = (value) => {
        this.user.type = value;
    }
  }


  render() {
    return (
      <div>
        <h3>Add a new user</h3>
         <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Name" onChange={(e)=> {this.setUserName(e.target.value)}} />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age</label>
          <input type="number" className="form-control" id="age" placeholder="Age" onChange={(e)=> {this.setUserAge(e.target.value)}} />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type</label>
          <select className="form-control" id="type" onChange={(e)=> {this.setUserType(e.target.value)}}>
            <option value="H">Homme</option>
            <option value="F">Femme</option>
          </select>
        </div>
        <button onClick={(e)=> {this.props.addUser(this.user)}}>Ajouter</button>
      </div>
    );
  }
}

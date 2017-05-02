import React, {Component} from 'react';

export default class UserList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <ul className="list-group">
      {
        this.props.users.map(item => (
            <li key={item.name} className="list-group-item">
              <p className="text-info">{item.name} ({item.age} ans - {item.type})</p>
              <button className="text-primary" onClick={(e)=> {this.props.editUser(item.name)} }>Modifier</button>
              <button className="text-warning" onClick={(e)=> {this.props.deleteUser(item.name)} }>Supprimer</button>
            </li>
          )
        )
      }
      </ul>
    );
  }
}

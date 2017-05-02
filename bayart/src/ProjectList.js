import React, {Component} from 'react';

export default class ProjectList extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <ul className="list-group">
      {
        this.props.projects.map(item => (
            <li key={item.id} className="list-group-item">
              <p className="text-info">
                {item.title}
                <br />
                ({item.description}
                <br />
                by {item.creator})
              </p>
              <button className="text-primary" onClick={(e)=> {this.props.editProject(item.id)} }>Modifier</button>
              <button className="text-warning" onClick={(e)=> {this.props.deleteProject(item.id)} }>Supprimer</button>
            </li>
          )
        )
      }
      </ul>
    );
  }
}

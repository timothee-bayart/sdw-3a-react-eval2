import React, { Component } from 'react';
import UserList from './UserList';
import UserAdd from './UserAdd';
import ProjectList from './ProjectList';
import ProjectAdd from './ProjectAdd';

class App extends Component {

  constructor(props) {
    super(props);

    // const stateFromLocal = localStorage.getItem('state');
    const stateFromLocal = false;

    if(stateFromLocal){
      this.state = JSON.parse(stateFromLocal);
    } else {
      this.state = {
        users : [
          {'age': 5, 'name': 'Bob', 'type': 'H'},
          {'age': 10, 'name': 'Alice', 'type': 'F'},
          {'age': 20, 'name': 'Timothée', 'type': 'H'},
          {'age': 15, 'name': 'Kévin', 'type': 'F'}
        ],
        projects : [
          {'id':0, 'title':'le titre 1', 'description':'description 1ghuet', 'creator':'lemonsieur'}
        ],
        view : 'users'
      };
    }

    this.editUser = (user) => {
    }

    this.editProject = (project) => {
    }

    this.deleteUser = (name) => {
      for(let i=0; i<this.state.users.length; i++){
        if(this.state.users[i].name==name){
          let array = this.state.users;
          array.splice(i, 1);
          this.setState({ 
            users : array
          })
          break;
        }
      }
    }

    this.addUser = (user) => {
      this.setState({ 
        users : [ ...this.state.users, user]
      })
    }


    this.addProject = (project) => {
      project.id = this.state.projects.length;
      console.log(project); // <-- bug...
      this.setState({ 
        projects : [ ...this.state.projects, project]
      })
      console.log(this.state.projects);
    }

    this.deleteProject = (id) => {
      for(let i=0; i<this.state.projects.length; i++){
        if(this.state.projects[i].id==id){
          let array = this.state.projects;
          array.splice(i, 1);
          this.setState({ 
            projects : array
          })
          break;
        }
      }
    }

    this.setView = (value) => {
      this.setState({ 
        view : value
      })
    }
  }

  getBasicState(){
    
  }

  componentDidUpdate(){
    localStorage.setItem('state', JSON.stringify(this.state));
  }

  render() {
    return (
      <div className="App">
        <nav>
          Menu : 
          <a onClick={(e)=> {this.setView('users')}}><li>Users</li></a>
          <a onClick={(e)=> {this.setView('projects')}}><li>Projects</li></a>
        </nav>
          {this.state.view == 'users' ? (
            <div>
            <h2>Users</h2>
            <UserList users={this.state.users} editUser={this.editUser} deleteUser={this.deleteUser}/>
            <UserAdd addUser={this.addUser}/>
            </div>
          ) : (
            <div>
            <h2>Projets</h2>
            <ProjectList projects={this.state.projects} editProject={this.editProject} deleteProject={this.deleteProject}/>
            <ProjectAdd addProject={this.addProject}/>
            </div>
          )}
      </div>
    );
  }
}

export default App;

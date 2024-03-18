import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import User from './components/user'
import UniqueId from 'react-html-id';
class App extends Component {
  
  constructor(){
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      users:[
        {id:this.nextUniqueId(),name:'john',age:20},
        {id:this.nextUniqueId(),name:'peter',age:30},
        {id:this.nextUniqueId(),name:'jill',age:25}
    ]
    }
    console.log(this.state);

 
  }
   deleteUser = (index,e)=>{
      const users_ = Object.assign([],this.state.users);//Object.assign reference of origin
      users_.splice(index,1);
      this.setState({users:users_})
    }

    changeUserName = (id,e)=>{
      const index = this.state.users.findIndex((user) =>{
        return user.id === id
      });//find id

      const user = Object.assign([],this.state.users[index]);//change  current user index record
      user.name = e.target.value;//change current user name

      const users = Object.assign([],this.state.users);//copy users state 

      users[index] = user; // update user index record
      this.setState({users:users})//update users
   }
  render() {
    return(
   <div className="App">
      <ul>
        {
          this.state.users.map((user,index) =>{
         return (<User 
         age={user.age}
         key={user.id}
         delEvent={this.deleteUser.bind(this,index)}
         chgEvnet={this.changeUserName.bind(this,user.id)}> {user.name}</User>)
        })
        }
      </ul>
    </div>
    );
  }
}
 


export default App;

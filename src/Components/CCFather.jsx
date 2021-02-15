import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import CCLogin from './CCLogin'
import CCRegister from './CCRegister';
import CCAdmain from './UsersPage/CCAdmain';
import CCForum from './UsersPage/CCForum';
import CCHomePage from './UsersPage/CCHomePage';
import CCNextMatch from './UsersPage/CCNextMatch';
import CCPlayerPage from './UsersPage/CCPlayerPage';
import ETable from './UsersPage/CCTable';

class CCFather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            

        }
    }


    
    UserOrAdmainLogin = (Email, Password) => {
        let obj ={};
        let Admain = JSON.parse(localStorage.getItem('Admain'));
        let Users = JSON.parse(localStorage.getItem('Users'));
        
        if ((Admain.find((u) => u.Email === Email && u.Password === Password))) {
           
            obj = Admain.find((u)=>u.Email === Email && u.Password === Password)
            alert('Welcome: ' + obj.Name)
            return 2    //מחזיר אדמיין
        }
        else if ((Users.find((u) => u.Email === Email && u.Password === Password))) {
            
            obj = Users.find((u)=>u.Email === Email && u.Password === Password)
            alert('Welcome: ' + obj.Name)
            return 1  //מחזיר יוזר
        }
        else {
            alert('Go To Register first')
            return 0  // מחזיר לא רשום
        }

    }




    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => <CCLogin Logged={this.UserOrAdmainLogin} />} />
                    <Route path="/register" render={() => <CCRegister />} />
                    <Route path="/homepage" render={()=> <CCHomePage />} />
                    <Route path="/playerpage" render={()=> <CCPlayerPage/>}/>
                    <Route path="/nextmatch" render={()=> <CCNextMatch/>}/>
                    <Route path="/table" render={()=> <ETable/>} />
                    <Route path='/forum' render={()=> <CCForum />}/>
                    <Route path='/admain' render={()=> <CCAdmain />}/>
                </Switch>


            </div>
        );
    }
}

export default withRouter(CCFather);
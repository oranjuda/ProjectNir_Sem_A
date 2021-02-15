import './App.css';
import { withRouter } from 'react-router-dom';
import CCFather from './Components/CCFather';

function App() {
  return (
    <div className="App">
        
        
      {/* <div style={{backgroundColor:'#F9E530' , height:'120px',flexDirection: 'row',fontSize:'30dp'}}>

        <Link to='/homepage' className="link">•בית•</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/nextmatch' className="link">•משחק הבא•</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/playerpage' className="link">•סגל הקבוצה•</Link>&nbsp;&nbsp;&nbsp;&nbsp;

      <img style={{marginTop:'2px'}} src='http://www.fcmn.co.il/images/logo.png' alt='' />

        <Link to='/table' className="link">•טבלת הליגה•</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/forum' className="link">•פורום•</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to='/' className="link">•התחברות•</Link>&nbsp;&nbsp;&nbsp;&nbsp;

      </div> */}

       <header className="App-header">
        
       <CCFather/>
        
      </header>
      
     
     
    </div>
  );
}

export default withRouter(App);

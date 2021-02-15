import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class CCHomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            srcPlayers: '',
            srcNextMatch: '',
            srcTable: ''

        }
    }


    componentDidMount() {

        let TosrcPlayers = JSON.parse(localStorage.getItem('srcPlayers'));
        let TosrcNextMatch = JSON.parse(localStorage.getItem('srcNextMatch'));
        let TosrcTable = JSON.parse(localStorage.getItem('srcTable'))
        this.setState({
            srcPlayers: TosrcPlayers,
            srcNextMatch: TosrcNextMatch,
            srcTable: TosrcTable

        })
    }




    render() {
        return (
            <div>
                <div style={{ width: '100%', backgroundColor: '#F9E530', height: '120px', flexDirection: 'row', fontSize: '30dp' }}>

                    <Link to='/homepage' className="link">•בית•</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/nextmatch' className="link">•משחק הבא•</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/playerpage' className="link">•סגל הקבוצה•</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                    <img style={{ marginTop: '2px' }} src='http://www.fcmn.co.il/images/logo.png' alt='' />

                    <Link to='/table' className="link">•טבלת הליגה•</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/forum' className="link">•פורום•</Link>&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to='/' className="link">•התחברות•</Link>&nbsp;&nbsp;&nbsp;&nbsp;

                </div>


                <div >





                    <div style={{ height: '70px' }}> </div>


                    <div  className="Div-center" style={{ display: 'flex', flexDirection: 'row' }}>


                        <div style={{ height: '600px', width: '550px', margin: '30px', padding: '5px' }}>

                            <a href="/playerpage">
                                <img src={this.state.srcPlayers} alt="blanc" height='100%' width='100%' />
                            </a>
                        </div>


                        <div style={{ height: '600px', width: '550px', margin: '30px', padding: '5px' }}>
                            <a href="/nextmatch">
                                <img src={this.state.srcNextMatch} alt="blanc" height='100%' width='100%' />
                            </a>
                        </div>

                    </div>
                    <div  className="Div-center" style={{ display: 'flex', height: '230px', margin: '5px' }}>
                        <div height='150px' width='300px'>
                            <a href="/table">
                                <img src={this.state.srcTable} alt="blanc" height='150px' width='1300px' />
                            </a>

                        </div>




                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(CCHomePage);



// getData(){
//     setTimeout(() => {
//       console.log('Our data is fetched');
//       this.setState({
//         data: 'Hello WallStreet'
//       })
//     }, 1000)
//   }

//   componentDidMount(){
//     this.getData();
//   }



// <div>
//                 <div style={{backgroundColor:'yellow' , height:'70px'}}> div koteret </div>

//             <div style={{display:'flex',flexDirection:'row' }}>


//                 <div style={{backgroundColor:'blue' ,height:'600px',width:'550px' , margin:'30px', padding:'5px' }}> LEFT DIV     A <br></br> lsdjhldsfhlsdfhlsdjfhsd</div>


//                 <div style={{backgroundColor:'black' ,height:'600px',width:'550px',margin:'30px' ,padding:'5px' }}> RIGHT DIV     B</div>



//             </div>
//             <div style={{display:'flex',flexDirection:'row' , backgroundColor:'green' ,height:'230px',margin:'5px' }}>

//                 div bottom

//                 {/* <div style={{backgroundColor:'black' ,height:'500px',width:'500px'  }} >

//                 </div> */}

//             </div>

//             </div>
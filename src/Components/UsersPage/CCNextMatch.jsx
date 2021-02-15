import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';


class CCNextMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            srcNextMatch: '',
            HomeTeamInfo: '',
            AwayTeamInfo: '',
            AwayTeamName: '',
            Statistic: ''


        }

    }

    componentDidMount() {
        let TosrcNextMatch = JSON.parse(localStorage.getItem('srcNextMatch'));
        let ToHomeTeamInfo = JSON.parse(localStorage.getItem('HomeTeamInfo'));
        let ToAwayTeamInfo = JSON.parse(localStorage.getItem('AwayTeamInfo'));
        let ToAwayTeamName = JSON.parse(localStorage.getItem('AwayTeamName'));
        let ToStatistic = JSON.parse(localStorage.getItem('Statistic'));

        this.setState({
            srcNextMatch: TosrcNextMatch,
            AwayTeamInfo: ToAwayTeamInfo,
            AwayTeamName: ToAwayTeamName,
            HomeTeamInfo: ToHomeTeamInfo,
            Statistic: ToStatistic
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

                <div>

                    <div style={{ height: '70px' }}> </div>


                    <div className="Div-center" style={{ display: 'flex', flexDirection: 'row' }}>


                        <div style={{ height: '600px', width: '550px', margin: '30px', padding: '5px' }}>


                            <img src={this.state.srcNextMatch} alt="blanc" height='100%' width='100%' />



                        </div>


                        <div style={{backgroundImage: `url("http://www.up2me.co.il/imgs/3976255.jpeg")` , height: '600px', width: '550px', margin: '30px', padding: '5px' }}>

                            
                            <h1>מכבי נתניה</h1>
                            <p>

                                {this.state.HomeTeamInfo}
                            </p>
                            <h1>{this.state.AwayTeamName}</h1>
                            <p>

                                {this.state.AwayTeamInfo}
                            </p>
                          
                            

                        </div>



                    </div>
                    <div className="Div-center" style={{ backgroundColor: 'yellow', height: '230px', margin: '5px' }}>
                        <h1 >סטטיסטיקה</h1>
                        <p style={{color:'black' , textAlign: 'center', justifyContent: 'center' }}>

                            {this.state.Statistic}


                        </p>





                    </div>

                </div>




            </div>
        );
    }
}

export default withRouter(CCNextMatch);
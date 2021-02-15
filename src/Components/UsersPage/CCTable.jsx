import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class CCTable extends Component {
    constructor(props) {
        super(props);
        this.state={
            srcTableView:''

        }
    }

    componentDidMount() {

        let TosrcTableView = JSON.parse(localStorage.getItem('srcTableView'));
        
        this.setState({
            srcTableView: TosrcTableView,
            
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
                <div style={{marginTop:'10px', height:'150px'}}>
                    <br />
                    <h3>טבלת ליגת העל 2020-2021</h3>

                </div>


                <div>
                    <img style={{height:'800px' , width:'1000px'}} src={this.state.srcTableView} alt="Null"/>
                </div>
            </div>

        );
    }
}

export default withRouter(CCTable);
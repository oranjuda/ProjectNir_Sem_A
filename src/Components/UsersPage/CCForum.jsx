import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class CCForum extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ArrForumToPrint: [],
            Name: '',
            Title: '',
            Description: ''



        }
    }

    componentDidMount() {

        if (localStorage.getItem('ArrForum')) {
            let ArrCheck = JSON.parse(localStorage.getItem('ArrForum'))
            this.setState((prev) => ({
                ArrForumToPrint: ArrCheck
            }), () => {
                console.log(this.state.ArrForumToPrint)
            });

        }
        else {
            let obj = {
                Name: 'admain',
                Title: 'welome',
                Description: 'netanya'

            }
            localStorage.setItem('ArrForum', JSON.stringify([obj]))

        }



    }


    Change = (e) => {
        if (e.target.name === 'Name') {
            this.setState((prev) => ({
                Name: e.target.value
            }), () => {
                console.log(this.state.Name)
            });
        }
        else if (e.target.name === 'Title') {
            this.setState((prev) => ({
                Title: e.target.value
            }), () => {
                console.log(this.state.Title)
            });
        }
        else if (e.target.name === 'Description') {
            this.setState((prev) => ({
                Description: e.target.value
            }), () => {
                console.log(this.state.Description)
            });
        }

    }


    Btnclick = () => {

        console.log(this.state.ArrForumToPrint)


        let objtopush = {
            Name: this.state.Name,
            Title: this.state.Title,
            Description: this.state.Description

        }
        this.setState((prev) => ({

            ArrForumToPrint: [...prev.ArrForumToPrint, objtopush]
        }), () => {
            localStorage.setItem('ArrForum', JSON.stringify(this.state.ArrForumToPrint))

        });

        this.setState((prev) => ({
            Name: '',
            Title: '',
            Description: ''

        }));





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


                <div style={{ height: '100px' }}></div>

                <div>
                    <h2>פורום אוהדים</h2>

                                    Name:<input type="text" name='Name' value={this.state.Name} onChange={this.Change} />&nbsp;&nbsp;
                                    Title:<input type="text" name='Title' value={this.state.Title} onChange={this.Change} />&nbsp;&nbsp;
                                    Description:<input type="text" name='Description' value={this.state.Description} onChange={this.Change} />&nbsp;&nbsp;

                                 <button name='Btn' onClick={this.Btnclick}>שלח</button>


                    <div >

                        {this.state.ArrForumToPrint.map((m, idx) =>
                            <div key={idx} align='center'>
                                <p key={idx}>{m.Name}: שם<br /> {m.Title}: כותרת<br />{m.Description}: פוסט<br /> </p>
                                {/* <button onClick={() => this.Remove(idx)}>Remove</button> */}
                            </div>
                        )}
                    </div>


                </div>
            </div>
        );
    }
}

export default withRouter(CCForum);








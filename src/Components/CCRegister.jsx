import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class CCRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Email: '',
            Password: '',
            Name: '',
            RePassword: '',
            UserToAdd: {}

        }
    }



    ChgText = (e) => {
        if (e.target.name === 'Email') {
            this.setState((prev) => ({
                Email: e.target.value
            }), () => {
                console.log(this.state.Email)
            });
        }
        else if (e.target.name === 'Password') {
            this.setState((prev) => ({
                Password: e.target.value
            }), () => {
                console.log(this.state.Password)
            });
        }
        else if (e.target.name === 'RePassword') {
            this.setState((prev) => ({
                RePassword: e.target.value
            }), () => {
                console.log(this.state.RePassword)
            });
        }
        else if (e.target.name === 'Name') {
            this.setState((prev) => ({
                Name: e.target.value
            }), () => {
                console.log(this.state.Name)
            });
        }


    }

    checkData = () => {
        if (this.state.Password === '' ||
            this.state.Name === '' ||
            this.state.RePassword === '' ||
            this.state.Email === '' ||
            this.state.Password !== this.state.RePassword
        ) {
            alert('אחד השדות לא מולאו כמו שצריך')
            return 0

        }
        else {
            return 1
        }

    }

    BtnClick = () => {
        let flag = this.checkData();
        let obj = {
            Email: this.state.Email,
            Password: this.state.Password,
            Name: this.state.Name,
        }
        if ((localStorage.getItem('Users')) && (flag)) {

            let ArrCheckUser = JSON.parse(localStorage.getItem('Users'))

            if (ArrCheckUser.find((u) => u.Email === this.state.Email)) {
                alert("המייל שהקשת נמצא כבר במערכת");

            }
            else {
                ArrCheckUser = [...ArrCheckUser, obj]
                localStorage.setItem('Users', JSON.stringify(ArrCheckUser))
                this.props.history.push('/')
            }

        }
        else if (flag) {
            localStorage.setItem('Users', JSON.stringify([obj]))
            this.props.history.push('/')

        }




    }




    render() {
        return (
            <div>
                <div style={{ width: '100%', backgroundColor: '#F9E530', height: '120px', flexDirection: 'row', fontSize: '30dp' }}>



                    <img style={{ marginTop: '2px' }} src='http://www.fcmn.co.il/images/logo.png' alt='' />



                </div>





                <div className="Div-Lggin">
                    <h1>דף הרשמה</h1>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Name </label>

                                </td>
                                <td>
                                    <input type="text" name="Name" value={this.state.Name} onChange={this.ChgText} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Email </label>

                                </td>
                                <td>
                                    <input type="email" name="Email" value={this.state.Email} onChange={this.ChgText} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Password </label>
                                </td>
                                <td>
                                    <input type="Password" name="Password" value={this.state.Password} onChange={this.ChgText} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>RePassword </label>
                                </td>
                                <td>
                                    <input type="Password" name="RePassword" value={this.state.RePassword} onChange={this.ChgText} />
                                </td>
                            </tr>

                        </tbody>
                    </table>
                    <br />
                &nbsp;&nbsp;<button style={{ fontSize: '20px' }} name='Login' onClick={this.BtnClick}>Register</button>
                    <br /><br />

                    <Link to='/' className="link">Go To Login</Link>


                </div>
            </div>
        );
    }
}

export default withRouter(CCRegister);
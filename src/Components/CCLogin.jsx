import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class CCLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: ''

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
            }));
        }


    }

    BtnClick = () => {
        // login 
        // find if user is in admin
        // this.props.loginToFater(obj,true(admin) / false(user))
        let flag = this.props.Logged(this.state.Email, this.state.Password)
        switch (flag) {
            case 0: this.props.history.push('/register'); break;
            case 1: this.props.history.push("/homepage"); break;
            case 2: this.props.history.push("/admain"); break;
            default: ; break;

        }

    }

    render() {
        return (
            <div>

                <div style={{ width: '100%', backgroundColor: '#F9E530', height: '120px', flexDirection: 'row', fontSize: '30dp' }}>



                    <img style={{ marginTop: '2px' }} src='http://www.fcmn.co.il/images/logo.png' alt='' />



                </div>





                <div className="Div-Lggin" align="center" >
                    <h1>דף התחברות</h1>
                    <table>
                        <tbody>
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

                        </tbody>
                    </table>
                    <br />
                &nbsp;&nbsp;<button style={{ fontSize: '20px' }} name='Login' onClick={this.BtnClick}>Login</button>
                    <br /><br />

                    <Link to='/register' className="link">Go To Register</Link>



                </div>
            </div>
        );
    }
}

export default withRouter(CCLogin);
import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


class CCAdmain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            srcNextMatch: '',
            srcPlayers: '',
            srcTable: '',
            HomeTeamInfo: '',
            AwayTeamInfo: '',
            AwayTeamName: '',
            Statistic: '',
            srcTableView: '',
            nameToDelete: '',
            ArrPlayersToSend: '',
            ArrForumToSend: [],
            Ppic: '',
            Pname: '',
            Pdata: '',

        }
    }

    componentDidMount() {
        let ArrPlayers = JSON.parse(localStorage.getItem('Players'))
        let ArrCheck = JSON.parse(localStorage.getItem('ArrForum'))

        this.setState((prev) => ({
            ArrForumToSend: ArrCheck,
            ArrPlayersToSend: ArrPlayers


        }), () => {
            console.log(this.state.ArrPlayersToSend)
            console.log(this.state.ArrForumToSend)

        });


    }

    chg = (e) => {
        if (e.target.name === 'srcNextMatch') {
            this.setState((prev) => ({
                srcNextMatch: e.target.value
            }));
        }
        else if (e.target.name === 'srcPlayers') {
            this.setState((prev) => ({
                srcPlayers: e.target.value
            }));
        }
        else if (e.target.name === 'srcTable') {
            this.setState((prev) => ({
                srcTable: e.target.value
            }));
        }
        else if (e.target.name === 'HomeTeamInfo') {
            this.setState((prev) => ({
                HomeTeamInfo: e.target.value
            }));
        }
        else if (e.target.name === 'AwayTeamInfo') {
            this.setState((prev) => ({
                AwayTeamInfo: e.target.value
            }));
        }
        else if (e.target.name === 'AwayTeamName') {
            this.setState((prev) => ({
                AwayTeamName: e.target.value
            }));
        }
        else if (e.target.name === 'Statistic') {
            this.setState((prev) => ({
                Statistic: e.target.value
            }));
        }

        else if (e.target.name === 'srcTableView') {
            this.setState((prev) => ({
                srcTableView: e.target.value
            }));
        }
        else if (e.target.name === 'nameToDelete') {
            this.setState((prev) => ({
                nameToDelete: e.target.value
            }));
        }

        else if (e.target.name === 'Pname') {
            this.setState((prev) => ({
                Pname: e.target.value
            }));
        }
        else if (e.target.name === 'Ppic') {
            this.setState((prev) => ({
                Ppic: e.target.value
            }));
        }
        else if (e.target.name === 'Pdata') {
            this.setState((prev) => ({
                Pdata: e.target.value
            }));
        }








    }

    btnClickNextMatch = () => {
        localStorage.setItem('srcNextMatch', JSON.stringify(this.state.srcNextMatch))
        this.setState((prev) => ({
            srcNextMatch: ''
        }));
    }

    btnClicksrcPlayers = () => {
        localStorage.setItem('srcPlayers', JSON.stringify(this.state.srcPlayers))
        this.setState((prev) => ({
            srcPlayers: ''
        }));

    }
    btnClicksrcTable = () => {
        localStorage.setItem('srcTable', JSON.stringify(this.state.srcTable))
        this.setState((prev) => ({
            srcTable: ''
        }));
    }

    btnClickHomeTeamInfo = () => {
        localStorage.setItem('HomeTeamInfo', JSON.stringify(this.state.HomeTeamInfo))
        this.setState((prev) => ({
            HomeTeamInfo: ''
        }));

    }
    btnClickAwayTeamInfo = () => {
        localStorage.setItem('AwayTeamInfo', JSON.stringify(this.state.AwayTeamInfo))
        this.setState((prev) => ({
            AwayTeamInfo: ''
        }));

    }
    btnClickAwayTeamName = () => {
        localStorage.setItem('AwayTeamName', JSON.stringify(this.state.AwayTeamName))
        this.setState((prev) => ({
            AwayTeamName: ''
        }));

    }
    btnClickStatistic = () => {
        localStorage.setItem('Statistic', JSON.stringify(this.state.Statistic))
        this.setState((prev) => ({
            Statistic: ''
        }));

    }
    btnClicksrcTableView = () => {
        localStorage.setItem('srcTableView', JSON.stringify(this.state.srcTableView))
        this.setState((prev) => ({
            srcTableView: ''
        }));

    }

    btnClicknameToDelete = (name) => {
        let arr = this.state.ArrForumToSend.filter((r) => (r.Name !== name))
        localStorage.setItem('ArrForum', JSON.stringify(arr))
        this.setState((prev) => ({
            nameToDelete: ''
        }));


    }



    btnOwner = () => {
        let arr = this.state.ArrPlayersToSend
        arr[0].name = this.state.Pname
        arr[0].pic = this.state.Ppic
        arr[0].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

        }));
    }

    btnCoach = () => {
        let arr = this.state.ArrPlayersToSend
        arr[1].name = this.state.Pname
        arr[1].pic = this.state.Ppic
        arr[1].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

        }));

    }
    btnPlayer2 = () => {
        let arr = this.state.ArrPlayersToSend
        arr[2].name = this.state.Pname
        arr[2].pic = this.state.Ppic
        arr[2].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

        }));

    }

    btnPlayer3 = () => {
        let arr = this.state.ArrPlayersToSend
        arr[3].name = this.state.Pname
        arr[3].pic = this.state.Ppic
        arr[3].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

        }));

    }
    btnPlayer4 = () => {
        let arr = this.state.ArrPlayersToSend
        arr[4].name = this.state.Pname
        arr[4].pic = this.state.Ppic
        arr[4].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

        }));

    }
    btnPlayer5 = () => {
        let arr = this.state.ArrPlayersToSend
        arr[5].name = this.state.Pname
        arr[5].pic = this.state.Ppic
        arr[5].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

        }));

    }
    btnPlayer6 = () => {
        let arr = this.state.ArrPlayersToSend
        arr[6].name = this.state.Pname
        arr[6].pic = this.state.Ppic
        arr[6].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

        }));

    }
    btnPlayer7 = () => {
        let arr = this.state.ArrPlayersToSend
        arr[7].name = this.state.Pname
        arr[7].pic = this.state.Ppic
        arr[7].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

        }));

    }
    btnPlayer8 = () => {
        let arr = this.state.ArrPlayersToSend
        arr[8].name = this.state.Pname
        arr[8].pic = this.state.Ppic
        arr[8].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

        }));

    }
    btnPlayer9 = () => {
        let arr = this.state.ArrPlayersToSend
        arr[9].name = this.state.Pname
        arr[9].pic = this.state.Ppic
        arr[9].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

        }));

    }
    btnPlayer10 = () => {
        let arr = this.state.ArrPlayersToSend
        arr[10].name = this.state.Pname
        arr[10].pic = this.state.Ppic
        arr[10].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

        }));

    }
    btnPlayer11 = () => {
        let arr = this.state.ArrPlayersToSend
        arr[11].name = this.state.Pname
        arr[11].pic = this.state.Ppic
        arr[11].data = this.state.Pdata
        localStorage.setItem('Players', JSON.stringify(arr))

        this.setState((prev) => ({
            Pname: '',
            Ppic: '',
            Pdata: ''

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
                <h1>דף מנהל</h1>

                <div style={{ height: '200px' }}>
                    <h3>דף הבית</h3>
                    תמונת המשחק הבא:<input type="text" name='srcNextMatch' value={this.state.srcNextMatch} onChange={this.chg} /><button onClick={this.btnClickNextMatch}>GO</button><br />
                    תמונת סגל הקבוצה:<input type="text" name='srcPlayers' value={this.state.srcPlayers} onChange={this.chg} /><button onClick={this.btnClicksrcPlayers}>GO</button><br />
                    תמונת הלוגו של הטבלה<input type="text" name='srcTable' value={this.state.srcTable} onChange={this.chg} /><button onClick={this.btnClicksrcTable}>GO</button><br />
                </div>

                <div style={{ height: '200px' }}>
                    <h3>דף משחק הבא</h3>
                    מידע על נתניה פציעות\מורחקים<input type="text" name='HomeTeamInfo' value={this.state.HomeTeamInfo} onChange={this.chg} /><button onClick={this.btnClickHomeTeamInfo}>GO</button><br />
                    מידע על קבוצה יריבה פציעות\מורחקים<input type="text" name='AwayTeamInfo' value={this.state.AwayTeamInfo} onChange={this.chg} /><button onClick={this.btnClickAwayTeamInfo}>GO</button><br />
                    שם הקבוצה היריבה<input type="text" name='AwayTeamName' value={this.state.AwayTeamName} onChange={this.chg} /><button onClick={this.btnClickAwayTeamName}>GO</button><br />
                    סטטיסטיקה<input type="text" name='Statistic' value={this.state.Statistic} onChange={this.chg} /><button onClick={this.btnClickStatistic}>GO</button><br />
                </div>


                <div style={{ height: '200px' }}>
                    <h3>דף טבלה </h3>

                    טבלת הליגה<input type="text" name='srcTableView' value={this.state.srcTableView} onChange={this.chg} />
                    <Button  onClick={this.btnClicksrcTableView} variant="contained" color="primary">GO</Button><br />
                        
                    

                   

                </div>

                <div style={{ height: '200px' }}>
                    <h3> פורום</h3>

                    שם למחוק<input type="text" name='nameToDelete' value={this.state.nameToDelete} onChange={this.chg} /><button onClick={() => this.btnClicknameToDelete(this.state.nameToDelete)}>GO</button><br />

                </div>


                <div style={{ height: '1000px' }}>
                    <h3>סגל הקבוצה</h3>
                    בעלים<br />
                    פרטים<input id='0' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnOwner}>GO</button><br />


                    מאמן<br />
                    פרטים<input id='1' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnCoach}>GO</button><br />


                    אלמוג כהן<br />
                    פרטים<input id='2' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnPlayer2}>GO</button><br />


                    חן עזרה<br />
                    פרטים<input id='3' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnPlayer3}>GO</button><br />


                    גבי קניקובסקי<br />
                    פרטים<input id='4' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnPlayer4}>GO</button><br />


                    קווין פרייטר<br />
                    פרטים<input id='5' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnPlayer5}>GO</button><br />


                    דני עמוס<br />
                    פרטים<input id='6' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnPlayer6}>GO</button><br />


                    וואן דר קמפ<br />
                    פרטים<input id='7' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnPlayer7}>GO</button><br />


                    עידו ווייר<br />
                    פרטים<input id='8' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnPlayer8}>GO</button><br />


                    זלאטן סחוביץ<br />
                    פרטים<input id='9' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnPlayer9}>GO</button><br />


                    יובל שדה<br />
                    פרטים<input id='10' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnPlayer10}>GO</button><br />


                    רועי קורין<br />
                    פרטים<input id='11' type="text" name='Ppic' value={this.state.Ppic} onChange={this.chg} />
                    תמונה<input type="text" name='Pname' value={this.state.Pname} onChange={this.chg} />
                    שם<input type="text" name='Pdata' value={this.state.Pdata} onChange={this.chg} />
                    <button onClick={this.btnPlayer11}>GO</button><br />


                    
                </div>







            </div>
        );
    }
}

export default withRouter(CCAdmain);



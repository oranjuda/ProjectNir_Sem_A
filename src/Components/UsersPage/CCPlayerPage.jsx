import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';

class CCPlayerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PPic: 'https://besttv232-ynet-images1-prod.cdn.it.best-tv.com/picserver5/crop_images/2020/09/14/B1l5dQaEv/B1l5dQaEv_0_0_2672_2098_0_x-large.jpg',
            Pname: '',
            PData: '',
            players: [
                {
                    pic: 'https://www.ksn.co.il/wp-content/uploads/2016/07/eyal_segal.jpeg',
                    name: 'אייל סגל',
                    data: 'בעלים של מכבי נתניה'
                },

                {
                    pic: 'https://www.sport5.co.il/Sip_Storage/FILES/7/size475x318/1028107.jpg',
                    name: 'ריימונד אטפלד',
                    data: 'מאמן מכבי נתניה'
                },

                {
                    pic: 'https://www.football.org.il/ImageServer/GetImage.ashx?type=2&id=399332&width=240&height=305',
                    name: ' אלמוג כהן',
                    data: 'מס 8 קפטן מכבי נתניה'
                },

                {
                    pic: 'https://isport.co.il/uploads/1580641578_hen-ezra-sign-20200202.jpg',
                    name: 'חן עזרה',
                    data: 'מס 23 קשר שמאל התקפי'
                },

                {
                    pic: 'http://isport.co.il/uploads/1532509682_gabi-kanikovski-sign.jpg',
                    name: 'גבי קניקובסקי',
                    data: 'מס 27 קשר הקבוצה'
                },

                {
                    pic: 'https://img.playbuzz.com/image/upload/ar_1.3333333333333333,c_crop/q_auto:good,f_auto,fl_lossy,w_640,c_limit,dpr_2.5/v1595836731/mqxo8ysgub3iqoodmyol.png',
                    name: 'קווין פרייטר',
                    data: 'מס 11 חלוץ הקבוצה מגמייקה'
                },
                
                {
                    pic: 'https://img.mako.co.il/2019/06/13/sportFive_940091_C.jpg',
                    name: 'דני עמוס',
                    data: 'מס 1 שוער הקבוצה'
                },

                {
                    pic: 'https://www.sport5.co.il/Sip_Storage/FILES/2/size475x318/1050722.jpg',
                    name: 'וואן דר קמפ',
                    data: 'מס 3 בלם הקבוצה מהולנד'
                },

                {
                    pic: 'https://www.football.org.il/ImageServer/GetImage.ashx?type=2&id=404485&width=240&height=305',
                    name: 'עידו ווייר',
                    data: 'מס 4 מגן ימין של הקבוצה'
                },

                {
                    pic: 'https://isport.co.il/uploads/1579445528_zlatan-sahovic-sign.jpg',
                    name: 'זלאטן סחוביץ',
                    data: 'מס 6 מגן שמאל של הקבוצה מסרביה'
                },

                {
                    pic: 'https://netanya.mynet.co.il/picserver/mynet/crop_images/2020/08/26/BkTxvEXQD/BkTxvEXQD_0_0_1079_931_large.jpg',
                    name: 'יובל שדה',
                    data: 'מס 12 קשר אחרי של הקבוצה'
                },

                {
                    pic: 'https://www.ynet.co.il/PicServer5/2019/08/26/9445145/944512315991294980825no.jpg',
                    name: 'רועי קורין',
                    data: 'מס 22 קשר התקפי של הקבוצה'
                }

            ]

        }

    }
    componentDidMount() {

        if (localStorage.getItem('Players')) {
            let ArrCheck = JSON.parse(localStorage.getItem('Players'))
            this.setState((prev) => ({
                players:ArrCheck
                
            }), () => {
                console.log(this.state.players)
            });

        }
        else {
           
            localStorage.setItem('Players', JSON.stringify(this.state.players))

        }
    }



    RPush = (e) => {

        switch (e.target.name){
            case '0': this.setState((prev) => ({
                PPic:this.state.players[0].pic,
                Pname:this.state.players[0].name,
                PData:this.state.players[0].data

            }));break;
            case '1': this.setState((prev) => ({
                PPic:this.state.players[1].pic,
                Pname:this.state.players[1].name,
                PData:this.state.players[1].data

            }));break;
            case '2': this.setState((prev) => ({
                PPic:this.state.players[2].pic,
                Pname:this.state.players[2].name,
                PData:this.state.players[2].data

            }));break;
            case '3': this.setState((prev) => ({
                PPic:this.state.players[3].pic,
                Pname:this.state.players[3].name,
                PData:this.state.players[3].data

            }));break;
            case '4': this.setState((prev) => ({
                PPic:this.state.players[4].pic,
                Pname:this.state.players[4].name,
                PData:this.state.players[4].data

            }));break;
            case '5': this.setState((prev) => ({
                PPic:this.state.players[5].pic,
                Pname:this.state.players[5].name,
                PData:this.state.players[5].data

            }));break;
            case '6': this.setState((prev) => ({
                PPic:this.state.players[6].pic,
                Pname:this.state.players[6].name,
                PData:this.state.players[6].data

            }));break;
            case '7': this.setState((prev) => ({
                PPic:this.state.players[7].pic,
                Pname:this.state.players[7].name,
                PData:this.state.players[7].data

            }));break;
            case '8': this.setState((prev) => ({
                PPic:this.state.players[8].pic,
                Pname:this.state.players[8].name,
                PData:this.state.players[8].data

            }));break;
            case '9': this.setState((prev) => ({
                PPic:this.state.players[9].pic,
                Pname:this.state.players[9].name,
                PData:this.state.players[9].data

            }));break;
            case '10': this.setState((prev) => ({
                PPic:this.state.players[10].pic,
                Pname:this.state.players[10].name,
                PData:this.state.players[10].data

            }));break;
            case '11': this.setState((prev) => ({
                PPic:this.state.players[11].pic,
                Pname:this.state.players[11].name,
                PData:this.state.players[11].data

            }));break;

            default:;
        }

      
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
                    <h1>סגל הקבוצה</h1>
                </div>

                <div className="Div-center" style={{ display: 'flex', flexDirection: 'row' }}>


                    <div style={{ height: '600px', width: '1000px', margin: '30px', padding: '5px' }}>
                        <h2>{this.state.Pname}</h2>
                        <img src={this.state.PPic} alt="blanc" height='300px' width='500px' />
                        
                        <p>

                            {this.state.PData}

                        </p>






                    </div>


                    <div style={{ height: '600px', width: '400px', margin: '30px', padding: '5px' }}>

                        :בעלי הקבוצה <br />
                        <input type="radio" value="" name="0" onClick={this.RPush} />{this.state.players[0].name} <br /><br />
                         :מאמן <br />
                        <input type="radio" value="" name="1" onClick={this.RPush} /> {this.state.players[1].name}<br /><br />
                         :שחקנים <br />
                        <input type="radio" value="" name="2" onClick={this.RPush} /> {this.state.players[2].name}<br />
                        <input type="radio" value="" name="3" onClick={this.RPush} /> {this.state.players[3].name} <br />
                        <input type="radio" value="" name="4" onClick={this.RPush} /> {this.state.players[4].name}<br />
                        <input type="radio" value="" name="5" onClick={this.RPush} /> {this.state.players[5].name}<br />
                        <input type="radio" value="" name="6" onClick={this.RPush} /> {this.state.players[6].name} <br />
                        <input type="radio" value="" name="7" onClick={this.RPush} /> {this.state.players[7].name}<br />
                        <input type="radio" value="" name="8" onClick={this.RPush} /> {this.state.players[8].name}<br />
                        <input type="radio" value="" name="9" onClick={this.RPush} /> {this.state.players[9].name}<br />
                        <input type="radio" value="" name="10" onClick={this.RPush} />{this.state.players[10].name}<br />
                        <input type="radio" value="" name="11" onClick={this.RPush} />{this.state.players[11].name}<br />




                    </div>



                </div>

                <div style={{ height: '100px' }}></div>

            </div>
        );
    }
}

export default withRouter(CCPlayerPage);
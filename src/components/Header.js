import React from 'react';
import data from './data.json';
import './Header.css';
// import arrow from './backgrounds/arrow.svg'


var background = data.pages.map(value => require(`./backgrounds/${value.blocks[0].background}`));



class Header extends React.Component{
    constructor(){
        super();
        this.state = {
            index : 0
        }}
    render(){    
    return (

<div style={{
                backgroundImage: `url(${background[this.state.index].default})`
            }} className="header">               
             <div className="menu">
                    <div className="contactbox">

                        <img id="logo" src="./abc.png" alt="logo"/>

                        <div className="contact">
                          Contact Us
                        </div>
                    </div>
                    <div className="menu_bar">
                    <div onClick={() => this.setState({index: 0})}>
                      Industries
                    </div>
                    <div onClick={() => this.setState({index: 1})}>
                      Services
                    </div>
                    <div onClick={() => this.setState({index: 2})}>
                      About Us
                    </div>
                    </div>
                </div>


                <div className="headings">
                    <div className="headline">
                       {
                       
                       data.pages[this.state.index].blocks[0].headline   }

                    </div>
                    <div className="subhead">
                        {data.pages[this.state.index].blocks[0].subhead}
                    </div>
                </div>
    <div className="cta_white_box">
        <div className="cta_text">
            {data.pages[this.state.index].blocks[0].cta}
        </div>

        <div className="talk_button">

            <div className="talk_text">

                LET'S TALK.
                </div>
                <img src="./arrow.svg" alt="arrow"/>

        </div>
    </div> 









                {/* <Bottom index={this.state.index} /> */}
            </div>

           

    //  </div>


    

)
}}
export default Header;
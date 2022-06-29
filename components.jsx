import React from './react'
import ReactDOM from './react-dom'

class Home extends React.component{
    constructor(props){
        super(props);
        this.state = {};
    }

    

    render(){
        return(
            <div className="title" id="titleHTML">
                <h1 className="title">Food Days Game</h1>
                {/*<p class="title">By [MY IRL NAME]</p>-->*/}
                <button className="title" id="startBtn" onClick="startGame()">Start</button>
            </div>
        );
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    Landing: Home,

};
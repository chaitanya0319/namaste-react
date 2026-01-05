import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
    }
    render(){
        return (
            <div>
                 <h1>About class components</h1>
                 <h2>This is React components </h2>
                 <User name={"Chaitanya Goud"}/>
                 <UserClass />
    
            </div>
           
        )
    }
}

export default About;
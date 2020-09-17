import React, { Component } from "react";
import API from "../utils/API";


class GetAuthorizationCode extends Component {
    state = {
        code: ""
    };

    componentDidMount(){
        this.returnAuthCode();
    };

    returnAuthCode = ()=>{
        API.getAuthorizationCode()
        .then(res => this.setState({code : res}))
        .catch(err => console.log(err));
    };

    render(){
        return (
            <div>
                {this.state.code};
            </div>)
    }
}
export default GetAuthorizationCode;
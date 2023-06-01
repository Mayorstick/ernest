import { Component } from "react";

class Tenary extends Component{
    
    render(){

        const{age}=this.props
        const style={
            color:'white',
            backgroundColor:"black"
        }
        return(
            <h1 style={style}>{age}</h1>
        )
    }
}

export default Tenary;
import React from "react";

class UserClass extends React.Component{
       constructor(props){
          super(props);
         
          console.log("Constructor")

          this.state ={
            userData : { name:"raj" , location:"us"}
          }
       } 

      async componentDidMount(){

         console.log("child did mount");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log(json);
        this.setState({
         userData : json
         
        })
       }

   componentDidUpdate(){
    console.log("componentd did update");
   }

   componentWillUnmount(){
    console.log("component wil un mount")
   }
      
      render(){
           console.log("child render");
         
        const {name , location, avatar_url} = this.state.userData
        return(
            <div className="user-card">
           <img src={avatar_url}/>  
           <h2> Name : {name}</h2> 
           <h3> Location : {location}</h3>
           <h4>contact : addb@gmail.com</h4>
        </div> 
        );
      }
}

export default UserClass;
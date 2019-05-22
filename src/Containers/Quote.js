import React, { Component } from 'react';
import classes from './Quote.module.css';
import axios from 'axios';


class Quote extends Component{
    state={
        quotes:[]
            ,
        loading:true,
        currentId:0,
        currentQuote:"",
        visible:false,
        prevQuote:null

      }
    
      componentDidMount(){
        axios.get('https://raw.githubusercontent.com/lukePeavey/quota/master/data/quotes.json')
        .then(response=>{
          let arr=[];
          for(let prop in response.data){
            arr.push(response.data[prop])   
          }
          this.setState({
            quotes:arr,
            loading:false
          })
        })
        .catch(error=>console.log(error))

      setTimeout(this.showNextHandler, 100);
      
  //  if(!this.state.visible){
    setInterval(this.showNextHandler, 3000)
  //  }


    // setInterval(this.showNextHandler, 4000)
      
  }

  

showNextHandler=()=>{

let currentId=this.state.currentId;

let quote=[...this.state.quotes];

// let visible=this.state.visible;

let currentQuote=null
// if(!visible){
    currentId+=1
currentQuote=quote[currentId].quoteText
// }


//  console.log(this.state.visible)
//  let prevQuote=quote[currentId-1].quoteText

return this.setState({
    currentId:currentId,
    currentQuote:currentQuote,
    // visible:!visible,
    // prevQuote:prevQuote
})

}
    
      render(){
        
          
        let quoteStyle=null;
        if(this.state.visible){
          console.log("visible")
            // quoteStyle=classes.fadeOut
        }
        else{
            // quoteStyle=classes.fadeIn
            console.log("Not visible")
        }

return (
    <div className={classes.Quote}>
       
       
       <p className={quoteStyle}>{this.state.currentQuote}</p>
        
       
        <button className={classes.nButton} onClick={this.showNextHandler}>Next</button> 

        <button className={classes.pButton} onClick={this.showNextHandler}>Previous</button>


    </div>
)
      }
    
}

export default Quote;
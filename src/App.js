import React, { Component } from 'react';
import LCC from 'lightning-container';

import './App.css';

class App extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            exampleMessageValue: "Hello from React!"
        }
    }
    
    componentDidMount(){
        LCC.addMessageHandler(this.messageRecievedHandler);
        LCC.callApex("SalesforceNews.GetNewsFeed",
            this.handleGetNewsFeed,
            {escape: true});
    }
    handleGetNewsFeed(result, event) {
        if (event.status) {
        //   this.setState({account: result});
            console.log(result.replace(/(<([^>]+)>)/gi, ""))
            // console.log(JSON.parse(result));

        }
        else if (event.type === "exception") {
          console.log(event.message + " : " + event.where);
        }
      }
    messageRecievedHandler(msg){
        const { name, value } = msg;
        
        console.log("Messaged received.");
        console.log(`Message name: ${name}`);
        console.log(`Message value: ${value}`);
        
        // Add Any Logic that should be handled here.
        
        switch (name) {
            case "example":
                console.log('Handle Example Messgage')
                break;
            default:
                console.log('Do Nothing');
        }
    }
    
    sendMessage(msg){
        // Message format should be an object like { name: "messageName", value: "message value"}
        LCC.sendMessage(msg);
    }
    
    sendMessageExample(){
        // You can wrap the send message function to easily send specific message types.
        
        this.sendMessage(
            {
                name: "example",
                value: this.state.exampleMessageValue
            }
        );
    }
    
    render(){
        return (
            <div>
                <p>A React Component!</p>
            </div>
        );
    }
}

export default App;

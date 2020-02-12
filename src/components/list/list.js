import React,{ Component } from 'react';
import Forms from '../forms/form';
export default class List extends React.Component {
    constructor(props){
        super(props)
        state={
            list:this.returnList()    
        }
    }

    returnList = () => {
        if(localStorage.getItem('listEvents')===null)
            localStorage.setItem('listEvents',JSON.stringfy([]))
            return JSON.parse(localStorage.getItem('listEvents')) 
    }
    
    onAddorEdit = (data) =>{
        var list = this.returnList()
        list.push(data)
        localStorage.setItem('listEvents',JSON.stringfy(list))
        this.setState({list:list}) 
    }

    render(){
        return(
            <div>
            <Forms /> 
            </div>
        )
    }
}


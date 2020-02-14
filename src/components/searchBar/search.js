import React,{Component} from 'react';
import {filterUser}  from '../../Redux/actions/UserAction';
import {Input, Grid } from '@material-ui/core';
import { connect } from 'react-redux';

class Search extends Component{
    constructor(props){
        super(props)
        
    }
    
    // componentDiUpdate(){
    //     const clonedUserList = this.props.clonedUserList
    // }
    render(){
        console.log(this.props)
        const filterSearch = value => (
            this.props.dispatch(filterUser(value))
        )

        return(
            <Grid>
                <Input onChange={(e)=> filterSearch(e.target.value)}></Input>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    userList: state.User.list,

})
export default connect(mapStateToProps,null)(Search)

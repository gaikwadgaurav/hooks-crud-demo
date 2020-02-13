import React, {Component,useState,useEffect} from 'react';
import { withStyles } from "@material-ui/styles";
import {Input, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import {addUser, fetchUser, fetchUsers, saveUpdatedUser, deleteUser} from '../../Redux/actions/UserAction';
import Styles from './styles';
import Search from '../../components/searchBar/search';

class Forms extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstName:'',
            lastName:'',
            email:'',
            edit:false,
        }
    }

    componentDidMount(){
        this.props.dispatch(fetchUsers())
    }
    componentDidUpdate() {
        if(this.state.edit){
        const selectedUser = this.props.selectedUser;
            this.setState({
                firstName: selectedUser.firstName,
                lastName: selectedUser.lastName,
                email: selectedUser.email,
                edit:false
            })
        }
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const { selectedUser } = this.props;
        if (selectedUser.id) {
            this.props.dispatch(saveUpdatedUser(this.state))
        } else {
           this.props.dispatch(addUser(this.state))
        }
        this.setState({ firstName:'',
            lastName:'',
            email:'',
            edit:false
            })
    }

    handleDeleteUser = (index) => {
        this.props.dispatch(deleteUser(index))
    }

    handleSelectedUser = (index) =>{
        this.props.dispatch(fetchUser(index))
        this.setState({edit:true})
    }
    render(){
        const { userList, selectedUser } = this.props;
        const { classes } = this.props;
            return(
                <>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <form noValidate autoComplete="off">
                            <Input type="text" value={this.state.firstName ||""} name="firstName" onChange={(e) => this.handleChange(e)} placeholder="firstName"  />
                            <Input type="text" value={this.state.lastName ||""} name="lastName" onChange={(e) => this.handleChange(e)} placeholder="lastName" />
                            <Input type="email" value={this.state.email ||""} name="email" onChange={(e) => this.handleChange(e)} placeholder="email"  />
                            <Button variant="contained" onClick={(e) => this.handleSubmit(e)} color="primary">{selectedUser.id ? "Update" : "Submit"}</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">ID</TableCell>
                                            <TableCell align="center">FirstName</TableCell>
                                            <TableCell align="center">LastName</TableCell>
                                            <TableCell align="center">Email</TableCell>
                                            <TableCell align="center">Actions</TableCell>
                                        </TableRow> 
                                    </TableHead>
                                    <TableBody>
                                        {userList && userList.map((user, index)  => {
                                        return (<TableRow  key={user.id}>
                                            <TableCell align="center">{user.id}</TableCell>
                                            <TableCell align="center">{user.firstName}</TableCell>
                                            <TableCell align="center">{user.lastName}</TableCell>
                                            <TableCell align="center">{user.email}</TableCell>
                                            <TableCell align="center">
                                            <Button variant="contained" onClick={() => this.handleSelectedUser(index)} color="primary">Edit</Button>
                                            <Button variant="contained" onClick={() => this.handleDeleteUser(index)} color="primary">Delete</Button>
                                            </TableCell>
                                        </TableRow>)  
                                        })}  
                                    </TableBody>
                                </Table>    
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Search {...this.props} />
                    </>
        );
    } 
}

const mapStateToProps = state => ({
    userList: state.User.list,
    selectedUser: state.User.selectedUser,
})

export default connect(mapStateToProps,null)(Forms)

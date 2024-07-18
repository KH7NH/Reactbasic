import React from "react";
import { withRouter } from 'react-router'
import Color from "../HOC/Color";
import logo from '../../assets/image/hinh-nen-ronaldo-19.jpg'
import { connect } from 'react-redux'

class Home extends React.Component {

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user)
    }
    handleCreateUser = () => {
        this.props.addUserRedux()
    }
    render() {
        let listUsers = this.props.dataRedux

        return (
            <>
                <div>Hello HomePage</div>
                <img src={logo} style={{ width: '500px', height: '300px' }} />
                <div>
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    <span onClick={() => this.handleDeleteUser(item)}>x</span>

                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>

        )
    }
}
const mapStoreToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Color(Home))
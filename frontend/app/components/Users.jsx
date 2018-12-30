import React, {Component} from 'react';
import axios from 'axios';
import services from "./../services";
import Loader from './Loader';

class Users extends Component {
    state = {
        users: [{
            name: 'Dima'
        }],
    };

    componentDidMount() {
        return services.getUsers()
            .then(res => {
                this.setState({users: res})
            })
    }

    render() {
        const {users} = this.state;
        return (
            <table className={"table_user"}>
                <caption>Users</caption>
                <tr className={'tr_user'}>
                    <th className={'th_user'}>name</th>
                    <th className={'th_user'}>role</th>
                    <th className={'th_user'}>job</th>
                    <th className={'th_user'}>age</th>
                </tr>

                {users.map((user, key) => {
                    const {name, role, job, age} = user;
                    return (
                        <tr key={key} className="tr_user">
                            <td className={"td_user"}>{name}</td>
                            <td className={"td_user"}>{role}</td>
                            <td className={"td_user"}>{job}</td>
                            <td className={"td_user"}>{age}</td>
                        </tr>
                    )
                })}
            </table>
        );

        return (
            <div>
                {users.map((user, key) => {
                    const {name, role, job, age} = user;
                    return (
                        <div key={key} className="user_card">
                            <div>name: {name}</div>
                            <div>role: {role}</div>
                            <div>job: {job}</div>
                            <div>age: {age}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Users;


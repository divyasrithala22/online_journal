import React from 'react';
import { db } from './firebase';
import Nav from './nav';

export default class Journal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        users: []
      };
    }

    componentDidMount() {
        db.collection("users")
          .get()
          .then(querySnapshot => {
            const data = querySnapshot.docs.map(doc => doc.data());
            console.log(data);
            this.setState({ users: data });
          });
      }

      render() {
    const { users } = this.state;
    return (
      <div className="row" style={{display:"block"}}>
        <Nav/>
        {users.map(user => (
          <div key={user.uid} className="col-lg-6 col-md-6 col-s-12 mb-4" style={{margin:"auto"}}>
            <div className="card h-100">
              <div className="card">
                <div className="card-body">
                  <h5>{user.email}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
import React, { Component } from 'react';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

class AppComponent extends Component {
  componentDidMount() {
    // this.checkDocumentExistance()
  }

  /* sample firebase (firestore database) usage */
  checkDocumentExistance() {
    let firebase = this.props.firebase
    let db = firebase.fs
    var docRef = db.collection("my_collection").doc("some_document_id");
    docRef.get().then(function (doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        console.log("No such document!");
      }
    }).catch(function (error) {
      console.log("Error getting document:", error);
    });
  }

  render() {
    return (
      <div>
        <header>
          <p>
            It works!
          </p>
        </header>
      </div>
    );
  }
}

const App = compose(
  withFirebase
)(AppComponent);

export default App;

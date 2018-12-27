import app from 'firebase/app';
import config from './config.js';
import 'firebase/auth';
import 'firebase/firestore';

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.fs = app.firestore();
    const settings = { timestampsInSnapshots: true };
    this.fs.settings(settings);
  }
}

export default Firebase;

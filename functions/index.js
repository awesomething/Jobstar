const functions = require('firebase-functions');
const app = require('express')();
//const auth = require('./utils/auth');


const { getAllJobPostings, postOneJob } = require('./APIs/getAllJobPostings.js')
// Todos
const cors = require('cors');
app.use(cors());
app.get('/jobPostings', getAllJobPostings);
app.post('/jobPosting', postOneJob);


exports.pairApp = functions.https.onRequest(app);
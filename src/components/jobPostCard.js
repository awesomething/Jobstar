
import Card from './Card';

import axios from 'axios';
import { Component } from 'react';


class jobPostCard extends Component {
    state = {
        card: []
    };
componentDidMount(){
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    axios.get('https://us-central1-hobby-dutch.cloudfunctions.net/pairApp/jobPostings', { crossdomain: true })
.then(res=>{
   console.log(res.data);
    this.setState({ card: res.data })
   })
}
render(){
return(
     <>
        <div className="flex container" style={{flexDirection:'row',display:'flex'}} >
            <div className="col-md-5 pad">
        {this.state.card.map(card => (
            //src="http://uniqueoffice.systems/wp-content/uploads/2019/08/logo-placeholder.jpg"
            <Card key={card.jobPostId} title={card.jobTitle} description={card.jobDescription} tag1={card.tags[0]}
                tag2={card.tags[1]} tag3={card.tags[2]} CompanyName={card.companyName} location={card.jobLocation}
                src="http://uniqueoffice.systems/wp-content/uploads/2019/08/logo-placeholder.jpg">
               
             </Card>
            
        ))}
    </div>
    </div>
    </>
)
}

}
export default jobPostCard;

import React , {Component} from 'react';
import { Dropdown , Header , Grid , Button } from 'semantic-ui-react';
import Date from './date';
import Slots from './slots';
import Guests from './guests';

var stateOptions = [ { key: 'De', value: 'de', text: 'Delhi' },
                     { key: 'Ba', value: 'ba', text: 'Bangalore'},
                     { key: 'Mu', value: 'mu', text: 'Mumbai' },
                     { key: 'Ko', value: 'ko', text: 'Kolkata' },
                     { key: 'Ch', value: 'ch', text: 'Chennai' },
                     { key: 'Hy', value: 'hy', text: 'Hydrabad' },
                     { key: 'Pu', value: 'pu', text: 'Pune' },
                     { key: 'Gu', value: 'gur', text: 'Gurgaon' }]

export default class app extends Component{
  constructor(props){
    super(props);
    this.state={state:"" , date:"",slots:""}
  }
  getDate(q){
    console.log("GetDate")
    this.setState({date:q})
    console.log(this.state.date + "from app")
  }
  render(){
    var getDate = this.getDate;
    return(
      <div>
        <Header as="h1" textAlign="center" style={{marginTop:"3%"}}>
          <Header.Content>Flexible check-in. Fair Pricing.</Header.Content>
        </Header>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column style={{marginTop:"2%",marginleft:80 }}>
              <Dropdown placeholder='State' search selection options={stateOptions} />
            </Grid.Column>
            <Grid.Column style={{marginTop:"2%"}}>
              <Date getDate={this.getDate.bind(this)}/>
            </Grid.Column>
            {/* <Grid.Column style={{marginTop:"2%"}}>
              <Slots />
            </Grid.Column> */}
            <Grid.Column style={{marginTop:"2%"}}>
              <Guests />
            </Grid.Column>
            <Grid.Column  style={{marginTop:"2%"}}>
              <Button color='olive'  style={{marginLeft:110}}>Search</Button>
            </Grid.Column>
          </Grid.Row>
      </Grid>
      </div>
    )
  }
}

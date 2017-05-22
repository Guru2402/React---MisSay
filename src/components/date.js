import React , {Component} from 'react';
import { DateField, Calendar } from 'react-date-picker';
import { Input , Popup , Header ,Grid} from 'semantic-ui-react';
import Slots from './slots';

export default class Date extends Component{
  constructor(props){
    super(props);
    this.state={
      date:""
    }
    this.onChange=this.onChange.bind(this);
  }
  onChange(dateString, { dateMoment, timestamp }){
     this.setState({date:dateString})
     console.log(this.props);
 }
 handleChange(q){
   this.setState({date:q.value})
   console.log("hi");
 }
 getDate(){
   return this.state.date
 }
  render(){
    return(
      <Grid columns = {3}>
        <Grid.Row>
          <Grid.Column>
            <div className="ui input">
              <Popup trigger={<Input placeholder="Enter the date" style={{marginleft:0}} value={this.state.date} onChange={
                (data)=>{ return this.handleChange(data)} } />} flowing hoverable>
                  <Calendar
                    dateFormat="DD-MM-YYYY"
                    date={this.state.date}
                    onChange={this.onChange}
                  />
              </Popup>
            </div>
          </Grid.Column>
          <Grid.Column>
            <Slots getDate={this.state.date}/>
          </Grid.Column>
     </Grid.Row>
     </Grid>
    )
  }
}

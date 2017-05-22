import React , {Component} from 'react';
import {Input , Popup , Grid , Icon ,Dimmer , Header , Button} from 'semantic-ui-react';
import _ from 'lodash';

export default class Slots extends Component{
  constructor(props){
    super(props);
    this.state={ activeId:[] , time:[]}

  }
  onIconClick(e){
    if(this.state.activeId.length==0){
      this.setState({activeId:[...this.state.activeId, e]});
    }else{
      if(this.state.activeId.includes(e)){
        const arr = this.state.activeId.filter(item => item !== e)
        this.setState({activeId:arr});
        console.log(arr);
      }else{
        this.setState({activeId:[...this.state.activeId, e]});
      }
    }
    return null;
  }
  render(){
    console.log(this.props.getDate)
    const sltd = this.state.activeId;
    console.log(this.state.time);
    return(
      <Popup trigger={<Input placeholder="From Time" value={this.state.time} style={{marginLeft:140}}/>}
      on='click'
      hideOnScroll>
        <Grid columns='five' divided>
          <Grid.Row>
            <Grid.Column width={6}>
              <div>May</div>
              <span>{this.props.getDate}</span>
            </Grid.Column>
            <Grid.Column>
              <div>On</div>
            </Grid.Column>
            <Grid.Column>
              Next-day
            </Grid.Column>
            <Grid.Column>
            Next-day
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <div>Morning</div>
              <p>8-7 AM</p>
            </Grid.Column>
            <Grid.Column id={1} onChange={this.onTime} style={sltd.includes(1) ? {background:"rgba(0,0,0,0.7)"} : {background:"transparent"} } onClick={
              ()=>{
                if(this.state.time.includes("Morning 1")){
                const upTime = this.state.time.filter(time => time !== "Morning 1")
                this.setState({time:upTime})
                console.log(upTime)
                }else{
                this.setState({time:[...this.state.time , "Morning 1"] })
                }
                  return this.onIconClick(1)}}>
              <div><Icon name="sun" textAlign="center" style={{marginTop:7}} size="large" /></div>
            </Grid.Column>
            <Grid.Column id={2} onChange={this.onTime} style={sltd.includes(2) ? {background:"rgba(0,0,0,0.7)"} : {background:"transparent"} } onClick={
              ()=>{
                  if(this.state.time.includes("Morning 2")){
                    const upTime = this.state.time.filter(time => time !== "Morning 2")
                    this.setState({time:upTime})
                    console.log(upTime)
                  }else{
                    this.setState({time:[...this.state.time , "Morning 2"] })
                  }
                  return this.onIconClick(2)}}>
              <div ><Icon name="sun" textAlign="center" style={{marginTop:7}} size="large"/></div>
            </Grid.Column>
            <Grid.Column id={3} onChange={this.onTime} style={sltd.includes(3) ? {background:"rgba(0,0,0,0.7)"} : {background:"transparent"} } onClick={
              ()=>{  if(this.state.time.includes("Morning 3")){
                  const upTime = this.state.time.filter(time => time !== "Morning 3")
                  this.setState({time:upTime})
                  console.log(upTime)
                  }else{
                  this.setState({time:[...this.state.time , "Morning 3"] })
                  }
                  return this.onIconClick(3)}}>
              <div><Icon name="sun" textAlign="center" style={{marginTop:7}} size="large"/></div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <div>Day</div>
              <p>12-6 PM</p>
            </Grid.Column>
            <Grid.Column id={4} onChange={this.onTime} style={sltd.includes(4) ? {background:"rgba(0,0,0,0.7)"} : {background:"transparent"} } onClick={
              ()=>{  if(this.state.time.includes("Day 1")){
                  const upTime = this.state.time.filter(time => time !== "Day 1")
                  this.setState({time:upTime})
                  console.log(upTime)
                  }else{
                    this.setState({time:[...this.state.time , "Day 1"] })
                  }
                   return this.onIconClick(4)}}>
              <div><Icon name="sun" textAlign="center" style={{marginTop:7}} size="large"/></div>
            </Grid.Column>
            <Grid.Column id={5} onChange={this.onTime} style={sltd.includes(5) ? {background:"rgba(0,0,0,0.7)"} : {background:"transparent"} } onClick={
              ()=>{  if(this.state.time.includes("Day 2")){
                  const upTime = this.state.time.filter(time => time !== "Day 2")
                  this.setState({time:upTime})
                  console.log(upTime)
                  }else{
                  this.setState({time:[...this.state.time , "Day 2"] })
                  }
                  return this.onIconClick(5)}}>
              <div><Icon name="sun" textAlign="center" style={{marginTop:7}} size="large"/></div>
            </Grid.Column>
            <Grid.Column id={6} onChange={this.onTime} style={sltd.includes(6) ? {background:"rgba(0,0,0,0.7)"} : {background:"transparent"} } onClick={
              ()=>{  if(this.state.time.includes("Day 3")){
                  const upTime = this.state.time.filter(time => time !== "Day 3")
                  this.setState({time:upTime})
                  console.log(upTime)
                  }else{
                  this.setState({time:[...this.state.time , "Day 3"] })
                   }
                    return this.onIconClick(6)}}>
              <div><Icon name="sun" textAlign="center" style={{marginTop:7}} size="large"/></div>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={6}>
              <div >Night</div>
              <p>8-12 PM</p>
            </Grid.Column>
            <Grid.Column id={7} onChange={this.onTime} style={sltd.includes(7) ? {background:"rgba(0,0,0,0.7)"} : {background:"transparent"} } onClick={
              ()=>{  if(this.state.time.includes("Night 1")){
                  const upTime = this.state.time.filter(time => time !== "Night 1")
                  this.setState({time:upTime})
                  console.log(upTime)
                  }else{
                  this.setState({time:[...this.state.time , "Night 1"] })
                  }
                  return this.onIconClick(7)}}>
              <div><Icon name="moon" textAlign="center" style={{marginTop:7}} size="large"/></div>
            </Grid.Column>
            <Grid.Column id={8} onChange={this.onTime} style={sltd.includes(8) ? {background:"rgba(0,0,0,0.7)"} : {background:"transparent"} } onClick={
              ()=>{  if(this.state.time.includes("Night 2")){
                  const upTime = this.state.time.filter(time => time !== "Night 2")
                  this.setState({time:upTime})
                  console.log(upTime)
                  }else{
                  this.setState({time:[...this.state.time , "Night 2"] })
                  }
                  return this.onIconClick(8)}}>
              <div><Icon name="moon" textAlign="center" style={{marginTop:7}} size="large"/></div>
            </Grid.Column>
            <Grid.Column id={9} onChange={this.onTime} style={sltd.includes(9) ? {background:"rgba(0,0,0,0.7)"} : {background:"transparent"} } onClick={
              ()=>{  if(this.state.time.includes("Night 3")){
                  const upTime = this.state.time.filter(time => time !== "Night 3")
                  this.setState({time:upTime})
                  console.log(upTime)
                  }else{
                  this.setState({time:[...this.state.time , "Night 3"] })
                  }
                  return this.onIconClick(9)}}>
              <div><Icon name="moon" textAlign="center" style={{marginTop:7}} size="large"/></div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Popup>
    )
  }
}

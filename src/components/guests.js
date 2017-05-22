import React , {Component} from 'react';
import {Input , Grid , Popup , Icon , Button , Segment} from 'semantic-ui-react'

var stateOptions = [{ key: 'De', value: 'de', text: 'Delhi' },
                     { key: 'Ba', value: 'ba', text: 'Bangalore'},
                     { key: 'Mu', value: 'mu', text: 'Mumbai' } ]

export default class Guest extends Component{
  constructor(props){
    super(props);
    this.state={
      rooms:1,guests:1
    }
    this.onChangeRoom=this.onChangeRoom.bind(this);
    this.onChangeGuest=this.onChangeGuest.bind(this);
  }
  onChangeRoom(e){
    console.log(e.value)
    this.setState({rooms:e.value});
  }
  onChangeGuest(e){
      this.setState({guests:e.value});
  }
  render(){
    return(
      <div className="ui input">
        <Popup trigger={<Input placeholder='Guests' value={`${this.state.rooms}Rooms/${this.state.guests}Guests`}  style={{marginLeft:170}}/>}
        on='click'
        hideOnScroll>
          <Grid columns={1}>
              <Grid.Row>
                <Grid.Column width={1}>
                    <Icon name="hotel" size="large" style={{marginTop:7}}/>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Input style={{width:'130%'}} onChange={this.onChangeRoom} value={this.state.rooms}/>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Button.Group >
                      <Button icon='plus' positive onClick={
                        ()=>{
                        if(this.state.rooms <= this.state.guests ){
                          this.setState({rooms:this.state.rooms+1})
                        }
                        else if(this.state.rooms > this.state.guests){
                          this.setState({guests:this.state.guests+1})
                        }}}></Button>
                      <Button icon='minus' onClick={
                        ()=>{

                        if(this.state.rooms > 1 && this.state.rooms <= this.state.guests){
                          var guestLimit = 2*this.state.rooms;
                            if(this.state.guests > guestLimit){
                              this.setState({guests:this.state.guests-1})
                            }
                            else{
                                this.setState({rooms:this.state.rooms-1})
                              }
                            }
                          }
                           }/>
                    </Button.Group>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={1}>
                    <Icon name="user" size="large" style={{marginTop:7}}/>
                  </Grid.Column>
                  <Grid.Column width={8}>
                    <Input style={{width:'130%'}} onchange={this.onChangeGuest} value={this.state.guests}/>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <Button.Group >
                      <Button icon='plus' positive onClick={
                        ()=>{
                          var roomLimit = 2*this.state.rooms;
                          if(this.state.guests <= roomLimit)
                          {this.setState({guests:this.state.guests+1})}
                        else if(this.state.guests > roomLimit){
                          {this.setState({rooms:this.state.rooms+1})}
                        }}}/>
                      <Button icon='minus' onClick={()=>{
                        if(this.state.rooms > 1 && this.state.guests >= this.state.rooms){
                          this.setState({guests:this.state.guests-1})
                        }
                        else if(this.state.rooms>this.state.guests){
                          this.setState({rooms:this.state.rooms - 1})
                        }}}/>
                    </Button.Group>
                </Grid.Column>
              </Grid.Row>
          </Grid>
        </Popup>
      </div>
    )
  }
}

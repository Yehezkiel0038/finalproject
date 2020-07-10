import React, { Component } from 'react'
export class homes extends Component{

constructor(props){
    super(props);
    this.state = {
      name:'',
      income:'',
      skills:[],
      address:''
    }
      this.onChange= this.onChange.bind(this);
      this.onSubmit= this.onSubmit.bind(this);
      this.onPick= this.onPick.bind(this);
      this.onValueChange= this.onValueChange.bind(this);
  }
  onSubmit(event){
    event.preventDefault();
    event.stopPropagation();
    console.log(this.state)
  }
  onChange(event){
    const{ name, value} = event.target;
    this.setState({[name]:value})
  }
  onPick(event){
    let skills =[...this.state.skills];
    let index =skills.findIndex(elemen=> event.target.value === elemen);
    if (index>0){
      skills= [...skills.slice(0,index), ...skills.slice(index + 1, skills.length)]
    }else if(index === 0){
      skills= [...skills.slice(index+1, skills.length)]
    }else{
      skills.push(event.target.value)
    }
    console.log(skills);
    this.setState({skills});
  }
  onValueChange(event) {
    this.setState({
      sex: event.target.value
    });
  }
}
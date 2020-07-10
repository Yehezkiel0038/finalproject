import React, {Component} from 'react'

class Form extends Component{
  
  constructor(props){
        super(props);
        this.state = {
          name:'',
          income:'',
          work:'',
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
    
      render(){
        const{name, income, skills,work, address}=this.state;
    
        return(
          
          <form className="App-header" onSubmit={this.onSubmit}>
            <h1>Form Daftar Kerja</h1>
            <label>
              Nama : 
              <input name="name" type="text" value={name} onChange={this.onChange} />
            </label>
            <br/>
            <label>
              Penghasilan yang diharapkan : 
              <input name="income" type="number" value={income} onChange={this.onChange} />
            </label>
            <br/>
            <label>
              Tanggal Mulai Kerja : 
              <input name="work" type="date" value={work} onChange={this.onChange} />
            </label>
            <br/>
            <label>Jenis Kelamin : </label>
            <div className="radio">
              <label>
                <input
                  type="radio" value="male"
                  checked={this.state.sex === "male"}
                  onChange={this.onValueChange}
                />
                Pria
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio" value= "female"
                  checked={this.state.sex === "female"}
                  onChange={this.onValueChange}
                />
                Wanita
              </label>
            </div>
    
            <br/>
            <label>
              Kemampuan :  
              <select multiple={true} value={skills} onChange={this.onPick}>
                <option value="fullstack">JavaScript</option>
                <option value="frontend">HTML</option>
                <option value="backend">Phyton</option>
                <option value="game">C++</option>
                </select>
            </label>
            <br/>
            <label>
              Alamat:
              <textarea name="address" value={address} onChange={this.onChange} />
            </label>
            <br/>
            <button type="submit">Submit</button>
          </form>
        )
      }
    
    }

    export default Form;
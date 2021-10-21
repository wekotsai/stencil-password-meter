import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})
export class AppForm {
  @Prop() item: string;
  @State() value: string;

  list = [];

  validate(event) {
    this.value = event.target.value;

    if (this.value.length < 8) {
      this.list.push('At least 8 characters')
    }

    if (this.value.search(/[a-z]/) < 0) {
      this.list.push('Must contain at least one lowercase letter');
    }

    if (this.value.search(/[A-Z]/) < 0) {
      this.list.push('Must contain at least one uppercase letter');
    }
    
    if (this.value.search(/[0-9]/) < 0) {
      this.list.push('Must contain at least one number'); 
    }

    if (this.value.search(/[$@#&!]/) < 0) {
      this.list.push('Must contain at least one special character'); 
    }

    if (this.value.search(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) >= 0) {
      this.list.push('pass!')
    }
  }

  removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  // removeDuplicates(list);

  show = false;

  showHandler() {
    this.show = true;
  }

  render() {
    return (
      <form>
        <label>
          <p>Email</p>
          <input type="email"/>
        </label>

        <label> 
          <p>Password</p>
          <input value={this.value} onInput={(event) => this.validate(event)}/>   
        </label>

        {this.list.map(item => (
          <ul>
            <li>{item}</li>
          </ul>
        ))}

        <button onClick={this.showHandler.bind(this)}>Submit</button> 
      </form>
    );
  }
}

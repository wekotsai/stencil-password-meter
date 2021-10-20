import { Component, Prop, h, State, Element } from '@stencil/core';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})
export class AppForm {
  list = [
    'At least 8 characters',
    'At least 1 lowercase letter',
    'At least 1 uppercase letter',
    'At least 1 numerical number',
    'At least 1 special character'
  ]

  @Prop() item: string;
  @State() value: string;

  validate(event) {
    this.value = event.target.value;

    if (this.value.length < 8) {
      console.log('At least 8 characters');
    }

    if (this.value.search(/[a-z]/) < 0) {
      console.log('Must contain at least one lowercase letter');
    }

    if (this.value.search(/[A-Z]/) < 0) {
      console.log('Must contain at least one uppercase letter');
    }
    
    if (this.value.search(/[0-9]/) < 0) {
      console.log('Must contain at least one number'); 
    }

    if (this.value.search(/[$@#&!]/) < 0) {
      console.log('Must contain at least one special character'); 
    }

    if (this.value.search(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) >= 0) {
      console.log('pass!')
    }
  }

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
          <input class="checkPassword" value={this.value} onInput={(event) => this.validate(event)}/>   
        </label>

        {this.list.map(item => (
          <ul class="validations">
            <li>{item}</li>
          </ul>
        ))}

        <button onClick={this.showHandler.bind(this)}>Submit</button> 
      </form>
    );
  }
}

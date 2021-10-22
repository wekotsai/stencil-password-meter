import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})
export class AppForm {
  @Prop() item: string;
  @State() disabled?: boolean;
  @State() value: string;
  @State() showPassword?: boolean;
  @State() checkboxValue: string;

  list = [];

  validate(event) {
    this.value = event.target.value;

    if (this.value.length < 8) {
      this.list.push('❗Must contain at least 8 characters');
    } else {
      this.list.splice(0);
    }

    if (this.value.search(/[a-z]/) < 0) {
      this.list.push('❗Must contain at least one lowercase letter');
    } else {
      this.list.splice(1);
    }

    if (this.value.search(/[A-Z]/) < 0) {
      this.list.push('❗Must contain at least one uppercase letter');
    } else {
      this.list.splice(2);
    }
    
    if (this.value.search(/[0-9]/) < 0) {
      this.list.push('❗Must contain at least one number'); 
    } else {
      this.list.splice(3);
    }

    if (this.value.search(/[$@#&!]/) < 0) {
      this.list.push('❗Must contain at least one special character'); 
    } else {
      this.list.splice(4);
    }

    if (this.value.search(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/) >= 0 || this.value.length == 0) {
      this.list.splice(0, this.list.length);
    }
  }

  removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
  }

  handleClick() {
    this.showPassword = !this.showPassword;
  }

  checkboxHandler(event) {
    this.checkboxValue = event.target.value;
    if(this.checkboxValue == 'on') {
      this.disabled = !this.disabled;
    }
  }

  render() {
    return (
      <form class="form">
        <label>
          <p class="text">Email</p>
          <input class="input" type="email" required/>
        </label>

        <label> 
          <p class="text">Password</p>
          <input class="input" type={this.showPassword ? "text" : "password"} value={this.value} onInput={(event) => this.validate(event)} required/>
          <button class="show-hide" onClick={this.handleClick.bind(this)}>👁️ Show password</button>
        </label>

        {this.removeDuplicates(this.list).map(item => (
          <ul class="requirements">
            <li>{item}</li>
          </ul>
        ))}

        <div class="tnc">
          <input type="checkbox" class="checkbox" value={this.checkboxValue} onChange={(event) => this.checkboxHandler(event)} required/> 
            I accept the <a class="tnc-link" href="#">Terms and Conditions</a>
        </div>

        <button class="submit" disabled={!this.disabled}>Submit</button> 
      </form>
    );
  }
}

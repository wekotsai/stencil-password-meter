import { Component, Prop, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})
export class AppForm {
  @Prop() item: string;
  @State() value: string;
  @State() open: boolean;

  @Listen('click', { capture: true })
    handleClick() {
      this.open = !this.open;
    }

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

  show = false;

  showHandler() {
    this.show = true;
  }

  render() {
    return (
      <form>
        <label>
          <p class="text">Email</p>
          <input class="input" type="email"/>
        </label>

        <label> 
          <p class="text">Password</p>
          <input class="input" type={this.open ? "password" : "text"} value={this.value} onInput={(event) => this.validate(event)}/>
          <button class="show-hide">👁️ Show password</button>
        </label>

        {this.removeDuplicates(this.list).map(item => (
          <ul class="requirements">
            <li>{item}</li>
          </ul>
        ))}

        <button class="submit" onClick={this.showHandler.bind(this)}>Submit</button> 
      </form>
    );
  }
}

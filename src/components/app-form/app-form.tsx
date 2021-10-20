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

  @Element() modalEl: HTMLUListElement;
  @Prop() item: string;
  @State() value: string;

  // private list?: HTMLUListElement;

  handleChange(event) {
    // this.list.style.display = 'block';
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
          <input class="checkPassword" type="password" onInput={(event) => this.handleChange(event)}/>   
        </label>

        {this.list.map(item => (
          <ul class="validations">
            <li>{item}</li>
          </ul>
        ))}

        {/* <button onClick={this.showHandler.bind(this)}>Submit</button>  */}
      </form>
    );
  }
}

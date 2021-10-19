import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

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

  showOptions = false;

  showOptionsHandler() {
     this.showOptions = true;
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
          <input class="password" type="password"/>
        </label>

        {this.list.map(item => (
          <ul>
            <li>{item}</li>
          </ul>
        ))}

        <button onClick={this.showOptionsHandler.bind(this)}>Submit</button>
      </form>
    );
  }
}

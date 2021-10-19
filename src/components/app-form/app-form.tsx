import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})
export class AppForm {
    @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <form>
          <label>
            <p>Email</p>
            <input type="email"/>
          </label>

          <label> 
            <p>Password</p>
            <input type="password"/>
          </label>

          <p>Hello! My name is {this.normalize(this.match.params.name)}. My name was passed in through a route param!</p>

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
}

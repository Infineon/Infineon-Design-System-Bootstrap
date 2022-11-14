import { Component, Host, h, Prop } from '@stencil/core';



@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {

  @Prop() buttonname: string;
  @Prop() btnname: string;
  @Prop() label: string;

  render() {
    return (
      <Host>
        <button>
          {this.buttonname}
          {this.btnname}
          {this.label}
        </button>
      </Host>
    );
  }

}

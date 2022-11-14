import { Component, h, Prop, State, Event, EventEmitter, Listen } from '@stencil/core';
import { MyButton } from '../my-button/my-button';

export interface AcknowledgeEvent { 
  when: Date;
}

@Component({
  tag: 'my-card',
  styleUrls: ['my-card.scss'],
  shadow: true,
})


export class MyCard {
  @Prop() kind: 'info' | 'success' | 'error' = 'info'
  @Prop() text: string;
  @State() acknowledged: boolean = false
  @Event() acknowledge: EventEmitter<AcknowledgeEvent>;

  @Listen("click")  
  testAsd() { 
    console.log(' test Asd')
  }
  @Listen('click')
  asd() {
    console.log('handle click ')
    this.acknowledged = true;
    this.acknowledge.emit({
      when: new Date()
    })
  
  }

  getCSSClass = () => this.kind + (this.acknowledged ? " acknowledge" : "")
  
  render() { 
      return (
        <div>
          <p class={this.getCSSClass()}>
          <span>{this.kind}</span> 
          <button>acknowledge</button>
          <span>{this.acknowledged && this.text}</span>
          </p>

          <div class='ifx__sass-test green'>TEST DIV</div>

          <div>
            {MyButton}
          </div>
        </div>
      )
  }
}
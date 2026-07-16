import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-component',
  imports: [FormsModule],
  templateUrl: './test-component.html',
  styleUrl: './test-component.css',
})
export class TestComponent {
  test = 'Testing the data binding via Interpolation';
  displayText = "I can see this text upon hovering ";

  onClick(){
    console.log('Button clicked!');
  }

  onClickTwoWay(){
    this.test = 'Button clicked! Two-way data binding works!';
  }

  onBlur(){
    console.log('Input field lost focus!');
  }

  onInput(){
    console.log('Input field value changed!');
  }
}

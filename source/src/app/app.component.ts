import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  typed: string;
  public join(number: string) {
    this.typed += number;
  }
  public clear() {
    this.typed = '';
  }
  public check(type: string): boolean {
    if (this.typed.charAt(this.typed.length - 1) !== type) {
      return true;
    } else {
      return false;
    }
  }
  public add() {
    // tslint:disable-next-line:max-line-length
    if (this.check('+')) {
      this.typed += '+';
    }
  }
  public subtract() {
    if (this.check('-')) {
      this.typed += '-';
    }
  }
  public multiplicate() {
    if (this.check('*')) {
      this.typed += '*';
    }
  }
  public divide() {
    if (this.check('/')) {
      this.typed += '/';
    }
  }
  public invert() {
    // tslint:disable-next-line:radix
    this.typed = (parseInt(this.typed) * -1).toString();
  }
  public delete() {
    this.typed = this.typed.substring(0, this.typed.length - 1);
  }
  public calculate() {
    // tslint:disable-next-line:radix
    // tslint:disable-next-line:no-eval
    this.typed = eval(this.typed);
  }
  public dot() {
    if (this.check('.')) {
      this.typed += '.';
    }
  }
  public ngOnInit(): void {
    this.typed = '';
  }
}

import { Observable, Subject } from 'rxjs';

class Statr {
  private state: any = {};
  private emitters: { [key: string]: Subject<any> } = {};

  public clearState(state: string) {
    delete this.state[state];
    this.emitters[state].next(this.state);
  }

  public getState(state: string) {
    return this.state[state];
  }

  public setState(state: string, value: any) {
    this.state[state] = value;
    if (this.emitters[state]) {
      this.emitters[state].next(value);
    }
  }

  public setStateProperty(state: string, property: string, value: any) {
    if (!this.state[state]) {
      this.state[state] = {}
    };
    this.state[state][property] = value;
    this.state = { ...this.state }
    this.emitters[state].next(this.state[state]);
  }

  public getStateProperty(state: string, property: string) {
    return this.state[state] ? this.state[state][property] : undefined;
  }

  onStateChange(name: string): Observable<any> {
    if (!this.emitters[name]) {
      this.emitters[name] = new Subject<any>();
    }
    if (this.state[name]) {
      setTimeout(() => this.emitters[name].next(this.state[name]));
    }
    return this.emitters[name];
  }
}

export default new Statr();

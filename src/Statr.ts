import { Observable, Subject } from 'rxjs';

class Statr {
  private state: any = {};
  private emitters: { [key: string]: Subject<any> } = {};

  public setState(name: string, value: any) {
    this.state[name] = value;
    if (this.emitters[name]) {
      this.emitters[name].next(value);
    }
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

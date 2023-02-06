import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataService {
  // dataEmitter = new EventEmitter<string>()

  // Create new Subject
  dataEmitter = new Subject<string>()

  raiseDataEmitterEvent(data: string) {
    // this.dataEmitter.emit(data);
    this.dataEmitter.next(data);
  }
}

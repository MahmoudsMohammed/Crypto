import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class communicateService {
  selected = new BehaviorSubject<string>('EUR');
}
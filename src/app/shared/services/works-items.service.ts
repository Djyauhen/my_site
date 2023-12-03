import {Injectable} from '@angular/core';
import {WorksItems} from "../../../types/works-items";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../enviroments/environment.developer";

@Injectable({
  providedIn: 'root'
})
export class WorksItemsService {

  constructor(private http: HttpClient) {
  }

  getWorksItems(): Observable<WorksItems[]> {
    return this.http.get<WorksItems[]>(environment.api)
  }
}

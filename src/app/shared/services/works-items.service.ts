import {Injectable} from '@angular/core';
import {WorksItems} from "../../../types/works-items";
import {HttpClient} from "@angular/common/http";
import {filter, map, Observable} from "rxjs";
import {environment} from "../../../enviroments/environment.developer";

@Injectable({
  providedIn: 'root'
})
export class WorksItemsService {
  works

  constructor(private http: HttpClient) {
    this.works = this.http.get<WorksItems[]>(environment.api).pipe(
      map(data => {
          return data.map(item => {
            let imageId = item.image.split('/')[5];
            return {
              id: item.id,
              image: `https://drive.google.com/uc?export=view&id=${imageId}`,
              name: item.name,
              description: item.description,
              deploy: item.deploy,
              github: item.github,
              aboutWork: item.aboutWork,
              type: item.type,
              timeToWork: item.timeToWork,
              visible: item.visible
            }
          });
        }
      )
    );
  }

  getVisibleWorksItems(): Observable<WorksItems[]> {
    return this.works
      .pipe(
        map(data => data.filter(item => item.visible))
      )

  }

  getAllWorksItems(): Observable<WorksItems[]> {
    return this.works;
  }

}


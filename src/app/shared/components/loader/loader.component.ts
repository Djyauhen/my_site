import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoaderService} from "../../services/loader.service";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  isShowed: boolean = false;

  constructor(private loaderService: LoaderService) {
  }

  ngOnInit() {
    this.loaderService.isShowed$.subscribe(isShowed => {
      this.isShowed = isShowed;
    })
  }
}

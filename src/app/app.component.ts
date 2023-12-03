import {Component, ElementRef, TemplateRef, ViewChild} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {MenuItems} from "../types/menu-items";
import {MenuItemsService} from "./shared/services/menu-items.service";
import {SkillsItemsService} from "./shared/services/skills-items.service";
import {SkillsItems} from "../types/skills-items";
import {WorksItems} from "../types/works-items";
import {WorksItemsService} from "./shared/services/works-items.service";
import {SocialItemsService} from "./shared/services/social-items.service";
import {SocialItems} from "../types/social-items";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {Subscription} from "rxjs";
import {ResponseType} from "../types/response-type";
import {environment} from "../enviroments/environment.developer";
import {LoaderComponent} from "./shared/components/loader/loader.component";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, ReactiveFormsModule, NgOptimizedImage, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  menuItems: MenuItems[] = [];
  skillsItems: SkillsItems[] = [];
  worksItems: WorksItems[] = [];
  socialsItems: SocialItems[] = [];
  subscriptions: Subscription[] = [];
  form = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    email: [''],
    message: ['', Validators.required],
  });
  popupMessage: boolean = false;


  @ViewChild('popup') popup!: TemplateRef<ElementRef>;
  @ViewChild('menuItem') menuItem!: TemplateRef<ElementRef>;
  dialogRef: MatDialogRef<any> | null = null;

  constructor(private menuService: MenuItemsService,
              private skillsService: SkillsItemsService,
              private worksService: WorksItemsService,
              private socialService: SocialItemsService,
              private fb: FormBuilder,
              private http: HttpClient,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
    this.skillsItems = this.skillsService.getSkillsItems();
    this.socialsItems = this.socialService.getSocialItems();
    this.subscription = this.worksService.getWorksItems()
      .subscribe({
        next: data => {
          data.forEach(item => {
            let imageId = item.image.split('/')[5];
            let imageUrl = `https://drive.google.com/uc?export=view&id=${imageId}`
            this.worksItems.push({
              image: imageUrl,
              name: item.name,
              description: item.description
            })
          })
        }
      });
  }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnDestroy() {
    this.worksItems = [];
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  sendMessage() {
    if (this.form.valid) {

      let res = this.http.post<ResponseType>(environment.api, {
          name: this.form.getRawValue().name,
          phone: this.form.getRawValue().phone,
          email: this.form.getRawValue().email,
          message: this.form.getRawValue().message,
        },
        {
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      )
      res.subscribe({
        next: answer => {
          this.clearForm();
          this.popupMessage = true;
          this.openPopup(this.popup);
        },
        error: err => {
          this.clearForm();
          this.popupMessage = true;
          this.openPopup(this.popup);
        }
      })
    }
  }

  clearForm() {
    this.form.reset();

  }

  closePopup() {
    this.dialogRef?.close();
  }

  openPopup(target: TemplateRef<ElementRef>) {
    this.dialogRef = this.dialog.open(target);
    this.dialogRef.backdropClick();
  }

  // openMenu() {
  //   let menuItem = document.getElementById('menu');
  //   if (menuItem) menuItem.style.display = 'flex';
  // }
}

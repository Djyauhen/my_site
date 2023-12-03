import {Injectable} from '@angular/core';
import {SkillsItems} from "../../../types/skills-items";

@Injectable({
  providedIn: 'root'
})
export class SkillsItemsService {

  skillsItems: SkillsItems[] = [
    {
      image: "html5.png",
      name: "HTML5",
      description: "Владею современным функционалом HTML5, включая, аудио и видео, встроенные веб-приложения, геолокацию и многое другое"
    },
    {
      image: "javascript.png",
      name: "JavaScript",
      description: "Владею всеми основными концепциями JS, что позволяет мне создавать интерактивные и динамические веб-приложения с минимальными усилиями"
    },
    {
      image: "css.png",
      name: "CSS",
      description: "Мастерски применяю стилизацию, используя современные подходы и методологии, что обеспечивает элегантный и привлекательный дизайн на всех устройствах"
    },
    {
      image: "angular.png",
      name: "Angular",
      description: "Разрабатываю высокопроизводительные веб-приложения с помощью модульности, компонентного подхода и множества других возможностей"
    },
  ]

  constructor() {
  }


  getSkillsItems(): SkillsItems[] {
    return this.skillsItems;
  }
}

import {Injectable} from '@angular/core';
import {MenuItems} from "../../../types/menu-items";

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  menuItems: MenuItems[] = [
    {
      title: "Философия",
      surname: 'Философия и ценности',
      href: "#"
    },
    {
      title: "Навыки",
      surname: 'Мои навыки',
      href: "#"
    },
    {
      title: "Работы",
      surname: 'Мои работы',
      href: "#"
    },
    {
      title: "Блог",
      surname: 'Блог в Instagram',
      href: "#"
    },
    {
      title: "GitHub",
      surname: 'Репозиторий GitHub',
      href: "#"
    },
    {
      title: "Контакты",
      surname: 'Свяжись со мной',
      href: "#"
    }
  ]

  constructor() {
  }

  getMenuItems(): MenuItems[] {
    return this.menuItems;
  }
}

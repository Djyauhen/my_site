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
      href: "philosophy"
    },
    {
      title: "Навыки",
      surname: 'Мои навыки',
      href: "skills"
    },
    {
      title: "Работы",
      surname: 'Мои работы',
      href: "works"
    },
    {
      title: "Блог",
      surname: 'Блог в Instagram',
      href: "instagram"
    },
    {
      title: "GitHub",
      surname: 'Репозиторий GitHub',
      href: "github"
    },
    {
      title: "Контакты",
      surname: 'Свяжись со мной',
      href: "order"
    }
  ]

  constructor() {
  }

  getMenuItems(): MenuItems[] {
    return this.menuItems;
  }
}

import { Injectable } from '@angular/core';
import {SocialItems} from "../../../types/social-items";

@Injectable({
  providedIn: 'root'
})
export class SocialItemsService {
  socialItems: SocialItems[] = [
    {
      name: 'VK',
      image: 'vk.png',
      href: 'https://vk.com/djzhen'
    },
    {
      name: 'Instagram',
      image: 'instagram.png',
      href: 'https://www.instagram.com/evgenij_frontend_developer/'
    },
    {
      name: 'LinkedIn',
      image: 'linkedin.png',
      href: 'https://www.linkedin.com/in/djzhen/'
    },
    {
      name: 'Telegram',
      image: 'telegram.png',
      href: 'https://t.me/djzhen96'
    },
    {
      name: 'GitHub',
      image: 'github.png',
      href: 'https://github.com/Djyauhen'
    },
  ]

  constructor() { }

  getSocialItems(): SocialItems[] {
    return this.socialItems
  }
}

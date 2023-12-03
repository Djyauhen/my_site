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
      href: '#'
    },
    {
      name: 'Instagram',
      image: 'instagram.png',
      href: '#'
    },
    {
      name: 'LinkedIn',
      image: 'linkedin.png',
      href: '#'
    },
    {
      name: 'Telegram',
      image: 'telegram.png',
      href: '#'
    },
    {
      name: 'GitHub',
      image: 'github.png',
      href: '#'
    },
  ]

  constructor() { }

  getSocialItems(): SocialItems[] {
    return this.socialItems
  }
}

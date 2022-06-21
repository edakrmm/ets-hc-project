import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor() {}
  
  removeTurkishCharactersFromSlug(text:any)
  {
     let turkishCharacters:any = {
         'çÇ':'c',
         'ğĞ':'g',
         'şŞ':'s',
         'üÜ':'u',
         'ıİ':'i',
         'öÖ':'o'
     };
     for(var key in turkishCharacters) {
         text = text.replace(new RegExp('['+key+']','g'), turkishCharacters[key]);
     }
     return  text.replace(/[^-a-zA-Z0-9\s]+/ig, '') 
                 .replace(/\s/g, "")
                 .toLowerCase();
 
 }

}

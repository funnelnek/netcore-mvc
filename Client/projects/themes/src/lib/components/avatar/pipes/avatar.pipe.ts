import { AvatarInitialType } from '../types/initial.type';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avatar'
})
export class AvatarPipe implements PipeTransform {

  transform(value: string | null, initials: AvatarInitialType = "first"): string | null {
    if (value) {
      switch(initials) {
        case "both":
          return this.getInitials(value);
        case "last":
          return this.getLastnameInitial(value);
        default: return this.getFirstnameInitial(value);
      }
    }

    return value;
  }

  private getLastnameInitial(name: string): string {
    let names =  name.split(' ');
    return names[names.length -1].trim()[0].toUpperCase();     
  }

  private getFirstnameInitial(name: string): string {
    return name.trim()[0].toUpperCase();
  }

  private getInitials(name: string): string {
    return this.getFirstnameInitial(name) + this.getLastnameInitial(name);
  }
}

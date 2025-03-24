import { Component } from '@angular/core';
import { AuthModule } from '../../../auth/auth.module';

interface MenuIten{
  title:string,
  route:string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {
  public reactiveMenu:MenuIten[] = [
    { title: 'basicos', route:'./reactive/basic'},
    { title: 'Dinamicos', route:'./reactive/dynamic'},
    { title: 'basicos', route:'./reactive/switches'},
  ];

  public AuthMenu:MenuIten[] = [
    { title: 'Registro', route:'./auth'},

  ];

}

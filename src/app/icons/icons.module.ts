import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { Linkedin, Heart, Github, ArrowUp } from 'angular-feather/icons';


const icons = {
  Linkedin,
  Heart,
  Github,
  ArrowUp
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class IconsModule { }

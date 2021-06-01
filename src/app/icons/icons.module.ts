import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
// Import des icones utilisés
import {
  Linkedin,
  Github,
  ArrowUp,
  AlertCircle,
  Download,
  ChevronDown,
} from 'angular-feather/icons';

// Creation du tableau des icones choisis
const icons = {
  Linkedin,
  Github,
  ArrowUp,
  AlertCircle,
  Download,
  ChevronDown,
};
@NgModule({
  declarations: [],
  imports: [CommonModule, FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}

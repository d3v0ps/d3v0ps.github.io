---
title: Angular Reviews 01 - ngx-chips
description: Reviews del componente ngx-chips
publish: false
order: 1
---

# Angular Reviews 01: ngx-chips
Este es el primero de una serie de posts que iré haciendo sobre distintos componentes de Angular que considero dignos de analizar.

---
## Introducción

### Información del paquete

[![npm version](https://badge.fury.io/js/ngx-chips.svg)](https://badge.fury.io/js/ngx-chips)
[![npm downloads](https://img.shields.io/npm/dm/ngx-chips.svg)](https://npmjs.org/ngx-chips)


El componente que vamos a analizar es: [ngx-chips](https://www.npmjs.com/package/ngx-chips) (v2.1.0 para Angular >= 4)  
Este componente fue desarrollado por el usuario de Github [Gbuomprisco](https://github.com/Gbuomprisco) inspirándose en el componente de chips de Angular Material.  
### Dependencias
Tiene una dependencia a tener en cuenta: [ng2-material-dropdown](https://www.npmjs.com/package/ng2-material-dropdown). Esta dependencia es un paquete del mismo autor diseñada para realizar dropdowns al estilo material.

---
## Facilidad de Uso

### Instalación
Para la instalación básica sólo es preciso importar el módulo.
```ts
import { TagInputModule } from 'ngx-chips';

@NgModule({
  imports: [
    TagInputModule,
    ...OtherModules 
  ] // along with your other modules
})
export class SharedModule {}
```
### Integración
Implementa la interfaz `ControlValueAccesor` de Angular, por lo que podemos utilizar las directivas para formularios: `ngModel` o `formControlName`.
```html
<form [formGroup]="myFormGroup">
  <tag-input formControlName="tags"></tag-input>
</form>
```
### Extensibilidad
Se puede modificar su apariencia visual creando un tema:
```html
<tag-input [ngModel]="items" [theme]="'foundation-theme'"></tag-input>
```
```scss
@import "~node_modules/ngx-chips/core/styles/core/_core.scss";

$foundation-primary: #1779ba;
$foundation-primary-dark: darken($foundation-primary, 10%);

// this is the container's theme
$foundation-theme: (
  container-border-bottom: 1px solid $foundation-primary
);

// this is the tag's theme
$foundation-tag-theme: (
  background: $foundation-primary,
  background-focused: $foundation-primary-dark,
  background-active: $foundation-primary-dark,
  background-hover: $foundation-primary-dark,
  color: #fff,
  color-hover: #fff,
  border-radius: 2px
);

// this is the delete icon's theme
$foundation-icon-theme: (
  fill: #fff,
  fill-focus: #eee,
  transition: all 0.35s
);

// apply theme to the container
::ng-deep tag-input .ng2-tag-input.foundation-theme {
  @include tag-input-theme($foundation-theme);
}

// apply theme to the tags
::ng-deep tag-input .ng2-tag-input.foundation-theme tag {
  @include tag-theme($foundation-tag-theme);
}

// apply theme to the delete icon
::ng-deep tag-input .ng2-tag-input.foundation-theme tag delete-icon {
  @include icon-theme($foundation-icon-theme);
}
```
---
## Implementación

### Integración con Angular

### Calidad del Código




![WIP](assets/pictures/work_in_progress.png)


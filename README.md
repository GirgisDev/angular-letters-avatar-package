# Angular letters-avatar Component Ngx-letters-avatar (Angular 2+)

Component will genrate an avatar of your name's initial letters
[![](https://i.ibb.co/VWD6QRJ/letters-avatar.png)](https://i.ibb.co/VWD6QRJ/letters-avatar.png)

## Features

- Set `width` and `height` properties or only one of them.
- Set the `avatarName` property wich is used to display the initials.
- Set the `src` property to show ordinary image in case you don't want to show letters avatar.
- You can set the `fontFamily` for the characters.
- You can set `circular` which is a boolean value to true or false to create a circlular shaped image.
- You can set `borderRadius` property to make rounded border for the shape.
- You can set `id` property for the image.

## Getting Started

### Installing

```
npm i ngx-letters-avatar
```

## Configuration

Ensure you import the module and the dependencies:

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { LettersAvatarModule } from "ngx-letters-avatar";

@NgModule({
  declarations: [],
  imports: [BrowserModule, LettersAvatarModule],
  exports: [],
  providers: []
})
export class AppModule {}
```

### Basic Usage

```html
<div *ngFor="let user of users">
  <p>{{ user.name }}</p>
  <ngx-letters-avatar 
    [avatarName]="user.name" 
    [width]="40" 
    [height]="40" 
    [circular]="true"
    fontFamily="Open Sans"></ngx-letters-avatar>
</div>
```

```typescript
@Component({
  selector: 'app',
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
});

export class App {
  users = [
    { name: "Girgis A.Jacoub", id: 1 },
    { name: "Your name", id: 2 },
    { name: "another name", id: 3 },
  ];
}
```

### Api for letters-avatar Component

#### These are the list of Inputs[] that are supported by the component. Configure the settings to meet your requirement.

| Input         |Type    | Description            | Default Value |
|:--- |:--- |:--- |:--- |
| width | number | Will be used as the width of the image. if provided, you don't need to provide the height property as the height will be the same. only set `height` and `width` in case you want to set differnt width and height values. | 60 |
| height | number | Will be used as the height of the image. if provided, you don't need to provide the width property. | none |
| avatarName | string | The name which the initial letters are taken from. | none |
| src | string | The src of the image. provide it in case you want to show image instead of letters avatar. | none |
| className | string | To provide a class or classes for the image tag. | none |
| fontFamily | string | To provide a font fanily for the characters. | Arial |
| circular | boolean | to make a circular shaped img. | false |
| borderRadius | number | to make a rounded bordered shape image. | none |
| id | string | to provide id attribute for the image tag. | none |
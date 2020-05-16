import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ngx-letters-avatar',
  templateUrl: './letters-avatar.component.html',
  styleUrls: ['./letters-avatar.component.css']
})
export class LettersAvatarComponent implements OnInit, AfterViewInit {
  @Input('width') width = 60;
  @Input('height') height = 60;
  @Input('avatarText') avatarText = "";
  @Input('className') className = "";
  @Input('fontFamily') fontFamily = "arial";
  @Input('circular') circular = false;
  @Input('borderRadius') borderRadius: number;
  @Input('id') id: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.drawAvatar();
  }

  drawAvatar() {
    let image = document.getElementById("avatar-img"),
      name = this.avatarText;

    image.id = this.id ? this.id : this.avatarText.replace(/\s/g, "") + "Avatar";
    image.setAttribute('alt', `${name} avatar`);
    image.setAttribute('width', `${this.width}px`);
    image.setAttribute('height', `${this.height}px`);
    image.setAttribute('src', this.createCanvasURI(name));
    image.className = this.className;
    if (this.circular) image.style.borderRadius = "50%";
    if (this.borderRadius) image.style.borderRadius = `${this.borderRadius}px`;
  }

  createCanvasURI(name = "") {
    let colours = [
      "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e",
      "#f7ca18", "#f15a22", "#1ba39c", "#2abb9b", "#1f3a93",
      "#96281b", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6",
      "#f39c12", "#d35400", "#c0392b", "#22a7f0", "#2c3e50"
    ],
      nameSplit = String(name).toUpperCase().split(' '),
      size = this.width, initials, charIndex, colourIndex, canvas, context, dataURI;


    if (nameSplit.length < 2) initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
    else initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);

    if (window.devicePixelRatio) size = size * window.devicePixelRatio;

    charIndex = (initials == '?' ? 72 : initials.charCodeAt(0)) - 64;
    colourIndex = charIndex % 20;
    canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    context = canvas.getContext("2d");

    context.fillStyle = colours[colourIndex - 1];
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = `${Math.round(canvas.width / 2.7)}px ${this.fontFamily}`;
    context.textAlign = "center";
    context.fillStyle = "#FFF";
    context.textBaseline = "middle";

    initials = initials.split("").join(String.fromCharCode(8202))
    context.fillText(initials, size / 2, size / 1.85);

    dataURI = canvas.toDataURL();
    canvas = null;

    return dataURI;
  }

}

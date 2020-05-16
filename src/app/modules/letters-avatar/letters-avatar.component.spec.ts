import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettersAvatarComponent } from './letters-avatar.component';
import { DebugElement } from '@angular/core';

describe('LetterImageComponent', () => {
  let component: LettersAvatarComponent;
  let fixture: ComponentFixture<LettersAvatarComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettersAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettersAvatarComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should add avatar name', () => {
    let avatarText = "Girgis Abdelmalak"
    component.avatarText = avatarText;
    expect(component.avatarText).toEqual(avatarText);
  });
  it('should render img with initials', () => {
    const fixture = TestBed.createComponent(LettersAvatarComponent);
    fixture.detectChanges();
    let avatarText = "Girgis Abdelmalak"
    component.avatarText = avatarText;

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#Avatar')).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroesComponent } from './heroes.component';
import { DebugElement } from '@angular/core';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroesDebug: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HeroesComponent],
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    heroesDebug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it("'My heroes' title inside a h2 tag", () => {
    const heroesComponent: HTMLElement = heroesDebug.nativeElement;
    expect(heroesComponent.querySelector('h2')?.textContent).toContain(
      'My Heroes'
    );
  });

  it('there is an add button ', () => {
    const heroesComponent: HTMLElement = heroesDebug.nativeElement;
    expect(heroesComponent.querySelector('button .add-button')).toBeDefined();
  });
});

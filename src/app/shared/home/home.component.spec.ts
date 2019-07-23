import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:src/app/shared/home/home.component.spec.ts
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
=======
import { SideNavComponent } from './side-nav.component';

describe('SideNavComponent', () => {
  let component: SideNavComponent;
  let fixture: ComponentFixture<SideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavComponent ]
>>>>>>> c82bc5f449e22c0b9b098708b94cc644698f0830:src/app/profiles/side-nav/side-nav.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:src/app/shared/home/home.component.spec.ts
    fixture = TestBed.createComponent(HomeComponent);
=======
    fixture = TestBed.createComponent(SideNavComponent);
>>>>>>> c82bc5f449e22c0b9b098708b94cc644698f0830:src/app/profiles/side-nav/side-nav.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

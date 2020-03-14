import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutServicePage } from './about-service.page';

describe('AboutServicePage', () => {
  let component: AboutServicePage;
  let fixture: ComponentFixture<AboutServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

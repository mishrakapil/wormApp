import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TimeAndDatePage } from './time-and-date.page';

describe('TimeAndDatePage', () => {
  let component: TimeAndDatePage;
  let fixture: ComponentFixture<TimeAndDatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAndDatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TimeAndDatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

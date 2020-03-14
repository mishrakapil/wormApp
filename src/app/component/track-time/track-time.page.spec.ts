import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TrackTimePage } from './track-time.page';

describe('TrackTimePage', () => {
  let component: TrackTimePage;
  let fixture: ComponentFixture<TrackTimePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackTimePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TrackTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendPhotoPage } from './send-photo.page';

describe('SendPhotoPage', () => {
  let component: SendPhotoPage;
  let fixture: ComponentFixture<SendPhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPhotoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RingtoneSelectorPage } from './ringtone-selector.page';

describe('RingtoneSelectorPage', () => {
  let component: RingtoneSelectorPage;
  let fixture: ComponentFixture<RingtoneSelectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingtoneSelectorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RingtoneSelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

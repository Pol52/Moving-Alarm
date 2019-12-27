import { async, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { DestinationSelectorPage } from './destination-selector.page';
describe('DestinationSelectorPage', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DestinationSelectorPage],
            imports: [IonicModule.forRoot()]
        }).compileComponents();
        fixture = TestBed.createComponent(DestinationSelectorPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=destination-selector.page.spec.js.map
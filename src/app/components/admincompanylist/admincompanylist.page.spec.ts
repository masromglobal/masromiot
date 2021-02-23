import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdmincompanylistPage } from './admincompanylist.page';

describe('AdmincompanylistPage', () => {
  let component: AdmincompanylistPage;
  let fixture: ComponentFixture<AdmincompanylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmincompanylistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdmincompanylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteContactsComponent } from './favorite-contacts.component';

describe('FavoriteContactsComponent', () => {
  let component: FavoriteContactsComponent;
  let fixture: ComponentFixture<FavoriteContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteContactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

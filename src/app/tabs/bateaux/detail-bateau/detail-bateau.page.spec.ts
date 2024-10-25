import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailBateauPage } from './detail-bateau.page';

describe('DetailBateauPage', () => {
  let component: DetailBateauPage;
  let fixture: ComponentFixture<DetailBateauPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBateauPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

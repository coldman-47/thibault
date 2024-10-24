import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProduitsListPage } from './produits-list.page';

describe('ProduitsListPage', () => {
  let component: ProduitsListPage;
  let fixture: ComponentFixture<ProduitsListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

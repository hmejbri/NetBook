import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOutputComponent } from './search-output.component';

describe('SearchOutputComponent', () => {
  let component: SearchOutputComponent;
  let fixture: ComponentFixture<SearchOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchOutputComponent]
    });
    fixture = TestBed.createComponent(SearchOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

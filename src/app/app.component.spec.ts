import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { App2Component } from './app.component';

describe('App2Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        App2Component
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App2Component);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'app2'`, () => {
    const fixture = TestBed.createComponent(App2Component);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app2');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(App2Component);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('app2 app is running!');
  });
});

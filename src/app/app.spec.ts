import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the portfolio identity and core sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('I connect ideas into systems');
    expect(compiled.querySelector('#skills')).toBeTruthy();
    expect(compiled.querySelector('#experience')).toBeTruthy();
    expect(compiled.querySelector('#contact')).toBeTruthy();
    expect(compiled.textContent).not.toContain('AI FlowPilot');
  });
});

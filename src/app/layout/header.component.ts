import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { LucideMenu, LucideX } from '@lucide/angular';
import { NAV_ITEMS } from '../data/portfolio.data';
import { MotionService } from '../core/motion.service';

@Component({
  selector: 'app-header',
  imports: [LucideMenu, LucideX],
  template: `
    <a class="skip-link" href="#main-content">Skip to content</a>
    <header class="site-header">
      <a class="brand" href="/" aria-label="Arun Kumar home" (click)="go($event, 'home')">
        <span class="brand-mark">AK</span><span>Arun Kumar</span>
      </a>
      <nav class="desktop-nav" aria-label="Primary navigation">
        @for (item of navItems; track item.target) {
          <button type="button" (click)="scroll(item.target)">{{ item.label }}</button>
        }
      </nav>
      <button class="menu-button" type="button" [attr.aria-expanded]="open()" aria-controls="mobile-navigation" (click)="toggle()">
        <span class="sr-only">{{ open() ? 'Close' : 'Open' }} navigation</span>
        @if (open()) { <svg lucideX aria-hidden="true"></svg> } @else { <svg lucideMenu aria-hidden="true"></svg> }
      </button>
      @if (open()) {
        <nav id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation">
          @for (item of navItems; track item.target) {
            <button type="button" (click)="scroll(item.target)">{{ item.label }}</button>
          }
        </nav>
      }
    </header>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private readonly motion = inject(MotionService);
  readonly navItems = NAV_ITEMS;
  readonly open = signal(false);
  readonly menuLabel = computed(() => this.open() ? 'Close navigation' : 'Open navigation');
  toggle(): void { this.open.update(value => !value); }
  scroll(target: string): void { this.open.set(false); this.motion.scrollTo(target); }
  go(event: Event, target: string): void { event.preventDefault(); this.scroll(target); }
}

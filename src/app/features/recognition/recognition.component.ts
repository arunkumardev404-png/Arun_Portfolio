import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LucideAward } from '@lucide/angular';
import { RECOGNITION } from '../../data/portfolio.data';

@Component({
  selector: 'app-recognition',
  imports: [LucideAward],
  template: `
    <section class="recognition section-shell section-pad" aria-labelledby="recognition-title">
      <div class="section-heading reveal"><p class="eyebrow">09 / RECOGNITION</p><h2 id="recognition-title">Trust, earned in the work.</h2></div>
      <div class="award-system reveal">
        <svg viewBox="0 0 100 30" aria-hidden="true"><path d="M9 15 H50 H91"/></svg>
        @for (award of awards; track award.title; let i = $index) {
          <button type="button" [class.active]="active() === i" (click)="active.set(i)" (focus)="active.set(i)"><svg lucideAward aria-hidden="true"></svg><span>{{ award.year }}</span><b>{{ award.title }}</b><small>{{ award.organisation }}</small></button>
        }
      </div>
      <p class="award-detail" aria-live="polite">{{ awards[active()].statement }}</p>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecognitionComponent { readonly awards = RECOGNITION; readonly active = signal(0); }

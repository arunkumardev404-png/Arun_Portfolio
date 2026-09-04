import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-angular-rail',
  template: `
    <section class="version-section section-shell section-pad" aria-labelledby="version-title">
      <div class="section-heading reveal"><p class="eyebrow">02 / ANGULAR EVOLUTION</p><h2 id="version-title">Built across Angular’s evolution.</h2><p>Professional delivery is highlighted. Other releases provide ecosystem context.</p></div>
      <div class="version-legend reveal"><span><i class="legend-dot active"></i>Professional experience</span><span><i class="legend-dot"></i>Ecosystem timeline</span></div>
      <ol class="version-rail reveal">
        @for (version of versions; track version.number) {
          <li [class.professional]="version.professional"><span class="version-node">{{ version.number }}</span><b>{{ version.professional ? 'Built with' : 'Context' }}</b>@if (version.current) { <small>Portfolio version</small> }</li>
        }
      </ol>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AngularRailComponent {
  readonly versions = [
    { number: 16, professional: false, current: false }, { number: 17, professional: true, current: false },
    { number: 18, professional: false, current: false }, { number: 19, professional: true, current: false },
    { number: 20, professional: false, current: false }, { number: 21, professional: true, current: true },
    { number: 22, professional: false, current: false }
  ] as const;
}

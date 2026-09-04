import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROOF_STATS } from '../../data/portfolio.data';

@Component({
  selector: 'app-proof-strip',
  template: `
    <section class="proof-strip section-shell reveal" aria-label="Professional proof">
      @for (stat of stats; track stat.label) {
        <div class="proof-stat"><strong>{{ stat.value }}</strong><span>{{ stat.label }}</span></div>
      }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProofStripComponent { readonly stats = PROOF_STATS; }

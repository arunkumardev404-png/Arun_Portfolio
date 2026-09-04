import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<footer class="site-footer section-shell"><span class="brand-mark">AK</span><p>Angular Product Engineer &amp; SaaS Builder</p><small>Designed as a connected system · {{ year }}</small></footer>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent { readonly year = new Date().getFullYear(); }

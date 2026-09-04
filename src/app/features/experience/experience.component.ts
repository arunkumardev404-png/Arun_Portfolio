import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCES } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  imports: [NgOptimizedImage],
  template: `
    <section id="experience" class="experience section-shell section-pad" aria-labelledby="experience-title">
      <div class="section-heading reveal"><p class="eyebrow">04 / EXPERIENCE</p><h2 id="experience-title">Enterprise work, clearly connected.</h2><p>Complex interfaces made observable, usable and dependable.</p></div>
      <div class="experience-visual reveal image-mask">
        <img ngSrc="assets/portfolio/arun/engineering/arun-angular-engineer-desktop.webp" width="1536" height="864" loading="lazy" alt="Arun Kumar at a development workstation with abstract connected architecture">
        <div class="architecture-labels" aria-hidden="true"><span>Interface</span><span>State</span><span>Services</span><span>Data</span></div>
      </div>
      <div class="timeline">
        @for (item of experiences; track item.company; let i = $index) {
          <article class="experience-card reveal">
            <div class="experience-index">0{{ i + 1 }}</div>
            <div class="experience-main"><p class="period">{{ item.period }}</p><h3>{{ item.company }}</h3><h4>{{ item.role }}</h4><p>{{ item.summary }}</p>
              <div class="initiative-row">@for (initiative of item.initiatives; track initiative) { <span>{{ initiative }}</span> }</div>
            </div>
            <ul class="chip-list" aria-label="Capabilities used at {{ item.company }}">@for (skill of item.capabilities; track skill) { <li>{{ skill }}</li> }</ul>
          </article>
        }
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent { readonly experiences = EXPERIENCES; }

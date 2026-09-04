import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LucideArrowUpRight, LucideBriefcaseBusiness, LucideGlobe2, LucideLayers3, LucideServerCog } from '@lucide/angular';
import { MotionService } from '../../core/motion.service';
import { LINKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-work',
  imports: [NgOptimizedImage, LucideArrowUpRight, LucideBriefcaseBusiness, LucideGlobe2, LucideLayers3, LucideServerCog],
  template: `
    <section id="work" class="work section-shell section-pad" aria-labelledby="work-title">
      <div class="section-heading reveal"><p class="eyebrow">05 / SELECTED WORK</p><h2 id="work-title">Architecture over theatre.</h2><p>Real systems explained through relationships—never fabricated screens.</p></div>
      <div class="work-grid">
        <article class="enterprise-map reveal">
          <div class="map-heading"><span>ENTERPRISE SYSTEM MAP</span><i>Live architecture</i></div>
          <div class="service-map" aria-label="Architecture diagram connecting interface, state, services and data">
            <div class="map-node node-ui"><svg lucideLayers3 aria-hidden="true"></svg><span>Angular UI</span></div>
            <div class="map-node node-state"><span>NgRx</span></div><div class="map-node node-api"><svg lucideServerCog aria-hidden="true"></svg><span>API layer</span></div>
            <div class="map-node node-data"><span>Connected data</span></div><svg viewBox="0 0 100 60" aria-hidden="true"><path d="M18 28 C35 4 40 48 54 27 S78 15 87 40"/><path d="M20 29 L80 42"/></svg>
          </div>
          <div class="outcome-row"><span>Observable state</span><span>Human review</span><span>Audit visibility</span></div>
        </article>
        <article class="sarvexture reveal">
          <div class="sarvexture-browser">
            <div class="browser-bar"><i></i><i></i><i></i><span>Live independent work</span></div>
            <div class="sarvexture-mark"><span>S</span><strong>SARVEXTURE</strong><small>Independent Digital Services Initiative</small></div>
            <div class="service-cluster" aria-hidden="true"><svg lucideGlobe2></svg><svg lucideLayers3></svg><svg lucideBriefcaseBusiness></svg><span class="live-dot">LIVE</span></div>
          </div>
          <p>A digital-services platform for websites, applications, business software, dashboards, UI/UX, maintenance, hosting and intelligent solutions.</p>
          <small>Owned by Arun and developed with AI-assisted tools.</small>
          <div class="work-actions">
            <a class="button button-primary" [href]="links.sarvexture" target="_blank" rel="noopener noreferrer">View live website <svg lucideArrowUpRight aria-hidden="true"></svg></a>
            <button class="text-action" type="button" (click)="motion.scrollTo('services')">Explore services</button>
            <button class="text-action" type="button" (click)="motion.scrollTo('contact')">Discuss a similar project</button>
          </div>
        </article>
      </div>
      <div class="saas-portrait reveal image-mask"><img ngSrc="assets/portfolio/arun/saas/arun-saas-builder-desktop.webp" width="1536" height="864" loading="lazy" alt="Arun Kumar planning an abstract SaaS product flow at a laptop"></div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WorkComponent { readonly links = LINKS; readonly motion = inject(MotionService); }

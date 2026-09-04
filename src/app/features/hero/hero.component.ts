import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { LucideArrowDown, LucideArrowUpRight, LucideDownload } from '@lucide/angular';
import { MotionService } from '../../core/motion.service';
import { HERO_TECH, LINKS } from '../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  imports: [NgOptimizedImage, LucideArrowDown, LucideArrowUpRight, LucideDownload],
  template: `
    <section id="home" class="hero section-shell" aria-labelledby="hero-title">
      <div class="hero-copy reveal">
        <p class="eyebrow">// ANGULAR PRODUCT ENGINEER × SAAS BUILDER</p>
        <h1 id="hero-title">I connect ideas into systems—<span>and systems into experiences.</span></h1>
        <p class="hero-role">Angular Product Engineer &amp; SaaS Builder</p>
        <p class="capability-line">Angular · Agentic AI · SaaS · Creative AI · Digital Growth</p>
        <ul class="availability" aria-label="Availability">
          <li>Open to Angular opportunities</li><li>Selected freelance projects</li><li>Tamil Nadu, India</li>
        </ul>
        <div class="hero-actions">
          <button class="button button-primary" type="button" (click)="scroll('work')">Explore my work <svg lucideArrowDown aria-hidden="true"></svg></button>
          <a class="button button-secondary" [href]="links.resume" download>Download résumé <svg lucideDownload aria-hidden="true"></svg></a>
          <button class="text-action" type="button" (click)="scroll('services')">Start a project</button>
          <button class="text-action" type="button" (click)="scroll('contact')">Contact me</button>
        </div>
        <div class="visitor-paths" aria-label="Quick paths">
          <button type="button" (click)="scroll('experience')"><small>Hiring an Angular engineer?</small><strong>View Experience</strong><svg lucideArrowUpRight aria-hidden="true"></svg></button>
          <button type="button" (click)="scroll('services')"><small>Have a product idea?</small><strong>Build With Me</strong><svg lucideArrowUpRight aria-hidden="true"></svg></button>
        </div>
      </div>
      <div class="hero-visual reveal" aria-label="Arun Kumar surrounded by connected technology nodes">
        <div class="portrait-frame">
          <picture>
            <source media="(max-width: 640px)" srcset="assets/portfolio/arun/hero/arun-hero-mobile.webp">
            <img ngSrc="assets/portfolio/arun/hero/arun-hero-desktop.webp" width="1536" height="864" priority alt="Arun Kumar in a dark engineering environment with connected graph lights">
          </picture>
          <div class="portrait-scan" aria-hidden="true"></div>
        </div>
        <div class="orbit" [class.motion-off]="motion.reduced()">
          <svg viewBox="0 0 100 100" aria-hidden="true"><ellipse cx="50" cy="50" rx="46" ry="34"/><ellipse cx="50" cy="50" rx="35" ry="46" transform="rotate(34 50 50)"/></svg>
          @for (tech of technologies; track tech[0]; let i = $index) {
            <button class="tech-orb" type="button" [style.--i]="i" [attr.aria-label]="tech[0]">
              <img [src]="'assets/tech/' + tech[1]" alt="" width="26" height="26"><span>{{ tech[0] }}</span>
            </button>
          }
        </div>
      </div>
      <div class="scroll-cue" aria-hidden="true"><span>Scroll to trace the system</span><i></i></div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
  readonly technologies = HERO_TECH;
  readonly links = LINKS;
  readonly motion = inject(MotionService);
  scroll(id: string): void { this.motion.scrollTo(id); }
}

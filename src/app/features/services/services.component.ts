import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { LucideArrowRight } from '@lucide/angular';
import { MotionService } from '../../core/motion.service';
import { SERVICES } from '../../data/portfolio.data';

@Component({
  selector: 'app-services',
  imports: [LucideArrowRight],
  template: `
    <section id="services" class="services section-shell section-pad" aria-labelledby="services-title">
      <div class="section-heading reveal"><p class="eyebrow">06 / INDEPENDENT SERVICES</p><h2 id="services-title">Choose a path. Shape the build.</h2><p>A compact service system for products, presence and growth.</p></div>
      <div class="services-layout">
        <div class="service-selector reveal" role="list" aria-label="Services">
          @for (service of services; track service.id) {
            <button type="button" role="listitem" [class.is-selected]="selectedId() === service.id" [attr.aria-pressed]="selectedId() === service.id" (click)="selectedId.set(service.id)"><span>{{ service.icon }}</span>{{ service.title }}</button>
          }
        </div>
        <article class="service-detail reveal" aria-live="polite">
          <span class="service-icon" aria-hidden="true">{{ selected().icon }}</span><p class="eyebrow">SELECTED SERVICE</p><h3>{{ selected().title }}</h3><p>{{ selected().description }}</p>
          <ul>@for (item of selected().deliverables; track item) { <li>{{ item }}</li> }</ul>
          <button class="button button-primary" type="button" (click)="motion.scrollTo('contact')">Request a project quote <svg lucideArrowRight aria-hidden="true"></svg></button>
        </article>
      </div>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicesComponent {
  readonly services = SERVICES;
  readonly selectedId = signal(SERVICES[0].id);
  readonly selected = computed(() => SERVICES.find(service => service.id === this.selectedId()) ?? SERVICES[0]);
  readonly motion = inject(MotionService);
}

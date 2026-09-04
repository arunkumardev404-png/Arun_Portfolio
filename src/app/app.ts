import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, PLATFORM_ID, afterNextRender, inject } from '@angular/core';
import { MotionService } from './core/motion.service';
import { ContactComponent } from './features/contact/contact.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { HeroComponent } from './features/hero/hero.component';
import { ProofStripComponent } from './features/hero/proof-strip.component';
import { RecognitionComponent } from './features/recognition/recognition.component';
import { CreativeGrowthComponent } from './features/services/creative-growth.component';
import { ServicesComponent } from './features/services/services.component';
import { AngularRailComponent } from './features/skills/angular-rail.component';
import { SkillGraphComponent } from './features/skills/skill-graph.component';
import { StoryComponent } from './features/story/story.component';
import { WorkComponent } from './features/work/work.component';
import { FooterComponent } from './layout/footer.component';
import { HeaderComponent } from './layout/header.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, ProofStripComponent, StoryComponent, AngularRailComponent, SkillGraphComponent, ExperienceComponent, WorkComponent, ServicesComponent, CreativeGrowthComponent, RecognitionComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class App implements OnDestroy {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly motion = inject(MotionService);
  private context?: { revert(): void };
  private cleanupTriggers: () => void = () => undefined;

  constructor() { afterNextRender(() => void this.initMotion()); }

  private async initMotion(): Promise<void> {
    if (!isPlatformBrowser(this.platformId) || !this.motion.available() || this.motion.reduced()) return;
    const [{ default: gsap }, { default: ScrollTrigger }] = await Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
    gsap.registerPlugin(ScrollTrigger);
    this.context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.reveal').forEach(element => {
        gsap.fromTo(element, { y: 34, opacity: .72, clipPath: 'inset(8% 0 0 0)' }, { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: .8, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
      });
      gsap.utils.toArray<HTMLElement>('.image-mask img').forEach(image => {
        gsap.fromTo(image, { scale: 1.06 }, { scale: 1, duration: 1.1, ease: 'power2.out', scrollTrigger: { trigger: image, start: 'top 90%', once: true } });
      });
    });
    this.cleanupTriggers = () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }

  ngOnDestroy(): void { this.context?.revert(); this.cleanupTriggers(); }
}

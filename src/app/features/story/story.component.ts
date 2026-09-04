import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideBookOpen, LucideCode2, LucideSprout, LucideWorkflow } from '@lucide/angular';

@Component({
  selector: 'app-story',
  imports: [NgOptimizedImage, LucideBookOpen, LucideCode2, LucideSprout, LucideWorkflow],
  template: `
    <section id="story" class="story section-shell section-pad" aria-labelledby="story-title">
      <div class="story-image reveal image-mask">
        <picture>
          <source media="(max-width: 640px)" srcset="assets/portfolio/arun/roots/arun-roots-mobile.webp">
          <img ngSrc="assets/portfolio/arun/roots/arun-roots-desktop.webp" width="1536" height="864" loading="lazy" alt="Arun Kumar standing beside paddy and banana crops at sunrise in Tamil Nadu">
        </picture>
        <div class="field-grid" aria-hidden="true"></div>
      </div>
      <div class="story-copy reveal">
        <p class="eyebrow">01 / PERSONAL ROOTS</p>
        <h2 id="story-title">Rooted in agriculture.<br><span>Built through persistence.</span></h2>
        <p class="lede">Raised in an agricultural family, Arun became a first-generation engineering graduate and built his career through curiosity, persistence and ownership.</p>
        <ol class="journey" aria-label="Arun's journey">
          <li><svg lucideSprout aria-hidden="true"></svg><span><b>Agricultural roots</b><small>Paddy · Banana</small></span></li>
          <li><svg lucideBookOpen aria-hidden="true"></svg><span><b>First-generation graduate</b><small>B.E. Computer Science</small></span></li>
          <li><svg lucideCode2 aria-hidden="true"></svg><span><b>Angular engineer</b><small>Enterprise front end</small></span></li>
          <li><svg lucideWorkflow aria-hidden="true"></svg><span><b>Independent builder</b><small>Products · Creative systems</small></span></li>
        </ol>
      </div>
      <article class="education-panel reveal">
        <img ngSrc="assets/portfolio/arun/education/arun-first-graduate-desktop.webp" width="1536" height="1024" loading="lazy" alt="Arun Kumar holding a plain degree folder in a studio where field lines become a technical grid">
        <div><p class="eyebrow">EDUCATION</p><h3>B.E. – Computer Science and Engineering</h3><p>Francis Xavier Engineering College</p><small>Tirunelveli, Tamil Nadu · 2018–2022</small></div>
      </article>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoryComponent {}

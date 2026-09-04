import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PROOF_STATS, FUTURE_CONTENT_MEDIA } from '../../data/portfolio.data';

@Component({
  selector: 'app-creative-growth',
  imports: [NgOptimizedImage],
  template: `
    <section class="creative section-shell section-pad" aria-labelledby="creative-title">
      <div class="creative-grid">
        <div class="creative-copy reveal"><p class="eyebrow">07 / CREATIVE AI</p><h2 id="creative-title">Concepts made ready to move.</h2><p>Hands-on generative media capability for useful, intentional creative output.</p>
          <div class="workflow" role="list" aria-label="Creative AI workflow">
            @for (stage of stages; track stage; let i = $index) { <button type="button" role="listitem" [class.active]="activeStage() === i" (click)="activeStage.set(i)"><span>0{{ i + 1 }}</span>{{ stage }}</button> }
          </div>
          <ul class="compact-list"><li>AI-assisted video generation</li><li>Image-to-video animation</li><li>Animated advertisements</li><li>Promotional content</li><li>Website motion assets</li><li>Generative-media prompting</li></ul>
          <p class="tool-line"><span>Hands-on tools</span> Google Gemini · Omni Flash · Grok</p>
        </div>
        <div class="creative-image reveal image-mask"><img ngSrc="assets/portfolio/arun/creative/arun-creative-ai-desktop.webp" width="1536" height="864" loading="lazy" alt="Arun Kumar reviewing abstract generative visual concepts and a motion timeline"></div>
      </div>
      <div class="growth reveal">
        <div><p class="eyebrow">08 / CONTENT &amp; SOCIAL GROWTH</p><h2>Strategy before the scroll.</h2><p>Audience research, content pillars, hooks, calendars, community engagement and measurable iteration.</p></div>
        <div class="growth-pillars" aria-label="Content strategy capabilities">@for (item of pillars; track item) { <span>{{ item }}</span> }</div>
        <div class="social-proof"><strong>{{ stats[2].value }}</strong><span>LinkedIn followers</span><i></i><strong>{{ stats[3].value }}</strong><span>Connections</span></div>
        <p class="platforms">LinkedIn · Instagram · YouTube · Facebook</p>
      </div>
      @if (futureMedia.length > 0) { <div class="future-media" aria-label="Published content"></div> }
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreativeGrowthComponent {
  readonly stages = ['Brief', 'Concept', 'Generate', 'Edit', 'Deliver'] as const;
  readonly pillars = ['Audience research', 'Content pillars', 'Content calendars', 'Hooks & scripting', 'Multi-platform planning', 'Analytics & iteration'] as const;
  readonly activeStage = signal(0);
  readonly stats = PROOF_STATS;
  readonly futureMedia = FUTURE_CONTENT_MEDIA;
}

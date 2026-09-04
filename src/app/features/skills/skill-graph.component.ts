import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { select } from 'd3-selection';
import { MotionService } from '../../core/motion.service';
import { SKILL_NODES } from '../../data/portfolio.data';

@Component({
  selector: 'app-skill-graph',
  template: `
    <section id="skills" class="skills-section section-shell section-pad" aria-labelledby="skills-title">
      <div class="section-heading reveal"><p class="eyebrow">03 / CONNECTED SKILL UNIVERSE</p><h2 id="skills-title">One system. Many relationships.</h2><p>Select a node to trace the capability behind it.</p></div>
      <div class="skill-layout">
        <div class="skill-graph reveal" role="group" aria-label="Interactive graph of Arun's connected engineering capabilities">
          <svg #graph viewBox="0 0 100 100" role="img" aria-labelledby="graph-title graph-desc">
            <title id="graph-title">Arun's connected skill graph</title><desc id="graph-desc">A deterministic graph with Arun at the centre, connected to front-end, reactive architecture, services, data, visualisation and delivery skills.</desc>
            @for (node of nodes; track node.id) { <path class="skill-edge" [attr.data-group]="node.group" [attr.d]="edge(node.x, node.y)"/> }
            <circle class="core-ring" cx="50" cy="50" r="11"/><circle class="core-pulse" cx="50" cy="50" r="4"/>
          </svg>
          <button type="button" class="core-node" aria-label="Arun, central node" (focus)="reset()" (click)="reset()"><b>ARUN</b><small>Product engineer</small></button>
          @for (node of nodes; track node.id) {
            <button type="button" class="graph-node" [class.is-active]="active()?.id === node.id" [class.is-related]="active()?.group === node.group" [style.left.%]="node.x" [style.top.%]="node.y" (click)="selectNode(node.id)" (focus)="selectNode(node.id)" [attr.aria-pressed]="active()?.id === node.id">
              @if (node.logo) { <img [src]="'assets/tech/' + node.logo" alt="" width="22" height="22"> }<span>{{ node.label }}</span>
            </button>
          }
        </div>
        <aside class="skill-detail reveal" aria-live="polite">
          <p class="eyebrow">{{ active()?.group || 'CONNECTED ENGINEERING' }}</p>
          <h3>{{ active()?.label || 'ARUN' }}</h3>
          <p>{{ active()?.description || 'Angular interfaces connected to state, services, data, visualisation and production delivery.' }}</p>
          <span class="node-coordinate">{{ active() ? 'NODE / ' + active()!.id.toUpperCase() : 'CENTRAL NODE / 00' }}</span>
        </aside>
      </div>
      <details class="skill-fallback"><summary>View skills as an accessible list</summary>
        @for (group of groups(); track group.name) { <section><h3>{{ group.name }}</h3><p>{{ group.items }}</p></section> }
      </details>
    </section>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillGraphComponent implements OnDestroy {
  private readonly graph = viewChild.required<ElementRef<SVGSVGElement>>('graph');
  private readonly motion = inject(MotionService);
  private removeDrawTimer?: ReturnType<typeof setTimeout>;
  readonly nodes = SKILL_NODES;
  readonly active = signal<(typeof SKILL_NODES)[number] | null>(null);
  readonly groups = computed(() => [...new Set(this.nodes.map(node => node.group))].map(name => ({ name, items: this.nodes.filter(node => node.group === name).map(node => node.label).join(' · ') })));

  constructor() {
    afterNextRender(() => {
      const paths = select(this.graph().nativeElement).selectAll<SVGPathElement, unknown>('.skill-edge');
      if (!this.motion.reduced()) {
        paths.classed('is-drawing', true);
        this.removeDrawTimer = setTimeout(() => paths.classed('is-drawing', false), 1400);
      }
    });
  }

  edge(x: number, y: number): string { return `M 50 50 Q ${(50 + x) / 2 + (y - 50) * .08} ${(50 + y) / 2} ${x} ${y}`; }
  selectNode(id: string): void {
    const node = this.nodes.find(item => item.id === id) ?? null;
    this.active.set(node);
    const svg = select(this.graph().nativeElement);
    svg.selectAll('.skill-edge').classed('is-active', false);
    if (node) svg.selectAll(`[data-group="${node.group}"]`).classed('is-active', true);
  }
  reset(): void { this.active.set(null); select(this.graph().nativeElement).selectAll('.skill-edge').classed('is-active', false); }
  ngOnDestroy(): void { if (this.removeDrawTimer) clearTimeout(this.removeDrawTimer); }
}

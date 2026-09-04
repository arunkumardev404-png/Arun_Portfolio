import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { DestroyRef, Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MotionService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  readonly reduced = signal(false);
  readonly available = signal(false);

  constructor() {
    if (!isPlatformBrowser(this.platformId)) return;
    const windowRef = this.document.defaultView;
    if (!windowRef || typeof windowRef.matchMedia !== 'function') return;
    const query = windowRef.matchMedia('(prefers-reduced-motion: reduce)');
    this.available.set(true);
    if (!query) return;
    const update = () => this.reduced.set(query.matches);
    update();
    query.addEventListener('change', update);
    this.destroyRef.onDestroy(() => query.removeEventListener('change', update));
  }

  scrollTo(target: string): void {
    const element = this.document.getElementById(target);
    element?.scrollIntoView({ behavior: this.reduced() ? 'auto' : 'smooth', block: 'start' });
  }
}

// Extended Performance API types for Playwright tests

declare interface LayoutShiftEntry extends PerformanceEntry {
  value: number
  hadRecentInput: boolean
  sources?: LayoutShiftSource[]
}

declare interface LayoutShiftSource {
  node?: Element
  currentRect: DOMRect
  previousRect: DOMRect
}

declare interface NavigationTimingEntry extends PerformanceNavigationTiming {
  navigationStart: number
}

declare interface MemoryInfo {
  usedJSHeapSize: number
  totalJSHeapSize: number
  jsHeapSizeLimit: number
}

declare interface Performance {
  memory?: MemoryInfo
}

declare interface Page {
  emulate?: (options: any) => Promise<void>
}
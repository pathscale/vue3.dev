import Vue, { VNode } from "vue";

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    type Element = VNode
    // tslint:disable no-empty-interface
    type ElementClass = Vue
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Should see if we can change later
      [elem: string]: any;
    }
  }
}

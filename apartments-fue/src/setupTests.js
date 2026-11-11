// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// i18n is initialised from index.js, which tests don't load — without this
// every t() call returns its raw key and assertions match on key names
// rather than on what a visitor actually sees.
import "./i18n/config";

// ---------------------------------------------------------------
//  Browser APIs jsdom does not implement.
//  These are environment gaps, not missing guards in the components:
//  all three exist in every browser the site supports.
// ---------------------------------------------------------------

// Reports "no preference" for every query, so decorative effects take
// their enabled path under test rather than their reduced-motion path.
if (!window.matchMedia) {
  window.matchMedia = (query) => ({
    media: query,
    matches: false,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

class NoopObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

if (!window.ResizeObserver) window.ResizeObserver = NoopObserver;
if (!window.IntersectionObserver) window.IntersectionObserver = NoopObserver;

// jsdom's canvas has no 2D context unless the optional `canvas` package is
// installed. Returning null is a case the bubble canvas already handles.
if (!HTMLCanvasElement.prototype.getContext) {
  HTMLCanvasElement.prototype.getContext = () => null;
}

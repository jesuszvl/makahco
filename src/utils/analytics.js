import ReactGA from "react-ga4";

const NEXT_PUBLIC_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export function initializeAnalytics() {
  ReactGA.initialize(NEXT_PUBLIC_ANALYTICS_ID);
}

export function trackPageView(page) {
  ReactGA.send({ hitType: "pageview", page });
}

export function trackEvent(category, action) {
  ReactGA.event({ category, action });
}

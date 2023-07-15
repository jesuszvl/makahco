import ReactGA from "react-ga4";

const NEXT_PUBLIC_ANALYTICS_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export function initializeAnalytics() {
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize(NEXT_PUBLIC_ANALYTICS_ID);
  }
}

export function trackPageView(page) {
  if (process.env.NODE_ENV === "production") {
    ReactGA.send({ hitType: "pageview", page });
  }
}

export function trackEvent(category, action) {
  if (process.env.NODE_ENV === "production") {
    ReactGA.event({ category, action });
  }
}

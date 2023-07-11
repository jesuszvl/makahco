import Apptimize from "@apptimize/apptimize-web-sdk";

export const isFeatureFlagEnabled = (featureFlagName) => {
  // Check if the window object is defined before accessing Apptimize
  if (typeof window !== "undefined") {
    return Apptimize.isFeatureFlagEnabled(featureFlagName);
  }
  return false; // Return a default value if window is not defined
};

function onApptimizeInitialized() {
  console.log("Apptimize setup and initialization complete");
  Apptimize.track("Apptimize Initialized");
  // Set a flag to indicate Apptimize data is available and content can be displayed
  console.log(
    "Using OpenAI API: " + isFeatureFlagEnabled("new_feature_flag_variable")
  );
}

// Check if the window object is defined before setting up Apptimize
if (typeof window !== "undefined") {
  Apptimize.setOnApptimizeInitializedCallback(onApptimizeInitialized);
  Apptimize.setup(process.env.NEXT_PUBLIC_APPTIMIZE_KEY);
}

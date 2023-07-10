import Apptimize from "@apptimize/apptimize-web-sdk";

export const isFeatureFlagEnabled = (featureFlagName) => {
  return Apptimize.isFeatureFlagEnabled(featureFlagName);
};

function onApptimizeInitialized() {
  console.log("Apptimize setup and initialization complete");
  Apptimize.track("Apptimize Initialized");
  // Set a flag to indicate Apptimize data is available and content can be displayed
  console.log(
    "Using OpenAI API: " + isFeatureFlagEnabled("new_feature_flag_variable")
  );
}

Apptimize.setOnApptimizeInitializedCallback(onApptimizeInitialized);
Apptimize.setup(process.env.NEXT_PUBLIC_APPTIMIZE_KEY);

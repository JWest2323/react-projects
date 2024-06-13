import { createContext, useEffect, useState } from "react";
import featureFlagDataServiceCall from "../data";

export const featureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});

  const fetchFeatureFlags = async () => {
    try {
      setLoading(true);
      // original service call
      const response = await featureFlagDataServiceCall();
      setEnabledFlags(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error(error);
    }
  };

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  if (loading) {
    return <h3>Loading data! Please wait...</h3>
  }

  return (
    <featureFlagContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </featureFlagContext.Provider>
  );
}

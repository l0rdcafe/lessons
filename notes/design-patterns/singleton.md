# Singleton

Singleton is a pattern that instantiates only one instance of a class
and provides a global access point to it. One way to ensure that
a class isn't instantiated more than once is for the class itself
to keep track of its instances and intercept the creation of other instances.
Singletons are most useful when you cannot have more than a single instance of a class,
for example a feature flag client or a state object. Singletons provide benefits
such as controlled access to one instance and reducing namespace clutter.
The caveats in implementing a singleton would be ensuring the uniqueness
of class instances, another is subclassing the singleton and how subclasses
will have access to its singleton parent instance.

# Code Example

```
// featureFlags.ts
const useFeatureFlags = (): FeatureFlagProvider => {
  // Global point of access to Singleton
  const { featureFlagClient } = useContext<FeatureFlagHookType>(
    FeatureFlagContext
  )
  return featureFlagClient
}

const FeatureFlagContextProvider: FunctionComponent = ({ children }) => {
  // Local state to this component storing Singleton
  const [featureFlagClient, setFeatureFlagClient] = useState<
    FeatureFlagHookType['featureFlagClient']
  >(null)

  // HTTP operation to bootstrap singleton
  const identifyLD = async () => {
    // Identify Launch Darkly Client
    await featureFlagClient.identify({
      anonymous: true,
      key: 'oof-anonymous',
      custom: {
        service: 'ordering-online-frontend',
      },
    })
  }

  // Runs once on first render to initialize Singleton
  useEffect(() => {
    if (!featureFlagClient) {
      const client = initLD(__CONFIG__.LD_CLIENT_ID)
      setFeatureFlagClient(client)
    }
  }, [])

  // Runs when the local state value featureFlagClient updates (undefined -> defined)
  useEffect(() => {
    if (featureFlagClient) {
      identifyLD()
    }
  }, [featureFlagClient])

  // Wraps application UI components with context provider with the singleton value attached
  return (
    <FeatureFlagContext.Provider value={{ featureFlagClient }}>
      {children}
    </FeatureFlagContext.Provider>
  )
}

export default FeatureFlagContextProvider
export { useFeatureFlags }

// module.ts
import { useFeatureFlags } from "./featureFlags"
const featureFlagClient = useFeatureFlags()
featureFlagClient.doStuff()
```

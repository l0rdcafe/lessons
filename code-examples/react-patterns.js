// Vanilla / Mixed Pattern
import { connect } from "react-redux";
import { isFeatureEnabled } from "./reducers";
import { combineReducers } from "redux";

class MixedComp extends React.Component {
  state = { loading: true };
  componentDidMount() {
    fetch("https://api.lol.com/cats/5")
      .then(res => res.json())
      .then(cat => this.setState({ loading: false, cat }))
      .catch(error => this.setState({ loading: false, error }));
  }
  renderLoading() {
    return <div>Purring...</div>;
  }
  renderError() {
    return <div>Sorry, error found.</div>;
  }
  renderCat() {
    const { name, breed, id } = this.state.cat;
    return (
      <div>
        <h2>{name}</h2>
        <div>Breed: {breed}</div>
        <div>ID: {id}</div>
      </div>
    );
  }
  render() {
    if (this.state.loading) {
      return this.renderLoading();
    } else if (this.state.cat) {
      return this.renderCat();
    }
    return this.renderError();
  }
}

// Container / View Pattern

class CatViewComp extends React.Component {
  renderLoading() {
    return <div>Purring...</div>;
  }
  renderError() {
    return <div>Sorry, error found.</div>;
  }
  renderCat() {
    const { name, breed, id } = this.props.cat;
    return (
      <div>
        <h2>{name}</h2>
        <div>Breed: {breed}</div>
        <div>ID: {id}</div>
      </div>
    );
  }
  render() {
    if (this.props.loading) {
      return this.renderLoading();
    } else if (this.props.cat) {
      return this.renderCat();
    }
    return this.renderError();
  }
}

class ContainerView extends React.Component {
  state = { loading: true };
  componentDidMount() {
    fetch("https://api.lol.com/cats/5")
      .then(res => res.json())
      .then(cat => this.setState({ loading: false, cat }))
      .catch(error => this.setState({ loading: false, error }));
  }
  render() {
    return <CatViewComp {...this.state} />;
  }
}

// Container / Branch / View Pattern

const LoadingView = () => <div>Purring...</div>;
const ErrorView = () => <div>Sorry, error found.</div>;
const CatView = ({ name, breed, id }) => (
  <div>
    <h2>{name}</h2>
    <div>Breed: {breed}</div>
    <div>ID: {id}</div>
  </div>
);

const CatBranch = ({ loading, cat }) => {
  if (loading) {
    return <LoadingView />;
  } else if (cat) {
    return <CatView {...cat} />;
  }
  return <ErrorView />;
};

class CatContainer extends React.Component {
  state = { loading: true };
  componentDidMount() {
    fetch("https://api.lol.com/cats/5")
      .then(res => res.json())
      .then(cat => this.setState({ loading: false, cat }))
      .catch(error => this.setState({ loading: false, error }));
  }
  render() {
    return <CatBranch {...this.state} />;
  }
}

// Higher-Order Component (HOC)

const withCat = CatViewComponent =>
  class extends React.Component {
    state = { loading: true };
    componentDidMount() {
      fetch("https://api.lol.com/cats/5")
        .then(res => res.json())
        .then(cat => this.setState({ loading: false, cat }))
        .catch(error => this.setState({ loading: false, error }));
    }
    render() {
      return <CatViewComponent {...this.state} />;
    }
  };

// Render Props

class CatRenderProps extends React.Component {
  state = { loading: true };
  componentDidMount() {
    fetch("https://api.lol.com/cats/5")
      .then(res => res.json())
      .then(cat => this.setState({ loading: false, cat }))
      .catch(error => this.setState({ loading: false, error }));
  }
  render() {
    return this.props.render(this.state);
  }
}

const funcRP = () => (
  <CatRenderProps
    render={({ loading, error, cat }) => {
      if (loading) {
        return <LoadingView />;
      } else if (cat) {
        return <CatView {...cat} />;
      }
      return <ErrorView />;
    }}
  />
);

// Branching Render Props

class CatRenderPropsVariation extends React.Component {
  state = { loading: true };

  componentDidMount() {
    fetch("https://api.lol.com/cats/5")
      .then(res => res.json())
      .then(cat => this.setState({ loading: false, cat }))
      .catch(error => this.setState({ loading: false, error }));
  }
  render() {
    if (this.state.loading) {
      return this.props.renderLoading();
    } else if (this.state.cat) {
      return this.props.renderCat(this.state.cat);
    }
    return this.props.renderError(this.state.error);
  }
}

const funcRPVar = () => (
  <CatRenderPropsVariation
    renderLoading={() => <LoadingView />}
    renderError={() => <ErrorView />}
    renderCat={cat => <CatView {...cat} />}
  />
);

// Provider Pattern

const contextTypes = {
  catComp: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.object,
    cat: PropTypes.shape({
      name: PropTypes.string,
      breed: PropTypes.string,
      id: PropTypes.string
    })
  })
};

class CatProvider extends React.Component {
  state = { loading: true };

  componentDidMount() {
    fetch("https://api.lol.com/cats/5")
      .then(res => res.json())
      .then(cat => this.setState({ loading: false, cat }))
      .catch(error => this.setState({ loading: false, error }));
  }
  static childContextTypes = contextTypes;

  getChildContext() {
    return { catComp: this.state };
  }
  render() {
    return this.prop.children;
  }
}

const withCatComp = CatViewComponent =>
  class extends React.Component {
    static contextTypes = contextTypes;

    render() {
      const { props, context } = this;
      return <CatViewComponent {...props} {...context.catComp} />;
    }
  };

const CatComp = withCatComp(View);
const CatRp = ({ render }, { cat }) => render(cat);
CatRp.contextTypes = contextTypes;

class App extends React.Component {
  render() {
    return (
      <CatProvider>
        <CatComp />
        <CatComp />
        <CatComp />
        <CatRp render={props => <View {...props} />} />
        <CatRp render={props => <View {...props} />} />
        <CatRp render={props => <View {...props} />} />
      </CatProvider>
    );
  }
}

// Bad Code
const sampleComp = () => (isTrue ? <p>{isTrue}</p> : null);

// Good Code
const goodSampleComp = () => isTrue && <p>{isTrue}</p>;

// Bad Code
const sampleComponent = () => (
  <div>{flag && flag2 && !flag3 ? flag4 ? <p>Blah</p> : flag5 ? <p>Meh</p> : <p>Herp</p> : <p>Derp</p>}</div>
);

// Good Code
const goodSampleComponent = () => (
  <div>
    {(() => {
      if (flag && flag2 && !flag3) {
        if (flag4) {
          return <p>Blah</p>;
        } else if (flag5) {
          return <p>Meh</p>;
        }
        return <p>Herp</p>;
      }
      return <p>Derp</p>;
    })()}
  </div>
);

// Best Code
const bestSampleComponent = () => {
  const basicCondition = flag && flag2 && !flag3;
  if (!basicCondition) return <p>Derp</p>;
  if (flag4) return <p>Blah</p>;
  if (flag5) return <p>Meh</p>;
  return <p>Herp</p>;
};

// React Dependency Injection
const title = "React Dependency Injection";
function inject(comp) {
  return class Injector extends React.Component {
    render() {
      return <Component {...this.state} {...this.props} title={title} />;
    }
  };
}

function Title(props) {
  return <h1>{props.title}</h1>;
}

const EnhancedTitle = inject(Title);
function Header() {
  return (
    <header>
      <EnhancedTitle />
    </header>
  );
}

// React Context
const context = { title: "React in patterns" };
class ContextApp extends React.Component {
  getChildContext() {
    return context;
  }
}

ContextApp.childContextTypes = {
  title: PropTypes.string
};

class Inject extends React.Component {
  render() {
    const { title } = this.context;
  }
}

Inject.contextTypes = {
  title: PropTypes.string
};

// Context Wrapper
const deps = {
  data: {},
  get(key) {
    return this.data[key];
  },
  register(key, val) {
    this.data[key] = val;
  }
};

deps.register("title", "React in patterns");

class ContextWrapperApp extends React.Component {
  getChildContext() {
    return deps;
  }
  render() {
    return <Header />;
  }
}

ContextWrapperApp.childContextTypes = {
  data: PropTypes.object,
  get: PropTypes.func,
  register: PropTypes.func
};

class ContextWrapperTitle extends React.Component {
  render() {
    return <h1>{this.context.get("title")}</h1>;
  }
}

ContextWrapperTitle.contextTypes = {
  data: PropTypes.object,
  get: PropTypes.func,
  register: PropTypes.func
};

function WiredTitle(props) {
  return <h1>{props.title}</h1>;
}

wire(WiredTitle, ["title"], wiredTtitle => ({ wiredTtitle }));

function wire(Component, dependencies, mapper) {
  class WiredInject extends React.Component {
    render() {
      const resolved = dependencies.map(this.context.get.bind(this.context));
      const props = mapper(...resolved);

      return <Component {...props} />;
    }
  }

  WiredInject.contextTypes = {
    data: PropTypes.object,
    get: PropTypes.func,
    register: PropTypes.func
  };

  return WiredInject;
}

// Non-context alternative
const depsObj = {};

function register(key, dep) {
  depsObj[key] = dep;
}

function fetch(key) {
  if (key in depsObj) {
    return depsObj[key];
  }
  throw new Error(`${key} is not registered as a dependency.`);
}

function wireNonContext(Component, dependencies, mapper) {
  return class Injector extends React.Component {
    constructor(props) {
      super(props);
      this.resolvedDeps = mapper(...dependencies.map(fetch));
    }
    render() {
      return <Component {...this.state} {...this.props} {...this.resolvedDeps} />;
    }
  };
}

// Flux Pattern
const Dispatcher = function() {
  return {
    _stores: [],
    register(store) {
      if (!store || !store.update || typeof store.update !== "function") {
        throw new Error("You should provide a store that has an update method.");
      } else {
        const consumers = [];
        const change = function() {
          consumers.forEach(c => {
            c(store);
          });
        };
        const subscribe = function(consumer, noInit) {
          consumers.push(consumer);

          if (!noInit) {
            consumer(store);
          }
        };

        this._stores.push({ store, change });
        return subscribe;
      }
      return false;
    },
    dispatch(action) {
      if (this._stores.length > 0) {
        this._stores.forEach(entry => {
          entry.store.update(action, entry.change);
        });
      }
    }
  };
};

const exportObj = {
  create() {
    const dispatcher = new Dispatcher();
    return {
      createAction(type) {
        if (!type) {
          throw new Error("Please, provide action's type");
        } else {
          return function(payload) {
            return dispatcher.dispatch({ type, payload });
          };
        }
      },
      createSubscriber(store) {
        return dispatcher.register(store);
      }
    };
  }
};

// Unidirectional data flow
const Store = {
  _handlers: [],
  _flag: "",
  onChange(handler) {
    this._handlers.push(handler);
  },
  set(val) {
    this._flag = val;
    this._handlers.forEach(handler => handler());
  },
  get() {
    return this._flag;
  }
};

class UniApp extends React.Component {
  constructor(props) {
    super(props);
    Store.onChange(this.forceUpdate.bind(this));
  }
  render() {
    return (
      <div>
        <Switcher value={Store.get()} onChange={Store.set.bind(Store)} />
      </div>
    );
  }
}
class Switcher extends React.Component {
  constructor(props) {
    super(props);
    this._onButtonClick = e => {
      this.props.onChange(!this.props.value);
    };
  }
  render() {
    return <button onClick={this._onButtonClick}>{this.props.value ? "lights on" : "lights off"}</button>;
  }
}

// Presentational vs Container

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: this.props.time };
    this._update = this._updateTime.bind(this);
  }
  render() {
    const time = this._formatTime(this.state.time);
    return (
      <h1>
        {time.hours}:{time.minutes}:{time.seconds}
      </h1>
    );
  }
  componentDidMount() {
    this._interval = setInterval(this._update, 1000);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  _formatTime(time) {
    const [hours, minutes, seconds] = [time.getHours(), time.getMinutes(), time.getSeconds()].map(
      num => (num < 10 ? `0${num}` : num)
    );
    return { hours, minutes, seconds };
  }
  _updateTime() {
    this.setState({ time: new Date(this.state.time.getTime() + 1000) });
  }
}

ReactDOM.render(<Clock time={new Date()} />, document.getElementById("root"));

class ClockContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: props.time };
    this._update = this._updateTime.bind(this);
  }
  render() {
    return <PresentationalClock {...this._extract(this.state.time)} />;
  }
  componentDidMount() {
    this._interval = setInterval(this._update, 1000);
  }
  componentWillUnmount() {
    clearInterval(this._interval);
  }
  _extract(time) {
    return {
      hours: time.getHours(),
      minutes: time.getMinutes(),
      seconds: time.getSeconds()
    };
  }
  _updateTime() {
    this.setState({ time: new Date(this.state.time.getTime() + 1000) });
  }
}

function PresentationalClock(props) {
  const [hours, minutes, seconds] = [props.hours, props.minutes, props.seconds].map(
    num => (num < 10 ? `0${num}` : num)
  );
  return (
    <h1>
      {hours}:{minutes}:{seconds}
    </h1>
  );
}

class ClockContainerNice extends React.Component {
  render() {
    return <PresentationalClock />;
  }
}

function withContainer(comp) {
  return class Container extends React.Component {
    render() {
      return <Comp />;
    }
  };
}

// Third Party Integration
class ThirdPartyApp extends React.Component {
  constructor(props) {
    super(props);

    this._addNewTag = this._addNewTag.bind(this);
    this.state = {
      tags: ["Javascript", "CSS"],
      newTag: null
    };
  }
  _addNewTag() {
    this.setState({ newTag: this.refs.field.value });
  }
  render() {
    return (
      <div>
        <p>Add new tag:</p>
        <div>
          <input type="text" ref="field" />
          <button onClick={this._addNewTag}>Add</button>
        </div>
        <Tags tags={this.state.tags} newTag={this.state.newTag} />
      </div>
    );
  }
}

class Tags extends React.Component {
  componentDidMount() {
    this.list = $(this.refs.list);
    this.list.tagIt();
  }
  shouldComponentUpdate() {
    return false;
  }
  componentWillReceiveProps(newProps) {
    this.list.tagIt("createTag", newProps.newTag);
  }
  render() {
    return <ul ref="list">{this.props.tags.map((tag, i) => <li key={i}>{tag}</li>)}</ul>;
  }
}

// Feature Flags
function createFeatureFlaggedContent({ featureName, enabledComp, disabledComp }) {
  function FeatureFlaggedContainer({ isEnabled, ...props }) {
    const Comp = isEnabled ? enabledComp : disabledComp;

    if (Comp) {
      return <Comp {...props} />;
    }
    return null;
  }

  FeatureFlaggedContainer.displayName = `FeatureFlaggedContainer(${featureName})`;

  return connect(store => ({ isEnabled: isFeatureEnabled(store, featureName) }))(FeatureFlaggedContainer);
}
function EnabledFeature({ isEnabled, children }) {
  if (isEnabled) {
    return children;
  }
  return null;
}

connect((store, { name }) => ({ isEnabled: isFeatureEnabled(store, name) }))(EnabledFeature);

function enabledFeature(featureName) {
  return Comp =>
    createFeatureFlaggedContent({
      featureName,
      enabledComp: Comp,
      disabledComp: "404 Page not found"
    });
}

const BOOTSTAP = "features/receive";

function featuresReducer(state, { type, payload }) {
  if (type === BOOTSTAP) {
    return payload.features || [];
  }

  return state || [];
}

function isFeatureEnabled(features, featureName) {
  return features.indexOf(featureName) !== -1;
}

combineReducers({
  features
});

function isFeatureEnabledNice({ features }, featureName) {
  return isFeatureEnabledSelector(features, featureName);
}

// Component Switch
const PAGES = {
  home: HomePage,
  about: AboutPage,
  user: UserPage
};

const Page = props => {
  const Handler = PAGES[props.page] || FourOhFourPage;

  return <Handler {...props} />;
};

Page.propTypes = {
  page: PropTypes.oneOf(Object.keys(PAGES)).isRequired
};

// Reaching Into Component
class Input extends React.Component {
  focus() {
    this.el.focus();
  }
  render() {
    return (
      <input
        ref={el => {
          this.el = el;
        }}
      />
    );
  }
}

class SignInModal extends React.Component {
  componentDidMount() {
    this.InputComponent.focus();
  }
  render() {
    return (
      <div>
        <label>User name:</label>
        <Input
          ref={comp => {
            this.InputComponent = comp;
          }}
        />
      </div>
    );
  }
}

// Lists Components
const SearchSuggestions = props => {
  const renderSearchSuggestion = listItem => (
    <li key={listItem.id}>
      {listItem.name} {listItem.id}
      {}
    </li>
  );

  return <ul>{props.listItems.map(renderSearchSuggestion)}</ul>;
};

// Format Text via Component (With Component)
const Price = props => {
  const price = props.children.toLocaleString("en", {
    style: props.showSymbol ? "currency" : undefined,
    currency: props.showSymbol ? "USD" : undefined,
    maximumFractionDigits: props.showDecimals ? 2 : 0
  });
  return <span className={props.className}>{price}</span>;
};

Price.propTypes = {
  className: PropTypes.string,
  children: PropTypes.number,
  showDecimals: PropTypes.bool,
  showSymbol: PropTypes.bool
};

Price.defaultProps = {
  children: 0,
  showDecimals: true,
  showSymbol: true
};

const Page = () => {
  const lambPrice = 1234.567;
  const jetPrice = 999999.99;
  const bootPrice = 34.567;

  return (
    <div>
      <p>
        One lamb is <Price className="expensive">{lambPrice}</Price>
      </p>
      <p>
        One jet is <Price showDecimals={false}>{jetPrice}</Price>
      </p>
      <p>
        Those gumboots will set ya back{" "}
        <Price showDecimals={false} showSymbol={false}>
          {bootPrice}
        </Price>{" "}
        bucks.
      </p>
    </div>
  );
};

// Format Text via Component (Without Component)
function numberToPrice(num, options = {}) {
  const showSymbol = options.showSymbol !== false;
  const showDecimals = options.showDecimals !== false;

  return num.toLocaleString("en", {
    style: showSymbol ? "currency" : undefined,
    currency: showSymbol ? "USD" : undefined,
    maximumFractionDigits: showDecimals ? 2 : 0
  });
}

const PageWithout = () => {
  const lambPrice = 1234.567;
  const jetPrice = 999999.99;
  const bootPrice = 34.567;

  return (
    <div>
      <p>
        One lamb is <span className="expensive">{numberToPrice(lambPrice)}</span>
      </p>
      <p>One jet is {numberToPrice(jetPrice, { showDecimals: false })}</p>
      <p>Those gumboots will set ya back {numberToPrice(jetPrice, { showDecimals: false, showSymbol: false })}</p>
    </div>
  );
};

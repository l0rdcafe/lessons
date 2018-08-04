// Vanilla / Mixed Pattern

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

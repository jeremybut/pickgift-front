import { Component, PropTypes, Children } from 'react';
import { connect } from 'react-redux';
import Polyglot from 'node-polyglot';
// import en from '../i18n/en.json';
import fr from '../i18n/fr.json';

class I18nProvider extends Component {
  static childContextTypes = {
    t: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      polyglot: new Polyglot({
        // locale: this.props.ui.userPreferences.locale,
        locale: 'fr',
        phrases: this.getPhrases(),
      }),
    };
    this.t = this.t.bind(this);
    this.getPhrases = this.getPhrases.bind(this);
  }

  componentDidUpdate(prevProps) {
    // if (prevProps.ui.userPreferences.locale !==
    //   this.props.ui.userPreferences.locale) {
    this.setState({
      polyglot: new Polyglot({
        // locale: this.props.ui.userPreferences.locale,
        locale: 'fr',
        phrases: this.getPhrases(),
      }),
    });
    // }
  }

  getPhrases() {
    // switch (this.props.ui.userPreferences.locale) {
    //   case 'fr':
    return fr;
    //   case 'en':
    //   default:
    //     return en;
    // }
  }

  t(string, options = null) {
    return this.state.polyglot.t(string, options);
  }

  getChildContext() {
    return { t: this.t };
  }

  render() {
    return Children.only(this.props.children);
  }
}

const mapStateToProps = state => ({
  ui: state.ui,
});

export default connect(mapStateToProps, null)(I18nProvider);

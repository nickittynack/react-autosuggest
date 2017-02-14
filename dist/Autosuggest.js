'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

<<<<<<< HEAD
=======
var _reactRedux = require('react-redux');

>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
var _arrays = require('shallow-equal/arrays');

var _arrays2 = _interopRequireDefault(_arrays);

<<<<<<< HEAD
=======
var _redux = require('./redux');

>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
var _reactAutowhatever = require('react-autowhatever');

var _reactAutowhatever2 = _interopRequireDefault(_reactAutowhatever);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

<<<<<<< HEAD
var alwaysTrue = function alwaysTrue() {
  return true;
};
var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions(value) {
  return value.trim().length > 0;
};
var defaultTheme = {
  container: 'react-autosuggest__container',
  containerOpen: 'react-autosuggest__container--open',
  input: 'react-autosuggest__input',
  suggestionsContainer: 'react-autosuggest__suggestions-container',
  suggestionsList: 'react-autosuggest__suggestions-list',
  suggestion: 'react-autosuggest__suggestion',
  suggestionFocused: 'react-autosuggest__suggestion--focused',
  sectionContainer: 'react-autosuggest__section-container',
  sectionTitle: 'react-autosuggest__section-title'
};

var mapToAutowhateverTheme = function mapToAutowhateverTheme(theme) {
  var result = {};

  for (var key in theme) {
    switch (key) {
      case 'suggestionsContainer':
        result['itemsContainer'] = theme[key];
        break;

      case 'suggestion':
        result['item'] = theme[key];
        break;

      case 'suggestionFocused':
        result['itemFocused'] = theme[key];
        break;

      case 'suggestionsList':
        result['itemsList'] = theme[key];
        break;

      default:
        result[key] = theme[key];
    }
  }

  return result;
};

var Autosuggest = function (_Component) {
  _inherits(Autosuggest, _Component);

  function Autosuggest(_ref) {
    var alwaysRenderSuggestions = _ref.alwaysRenderSuggestions;

    _classCallCheck(this, Autosuggest);

    var _this = _possibleConstructorReturn(this, (Autosuggest.__proto__ || Object.getPrototypeOf(Autosuggest)).call(this));

    _initialiseProps.call(_this);

    _this.state = {
      isFocused: false,
      isCollapsed: !alwaysRenderSuggestions,
      focusedSectionIndex: null,
      focusedSuggestionIndex: null,
      valueBeforeUpDown: null
    };

    _this.justPressedUpDown = false;
    return _this;
=======
function mapStateToProps(state) {
  return {
    isFocused: state.isFocused,
    isCollapsed: state.isCollapsed,
    focusedSectionIndex: state.focusedSectionIndex,
    focusedSuggestionIndex: state.focusedSuggestionIndex,
    valueBeforeUpDown: state.valueBeforeUpDown
  };
}

var Autosuggest = function (_Component) {
  _inherits(Autosuggest, _Component);

  function Autosuggest() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Autosuggest);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Autosuggest.__proto__ || Object.getPrototypeOf(Autosuggest)).call.apply(_ref, [this].concat(args))), _this), _this.onDocumentMouseDown = function (event) {
      _this.justClickedOnSuggestionsContainer = false;

      var node = event.detail.target || // This is for testing only. Please show be a better way to emulate this.
      event.target;

      do {
        if (node.getAttribute('data-suggestion-index') !== null) {
          // Suggestion was clicked
          return;
        }

        if (node === _this.suggestionsContainer) {
          // Something else inside suggestions container was clicked
          _this.justClickedOnSuggestionsContainer = true;
          return;
        }

        node = node.parentNode;
      } while (node !== null && node !== document);
    }, _this.storeReferences = function (autowhatever) {
      if (autowhatever !== null) {
        var input = autowhatever.input;


        _this.input = input;
        _this.props.inputRef(input);

        _this.suggestionsContainer = autowhatever.itemsContainer;
      }
    }, _this.onSuggestionMouseEnter = function (event, _ref2) {
      var sectionIndex = _ref2.sectionIndex;
      var itemIndex = _ref2.itemIndex;

      _this.props.updateFocusedSuggestion(sectionIndex, itemIndex);
    }, _this.resetFocusedSuggestion = function () {
      _this.props.updateFocusedSuggestion(null, null);
    }, _this.focusFirstSuggestion = function () {
      _this.props.updateFocusedSuggestion(_this.props.multiSection ? 0 : null, 0);
    }, _this.onSuggestionMouseDown = function () {
      _this.justSelectedSuggestion = true;
    }, _this.onSuggestionsClearRequested = function () {
      var onSuggestionsClearRequested = _this.props.onSuggestionsClearRequested;


      onSuggestionsClearRequested && onSuggestionsClearRequested();
    }, _this.onSuggestionSelected = function (event, data) {
      var _this$props = _this.props;
      var alwaysRenderSuggestions = _this$props.alwaysRenderSuggestions;
      var onSuggestionSelected = _this$props.onSuggestionSelected;
      var onSuggestionsFetchRequested = _this$props.onSuggestionsFetchRequested;


      onSuggestionSelected && onSuggestionSelected(event, data);

      if (alwaysRenderSuggestions) {
        onSuggestionsFetchRequested({ value: data.suggestionValue });
      } else {
        _this.onSuggestionsClearRequested();
      }

      _this.resetFocusedSuggestion();
    }, _this.onSuggestionClick = function (event) {
      var _this$props2 = _this.props;
      var alwaysRenderSuggestions = _this$props2.alwaysRenderSuggestions;
      var focusInputOnSuggestionClick = _this$props2.focusInputOnSuggestionClick;
      var closeSuggestions = _this$props2.closeSuggestions;

      var _this$getSuggestionIn = _this.getSuggestionIndices(_this.findSuggestionElement(event.target));

      var sectionIndex = _this$getSuggestionIn.sectionIndex;
      var suggestionIndex = _this$getSuggestionIn.suggestionIndex;

      var clickedSuggestion = _this.getSuggestion(sectionIndex, suggestionIndex);
      var clickedSuggestionValue = _this.props.getSuggestionValue(clickedSuggestion);

      _this.maybeCallOnChange(event, clickedSuggestionValue, 'click');
      _this.onSuggestionSelected(event, {
        suggestion: clickedSuggestion,
        suggestionValue: clickedSuggestionValue,
        sectionIndex: sectionIndex,
        method: 'click'
      });

      if (!alwaysRenderSuggestions) {
        closeSuggestions();
      }

      if (focusInputOnSuggestionClick === true) {
        _this.input.focus();
      } else {
        _this.onBlur();
      }

      setTimeout(function () {
        _this.justSelectedSuggestion = false;
      });
    }, _this.onBlur = function () {
      var _this$props3 = _this.props;
      var inputProps = _this$props3.inputProps;
      var shouldRenderSuggestions = _this$props3.shouldRenderSuggestions;
      var inputBlurred = _this$props3.inputBlurred;
      var value = inputProps.value;
      var onBlur = inputProps.onBlur;

      var focusedSuggestion = _this.getFocusedSuggestion();

      inputBlurred(shouldRenderSuggestions(value));
      onBlur && onBlur(_this.blurEvent, { focusedSuggestion: focusedSuggestion });
    }, _this.itemProps = function (_ref3) {
      var sectionIndex = _ref3.sectionIndex;
      var itemIndex = _ref3.itemIndex;

      return {
        'data-section-index': sectionIndex,
        'data-suggestion-index': itemIndex,
        onMouseEnter: _this.onSuggestionMouseEnter,
        onMouseLeave: _this.resetFocusedSuggestion,
        onMouseDown: _this.onSuggestionMouseDown,
        onTouchStart: _this.onSuggestionMouseDown, // Because on iOS `onMouseDown` is not triggered
        onClick: _this.onSuggestionClick
      };
    }, _temp), _possibleConstructorReturn(_this, _ret);
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
  }

  _createClass(Autosuggest, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.onDocumentMouseDown);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ((0, _arrays2.default)(nextProps.suggestions, this.props.suggestions)) {
<<<<<<< HEAD
        if (nextProps.focusFirstSuggestion && nextProps.suggestions.length > 0 && this.justPressedUpDown === false) {
=======
        if (nextProps.focusFirstSuggestion && nextProps.suggestions.length > 0 && nextProps.focusedSuggestionIndex === null && nextProps.inputProps.value !== this.props.inputProps.value && nextProps.valueBeforeUpDown === this.props.valueBeforeUpDown) {
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
          this.focusFirstSuggestion();
        }
      } else {
        if (this.willRenderSuggestions(nextProps)) {
          if (nextProps.focusFirstSuggestion) {
            this.focusFirstSuggestion();
          }

<<<<<<< HEAD
          if (this.state.isCollapsed && !this.justSelectedSuggestion) {
            this.revealSuggestions();
          }
        } else {
          this.resetFocusedSuggestion();
=======
          var isCollapsed = nextProps.isCollapsed;
          var revealSuggestions = nextProps.revealSuggestions;


          if (isCollapsed && !this.justSelectedSuggestion) {
            revealSuggestions();
          }
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.onDocumentMouseDown);
    }
  }, {
<<<<<<< HEAD
    key: 'inputFocused',
    value: function inputFocused(shouldRender) {
      this.setState({
        isFocused: true,
        isCollapsed: !shouldRender
      });
    }
  }, {
    key: 'inputBlurred',
    value: function inputBlurred(shouldRender) {
      this.setState({
        isFocused: false,
        focusedSectionIndex: null,
        focusedSuggestionIndex: null,
        valueBeforeUpDown: null,
        isCollapsed: !shouldRender
      });
    }
  }, {
    key: 'inputChanged',
    value: function inputChanged(shouldRender) {
      this.setState({
        focusedSectionIndex: null,
        focusedSuggestionIndex: null,
        valueBeforeUpDown: null,
        isCollapsed: !shouldRender
      });
    }
  }, {
    key: 'updateFocusedSuggestion',
    value: function updateFocusedSuggestion(sectionIndex, suggestionIndex, prevValue) {
      var valueBeforeUpDown = this.state.valueBeforeUpDown;


      if (suggestionIndex === null) {
        valueBeforeUpDown = null;
      } else if (valueBeforeUpDown === null && typeof prevValue !== 'undefined') {
        valueBeforeUpDown = prevValue;
      }

      this.setState({
        focusedSectionIndex: sectionIndex,
        focusedSuggestionIndex: suggestionIndex,
        valueBeforeUpDown: valueBeforeUpDown
      });
    }
  }, {
    key: 'resetFocusedSuggestion',
    value: function resetFocusedSuggestion() {
      var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      var valueBeforeUpDown = this.state.valueBeforeUpDown;


      this.setState({
        focusedSectionIndex: null,
        focusedSuggestionIndex: null,
        valueBeforeUpDown: shouldResetValueBeforeUpDown ? null : valueBeforeUpDown
      });
    }
  }, {
    key: 'revealSuggestions',
    value: function revealSuggestions() {
      this.setState({
        isCollapsed: false
      });
    }
  }, {
    key: 'closeSuggestions',
    value: function closeSuggestions() {
      this.setState({
        focusedSectionIndex: null,
        focusedSuggestionIndex: null,
        valueBeforeUpDown: null,
        isCollapsed: true
      });
    }
  }, {
    key: 'getSuggestion',
    value: function getSuggestion(sectionIndex, suggestionIndex) {
      var _props = this.props,
          suggestions = _props.suggestions,
          multiSection = _props.multiSection,
          getSectionSuggestions = _props.getSectionSuggestions;
=======
    key: 'getSuggestion',
    value: function getSuggestion(sectionIndex, suggestionIndex) {
      var _props = this.props;
      var suggestions = _props.suggestions;
      var multiSection = _props.multiSection;
      var getSectionSuggestions = _props.getSectionSuggestions;
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1


      if (multiSection) {
        return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
      }

      return suggestions[suggestionIndex];
    }
  }, {
    key: 'getFocusedSuggestion',
    value: function getFocusedSuggestion() {
<<<<<<< HEAD
      var _state = this.state,
          focusedSectionIndex = _state.focusedSectionIndex,
          focusedSuggestionIndex = _state.focusedSuggestionIndex;
=======
      var _props2 = this.props;
      var focusedSectionIndex = _props2.focusedSectionIndex;
      var focusedSuggestionIndex = _props2.focusedSuggestionIndex;
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1


      if (focusedSuggestionIndex === null) {
        return null;
      }

      return this.getSuggestion(focusedSectionIndex, focusedSuggestionIndex);
    }
  }, {
    key: 'getSuggestionValueByIndex',
    value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
      var getSuggestionValue = this.props.getSuggestionValue;


      return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
    }
  }, {
    key: 'getSuggestionIndices',
    value: function getSuggestionIndices(suggestionElement) {
      var sectionIndex = suggestionElement.getAttribute('data-section-index');
      var suggestionIndex = suggestionElement.getAttribute('data-suggestion-index');

      return {
        sectionIndex: typeof sectionIndex === 'string' ? parseInt(sectionIndex, 10) : null,
        suggestionIndex: parseInt(suggestionIndex, 10)
      };
    }
  }, {
    key: 'findSuggestionElement',
    value: function findSuggestionElement(startNode) {
      var node = startNode;

      do {
        if (node.getAttribute('data-suggestion-index') !== null) {
          return node;
        }

        node = node.parentNode;
      } while (node !== null);

      console.error('Clicked element:', startNode); // eslint-disable-line no-console
      throw new Error('Couldn\'t find suggestion element');
    }
  }, {
    key: 'maybeCallOnChange',
    value: function maybeCallOnChange(event, newValue, method) {
<<<<<<< HEAD
      var _props$inputProps = this.props.inputProps,
          value = _props$inputProps.value,
          onChange = _props$inputProps.onChange;


      if (newValue !== value) {
        onChange(event, { newValue: newValue, method: method });
=======
      var _props$inputProps = this.props.inputProps;
      var value = _props$inputProps.value;
      var onChange = _props$inputProps.onChange;


      if (newValue !== value) {
        onChange && onChange(event, { newValue: newValue, method: method });
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
      }
    }
  }, {
    key: 'willRenderSuggestions',
    value: function willRenderSuggestions(props) {
<<<<<<< HEAD
      var suggestions = props.suggestions,
          inputProps = props.inputProps,
          shouldRenderSuggestions = props.shouldRenderSuggestions;
=======
      var suggestions = props.suggestions;
      var inputProps = props.inputProps;
      var shouldRenderSuggestions = props.shouldRenderSuggestions;
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
      var value = inputProps.value;


      return suggestions.length > 0 && shouldRenderSuggestions(value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

<<<<<<< HEAD
      var _props2 = this.props,
          suggestions = _props2.suggestions,
          renderInputComponent = _props2.renderInputComponent,
          renderSuggestionsContainer = _props2.renderSuggestionsContainer,
          onSuggestionsFetchRequested = _props2.onSuggestionsFetchRequested,
          renderSuggestion = _props2.renderSuggestion,
          inputProps = _props2.inputProps,
          multiSection = _props2.multiSection,
          renderSectionTitle = _props2.renderSectionTitle,
          id = _props2.id,
          getSectionSuggestions = _props2.getSectionSuggestions,
          theme = _props2.theme,
          getSuggestionValue = _props2.getSuggestionValue,
          alwaysRenderSuggestions = _props2.alwaysRenderSuggestions;
      var _state2 = this.state,
          isFocused = _state2.isFocused,
          isCollapsed = _state2.isCollapsed,
          focusedSectionIndex = _state2.focusedSectionIndex,
          focusedSuggestionIndex = _state2.focusedSuggestionIndex,
          valueBeforeUpDown = _state2.valueBeforeUpDown;

      var shouldRenderSuggestions = alwaysRenderSuggestions ? alwaysTrue : this.props.shouldRenderSuggestions;
      var value = inputProps.value,
          _onFocus = inputProps.onFocus,
          _onKeyDown = inputProps.onKeyDown;
=======
      var _props3 = this.props;
      var suggestions = _props3.suggestions;
      var renderSuggestionsContainer = _props3.renderSuggestionsContainer;
      var onSuggestionsFetchRequested = _props3.onSuggestionsFetchRequested;
      var renderSuggestion = _props3.renderSuggestion;
      var inputProps = _props3.inputProps;
      var shouldRenderSuggestions = _props3.shouldRenderSuggestions;
      var multiSection = _props3.multiSection;
      var renderSectionTitle = _props3.renderSectionTitle;
      var id = _props3.id;
      var getSectionSuggestions = _props3.getSectionSuggestions;
      var theme = _props3.theme;
      var isFocused = _props3.isFocused;
      var isCollapsed = _props3.isCollapsed;
      var focusedSectionIndex = _props3.focusedSectionIndex;
      var focusedSuggestionIndex = _props3.focusedSuggestionIndex;
      var valueBeforeUpDown = _props3.valueBeforeUpDown;
      var inputFocused = _props3.inputFocused;
      var inputChanged = _props3.inputChanged;
      var updateFocusedSuggestion = _props3.updateFocusedSuggestion;
      var revealSuggestions = _props3.revealSuggestions;
      var closeSuggestions = _props3.closeSuggestions;
      var getSuggestionValue = _props3.getSuggestionValue;
      var alwaysRenderSuggestions = _props3.alwaysRenderSuggestions;
      var value = inputProps.value;
      var _onFocus = inputProps.onFocus;
      var _onKeyDown = inputProps.onKeyDown;
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1

      var willRenderSuggestions = this.willRenderSuggestions(this.props);
      var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
      var items = isOpen ? suggestions : [];
      var autowhateverInputProps = _extends({}, inputProps, {
        onFocus: function onFocus(event) {
          if (!_this2.justSelectedSuggestion && !_this2.justClickedOnSuggestionsContainer) {
<<<<<<< HEAD
            var shouldRender = shouldRenderSuggestions(value);

            _this2.inputFocused(shouldRender);
            _onFocus && _onFocus(event);

            if (shouldRender) {
=======
            inputFocused(shouldRenderSuggestions(value));
            _onFocus && _onFocus(event);

            if (shouldRenderSuggestions(value)) {
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
              onSuggestionsFetchRequested({ value: value });
            }
          }
        },
        onBlur: function onBlur(event) {
          if (_this2.justClickedOnSuggestionsContainer) {
            _this2.input.focus();
            return;
          }

          _this2.blurEvent = event;

          if (!_this2.justSelectedSuggestion) {
            _this2.onBlur();
            _this2.onSuggestionsClearRequested();
          }
        },
<<<<<<< HEAD
        onInput: function onInput(event) {
=======
        onChange: function onChange(event) {
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
          var value = event.target.value;

          var shouldRender = shouldRenderSuggestions(value);

          _this2.maybeCallOnChange(event, value, 'type');
<<<<<<< HEAD
          _this2.inputChanged(shouldRender);
=======
          inputChanged(shouldRender);
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1

          if (shouldRender) {
            onSuggestionsFetchRequested({ value: value });
          } else {
            _this2.onSuggestionsClearRequested();
          }
        },
        onKeyDown: function onKeyDown(event, data) {
          switch (event.key) {
            case 'ArrowDown':
            case 'ArrowUp':
              if (isCollapsed) {
                if (shouldRenderSuggestions(value)) {
                  onSuggestionsFetchRequested({ value: value });
<<<<<<< HEAD
                  _this2.revealSuggestions();
                }
              } else if (suggestions.length > 0) {
                var newFocusedSectionIndex = data.newFocusedSectionIndex,
                    newFocusedItemIndex = data.newFocusedItemIndex;
=======
                  revealSuggestions();
                }
              } else if (suggestions.length > 0) {
                var newFocusedSectionIndex = data.newFocusedSectionIndex;
                var newFocusedItemIndex = data.newFocusedItemIndex;
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1


                var newValue = void 0;

                if (newFocusedItemIndex === null) {
                  // valueBeforeUpDown can be null if, for example, user
                  // hovers on the first suggestion and then pressed Up.
                  // If that happens, use the original input value.
                  newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
                } else {
                  newValue = _this2.getSuggestionValueByIndex(newFocusedSectionIndex, newFocusedItemIndex);
                }

<<<<<<< HEAD
                _this2.updateFocusedSuggestion(newFocusedSectionIndex, newFocusedItemIndex, value);
=======
                updateFocusedSuggestion(newFocusedSectionIndex, newFocusedItemIndex, value);
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
                _this2.maybeCallOnChange(event, newValue, event.key === 'ArrowDown' ? 'down' : 'up');
              }

              event.preventDefault(); // Prevents the cursor from moving

<<<<<<< HEAD
              _this2.justPressedUpDown = true;

              setTimeout(function () {
                _this2.justPressedUpDown = false;
              });

=======
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
              break;

            case 'Enter':
              {
                var focusedSuggestion = _this2.getFocusedSuggestion();

                if (isOpen && !alwaysRenderSuggestions) {
<<<<<<< HEAD
                  _this2.closeSuggestions();
=======
                  closeSuggestions();
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
                }

                if (focusedSuggestion !== null) {
                  var _newValue = getSuggestionValue(focusedSuggestion);

<<<<<<< HEAD
                  _this2.maybeCallOnChange(event, _newValue, 'enter');

                  _this2.onSuggestionSelected(event, {
                    suggestion: focusedSuggestion,
                    suggestionValue: _newValue,
                    suggestionIndex: focusedSuggestionIndex,
=======
                  _this2.onSuggestionSelected(event, {
                    suggestion: focusedSuggestion,
                    suggestionValue: _newValue,
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
                    sectionIndex: focusedSectionIndex,
                    method: 'enter'
                  });

<<<<<<< HEAD
=======
                  _this2.maybeCallOnChange(event, _newValue, 'enter');

>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
                  _this2.justSelectedSuggestion = true;

                  setTimeout(function () {
                    _this2.justSelectedSuggestion = false;
                  });
                }

                break;
              }

            case 'Escape':
              {
                if (isOpen) {
                  // If input.type === 'search', the browser clears the input
                  // when Escape is pressed. We want to disable this default
                  // behaviour so that, when suggestions are shown, we just hide
                  // them, without clearing the input.
                  event.preventDefault();
                }

                var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;

                if (valueBeforeUpDown === null) {
                  // Didn't interact with Up/Down
                  if (!willCloseSuggestions) {
                    var _newValue2 = '';

                    _this2.maybeCallOnChange(event, _newValue2, 'escape');

                    if (shouldRenderSuggestions(_newValue2)) {
                      onSuggestionsFetchRequested({ value: _newValue2 });
                    } else {
                      _this2.onSuggestionsClearRequested();
                    }
                  }
                } else {
                  // Interacted with Up/Down
                  _this2.maybeCallOnChange(event, valueBeforeUpDown, 'escape');
                }

                if (willCloseSuggestions) {
                  _this2.onSuggestionsClearRequested();
<<<<<<< HEAD
                  _this2.closeSuggestions();
                } else {
                  _this2.resetFocusedSuggestion();
=======
                  closeSuggestions();
                } else {
                  updateFocusedSuggestion(null, null);
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
                }

                break;
              }
          }

          _onKeyDown && _onKeyDown(event);
        }
      });
      var renderSuggestionData = {
        query: (valueBeforeUpDown || value).trim()
      };

      return _react2.default.createElement(_reactAutowhatever2.default, {
        multiSection: multiSection,
        items: items,
<<<<<<< HEAD
        renderInputComponent: renderInputComponent,
=======
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
        renderItemsContainer: renderSuggestionsContainer,
        renderItem: renderSuggestion,
        renderItemData: renderSuggestionData,
        renderSectionTitle: renderSectionTitle,
        getSectionItems: getSectionSuggestions,
        focusedSectionIndex: focusedSectionIndex,
        focusedItemIndex: focusedSuggestionIndex,
        inputProps: autowhateverInputProps,
        itemProps: this.itemProps,
<<<<<<< HEAD
        theme: mapToAutowhateverTheme(theme),
        id: id,
        ref: this.storeReferences
      });
=======
        theme: theme,
        id: id,
        ref: this.storeReferences });
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1
    }
  }]);

  return Autosuggest;
}(_react.Component);

Autosuggest.propTypes = {
  suggestions: _react.PropTypes.array.isRequired,
<<<<<<< HEAD
  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
    var onSuggestionsFetchRequested = props[propName];

    if (typeof onSuggestionsFetchRequested !== 'function') {
      throw new Error('\'onSuggestionsFetchRequested\' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp');
    }
  },
  onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
    var onSuggestionsClearRequested = props[propName];

    if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested !== 'function') {
      throw new Error('\'onSuggestionsClearRequested\' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp');
    }
  },
  onSuggestionSelected: _react.PropTypes.func,
  renderInputComponent: _react.PropTypes.func,
  renderSuggestionsContainer: _react.PropTypes.func,
  getSuggestionValue: _react.PropTypes.func.isRequired,
  renderSuggestion: _react.PropTypes.func.isRequired,
  inputProps: function inputProps(props, propName) {
    var inputProps = props[propName];

    if (!inputProps.hasOwnProperty('value')) {
      throw new Error('\'inputProps\' must have \'value\'.');
    }

    if (!inputProps.hasOwnProperty('onChange')) {
      throw new Error('\'inputProps\' must have \'onChange\'.');
    }
  },
  shouldRenderSuggestions: _react.PropTypes.func,
  alwaysRenderSuggestions: _react.PropTypes.bool,
  multiSection: _react.PropTypes.bool,
  renderSectionTitle: function renderSectionTitle(props, propName) {
    var renderSectionTitle = props[propName];

    if (props.multiSection === true && typeof renderSectionTitle !== 'function') {
      throw new Error('\'renderSectionTitle\' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp');
    }
  },
  getSectionSuggestions: function getSectionSuggestions(props, propName) {
    var getSectionSuggestions = props[propName];

    if (props.multiSection === true && typeof getSectionSuggestions !== 'function') {
      throw new Error('\'getSectionSuggestions\' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp');
    }
  },
  focusInputOnSuggestionClick: _react.PropTypes.bool,
  focusFirstSuggestion: _react.PropTypes.bool,
  theme: _react.PropTypes.object,
  id: _react.PropTypes.string
};
Autosuggest.defaultProps = {
  shouldRenderSuggestions: defaultShouldRenderSuggestions,
  alwaysRenderSuggestions: false,
  multiSection: false,
  focusInputOnSuggestionClick: true,
  focusFirstSuggestion: false,
  theme: defaultTheme,
  id: '1'
};

var _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.onDocumentMouseDown = function (event) {
    _this3.justClickedOnSuggestionsContainer = false;

    var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
    event.target;

    do {
      if (node.getAttribute('data-suggestion-index') !== null) {
        // Suggestion was clicked
        return;
      }

      if (node === _this3.suggestionsContainer) {
        // Something else inside suggestions container was clicked
        _this3.justClickedOnSuggestionsContainer = true;
        return;
      }

      node = node.parentNode;
    } while (node !== null && node !== document);
  };

  this.storeReferences = function (autowhatever) {
    if (autowhatever !== null) {
      var input = autowhatever.input,
          itemsContainer = autowhatever.itemsContainer;


      _this3.input = input;
      _this3.suggestionsContainer = itemsContainer;
    }
  };

  this.onSuggestionMouseEnter = function (event, _ref2) {
    var sectionIndex = _ref2.sectionIndex,
        itemIndex = _ref2.itemIndex;

    _this3.updateFocusedSuggestion(sectionIndex, itemIndex);
  };

  this.focusFirstSuggestion = function () {
    _this3.updateFocusedSuggestion(_this3.props.multiSection ? 0 : null, 0);
  };

  this.onSuggestionMouseDown = function () {
    _this3.justSelectedSuggestion = true;
  };

  this.onSuggestionsClearRequested = function () {
    var onSuggestionsClearRequested = _this3.props.onSuggestionsClearRequested;


    onSuggestionsClearRequested && onSuggestionsClearRequested();
  };

  this.onSuggestionSelected = function (event, data) {
    var _props3 = _this3.props,
        alwaysRenderSuggestions = _props3.alwaysRenderSuggestions,
        onSuggestionSelected = _props3.onSuggestionSelected,
        onSuggestionsFetchRequested = _props3.onSuggestionsFetchRequested;


    onSuggestionSelected && onSuggestionSelected(event, data);

    if (alwaysRenderSuggestions) {
      onSuggestionsFetchRequested({ value: data.suggestionValue });
    } else {
      _this3.onSuggestionsClearRequested();
    }

    _this3.resetFocusedSuggestion();
  };

  this.onSuggestionClick = function (event) {
    var _props4 = _this3.props,
        alwaysRenderSuggestions = _props4.alwaysRenderSuggestions,
        focusInputOnSuggestionClick = _props4.focusInputOnSuggestionClick;

    var _getSuggestionIndices = _this3.getSuggestionIndices(_this3.findSuggestionElement(event.target)),
        sectionIndex = _getSuggestionIndices.sectionIndex,
        suggestionIndex = _getSuggestionIndices.suggestionIndex;

    var clickedSuggestion = _this3.getSuggestion(sectionIndex, suggestionIndex);
    var clickedSuggestionValue = _this3.props.getSuggestionValue(clickedSuggestion);

    _this3.maybeCallOnChange(event, clickedSuggestionValue, 'click');
    _this3.onSuggestionSelected(event, {
      suggestion: clickedSuggestion,
      suggestionValue: clickedSuggestionValue,
      suggestionIndex: suggestionIndex,
      sectionIndex: sectionIndex,
      method: 'click'
    });

    if (!alwaysRenderSuggestions) {
      _this3.closeSuggestions();
    }

    if (focusInputOnSuggestionClick === true) {
      _this3.input.focus();
    } else {
      _this3.onBlur();
    }

    setTimeout(function () {
      _this3.justSelectedSuggestion = false;
    });
  };

  this.onBlur = function () {
    var _props5 = _this3.props,
        inputProps = _props5.inputProps,
        shouldRenderSuggestions = _props5.shouldRenderSuggestions;
    var value = inputProps.value,
        onBlur = inputProps.onBlur;

    var focusedSuggestion = _this3.getFocusedSuggestion();

    _this3.inputBlurred(shouldRenderSuggestions(value));
    onBlur && onBlur(_this3.blurEvent, { focusedSuggestion: focusedSuggestion });
  };

  this.resetFocusedSuggestionOnMouseLeave = function () {
    _this3.resetFocusedSuggestion(false); // shouldResetValueBeforeUpDown
  };

  this.itemProps = function (_ref3) {
    var sectionIndex = _ref3.sectionIndex,
        itemIndex = _ref3.itemIndex;

    return {
      'data-section-index': sectionIndex,
      'data-suggestion-index': itemIndex,
      onMouseEnter: _this3.onSuggestionMouseEnter,
      onMouseLeave: _this3.resetFocusedSuggestionOnMouseLeave,
      onMouseDown: _this3.onSuggestionMouseDown,
      onTouchStart: _this3.onSuggestionMouseDown, // Because on iOS `onMouseDown` is not triggered
      onClick: _this3.onSuggestionClick
    };
  };
};

exports.default = Autosuggest;
=======
  onSuggestionsFetchRequested: _react.PropTypes.func.isRequired,
  onSuggestionsClearRequested: _react.PropTypes.func,
  onSuggestionSelected: _react.PropTypes.func,
  renderSuggestionsContainer: _react.PropTypes.func,
  getSuggestionValue: _react.PropTypes.func.isRequired,
  renderSuggestion: _react.PropTypes.func.isRequired,
  inputProps: _react.PropTypes.object.isRequired,
  shouldRenderSuggestions: _react.PropTypes.func.isRequired,
  alwaysRenderSuggestions: _react.PropTypes.bool.isRequired,
  multiSection: _react.PropTypes.bool.isRequired,
  renderSectionTitle: _react.PropTypes.func,
  getSectionSuggestions: _react.PropTypes.func,
  focusInputOnSuggestionClick: _react.PropTypes.bool.isRequired,
  focusFirstSuggestion: _react.PropTypes.bool.isRequired,
  theme: _react.PropTypes.object.isRequired,
  id: _react.PropTypes.string.isRequired,
  inputRef: _react.PropTypes.func.isRequired,

  isFocused: _react.PropTypes.bool.isRequired,
  isCollapsed: _react.PropTypes.bool.isRequired,
  focusedSectionIndex: _react.PropTypes.number,
  focusedSuggestionIndex: _react.PropTypes.number,
  valueBeforeUpDown: _react.PropTypes.string,

  inputFocused: _react.PropTypes.func.isRequired,
  inputBlurred: _react.PropTypes.func.isRequired,
  inputChanged: _react.PropTypes.func.isRequired,
  updateFocusedSuggestion: _react.PropTypes.func.isRequired,
  revealSuggestions: _react.PropTypes.func.isRequired,
  closeSuggestions: _react.PropTypes.func.isRequired
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, _redux.actionCreators)(Autosuggest);
>>>>>>> f978be3b730ea493973a8de4af96c010949353b1

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["Autosuggest"] = factory(require("React"));
	else
		root["Autosuggest"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(1).default;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _arrays = __webpack_require__(4);

	var _arrays2 = _interopRequireDefault(_arrays);

	var _reactAutowhatever = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-autowhatever\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _reactAutowhatever2 = _interopRequireDefault(_reactAutowhatever);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	        if (nextProps.focusFirstSuggestion && nextProps.suggestions.length > 0 && this.justPressedUpDown === false) {
	          this.focusFirstSuggestion();
	        }
	      } else {
	        if (this.willRenderSuggestions(nextProps)) {
	          if (nextProps.focusFirstSuggestion) {
	            this.focusFirstSuggestion();
	          }

	          if (this.state.isCollapsed && !this.justSelectedSuggestion) {
	            this.revealSuggestions();
	          }
	        } else {
	          this.resetFocusedSuggestion();
	        }
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      document.removeEventListener('mousedown', this.onDocumentMouseDown);
	    }
	  }, {
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


	      if (multiSection) {
	        return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
	      }

	      return suggestions[suggestionIndex];
	    }
	  }, {
	    key: 'getFocusedSuggestion',
	    value: function getFocusedSuggestion() {
	      var _state = this.state,
	          focusedSectionIndex = _state.focusedSectionIndex,
	          focusedSuggestionIndex = _state.focusedSuggestionIndex;


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
	      var _props$inputProps = this.props.inputProps,
	          value = _props$inputProps.value,
	          onChange = _props$inputProps.onChange;


	      if (newValue !== value) {
	        onChange(event, { newValue: newValue, method: method });
	      }
	    }
	  }, {
	    key: 'willRenderSuggestions',
	    value: function willRenderSuggestions(props) {
	      var suggestions = props.suggestions,
	          inputProps = props.inputProps,
	          shouldRenderSuggestions = props.shouldRenderSuggestions;
	      var value = inputProps.value;


	      return suggestions.length > 0 && shouldRenderSuggestions(value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

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

	      var willRenderSuggestions = this.willRenderSuggestions(this.props);
	      var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
	      var items = isOpen ? suggestions : [];
	      var autowhateverInputProps = _extends({}, inputProps, {
	        onFocus: function onFocus(event) {
	          if (!_this2.justSelectedSuggestion && !_this2.justClickedOnSuggestionsContainer) {
	            var shouldRender = shouldRenderSuggestions(value);

	            _this2.inputFocused(shouldRender);
	            _onFocus && _onFocus(event);

	            if (shouldRender) {
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
	        onInput: function onInput(event) {
	          var value = event.target.value;

	          var shouldRender = shouldRenderSuggestions(value);

	          _this2.maybeCallOnChange(event, value, 'type');
	          _this2.inputChanged(shouldRender);

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
	                  _this2.revealSuggestions();
	                }
	              } else if (suggestions.length > 0) {
	                var newFocusedSectionIndex = data.newFocusedSectionIndex,
	                    newFocusedItemIndex = data.newFocusedItemIndex;


	                var newValue = void 0;

	                if (newFocusedItemIndex === null) {
	                  // valueBeforeUpDown can be null if, for example, user
	                  // hovers on the first suggestion and then pressed Up.
	                  // If that happens, use the original input value.
	                  newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
	                } else {
	                  newValue = _this2.getSuggestionValueByIndex(newFocusedSectionIndex, newFocusedItemIndex);
	                }

	                _this2.updateFocusedSuggestion(newFocusedSectionIndex, newFocusedItemIndex, value);
	                _this2.maybeCallOnChange(event, newValue, event.key === 'ArrowDown' ? 'down' : 'up');
	              }

	              event.preventDefault(); // Prevents the cursor from moving

	              _this2.justPressedUpDown = true;

	              setTimeout(function () {
	                _this2.justPressedUpDown = false;
	              });

	              break;

	            case 'Enter':
	              {
	                var focusedSuggestion = _this2.getFocusedSuggestion();

	                if (isOpen && !alwaysRenderSuggestions) {
	                  _this2.closeSuggestions();
	                }

	                if (focusedSuggestion !== null) {
	                  var _newValue = getSuggestionValue(focusedSuggestion);

	                  _this2.maybeCallOnChange(event, _newValue, 'enter');

	                  _this2.onSuggestionSelected(event, {
	                    suggestion: focusedSuggestion,
	                    suggestionValue: _newValue,
	                    suggestionIndex: focusedSuggestionIndex,
	                    sectionIndex: focusedSectionIndex,
	                    method: 'enter'
	                  });

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
	                  _this2.closeSuggestions();
	                } else {
	                  _this2.resetFocusedSuggestion();
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
	        renderInputComponent: renderInputComponent,
	        renderItemsContainer: renderSuggestionsContainer,
	        renderItem: renderSuggestion,
	        renderItemData: renderSuggestionData,
	        renderSectionTitle: renderSectionTitle,
	        getSectionItems: getSectionSuggestions,
	        focusedSectionIndex: focusedSectionIndex,
	        focusedItemIndex: focusedSuggestionIndex,
	        inputProps: autowhateverInputProps,
	        itemProps: this.itemProps,
	        theme: mapToAutowhateverTheme(theme),
	        id: id,
	        ref: this.storeReferences
	      });
	    }
	  }]);

	  return Autosuggest;
	}(_react.Component);

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
	process.env.NODE_ENV !== "production" ? Autosuggest.propTypes = {
	  suggestions: _react.PropTypes.array.isRequired,
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
	} : void 0;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function shallowEqualArrays(arrA, arrB) {
	  if (arrA === arrB) {
	    return true;
	  }

	  var len = arrA.length;

	  if (arrB.length !== len) {
	    return false;
	  }

	  for (var i = 0; i < len; i++) {
	    if (arrA[i] !== arrB[i]) {
	      return false;
	    }
	  }

	  return true;
	};


/***/ }
/******/ ])
});
;
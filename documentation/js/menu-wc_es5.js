'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);

  var _super = _createSuper(_class);

  function _class() {
    var _this;

    _classCallCheck(this, _class);

    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }

  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">my-book-library documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-a1710576d5559274befedc1583708421712fbfb3a68c78f0c74f185e355e3e8b092724ce395cbf40b11cba74ccc015e671bfbb694d00cd2659a06731aacd6af6"' : 'data-target="#xs-components-links-module-AppModule-a1710576d5559274befedc1583708421712fbfb3a68c78f0c74f185e355e3e8b092724ce395cbf40b11cba74ccc015e671bfbb694d00cd2659a06731aacd6af6"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-a1710576d5559274befedc1583708421712fbfb3a68c78f0c74f185e355e3e8b092724ce395cbf40b11cba74ccc015e671bfbb694d00cd2659a06731aacd6af6"' : 'id="xs-components-links-module-AppModule-a1710576d5559274befedc1583708421712fbfb3a68c78f0c74f185e355e3e8b092724ce395cbf40b11cba74ccc015e671bfbb694d00cd2659a06731aacd6af6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AuthenticateComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AuthenticateComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AuthModule.html\" data-type=\"entity-link\" >AuthModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AuthModule-2a29bba5603ebc2e3417f7001bbfc3933ede0314687ba62abe659440a393a821ba67f95ded8e68772a1ebdfac7818b6fb804b993b0bc6e26d73e8d0c40f61dd6"' : 'data-target="#xs-components-links-module-AuthModule-2a29bba5603ebc2e3417f7001bbfc3933ede0314687ba62abe659440a393a821ba67f95ded8e68772a1ebdfac7818b6fb804b993b0bc6e26d73e8d0c40f61dd6"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AuthModule-2a29bba5603ebc2e3417f7001bbfc3933ede0314687ba62abe659440a393a821ba67f95ded8e68772a1ebdfac7818b6fb804b993b0bc6e26d73e8d0c40f61dd6"' : 'id="xs-components-links-module-AuthModule-2a29bba5603ebc2e3417f7001bbfc3933ede0314687ba62abe659440a393a821ba67f95ded8e68772a1ebdfac7818b6fb804b993b0bc6e26d73e8d0c40f61dd6"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LoginComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoginComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LogoutComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LogoutComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/PageNotFoundComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >PageNotFoundComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ProfileComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ProfileComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/RegisterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >RegisterComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/BooksModule.html\" data-type=\"entity-link\" >BooksModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-BooksModule-b54193ae0751a8a972abec4f4fe1b513247128baa168bde9ef58b7fa82b8c8f6039eb388a222fe5666ad4bf6b4c3a51d0abbc88b19d4106f5ac5220d87900f5b"' : 'data-target="#xs-components-links-module-BooksModule-b54193ae0751a8a972abec4f4fe1b513247128baa168bde9ef58b7fa82b8c8f6039eb388a222fe5666ad4bf6b4c3a51d0abbc88b19d4106f5ac5220d87900f5b"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-BooksModule-b54193ae0751a8a972abec4f4fe1b513247128baa168bde9ef58b7fa82b8c8f6039eb388a222fe5666ad4bf6b4c3a51d0abbc88b19d4106f5ac5220d87900f5b"' : 'id="xs-components-links-module-BooksModule-b54193ae0751a8a972abec4f4fe1b513247128baa168bde9ef58b7fa82b8c8f6039eb388a222fe5666ad4bf6b4c3a51d0abbc88b19d4106f5ac5220d87900f5b"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/BookDetailsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BookDetailsComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BookFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BookFormComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BookListComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BookListComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/BookListItemComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >BookListItemComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/CreateBookComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >CreateBookComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/EditBookComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >EditBookComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FormMessagesComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FormMessagesComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CoreModule.html\" data-type=\"entity-link\" >CoreModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-CoreModule-de2d19f05b881eda8382220503f036addece5b252ef21d973fdff6705e09d8be4e06e60d67e4da73f6c848fee0a3efe51c97c538a4b7c3e5b5f47362892c79d9"' : 'data-target="#xs-components-links-module-CoreModule-de2d19f05b881eda8382220503f036addece5b252ef21d973fdff6705e09d8be4e06e60d67e4da73f6c848fee0a3efe51c97c538a4b7c3e5b5f47362892c79d9"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-CoreModule-de2d19f05b881eda8382220503f036addece5b252ef21d973fdff6705e09d8be4e06e60d67e4da73f6c848fee0a3efe51c97c538a4b7c3e5b5f47362892c79d9"' : 'id="xs-components-links-module-CoreModule-de2d19f05b881eda8382220503f036addece5b252ef21d973fdff6705e09d8be4e06e60d67e4da73f6c848fee0a3efe51c97c538a4b7c3e5b5f47362892c79d9"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/ErrorComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ErrorComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/FooterComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >FooterComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/MaterialModule.html\" data-type=\"entity-link\" >MaterialModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SearchModule.html\" data-type=\"entity-link\" >SearchModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SearchModule-1248ad45f7d64a93c833acb320590bc42b89b77d742a64786566e3ad91a6e704e35cb928ce2f6468eba8889f040d6feb67ccc1dcf26cddbf82366dee7714a8cf"' : 'data-target="#xs-components-links-module-SearchModule-1248ad45f7d64a93c833acb320590bc42b89b77d742a64786566e3ad91a6e704e35cb928ce2f6468eba8889f040d6feb67ccc1dcf26cddbf82366dee7714a8cf"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SearchModule-1248ad45f7d64a93c833acb320590bc42b89b77d742a64786566e3ad91a6e704e35cb928ce2f6468eba8889f040d6feb67ccc1dcf26cddbf82366dee7714a8cf"' : 'id="xs-components-links-module-SearchModule-1248ad45f7d64a93c833acb320590bc42b89b77d742a64786566e3ad91a6e704e35cb928ce2f6468eba8889f040d6feb67ccc1dcf26cddbf82366dee7714a8cf"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/SearchApiComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SearchApiComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SearchBookItemComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SearchBookItemComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SearchContentComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SearchContentComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SharedModule.html\" data-type=\"entity-link\" >SharedModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' : 'data-target="#xs-components-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' : 'id="xs-components-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/LoaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LoaderComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class=\"chapter inner\">\n                                    <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#directives-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' : 'data-target="#xs-directives-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"', ">\n                                        <span class=\"icon ion-md-code-working\"></span>\n                                        <span>Directives</span>\n                                        <span class=\"icon ion-ios-arrow-down\"></span>\n                                    </div>\n                                    <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="directives-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' : 'id="xs-directives-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"', ">\n                                        <li class=\"link\">\n                                            <a href=\"directives/DelayDirective.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >DelayDirective</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#pipes-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' : 'data-target="#xs-pipes-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"', ">\n                                            <span class=\"icon ion-md-add\"></span>\n                                            <span>Pipes</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="pipes-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' : 'id="xs-pipes-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"', ">\n                                            <li class=\"link\">\n                                                <a href=\"pipes/IsbnPipe.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >IsbnPipe</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/BookFactory.html\" data-type=\"entity-link\" >BookFactory</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/BookValidators.html\" data-type=\"entity-link\" >BookValidators</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/AuthService.html\" data-type=\"entity-link\" >AuthService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/BookExistsValidator.html\" data-type=\"entity-link\" >BookExistsValidator</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/BookService.html\" data-type=\"entity-link\" >BookService</a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"injectables/SearchApiService.html\" data-type=\"entity-link\" >SearchApiService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interceptors-links"' : 'data-target="#xs-interceptors-links"', ">\n                            <span class=\"icon ion-ios-swap\"></span>\n                            <span>Interceptors</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interceptors/AppInterceptor.html\" data-type=\"entity-link\" >AppInterceptor</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#guards-links"' : 'data-target="#xs-guards-links"', ">\n                            <span class=\"icon ion-ios-lock\"></span>\n                            <span>Guards</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"', ">\n                            <li class=\"link\">\n                                <a href=\"guards/AuthActivate.html\" data-type=\"entity-link\" >AuthActivate</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Book.html\" data-type=\"entity-link\" >Book</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/BookRaw.html\" data-type=\"entity-link\" >BookRaw</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/BookSearch.html\" data-type=\"entity-link\" >BookSearch</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/GoogleBooksApiInterface.html\" data-type=\"entity-link\" >GoogleBooksApiInterface</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/IUser.html\" data-type=\"entity-link\" >IUser</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Thumbnail.html\" data-type=\"entity-link\" >Thumbnail</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/functions.html\" data-type=\"entity-link\">Functions</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);

  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">my-book-library documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a1710576d5559274befedc1583708421712fbfb3a68c78f0c74f185e355e3e8b092724ce395cbf40b11cba74ccc015e671bfbb694d00cd2659a06731aacd6af6"' : 'data-target="#xs-components-links-module-AppModule-a1710576d5559274befedc1583708421712fbfb3a68c78f0c74f185e355e3e8b092724ce395cbf40b11cba74ccc015e671bfbb694d00cd2659a06731aacd6af6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a1710576d5559274befedc1583708421712fbfb3a68c78f0c74f185e355e3e8b092724ce395cbf40b11cba74ccc015e671bfbb694d00cd2659a06731aacd6af6"' :
                                            'id="xs-components-links-module-AppModule-a1710576d5559274befedc1583708421712fbfb3a68c78f0c74f185e355e3e8b092724ce395cbf40b11cba74ccc015e671bfbb694d00cd2659a06731aacd6af6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthenticateComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthenticateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-2a29bba5603ebc2e3417f7001bbfc3933ede0314687ba62abe659440a393a821ba67f95ded8e68772a1ebdfac7818b6fb804b993b0bc6e26d73e8d0c40f61dd6"' : 'data-target="#xs-components-links-module-AuthModule-2a29bba5603ebc2e3417f7001bbfc3933ede0314687ba62abe659440a393a821ba67f95ded8e68772a1ebdfac7818b6fb804b993b0bc6e26d73e8d0c40f61dd6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-2a29bba5603ebc2e3417f7001bbfc3933ede0314687ba62abe659440a393a821ba67f95ded8e68772a1ebdfac7818b6fb804b993b0bc6e26d73e8d0c40f61dd6"' :
                                            'id="xs-components-links-module-AuthModule-2a29bba5603ebc2e3417f7001bbfc3933ede0314687ba62abe659440a393a821ba67f95ded8e68772a1ebdfac7818b6fb804b993b0bc6e26d73e8d0c40f61dd6"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LogoutComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ProfileComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegisterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooksModule.html" data-type="entity-link" >BooksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BooksModule-b54193ae0751a8a972abec4f4fe1b513247128baa168bde9ef58b7fa82b8c8f6039eb388a222fe5666ad4bf6b4c3a51d0abbc88b19d4106f5ac5220d87900f5b"' : 'data-target="#xs-components-links-module-BooksModule-b54193ae0751a8a972abec4f4fe1b513247128baa168bde9ef58b7fa82b8c8f6039eb388a222fe5666ad4bf6b4c3a51d0abbc88b19d4106f5ac5220d87900f5b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BooksModule-b54193ae0751a8a972abec4f4fe1b513247128baa168bde9ef58b7fa82b8c8f6039eb388a222fe5666ad4bf6b4c3a51d0abbc88b19d4106f5ac5220d87900f5b"' :
                                            'id="xs-components-links-module-BooksModule-b54193ae0751a8a972abec4f4fe1b513247128baa168bde9ef58b7fa82b8c8f6039eb388a222fe5666ad4bf6b4c3a51d0abbc88b19d4106f5ac5220d87900f5b"' }>
                                            <li class="link">
                                                <a href="components/BookDetailsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookDetailsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookListItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookListItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CreateBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateBookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditBookComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EditBookComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FormMessagesComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormMessagesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-de2d19f05b881eda8382220503f036addece5b252ef21d973fdff6705e09d8be4e06e60d67e4da73f6c848fee0a3efe51c97c538a4b7c3e5b5f47362892c79d9"' : 'data-target="#xs-components-links-module-CoreModule-de2d19f05b881eda8382220503f036addece5b252ef21d973fdff6705e09d8be4e06e60d67e4da73f6c848fee0a3efe51c97c538a4b7c3e5b5f47362892c79d9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-de2d19f05b881eda8382220503f036addece5b252ef21d973fdff6705e09d8be4e06e60d67e4da73f6c848fee0a3efe51c97c538a4b7c3e5b5f47362892c79d9"' :
                                            'id="xs-components-links-module-CoreModule-de2d19f05b881eda8382220503f036addece5b252ef21d973fdff6705e09d8be4e06e60d67e4da73f6c848fee0a3efe51c97c538a4b7c3e5b5f47362892c79d9"' }>
                                            <li class="link">
                                                <a href="components/ErrorComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link" >MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SearchModule.html" data-type="entity-link" >SearchModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchModule-1248ad45f7d64a93c833acb320590bc42b89b77d742a64786566e3ad91a6e704e35cb928ce2f6468eba8889f040d6feb67ccc1dcf26cddbf82366dee7714a8cf"' : 'data-target="#xs-components-links-module-SearchModule-1248ad45f7d64a93c833acb320590bc42b89b77d742a64786566e3ad91a6e704e35cb928ce2f6468eba8889f040d6feb67ccc1dcf26cddbf82366dee7714a8cf"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchModule-1248ad45f7d64a93c833acb320590bc42b89b77d742a64786566e3ad91a6e704e35cb928ce2f6468eba8889f040d6feb67ccc1dcf26cddbf82366dee7714a8cf"' :
                                            'id="xs-components-links-module-SearchModule-1248ad45f7d64a93c833acb320590bc42b89b77d742a64786566e3ad91a6e704e35cb928ce2f6468eba8889f040d6feb67ccc1dcf26cddbf82366dee7714a8cf"' }>
                                            <li class="link">
                                                <a href="components/SearchApiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchApiComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBookItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchBookItemComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchContentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchContentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' : 'data-target="#xs-components-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' :
                                            'id="xs-components-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' }>
                                            <li class="link">
                                                <a href="components/LoaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoaderComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' : 'data-target="#xs-directives-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' :
                                        'id="xs-directives-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' }>
                                        <li class="link">
                                            <a href="directives/DelayDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DelayDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' : 'data-target="#xs-pipes-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' :
                                            'id="xs-pipes-links-module-SharedModule-3efbb77e6822e670e1e784692d8cddc3221edfcabaff6f3966ac929eb8cf728139613d0ded7fd99f780c28a4aec69fb253bcb0c0f22c7fbcb030c7f530ba18b2"' }>
                                            <li class="link">
                                                <a href="pipes/IsbnPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IsbnPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/BookFactory.html" data-type="entity-link" >BookFactory</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookValidators.html" data-type="entity-link" >BookValidators</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookExistsValidator.html" data-type="entity-link" >BookExistsValidator</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookService.html" data-type="entity-link" >BookService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SearchApiService.html" data-type="entity-link" >SearchApiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interceptors-links"' :
                            'data-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/AppInterceptor.html" data-type="entity-link" >AppInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthActivate.html" data-type="entity-link" >AuthActivate</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookRaw.html" data-type="entity-link" >BookRaw</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/BookSearch.html" data-type="entity-link" >BookSearch</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/GoogleBooksApiInterface.html" data-type="entity-link" >GoogleBooksApiInterface</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Thumbnail.html" data-type="entity-link" >Thumbnail</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
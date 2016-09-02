angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./debug.html','<ion-view view-title="main debug">\n  <!-- do you want padding? -->\n  <ion-content class="padding">\n\n    <!-- content goes here -->\n    <ion-list>\n\n      <ion-item class="item item-divider">\n        Some basic checks\n      </ion-item>\n      <ion-item class="item item-icon">\n        icons working?\n        <i class="icon ion-checkmark-circled"></i>\n      </ion-item>\n      <ion-item class="item item-thumbnail">\n        images working?<br>\n        <img width="75" src="main/assets/images/yo@2x.png">\n      </ion-item>\n      <ion-item class="item">{{ctrl.someData.binding}}</ion-item>\n      <ion-item class="item item-divider">Environment variables:</ion-item>\n      <ion-item class="item item-text-wrap">\n        <pre>{{ctrl.ENV | json}}</pre>\n      </ion-item>\n      <ion-item class="item item-divider">Build variables:</ion-item>\n      <ion-item class="item item-text-wrap">\n        <pre>{{ctrl.BUILD | json}}</pre>\n      </ion-item>\n      <ion-item class="item item-divider">Device:</ion-item>\n      <ion-item class="item item-text-wrap">\n        <pre>{{ctrl.device | json}}</pre>\n      </ion-item>\n\n      <!-- password -->\n      <ion-item class="item item-divider">Password Test:</ion-item>\n      <ion-item class="item item-text-wrap">\n        <label class="item item-input">\n          <span class="input-label">Password</span>\n          <input type="password"\n            ng-model="ctrl.password.input"\n            ng-change="ctrl.grade()">\n        </label>\n      </ion-item>\n      <ion-item class="item item-text-wrap">\n        Strength\n        <span class="badge"\n          ng-class="{\n            \'badge-assertive\': ctrl.password.strength === \'weak\',\n            \'badge-balanced\': ctrl.password.strength === \'strong\',\n            \'badge-energized\': ctrl.password.strength === \'medium\'\n          }">{{ctrl.password.strength}}</span>\n      </ion-item>\n\n      <!-- proxy -->\n      <ion-item class="item item-divider">Proxy:</ion-item>\n      <ion-item class="item item-thumbnail">\n        <button class="button button-block button-dark"\n          ng-click="ctrl.proxyTest()">\n          Test Proxy\n        </button>\n        {{ctrl.proxyState}}<br>\n        {{ctrl.proxyRequestUrl}}\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./list-detail.html','<ion-view view-title="Mr. Yo">\n  <!-- do you want padding -->\n  <ion-content class="padding">\n\n    <!-- content goes here -->\n    <img ng-src="main/assets/images/yo@2x.png" style="width: 64px; height: 64px">\n    <p>\n      Hello My Name is Yo!<br>\n      I scaffold apps.<br>\n      And I\'m really good at it.\n    </p>\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./list.html','<ion-view view-title="List">\n  <ion-content>\n\n    <!-- content goes here -->\n    <ion-list>\n      <ion-item\n        class="item-remove-animate item-avatar item-icon-right"\n        type="item-text-wrap"\n        ui-sref="main.listDetail">\n        <img src="main/assets/images/yo@2x.png">\n        <h2>Mr. Yo</h2>\n        <p>Learn more...</p>\n        <i class="icon ion-chevron-right icon-accessory"></i>\n      </ion-item>\n    </ion-list>\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./tabs.html','<ion-tabs class="tabs-icon-top tabs-assertive">\n\n  <!-- List Tab -->\n  <ion-tab title="List" icon-off="ion-ios-pulse" icon-on="ion-ios-pulse-strong"\n    ui-sref="main.list">\n    <ion-nav-view name="tab-list"></ion-nav-view>\n  </ion-tab>\n\n  <!-- Debug Tab -->\n  <ion-tab title="Debug" icon-off="ion-ios-gear-outline" icon-on="ion-ios-gear"\n    ui-sref="main.debug">\n    <ion-nav-view name="tab-debug"></ion-nav-view>\n  </ion-tab>\n\n</ion-tabs>\n');
$templateCache.put('./user.html','<ion-view view-title="User">\n  <!-- do you want padding? -->\n  <ion-content class="padding">\n\n    <!-- content goes here -->\n    <div class="list">\n      <label class="item item-input">\n        <input name="email" type="email" placeholder="E-Mail" ng-model="ctrl.user.email">\n      </label>\n      <label class="item item-input">\n        <input name="password" type="password" placeholder="Password" ng-model="ctrl.user.password">\n      </label>\n    </div>\n    <div class="padding">\n      <button class="button button-block button-outline button-stable"\n        ng-click="ctrl.signup()">\n        Sign up\n      </button>\n      <button class="button button-block button-outline button-positive"\n        ng-click="ctrl.signin()">\n        Sign in\n      </button>\n    </div>\n    <div class="list" ng-if="ctrl.user.resultType">\n      <ion-item class="item item-divider">{{ctrl.user.resultType}} for {{ctrl.user.email}}:</ion-item>\n      <ion-item class="item item-text-wrap">\n        <pre>{{ctrl.user.result | json}}</pre>\n      </ion-item>\n    </div>\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./debug.html','<ion-view view-title="main debug">\n  <!-- do you want padding? -->\n  <ion-content class="padding">\n\n    <!-- content goes here -->\n    <ion-list>\n\n      <ion-item class="item item-divider">\n        Some basic checks\n      </ion-item>\n      <ion-item class="item item-icon">\n        icons working?\n        <i class="icon ion-checkmark-circled"></i>\n      </ion-item>\n      <ion-item class="item item-thumbnail">\n        images working?<br>\n        <img width="75" src="main/assets/images/yo@2x.png">\n      </ion-item>\n      <ion-item class="item">{{ctrl.someData.binding}}</ion-item>\n      <ion-item class="item item-divider">Environment variables:</ion-item>\n      <ion-item class="item item-text-wrap">\n        <pre>{{ctrl.ENV | json}}</pre>\n      </ion-item>\n      <ion-item class="item item-divider">Build variables:</ion-item>\n      <ion-item class="item item-text-wrap">\n        <pre>{{ctrl.BUILD | json}}</pre>\n      </ion-item>\n      <ion-item class="item item-divider">Device:</ion-item>\n      <ion-item class="item item-text-wrap">\n        <pre>{{ctrl.device | json}}</pre>\n      </ion-item>\n\n      <!-- password -->\n      <ion-item class="item item-divider">Password Test:</ion-item>\n      <ion-item class="item item-text-wrap">\n        <label class="item item-input">\n          <span class="input-label">Password</span>\n          <input type="password"\n            ng-model="ctrl.password.input"\n            ng-change="ctrl.grade()">\n        </label>\n      </ion-item>\n      <ion-item class="item item-text-wrap">\n        Strength\n        <span class="badge"\n          ng-class="{\n            \'badge-assertive\': ctrl.password.strength === \'weak\',\n            \'badge-balanced\': ctrl.password.strength === \'strong\',\n            \'badge-energized\': ctrl.password.strength === \'medium\'\n          }">{{ctrl.password.strength}}</span>\n      </ion-item>\n\n      <!-- proxy -->\n      <ion-item class="item item-divider">Proxy:</ion-item>\n      <ion-item class="item item-thumbnail">\n        <button class="button button-block button-dark"\n          ng-click="ctrl.proxyTest()">\n          Test Proxy\n        </button>\n        {{ctrl.proxyState}}<br>\n        {{ctrl.proxyRequestUrl}}\n      </ion-item>\n\n    </ion-list>\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./list-detail.html','<ion-view view-title="Mr. Yo">\n  <!-- do you want padding -->\n  <ion-content class="padding">\n\n    <!-- content goes here -->\n    <img ng-src="main/assets/images/yo@2x.png" style="width: 64px; height: 64px">\n    <p>\n      Hello My Name is Yo!<br>\n      I scaffold apps.<br>\n      And I\'m really good at it.\n    </p>\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./list.html','<ion-view view-title="List">\n  <ion-content>\n\n    <!-- content goes here -->\n    <ion-list>\n      <ion-item\n        class="item-remove-animate item-avatar item-icon-right"\n        type="item-text-wrap"\n        ui-sref="main.listDetail">\n        <img src="main/assets/images/yo@2x.png">\n        <h2>Mr. Yo</h2>\n        <p>Learn more...</p>\n        <i class="icon ion-chevron-right icon-accessory"></i>\n      </ion-item>\n    </ion-list>\n\n     <!-- test component -->\n    <ion-list>\n      <ion-item\n        class="item-remove-animate item-avatar item-icon-right"\n        type="item-text-wrap"\n        ui-sref="main.test">\n        <img src="main/assets/images/yo@2x.png">\n        <h2>To test component</h2>\n        <i class="icon ion-chevron-right icon-accessory"></i>\n      </ion-item>\n    </ion-list>\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./menu.html','<ion-side-menus enable-menu-with-back-views="false">\n\n  <!-- CONTENT -->\n  <ion-side-menu-content>\n\n    <!-- header bar -->\n    <!-- the nav bar will be updated as we navigate between views -->\n    <ion-nav-bar class="bar-assertive">\n      <!-- back button, shown if applicable -->\n      <ion-nav-back-button>\n      </ion-nav-back-button>\n      <!-- nav button, shown if applicable -->\n      <ion-nav-buttons side="left">\n        <button class="button button-icon button-clear ion-navicon" menu-toggle="left">\n        </button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n\n    <!-- ROUTING INJECTED HERE: pageContent -->\n    <ion-nav-view name="pageContent"></ion-nav-view>\n\n  </ion-side-menu-content>\n\n  <!-- SIDEMENU -->\n  <ion-side-menu side="left">\n\n    <!-- menu header -->\n    <ion-header-bar class="bar-assertive">\n      <h1 class="title">Nav</h1>\n    </ion-header-bar>\n\n    <!-- menu content -->\n    <ion-content>\n      <ion-list>\n        <ion-item menu-close ui-sref="main.list">\n          List\n        </ion-item>\n        <ion-item menu-close ui-sref="main.debug">\n          Debug\n        </ion-item>\n      </ion-list>\n    </ion-content>\n\n  </ion-side-menu>\n\n</ion-side-menus>\n');
$templateCache.put('./user.html','<ion-view view-title="User">\n  <!-- do you want padding? -->\n  <ion-content class="padding">\n\n    <!-- content goes here -->\n    <div class="list">\n      <label class="item item-input">\n        <input name="email" type="email" placeholder="E-Mail" ng-model="ctrl.user.email">\n      </label>\n      <label class="item item-input">\n        <input name="password" type="password" placeholder="Password" ng-model="ctrl.user.password">\n      </label>\n    </div>\n    <div class="padding">\n      <button class="button button-block button-outline button-stable"\n        ng-click="ctrl.signup()">\n        Sign up\n      </button>\n      <button class="button button-block button-outline button-positive"\n        ng-click="ctrl.signin()">\n        Sign in\n      </button>\n    </div>\n    <div class="list" ng-if="ctrl.user.resultType">\n      <ion-item class="item item-divider">{{ctrl.user.resultType}} for {{ctrl.user.email}}:</ion-item>\n      <ion-item class="item item-text-wrap">\n        <pre>{{ctrl.user.result | json}}</pre>\n      </ion-item>\n    </div>\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./user.html','<ion-view view-title="User">\n  <!-- do you want padding? -->\n  <ion-content class="padding">\n\n    <!-- content goes here -->\n    <div class="list">\n      <label class="item item-input">\n        <input name="email" type="email" placeholder="E-Mail" ng-model="ctrl.user.email">\n      </label>\n      <label class="item item-input">\n        <input name="password" type="password" placeholder="Password" ng-model="ctrl.user.password">\n      </label>\n    </div>\n    <div class="padding">\n      <button class="button button-block button-outline button-stable"\n        ng-click="ctrl.signup()">\n        Sign up\n      </button>\n      <button class="button button-block button-outline button-positive"\n        ng-click="ctrl.signin()">\n        Sign in\n      </button>\n    </div>\n    <div class="list" ng-if="ctrl.user.resultType">\n      <ion-item class="item item-divider">{{ctrl.user.resultType}} for {{ctrl.user.email}}:</ion-item>\n      <ion-item class="item item-text-wrap">\n        <pre>{{ctrl.user.result | json}}</pre>\n      </ion-item>\n    </div>\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('./list.html','<ion-view view-title="List">\n  <ion-content>\n\n    <!-- test component -->\n    <ion-list>\n      <ion-item\n        class="item-remove-animate item-avatar item-icon-right"\n        type="item-text-wrap"\n        ui-sref="app.test">\n        <h2>To test component</h2>\n        <i class="icon ion-chevron-right icon-accessory"></i>\n      </ion-item>\n    </ion-list>\n    \n  </ion-content>\n</ion-view>\n');
$templateCache.put('./menu.html','<ion-side-menus enable-menu-with-back-views="false">\n\n  <!-- CONTENT -->\n  <ion-side-menu-content>\n\n    <!-- header bar -->\n    <!-- the nav bar will be updated as we navigate between views -->\n    <ion-nav-bar class="bar-assertive">\n      <!-- back button, shown if applicable -->\n      <ion-nav-back-button>\n      </ion-nav-back-button>\n      <!-- nav button, shown if applicable -->\n      <ion-nav-buttons side="left">\n        <button class="button button-icon button-clear ion-navicon" menu-toggle="left">\n        </button>\n      </ion-nav-buttons>\n    </ion-nav-bar>\n\n    <!-- ROUTING INJECTED HERE: pageContent -->\n    <ion-nav-view name="pageContent"></ion-nav-view>\n\n  </ion-side-menu-content>\n\n  <!-- SIDEMENU -->\n  <ion-side-menu side="left">\n\n    <!-- menu header -->\n    <ion-header-bar class="bar-assertive">\n      <h1 class="title">Nav</h1>\n    </ion-header-bar>\n\n    <!-- menu content -->\n    <ion-content>\n      <ion-list>\n        <ion-item menu-close ui-sref="main.list">\n          List\n        </ion-item>\n        <ion-item menu-close ui-sref="main.debug">\n          Debug\n        </ion-item>\n      </ion-list>\n    </ion-content>\n\n  </ion-side-menu>\n\n</ion-side-menus>\n');
$templateCache.put('./test.html','<ion-view view-title="This is a test component">\n  <ion-content class="padding">   \n    <p><\n      What a beautifull test component\n    </p>\n  </ion-content>\n</ion-view>\n');}]);
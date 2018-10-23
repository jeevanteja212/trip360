(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@angular/cdk/esm5/a11y.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/a11y.es5.js ***!
  \****************************************************/
/*! exports provided: MESSAGES_CONTAINER_ID, CDK_DESCRIBEDBY_ID_PREFIX, CDK_DESCRIBEDBY_HOST_ATTRIBUTE, AriaDescriber, ARIA_DESCRIBER_PROVIDER_FACTORY, ARIA_DESCRIBER_PROVIDER, ActiveDescendantKeyManager, FocusKeyManager, ListKeyManager, FocusTrap, FocusTrapFactory, CdkTrapFocus, InteractivityChecker, LiveAnnouncer, LIVE_ANNOUNCER_PROVIDER_FACTORY, LIVE_ANNOUNCER_PROVIDER, LIVE_ANNOUNCER_ELEMENT_TOKEN, LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY, TOUCH_BUFFER_MS, FocusMonitor, CdkMonitorFocus, FOCUS_MONITOR_PROVIDER_FACTORY, FOCUS_MONITOR_PROVIDER, isFakeMousedownFromScreenReader, A11yModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MESSAGES_CONTAINER_ID", function() { return MESSAGES_CONTAINER_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_ID_PREFIX", function() { return CDK_DESCRIBEDBY_ID_PREFIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DESCRIBEDBY_HOST_ATTRIBUTE", function() { return CDK_DESCRIBEDBY_HOST_ATTRIBUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AriaDescriber", function() { return AriaDescriber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER_FACTORY", function() { return ARIA_DESCRIBER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARIA_DESCRIBER_PROVIDER", function() { return ARIA_DESCRIBER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDescendantKeyManager", function() { return ActiveDescendantKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusKeyManager", function() { return FocusKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListKeyManager", function() { return ListKeyManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrap", function() { return FocusTrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusTrapFactory", function() { return FocusTrapFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkTrapFocus", function() { return CdkTrapFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivityChecker", function() { return InteractivityChecker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveAnnouncer", function() { return LiveAnnouncer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER_FACTORY", function() { return LIVE_ANNOUNCER_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_PROVIDER", function() { return LIVE_ANNOUNCER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY", function() { return LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOUCH_BUFFER_MS", function() { return TOUCH_BUFFER_MS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusMonitor", function() { return FocusMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkMonitorFocus", function() { return CdkMonitorFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER_FACTORY", function() { return FOCUS_MONITOR_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_MONITOR_PROVIDER", function() { return FOCUS_MONITOR_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFakeMousedownFromScreenReader", function() { return isFakeMousedownFromScreenReader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A11yModule", function() { return A11yModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * IDs are deliminated by an empty space, as per the spec.
 */
var /** @type {?} */ ID_DELIMINATOR = ' ';
/**
 * Adds the given ID to the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function addAriaReferencedId(el, attr, id) {
    var /** @type {?} */ ids = getAriaReferenceIds(el, attr);
    if (ids.some(function (existingId) { return existingId.trim() == id.trim(); })) {
        return;
    }
    ids.push(id.trim());
    el.setAttribute(attr, ids.join(ID_DELIMINATOR));
}
/**
 * Removes the given ID from the specified ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @param {?} id
 * @return {?}
 */
function removeAriaReferencedId(el, attr, id) {
    var /** @type {?} */ ids = getAriaReferenceIds(el, attr);
    var /** @type {?} */ filteredIds = ids.filter(function (val) { return val != id.trim(); });
    el.setAttribute(attr, filteredIds.join(ID_DELIMINATOR));
}
/**
 * Gets the list of IDs referenced by the given ARIA attribute on an element.
 * Used for attributes such as aria-labelledby, aria-owns, etc.
 * @param {?} el
 * @param {?} attr
 * @return {?}
 */
function getAriaReferenceIds(el, attr) {
    // Get string array of all individual ids (whitespace deliminated) in the attribute value
    return (el.getAttribute(attr) || '').match(/\S+/g) || [];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * ID used for the body container where all messages are appended.
 */
var /** @type {?} */ MESSAGES_CONTAINER_ID = 'cdk-describedby-message-container';
/**
 * ID prefix used for each created message element.
 */
var /** @type {?} */ CDK_DESCRIBEDBY_ID_PREFIX = 'cdk-describedby-message';
/**
 * Attribute given to each host element that is described by a message element.
 */
var /** @type {?} */ CDK_DESCRIBEDBY_HOST_ATTRIBUTE = 'cdk-describedby-host';
/**
 * Global incremental identifier for each registered message element.
 */
var /** @type {?} */ nextId = 0;
/**
 * Global map of all registered message elements that have been placed into the document.
 */
var /** @type {?} */ messageRegistry = new Map();
/**
 * Container for all registered messages.
 */
var /** @type {?} */ messagesContainer = null;
/**
 * Utility that creates visually hidden elements with a message content. Useful for elements that
 * want to use aria-describedby to further describe themselves without adding additional visual
 * content.
 * \@docs-private
 */
var AriaDescriber = /** @class */ (function () {
    function AriaDescriber(_document) {
        this._document = _document;
    }
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     */
    /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype.describe = /**
     * Adds to the host element an aria-describedby reference to a hidden element that contains
     * the message. If the same message has already been registered, then it will reuse the created
     * message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    function (hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (!messageRegistry.has(message)) {
            this._createMessageElement(message);
        }
        if (!this._isElementDescribedByMessage(hostElement, message)) {
            this._addMessageReference(hostElement, message);
        }
    };
    /** Removes the host element's aria-describedby reference to the message element. */
    /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype.removeDescription = /**
     * Removes the host element's aria-describedby reference to the message element.
     * @param {?} hostElement
     * @param {?} message
     * @return {?}
     */
    function (hostElement, message) {
        if (!this._canBeDescribed(hostElement, message)) {
            return;
        }
        if (this._isElementDescribedByMessage(hostElement, message)) {
            this._removeMessageReference(hostElement, message);
        }
        var /** @type {?} */ registeredMessage = messageRegistry.get(message);
        if (registeredMessage && registeredMessage.referenceCount === 0) {
            this._deleteMessageElement(message);
        }
        if (messagesContainer && messagesContainer.childNodes.length === 0) {
            this._deleteMessagesContainer();
        }
    };
    /** Unregisters all created message elements and removes the message container. */
    /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    AriaDescriber.prototype.ngOnDestroy = /**
     * Unregisters all created message elements and removes the message container.
     * @return {?}
     */
    function () {
        var /** @type {?} */ describedElements = this._document.querySelectorAll("[" + CDK_DESCRIBEDBY_HOST_ATTRIBUTE + "]");
        for (var /** @type {?} */ i = 0; i < describedElements.length; i++) {
            this._removeCdkDescribedByReferenceIds(describedElements[i]);
            describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
        }
        if (messagesContainer) {
            this._deleteMessagesContainer();
        }
        messageRegistry.clear();
    };
    /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._createMessageElement = /**
     * Creates a new element in the visually hidden message container element with the message
     * as its content and adds it to the message registry.
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ messageElement = this._document.createElement('div');
        messageElement.setAttribute('id', CDK_DESCRIBEDBY_ID_PREFIX + "-" + nextId++);
        messageElement.appendChild(/** @type {?} */ ((this._document.createTextNode(message))));
        if (!messagesContainer) {
            this._createMessagesContainer();
        } /** @type {?} */
        ((messagesContainer)).appendChild(messageElement);
        messageRegistry.set(message, { messageElement: messageElement, referenceCount: 0 });
    };
    /**
     * Deletes the message element from the global messages container.
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._deleteMessageElement = /**
     * Deletes the message element from the global messages container.
     * @param {?} message
     * @return {?}
     */
    function (message) {
        var /** @type {?} */ registeredMessage = messageRegistry.get(message);
        var /** @type {?} */ messageElement = registeredMessage && registeredMessage.messageElement;
        if (messagesContainer && messageElement) {
            messagesContainer.removeChild(messageElement);
        }
        messageRegistry.delete(message);
    };
    /**
     * Creates the global container for all aria-describedby messages.
     * @return {?}
     */
    AriaDescriber.prototype._createMessagesContainer = /**
     * Creates the global container for all aria-describedby messages.
     * @return {?}
     */
    function () {
        messagesContainer = this._document.createElement('div');
        messagesContainer.setAttribute('id', MESSAGES_CONTAINER_ID);
        messagesContainer.setAttribute('aria-hidden', 'true');
        messagesContainer.style.display = 'none';
        this._document.body.appendChild(messagesContainer);
    };
    /**
     * Deletes the global messages container.
     * @return {?}
     */
    AriaDescriber.prototype._deleteMessagesContainer = /**
     * Deletes the global messages container.
     * @return {?}
     */
    function () {
        if (messagesContainer && messagesContainer.parentNode) {
            messagesContainer.parentNode.removeChild(messagesContainer);
            messagesContainer = null;
        }
    };
    /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @param {?} element
     * @return {?}
     */
    AriaDescriber.prototype._removeCdkDescribedByReferenceIds = /**
     * Removes all cdk-describedby messages that are hosted through the element.
     * @param {?} element
     * @return {?}
     */
    function (element) {
        // Remove all aria-describedby reference IDs that are prefixed by CDK_DESCRIBEDBY_ID_PREFIX
        var /** @type {?} */ originalReferenceIds = getAriaReferenceIds(element, 'aria-describedby')
            .filter(function (id) { return id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0; });
        element.setAttribute('aria-describedby', originalReferenceIds.join(' '));
    };
    /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._addMessageReference = /**
     * Adds a message reference to the element using aria-describedby and increments the registered
     * message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        var /** @type {?} */ registeredMessage = /** @type {?} */ ((messageRegistry.get(message)));
        // Add the aria-describedby reference and set the
        // describedby_host attribute to mark the element.
        addAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, '');
        registeredMessage.referenceCount++;
    };
    /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._removeMessageReference = /**
     * Removes a message reference from the element using aria-describedby
     * and decrements the registered message's reference count.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        var /** @type {?} */ registeredMessage = /** @type {?} */ ((messageRegistry.get(message)));
        registeredMessage.referenceCount--;
        removeAriaReferencedId(element, 'aria-describedby', registeredMessage.messageElement.id);
        element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    };
    /**
     * Returns true if the element has been described by the provided message ID.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._isElementDescribedByMessage = /**
     * Returns true if the element has been described by the provided message ID.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        var /** @type {?} */ referenceIds = getAriaReferenceIds(element, 'aria-describedby');
        var /** @type {?} */ registeredMessage = messageRegistry.get(message);
        var /** @type {?} */ messageId = registeredMessage && registeredMessage.messageElement.id;
        return !!messageId && referenceIds.indexOf(messageId) != -1;
    };
    /**
     * Determines whether a message can be described on a particular element.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    AriaDescriber.prototype._canBeDescribed = /**
     * Determines whether a message can be described on a particular element.
     * @param {?} element
     * @param {?} message
     * @return {?}
     */
    function (element, message) {
        return element.nodeType === this._document.ELEMENT_NODE && message != null &&
            !!("" + message).trim();
    };
    AriaDescriber.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    AriaDescriber.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ AriaDescriber.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function AriaDescriber_Factory() { return new AriaDescriber(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: AriaDescriber, providedIn: "root" });
    return AriaDescriber;
}());
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 * @param {?} parentDispatcher
 * @param {?} _document
 * @return {?}
 */
function ARIA_DESCRIBER_PROVIDER_FACTORY(parentDispatcher, _document) {
    return parentDispatcher || new AriaDescriber(_document);
}
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 */
var /** @type {?} */ ARIA_DESCRIBER_PROVIDER = {
    // If there is already an AriaDescriber available, use that. Otherwise, provide a new one.
    provide: AriaDescriber,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), AriaDescriber],
        /** @type {?} */ (_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])
    ],
    useFactory: ARIA_DESCRIBER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// unsupported: template constraints.
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */
var  
// unsupported: template constraints.
/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of items, it will set the active item correctly when arrow events occur.
 * @template T
 */
ListKeyManager = /** @class */ (function () {
    function ListKeyManager(_items) {
        var _this = this;
        this._items = _items;
        this._activeItemIndex = -1;
        this._wrap = false;
        this._letterKeyStream = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._typeaheadSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        this._vertical = true;
        /**
         * Predicate function that can be used to check whether an item should be skipped
         * by the key manager. By default, disabled items are skipped.
         */
        this._skipPredicateFn = function (item) { return item.disabled; };
        this._pressedLetters = [];
        /**
         * Stream that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        this.tabOut = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Stream that emits whenever the active item of the list manager changes.
         */
        this.change = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        // We allow for the items to be an array because, in some cases, the consumer may
        // not have access to a QueryList of the items they want to manage (e.g. when the
        // items aren't being collected via `ViewChildren` or `ContentChildren`).
        if (_items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]) {
            _items.changes.subscribe(function (newItems) {
                if (_this._activeItem) {
                    var /** @type {?} */ itemArray = newItems.toArray();
                    var /** @type {?} */ newIndex = itemArray.indexOf(_this._activeItem);
                    if (newIndex > -1 && newIndex !== _this._activeItemIndex) {
                        _this._activeItemIndex = newIndex;
                    }
                }
            });
        }
    }
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param predicate Function that determines whether the given item should be skipped.
     */
    /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {?}
     */
    ListKeyManager.prototype.skipPredicate = /**
     * Sets the predicate function that determines which items should be skipped by the
     * list key manager.
     * @param {?} predicate Function that determines whether the given item should be skipped.
     * @return {?}
     */
    function (predicate) {
        this._skipPredicateFn = predicate;
        return this;
    };
    /**
     * Turns on wrapping mode, which ensures that the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     */
    /**
     * Turns on wrapping mode, which ensures that the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @return {?}
     */
    ListKeyManager.prototype.withWrap = /**
     * Turns on wrapping mode, which ensures that the active item will wrap to
     * the other end of list when there are no more items in the given direction.
     * @return {?}
     */
    function () {
        this._wrap = true;
        return this;
    };
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param enabled Whether vertical selection should be enabled.
     */
    /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {?}
     */
    ListKeyManager.prototype.withVerticalOrientation = /**
     * Configures whether the key manager should be able to move the selection vertically.
     * @param {?=} enabled Whether vertical selection should be enabled.
     * @return {?}
     */
    function (enabled) {
        if (enabled === void 0) { enabled = true; }
        this._vertical = enabled;
        return this;
    };
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param direction Direction in which the selection can be moved.
     */
    /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param {?} direction Direction in which the selection can be moved.
     * @return {?}
     */
    ListKeyManager.prototype.withHorizontalOrientation = /**
     * Configures the key manager to move the selection horizontally.
     * Passing in `null` will disable horizontal movement.
     * @param {?} direction Direction in which the selection can be moved.
     * @return {?}
     */
    function (direction) {
        this._horizontal = direction;
        return this;
    };
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param debounceInterval Time to wait after the last keystroke before setting the active item.
     */
    /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {?}
     */
    ListKeyManager.prototype.withTypeAhead = /**
     * Turns on typeahead mode which allows users to set the active item by typing.
     * @param {?=} debounceInterval Time to wait after the last keystroke before setting the active item.
     * @return {?}
     */
    function (debounceInterval) {
        var _this = this;
        if (debounceInterval === void 0) { debounceInterval = 200; }
        if (this._items.length && this._items.some(function (item) { return typeof item.getLabel !== 'function'; })) {
            throw Error('ListKeyManager items in typeahead mode must implement the `getLabel` method.');
        }
        this._typeaheadSubscription.unsubscribe();
        // Debounce the presses of non-navigational keys, collect the ones that correspond to letters
        // and convert those letters back into a string. Afterwards find the first item that starts
        // with that string and select it.
        this._typeaheadSubscription = this._letterKeyStream.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (keyCode) { return _this._pressedLetters.push(keyCode); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(debounceInterval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function () { return _this._pressedLetters.length > 0; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return _this._pressedLetters.join(''); })).subscribe(function (inputString) {
            var /** @type {?} */ items = _this._getItemsArray();
            // Start at 1 because we want to start searching at the item immediately
            // following the current active item.
            for (var /** @type {?} */ i = 1; i < items.length + 1; i++) {
                var /** @type {?} */ index = (_this._activeItemIndex + i) % items.length;
                var /** @type {?} */ item = items[index];
                if (!_this._skipPredicateFn(item) && /** @type {?} */ ((item.getLabel))().toUpperCase().trim().indexOf(inputString) === 0) {
                    _this.setActiveItem(index);
                    break;
                }
            }
            _this._pressedLetters = [];
        });
        return this;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ListKeyManager.prototype.setActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ previousIndex = this._activeItemIndex;
        this.updateActiveItem(item);
        if (this._activeItemIndex !== previousIndex) {
            this.change.next(this._activeItemIndex);
        }
    };
    /**
     * Sets the active item depending on the key event passed in.
     * @param event Keyboard event to be used for determining which element should be active.
     */
    /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    ListKeyManager.prototype.onKeydown = /**
     * Sets the active item depending on the key event passed in.
     * @param {?} event Keyboard event to be used for determining which element should be active.
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ keyCode = event.keyCode;
        switch (keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["TAB"]:
                this.tabOut.next();
                return;
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["DOWN_ARROW"]:
                if (this._vertical) {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["UP_ARROW"]:
                if (this._vertical) {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["RIGHT_ARROW"]:
                if (this._horizontal === 'ltr') {
                    this.setNextItemActive();
                    break;
                }
                else if (this._horizontal === 'rtl') {
                    this.setPreviousItemActive();
                    break;
                }
                else {
                    return;
                }
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["LEFT_ARROW"]:
                if (this._horizontal === 'ltr') {
                    this.setPreviousItemActive();
                    break;
                }
                else if (this._horizontal === 'rtl') {
                    this.setNextItemActive();
                    break;
                }
                else {
                    return;
                }
            default:
                // Attempt to use the `event.key` which also maps it to the user's keyboard language,
                // otherwise fall back to resolving alphanumeric characters via the keyCode.
                if (event.key && event.key.length === 1) {
                    this._letterKeyStream.next(event.key.toLocaleUpperCase());
                }
                else if ((keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["A"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["Z"]) || (keyCode >= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["ZERO"] && keyCode <= _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_3__["NINE"])) {
                    this._letterKeyStream.next(String.fromCharCode(keyCode));
                }
                // Note that we return here, in order to avoid preventing
                // the default action of non-navigational keys.
                return;
        }
        this._pressedLetters = [];
        event.preventDefault();
    };
    Object.defineProperty(ListKeyManager.prototype, "activeItemIndex", {
        /** Index of the currently active item. */
        get: /**
         * Index of the currently active item.
         * @return {?}
         */
        function () {
            return this._activeItemIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListKeyManager.prototype, "activeItem", {
        /** The active item. */
        get: /**
         * The active item.
         * @return {?}
         */
        function () {
            return this._activeItem;
        },
        enumerable: true,
        configurable: true
    });
    /** Sets the active item to the first enabled item in the list. */
    /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setFirstItemActive = /**
     * Sets the active item to the first enabled item in the list.
     * @return {?}
     */
    function () {
        this._setActiveItemByIndex(0, 1);
    };
    /** Sets the active item to the last enabled item in the list. */
    /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setLastItemActive = /**
     * Sets the active item to the last enabled item in the list.
     * @return {?}
     */
    function () {
        this._setActiveItemByIndex(this._items.length - 1, -1);
    };
    /** Sets the active item to the next enabled item in the list. */
    /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setNextItemActive = /**
     * Sets the active item to the next enabled item in the list.
     * @return {?}
     */
    function () {
        this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1);
    };
    /** Sets the active item to a previous enabled item in the list. */
    /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    ListKeyManager.prototype.setPreviousItemActive = /**
     * Sets the active item to a previous enabled item in the list.
     * @return {?}
     */
    function () {
        this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive()
            : this._setActiveItemByDelta(-1);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ListKeyManager.prototype.updateActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ itemArray = this._getItemsArray();
        var /** @type {?} */ index = typeof item === 'number' ? item : itemArray.indexOf(item);
        this._activeItemIndex = index;
        this._activeItem = itemArray[index];
    };
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @param index The new activeItemIndex.
     * @deprecated Use `updateActiveItem` instead.
     * @deletion-target 7.0.0
     */
    /**
     * Allows setting of the activeItemIndex without any other effects.
     * @deprecated Use `updateActiveItem` instead.
     * \@deletion-target 7.0.0
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    ListKeyManager.prototype.updateActiveItemIndex = /**
     * Allows setting of the activeItemIndex without any other effects.
     * @deprecated Use `updateActiveItem` instead.
     * \@deletion-target 7.0.0
     * @param {?} index The new activeItemIndex.
     * @return {?}
     */
    function (index) {
        this.updateActiveItem(index);
    };
    /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByDelta = /**
     * This method sets the active item, given a list of items and the delta between the
     * currently active item and the new active item. It will calculate differently
     * depending on whether wrap mode is turned on.
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        this._wrap ? this._setActiveInWrapMode(delta) : this._setActiveInDefaultMode(delta);
    };
    /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInWrapMode = /**
     * Sets the active item properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        var /** @type {?} */ items = this._getItemsArray();
        for (var /** @type {?} */ i = 1; i <= items.length; i++) {
            var /** @type {?} */ index = (this._activeItemIndex + (delta * i) + items.length) % items.length;
            var /** @type {?} */ item = items[index];
            if (!this._skipPredicateFn(item)) {
                this.setActiveItem(index);
                return;
            }
        }
    };
    /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @param {?} delta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveInDefaultMode = /**
     * Sets the active item properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     * @param {?} delta
     * @return {?}
     */
    function (delta) {
        this._setActiveItemByIndex(this._activeItemIndex + delta, delta);
    };
    /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */
    ListKeyManager.prototype._setActiveItemByIndex = /**
     * Sets the active item to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     * @param {?} index
     * @param {?} fallbackDelta
     * @return {?}
     */
    function (index, fallbackDelta) {
        var /** @type {?} */ items = this._getItemsArray();
        if (!items[index]) {
            return;
        }
        while (this._skipPredicateFn(items[index])) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setActiveItem(index);
    };
    /**
     * Returns the items as an array.
     * @return {?}
     */
    ListKeyManager.prototype._getItemsArray = /**
     * Returns the items as an array.
     * @return {?}
     */
    function () {
        return this._items instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"] ? this._items.toArray() : this._items;
    };
    return ListKeyManager;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
ActiveDescendantKeyManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(ActiveDescendantKeyManager, _super);
    function ActiveDescendantKeyManager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    ActiveDescendantKeyManager.prototype.setActiveItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        _super.prototype.setActiveItem.call(this, index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    };
    return ActiveDescendantKeyManager;
}(ListKeyManager));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
var  /**
 * @template T
 */
FocusKeyManager = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_5__["__extends"])(FocusKeyManager, _super);
    function FocusKeyManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._origin = 'program';
        return _this;
    }
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param origin Focus origin to be used when focusing items.
     */
    /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {?}
     */
    FocusKeyManager.prototype.setFocusOrigin = /**
     * Sets the focus origin that will be passed in to the items for any subsequent `focus` calls.
     * @param {?} origin Focus origin to be used when focusing items.
     * @return {?}
     */
    function (origin) {
        this._origin = origin;
        return this;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    FocusKeyManager.prototype.setActiveItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        _super.prototype.setActiveItem.call(this, item);
        if (this.activeItem) {
            this.activeItem.focus(this._origin);
        }
    };
    return FocusKeyManager;
}(ListKeyManager));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Utility for checking the interactivity of an element, such as whether is is focusable or
 * tabbable.
 */
var InteractivityChecker = /** @class */ (function () {
    function InteractivityChecker(_platform) {
        this._platform = _platform;
    }
    /**
     * Gets whether an element is disabled.
     *
     * @param element Element to be checked.
     * @returns Whether the element is disabled.
     */
    /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    InteractivityChecker.prototype.isDisabled = /**
     * Gets whether an element is disabled.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is disabled.
     */
    function (element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    };
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @returns Whether the element is visible.
     */
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    InteractivityChecker.prototype.isVisible = /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     *
     * @param {?} element
     * @return {?} Whether the element is visible.
     */
    function (element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    };
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param element Element to be checked.
     * @returns Whether the element is tabbable.
     */
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    InteractivityChecker.prototype.isTabbable = /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is tabbable.
     */
    function (element) {
        // Nothing is tabbable on the the server 😎
        if (!this._platform.isBrowser) {
            return false;
        }
        var /** @type {?} */ frameElement = getFrameElement(getWindow(element));
        if (frameElement) {
            var /** @type {?} */ frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
        var /** @type {?} */ tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    };
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param element Element to be checked.
     * @returns Whether the element is focusable.
     */
    /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    InteractivityChecker.prototype.isFocusable = /**
     * Gets whether an element can be focused by the user.
     *
     * @param {?} element Element to be checked.
     * @return {?} Whether the element is focusable.
     */
    function (element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    };
    InteractivityChecker.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    InteractivityChecker.ctorParameters = function () { return [
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], },
    ]; };
    /** @nocollapse */ InteractivityChecker.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function InteractivityChecker_Factory() { return new InteractivityChecker(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); }, token: InteractivityChecker, providedIn: "root" });
    return InteractivityChecker;
}());
/**
 * Returns the frame element from a window object. Since browsers like MS Edge throw errors if
 * the frameElement property is being accessed from a different host address, this property
 * should be accessed carefully.
 * @param {?} window
 * @return {?}
 */
function getFrameElement(window) {
    try {
        return /** @type {?} */ (window.frameElement);
    }
    catch (/** @type {?} */ e) {
        return null;
    }
}
/**
 * Checks whether the specified element has any geometry / rectangles.
 * @param {?} element
 * @return {?}
 */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight ||
        (typeof element.getClientRects === 'function' && element.getClientRects().length));
}
/**
 * Gets whether an element's
 * @param {?} element
 * @return {?}
 */
function isNativeFormElement(element) {
    var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/**
 * Gets whether an element is an `<input type="hidden">`.
 * @param {?} element
 * @return {?}
 */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/**
 * Gets whether an element is an anchor that has an href attribute.
 * @param {?} element
 * @return {?}
 */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/**
 * Gets whether an element is an input element.
 * @param {?} element
 * @return {?}
 */
function isInputElement(element) {
    return element.nodeName.toLowerCase() == 'input';
}
/**
 * Gets whether an element is an anchor element.
 * @param {?} element
 * @return {?}
 */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/**
 * Gets whether an element has a valid tabindex.
 * @param {?} element
 * @return {?}
 */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    var /** @type {?} */ tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 * @param {?} element
 * @return {?}
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var /** @type {?} */ tabIndex = parseInt(element.getAttribute('tabindex') || '', 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/**
 * Checks whether the specified element is potentially tabbable on iOS
 * @param {?} element
 * @return {?}
 */
function isPotentiallyTabbableIOS(element) {
    var /** @type {?} */ nodeName = element.nodeName.toLowerCase();
    var /** @type {?} */ inputType = nodeName === 'input' && (/** @type {?} */ (element)).type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 * @param {?} element
 * @return {?}
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/**
 * Gets the parent window of a DOM node with regards of being inside of an iframe.
 * @param {?} node
 * @return {?}
 */
function getWindow(node) {
    return node.ownerDocument.defaultView || window;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
var  /**
 * Class that allows for trapping focus within a DOM element.
 *
 * This class currently uses a relatively simple approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like `tabIndex > 0`, flex `order`, and shadow roots can cause to two to misalign.
 */
FocusTrap = /** @class */ (function () {
    function FocusTrap(_element, _checker, _ngZone, _document, deferAnchors) {
        if (deferAnchors === void 0) { deferAnchors = false; }
        this._element = _element;
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
        this._enabled = true;
        if (!deferAnchors) {
            this.attachAnchors();
        }
    }
    Object.defineProperty(FocusTrap.prototype, "enabled", {
        /** Whether the focus trap is active. */
        get: /**
         * Whether the focus trap is active.
         * @return {?}
         */
        function () { return this._enabled; },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._enabled = val;
            if (this._startAnchor && this._endAnchor) {
                this._startAnchor.tabIndex = this._endAnchor.tabIndex = this._enabled ? 0 : -1;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Destroys the focus trap by cleaning up the anchors. */
    /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    FocusTrap.prototype.destroy = /**
     * Destroys the focus trap by cleaning up the anchors.
     * @return {?}
     */
    function () {
        if (this._startAnchor && this._startAnchor.parentNode) {
            this._startAnchor.parentNode.removeChild(this._startAnchor);
        }
        if (this._endAnchor && this._endAnchor.parentNode) {
            this._endAnchor.parentNode.removeChild(this._endAnchor);
        }
        this._startAnchor = this._endAnchor = null;
    };
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     */
    /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?}
     */
    FocusTrap.prototype.attachAnchors = /**
     * Inserts the anchors into the DOM. This is usually done automatically
     * in the constructor, but can be deferred for cases like directives with `*ngIf`.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._startAnchor) {
            this._startAnchor = this._createAnchor();
        }
        if (!this._endAnchor) {
            this._endAnchor = this._createAnchor();
        }
        this._ngZone.runOutsideAngular(function () {
            /** @type {?} */ ((_this._startAnchor)).addEventListener('focus', function () {
                _this.focusLastTabbableElement();
            }); /** @type {?} */
            ((_this._endAnchor)).addEventListener('focus', function () {
                _this.focusFirstTabbableElement();
            });
            if (_this._element.parentNode) {
                _this._element.parentNode.insertBefore(/** @type {?} */ ((_this._startAnchor)), _this._element);
                _this._element.parentNode.insertBefore(/** @type {?} */ ((_this._endAnchor)), _this._element.nextSibling);
            }
        });
    };
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElementWhenReady = /**
     * Waits for the zone to stabilize, then either focuses the first element that the
     * user specified, or the first tabbable element.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusInitialElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElementWhenReady = /**
     * Waits for the zone to stabilize, then focuses
     * the first tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusFirstTabbableElement()); });
        });
    };
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @returns Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElementWhenReady = /**
     * Waits for the zone to stabilize, then focuses
     * the last tabbable element within the focus trap region.
     * @return {?} Returns a promise that resolves with a boolean, depending
     * on whether focus was moved successfuly.
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._executeOnStable(function () { return resolve(_this.focusLastTabbableElement()); });
        });
    };
    /**
     * Get the specified boundary element of the trapped region.
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    FocusTrap.prototype._getRegionBoundary = /**
     * Get the specified boundary element of the trapped region.
     * @param {?} bound The boundary to get (start or end of trapped region).
     * @return {?} The boundary element.
     */
    function (bound) {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var /** @type {?} */ markers = /** @type {?} */ (this._element.querySelectorAll("[cdk-focus-region-" + bound + "], " +
            ("[cdkFocusRegion" + bound + "], ") +
            ("[cdk-focus-" + bound + "]")));
        for (var /** @type {?} */ i = 0; i < markers.length; i++) {
            // @deletion-target 7.0.0
            if (markers[i].hasAttribute("cdk-focus-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated ") +
                    "attribute will be removed in 7.0.0.", markers[i]);
            }
            else if (markers[i].hasAttribute("cdk-focus-region-" + bound)) {
                console.warn("Found use of deprecated attribute 'cdk-focus-region-" + bound + "', " +
                    ("use 'cdkFocusRegion" + bound + "' instead. The deprecated attribute ") +
                    "will be removed in 7.0.0.", markers[i]);
            }
        }
        if (bound == 'start') {
            return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
        }
        return markers.length ?
            markers[markers.length - 1] : this._getLastTabbableElement(this._element);
    };
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusInitialElement = /**
     * Focuses the element that should be focused when the focus trap is initialized.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        // Contains the deprecated version of selector, for temporary backwards comparability.
        var /** @type {?} */ redirectToElement = /** @type {?} */ (this._element.querySelector("[cdk-focus-initial], " +
            "[cdkFocusInitial]"));
        if (redirectToElement) {
            // @deletion-target 7.0.0
            if (redirectToElement.hasAttribute("cdk-focus-initial")) {
                console.warn("Found use of deprecated attribute 'cdk-focus-initial', " +
                    "use 'cdkFocusInitial' instead. The deprecated attribute " +
                    "will be removed in 7.0.0", redirectToElement);
            }
            redirectToElement.focus();
            return true;
        }
        return this.focusFirstTabbableElement();
    };
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusFirstTabbableElement = /**
     * Focuses the first tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        var /** @type {?} */ redirectToElement = this._getRegionBoundary('start');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @returns Whether focus was moved successfuly.
     */
    /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    FocusTrap.prototype.focusLastTabbableElement = /**
     * Focuses the last tabbable element within the focus trap region.
     * @return {?} Whether focus was moved successfuly.
     */
    function () {
        var /** @type {?} */ redirectToElement = this._getRegionBoundary('end');
        if (redirectToElement) {
            redirectToElement.focus();
        }
        return !!redirectToElement;
    };
    /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getFirstTabbableElement = /**
     * Get the first tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order. Note that IE doesn't have `children` for SVG so we fall
        // back to `childNodes` which includes text nodes, comments etc.
        var /** @type {?} */ children = root.children || root.childNodes;
        for (var /** @type {?} */ i = 0; i < children.length; i++) {
            var /** @type {?} */ tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getFirstTabbableElement(/** @type {?} */ (children[i])) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    FocusTrap.prototype._getLastTabbableElement = /**
     * Get the last tabbable element from a DOM subtree (inclusive).
     * @param {?} root
     * @return {?}
     */
    function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        var /** @type {?} */ children = root.children || root.childNodes;
        for (var /** @type {?} */ i = children.length - 1; i >= 0; i--) {
            var /** @type {?} */ tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ?
                this._getLastTabbableElement(/** @type {?} */ (children[i])) :
                null;
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /**
     * Creates an anchor element.
     * @return {?}
     */
    FocusTrap.prototype._createAnchor = /**
     * Creates an anchor element.
     * @return {?}
     */
    function () {
        var /** @type {?} */ anchor = this._document.createElement('div');
        anchor.tabIndex = this._enabled ? 0 : -1;
        anchor.classList.add('cdk-visually-hidden');
        anchor.classList.add('cdk-focus-trap-anchor');
        return anchor;
    };
    /**
     * Executes a function when the zone is stable.
     * @param {?} fn
     * @return {?}
     */
    FocusTrap.prototype._executeOnStable = /**
     * Executes a function when the zone is stable.
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        if (this._ngZone.isStable) {
            fn();
        }
        else {
            this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(fn);
        }
    };
    return FocusTrap;
}());
/**
 * Factory that allows easy instantiation of focus traps.
 */
var FocusTrapFactory = /** @class */ (function () {
    function FocusTrapFactory(_checker, _ngZone, _document) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._document = _document;
    }
    /**
     * Creates a focus-trapped region around the given element.
     * @param element The element around which focus will be trapped.
     * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @returns The created focus trap instance.
     */
    /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    FocusTrapFactory.prototype.create = /**
     * Creates a focus-trapped region around the given element.
     * @param {?} element The element around which focus will be trapped.
     * @param {?=} deferCaptureElements Defers the creation of focus-capturing elements to be done
     *     manually by the user.
     * @return {?} The created focus trap instance.
     */
    function (element, deferCaptureElements) {
        if (deferCaptureElements === void 0) { deferCaptureElements = false; }
        return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
    };
    FocusTrapFactory.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    FocusTrapFactory.ctorParameters = function () { return [
        { type: InteractivityChecker, },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ FocusTrapFactory.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FocusTrapFactory_Factory() { return new FocusTrapFactory(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(InteractivityChecker), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: FocusTrapFactory, providedIn: "root" });
    return FocusTrapFactory;
}());
/**
 * Directive for trapping focus within a region.
 */
var CdkTrapFocus = /** @class */ (function () {
    function CdkTrapFocus(_elementRef, _focusTrapFactory, _document) {
        this._elementRef = _elementRef;
        this._focusTrapFactory = _focusTrapFactory;
        /**
         * Previously focused element to restore focus to upon destroy when using autoCapture.
         */
        this._previouslyFocusedElement = null;
        this._document = _document;
        this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
    Object.defineProperty(CdkTrapFocus.prototype, "enabled", {
        get: /**
         * Whether the focus trap is active.
         * @return {?}
         */
        function () { return this.focusTrap.enabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this.focusTrap.enabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CdkTrapFocus.prototype, "autoCapture", {
        get: /**
         * Whether the directive should automatially move focus into the trapped region upon
         * initialization and return focus to the previous activeElement upon destruction.
         * @return {?}
         */
        function () { return this._autoCapture; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._autoCapture = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_7__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusTrap.destroy();
        // If we stored a previously focused element when using autoCapture, return focus to that
        // element now that the trapped region is being destroyed.
        if (this._previouslyFocusedElement) {
            this._previouslyFocusedElement.focus();
            this._previouslyFocusedElement = null;
        }
    };
    /**
     * @return {?}
     */
    CdkTrapFocus.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.focusTrap.attachAnchors();
        if (this.autoCapture) {
            this._previouslyFocusedElement = /** @type {?} */ (this._document.activeElement);
            this.focusTrap.focusInitialElementWhenReady();
        }
    };
    CdkTrapFocus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkTrapFocus]',
                    exportAs: 'cdkTrapFocus',
                },] },
    ];
    /** @nocollapse */
    CdkTrapFocus.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: FocusTrapFactory, },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
    ]; };
    CdkTrapFocus.propDecorators = {
        "enabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocus',] },],
        "autoCapture": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['cdkTrapFocusAutoCapture',] },],
    };
    return CdkTrapFocus;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// The token for the live announcer element is defined in a separate file from LiveAnnouncer
// as a workaround for https://github.com/angular/angular/issues/22559
var /** @type {?} */ LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('liveAnnouncerElement', {
    providedIn: 'root',
    factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LiveAnnouncer = /** @class */ (function () {
    function LiveAnnouncer(elementToken, _document) {
        this._document = _document;
        // We inject the live element as `any` because the constructor signature cannot reference
        // browser globals (HTMLElement) on non-browser environments, since having a class decorator
        // causes TypeScript to preserve the constructor signature types.
        this._liveElement = elementToken || this._createLiveElement();
    }
    /**
     * Announces a message to screenreaders.
     * @param message Message to be announced to the screenreader
     * @param politeness The politeness of the announcer element
     * @returns Promise that will be resolved when the message is added to the DOM.
     */
    /**
     * Announces a message to screenreaders.
     * @param {?} message Message to be announced to the screenreader
     * @param {?=} politeness The politeness of the announcer element
     * @return {?} Promise that will be resolved when the message is added to the DOM.
     */
    LiveAnnouncer.prototype.announce = /**
     * Announces a message to screenreaders.
     * @param {?} message Message to be announced to the screenreader
     * @param {?=} politeness The politeness of the announcer element
     * @return {?} Promise that will be resolved when the message is added to the DOM.
     */
    function (message, politeness) {
        var _this = this;
        if (politeness === void 0) { politeness = 'polite'; }
        this._liveElement.textContent = '';
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', politeness);
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this._liveElement.textContent = message;
                resolve();
            }, 100);
        });
    };
    /**
     * @return {?}
     */
    LiveAnnouncer.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
        }
    };
    /**
     * @return {?}
     */
    LiveAnnouncer.prototype._createLiveElement = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ liveEl = this._document.createElement('div');
        liveEl.classList.add('cdk-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        this._document.body.appendChild(liveEl);
        return liveEl;
    };
    LiveAnnouncer.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    LiveAnnouncer.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [LIVE_ANNOUNCER_ELEMENT_TOKEN,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],] },] },
    ]; };
    /** @nocollapse */ LiveAnnouncer.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function LiveAnnouncer_Factory() { return new LiveAnnouncer(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"])); }, token: LiveAnnouncer, providedIn: "root" });
    return LiveAnnouncer;
}());
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 * @param {?} parentDispatcher
 * @param {?} liveElement
 * @param {?} _document
 * @return {?}
 */
function LIVE_ANNOUNCER_PROVIDER_FACTORY(parentDispatcher, liveElement, _document) {
    return parentDispatcher || new LiveAnnouncer(liveElement, _document);
}
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 */
var /** @type {?} */ LIVE_ANNOUNCER_PROVIDER = {
    // If there is already a LiveAnnouncer available, use that. Otherwise, provide a new one.
    provide: LiveAnnouncer,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), LiveAnnouncer],
        [new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"](LIVE_ANNOUNCER_ELEMENT_TOKEN)],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"],
    ],
    useFactory: LIVE_ANNOUNCER_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// This is the value used by AngularJS Material. Through trial and error (on iPhone 6S) they found
// that a value of around 650ms seems appropriate.
var /** @type {?} */ TOUCH_BUFFER_MS = 650;
/**
 * Monitors mouse and keyboard events to determine the cause of focus events.
 */
var FocusMonitor = /** @class */ (function () {
    function FocusMonitor(_ngZone, _platform) {
        this._ngZone = _ngZone;
        this._platform = _platform;
        /**
         * The focus origin that the next focus event is a result of.
         */
        this._origin = null;
        /**
         * Whether the window has just been focused.
         */
        this._windowFocused = false;
        /**
         * Map of elements being monitored to their info.
         */
        this._elementInfo = new Map();
        /**
         * A map of global objects to lists of current listeners.
         */
        this._unregisterGlobalListeners = function () { };
        /**
         * The number of elements currently being monitored.
         */
        this._monitoredElementCount = 0;
    }
    /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param element The element to monitor
     * @param checkChildren Whether to count the element as focused when its children are focused.
     * @returns An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param {?} element The element to monitor
     * @param {?=} checkChildren Whether to count the element as focused when its children are focused.
     * @return {?} An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    FocusMonitor.prototype.monitor = /**
     * Monitors focus on an element and applies appropriate CSS classes.
     * @param {?} element The element to monitor
     * @param {?=} checkChildren Whether to count the element as focused when its children are focused.
     * @return {?} An observable that emits when the focus state of the element changes.
     *     When the element is blurred, null will be emitted.
     */
    function (element, checkChildren) {
        var _this = this;
        if (checkChildren === void 0) { checkChildren = false; }
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        // Check if we're already monitoring this element.
        if (this._elementInfo.has(element)) {
            var /** @type {?} */ cachedInfo = this._elementInfo.get(element); /** @type {?} */
            ((cachedInfo)).checkChildren = checkChildren;
            return /** @type {?} */ ((cachedInfo)).subject.asObservable();
        }
        // Create monitored element info.
        var /** @type {?} */ info = {
            unlisten: function () { },
            checkChildren: checkChildren,
            subject: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]()
        };
        this._elementInfo.set(element, info);
        this._incrementMonitoredElementCount();
        // Start listening. We need to listen in capture phase since focus events don't bubble.
        var /** @type {?} */ focusListener = function (event) { return _this._onFocus(event, element); };
        var /** @type {?} */ blurListener = function (event) { return _this._onBlur(event, element); };
        this._ngZone.runOutsideAngular(function () {
            element.addEventListener('focus', focusListener, true);
            element.addEventListener('blur', blurListener, true);
        });
        // Create an unlisten function for later.
        info.unlisten = function () {
            element.removeEventListener('focus', focusListener, true);
            element.removeEventListener('blur', blurListener, true);
        };
        return info.subject.asObservable();
    };
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param element The element to stop monitoring.
     */
    /**
     * Stops monitoring an element and removes all focus classes.
     * @param {?} element The element to stop monitoring.
     * @return {?}
     */
    FocusMonitor.prototype.stopMonitoring = /**
     * Stops monitoring an element and removes all focus classes.
     * @param {?} element The element to stop monitoring.
     * @return {?}
     */
    function (element) {
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (elementInfo) {
            elementInfo.unlisten();
            elementInfo.subject.complete();
            this._setClasses(element);
            this._elementInfo.delete(element);
            this._decrementMonitoredElementCount();
        }
    };
    /**
     * Focuses the element via the specified focus origin.
     * @param element The element to focus.
     * @param origin The focus origin.
     */
    /**
     * Focuses the element via the specified focus origin.
     * @param {?} element The element to focus.
     * @param {?} origin The focus origin.
     * @return {?}
     */
    FocusMonitor.prototype.focusVia = /**
     * Focuses the element via the specified focus origin.
     * @param {?} element The element to focus.
     * @param {?} origin The focus origin.
     * @return {?}
     */
    function (element, origin) {
        this._setOriginForCurrentEventQueue(origin);
        // `focus` isn't available on the server
        if (typeof element.focus === 'function') {
            element.focus();
        }
    };
    /**
     * @return {?}
     */
    FocusMonitor.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._elementInfo.forEach(function (_info, element) { return _this.stopMonitoring(element); });
    };
    /**
     * Register necessary event listeners on the document and window.
     * @return {?}
     */
    FocusMonitor.prototype._registerGlobalListeners = /**
     * Register necessary event listeners on the document and window.
     * @return {?}
     */
    function () {
        var _this = this;
        // Do nothing if we're not on the browser platform.
        if (!this._platform.isBrowser) {
            return;
        }
        // On keydown record the origin and clear any touch event that may be in progress.
        var /** @type {?} */ documentKeydownListener = function () {
            _this._lastTouchTarget = null;
            _this._setOriginForCurrentEventQueue('keyboard');
        };
        // On mousedown record the origin only if there is not touch target, since a mousedown can
        // happen as a result of a touch event.
        var /** @type {?} */ documentMousedownListener = function () {
            if (!_this._lastTouchTarget) {
                _this._setOriginForCurrentEventQueue('mouse');
            }
        };
        // When the touchstart event fires the focus event is not yet in the event queue. This means
        // we can't rely on the trick used above (setting timeout of 0ms). Instead we wait 650ms to
        // see if a focus happens.
        var /** @type {?} */ documentTouchstartListener = function (event) {
            if (_this._touchTimeoutId != null) {
                clearTimeout(_this._touchTimeoutId);
            }
            _this._lastTouchTarget = event.target;
            _this._touchTimeoutId = setTimeout(function () { return _this._lastTouchTarget = null; }, TOUCH_BUFFER_MS);
        };
        // Make a note of when the window regains focus, so we can restore the origin info for the
        // focused element.
        var /** @type {?} */ windowFocusListener = function () {
            _this._windowFocused = true;
            _this._windowFocusTimeoutId = setTimeout(function () { return _this._windowFocused = false; });
        };
        // Note: we listen to events in the capture phase so we can detect them even if the user stops
        // propagation.
        this._ngZone.runOutsideAngular(function () {
            document.addEventListener('keydown', documentKeydownListener, true);
            document.addEventListener('mousedown', documentMousedownListener, true);
            document.addEventListener('touchstart', documentTouchstartListener, Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["supportsPassiveEventListeners"])() ? (/** @type {?} */ ({ passive: true, capture: true })) : true);
            window.addEventListener('focus', windowFocusListener);
        });
        this._unregisterGlobalListeners = function () {
            document.removeEventListener('keydown', documentKeydownListener, true);
            document.removeEventListener('mousedown', documentMousedownListener, true);
            document.removeEventListener('touchstart', documentTouchstartListener, Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["supportsPassiveEventListeners"])() ? (/** @type {?} */ ({ passive: true, capture: true })) : true);
            window.removeEventListener('focus', windowFocusListener);
            // Clear timeouts for all potentially pending timeouts to prevent the leaks.
            clearTimeout(_this._windowFocusTimeoutId);
            clearTimeout(_this._touchTimeoutId);
            clearTimeout(_this._originTimeoutId);
        };
    };
    /**
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    FocusMonitor.prototype._toggleClass = /**
     * @param {?} element
     * @param {?} className
     * @param {?} shouldSet
     * @return {?}
     */
    function (element, className, shouldSet) {
        if (shouldSet) {
            element.classList.add(className);
        }
        else {
            element.classList.remove(className);
        }
    };
    /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    FocusMonitor.prototype._setClasses = /**
     * Sets the focus classes on the element based on the given focus origin.
     * @param {?} element The element to update the classes on.
     * @param {?=} origin The focus origin.
     * @return {?}
     */
    function (element, origin) {
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (elementInfo) {
            this._toggleClass(element, 'cdk-focused', !!origin);
            this._toggleClass(element, 'cdk-touch-focused', origin === 'touch');
            this._toggleClass(element, 'cdk-keyboard-focused', origin === 'keyboard');
            this._toggleClass(element, 'cdk-mouse-focused', origin === 'mouse');
            this._toggleClass(element, 'cdk-program-focused', origin === 'program');
        }
    };
    /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @param {?} origin The origin to set.
     * @return {?}
     */
    FocusMonitor.prototype._setOriginForCurrentEventQueue = /**
     * Sets the origin and schedules an async function to clear it at the end of the event queue.
     * @param {?} origin The origin to set.
     * @return {?}
     */
    function (origin) {
        var _this = this;
        this._ngZone.runOutsideAngular(function () {
            _this._origin = origin;
            _this._originTimeoutId = setTimeout(function () { return _this._origin = null; });
        });
    };
    /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    FocusMonitor.prototype._wasCausedByTouch = /**
     * Checks whether the given focus event was caused by a touchstart event.
     * @param {?} event The focus event to check.
     * @return {?} Whether the event was caused by a touch.
     */
    function (event) {
        // Note(mmalerba): This implementation is not quite perfect, there is a small edge case.
        // Consider the following dom structure:
        //
        // <div #parent tabindex="0" cdkFocusClasses>
        //   <div #child (click)="#parent.focus()"></div>
        // </div>
        //
        // If the user touches the #child element and the #parent is programmatically focused as a
        // result, this code will still consider it to have been caused by the touch event and will
        // apply the cdk-touch-focused class rather than the cdk-program-focused class. This is a
        // relatively small edge-case that can be worked around by using
        // focusVia(parentEl, 'program') to focus the parent element.
        //
        // If we decide that we absolutely must handle this case correctly, we can do so by listening
        // for the first focus event after the touchstart, and then the first blur event after that
        // focus event. When that blur event fires we know that whatever follows is not a result of the
        // touchstart.
        var /** @type {?} */ focusTarget = event.target;
        return this._lastTouchTarget instanceof Node && focusTarget instanceof Node &&
            (focusTarget === this._lastTouchTarget || focusTarget.contains(this._lastTouchTarget));
    };
    /**
     * Handles focus events on a registered element.
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    FocusMonitor.prototype._onFocus = /**
     * Handles focus events on a registered element.
     * @param {?} event The focus event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    function (event, element) {
        // NOTE(mmalerba): We currently set the classes based on the focus origin of the most recent
        // focus event affecting the monitored element. If we want to use the origin of the first event
        // instead we should check for the cdk-focused class here and return if the element already has
        // it. (This only matters for elements that have includesChildren = true).
        // If we are not counting child-element-focus as focused, make sure that the event target is the
        // monitored element itself.
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (!elementInfo.checkChildren && element !== event.target)) {
            return;
        }
        // If we couldn't detect a cause for the focus event, it's due to one of three reasons:
        // 1) The window has just regained focus, in which case we want to restore the focused state of
        //    the element from before the window blurred.
        // 2) It was caused by a touch event, in which case we mark the origin as 'touch'.
        // 3) The element was programmatically focused, in which case we should mark the origin as
        //    'program'.
        var /** @type {?} */ origin = this._origin;
        if (!origin) {
            if (this._windowFocused && this._lastFocusOrigin) {
                origin = this._lastFocusOrigin;
            }
            else if (this._wasCausedByTouch(event)) {
                origin = 'touch';
            }
            else {
                origin = 'program';
            }
        }
        this._setClasses(element, origin);
        this._emitOrigin(elementInfo.subject, origin);
        this._lastFocusOrigin = origin;
    };
    /**
     * Handles blur events on a registered element.
     * @param event The blur event.
     * @param element The monitored element.
     */
    /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    FocusMonitor.prototype._onBlur = /**
     * Handles blur events on a registered element.
     * @param {?} event The blur event.
     * @param {?} element The monitored element.
     * @return {?}
     */
    function (event, element) {
        // If we are counting child-element-focus as focused, make sure that we aren't just blurring in
        // order to focus another child of the monitored element.
        var /** @type {?} */ elementInfo = this._elementInfo.get(element);
        if (!elementInfo || (elementInfo.checkChildren && event.relatedTarget instanceof Node &&
            element.contains(event.relatedTarget))) {
            return;
        }
        this._setClasses(element);
        this._emitOrigin(elementInfo.subject, null);
    };
    /**
     * @param {?} subject
     * @param {?} origin
     * @return {?}
     */
    FocusMonitor.prototype._emitOrigin = /**
     * @param {?} subject
     * @param {?} origin
     * @return {?}
     */
    function (subject, origin) {
        this._ngZone.run(function () { return subject.next(origin); });
    };
    /**
     * @return {?}
     */
    FocusMonitor.prototype._incrementMonitoredElementCount = /**
     * @return {?}
     */
    function () {
        // Register global listeners when first element is monitored.
        if (++this._monitoredElementCount == 1) {
            this._registerGlobalListeners();
        }
    };
    /**
     * @return {?}
     */
    FocusMonitor.prototype._decrementMonitoredElementCount = /**
     * @return {?}
     */
    function () {
        // Unregister global listeners when last element is unmonitored.
        if (!--this._monitoredElementCount) {
            this._unregisterGlobalListeners();
            this._unregisterGlobalListeners = function () { };
        }
    };
    FocusMonitor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    FocusMonitor.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], },
    ]; };
    /** @nocollapse */ FocusMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function FocusMonitor_Factory() { return new FocusMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"])); }, token: FocusMonitor, providedIn: "root" });
    return FocusMonitor;
}());
/**
 * Directive that determines how a particular element was focused (via keyboard, mouse, touch, or
 * programmatically) and adds corresponding classes to the element.
 *
 * There are two variants of this directive:
 * 1) cdkMonitorElementFocus: does not consider an element to be focused if one of its children is
 *    focused.
 * 2) cdkMonitorSubtreeFocus: considers an element focused if it or any of its children are focused.
 */
var CdkMonitorFocus = /** @class */ (function () {
    function CdkMonitorFocus(_elementRef, _focusMonitor) {
        var _this = this;
        this._elementRef = _elementRef;
        this._focusMonitor = _focusMonitor;
        this.cdkFocusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._monitorSubscription = this._focusMonitor.monitor(this._elementRef.nativeElement, this._elementRef.nativeElement.hasAttribute('cdkMonitorSubtreeFocus'))
            .subscribe(function (origin) { return _this.cdkFocusChange.emit(origin); });
    }
    /**
     * @return {?}
     */
    CdkMonitorFocus.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._elementRef.nativeElement);
        this._monitorSubscription.unsubscribe();
    };
    CdkMonitorFocus.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]',
                },] },
    ];
    /** @nocollapse */
    CdkMonitorFocus.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: FocusMonitor, },
    ]; };
    CdkMonitorFocus.propDecorators = {
        "cdkFocusChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    };
    return CdkMonitorFocus;
}());
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 * @param {?} parentDispatcher
 * @param {?} ngZone
 * @param {?} platform
 * @return {?}
 */
function FOCUS_MONITOR_PROVIDER_FACTORY(parentDispatcher, ngZone, platform) {
    return parentDispatcher || new FocusMonitor(ngZone, platform);
}
/**
 * \@docs-private \@deprecated \@deletion-target 7.0.0
 */
var /** @type {?} */ FOCUS_MONITOR_PROVIDER = {
    // If there is already a FocusMonitor available, use that. Otherwise, provide a new one.
    provide: FocusMonitor,
    deps: [[new _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"](), FocusMonitor], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"]],
    useFactory: FOCUS_MONITOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 * @param {?} event
 * @return {?}
 */
function isFakeMousedownFromScreenReader(event) {
    return event.buttons === 0;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var A11yModule = /** @class */ (function () {
    function A11yModule() {
    }
    A11yModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"]],
                    declarations: [CdkTrapFocus, CdkMonitorFocus],
                    exports: [CdkTrapFocus, CdkMonitorFocus],
                },] },
    ];
    return A11yModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=a11y.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/bidi.es5.js":
/*!****************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/bidi.es5.js ***!
  \****************************************************/
/*! exports provided: Directionality, DIR_DOCUMENT, Dir, BidiModule, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directionality", function() { return Directionality; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DIR_DOCUMENT", function() { return DIR_DOCUMENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dir", function() { return Dir; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidiModule", function() { return BidiModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return DIR_DOCUMENT_FACTORY; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Injection token used to inject the document into Directionality.
 * This is used so that the value can be faked in tests.
 *
 * We can't use the real document in tests because changing the real `dir` causes geometry-based
 * tests in Safari to fail.
 *
 * We also can't re-provide the DOCUMENT token from platform-brower because the unit tests
 * themselves use things like `querySelector` in test code.
 *
 * This token is defined in a separate file from Directionality as a workaround for
 * https://github.com/angular/angular/issues/22559
 *
 * \@docs-private
 */
var /** @type {?} */ DIR_DOCUMENT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('cdk-dir-doc', {
    providedIn: 'root',
    factory: DIR_DOCUMENT_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function DIR_DOCUMENT_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The directionality (LTR / RTL) context for the application (or a subtree of it).
 * Exposes the current direction and a stream of direction changes.
 */
var Directionality = /** @class */ (function () {
    function Directionality(_document) {
        /**
         * The current 'ltr' or 'rtl' value.
         */
        this.value = 'ltr';
        /**
         * Stream that emits whenever the 'ltr' / 'rtl' state changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        if (_document) {
            // TODO: handle 'auto' value -
            // We still need to account for dir="auto".
            // It looks like HTMLElemenet.dir is also "auto" when that's set to the attribute,
            // but getComputedStyle return either "ltr" or "rtl". avoiding getComputedStyle for now
            var /** @type {?} */ bodyDir = _document.body ? _document.body.dir : null;
            var /** @type {?} */ htmlDir = _document.documentElement ? _document.documentElement.dir : null;
            this.value = /** @type {?} */ ((bodyDir || htmlDir || 'ltr'));
        }
    }
    /**
     * @return {?}
     */
    Directionality.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Directionality.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Directionality.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [DIR_DOCUMENT,] },] },
    ]; };
    /** @nocollapse */ Directionality.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function Directionality_Factory() { return new Directionality(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["inject"])(DIR_DOCUMENT, 8)); }, token: Directionality, providedIn: "root" });
    return Directionality;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Directive to listen for changes of direction of part of the DOM.
 *
 * Provides itself as Directionality such that descendant directives only need to ever inject
 * Directionality to get the closest direction.
 */
var Dir = /** @class */ (function () {
    function Dir() {
        this._dir = 'ltr';
        /**
         * Whether the `value` has been set to its initial value.
         */
        this._isInitialized = false;
        /**
         * Event emitted when the direction changes.
         */
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        get: /**
         * \@docs-private
         * @return {?}
         */
        function () { return this._dir; },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            var /** @type {?} */ old = this._dir;
            this._dir = v;
            if (old !== this._dir && this._isInitialized) {
                this.change.emit(this._dir);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        /** Current layout direction of the element. */
        get: /**
         * Current layout direction of the element.
         * @return {?}
         */
        function () { return this.dir; },
        enumerable: true,
        configurable: true
    });
    /** Initialize once default value has been set. */
    /**
     * Initialize once default value has been set.
     * @return {?}
     */
    Dir.prototype.ngAfterContentInit = /**
     * Initialize once default value has been set.
     * @return {?}
     */
    function () {
        this._isInitialized = true;
    };
    /**
     * @return {?}
     */
    Dir.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.change.complete();
    };
    Dir.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: '[dir]',
                    providers: [{ provide: Directionality, useExisting: Dir }],
                    host: { '[dir]': 'dir' },
                    exportAs: 'dir',
                },] },
    ];
    /** @nocollapse */
    Dir.propDecorators = {
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['dirChange',] },],
        "dir": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    };
    return Dir;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BidiModule = /** @class */ (function () {
    function BidiModule() {
    }
    BidiModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    exports: [Dir],
                    declarations: [Dir],
                },] },
    ];
    return BidiModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=bidi.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/coercion.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/coercion.es5.js ***!
  \********************************************************/
/*! exports provided: coerceBooleanProperty, coerceNumberProperty, _isNumberValue, coerceArray, coerceCssPixelValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceBooleanProperty", function() { return coerceBooleanProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceNumberProperty", function() { return coerceNumberProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_isNumberValue", function() { return _isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceArray", function() { return coerceArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "coerceCssPixelValue", function() { return coerceCssPixelValue; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Coerces a data-bound value (typically a string) to a boolean.
 * @param {?} value
 * @return {?}
 */
function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @param {?} value
 * @param {?=} fallbackValue
 * @return {?}
 */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    return _isNumberValue(value) ? Number(value) : fallbackValue;
}
/**
 * Whether the provided value is considered a number.
 * \@docs-private
 * @param {?} value
 * @return {?}
 */
function _isNumberValue(value) {
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return !isNaN(parseFloat(/** @type {?} */ (value))) && !isNaN(Number(value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Wraps the provided value in an array, unless the provided value is an array.
 * @template T
 * @param {?} value
 * @return {?}
 */
function coerceArray(value) {
    return Array.isArray(value) ? value : [value];
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Coerces a value to a CSS pixel value.
 * @param {?} value
 * @return {?}
 */
function coerceCssPixelValue(value) {
    if (value == null) {
        return '';
    }
    return typeof value === 'string' ? value : value + "px";
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=coercion.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/collections.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/collections.es5.js ***!
  \***********************************************************/
/*! exports provided: UniqueSelectionDispatcher, DataSource, SelectionModel, getMultipleValuesInSingleSelectionError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueSelectionDispatcher", function() { return UniqueSelectionDispatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSource", function() { return DataSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionModel", function() { return SelectionModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultipleValuesInSingleSelectionError", function() { return getMultipleValuesInSingleSelectionError; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @abstract
 * @template T
 */
var  /**
 * @abstract
 * @template T
 */
DataSource = /** @class */ (function () {
    function DataSource() {
    }
    return DataSource;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
var  /**
 * Class to be used to power selecting one or more options from a list.
 * @template T
 */
SelectionModel = /** @class */ (function () {
    function SelectionModel(_multiple, initiallySelectedValues, _emitChanges) {
        if (_multiple === void 0) { _multiple = false; }
        if (_emitChanges === void 0) { _emitChanges = true; }
        var _this = this;
        this._multiple = _multiple;
        this._emitChanges = _emitChanges;
        /**
         * Currently-selected values.
         */
        this._selection = new Set();
        /**
         * Keeps track of the deselected options that haven't been emitted by the change event.
         */
        this._deselectedToEmit = [];
        /**
         * Keeps track of the selected options that haven't been emitted by the change event.
         */
        this._selectedToEmit = [];
        /**
         * Event emitted when the value has changed.
         */
        this.onChange = this._emitChanges ? new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]() : null;
        if (initiallySelectedValues && initiallySelectedValues.length) {
            if (_multiple) {
                initiallySelectedValues.forEach(function (value) { return _this._markSelected(value); });
            }
            else {
                this._markSelected(initiallySelectedValues[0]);
            }
            // Clear the array in order to avoid firing the change event for preselected values.
            this._selectedToEmit.length = 0;
        }
    }
    Object.defineProperty(SelectionModel.prototype, "selected", {
        /** Selected values. */
        get: /**
         * Selected values.
         * @return {?}
         */
        function () {
            if (!this._selected) {
                this._selected = Array.from(this._selection.values());
            }
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects a value or an array of values.
     */
    /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.select = /**
     * Selects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach(function (value) { return _this._markSelected(value); });
        this._emitChangeEvent();
    };
    /**
     * Deselects a value or an array of values.
     */
    /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    SelectionModel.prototype.deselect = /**
     * Deselects a value or an array of values.
     * @param {...?} values
     * @return {?}
     */
    function () {
        var _this = this;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        this._verifyValueAssignment(values);
        values.forEach(function (value) { return _this._unmarkSelected(value); });
        this._emitChangeEvent();
    };
    /**
     * Toggles a value between selected and deselected.
     */
    /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.toggle = /**
     * Toggles a value between selected and deselected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.isSelected(value) ? this.deselect(value) : this.select(value);
    };
    /**
     * Clears all of the selected values.
     */
    /**
     * Clears all of the selected values.
     * @return {?}
     */
    SelectionModel.prototype.clear = /**
     * Clears all of the selected values.
     * @return {?}
     */
    function () {
        this._unmarkAll();
        this._emitChangeEvent();
    };
    /**
     * Determines whether a value is selected.
     */
    /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype.isSelected = /**
     * Determines whether a value is selected.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this._selection.has(value);
    };
    /**
     * Determines whether the model does not have a value.
     */
    /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    SelectionModel.prototype.isEmpty = /**
     * Determines whether the model does not have a value.
     * @return {?}
     */
    function () {
        return this._selection.size === 0;
    };
    /**
     * Determines whether the model has a value.
     */
    /**
     * Determines whether the model has a value.
     * @return {?}
     */
    SelectionModel.prototype.hasValue = /**
     * Determines whether the model has a value.
     * @return {?}
     */
    function () {
        return !this.isEmpty();
    };
    /**
     * Sorts the selected values based on a predicate function.
     */
    /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    SelectionModel.prototype.sort = /**
     * Sorts the selected values based on a predicate function.
     * @param {?=} predicate
     * @return {?}
     */
    function (predicate) {
        if (this._multiple && this._selected) {
            this._selected.sort(predicate);
        }
    };
    /**
     * Emits a change event and clears the records of selected and deselected values.
     * @return {?}
     */
    SelectionModel.prototype._emitChangeEvent = /**
     * Emits a change event and clears the records of selected and deselected values.
     * @return {?}
     */
    function () {
        // Clear the selected values so they can be re-cached.
        this._selected = null;
        if (this._selectedToEmit.length || this._deselectedToEmit.length) {
            if (this.onChange) {
                this.onChange.next({
                    source: this,
                    added: this._selectedToEmit,
                    removed: this._deselectedToEmit
                });
            }
            this._deselectedToEmit = [];
            this._selectedToEmit = [];
        }
    };
    /**
     * Selects a value.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._markSelected = /**
     * Selects a value.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (!this.isSelected(value)) {
            if (!this._multiple) {
                this._unmarkAll();
            }
            this._selection.add(value);
            if (this._emitChanges) {
                this._selectedToEmit.push(value);
            }
        }
    };
    /**
     * Deselects a value.
     * @param {?} value
     * @return {?}
     */
    SelectionModel.prototype._unmarkSelected = /**
     * Deselects a value.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isSelected(value)) {
            this._selection.delete(value);
            if (this._emitChanges) {
                this._deselectedToEmit.push(value);
            }
        }
    };
    /**
     * Clears out the selected values.
     * @return {?}
     */
    SelectionModel.prototype._unmarkAll = /**
     * Clears out the selected values.
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.isEmpty()) {
            this._selection.forEach(function (value) { return _this._unmarkSelected(value); });
        }
    };
    /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @param {?} values
     * @return {?}
     */
    SelectionModel.prototype._verifyValueAssignment = /**
     * Verifies the value assignment and throws an error if the specified value array is
     * including multiple values while the selection model is not supporting multiple values.
     * @param {?} values
     * @return {?}
     */
    function (values) {
        if (values.length > 1 && !this._multiple) {
            throw getMultipleValuesInSingleSelectionError();
        }
    };
    return SelectionModel;
}());
/**
 * Returns an error that reports that multiple values are passed into a selection model
 * with a single value.
 * @return {?}
 */
function getMultipleValuesInSingleSelectionError() {
    return Error('Cannot pass multiple values into SelectionModel with single-value mode.');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Class to coordinate unique selection based on name.
 * Intended to be consumed as an Angular service.
 * This service is needed because native radio change events are only fired on the item currently
 * being selected, and we still need to uncheck the previous selection.
 *
 * This service does not *store* any IDs and names because they may change at any time, so it is
 * less error-prone if they are simply passed through when the events occur.
 */
var UniqueSelectionDispatcher = /** @class */ (function () {
    function UniqueSelectionDispatcher() {
        this._listeners = [];
    }
    /**
     * Notify other items that selection for the given name has been set.
     * @param id ID of the item.
     * @param name Name of the item.
     */
    /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.notify = /**
     * Notify other items that selection for the given name has been set.
     * @param {?} id ID of the item.
     * @param {?} name Name of the item.
     * @return {?}
     */
    function (id, name) {
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(id, name);
        }
    };
    /**
     * Listen for future changes to item selection.
     * @return Function used to deregister listener
     */
    /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    UniqueSelectionDispatcher.prototype.listen = /**
     * Listen for future changes to item selection.
     * @param {?} listener
     * @return {?} Function used to deregister listener
     */
    function (listener) {
        var _this = this;
        this._listeners.push(listener);
        return function () {
            _this._listeners = _this._listeners.filter(function (registered) {
                return listener !== registered;
            });
        };
    };
    /**
     * @return {?}
     */
    UniqueSelectionDispatcher.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._listeners = [];
    };
    UniqueSelectionDispatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ UniqueSelectionDispatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["defineInjectable"])({ factory: function UniqueSelectionDispatcher_Factory() { return new UniqueSelectionDispatcher(); }, token: UniqueSelectionDispatcher, providedIn: "root" });
    return UniqueSelectionDispatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=collections.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/keycodes.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/keycodes.es5.js ***!
  \********************************************************/
/*! exports provided: MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CONTROL, ALT, PAUSE, CAPS_LOCK, ESCAPE, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT_ARROW, UP_ARROW, RIGHT_ARROW, DOWN_ARROW, PLUS_SIGN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, QUESTION_MARK, AT_SIGN, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, CONTEXT_MENU, NUMPAD_ZERO, NUMPAD_ONE, NUMPAD_TWO, NUMPAD_THREE, NUMPAD_FOUR, NUMPAD_FIVE, NUMPAD_SIX, NUMPAD_SEVEN, NUMPAD_EIGHT, NUMPAD_NINE, NUMPAD_MULTIPLY, NUMPAD_PLUS, NUMPAD_MINUS, NUMPAD_PERIOD, NUMPAD_DIVIDE, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUM_LOCK, SCROLL_LOCK, FIRST_MEDIA, FF_MINUS, MUTE, VOLUME_DOWN, VOLUME_UP, FF_MUTE, FF_VOLUME_DOWN, LAST_MEDIA, FF_VOLUME_UP, SEMICOLON, EQUALS, COMMA, DASH, SLASH, APOSTROPHE, TILDE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, SINGLE_QUOTE, MAC_META */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_ENTER", function() { return MAC_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_CENTER", function() { return NUM_CENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTER", function() { return ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHIFT", function() { return SHIFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTROL", function() { return CONTROL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALT", function() { return ALT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAUSE", function() { return PAUSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAPS_LOCK", function() { return CAPS_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ESCAPE", function() { return ESCAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE", function() { return SPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_UP", function() { return PAGE_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_DOWN", function() { return PAGE_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "END", function() { return END; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME", function() { return HOME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UP_ARROW", function() { return UP_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOWN_ARROW", function() { return DOWN_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PLUS_SIGN", function() { return PLUS_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINT_SCREEN", function() { return PRINT_SCREEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INSERT", function() { return INSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZERO", function() { return ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ONE", function() { return ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWO", function() { return TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THREE", function() { return THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOUR", function() { return FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIVE", function() { return FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIX", function() { return SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEVEN", function() { return SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EIGHT", function() { return EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NINE", function() { return NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_SEMICOLON", function() { return FF_SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_EQUALS", function() { return FF_EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUESTION_MARK", function() { return QUESTION_MARK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AT_SIGN", function() { return AT_SIGN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return B; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return E; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return H; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return J; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return K; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return M; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return N; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return O; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return P; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return Q; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return T; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return V; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return W; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return X; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return Y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return Z; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "META", function() { return META; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_LEFT", function() { return MAC_WK_CMD_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_WK_CMD_RIGHT", function() { return MAC_WK_CMD_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTEXT_MENU", function() { return CONTEXT_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ZERO", function() { return NUMPAD_ZERO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_ONE", function() { return NUMPAD_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_TWO", function() { return NUMPAD_TWO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_THREE", function() { return NUMPAD_THREE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FOUR", function() { return NUMPAD_FOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_FIVE", function() { return NUMPAD_FIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SIX", function() { return NUMPAD_SIX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_SEVEN", function() { return NUMPAD_SEVEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_EIGHT", function() { return NUMPAD_EIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_NINE", function() { return NUMPAD_NINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MULTIPLY", function() { return NUMPAD_MULTIPLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PLUS", function() { return NUMPAD_PLUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_MINUS", function() { return NUMPAD_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_PERIOD", function() { return NUMPAD_PERIOD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUMPAD_DIVIDE", function() { return NUMPAD_DIVIDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F1", function() { return F1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F2", function() { return F2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F3", function() { return F3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F4", function() { return F4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F5", function() { return F5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F6", function() { return F6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F7", function() { return F7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F8", function() { return F8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F9", function() { return F9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F10", function() { return F10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F11", function() { return F11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F12", function() { return F12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NUM_LOCK", function() { return NUM_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCROLL_LOCK", function() { return SCROLL_LOCK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FIRST_MEDIA", function() { return FIRST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MINUS", function() { return FF_MINUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUTE", function() { return MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_DOWN", function() { return VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VOLUME_UP", function() { return VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_MUTE", function() { return FF_MUTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_DOWN", function() { return FF_VOLUME_DOWN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAST_MEDIA", function() { return LAST_MEDIA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FF_VOLUME_UP", function() { return FF_VOLUME_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEMICOLON", function() { return SEMICOLON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EQUALS", function() { return EQUALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMMA", function() { return COMMA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DASH", function() { return DASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLASH", function() { return SLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APOSTROPHE", function() { return APOSTROPHE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TILDE", function() { return TILDE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPEN_SQUARE_BRACKET", function() { return OPEN_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSLASH", function() { return BACKSLASH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_SQUARE_BRACKET", function() { return CLOSE_SQUARE_BRACKET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SINGLE_QUOTE", function() { return SINGLE_QUOTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAC_META", function() { return MAC_META; });
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var /** @type {?} */ MAC_ENTER = 3;
var /** @type {?} */ BACKSPACE = 8;
var /** @type {?} */ TAB = 9;
var /** @type {?} */ NUM_CENTER = 12;
var /** @type {?} */ ENTER = 13;
var /** @type {?} */ SHIFT = 16;
var /** @type {?} */ CONTROL = 17;
var /** @type {?} */ ALT = 18;
var /** @type {?} */ PAUSE = 19;
var /** @type {?} */ CAPS_LOCK = 20;
var /** @type {?} */ ESCAPE = 27;
var /** @type {?} */ SPACE = 32;
var /** @type {?} */ PAGE_UP = 33;
var /** @type {?} */ PAGE_DOWN = 34;
var /** @type {?} */ END = 35;
var /** @type {?} */ HOME = 36;
var /** @type {?} */ LEFT_ARROW = 37;
var /** @type {?} */ UP_ARROW = 38;
var /** @type {?} */ RIGHT_ARROW = 39;
var /** @type {?} */ DOWN_ARROW = 40;
var /** @type {?} */ PLUS_SIGN = 43;
var /** @type {?} */ PRINT_SCREEN = 44;
var /** @type {?} */ INSERT = 45;
var /** @type {?} */ DELETE = 46;
var /** @type {?} */ ZERO = 48;
var /** @type {?} */ ONE = 49;
var /** @type {?} */ TWO = 50;
var /** @type {?} */ THREE = 51;
var /** @type {?} */ FOUR = 52;
var /** @type {?} */ FIVE = 53;
var /** @type {?} */ SIX = 54;
var /** @type {?} */ SEVEN = 55;
var /** @type {?} */ EIGHT = 56;
var /** @type {?} */ NINE = 57;
var /** @type {?} */ FF_SEMICOLON = 59; // Firefox (Gecko) fires this for semicolon instead of 186
var /** @type {?} */ FF_EQUALS = 61; // Firefox (Gecko) fires this for equals instead of 187
var /** @type {?} */ QUESTION_MARK = 63;
var /** @type {?} */ AT_SIGN = 64;
var /** @type {?} */ A = 65;
var /** @type {?} */ B = 66;
var /** @type {?} */ C = 67;
var /** @type {?} */ D = 68;
var /** @type {?} */ E = 69;
var /** @type {?} */ F = 70;
var /** @type {?} */ G = 71;
var /** @type {?} */ H = 72;
var /** @type {?} */ I = 73;
var /** @type {?} */ J = 74;
var /** @type {?} */ K = 75;
var /** @type {?} */ L = 76;
var /** @type {?} */ M = 77;
var /** @type {?} */ N = 78;
var /** @type {?} */ O = 79;
var /** @type {?} */ P = 80;
var /** @type {?} */ Q = 81;
var /** @type {?} */ R = 82;
var /** @type {?} */ S = 83;
var /** @type {?} */ T = 84;
var /** @type {?} */ U = 85;
var /** @type {?} */ V = 86;
var /** @type {?} */ W = 87;
var /** @type {?} */ X = 88;
var /** @type {?} */ Y = 89;
var /** @type {?} */ Z = 90;
var /** @type {?} */ META = 91; // WIN_KEY_LEFT
var /** @type {?} */ MAC_WK_CMD_LEFT = 91;
var /** @type {?} */ MAC_WK_CMD_RIGHT = 93;
var /** @type {?} */ CONTEXT_MENU = 93;
var /** @type {?} */ NUMPAD_ZERO = 96;
var /** @type {?} */ NUMPAD_ONE = 97;
var /** @type {?} */ NUMPAD_TWO = 98;
var /** @type {?} */ NUMPAD_THREE = 99;
var /** @type {?} */ NUMPAD_FOUR = 100;
var /** @type {?} */ NUMPAD_FIVE = 101;
var /** @type {?} */ NUMPAD_SIX = 102;
var /** @type {?} */ NUMPAD_SEVEN = 103;
var /** @type {?} */ NUMPAD_EIGHT = 104;
var /** @type {?} */ NUMPAD_NINE = 105;
var /** @type {?} */ NUMPAD_MULTIPLY = 106;
var /** @type {?} */ NUMPAD_PLUS = 107;
var /** @type {?} */ NUMPAD_MINUS = 109;
var /** @type {?} */ NUMPAD_PERIOD = 110;
var /** @type {?} */ NUMPAD_DIVIDE = 111;
var /** @type {?} */ F1 = 112;
var /** @type {?} */ F2 = 113;
var /** @type {?} */ F3 = 114;
var /** @type {?} */ F4 = 115;
var /** @type {?} */ F5 = 116;
var /** @type {?} */ F6 = 117;
var /** @type {?} */ F7 = 118;
var /** @type {?} */ F8 = 119;
var /** @type {?} */ F9 = 120;
var /** @type {?} */ F10 = 121;
var /** @type {?} */ F11 = 122;
var /** @type {?} */ F12 = 123;
var /** @type {?} */ NUM_LOCK = 144;
var /** @type {?} */ SCROLL_LOCK = 145;
var /** @type {?} */ FIRST_MEDIA = 166;
var /** @type {?} */ FF_MINUS = 173;
var /** @type {?} */ MUTE = 173; // Firefox (Gecko) fires 181 for MUTE
var /** @type {?} */ VOLUME_DOWN = 174; // Firefox (Gecko) fires 182 for VOLUME_DOWN
var /** @type {?} */ VOLUME_UP = 175; // Firefox (Gecko) fires 183 for VOLUME_UP
var /** @type {?} */ FF_MUTE = 181;
var /** @type {?} */ FF_VOLUME_DOWN = 182;
var /** @type {?} */ LAST_MEDIA = 183;
var /** @type {?} */ FF_VOLUME_UP = 183;
var /** @type {?} */ SEMICOLON = 186; // Firefox (Gecko) fires 59 for SEMICOLON
var /** @type {?} */ EQUALS = 187; // Firefox (Gecko) fires 61 for EQUALS
var /** @type {?} */ COMMA = 188;
var /** @type {?} */ DASH = 189; // Firefox (Gecko) fires 173 for DASH/MINUS
var /** @type {?} */ SLASH = 191;
var /** @type {?} */ APOSTROPHE = 192;
var /** @type {?} */ TILDE = 192;
var /** @type {?} */ OPEN_SQUARE_BRACKET = 219;
var /** @type {?} */ BACKSLASH = 220;
var /** @type {?} */ CLOSE_SQUARE_BRACKET = 221;
var /** @type {?} */ SINGLE_QUOTE = 222;
var /** @type {?} */ MAC_META = 224;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=keycodes.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/cdk/esm5/platform.es5.js":
/*!********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/platform.es5.js ***!
  \********************************************************/
/*! exports provided: Platform, supportsPassiveEventListeners, getSupportedInputTypes, PlatformModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Platform", function() { return Platform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsPassiveEventListeners", function() { return supportsPassiveEventListeners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSupportedInputTypes", function() { return getSupportedInputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlatformModule", function() { return PlatformModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
var /** @type {?} */ hasV8BreakIterator = (typeof Intl !== 'undefined' && (/** @type {?} */ (Intl)).v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var Platform = /** @class */ (function () {
    /**
     * @deletion-target v7.0.0 remove optional decorator
     */
    function Platform(_platformId) {
        this._platformId = _platformId;
        /**
         * Whether the Angular application is being rendered in the browser.
         * We want to use the Angular platform check because if the Document is shimmed
         * without the navigator, the following checks will fail. This is preferred because
         * sometimes the Document may be shimmed without the user's knowledge or intention
         */
        this.isBrowser = this._platformId ?
            Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) : typeof document === 'object' && !!document;
        /**
         * Whether the current browser is Microsoft Edge.
         */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Microsoft Trident.
         */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        /**
         * Whether the current rendering engine is Blink.
         */
        this.BLINK = this.isBrowser && (!!((/** @type {?} */ (window)).chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        /**
         * Whether the current rendering engine is WebKit.
         */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /**
         * Whether the current platform is Apple iOS.
         */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !(/** @type {?} */ (window)).MSStream;
        /**
         * Whether the current browser is Firefox.
         */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /**
         * Whether the current platform is Android.
         */
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        /**
         * Whether the current browser is Safari.
         */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
    Platform.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    Platform.ctorParameters = function () { return [
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
    ]; };
    /** @nocollapse */ Platform.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function Platform_Factory() { return new Platform(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], 8)); }, token: Platform, providedIn: "root" });
    return Platform;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * Cached result of whether the user's browser supports passive event listeners.
 */
var /** @type {?} */ supportsPassiveEvents;
/**
 * Checks whether the user's browser supports passive event listeners.
 * See: https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
 * @return {?}
 */
function supportsPassiveEventListeners() {
    if (supportsPassiveEvents == null && typeof window !== 'undefined') {
        try {
            window.addEventListener('test', /** @type {?} */ ((null)), Object.defineProperty({}, 'passive', {
                get: function () { return supportsPassiveEvents = true; }
            }));
        }
        finally {
            supportsPassiveEvents = supportsPassiveEvents || false;
        }
    }
    return supportsPassiveEvents;
}
/**
 * Cached result Set of input types support by the current browser.
 */
var /** @type {?} */ supportedInputTypes;
/**
 * Types of `<input>` that *might* be supported.
 */
var /** @type {?} */ candidateInputTypes = [
    'color',
    'button',
    'checkbox',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
];
/**
 * @return {?} The input types supported by this browser.
 */
function getSupportedInputTypes() {
    // Result is cached.
    if (supportedInputTypes) {
        return supportedInputTypes;
    }
    // We can't check if an input type is not supported until we're on the browser, so say that
    // everything is supported when not on the browser. We don't use `Platform` here since it's
    // just a helper function and can't inject it.
    if (typeof document !== 'object' || !document) {
        supportedInputTypes = new Set(candidateInputTypes);
        return supportedInputTypes;
    }
    var /** @type {?} */ featureTestInput = document.createElement('input');
    supportedInputTypes = new Set(candidateInputTypes.filter(function (value) {
        featureTestInput.setAttribute('type', value);
        return featureTestInput.type === value;
    }));
    return supportedInputTypes;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PlatformModule = /** @class */ (function () {
    function PlatformModule() {
    }
    PlatformModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"] },
    ];
    return PlatformModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=platform.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/core.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/core.es5.js ***!
  \*********************************************************/
/*! exports provided: AnimationCurves, AnimationDurations, MatCommonModule, MATERIAL_SANITY_CHECKS, mixinDisabled, mixinColor, mixinDisableRipple, mixinTabIndex, mixinErrorState, mixinInitialized, NativeDateModule, MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_LOCALE_FACTORY, MAT_DATE_LOCALE_PROVIDER, DateAdapter, MAT_DATE_FORMATS, NativeDateAdapter, MAT_NATIVE_DATE_FORMATS, ShowOnDirtyErrorStateMatcher, ErrorStateMatcher, MAT_HAMMER_OPTIONS, GestureConfig, MatLine, MatLineSetter, MatLineModule, MatOptionModule, MatOptionSelectionChange, MAT_OPTION_PARENT_COMPONENT, MatOption, _countGroupLabelsBeforeOption, _getOptionScrollPosition, MatOptgroupBase, _MatOptgroupMixinBase, MatOptgroup, MAT_LABEL_GLOBAL_OPTIONS, MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS, MatRipple, RippleState, RippleRef, defaultRippleAnimationConfig, RippleRenderer, MatPseudoCheckboxModule, MatPseudoCheckbox, JAN, FEB, MAR, APR, MAY, JUN, JUL, AUG, SEP, OCT, NOV, DEC, ɵa1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationCurves", function() { return AnimationCurves; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationDurations", function() { return AnimationDurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatCommonModule", function() { return MatCommonModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MATERIAL_SANITY_CHECKS", function() { return MATERIAL_SANITY_CHECKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisabled", function() { return mixinDisabled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinColor", function() { return mixinColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinDisableRipple", function() { return mixinDisableRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinTabIndex", function() { return mixinTabIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinErrorState", function() { return mixinErrorState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mixinInitialized", function() { return mixinInitialized; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateModule", function() { return NativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatNativeDateModule", function() { return MatNativeDateModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE", function() { return MAT_DATE_LOCALE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_FACTORY", function() { return MAT_DATE_LOCALE_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_LOCALE_PROVIDER", function() { return MAT_DATE_LOCALE_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateAdapter", function() { return DateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_DATE_FORMATS", function() { return MAT_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeDateAdapter", function() { return NativeDateAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_NATIVE_DATE_FORMATS", function() { return MAT_NATIVE_DATE_FORMATS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowOnDirtyErrorStateMatcher", function() { return ShowOnDirtyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcher", function() { return ErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_HAMMER_OPTIONS", function() { return MAT_HAMMER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestureConfig", function() { return GestureConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLine", function() { return MatLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineSetter", function() { return MatLineSetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatLineModule", function() { return MatLineModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionModule", function() { return MatOptionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptionSelectionChange", function() { return MatOptionSelectionChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_OPTION_PARENT_COMPONENT", function() { return MAT_OPTION_PARENT_COMPONENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOption", function() { return MatOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_countGroupLabelsBeforeOption", function() { return _countGroupLabelsBeforeOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getOptionScrollPosition", function() { return _getOptionScrollPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptgroupBase", function() { return MatOptgroupBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatOptgroupMixinBase", function() { return _MatOptgroupMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatOptgroup", function() { return MatOptgroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_LABEL_GLOBAL_OPTIONS", function() { return MAT_LABEL_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRippleModule", function() { return MatRippleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RIPPLE_GLOBAL_OPTIONS", function() { return MAT_RIPPLE_GLOBAL_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRipple", function() { return MatRipple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleState", function() { return RippleState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRef", function() { return RippleRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultRippleAnimationConfig", function() { return defaultRippleAnimationConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RippleRenderer", function() { return RippleRenderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckboxModule", function() { return MatPseudoCheckboxModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatPseudoCheckbox", function() { return MatPseudoCheckbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JAN", function() { return JAN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FEB", function() { return FEB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAR", function() { return MAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APR", function() { return APR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAY", function() { return MAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUN", function() { return JUN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JUL", function() { return JUL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUG", function() { return AUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEP", function() { return SEP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OCT", function() { return OCT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NOV", function() { return NOV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEC", function() { return DEC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa1", function() { return MATERIAL_SANITY_CHECKS_FACTORY; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/esm5/keycodes.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * \@docs-private
 */
var AnimationCurves = /** @class */ (function () {
    function AnimationCurves() {
    }
    AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
    AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
    AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
    AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
    return AnimationCurves;
}());
/**
 * \@docs-private
 */
var AnimationDurations = /** @class */ (function () {
    function AnimationDurations() {
    }
    AnimationDurations.COMPLEX = '375ms';
    AnimationDurations.ENTERING = '225ms';
    AnimationDurations.EXITING = '195ms';
    return AnimationDurations;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Injection token that configures whether the Material sanity checks are enabled.
 */
var /** @type {?} */ MATERIAL_SANITY_CHECKS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-sanity-checks', {
    providedIn: 'root',
    factory: MATERIAL_SANITY_CHECKS_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MATERIAL_SANITY_CHECKS_FACTORY() {
    return true;
}
/**
 * Module that captures anything that should be loaded and/or run for *all* Angular Material
 * components. This includes Bidi, etc.
 *
 * This module should be imported to each top-level component module (e.g., MatTabsModule).
 */
var MatCommonModule = /** @class */ (function () {
    function MatCommonModule(_sanityChecksEnabled) {
        this._sanityChecksEnabled = _sanityChecksEnabled;
        /**
         * Whether we've done the global sanity checks (e.g. a theme is loaded, there is a doctype).
         */
        this._hasDoneGlobalChecks = false;
        /**
         * Whether we've already checked for HammerJs availability.
         */
        this._hasCheckedHammer = false;
        /**
         * Reference to the global `document` object.
         */
        this._document = typeof document === 'object' && document ? document : null;
        /**
         * Reference to the global 'window' object.
         */
        this._window = typeof window === 'object' && window ? window : null;
        if (this._areChecksEnabled() && !this._hasDoneGlobalChecks) {
            this._checkDoctypeIsDefined();
            this._checkThemeIsPresent();
            this._hasDoneGlobalChecks = true;
        }
    }
    /**
     * Whether any sanity checks are enabled
     * @return {?}
     */
    MatCommonModule.prototype._areChecksEnabled = /**
     * Whether any sanity checks are enabled
     * @return {?}
     */
    function () {
        return this._sanityChecksEnabled && Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["isDevMode"])() && !this._isTestEnv();
    };
    /**
     * Whether the code is running in tests.
     * @return {?}
     */
    MatCommonModule.prototype._isTestEnv = /**
     * Whether the code is running in tests.
     * @return {?}
     */
    function () {
        return this._window && (this._window['__karma__'] || this._window['jasmine']);
    };
    /**
     * @return {?}
     */
    MatCommonModule.prototype._checkDoctypeIsDefined = /**
     * @return {?}
     */
    function () {
        if (this._document && !this._document.doctype) {
            console.warn('Current document does not have a doctype. This may cause ' +
                'some Angular Material components not to behave as expected.');
        }
    };
    /**
     * @return {?}
     */
    MatCommonModule.prototype._checkThemeIsPresent = /**
     * @return {?}
     */
    function () {
        if (this._document && typeof getComputedStyle === 'function') {
            var /** @type {?} */ testElement = this._document.createElement('div');
            testElement.classList.add('mat-theme-loaded-marker');
            this._document.body.appendChild(testElement);
            var /** @type {?} */ computedStyle = getComputedStyle(testElement);
            // In some situations, the computed style of the test element can be null. For example in
            // Firefox, the computed style is null if an application is running inside of a hidden iframe.
            // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
            if (computedStyle && computedStyle.display !== 'none') {
                console.warn('Could not find Angular Material core theme. Most Material ' +
                    'components may not work as expected. For more info refer ' +
                    'to the theming guide: https://material.angular.io/guide/theming');
            }
            this._document.body.removeChild(testElement);
        }
    };
    /** Checks whether HammerJS is available. */
    /**
     * Checks whether HammerJS is available.
     * @return {?}
     */
    MatCommonModule.prototype._checkHammerIsAvailable = /**
     * Checks whether HammerJS is available.
     * @return {?}
     */
    function () {
        if (this._hasCheckedHammer || !this._window) {
            return;
        }
        if (this._areChecksEnabled() && !this._window['Hammer']) {
            console.warn('Could not find HammerJS. Certain Angular Material components may not work correctly.');
        }
        this._hasCheckedHammer = true;
    };
    MatCommonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]],
                    exports: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["BidiModule"]],
                },] },
    ];
    /** @nocollapse */
    MatCommonModule.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MATERIAL_SANITY_CHECKS,] },] },
    ]; };
    return MatCommonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Mixin to augment a directive with a `disabled` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisabled(base) {
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._disabled = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disabled", {
            get: /**
             * @return {?}
             */
            function () { return this._disabled; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Mixin to augment a directive with a `color` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultColor
 * @return {?}
 */
function mixinColor(base, defaultColor) {
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            // Set the default color that can be specified from the mixin.
            // Set the default color that can be specified from the mixin.
            _this.color = defaultColor;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "color", {
            get: /**
             * @return {?}
             */
            function () { return this._color; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                var /** @type {?} */ colorPalette = value || defaultColor;
                if (colorPalette !== this._color) {
                    if (this._color) {
                        this._elementRef.nativeElement.classList.remove("mat-" + this._color);
                    }
                    if (colorPalette) {
                        this._elementRef.nativeElement.classList.add("mat-" + colorPalette);
                    }
                    this._color = colorPalette;
                }
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Mixin to augment a directive with a `disableRipple` property.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinDisableRipple(base) {
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._disableRipple = false;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "disableRipple", {
            /** Whether the ripple effect is disabled or not. */
            get: /**
             * Whether the ripple effect is disabled or not.
             * @return {?}
             */
            function () { return this._disableRipple; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) { this._disableRipple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Mixin to augment a directive with a `tabIndex` property.
 * @template T
 * @param {?} base
 * @param {?=} defaultTabIndex
 * @return {?}
 */
function mixinTabIndex(base, defaultTabIndex) {
    if (defaultTabIndex === void 0) { defaultTabIndex = 0; }
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            _this._tabIndex = defaultTabIndex;
            return _this;
        }
        Object.defineProperty(class_1.prototype, "tabIndex", {
            get: /**
             * @return {?}
             */
            function () { return this.disabled ? -1 : this._tabIndex; },
            set: /**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                // If the specified tabIndex value is null or undefined, fall back to the default value.
                this._tabIndex = value != null ? value : defaultTabIndex;
            },
            enumerable: true,
            configurable: true
        });
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Mixin to augment a directive with updateErrorState method.
 * For component with `errorState` and need to update `errorState`.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinErrorState(base) {
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            /**
             * Whether the component is in an error state.
             */
            _this.errorState = false;
            /**
             * Stream that emits whenever the state of the input changes such that the wrapping
             * `MatFormField` needs to run change detection.
             */
            _this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
            return _this;
        }
        /**
         * @return {?}
         */
        class_1.prototype.updateErrorState = /**
         * @return {?}
         */
        function () {
            var /** @type {?} */ oldState = this.errorState;
            var /** @type {?} */ parent = this._parentFormGroup || this._parentForm;
            var /** @type {?} */ matcher = this.errorStateMatcher || this._defaultErrorStateMatcher;
            var /** @type {?} */ control = this.ngControl ? /** @type {?} */ (this.ngControl.control) : null;
            var /** @type {?} */ newState = matcher.isErrorState(control, parent);
            if (newState !== oldState) {
                this.errorState = newState;
                this.stateChanges.next();
            }
        };
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Mixin to augment a directive with an initialized property that will emits when ngOnInit ends.
 * @template T
 * @param {?} base
 * @return {?}
 */
function mixinInitialized(base) {
    return /** @class */ (function (_super) {
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(class_1, _super);
        function class_1() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _this = _super.apply(this, args) || this;
            /**
             * Whether this directive has been marked as initialized.
             */
            _this._isInitialized = false;
            /**
             * List of subscribers that subscribed before the directive was initialized. Should be notified
             * during _markInitialized. Set to null after pending subscribers are notified, and should
             * not expect to be populated after.
             */
            _this._pendingSubscribers = [];
            /**
             * Observable stream that emits when the directive initializes. If already initialized, the
             * subscriber is stored to be notified once _markInitialized is called.
             */
            _this.initialized = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (subscriber) {
                // If initialized, immediately notify the subscriber. Otherwise store the subscriber to notify
                // when _markInitialized is called.
                if (_this._isInitialized) {
                    _this._notifySubscriber(subscriber);
                }
                else {
                    /** @type {?} */ ((_this._pendingSubscribers)).push(subscriber);
                }
            });
            return _this;
        }
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * @docs-private
         */
        /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * \@docs-private
         * @return {?}
         */
        class_1.prototype._markInitialized = /**
         * Marks the state as initialized and notifies pending subscribers. Should be called at the end
         * of ngOnInit.
         * \@docs-private
         * @return {?}
         */
        function () {
            if (this._isInitialized) {
                throw Error('This directive has already been marked as initialized and ' +
                    'should not be called twice.');
            }
            this._isInitialized = true; /** @type {?} */
            ((this._pendingSubscribers)).forEach(this._notifySubscriber);
            this._pendingSubscribers = null;
        };
        /** Emits and completes the subscriber stream (should only emit once). */
        /**
         * Emits and completes the subscriber stream (should only emit once).
         * @param {?} subscriber
         * @return {?}
         */
        class_1.prototype._notifySubscriber = /**
         * Emits and completes the subscriber stream (should only emit once).
         * @param {?} subscriber
         * @return {?}
         */
        function (subscriber) {
            subscriber.next();
            subscriber.complete();
        };
        return class_1;
    }(base));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * InjectionToken for datepicker that can be used to override default locale code.
 */
var /** @type {?} */ MAT_DATE_LOCALE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_DATE_LOCALE', {
    providedIn: 'root',
    factory: MAT_DATE_LOCALE_FACTORY,
});
/**
 * \@docs-private
 * @return {?}
 */
function MAT_DATE_LOCALE_FACTORY() {
    return Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]);
}
/**
 * No longer needed since MAT_DATE_LOCALE has been changed to a scoped injectable.
 * If you are importing and providing this in your code you can simply remove it.
 * @deprecated
 * \@deletion-target 7.0.0
 */
var /** @type {?} */ MAT_DATE_LOCALE_PROVIDER = { provide: MAT_DATE_LOCALE, useExisting: _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"] };
/**
 * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
 * @abstract
 * @template D
 */
var  /**
 * Adapts type `D` to be usable as a date by cdk-based components that work with dates.
 * @abstract
 * @template D
 */
DateAdapter = /** @class */ (function () {
    function DateAdapter() {
        this._localeChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    Object.defineProperty(DateAdapter.prototype, "localeChanges", {
        /** A stream that emits when the locale changes. */
        get: /**
         * A stream that emits when the locale changes.
         * @return {?}
         */
        function () { return this._localeChanges; },
        enumerable: true,
        configurable: true
    });
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of it's `@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param value The value to be deserialized into a date object.
     * @returns The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of it's `\@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param {?} value The value to be deserialized into a date object.
     * @return {?} The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    DateAdapter.prototype.deserialize = /**
     * Attempts to deserialize a value to a valid date object. This is different from parsing in that
     * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
     * string). The default implementation does not allow any deserialization, it simply checks that
     * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
     * method on all of it's `\@Input()` properties that accept dates. It is therefore possible to
     * support passing values from your backend directly to these properties by overriding this method
     * to also deserialize the format used by your backend.
     * @param {?} value The value to be deserialized into a date object.
     * @return {?} The deserialized date object, either a valid date, null if the value can be
     *     deserialized into a null date (e.g. the empty string), or an invalid date.
     */
    function (value) {
        if (value == null || this.isDateInstance(value) && this.isValid(value)) {
            return value;
        }
        return this.invalid();
    };
    /**
     * Sets the locale used for all dates.
     * @param locale The new locale.
     */
    /**
     * Sets the locale used for all dates.
     * @param {?} locale The new locale.
     * @return {?}
     */
    DateAdapter.prototype.setLocale = /**
     * Sets the locale used for all dates.
     * @param {?} locale The new locale.
     * @return {?}
     */
    function (locale) {
        this.locale = locale;
        this._localeChanges.next();
    };
    /**
     * Compares two dates.
     * @param first The first date to compare.
     * @param second The second date to compare.
     * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    /**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    DateAdapter.prototype.compareDate = /**
     * Compares two dates.
     * @param {?} first The first date to compare.
     * @param {?} second The second date to compare.
     * @return {?} 0 if the dates are equal, a number less than 0 if the first date is earlier,
     *     a number greater than 0 if the first date is later.
     */
    function (first, second) {
        return this.getYear(first) - this.getYear(second) ||
            this.getMonth(first) - this.getMonth(second) ||
            this.getDate(first) - this.getDate(second);
    };
    /**
     * Checks if two dates are equal.
     * @param first The first date to check.
     * @param second The second date to check.
     * @returns Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    /**
     * Checks if two dates are equal.
     * @param {?} first The first date to check.
     * @param {?} second The second date to check.
     * @return {?} Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    DateAdapter.prototype.sameDate = /**
     * Checks if two dates are equal.
     * @param {?} first The first date to check.
     * @param {?} second The second date to check.
     * @return {?} Whether the two dates are equal.
     *     Null dates are considered equal to other null dates.
     */
    function (first, second) {
        if (first && second) {
            var /** @type {?} */ firstValid = this.isValid(first);
            var /** @type {?} */ secondValid = this.isValid(second);
            if (firstValid && secondValid) {
                return !this.compareDate(first, second);
            }
            return firstValid == secondValid;
        }
        return first == second;
    };
    /**
     * Clamp the given date between min and max dates.
     * @param date The date to clamp.
     * @param min The minimum value to allow. If null or omitted no min is enforced.
     * @param max The maximum value to allow. If null or omitted no max is enforced.
     * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    /**
     * Clamp the given date between min and max dates.
     * @param {?} date The date to clamp.
     * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
     * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
     * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    DateAdapter.prototype.clampDate = /**
     * Clamp the given date between min and max dates.
     * @param {?} date The date to clamp.
     * @param {?=} min The minimum value to allow. If null or omitted no min is enforced.
     * @param {?=} max The maximum value to allow. If null or omitted no max is enforced.
     * @return {?} `min` if `date` is less than `min`, `max` if date is greater than `max`,
     *     otherwise `date`.
     */
    function (date, min, max) {
        if (min && this.compareDate(date, min) < 0) {
            return min;
        }
        if (max && this.compareDate(date, max) > 0) {
            return max;
        }
        return date;
    };
    return DateAdapter;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ MAT_DATE_FORMATS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-date-formats');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Whether the browser supports the Intl API.
 */
var /** @type {?} */ SUPPORTS_INTL_API = typeof Intl != 'undefined';
/**
 * The default month names to use if Intl API is not available.
 */
var /** @type {?} */ DEFAULT_MONTH_NAMES = {
    'long': [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
        'October', 'November', 'December'
    ],
    'short': ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    'narrow': ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D']
};
var ɵ0 = function (i) { return String(i + 1); };
/**
 * The default date names to use if Intl API is not available.
 */
var /** @type {?} */ DEFAULT_DATE_NAMES = range(31, ɵ0);
/**
 * The default day of the week names to use if Intl API is not available.
 */
var /** @type {?} */ DEFAULT_DAY_OF_WEEK_NAMES = {
    'long': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'short': ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    'narrow': ['S', 'M', 'T', 'W', 'T', 'F', 'S']
};
/**
 * Matches strings that have the form of a valid RFC 3339 string
 * (https://tools.ietf.org/html/rfc3339). Note that the string may not actually be a valid date
 * because the regex will match strings an with out of bounds month, date, etc.
 */
var /** @type {?} */ ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
/**
 * Creates an array and fills it with values.
 * @template T
 * @param {?} length
 * @param {?} valueFunction
 * @return {?}
 */
function range(length, valueFunction) {
    var /** @type {?} */ valuesArray = Array(length);
    for (var /** @type {?} */ i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
    }
    return valuesArray;
}
/**
 * Adapts the native JS Date for use with cdk-based components that work with dates.
 */
var NativeDateAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(NativeDateAdapter, _super);
    function NativeDateAdapter(matDateLocale, platform) {
        var _this = _super.call(this) || this;
        /**
         * Whether to use `timeZone: 'utc'` with `Intl.DateTimeFormat` when formatting dates.
         * Without this `Intl.DateTimeFormat` sometimes chooses the wrong timeZone, which can throw off
         * the result. (e.g. in the en-US locale `new Date(1800, 7, 14).toLocaleDateString()`
         * will produce `'8/13/1800'`.
         *
         * TODO(mmalerba): drop this variable. It's not being used in the code right now. We're now
         * getting the string representation of a Date object from it's utc representation. We're keeping
         * it here for sometime, just for precaution, in case we decide to revert some of these changes
         * though.
         */
        _this.useUtcForDisplay = true;
        _super.prototype.setLocale.call(_this, matDateLocale);
        // IE does its own time zone correction, so we disable this on IE.
        // IE does its own time zone correction, so we disable this on IE.
        _this.useUtcForDisplay = !platform.TRIDENT;
        _this._clampDate = platform.TRIDENT || platform.EDGE;
        return _this;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getFullYear();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getMonth();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getDate();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getDayOfWeek = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date.getDay();
    };
    /**
     * @param {?} style
     * @return {?}
     */
    NativeDateAdapter.prototype.getMonthNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            var /** @type {?} */ dtf_1 = new Intl.DateTimeFormat(this.locale, { month: style, timeZone: 'utc' });
            return range(12, function (i) {
                return _this._stripDirectionalityCharacters(_this._format(dtf_1, new Date(2017, i, 1)));
            });
        }
        return DEFAULT_MONTH_NAMES[style];
    };
    /**
     * @return {?}
     */
    NativeDateAdapter.prototype.getDateNames = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            var /** @type {?} */ dtf_2 = new Intl.DateTimeFormat(this.locale, { day: 'numeric', timeZone: 'utc' });
            return range(31, function (i) {
                return _this._stripDirectionalityCharacters(_this._format(dtf_2, new Date(2017, 0, i + 1)));
            });
        }
        return DEFAULT_DATE_NAMES;
    };
    /**
     * @param {?} style
     * @return {?}
     */
    NativeDateAdapter.prototype.getDayOfWeekNames = /**
     * @param {?} style
     * @return {?}
     */
    function (style) {
        var _this = this;
        if (SUPPORTS_INTL_API) {
            var /** @type {?} */ dtf_3 = new Intl.DateTimeFormat(this.locale, { weekday: style, timeZone: 'utc' });
            return range(7, function (i) {
                return _this._stripDirectionalityCharacters(_this._format(dtf_3, new Date(2017, 0, i + 1)));
            });
        }
        return DEFAULT_DAY_OF_WEEK_NAMES[style];
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getYearName = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        if (SUPPORTS_INTL_API) {
            var /** @type {?} */ dtf = new Intl.DateTimeFormat(this.locale, { year: 'numeric', timeZone: 'utc' });
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return String(this.getYear(date));
    };
    /**
     * @return {?}
     */
    NativeDateAdapter.prototype.getFirstDayOfWeek = /**
     * @return {?}
     */
    function () {
        // We can't tell using native JS Date what the first day of the week is, we default to Sunday.
        return 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.getNumDaysInMonth = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.clone = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return this.createDate(this.getYear(date), this.getMonth(date), this.getDate(date));
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.createDate = /**
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        // Check for invalid month and date (except upper bound on date which we have to check after
        // creating the Date).
        if (month < 0 || month > 11) {
            throw Error("Invalid month index \"" + month + "\". Month index has to be between 0 and 11.");
        }
        if (date < 1) {
            throw Error("Invalid date \"" + date + "\". Date has to be greater than 0.");
        }
        var /** @type {?} */ result = this._createDateWithOverflow(year, month, date);
        // Check that the date wasn't above the upper bound for the month, causing the month to overflow
        if (result.getMonth() != month) {
            throw Error("Invalid date \"" + date + "\" for month with index \"" + month + "\".");
        }
        return result;
    };
    /**
     * @return {?}
     */
    NativeDateAdapter.prototype.today = /**
     * @return {?}
     */
    function () {
        return new Date();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NativeDateAdapter.prototype.parse = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        // We have no way using the native JS Date to set the parse format or locale, so we ignore these
        // parameters.
        if (typeof value == 'number') {
            return new Date(value);
        }
        return value ? new Date(Date.parse(value)) : null;
    };
    /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    NativeDateAdapter.prototype.format = /**
     * @param {?} date
     * @param {?} displayFormat
     * @return {?}
     */
    function (date, displayFormat) {
        if (!this.isValid(date)) {
            throw Error('NativeDateAdapter: Cannot format invalid date.');
        }
        if (SUPPORTS_INTL_API) {
            // On IE and Edge the i18n API will throw a hard error that can crash the entire app
            // if we attempt to format a date whose year is less than 1 or greater than 9999.
            if (this._clampDate && (date.getFullYear() < 1 || date.getFullYear() > 9999)) {
                date = this.clone(date);
                date.setFullYear(Math.max(1, Math.min(9999, date.getFullYear())));
            }
            displayFormat = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, displayFormat, { timeZone: 'utc' });
            var /** @type {?} */ dtf = new Intl.DateTimeFormat(this.locale, displayFormat);
            return this._stripDirectionalityCharacters(this._format(dtf, date));
        }
        return this._stripDirectionalityCharacters(date.toDateString());
    };
    /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    NativeDateAdapter.prototype.addCalendarYears = /**
     * @param {?} date
     * @param {?} years
     * @return {?}
     */
    function (date, years) {
        return this.addCalendarMonths(date, years * 12);
    };
    /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    NativeDateAdapter.prototype.addCalendarMonths = /**
     * @param {?} date
     * @param {?} months
     * @return {?}
     */
    function (date, months) {
        var /** @type {?} */ newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
        // It's possible to wind up in the wrong month if the original month has more days than the new
        // month. In this case we want to go to the last day of the desired month.
        // Note: the additional + 12 % 12 ensures we end up with a positive number, since JS % doesn't
        // guarantee this.
        if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
            newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
        }
        return newDate;
    };
    /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    NativeDateAdapter.prototype.addCalendarDays = /**
     * @param {?} date
     * @param {?} days
     * @return {?}
     */
    function (date, days) {
        return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.toIso8601 = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return [
            date.getUTCFullYear(),
            this._2digit(date.getUTCMonth() + 1),
            this._2digit(date.getUTCDate())
        ].join('-');
    };
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     */
    /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    NativeDateAdapter.prototype.deserialize = /**
     * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
     * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
     * invalid date for all other values.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (typeof value === 'string') {
            if (!value) {
                return null;
            }
            // The `Date` constructor accepts formats other than ISO 8601, so we need to make sure the
            // string is the right format first.
            if (ISO_8601_REGEX.test(value)) {
                var /** @type {?} */ date = new Date(value);
                if (this.isValid(date)) {
                    return date;
                }
            }
        }
        return _super.prototype.deserialize.call(this, value);
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    NativeDateAdapter.prototype.isDateInstance = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        return obj instanceof Date;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype.isValid = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return !isNaN(date.getTime());
    };
    /**
     * @return {?}
     */
    NativeDateAdapter.prototype.invalid = /**
     * @return {?}
     */
    function () {
        return new Date(NaN);
    };
    /**
     * Creates a date but allows the month and date to overflow.
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    NativeDateAdapter.prototype._createDateWithOverflow = /**
     * Creates a date but allows the month and date to overflow.
     * @param {?} year
     * @param {?} month
     * @param {?} date
     * @return {?}
     */
    function (year, month, date) {
        var /** @type {?} */ result = new Date(year, month, date);
        // We need to correct for the fact that JS native Date treats years in range [0, 99] as
        // abbreviations for 19xx.
        if (year >= 0 && year < 100) {
            result.setFullYear(this.getYear(result) - 1900);
        }
        return result;
    };
    /**
     * Pads a number to make it two digits.
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    NativeDateAdapter.prototype._2digit = /**
     * Pads a number to make it two digits.
     * @param {?} n The number to pad.
     * @return {?} The padded number.
     */
    function (n) {
        return ('00' + n).slice(-2);
    };
    /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    NativeDateAdapter.prototype._stripDirectionalityCharacters = /**
     * Strip out unicode LTR and RTL characters. Edge and IE insert these into formatted dates while
     * other browsers do not. We remove them to make output consistent and because they interfere with
     * date parsing.
     * @param {?} str The string to strip direction characters from.
     * @return {?} The stripped string.
     */
    function (str) {
        return str.replace(/[\u200e\u200f]/g, '');
    };
    /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param {?} date Date from which we want to get the string representation according to dtf
     * @return {?} A Date object with its UTC representation based on the passed in date info
     */
    NativeDateAdapter.prototype._format = /**
     * When converting Date object to string, javascript built-in functions may return wrong
     * results because it applies its internal DST rules. The DST rules around the world change
     * very frequently, and the current valid rule is not always valid in previous years though.
     * We work around this problem building a new Date object which has its internal UTC
     * representation with the local date and time.
     * @param {?} dtf Intl.DateTimeFormat object, containg the desired string format. It must have
     *    timeZone set to 'utc' to work fine.
     * @param {?} date Date from which we want to get the string representation according to dtf
     * @return {?} A Date object with its UTC representation based on the passed in date info
     */
    function (dtf, date) {
        var /** @type {?} */ d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
        return dtf.format(d);
    };
    NativeDateAdapter.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NativeDateAdapter.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_DATE_LOCALE,] },] },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], },
    ]; };
    return NativeDateAdapter;
}(DateAdapter));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

var /** @type {?} */ MAT_NATIVE_DATE_FORMATS = {
    parse: {
        dateInput: null,
    },
    display: {
        dateInput: { year: 'numeric', month: 'numeric', day: 'numeric' },
        monthYearLabel: { year: 'numeric', month: 'short' },
        dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
        monthYearA11yLabel: { year: 'numeric', month: 'long' },
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NativeDateModule = /** @class */ (function () {
    function NativeDateModule() {
    }
    NativeDateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"]],
                    providers: [
                        { provide: DateAdapter, useClass: NativeDateAdapter },
                    ],
                },] },
    ];
    return NativeDateModule;
}());
var ɵ0$1 = MAT_NATIVE_DATE_FORMATS;
var MatNativeDateModule = /** @class */ (function () {
    function MatNativeDateModule() {
    }
    MatNativeDateModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [NativeDateModule],
                    providers: [{ provide: MAT_DATE_FORMATS, useValue: ɵ0$1 }],
                },] },
    ];
    return MatNativeDateModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Error state matcher that matches when a control is invalid and dirty.
 */
var ShowOnDirtyErrorStateMatcher = /** @class */ (function () {
    function ShowOnDirtyErrorStateMatcher() {
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    ShowOnDirtyErrorStateMatcher.prototype.isErrorState = /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        return !!(control && control.invalid && (control.dirty || (form && form.submitted)));
    };
    ShowOnDirtyErrorStateMatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return ShowOnDirtyErrorStateMatcher;
}());
/**
 * Provider that defines how form controls behave with regards to displaying error messages.
 */
var ErrorStateMatcher = /** @class */ (function () {
    function ErrorStateMatcher() {
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    ErrorStateMatcher.prototype.isErrorState = /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        return !!(control && control.invalid && (control.touched || (form && form.submitted)));
    };
    ErrorStateMatcher.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ ErrorStateMatcher.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ErrorStateMatcher_Factory() { return new ErrorStateMatcher(); }, token: ErrorStateMatcher, providedIn: "root" });
    return ErrorStateMatcher;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Injection token that can be used to provide options to the Hammerjs instance.
 * More info at http://hammerjs.github.io/api/.
 */
var /** @type {?} */ MAT_HAMMER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_HAMMER_OPTIONS');
/**
 * Adjusts configuration of our gesture library, Hammer.
 */
var GestureConfig = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(GestureConfig, _super);
    function GestureConfig(_hammerOptions, commonModule) {
        var _this = _super.call(this) || this;
        _this._hammerOptions = _hammerOptions;
        _this._hammer = typeof window !== 'undefined' ? (/** @type {?} */ (window)).Hammer : null;
        /**
         * List of new event names to add to the gesture support list
         */
        _this.events = _this._hammer ? [
            'longpress',
            'slide',
            'slidestart',
            'slideend',
            'slideright',
            'slideleft'
        ] : [];
        if (commonModule) {
            commonModule._checkHammerIsAvailable();
        }
        return _this;
    }
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param element Element to which to assign the new HammerJS gestures.
     * @returns Newly-created HammerJS instance.
     */
    /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param {?} element Element to which to assign the new HammerJS gestures.
     * @return {?} Newly-created HammerJS instance.
     */
    GestureConfig.prototype.buildHammer = /**
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://material.io/design/#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * @param {?} element Element to which to assign the new HammerJS gestures.
     * @return {?} Newly-created HammerJS instance.
     */
    function (element) {
        var /** @type {?} */ mc = new this._hammer(element, this._hammerOptions || undefined);
        // Default Hammer Recognizers.
        var /** @type {?} */ pan = new this._hammer.Pan();
        var /** @type {?} */ swipe = new this._hammer.Swipe();
        var /** @type {?} */ press = new this._hammer.Press();
        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        // TODO: Confirm threshold numbers with Material Design UX Team
        var /** @type {?} */ slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        var /** @type {?} */ longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, press, pan, slide, longpress]);
        return /** @type {?} */ (mc);
    };
    /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    GestureConfig.prototype._createRecognizer = /**
     * Creates a new recognizer, without affecting the default recognizers of HammerJS
     * @param {?} base
     * @param {?} options
     * @param {...?} inheritances
     * @return {?}
     */
    function (base, options) {
        var inheritances = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            inheritances[_i - 2] = arguments[_i];
        }
        var /** @type {?} */ recognizer = new (/** @type {?} */ (base.constructor))(options);
        inheritances.push(base);
        inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
        return recognizer;
    };
    GestureConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    GestureConfig.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_HAMMER_OPTIONS,] },] },
        { type: MatCommonModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    return GestureConfig;
}(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["HammerGestureConfig"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Shared directive to count lines inside a text area, such as a list item.
 * Line elements can be extracted with a \@ContentChildren(MatLine) query, then
 * counted by checking the query list's length.
 */
var MatLine = /** @class */ (function () {
    function MatLine() {
    }
    MatLine.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-line], [matLine]',
                    host: { 'class': 'mat-line' }
                },] },
    ];
    return MatLine;
}());
/**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 */
var  /**
 * Helper that takes a query list of lines and sets the correct class on the host.
 * \@docs-private
 */
MatLineSetter = /** @class */ (function () {
    function MatLineSetter(_lines, _element) {
        var _this = this;
        this._lines = _lines;
        this._element = _element;
        this._setLineClass(this._lines.length);
        this._lines.changes.subscribe(function () {
            _this._setLineClass(_this._lines.length);
        });
    }
    /**
     * @param {?} count
     * @return {?}
     */
    MatLineSetter.prototype._setLineClass = /**
     * @param {?} count
     * @return {?}
     */
    function (count) {
        this._resetClasses();
        if (count === 2 || count === 3) {
            this._setClass("mat-" + count + "-line", true);
        }
        else if (count > 3) {
            this._setClass("mat-multi-line", true);
        }
    };
    /**
     * @return {?}
     */
    MatLineSetter.prototype._resetClasses = /**
     * @return {?}
     */
    function () {
        this._setClass('mat-2-line', false);
        this._setClass('mat-3-line', false);
        this._setClass('mat-multi-line', false);
    };
    /**
     * @param {?} className
     * @param {?} isAdd
     * @return {?}
     */
    MatLineSetter.prototype._setClass = /**
     * @param {?} className
     * @param {?} isAdd
     * @return {?}
     */
    function (className, isAdd) {
        if (isAdd) {
            this._element.nativeElement.classList.add(className);
        }
        else {
            this._element.nativeElement.classList.remove(className);
        }
    };
    return MatLineSetter;
}());
var MatLineModule = /** @class */ (function () {
    function MatLineModule() {
    }
    MatLineModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [MatCommonModule],
                    exports: [MatLine, MatCommonModule],
                    declarations: [MatLine],
                },] },
    ];
    return MatLineModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/** @enum {number} */
var RippleState = {
    FADING_IN: 0,
    VISIBLE: 1,
    FADING_OUT: 2,
    HIDDEN: 3,
};
RippleState[RippleState.FADING_IN] = "FADING_IN";
RippleState[RippleState.VISIBLE] = "VISIBLE";
RippleState[RippleState.FADING_OUT] = "FADING_OUT";
RippleState[RippleState.HIDDEN] = "HIDDEN";
/**
 * Reference to a previously launched ripple element.
 */
var  /**
 * Reference to a previously launched ripple element.
 */
RippleRef = /** @class */ (function () {
    function RippleRef(_renderer, element, config) {
        this._renderer = _renderer;
        this.element = element;
        this.config = config;
        /**
         * Current state of the ripple reference.
         */
        this.state = RippleState.HIDDEN;
    }
    /** Fades out the ripple element. */
    /**
     * Fades out the ripple element.
     * @return {?}
     */
    RippleRef.prototype.fadeOut = /**
     * Fades out the ripple element.
     * @return {?}
     */
    function () {
        this._renderer.fadeOutRipple(this);
    };
    return RippleRef;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default ripple animation configuration for ripples without an explicit
 * animation config specified.
 */
var /** @type {?} */ defaultRippleAnimationConfig = {
    enterDuration: 450,
    exitDuration: 400
};
/**
 * Timeout for ignoring mouse events. Mouse events will be temporary ignored after touch
 * events to avoid synthetic mouse events.
 */
var /** @type {?} */ ignoreMouseEventsTimeout = 800;
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * \@docs-private
 */
var  /**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * \@docs-private
 */
RippleRenderer = /** @class */ (function () {
    function RippleRenderer(_target, _ngZone, elementRef, platform) {
        var _this = this;
        this._target = _target;
        this._ngZone = _ngZone;
        /**
         * Whether the pointer is currently down or not.
         */
        this._isPointerDown = false;
        /**
         * Events to be registered on the trigger element.
         */
        this._triggerEvents = new Map();
        /**
         * Set of currently active ripple references.
         */
        this._activeRipples = new Set();
        /**
         * Options that apply to all the event listeners that are bound by the renderer.
         */
        this._eventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["supportsPassiveEventListeners"])() ? (/** @type {?} */ ({ passive: true })) : false;
        /**
         * Function being called whenever the trigger is being pressed using mouse.
         */
        this.onMousedown = function (event) {
            var /** @type {?} */ isSyntheticEvent = _this._lastTouchStartEvent &&
                Date.now() < _this._lastTouchStartEvent + ignoreMouseEventsTimeout;
            if (!_this._target.rippleDisabled && !isSyntheticEvent) {
                _this._isPointerDown = true;
                _this.fadeInRipple(event.clientX, event.clientY, _this._target.rippleConfig);
            }
        };
        /**
         * Function being called whenever the trigger is being pressed using touch.
         */
        this.onTouchStart = function (event) {
            if (!_this._target.rippleDisabled) {
                // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
                // events will launch a second ripple if we don't ignore mouse events for a specific
                // time after a touchstart event.
                // Some browsers fire mouse events after a `touchstart` event. Those synthetic mouse
                // events will launch a second ripple if we don't ignore mouse events for a specific
                // time after a touchstart event.
                _this._lastTouchStartEvent = Date.now();
                _this._isPointerDown = true;
                _this.fadeInRipple(event.touches[0].clientX, event.touches[0].clientY, _this._target.rippleConfig);
            }
        };
        /**
         * Function being called whenever the trigger is being released.
         */
        this.onPointerUp = function () {
            if (!_this._isPointerDown) {
                return;
            }
            _this._isPointerDown = false;
            // Fade-out all ripples that are visible and not persistent.
            // Fade-out all ripples that are visible and not persistent.
            _this._activeRipples.forEach(function (ripple) {
                // By default, only ripples that are completely visible will fade out on pointer release.
                // If the `terminateOnPointerUp` option is set, ripples that still fade in will also fade out.
                var /** @type {?} */ isVisible = ripple.state === RippleState.VISIBLE ||
                    ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
                if (!ripple.config.persistent && isVisible) {
                    ripple.fadeOut();
                }
            });
        };
        // Only do anything if we're on the browser.
        if (platform.isBrowser) {
            this._containerElement = elementRef.nativeElement;
            // Specify events which need to be registered on the trigger.
            this._triggerEvents.set('mousedown', this.onMousedown);
            this._triggerEvents.set('mouseup', this.onPointerUp);
            this._triggerEvents.set('mouseleave', this.onPointerUp);
            this._triggerEvents.set('touchstart', this.onTouchStart);
            this._triggerEvents.set('touchend', this.onPointerUp);
        }
    }
    /**
     * Fades in a ripple at the given coordinates.
     * @param x Coordinate within the element, along the X axis at which to start the ripple.
     * @param y Coordinate within the element, along the Y axis at which to start the ripple.
     * @param config Extra ripple options.
     */
    /**
     * Fades in a ripple at the given coordinates.
     * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
     * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
     * @param {?=} config Extra ripple options.
     * @return {?}
     */
    RippleRenderer.prototype.fadeInRipple = /**
     * Fades in a ripple at the given coordinates.
     * @param {?} x Coordinate within the element, along the X axis at which to start the ripple.
     * @param {?} y Coordinate within the element, along the Y axis at which to start the ripple.
     * @param {?=} config Extra ripple options.
     * @return {?}
     */
    function (x, y, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        var /** @type {?} */ containerRect = this._containerRect =
            this._containerRect || this._containerElement.getBoundingClientRect();
        var /** @type {?} */ animationConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, defaultRippleAnimationConfig, config.animation);
        if (config.centered) {
            x = containerRect.left + containerRect.width / 2;
            y = containerRect.top + containerRect.height / 2;
        }
        var /** @type {?} */ radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
        var /** @type {?} */ offsetX = x - containerRect.left;
        var /** @type {?} */ offsetY = y - containerRect.top;
        var /** @type {?} */ duration = animationConfig.enterDuration / (config.speedFactor || 1);
        var /** @type {?} */ ripple = document.createElement('div');
        ripple.classList.add('mat-ripple-element');
        ripple.style.left = offsetX - radius + "px";
        ripple.style.top = offsetY - radius + "px";
        ripple.style.height = radius * 2 + "px";
        ripple.style.width = radius * 2 + "px";
        // If the color is not set, the default CSS color will be used.
        ripple.style.backgroundColor = config.color || null;
        ripple.style.transitionDuration = duration + "ms";
        this._containerElement.appendChild(ripple);
        // By default the browser does not recalculate the styles of dynamically created
        // ripple elements. This is critical because then the `scale` would not animate properly.
        enforceStyleRecalculation(ripple);
        ripple.style.transform = 'scale(1)';
        // Exposed reference to the ripple that will be returned.
        var /** @type {?} */ rippleRef = new RippleRef(this, ripple, config);
        rippleRef.state = RippleState.FADING_IN;
        // Add the ripple reference to the list of all active ripples.
        this._activeRipples.add(rippleRef);
        if (!config.persistent) {
            this._mostRecentTransientRipple = rippleRef;
        }
        // Wait for the ripple element to be completely faded in.
        // Once it's faded in, the ripple can be hidden immediately if the mouse is released.
        this.runTimeoutOutsideZone(function () {
            var /** @type {?} */ isMostRecentTransientRipple = rippleRef === _this._mostRecentTransientRipple;
            rippleRef.state = RippleState.VISIBLE;
            // When the timer runs out while the user has kept their pointer down, we want to
            // keep only the persistent ripples and the latest transient ripple. We do this,
            // because we don't want stacked transient ripples to appear after their enter
            // animation has finished.
            if (!config.persistent && (!isMostRecentTransientRipple || !_this._isPointerDown)) {
                rippleRef.fadeOut();
            }
        }, duration);
        return rippleRef;
    };
    /** Fades out a ripple reference. */
    /**
     * Fades out a ripple reference.
     * @param {?} rippleRef
     * @return {?}
     */
    RippleRenderer.prototype.fadeOutRipple = /**
     * Fades out a ripple reference.
     * @param {?} rippleRef
     * @return {?}
     */
    function (rippleRef) {
        var /** @type {?} */ wasActive = this._activeRipples.delete(rippleRef);
        if (rippleRef === this._mostRecentTransientRipple) {
            this._mostRecentTransientRipple = null;
        }
        // Clear out the cached bounding rect if we have no more ripples.
        if (!this._activeRipples.size) {
            this._containerRect = null;
        }
        // For ripples that are not active anymore, don't re-un the fade-out animation.
        if (!wasActive) {
            return;
        }
        var /** @type {?} */ rippleEl = rippleRef.element;
        var /** @type {?} */ animationConfig = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, defaultRippleAnimationConfig, rippleRef.config.animation);
        rippleEl.style.transitionDuration = animationConfig.exitDuration + "ms";
        rippleEl.style.opacity = '0';
        rippleRef.state = RippleState.FADING_OUT;
        // Once the ripple faded out, the ripple can be safely removed from the DOM.
        this.runTimeoutOutsideZone(function () {
            rippleRef.state = RippleState.HIDDEN; /** @type {?} */
            ((rippleEl.parentNode)).removeChild(rippleEl);
        }, animationConfig.exitDuration);
    };
    /** Fades out all currently active ripples. */
    /**
     * Fades out all currently active ripples.
     * @return {?}
     */
    RippleRenderer.prototype.fadeOutAll = /**
     * Fades out all currently active ripples.
     * @return {?}
     */
    function () {
        this._activeRipples.forEach(function (ripple) { return ripple.fadeOut(); });
    };
    /** Sets up the trigger event listeners */
    /**
     * Sets up the trigger event listeners
     * @param {?} element
     * @return {?}
     */
    RippleRenderer.prototype.setupTriggerEvents = /**
     * Sets up the trigger event listeners
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        if (!element || element === this._triggerElement) {
            return;
        }
        // Remove all previously registered event listeners from the trigger element.
        this._removeTriggerEvents();
        this._ngZone.runOutsideAngular(function () {
            _this._triggerEvents.forEach(function (fn, type) {
                return element.addEventListener(type, fn, _this._eventOptions);
            });
        });
        this._triggerElement = element;
    };
    /**
     * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    RippleRenderer.prototype.runTimeoutOutsideZone = /**
     * Runs a timeout outside of the Angular zone to avoid triggering the change detection.
     * @param {?} fn
     * @param {?=} delay
     * @return {?}
     */
    function (fn, delay) {
        if (delay === void 0) { delay = 0; }
        this._ngZone.runOutsideAngular(function () { return setTimeout(fn, delay); });
    };
    /** Removes previously registered event listeners from the trigger element. */
    /**
     * Removes previously registered event listeners from the trigger element.
     * @return {?}
     */
    RippleRenderer.prototype._removeTriggerEvents = /**
     * Removes previously registered event listeners from the trigger element.
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._triggerElement) {
            this._triggerEvents.forEach(function (fn, type) {
                /** @type {?} */ ((_this._triggerElement)).removeEventListener(type, fn, _this._eventOptions);
            });
        }
    };
    return RippleRenderer;
}());
/**
 * Enforces a style recalculation of a DOM element by computing its styles.
 * @param {?} element
 * @return {?}
 */
function enforceStyleRecalculation(element) {
    // Enforce a style recalculation by calling `getComputedStyle` and accessing any property.
    // Calling `getPropertyValue` is important to let optimizers know that this is not a noop.
    // See: https://gist.github.com/paulirish/5d52fb081b3570c81e3a
    window.getComputedStyle(element).getPropertyValue('opacity');
}
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 * @param {?} x
 * @param {?} y
 * @param {?} rect
 * @return {?}
 */
function distanceToFurthestCorner(x, y, rect) {
    var /** @type {?} */ distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    var /** @type {?} */ distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Injection token that can be used to specify the global ripple options.
 */
var /** @type {?} */ MAT_RIPPLE_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-ripple-global-options');
var MatRipple = /** @class */ (function () {
    function MatRipple(_elementRef, ngZone, platform, globalOptions, _animationMode) {
        this._elementRef = _elementRef;
        this._animationMode = _animationMode;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */
        this.radius = 0;
        /**
         * If set, the normal duration of ripple animations is divided by this value. For example,
         * setting it to 0.5 will cause the animations to take twice as long.
         * A changed speedFactor will not modify the fade-out duration of the ripples.
         * @deprecated Use the [matRippleAnimation] binding instead.
         * \@deletion-target 7.0.0
         */
        this.speedFactor = 1;
        this._disabled = false;
        /**
         * Whether ripple directive is initialized and the input bindings are set.
         */
        this._isInitialized = false;
        this._globalOptions = globalOptions || {};
        this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
    }
    Object.defineProperty(MatRipple.prototype, "disabled", {
        get: /**
         * Whether click events will not trigger the ripple. Ripples can be still launched manually
         * by using the `launch()` method.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = value;
            this._setupTriggerEventsIfEnabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRipple.prototype, "trigger", {
        get: /**
         * The element that triggers the ripple when click events are received.
         * Defaults to the directive's host element.
         * @return {?}
         */
        function () { return this._trigger || this._elementRef.nativeElement; },
        set: /**
         * @param {?} trigger
         * @return {?}
         */
        function (trigger) {
            this._trigger = trigger;
            this._setupTriggerEventsIfEnabled();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatRipple.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isInitialized = true;
        this._setupTriggerEventsIfEnabled();
    };
    /**
     * @return {?}
     */
    MatRipple.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._rippleRenderer._removeTriggerEvents();
    };
    /** Fades out all currently showing ripple elements. */
    /**
     * Fades out all currently showing ripple elements.
     * @return {?}
     */
    MatRipple.prototype.fadeOutAll = /**
     * Fades out all currently showing ripple elements.
     * @return {?}
     */
    function () {
        this._rippleRenderer.fadeOutAll();
    };
    Object.defineProperty(MatRipple.prototype, "rippleConfig", {
        /** Ripple configuration from the directive's input values. */
        get: /**
         * Ripple configuration from the directive's input values.
         * @return {?}
         */
        function () {
            return {
                centered: this.centered,
                radius: this.radius,
                color: this.color,
                animation: this._animationMode === 'NoopAnimations' ?
                    { enterDuration: 0, exitDuration: 0 } : Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this._globalOptions.animation, this.animation),
                terminateOnPointerUp: this._globalOptions.terminateOnPointerUp,
                speedFactor: this.speedFactor * (this._globalOptions.baseSpeedFactor || 1),
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRipple.prototype, "rippleDisabled", {
        /** Whether ripples on pointer-down are disabled or not. */
        get: /**
         * Whether ripples on pointer-down are disabled or not.
         * @return {?}
         */
        function () {
            return this.disabled || !!this._globalOptions.disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets up the the trigger event listeners if ripples are enabled.
     * @return {?}
     */
    MatRipple.prototype._setupTriggerEventsIfEnabled = /**
     * Sets up the the trigger event listeners if ripples are enabled.
     * @return {?}
     */
    function () {
        if (!this.disabled && this._isInitialized) {
            this._rippleRenderer.setupTriggerEvents(this.trigger);
        }
    };
    /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
    /**
     * Launches a manual ripple at the specified coordinated or just by the ripple config.
     * @param {?} configOrX
     * @param {?=} y
     * @param {?=} config
     * @return {?}
     */
    MatRipple.prototype.launch = /**
     * Launches a manual ripple at the specified coordinated or just by the ripple config.
     * @param {?} configOrX
     * @param {?=} y
     * @param {?=} config
     * @return {?}
     */
    function (configOrX, y, config) {
        if (y === void 0) { y = 0; }
        if (typeof configOrX === 'number') {
            return this._rippleRenderer.fadeInRipple(configOrX, y, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.rippleConfig, config));
        }
        else {
            return this._rippleRenderer.fadeInRipple(0, 0, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, this.rippleConfig, configOrX));
        }
    };
    MatRipple.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[mat-ripple], [matRipple]',
                    exportAs: 'matRipple',
                    host: {
                        'class': 'mat-ripple',
                        '[class.mat-ripple-unbounded]': 'unbounded'
                    }
                },] },
    ];
    /** @nocollapse */
    MatRipple.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], },
        { type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_RIPPLE_GLOBAL_OPTIONS,] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["ANIMATION_MODULE_TYPE"],] },] },
    ]; };
    MatRipple.propDecorators = {
        "color": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleColor',] },],
        "unbounded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleUnbounded',] },],
        "centered": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleCentered',] },],
        "radius": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleRadius',] },],
        "speedFactor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleSpeedFactor',] },],
        "animation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleAnimation',] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleDisabled',] },],
        "trigger": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['matRippleTrigger',] },],
    };
    return MatRipple;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatRippleModule = /** @class */ (function () {
    function MatRippleModule() {
    }
    MatRippleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [MatCommonModule, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["PlatformModule"]],
                    exports: [MatRipple, MatCommonModule],
                    declarations: [MatRipple],
                },] },
    ];
    return MatRippleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Component that shows a simplified checkbox without including any kind of "real" checkbox.
 * Meant to be used when the checkbox is purely decorative and a large number of them will be
 * included, such as for the options in a multi-select. Uses no SVGs or complex animations.
 * Note that theming is meant to be handled by the parent element, e.g.
 * `mat-primary .mat-pseudo-checkbox`.
 *
 * Note that this component will be completely invisible to screen-reader users. This is *not*
 * interchangeable with `<mat-checkbox>` and should *not* be used if the user would directly
 * interact with the checkbox. The pseudo-checkbox should only be used as an implementation detail
 * of more complex components that appropriately handle selected / checked state.
 * \@docs-private
 */
var MatPseudoCheckbox = /** @class */ (function () {
    function MatPseudoCheckbox() {
        /**
         * Display state of the checkbox.
         */
        this.state = 'unchecked';
        /**
         * Whether the checkbox is disabled.
         */
        this.disabled = false;
    }
    MatPseudoCheckbox.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    selector: 'mat-pseudo-checkbox',
                    styles: [".mat-pseudo-checkbox{width:20px;height:20px;border:2px solid;border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0,0,.2,.1),background-color 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:'';border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0,0,.2,.1)}.mat-pseudo-checkbox.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox.mat-pseudo-checkbox-indeterminate{border:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{top:9px;left:2px;width:16px;opacity:1}.mat-pseudo-checkbox-checked::after{top:5px;left:3px;width:12px;height:5px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1}"],
                    template: '',
                    host: {
                        'class': 'mat-pseudo-checkbox',
                        '[class.mat-pseudo-checkbox-indeterminate]': 'state === "indeterminate"',
                        '[class.mat-pseudo-checkbox-checked]': 'state === "checked"',
                        '[class.mat-pseudo-checkbox-disabled]': 'disabled',
                    },
                },] },
    ];
    /** @nocollapse */
    MatPseudoCheckbox.propDecorators = {
        "state": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return MatPseudoCheckbox;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatPseudoCheckboxModule = /** @class */ (function () {
    function MatPseudoCheckboxModule() {
    }
    MatPseudoCheckboxModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    exports: [MatPseudoCheckbox],
                    declarations: [MatPseudoCheckbox]
                },] },
    ];
    return MatPseudoCheckboxModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatOptgroupBase = /** @class */ (function () {
    function MatOptgroupBase() {
    }
    return MatOptgroupBase;
}());
var /** @type {?} */ _MatOptgroupMixinBase = mixinDisabled(MatOptgroupBase);
// Counter for unique group ids.
var /** @type {?} */ _uniqueOptgroupIdCounter = 0;
/**
 * Component that is used to group instances of `mat-option`.
 */
var MatOptgroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(MatOptgroup, _super);
    function MatOptgroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Unique id for the underlying label.
         */
        _this._labelId = "mat-optgroup-label-" + _uniqueOptgroupIdCounter++;
        return _this;
    }
    MatOptgroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-optgroup',
                    exportAs: 'matOptgroup',
                    template: "<label class=\"mat-optgroup-label\" [id]=\"_labelId\">{{ label }}</label><ng-content select=\"mat-option, ng-container\"></ng-content>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    inputs: ['disabled'],
                    styles: [".mat-optgroup-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup-label[disabled]{cursor:default}[dir=rtl] .mat-optgroup-label{text-align:right}.mat-optgroup-label .mat-icon{margin-right:16px;vertical-align:middle}.mat-optgroup-label .mat-icon svg{vertical-align:top}[dir=rtl] .mat-optgroup-label .mat-icon{margin-left:16px;margin-right:0}"],
                    host: {
                        'class': 'mat-optgroup',
                        'role': 'group',
                        '[class.mat-optgroup-disabled]': 'disabled',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[attr.aria-labelledby]': '_labelId',
                    }
                },] },
    ];
    /** @nocollapse */
    MatOptgroup.propDecorators = {
        "label": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return MatOptgroup;
}(_MatOptgroupMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
var /** @type {?} */ _uniqueIdCounter = 0;
/**
 * Event object emitted by MatOption when selected or deselected.
 */
var  /**
 * Event object emitted by MatOption when selected or deselected.
 */
MatOptionSelectionChange = /** @class */ (function () {
    function MatOptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return MatOptionSelectionChange;
}());
/**
 * Injection token used to provide the parent component to options.
 */
var /** @type {?} */ MAT_OPTION_PARENT_COMPONENT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_OPTION_PARENT_COMPONENT');
/**
 * Single option inside of a `<mat-select>` element.
 */
var MatOption = /** @class */ (function () {
    function MatOption(_element, _changeDetectorRef, _parent, group) {
        this._element = _element;
        this._changeDetectorRef = _changeDetectorRef;
        this._parent = _parent;
        this.group = group;
        this._selected = false;
        this._active = false;
        this._disabled = false;
        this._id = "mat-option-" + _uniqueIdCounter++;
        this._mostRecentViewValue = '';
        /**
         * Event emitted when the option is selected or deselected.
         */
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emits when the state of the option changes and any parents have to be notified.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    Object.defineProperty(MatOption.prototype, "multiple", {
        /** Whether the wrapping component is in multiple selection mode. */
        get: /**
         * Whether the wrapping component is in multiple selection mode.
         * @return {?}
         */
        function () { return this._parent && this._parent.multiple; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatOption.prototype, "id", {
        /** The unique ID of the option. */
        get: /**
         * The unique ID of the option.
         * @return {?}
         */
        function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatOption.prototype, "selected", {
        /** Whether or not the option is currently selected. */
        get: /**
         * Whether or not the option is currently selected.
         * @return {?}
         */
        function () { return this._selected; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatOption.prototype, "disabled", {
        get: /**
         * Whether the option is disabled.
         * @return {?}
         */
        function () { return (this.group && this.group.disabled) || this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) { this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatOption.prototype, "disableRipple", {
        /** Whether ripples for the option are disabled. */
        get: /**
         * Whether ripples for the option are disabled.
         * @return {?}
         */
        function () { return this._parent && this._parent.disableRipple; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatOption.prototype, "active", {
        /**
         * Whether or not the option is currently active and ready to be selected.
         * An active option displays styles as if it is focused, but the
         * focus is actually retained somewhere else. This comes in handy
         * for components like autocomplete where focus must remain on the input.
         */
        get: /**
         * Whether or not the option is currently active and ready to be selected.
         * An active option displays styles as if it is focused, but the
         * focus is actually retained somewhere else. This comes in handy
         * for components like autocomplete where focus must remain on the input.
         * @return {?}
         */
        function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatOption.prototype, "viewValue", {
        /**
         * The displayed value of the option. It is necessary to show the selected option in the
         * select's trigger.
         */
        get: /**
         * The displayed value of the option. It is necessary to show the selected option in the
         * select's trigger.
         * @return {?}
         */
        function () {
            // TODO(kara): Add input property alternative for node envs.
            return (this._getHostElement().textContent || '').trim();
        },
        enumerable: true,
        configurable: true
    });
    /** Selects the option. */
    /**
     * Selects the option.
     * @return {?}
     */
    MatOption.prototype.select = /**
     * Selects the option.
     * @return {?}
     */
    function () {
        this._selected = true;
        this._changeDetectorRef.markForCheck();
        this._emitSelectionChangeEvent();
    };
    /** Deselects the option. */
    /**
     * Deselects the option.
     * @return {?}
     */
    MatOption.prototype.deselect = /**
     * Deselects the option.
     * @return {?}
     */
    function () {
        this._selected = false;
        this._changeDetectorRef.markForCheck();
        this._emitSelectionChangeEvent();
    };
    /** Sets focus onto this option. */
    /**
     * Sets focus onto this option.
     * @return {?}
     */
    MatOption.prototype.focus = /**
     * Sets focus onto this option.
     * @return {?}
     */
    function () {
        var /** @type {?} */ element = this._getHostElement();
        if (typeof element.focus === 'function') {
            element.focus();
        }
    };
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    MatOption.prototype.setActiveStyles = /**
     * This method sets display styles on the option to make it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    function () {
        if (!this._active) {
            this._active = true;
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     */
    /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    MatOption.prototype.setInactiveStyles = /**
     * This method removes display styles on the option that made it appear
     * active. This is used by the ActiveDescendantKeyManager so key
     * events will display the proper options as active on arrow key events.
     * @return {?}
     */
    function () {
        if (this._active) {
            this._active = false;
            this._changeDetectorRef.markForCheck();
        }
    };
    /** Gets the label to be used when determining whether the option should be focused. */
    /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    MatOption.prototype.getLabel = /**
     * Gets the label to be used when determining whether the option should be focused.
     * @return {?}
     */
    function () {
        return this.viewValue;
    };
    /** Ensures the option is selected when activated from the keyboard. */
    /**
     * Ensures the option is selected when activated from the keyboard.
     * @param {?} event
     * @return {?}
     */
    MatOption.prototype._handleKeydown = /**
     * Ensures the option is selected when activated from the keyboard.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"] || event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["SPACE"]) {
            this._selectViaInteraction();
            // Prevent the page from scrolling down and form submits.
            event.preventDefault();
        }
    };
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     */
    /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     * @return {?}
     */
    MatOption.prototype._selectViaInteraction = /**
     * `Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.`
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this._selected = this.multiple ? !this._selected : true;
            this._changeDetectorRef.markForCheck();
            this._emitSelectionChangeEvent(true);
        }
    };
    /** Returns the correct tabindex for the option depending on disabled state. */
    /**
     * Returns the correct tabindex for the option depending on disabled state.
     * @return {?}
     */
    MatOption.prototype._getTabIndex = /**
     * Returns the correct tabindex for the option depending on disabled state.
     * @return {?}
     */
    function () {
        return this.disabled ? '-1' : '0';
    };
    /** Gets the host DOM element. */
    /**
     * Gets the host DOM element.
     * @return {?}
     */
    MatOption.prototype._getHostElement = /**
     * Gets the host DOM element.
     * @return {?}
     */
    function () {
        return this._element.nativeElement;
    };
    /**
     * @return {?}
     */
    MatOption.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        // Since parent components could be using the option's label to display the selected values
        // (e.g. `mat-select`) and they don't have a way of knowing if the option's label has changed
        // we have to check for changes in the DOM ourselves and dispatch an event. These checks are
        // relatively cheap, however we still limit them only to selected options in order to avoid
        // hitting the DOM too often.
        if (this._selected) {
            var /** @type {?} */ viewValue = this.viewValue;
            if (viewValue !== this._mostRecentViewValue) {
                this._mostRecentViewValue = viewValue;
                this._stateChanges.next();
            }
        }
    };
    /**
     * @return {?}
     */
    MatOption.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    /**
     * Emits the selection change event.
     * @param {?=} isUserInput
     * @return {?}
     */
    MatOption.prototype._emitSelectionChangeEvent = /**
     * Emits the selection change event.
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
    };
    MatOption.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{selector: 'mat-option',
                    exportAs: 'matOption',
                    host: {
                        'role': 'option',
                        '[attr.tabindex]': '_getTabIndex()',
                        '[class.mat-selected]': 'selected',
                        '[class.mat-option-multiple]': 'multiple',
                        '[class.mat-active]': 'active',
                        '[id]': 'id',
                        '[attr.aria-selected]': 'selected.toString()',
                        '[attr.aria-disabled]': 'disabled.toString()',
                        '[class.mat-option-disabled]': 'disabled',
                        '(click)': '_selectViaInteraction()',
                        '(keydown)': '_handleKeydown($event)',
                        'class': 'mat-option',
                    },
                    styles: [".mat-option{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;line-height:48px;height:48px;padding:0 16px;text-align:left;text-decoration:none;position:relative;cursor:pointer;outline:0;display:flex;flex-direction:row;max-width:100%;box-sizing:border-box;align-items:center}.mat-option[disabled]{cursor:default}[dir=rtl] .mat-option{text-align:right}.mat-option .mat-icon{margin-right:16px;vertical-align:middle}.mat-option .mat-icon svg{vertical-align:top}[dir=rtl] .mat-option .mat-icon{margin-left:16px;margin-right:0}.mat-option[aria-disabled=true]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:32px}[dir=rtl] .mat-optgroup .mat-option:not(.mat-option-multiple){padding-left:16px;padding-right:32px}@media screen and (-ms-high-contrast:active){.mat-option{margin:0 1px}.mat-option.mat-active{border:solid 1px currentColor;margin:0}}.mat-option-text{display:inline-block;flex-grow:1;overflow:hidden;text-overflow:ellipsis}.mat-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}@media screen and (-ms-high-contrast:active){.mat-option-ripple{opacity:.5}}.mat-option-pseudo-checkbox{margin-right:8px}[dir=rtl] .mat-option-pseudo-checkbox{margin-left:8px;margin-right:0}"],
                    template: "<mat-pseudo-checkbox *ngIf=\"multiple\" class=\"mat-option-pseudo-checkbox\" [state]=\"selected ? 'checked' : ''\" [disabled]=\"disabled\"></mat-pseudo-checkbox><span class=\"mat-option-text\"><ng-content></ng-content></span><div class=\"mat-option-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"disabled || disableRipple\"></div>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatOption.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_OPTION_PARENT_COMPONENT,] },] },
        { type: MatOptgroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
    ]; };
    MatOption.propDecorators = {
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "onSelectionChange": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return MatOption;
}());
/**
 * Counts the amount of option group labels that precede the specified option.
 * \@docs-private
 * @param {?} optionIndex Index of the option at which to start counting.
 * @param {?} options Flat list of all of the options.
 * @param {?} optionGroups Flat list of all of the option groups.
 * @return {?}
 */
function _countGroupLabelsBeforeOption(optionIndex, options, optionGroups) {
    if (optionGroups.length) {
        var /** @type {?} */ optionsArray = options.toArray();
        var /** @type {?} */ groups = optionGroups.toArray();
        var /** @type {?} */ groupCounter = 0;
        for (var /** @type {?} */ i = 0; i < optionIndex + 1; i++) {
            if (optionsArray[i].group && optionsArray[i].group === groups[groupCounter]) {
                groupCounter++;
            }
        }
        return groupCounter;
    }
    return 0;
}
/**
 * Determines the position to which to scroll a panel in order for an option to be into view.
 * \@docs-private
 * @param {?} optionIndex Index of the option to be scrolled into the view.
 * @param {?} optionHeight Height of the options.
 * @param {?} currentScrollPosition Current scroll position of the panel.
 * @param {?} panelHeight Height of the panel.
 * @return {?}
 */
function _getOptionScrollPosition(optionIndex, optionHeight, currentScrollPosition, panelHeight) {
    var /** @type {?} */ optionOffset = optionIndex * optionHeight;
    if (optionOffset < currentScrollPosition) {
        return optionOffset;
    }
    if (optionOffset + optionHeight > currentScrollPosition + panelHeight) {
        return Math.max(0, optionOffset - panelHeight + optionHeight);
    }
    return currentScrollPosition;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatOptionModule = /** @class */ (function () {
    function MatOptionModule() {
    }
    MatOptionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [MatRippleModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"], MatPseudoCheckboxModule],
                    exports: [MatOption, MatOptgroup],
                    declarations: [MatOption, MatOptgroup]
                },] },
    ];
    return MatOptionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * InjectionToken that can be used to specify the global label options.
 */
var /** @type {?} */ MAT_LABEL_GLOBAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('mat-label-global-options');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * When constructing a Date, the month is zero-based. This can be confusing, since people are
 * used to seeing them one-based. So we create these aliases to make writing the tests easier.
 */
var /** @type {?} */ JAN = 0, /** @type {?} */ FEB = 1, /** @type {?} */ MAR = 2, /** @type {?} */ APR = 3, /** @type {?} */ MAY = 4, /** @type {?} */ JUN = 5, /** @type {?} */ JUL = 6, /** @type {?} */ AUG = 7, /** @type {?} */ SEP = 8, /** @type {?} */
OCT = 9, /** @type {?} */ NOV = 10, /** @type {?} */ DEC = 11;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=core.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/material/esm5/radio.es5.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/material/esm5/radio.es5.js ***!
  \**********************************************************/
/*! exports provided: MatRadioModule, MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR, MatRadioChange, MatRadioGroupBase, _MatRadioGroupMixinBase, MatRadioGroup, MatRadioButtonBase, _MatRadioButtonMixinBase, MatRadioButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioModule", function() { return MatRadioModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR", function() { return MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioChange", function() { return MatRadioChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioGroupBase", function() { return MatRadioGroupBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatRadioGroupMixinBase", function() { return _MatRadioGroupMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioGroup", function() { return MatRadioGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioButtonBase", function() { return MatRadioButtonBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_MatRadioButtonMixinBase", function() { return _MatRadioButtonMixinBase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatRadioButton", function() { return MatRadioButton; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// Increasing integer for generating unique ids for radio components.
var /** @type {?} */ nextUniqueId = 0;
/**
 * Provider Expression that allows mat-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 * \@docs-private
 */
var /** @type {?} */ MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return MatRadioGroup; }),
    multi: true
};
/**
 * Change event object emitted by MatRadio and MatRadioGroup.
 */
var  /**
 * Change event object emitted by MatRadio and MatRadioGroup.
 */
MatRadioChange = /** @class */ (function () {
    function MatRadioChange(source, value) {
        this.source = source;
        this.value = value;
    }
    return MatRadioChange;
}());
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatRadioGroupBase = /** @class */ (function () {
    function MatRadioGroupBase() {
    }
    return MatRadioGroupBase;
}());
var /** @type {?} */ _MatRadioGroupMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisabled"])(MatRadioGroupBase);
/**
 * A group of radio buttons. May contain one or more `<mat-radio-button>` elements.
 */
var MatRadioGroup = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatRadioGroup, _super);
    function MatRadioGroup(_changeDetector) {
        var _this = _super.call(this) || this;
        _this._changeDetector = _changeDetector;
        /**
         * Selected value for group. Should equal the value of the selected radio button if there *is*
         * a corresponding radio button with a matching value. If there is *not* such a corresponding
         * radio button, this value persists to be applied in case a new radio button is added with a
         * matching value.
         */
        _this._value = null;
        /**
         * The HTML name attribute applied to radio buttons in this group.
         */
        _this._name = "mat-radio-group-" + nextUniqueId++;
        /**
         * The currently selected radio button. Should match value.
         */
        _this._selected = null;
        /**
         * Whether the `value` has been set to its initial value.
         */
        _this._isInitialized = false;
        /**
         * Whether the labels should appear after or before the radio-buttons. Defaults to 'after'
         */
        _this._labelPosition = 'after';
        /**
         * Whether the radio group is disabled.
         */
        _this._disabled = false;
        /**
         * Whether the radio group is required.
         */
        _this._required = false;
        /**
         * The method to be called in order to update ngModel
         */
        _this._controlValueAccessorChangeFn = function () { };
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         * \@docs-private
         */
        _this.onTouched = function () { };
        /**
         * Event emitted when the group value changes.
         * Change events are only emitted when the value changes due to user interaction with
         * a radio button (the same behavior as `<input type-"radio">`).
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        return _this;
    }
    Object.defineProperty(MatRadioGroup.prototype, "name", {
        get: /**
         * Name of the radio button group. All radio buttons inside this group will use this name.
         * @return {?}
         */
        function () { return this._name; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._name = value;
            this._updateRadioButtonNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "labelPosition", {
        get: /**
         * Whether the labels should appear after or before the radio-buttons. Defaults to 'after'
         * @return {?}
         */
        function () {
            return this._labelPosition;
        },
        set: /**
         * @param {?} v
         * @return {?}
         */
        function (v) {
            this._labelPosition = v === 'before' ? 'before' : 'after';
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "value", {
        get: /**
         * Value of the radio button.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} newValue
         * @return {?}
         */
        function (newValue) {
            if (this._value !== newValue) {
                // Set this before proceeding to ensure no circular loop occurs with selection.
                this._value = newValue;
                this._updateSelectedRadioFromValue();
                this._checkSelectedRadioButton();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MatRadioGroup.prototype._checkSelectedRadioButton = /**
     * @return {?}
     */
    function () {
        if (this._selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    };
    Object.defineProperty(MatRadioGroup.prototype, "selected", {
        get: /**
         * Whether the radio button is selected.
         * @return {?}
         */
        function () { return this._selected; },
        set: /**
         * @param {?} selected
         * @return {?}
         */
        function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this._checkSelectedRadioButton();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "disabled", {
        get: /**
         * Whether the radio group is disabled
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioGroup.prototype, "required", {
        get: /**
         * Whether the radio group is required
         * @return {?}
         */
        function () { return this._required; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            this._markRadiosForCheck();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     */
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     * @return {?}
     */
    MatRadioGroup.prototype.ngAfterContentInit = /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     * @return {?}
     */
    function () {
        // Mark this component as initialized in AfterContentInit because the initial value can
        // possibly be set by NgModel on MatRadioGroup, and it is possible that the OnInit of the
        // NgModel occurs *after* the OnInit of the MatRadioGroup.
        this._isInitialized = true;
    };
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     * @return {?}
     */
    MatRadioGroup.prototype._touch = /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     * @return {?}
     */
    function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    /**
     * @return {?}
     */
    MatRadioGroup.prototype._updateRadioButtonNames = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._radios) {
            this._radios.forEach(function (radio) {
                radio.name = _this.name;
            });
        }
    };
    /**
     * Updates the `selected` radio button from the internal _value state.
     * @return {?}
     */
    MatRadioGroup.prototype._updateSelectedRadioFromValue = /**
     * Updates the `selected` radio button from the internal _value state.
     * @return {?}
     */
    function () {
        var _this = this;
        // If the value already matches the selected radio, do nothing.
        var /** @type {?} */ isAlreadySelected = this._selected !== null && this._selected.value === this._value;
        if (this._radios && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach(function (radio) {
                radio.checked = _this.value === radio.value;
                if (radio.checked) {
                    _this._selected = radio;
                }
            });
        }
    };
    /** Dispatch change event with current selection and group value. */
    /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    MatRadioGroup.prototype._emitChangeEvent = /**
     * Dispatch change event with current selection and group value.
     * @return {?}
     */
    function () {
        if (this._isInitialized) {
            this.change.emit(new MatRadioChange(/** @type {?} */ ((this._selected)), this._value));
        }
    };
    /**
     * @return {?}
     */
    MatRadioGroup.prototype._markRadiosForCheck = /**
     * @return {?}
     */
    function () {
        if (this._radios) {
            this._radios.forEach(function (radio) { return radio._markForCheck(); });
        }
    };
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param value
     */
    /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    MatRadioGroup.prototype.writeValue = /**
     * Sets the model value. Implemented as part of ControlValueAccessor.
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this._changeDetector.markForCheck();
    };
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatRadioGroup.prototype.registerOnChange = /**
     * Registers a callback to be triggered when the model value changes.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param fn Callback to be registered.
     */
    /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    MatRadioGroup.prototype.registerOnTouched = /**
     * Registers a callback to be triggered when the control is touched.
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn Callback to be registered.
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param isDisabled Whether the control should be disabled.
     */
    /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the control should be disabled.
     * @return {?}
     */
    MatRadioGroup.prototype.setDisabledState = /**
     * Sets the disabled state of the control. Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled Whether the control should be disabled.
     * @return {?}
     */
    function (isDisabled) {
        this.disabled = isDisabled;
        this._changeDetector.markForCheck();
    };
    MatRadioGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"], args: [{
                    selector: 'mat-radio-group',
                    exportAs: 'matRadioGroup',
                    providers: [MAT_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
                    host: {
                        'role': 'radiogroup',
                        'class': 'mat-radio-group',
                    },
                    inputs: ['disabled'],
                },] },
    ];
    /** @nocollapse */
    MatRadioGroup.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], },
    ]; };
    MatRadioGroup.propDecorators = {
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] },],
        "_radios": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function () { return MatRadioButton; }), { descendants: true },] },],
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "labelPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "selected": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
    };
    return MatRadioGroup;
}(_MatRadioGroupMixinBase));
/**
 * \@docs-private
 */
var  /**
 * \@docs-private
 */
MatRadioButtonBase = /** @class */ (function () {
    function MatRadioButtonBase(_elementRef) {
        this._elementRef = _elementRef;
    }
    return MatRadioButtonBase;
}());
// As per Material design specifications the selection control radio should use the accent color
// palette by default. https://material.io/guidelines/components/selection-controls.html
var /** @type {?} */ _MatRadioButtonMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinColor"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinDisableRipple"])(Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["mixinTabIndex"])(MatRadioButtonBase)), 'accent');
/**
 * A Material design radio-button. Typically placed inside of `<mat-radio-group>` elements.
 */
var MatRadioButton = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MatRadioButton, _super);
    function MatRadioButton(radioGroup, elementRef, _changeDetector, _focusMonitor, _radioDispatcher) {
        var _this = _super.call(this, elementRef) || this;
        _this._changeDetector = _changeDetector;
        _this._focusMonitor = _focusMonitor;
        _this._radioDispatcher = _radioDispatcher;
        _this._uniqueId = "mat-radio-" + ++nextUniqueId;
        /**
         * The unique ID for the radio button.
         */
        _this.id = _this._uniqueId;
        /**
         * Event emitted when the checked state of this radio button changes.
         * Change events are only emitted when the value changes due to user interaction with
         * the radio button (the same behavior as `<input type-"radio">`).
         */
        _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Whether this radio is checked.
         */
        _this._checked = false;
        /**
         * Value assigned to this radio.
         */
        _this._value = null;
        /**
         * Unregister function for _radioDispatcher
         */
        _this._removeUniqueSelectionListener = function () { };
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        _this.radioGroup = radioGroup;
        _this._removeUniqueSelectionListener =
            _radioDispatcher.listen(function (id, name) {
                if (id !== _this.id && name === _this.name) {
                    _this.checked = false;
                }
            });
        return _this;
    }
    Object.defineProperty(MatRadioButton.prototype, "checked", {
        get: /**
         * Whether this radio button is checked.
         * @return {?}
         */
        function () { return this._checked; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ newCheckedState = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            if (this._checked !== newCheckedState) {
                this._checked = newCheckedState;
                if (newCheckedState && this.radioGroup && this.radioGroup.value !== this.value) {
                    this.radioGroup.selected = this;
                }
                else if (!newCheckedState && this.radioGroup && this.radioGroup.value === this.value) {
                    // When unchecking the selected radio button, update the selected radio
                    // property on the group.
                    this.radioGroup.selected = null;
                }
                if (newCheckedState) {
                    // Notify all radio buttons with the same name to un-check.
                    this._radioDispatcher.notify(this.id, this.name);
                }
                this._changeDetector.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "value", {
        get: /**
         * The value of this radio button.
         * @return {?}
         */
        function () { return this._value; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._value !== value) {
                this._value = value;
                if (this.radioGroup !== null) {
                    if (!this.checked) {
                        // Update checked when the value changed to match the radio group's value
                        this.checked = this.radioGroup.value === value;
                    }
                    if (this.checked) {
                        this.radioGroup.selected = this;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "labelPosition", {
        get: /**
         * Whether the label should appear after or before the radio button. Defaults to 'after'
         * @return {?}
         */
        function () {
            return this._labelPosition || (this.radioGroup && this.radioGroup.labelPosition) || 'after';
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._labelPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "disabled", {
        get: /**
         * Whether the radio button is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.radioGroup !== null && this.radioGroup.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var /** @type {?} */ newDisabledState = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
            if (this._disabled !== newDisabledState) {
                this._disabled = newDisabledState;
                this._changeDetector.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "required", {
        get: /**
         * Whether the radio button is required.
         * @return {?}
         */
        function () {
            return this._required || (this.radioGroup && this.radioGroup.required);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatRadioButton.prototype, "inputId", {
        /** ID of the native input element inside `<mat-radio-button>` */
        get: /**
         * ID of the native input element inside `<mat-radio-button>`
         * @return {?}
         */
        function () { return (this.id || this._uniqueId) + "-input"; },
        enumerable: true,
        configurable: true
    });
    /** Focuses the radio button. */
    /**
     * Focuses the radio button.
     * @return {?}
     */
    MatRadioButton.prototype.focus = /**
     * Focuses the radio button.
     * @return {?}
     */
    function () {
        this._focusMonitor.focusVia(this._inputElement.nativeElement, 'keyboard');
    };
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     */
    /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    MatRadioButton.prototype._markForCheck = /**
     * Marks the radio button as needing checking for change detection.
     * This method is exposed because the parent radio group will directly
     * update bound properties of the radio button.
     * @return {?}
     */
    function () {
        // When group value changes, the button will not be notified. Use `markForCheck` to explicit
        // update radio button's status
        this._changeDetector.markForCheck();
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.radioGroup) {
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._focusMonitor
            .monitor(this._inputElement.nativeElement)
            .subscribe(function (focusOrigin) { return _this._onInputFocusChange(focusOrigin); });
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._focusMonitor.stopMonitoring(this._inputElement.nativeElement);
        this._removeUniqueSelectionListener();
    };
    /**
     * Dispatch change event with current value.
     * @return {?}
     */
    MatRadioButton.prototype._emitChangeEvent = /**
     * Dispatch change event with current value.
     * @return {?}
     */
    function () {
        this.change.emit(new MatRadioChange(this, this._value));
    };
    /**
     * @return {?}
     */
    MatRadioButton.prototype._isRippleDisabled = /**
     * @return {?}
     */
    function () {
        return this.disableRipple || this.disabled;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MatRadioButton.prototype._onInputClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `radio-button` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     */
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     * @param {?} event
     * @return {?}
     */
    MatRadioButton.prototype._onInputChange = /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        var /** @type {?} */ groupValueChanged = this.radioGroup && this.value !== this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            this.radioGroup._touch();
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
        }
    };
    /**
     * Function is called whenever the focus changes for the input element.
     * @param {?} focusOrigin
     * @return {?}
     */
    MatRadioButton.prototype._onInputFocusChange = /**
     * Function is called whenever the focus changes for the input element.
     * @param {?} focusOrigin
     * @return {?}
     */
    function (focusOrigin) {
        // TODO(paul): support `program`. See https://github.com/angular/material2/issues/9889
        if (!this._focusRipple && focusOrigin === 'keyboard') {
            this._focusRipple = this._ripple.launch(0, 0, { persistent: true });
        }
        else if (!focusOrigin) {
            if (this.radioGroup) {
                this.radioGroup._touch();
            }
            if (this._focusRipple) {
                this._focusRipple.fadeOut();
                this._focusRipple = null;
            }
        }
    };
    MatRadioButton.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{selector: 'mat-radio-button',
                    template: "<label [attr.for]=\"inputId\" class=\"mat-radio-label\" #label><div class=\"mat-radio-container\"><div class=\"mat-radio-outer-circle\"></div><div class=\"mat-radio-inner-circle\"></div><div mat-ripple class=\"mat-radio-ripple\" [matRippleTrigger]=\"label\" [matRippleDisabled]=\"_isRippleDisabled()\" [matRippleCentered]=\"true\" [matRippleRadius]=\"23\" [matRippleAnimation]=\"{enterDuration: 150}\"></div></div><input #input class=\"mat-radio-input cdk-visually-hidden\" type=\"radio\" [id]=\"inputId\" [checked]=\"checked\" [disabled]=\"disabled\" [tabIndex]=\"tabIndex\" [attr.name]=\"name\" [required]=\"required\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" [attr.aria-describedby]=\"ariaDescribedby\" (change)=\"_onInputChange($event)\" (click)=\"_onInputClick($event)\"><div class=\"mat-radio-label-content\" [class.mat-radio-label-before]=\"labelPosition == 'before'\"><span style=\"display:none\">&nbsp;</span><ng-content></ng-content></div></label>",
                    styles: [".mat-radio-button{display:inline-block}.mat-radio-label{cursor:pointer;display:inline-flex;align-items:center;white-space:nowrap;vertical-align:middle}.mat-radio-container{box-sizing:border-box;display:inline-block;position:relative;width:20px;height:20px;flex-shrink:0}.mat-radio-outer-circle{box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:border-color ease 280ms;width:20px;border-width:2px;border-style:solid;border-radius:50%}.mat-radio-inner-circle{border-radius:50%;box-sizing:border-box;height:20px;left:0;position:absolute;top:0;transition:transform ease 280ms,background-color ease 280ms;width:20px;transform:scale(.001)}.mat-radio-checked .mat-radio-inner-circle{transform:scale(.5)}@media screen and (-ms-high-contrast:active){.mat-radio-checked .mat-radio-inner-circle{border:solid 10px}}.mat-radio-label-content{display:inline-block;order:0;line-height:inherit;padding-left:8px;padding-right:0}[dir=rtl] .mat-radio-label-content{padding-right:8px;padding-left:0}.mat-radio-label-content.mat-radio-label-before{order:-1;padding-left:0;padding-right:8px}[dir=rtl] .mat-radio-label-content.mat-radio-label-before{padding-right:0;padding-left:8px}.mat-radio-disabled,.mat-radio-disabled .mat-radio-label{cursor:default}.mat-radio-ripple{position:absolute;left:calc(50% - 25px);top:calc(50% - 25px);height:50px;width:50px;z-index:1;pointer-events:none}"],
                    inputs: ['color', 'disableRipple', 'tabIndex'],
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
                    exportAs: 'matRadioButton',
                    host: {
                        'class': 'mat-radio-button',
                        '[class.mat-radio-checked]': 'checked',
                        '[class.mat-radio-disabled]': 'disabled',
                        '[attr.id]': 'id',
                        // Note: under normal conditions focus shouldn't land on this element, however it may be
                        // programmatically set, for example inside of a focus trap, in this case we want to forward
                        // the focus to the native element.
                        '(focus)': '_inputElement.nativeElement.focus()',
                    },
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                },] },
    ];
    /** @nocollapse */
    MatRadioButton.ctorParameters = function () { return [
        { type: MatRadioGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"], },
        { type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"], },
        { type: _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["UniqueSelectionDispatcher"], },
    ]; };
    MatRadioButton.propDecorators = {
        "id": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "name": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "ariaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-label',] },],
        "ariaLabelledby": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-labelledby',] },],
        "ariaDescribedby": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"], args: ['aria-describedby',] },],
        "checked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "value": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "labelPosition": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "disabled": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "required": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] },],
        "change": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] },],
        "_ripple": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRipple"],] },],
        "_inputElement": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['input',] },],
    };
    return MatRadioButton;
}(_MatRadioButtonMixinBase));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MatRadioModule = /** @class */ (function () {
    function MatRadioModule() {
    }
    MatRadioModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
                    exports: [MatRadioGroup, MatRadioButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_6__["MatCommonModule"]],
                    declarations: [MatRadioGroup, MatRadioButton],
                },] },
    ];
    return MatRadioModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */


//# sourceMappingURL=radio.es5.js.map


/***/ }),

/***/ "./src/app/layout/autofillFlight/autofillFlight.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/layout/autofillFlight/autofillFlight.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 cust-autofill padding-left-0\">\r\n    <input type=\"text\" class=\"col-sm-12 cust-autofill-input-unique padding-left-0\"\r\n     [(ngModel)]=\"state\" (focus)=\"onStateFocus(id)\" [attr.id]=\"id\" (ngModelChange)=\"onStateFocus(id)\">\r\n    <div class=\"col-sm-12\" *ngIf=\"stateopen\"  [attr.id]=\"menu\">\r\n        <ul>\r\n            <li *ngFor=\"let state of states\" (click)=\"stateSelected(state)\">\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col-sm-12 padding-left-0\">\r\n                        <div class=\"row\"><i class=\"fa fa-plane\" aria-hidden=\"true\"></i> <b>{{state.city}} ({{state.code}})</b></div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">{{state.name}}</div>\r\n                            <div class=\"col-sm-5\" style=\"text-align: right;\">{{state.country}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/autofillFlight/autofillFlight.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/autofillFlight/autofillFlight.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cust-autofill > div {\n  padding-left: 0px;\n  position: absolute;\n  z-index: 9; }\n\n.cust-autofill ul {\n  list-style-type: none;\n  background-color: #fff;\n  border: 1px solid #007bff;\n  color: #000;\n  padding-right: 0px;\n  padding-left: 0px;\n  border-radius: 5px;\n  margin-top: 1px;\n  margin-left: 2px;\n  max-height: 200px;\n  overflow-y: scroll; }\n\n.cust-autofill ul li {\n  padding-bottom: 5px;\n  cursor: pointer;\n  padding: 10px; }\n\n.cust-autofill ul li:hover {\n  background-color: #007bff;\n  color: #fff; }\n\n.cust-autofill input {\n  height: 35px;\n  border-radius: 5px; }\n\n.cust-autofill .row {\n  margin: 0px !important; }\n\n.cust-autofill i {\n  margin: 5px 5px 0px 0px; }\n\n.padding-left-0 {\n  padding-left: 0px; }\n\n.cust-autofill-input-unique {\n  padding-left: 10px; }\n"

/***/ }),

/***/ "./src/app/layout/autofillFlight/autofillFlight.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/autofillFlight/autofillFlight.component.ts ***!
  \*******************************************************************/
/*! exports provided: autofillFlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autofillFlightComponent", function() { return autofillFlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _shared_services_airports_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/airports.service */ "./src/app/shared/services/airports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var autofillFlightComponent = /** @class */ (function () {
    function autofillFlightComponent(airportService) {
        this.airportService = airportService;
        this.state = "";
        this.stateopen = false;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menu = "";
        this.stateselectedOBJ = "";
        this.states = [];
    }
    autofillFlightComponent.prototype.ngOnInit = function () {
        this.menu = "menu_" + this.id;
    };
    autofillFlightComponent.prototype.ondocClick = function (event) {
        var closeSelection = true;
        if (event.target) {
            if (event.target.className) {
                if (event.target.className.indexOf('cust-autofill-input-unique') > -1) {
                    closeSelection = false;
                }
            }
        }
        if (closeSelection) {
            this.stateopen = false;
        }
        else {
            // this.onStateFocus(this.id);
        }
    };
    autofillFlightComponent.prototype.stateSelected = function (state) {
        this.state = state.city + " (" + state.code + ")";
        ;
        this.stateselectedOBJ = state;
        this.stateopen = false;
        this.change.emit(state.code);
    };
    autofillFlightComponent.prototype.onStateFocus = function (id) {
        var _this = this;
        this.stateopen = false;
        if (this.state.length > 2) {
            this.airportService.getairports(this.state).then(function (x) {
                var res = x.filter(function (data) { return String(data['code']).toLowerCase().indexOf(_this.state.toLowerCase()) > -1 ||
                    String(data['name']).toLowerCase().indexOf(_this.state.toLowerCase()) > -1 ||
                    String(data['city']).toLowerCase().indexOf(_this.state.toLowerCase()) > -1; });
                _this.states = res;
                if (id == _this.id) {
                    _this.stateopen = true;
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], autofillFlightComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], autofillFlightComponent.prototype, "change", void 0);
    autofillFlightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-autofill-flight',
            template: __webpack_require__(/*! ./autofillFlight.component.html */ "./src/app/layout/autofillFlight/autofillFlight.component.html"),
            styles: [__webpack_require__(/*! ./autofillFlight.component.scss */ "./src/app/layout/autofillFlight/autofillFlight.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            host: {
                '(document:click)': 'ondocClick($event)',
            },
            providers: [_shared_services_airports_service__WEBPACK_IMPORTED_MODULE_2__["AirportService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_airports_service__WEBPACK_IMPORTED_MODULE_2__["AirportService"]])
    ], autofillFlightComponent);
    return autofillFlightComponent;
}());



/***/ }),

/***/ "./src/app/layout/bookings/bookings.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/bookings/bookings.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "bookins info"

/***/ }),

/***/ "./src/app/layout/bookings/bookings.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/bookings/bookings.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-top-20 {\n  margin-top: 20px; }\n\n.btn-calender {\n  background-color: #fff; }\n\n.btn-calender:hover {\n  color: #000fff !important; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/layout/bookings/bookings.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/bookings/bookings.component.ts ***!
  \*******************************************************/
/*! exports provided: bookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingsComponent", function() { return bookingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_fare_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/fare-quote.service */ "./src/app/shared/services/fare-quote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var bookingsComponent = /** @class */ (function () {
    function bookingsComponent(route, fareQuoteService) {
        this.route = route;
        this.fareQuoteService = fareQuoteService;
    }
    bookingsComponent.prototype.ngOnInit = function () {
    };
    bookingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bookings',
            template: __webpack_require__(/*! ./bookings.component.html */ "./src/app/layout/bookings/bookings.component.html"),
            styles: [__webpack_require__(/*! ./bookings.component.scss */ "./src/app/layout/bookings/bookings.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_fare_quote_service__WEBPACK_IMPORTED_MODULE_3__["FareQuoteService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_fare_quote_service__WEBPACK_IMPORTED_MODULE_3__["FareQuoteService"]])
    ], bookingsComponent);
    return bookingsComponent;
}());



/***/ }),

/***/ "./src/app/layout/flightBook/flightBook.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/flightBook/flightBook.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n    <div class=\"card-header\">Filght Details</div>\r\n    <div class=\"card-body\">\r\n\r\n        <div class=\"row card-cust\">\r\n            <div class=\"pull-left col-md-12\">\r\n\r\n                <div class=\"card_book\" *ngFor=\"let res of output\">\r\n                    <div *ngIf=\"res\">\r\n                    <div class=\"row\" [ngClass]=\"{'inner-flights-seperation':!segmentFirst}\"\r\n                     *ngFor=\"let segment of res.Segments;let segmentFirst=first;\">\r\n                        <div class=\"div-img\">\r\n                            <div><img src=\"https://s3-us-west-2.amazonaws.com/paytm-travel/travel_db/flights/airlines+logo/SG.png\"\r\n                                    role=\"presentation\"></div>\r\n                        </div>\r\n\r\n                        <div [ngClass]=\"{'flight-name':searchOutputlength==1,'flight-name-trip':searchOutputlength==2}\">\r\n                            <div class=\"flight-name-key \">{{segment[0].Airline.AirlineName}}</div>\r\n                            <div class=\"flight-name-value\">\r\n                                {{segment[0].Airline.AirlineCode}} - {{segment[0].Airline.FlightNumber}}\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"start-time text-align-center\">\r\n                            <div class=\"timing\">{{segment[0].Origin.DepTime | date:'dd/MM/yyyy'}}</div>\r\n                            <div class=\"timing\">{{segment[0].Origin.DepTime | date:'HH:mm'}}</div>\r\n                            <div class=\"place\"> {{segment[0].Origin.Airport.AirportCode}}</div>\r\n                        </div>\r\n                        <div class=\"duration text-align-center\" *ngIf=\"searchOutputlength==1\">\r\n                            <div class=\"opacity-1 duration-1\">{{convertDurationHRS(segment[0].Duration)}}</div>\r\n                            <div class=\"duration-icon\"><img src=\"https://paytm.com/travel/images/flights/srp_arrow.svg\" role=\"presentation\"></div>\r\n                            <div class=\"duration-1\">Non Stop</div>\r\n                        </div>\r\n                        <div class=\"start-time text-align-center\" *ngIf=\"searchOutputlength!==1\">\r\n                            <div class=\"timing\">{{segment[0].Duration}}</div>\r\n                            <div class=\"place\">Non Stop</div>\r\n                        </div>\r\n                        <div class=\"arrival-1 text-align-center\">\r\n                            <div class=\"timing\">{{segment[0].Destination.ArrTime | date:'dd/MM/yyyy'}}</div>\r\n                            <div class=\"timing\">{{segment[0].Destination.ArrTime | date:'HH:mm'}}</div>\r\n                            <div class=\"place\"> {{segment[0].Destination.Airport.AirportCode}}</div>\r\n                        </div>\r\n\r\n                        <div class=\"price-1 text-align-center\" *ngIf=\"segmentFirst\">\r\n                            <div class=\"price-amount\">\r\n                                <div class=\"display-inline-block\"><img src=\"//drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/c73cc5fb.svg\" role=\"presentation\"></div>\r\n                                {{res.Fare.PublishedFare}}\r\n\r\n                            </div>\r\n                            <div class=\"place\">{{res.IsRefundable && 'Refundable' || 'Non-Refundable'}}</div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"card margin-top-20\">\r\n    <div class=\"card-header\">InsurenceDetails</div>\r\n    <div class=\"card-body\">Content</div>\r\n</div>\r\n\r\n\r\n<div class=\"card margin-top-20\">\r\n    <div class=\"card-header\">Passengers Details</div>\r\n    <div class=\"card-body\">\r\n\r\n        <div class=\"card margin-top-10\" *ngFor=\"let passenger of passengers\">\r\n            <div class=\"card-header\">{{passenger.name}}</div>\r\n            <div class=\"card-body\">\r\n                <div class=\"col-md-12 pull-left\">\r\n                    <div class=\"col-md-2 pull-left\">\r\n                        <div class=\"form-group\">\r\n                            <label>Title *</label>\r\n                            <select class=\"form-control\" [(ngModel)]=\"passenger.title\">\r\n                    <option *ngFor=\"let title of nameTitle[passenger.titleType]\">{{title}}</option>    \r\n                    </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4 pull-left\">\r\n                        <div class=\"form-group\">\r\n                            <label>First Name *</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"passenger.firstName\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 pull-left\">\r\n                        <div class=\"form-group\">\r\n                            <label>Middle Name </label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"passenger.middleName\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-3 pull-left\">\r\n                        <div class=\"form-group\">\r\n                            <label>Last Name *</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"passenger.lastName\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12 pull-left\">\r\n                    <div class=\"col-md-6 pull-left\">\r\n                        <div class=\"form-group\">\r\n                            <label>Gender *</label>\r\n                            <select class=\"form-control\" [(ngModel)]=\"passenger.gender\">\r\n                    <option *ngFor=\"let gen of gender\">{{gen}}</option>    \r\n                    </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 pull-left\">\r\n                        <div class=\"form-group\">\r\n                            <label>Date Of Birth</label>\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" [(ngModel)]=\"passenger.dob\" placeholder=\"Departure Date\" name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                <button class=\"btn btn-outline-secondary btn-calender\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i> </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-12 pull-left\">\r\n                    <div class=\"col-md-6 pull-left\">\r\n                        <div class=\"form-group\">\r\n                            <label>Passport Number</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"passenger.passportNumber\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 pull-left\">\r\n                        <div class=\"form-group\">\r\n                            <label>Passport Expiry date</label>\r\n                            <div class=\"input-group\">\r\n                                <input class=\"form-control\" [(ngModel)]=\"passenger.passportED\" placeholder=\"Departure Date\" name=\"dp\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n                                <button class=\"btn btn-outline-secondary btn-calender\" (click)=\"d2.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i> </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"card margin-top-10\">\r\n            <div class=\"card-body\">\r\n                <div class=\"col-md-12 pull-left\">\r\n                    <div class=\"col-md-6 pull-left\">\r\n                        <div class=\"form-group\">\r\n                            <label>Contact Number *</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"contactNumber\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 pull-left\">\r\n                        <div class=\"form-group\">\r\n                            <label>Email *</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n<button class=\"btn btn-primary pull-right\" (click)=\"bookFlight()\"><i class=\"fa fa-flight\"></i> &nbsp;&nbsp; Book </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/flightBook/flightBook.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/layout/flightBook/flightBook.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".margin-top-20 {\n  margin-top: 20px; }\n\n.btn-calender {\n  background-color: #fff; }\n\n.btn-calender:hover {\n  color: #000fff !important; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/layout/flightBook/flightBook.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/flightBook/flightBook.component.ts ***!
  \***********************************************************/
/*! exports provided: flightBookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flightBookComponent", function() { return flightBookComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_fare_quote_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/fare-quote.service */ "./src/app/shared/services/fare-quote.service.ts");
/* harmony import */ var _shared_models_fare_quote_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/models/fare-quote.model */ "./src/app/shared/models/fare-quote.model.ts");
/* harmony import */ var _shared_models_book_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/models/book.model */ "./src/app/shared/models/book.model.ts");
/* harmony import */ var _shared_models_flight_ticket_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/models/flight-ticket.model */ "./src/app/shared/models/flight-ticket.model.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var flightBookComponent = /** @class */ (function () {
    function flightBookComponent(route, fareQuoteService) {
        this.route = route;
        this.fareQuoteService = fareQuoteService;
        this.nameTitle = [["Mr", "Mrs", "Ms"], ["Ms", "Master"]];
        this.gender = ["Male", "Female", "Others"];
        this.audultcount = 0;
        this.childrencount = 0;
        this.infrantscount = 0;
        this.journeyclass = 1;
        this.searchOutputlength = 1;
        this.output = [];
        this.passengers = [];
        this.contactNumber = "";
        this.email = "";
        this.ResultIndex = [];
    }
    flightBookComponent.prototype.ngOnInit = function () {
        var _this = this;
        debugger;
        this.route.params.subscribe(function (params) {
            _this.params = params;
            _this.ResultIndex = String(params['ResultIndex']).split('-');
            _this.output = [];
            for (var v = 0; v < _this.ResultIndex.length; v++) {
                var fareQuoteRequest = new _shared_models_fare_quote_model__WEBPACK_IMPORTED_MODULE_4__["FareQuoteRequest"]();
                fareQuoteRequest.ResultIndex = _this.ResultIndex[v];
                fareQuoteRequest.TraceId = params['TraceId'];
                fareQuoteRequest.TokenId = localStorage.getItem('TokenId');
                fareQuoteRequest.EndUserIp = localStorage.getItem('ClientIp');
                _this.fareQuoteService.getFareQuote(fareQuoteRequest).subscribe(function (x) {
                    _this.fareQuoteResponse = x;
                    _this.output.push(x.Response.Results);
                    debugger;
                });
            }
            _this.audultcount = parseInt(params['audultcount']);
            _this.childrencount = parseInt(params['childrencount']);
            _this.infrantscount = parseInt(params['infrantscount']);
            _this.journeyclass = parseInt(params['journeyclass']);
            for (var v = 0; v < _this.audultcount; v++) {
                var obj = {
                    title: "",
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    gender: "",
                    dob: "",
                    passportNumber: "",
                    passportED: "",
                    name: "Audult " + (v + 1),
                    type: "Audult",
                    titleType: 0
                };
                _this.passengers.push(obj);
            }
            for (var v = 0; v < _this.childrencount; v++) {
                var obj = {
                    title: "",
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    gender: "",
                    dob: "",
                    passportNumber: "",
                    passportED: "",
                    name: "Children " + (v + 1),
                    type: "Children",
                    titleType: 1
                };
                _this.passengers.push(obj);
            }
            for (var v = 0; v < _this.infrantscount; v++) {
                var obj = {
                    title: "",
                    firstName: "",
                    middleName: "",
                    lastName: "",
                    gender: "",
                    dob: "",
                    passportNumber: "",
                    passportED: "",
                    name: "Infrant " + (v + 1),
                    type: "Infrant",
                    titleType: 1
                };
                _this.passengers.push(obj);
            }
        });
    };
    flightBookComponent.prototype.gotoSearchClick = function () {
    };
    flightBookComponent.prototype.bookFlight = function () {
        var scope = this;
        var prefillName = this.contactNumber;
        var prefillemail = this.email;
        var options = {
            "key": _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].paymentGateWay.key,
            "amount": "100",
            "name": _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].paymentGateWay.name,
            "description": _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].paymentGateWay.description,
            "image": _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].paymentGateWay.image,
            "handler": function (response) {
                scope.paymentSuccess(response);
            },
            "prefill": {
                "name": prefillName,
                "email": prefillemail
            },
            "notes": {
                "address": ""
            },
            "theme": {
                "color": _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].paymentGateWay.color
            }
        };
        var rzp1 = new Razorpay(options);
        rzp1.open();
    };
    flightBookComponent.prototype.paymentSuccess = function (resPayment) {
        var _this = this;
        var currentDate = new Date();
        var ticketGeneration = [];
        var uniqueID = this.createUniqueID();
        for (var v = 0; v < this.ResultIndex.length; v++) {
            var bookRequest = new _shared_models_book_model__WEBPACK_IMPORTED_MODULE_5__["BookRequest"]();
            bookRequest.EndUserIp = localStorage.getItem('ClientIp');
            bookRequest.TokenId = localStorage.getItem('TokenId');
            bookRequest.TraceId = this.params['TraceId'];
            bookRequest.ResultIndex = this.ResultIndex[v];
            bookRequest.Passengers = this.generatePassengers(); //[{
            this.fareQuoteService.bookFlight(bookRequest).subscribe(function (x) {
                debugger;
                var response = x.Response.Response;
                var userID = '1';
                if (localStorage.getItem('UserDetails')) {
                    userID = JSON.parse(localStorage.getItem('UserDetails')).id;
                }
                if (response) {
                    var ticketRequest = { EndUserIp: "", TokenId: "", TraceId: "", PNR: "", BookingId: "" };
                    ticketRequest.EndUserIp = localStorage.getItem('ClientIp');
                    ticketRequest.TokenId = localStorage.getItem('TokenId');
                    ticketRequest.TraceId = _this.params['TraceId'];
                    ticketRequest.BookingId = response['BookingId'];
                    ticketRequest.PNR = response['PNR'];
                    _this.fareQuoteService.getTicket(ticketRequest).subscribe(function (ticket) {
                        var ticketInfo = ticket.Response.Response;
                        if (ticketInfo) {
                            var flightTicket = new _shared_models_flight_ticket_model__WEBPACK_IMPORTED_MODULE_6__["FlightTicket"]();
                            flightTicket.uniqueID = uniqueID;
                            flightTicket.tPNR = String(Math.floor(100000000 + Math.random() * 900000000));
                            flightTicket.issuedOn = currentDate.getFullYear() + "-" + currentDate.getMonth() + 1 + "-" + currentDate.getDate() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds(); //this.stringfyDate(response.FlightItinerary.LastTicketDate);
                            flightTicket.issuedBy = _this.generateIssuedBy(response.FlightItinerary.Segments);
                            flightTicket.airlinePNR = response.FlightItinerary.PNR;
                            flightTicket.customerPhoneNumber = response.FlightItinerary.AirlineTollFreeNo;
                            flightTicket.ticketStatus = _this.getStatus(response.Status);
                            flightTicket.basicFare = String(ticketInfo.FlightItinerary.Fare.BaseFare);
                            flightTicket.fuelSurchare = "0";
                            flightTicket.jnTax = String(ticketInfo.FlightItinerary.Fare.Tax);
                            flightTicket.meals = "0";
                            flightTicket.baggage = "0";
                            flightTicket.otherCharges = String(ticketInfo.FlightItinerary.Fare.OtherCharges);
                            flightTicket.grossFare = String(ticketInfo.FlightItinerary.Fare.PublishedFare);
                            flightTicket.MOP = "";
                            flightTicket.issueInExchangeFor = "";
                            flightTicket.tourCode = "";
                            flightTicket.gatewayChanges = "";
                            flightTicket.emailId = _this.email;
                            flightTicket.phoneNumber = _this.contactNumber;
                            flightTicket.filghtDetails = _this.generateFlightDetails(response.FlightItinerary.Segments, response.FlightItinerary.FareRules);
                            flightTicket.passengerDetails = _this.generatePassengerDetails(response.FlightItinerary, ticketInfo.FlightItinerary);
                            flightTicket.EndUserIp = localStorage.getItem('ClientIp');
                            flightTicket.TokenId = localStorage.getItem('TokenId');
                            flightTicket.TraceId = _this.params['TraceId'];
                            flightTicket.BookingId = response['BookingId'];
                            flightTicket.paymentId = resPayment.razorpay_payment_id;
                            flightTicket.userid = parseInt(userID);
                            ticketGeneration.push(flightTicket);
                            if (_this.ResultIndex.length === ticketGeneration.length) {
                                _this.fareQuoteService.sendTicket(ticketGeneration).subscribe(function (res) {
                                    debugger;
                                    var vv = res;
                                });
                            }
                        }
                        else {
                            alert("Booking Failed,please try again after some time");
                        }
                    });
                }
                else {
                    alert("Booking Failed,please try again after some time");
                }
            });
        }
    };
    flightBookComponent.prototype.createUniqueID = function () {
        var date = new Date();
        return date.getFullYear() + "_" + date.getMonth() + "_" + date.getDate() + "_" + date.getHours() + "_" + date.getMinutes() + "_" + date.getSeconds() + "_" + date.getMilliseconds();
    };
    flightBookComponent.prototype.generateIssuedBy = function (segments) {
        var airline = "";
        for (var v = 0; v < segments.length; v++) {
            airline += segments[v].Airline.AirlineName + "-" + segments[v].Airline.AirlineCode + " / ";
        }
        if (!!airline) {
            airline = airline.substr(0, airline.length - 3);
        }
        return airline;
    };
    flightBookComponent.prototype.generateFlightDetails = function (segments, fareRules) {
        var filghtDetailsList = [];
        for (var v = 0; v < segments.length; v++) {
            var filghtDetails = new _shared_models_flight_ticket_model__WEBPACK_IMPORTED_MODULE_6__["FilghtDetails"]();
            filghtDetails.origin = segments[v].Origin.Airport.CityName;
            filghtDetails.destination = segments[v].Destination.Airport.CityName;
            filghtDetails.flightNumber = segments[v].Airline.FlightNumber;
            filghtDetails.depatureTime = this.stringfyDate(segments[v].Origin.DepTime);
            filghtDetails.arrivalTime = this.stringfyDate(segments[v].Destination.ArrTime);
            filghtDetails.class = segments[v].Airline.FareClass;
            filghtDetails.fareBasis = fareRules[v].FareBasisCode;
            filghtDetails.operatedBy = segments[v].Airline.AirlineName + "-" + segments[v].Airline.AirlineCode;
            filghtDetails.depatureTerminal = segments[v].Origin.Airport.Terminal ? segments[v].Origin.Airport.Terminal : "depatureTerminal";
            filghtDetails.arrivalTerminal = segments[v].Destination.Airport.Terminal ? segments[v].Destination.Airport.Terminal : "arrivalTerminal";
            ;
            filghtDetailsList.push(filghtDetails);
        }
        return filghtDetailsList;
    };
    flightBookComponent.prototype.generatePassengerDetails = function (flightItinerary, ticketFlightItinerary) {
        var passengerDetailsList = [];
        for (var v = 0; v < ticketFlightItinerary.Passenger.length; v++) {
            var passengerDetails = new _shared_models_flight_ticket_model__WEBPACK_IMPORTED_MODULE_6__["PassengerDetails"]();
            passengerDetails.firstname = ticketFlightItinerary.Passenger[v].FirstName;
            passengerDetails.middlename = ticketFlightItinerary.Passenger[v].MiddleName ? ticketFlightItinerary.Passenger[v].MiddleName : "";
            passengerDetails.lastname = ticketFlightItinerary.Passenger[v].LastName;
            passengerDetails.title = ticketFlightItinerary.Passenger[v].Title;
            passengerDetails.name = ticketFlightItinerary.Passenger[v].Title + " " + ticketFlightItinerary.Passenger[v].FirstName + " " + ticketFlightItinerary.Passenger[v].LastName;
            passengerDetails.type = this.passengers[v].type;
            passengerDetails.ticketNumber = ticketFlightItinerary.Passenger[v].Ticket.TicketId;
            passengerDetails.FF = ticketFlightItinerary.Passenger[v].FFNumber ? ticketFlightItinerary.Passenger[v].FFNumber : "FF";
            passengerDetails.mealCode = "mealCode";
            passengerDetails.basic = String(flightItinerary.Fare.BaseFare);
            passengerDetails.fuel = "fuel";
            passengerDetails.JN = "JN";
            passengerDetails.meals = ticketFlightItinerary.Passenger[v].SegmentAdditionalInfo[0].Meal ? ticketFlightItinerary.Passenger[v].SegmentAdditionalInfo[0].Meal : "meals";
            passengerDetails.baggage = 'baggage';
            passengerDetails.seat = ticketFlightItinerary.Passenger[v].SegmentAdditionalInfo[0].Seat ? ticketFlightItinerary.Passenger[v].SegmentAdditionalInfo[0].Seat : "seat";
            passengerDetails.taxes = String(flightItinerary.Fare.Tax);
            passengerDetails.gross = String(flightItinerary.Fare.PublishedFare);
            passengerDetails.bgs = ticketFlightItinerary.Passenger[v].SegmentAdditionalInfo[0].Baggage;
            passengerDetailsList.push(passengerDetails);
        }
        return passengerDetailsList;
    };
    flightBookComponent.prototype.getStatus = function (val) {
        var status = ["Not Set", "Confirmed", "Failed", "Other Fare",
            "Other Class", "Booked Other", "Not Confirmed"];
        return status[val];
    };
    flightBookComponent.prototype.generatePassengers = function () {
        var totalPassengers = [];
        var userDetails = JSON.parse(localStorage.getItem('UserDetails'));
        for (var v = 0; v < this.passengers.length; v++) {
            var singlePassenger = this.passengers[v];
            var passenger = new _shared_models_book_model__WEBPACK_IMPORTED_MODULE_5__["Passengers"]();
            passenger.Title = singlePassenger.title;
            passenger.FirstName = singlePassenger.middleName ? singlePassenger.firstName + " " + singlePassenger.middleName : singlePassenger.firstName;
            passenger.LastName = singlePassenger.lastName;
            passenger.PaxType = 1;
            passenger.DateOfBirth = this.formateDate(singlePassenger.dob);
            passenger.Gender = this.formateGender(singlePassenger.gender);
            passenger.PassportNo = singlePassenger.passportNumber;
            passenger.PassportExpiry = this.formateDate(singlePassenger.passportED);
            passenger.Fare = this.fareQuoteResponse.Response.Results.Fare;
            passenger.AddressLine1 = userDetails['address1'] ? userDetails['address1'] : _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].address.AddressLine1;
            passenger.AddressLine2 = userDetails['address2'] ? userDetails['address2'] : _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].address.AddressLine2;
            passenger.City = userDetails['city'] ? userDetails['city'] : _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].address.City;
            passenger.CountryCode = userDetails['city'] ? userDetails['city'] : _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].address.CountryCode;
            passenger.CountryName = userDetails['contry_code'] ? userDetails['contry_code'] : _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].address.CountryName;
            passenger.Nationality = userDetails['nationality'] ? userDetails['nationality'] : _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].address.Nationality;
            passenger.ContactNo = this.contactNumber;
            passenger.Email = this.email;
            passenger.IsLeadPax = v == 0;
            passenger.FFAirlineCode = null;
            passenger.FFNumber = "";
            passenger.GSTCompanyAddress = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].address.GSTCompanyAddress;
            passenger.GSTCompanyContactNumber = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].address.GSTCompanyContactNumber;
            passenger.GSTCompanyName = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].address.GSTCompanyName;
            passenger.GSTNumber = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].address.GSTNumber;
            passenger.GSTCompanyEmail = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].address.GSTCompanyEmail;
            totalPassengers.push(passenger);
        }
        return totalPassengers;
    };
    flightBookComponent.prototype.formateGender = function (gender) {
        if (gender) {
            if (gender == "Male") {
                return 1;
            }
            else if (gender == "Female") {
                return 2;
            }
            else {
                return 3;
            }
        }
    };
    flightBookComponent.prototype.formateDate = function (model) {
        if (model) {
            return model.year + '-' + this.roungingDate(model.month) + '-' + this.roungingDate(model.day) + 'T00:00:00';
        }
        return "";
    };
    flightBookComponent.prototype.stringfyDate = function (model) {
        if (model) {
            return model.replace("T", " ");
        }
        return "";
    };
    flightBookComponent.prototype.roungingDate = function (val) {
        if (String(val).length == 1) {
            val = '0' + String(val);
        }
        return val;
    };
    flightBookComponent.prototype.convertDurationHRS = function (val) {
        if (val) {
            // var hours = Math.floor(val / 60)
            val = Math.floor(parseInt(val) / 60) + " hrs";
        }
        return val;
    };
    flightBookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-flightBookComponent',
            template: __webpack_require__(/*! ./flightBook.component.html */ "./src/app/layout/flightBook/flightBook.component.html"),
            styles: [__webpack_require__(/*! ./flightBook.component.scss */ "./src/app/layout/flightBook/flightBook.component.scss"), __webpack_require__(/*! ../searchResult/searchResult.component.scss */ "./src/app/layout/searchResult/searchResult.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            providers: [_shared_services_fare_quote_service__WEBPACK_IMPORTED_MODULE_3__["FareQuoteService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _shared_services_fare_quote_service__WEBPACK_IMPORTED_MODULE_3__["FareQuoteService"]])
    ], flightBookComponent);
    return flightBookComponent;
}());



/***/ }),

/***/ "./src/app/layout/home/home-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/home/home-routing.module.ts ***!
  \****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _flightBook_flightBook_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flightBook/flightBook.component */ "./src/app/layout/flightBook/flightBook.component.ts");
/* harmony import */ var _searchResult_searchResult_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../searchResult/searchResult.component */ "./src/app/layout/searchResult/searchResult.component.ts");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bookings/bookings.component */ "./src/app/layout/bookings/bookings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '', children: [
            { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
            { path: 'search-result', component: _searchResult_searchResult_component__WEBPACK_IMPORTED_MODULE_4__["searchResultComponent"] },
            { path: 'book/:ResultIndex/:TraceId/:audultcount/:childrencount/:infrantscount/:journeyclass', component: _flightBook_flightBook_component__WEBPACK_IMPORTED_MODULE_3__["flightBookComponent"] },
            { path: 'bookings', component: _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_5__["bookingsComponent"] }
        ],
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"min-height:550px\" [@routerTransition]>\r\n    <div *ngIf=\"!showResult\">\r\n        <div class=\"page-header\">\r\n            <h1><i class=\"fa fa-plane\" aria-hidden=\"true\"></i>Flights</h1>\r\n            <hr>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-12 card-booking\">\r\n                <div class=\"card text-white bg-primary mb-3\">\r\n                    <div class=\"card-header\">\r\n                        <ul class=\"nav nav-tabs width-100\">\r\n                            <li class=\"active width-6 border-menu\">\r\n                                <i class=\"fa fa-plane\" aria-hidden=\"true\"></i><br>\r\n                                <a>Flights</a></li>\r\n                            <li class=\"width-6 border-menu\"><i class=\"\tfa fa-hotel\" aria-hidden=\"true\"></i><br><a>Hotels</a></li>\r\n                            <li class=\"width-6 border-menu\"><i class=\"fa fa-car\" aria-hidden=\"true\"></i><br><a>Cars</a></li>\r\n                            <li class=\"width-6 border-menu\"><i class=\"fa fa-bus\" aria-hidden=\"true\"></i><br><a>Bus</a></li>\r\n                            <li class=\"width-6 border-menu\"><i class=\"fa fa-train\" aria-hidden=\"true\"></i><br><a>Trains</a></li>\r\n                            <li class=\"width-6 \"><i class=\"fa fa-film\" aria-hidden=\"true\"></i><br><a>Movies</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <div class=\"card-body card-body-cust\">\r\n                        <div class=\"row\">\r\n                            <h1 class=\"card-title\">Book Domestic & International Flight</h1>\r\n                            <div class=\"col-sm-12 padding-left-0\">\r\n\r\n                                <mat-radio-group [(ngModel)]=\"trip\" (change)=\"tripChange()\">\r\n                                     <mat-radio-button [value]=\"1\">One Way</mat-radio-button>&nbsp;\r\n                                    <mat-radio-button [value]=\"2\">Round Trip</mat-radio-button>&nbsp;                                   \r\n                                    <mat-radio-button [value]=\"3\">Multi City</mat-radio-button>\r\n                                </mat-radio-group>\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\" *ngIf=\"trip!=3\">\r\n                            <div class=\"col-sm-6 padding-left-0\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"lbl-from\">From</label>\r\n                                    <app-autofill-flight [id]=\"'from'\" (change)=\"fromStateChange($event)\"></app-autofill-flight>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6 padding-left-0\">\r\n                                <div class=\"form-group\">\r\n                                    <label class=\"lbl-from\">To</label>\r\n                                    <app-autofill-flight [id]=\"'to'\" (change)=\"toStateChange($event)\"></app-autofill-flight>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"trip==3\">\r\n                            <div class=\"row\" *ngFor=\"let mul of multicityTrip;let index=index;let last=last\">\r\n                                <div class=\"col-sm-4 padding-left-0\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"lbl-from\">From</label>\r\n                                        <app-autofill-flight [id]=\"'from'+index\"  (change)=\"fromStateMulticastChange($event,index)\"></app-autofill-flight>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-4 padding-left-0\">\r\n                                    <div class=\"form-group\">\r\n                                        <label class=\"lbl-from\">To</label>\r\n                                        <app-autofill-flight [id]=\"'to'+index\" (change)=\"toStateMulticastChange($event,index)\"></app-autofill-flight>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-3 padding-left-0\">\r\n                                    <label class=\"lbl-from\">Depart</label><br>\r\n                                    <div class=\"input-group\">\r\n                                        <input class=\"form-control\" placeholder=\"Departure Date\" name=\"dp\" [(ngModel)]=\"mul.modelDept\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                        <button class=\"btn btn-outline-secondary btn-calender\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i> </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-1 padding-left-0\">\r\n                                    <i *ngIf=\"last&&multicityTrip.length>2\" class=\"fa fa-trash remove-fight cursor-pointer\" (click)=\"removeAnotherFlight(index)\"></i>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"trip==3&&multicityTrip.length<6\" class=\"margin-bottom-20\">\r\n                            <div class=\"row\"> \r\n                                <button class=\"btn btn-info-add\" (click)=\"addAnotherFlight()\" > <i class=\"fa fa-plus\"></i> Add another flight ({{multicityTrip.length}}/6)</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6 padding-left-0\">\r\n                                <div class=\"col-sm-6 float-left padding-left-0\">\r\n\r\n                                    <label class=\"lbl-from\">Travellers</label><br>\r\n                                    <div ngbDropdown class=\"d-inline-block width-100\">\r\n                                        <button class=\"btn btn-default width-100 btn-drp\" id=\"dropdownBasic1\" ngbDropdownToggle>{{travellerCount}} Traveller(s)</button>\r\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"width-100\">\r\n\r\n                                            <div class=\"numberinc\">\r\n                                                <label>Adults <span>(12+ yrs)</span></label>\r\n                                                <div>\r\n                                                    <button class=\"minus\" (click)=AudultMClick($event)>−</button>\r\n                                                    <input type=\"text\" (blur)=\"onBlureve()\" minlength=\"1\" maxlength=\"1\" (keypress)=\"restrictNumeric($event)\" [(ngModel)]=\"audultcount\"\r\n                                                        class=\"numeric\" (click)=AudultNClick($event)>\r\n                                                    <button class=\"plus\" (click)=AudultPClick($event)>+</button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"numberinc\">\r\n                                                <label>Children <span>(2-12 yrs)</span></label>\r\n                                                <div>\r\n                                                    <button class=\"minus\" (click)=ChildrenMClick($event)>−</button>\r\n                                                    <input type=\"text\" (blur)=\"onBlureve()\" minlength=\"1\" maxlength=\"1\" (keypress)=\"restrictNumeric($event)\" [(ngModel)]=\"childrencount\"\r\n                                                        class=\"numeric\" (click)=ChildrenNClick($event)>\r\n                                                    <button class=\"plus\" (click)=ChildrenPClick($event)>+</button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"numberinc\">\r\n                                                <label>Infant(s) <span>(below 2 yrs)</span></label>\r\n                                                <div>\r\n                                                    <button class=\"minus\" (click)=InfantMClick($event)>−</button>\r\n                                                    <input type=\"text\" (blur)=\"onBlureve()\" minlength=\"1\" maxlength=\"1\" (keypress)=\"restrictNumeric($event)\" [(ngModel)]=\"infrantscount\"\r\n                                                        class=\"numeric\" (click)=InfantNClick($event)>\r\n                                                    <button class=\"plus\" (click)=InfantPClick($event)>+</button>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6 float-left padding-left-0\">\r\n\r\n                                    <label class=\"lbl-from\">Class</label><br>\r\n                                    <div ngbDropdown class=\"d-inline-block width-100\">\r\n                                        <button class=\"btn btn-default width-100 btn-drp\" id=\"dropdownBasic1\" ngbDropdownToggle>{{journeyType}}</button>\r\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"width-100\">\r\n                                            <button class=\"dropdown-item\" (click)=\"journeyType='All';classSelect(1)\">All</button>\r\n                                            <button class=\"dropdown-item\" (click)=\"journeyType='Economy';classSelect(2)\">Economy</button>\r\n                                            <button class=\"dropdown-item\" (click)=\"journeyType='Premium Economy';classSelect(3)\">Premium Economy</button>\r\n                                            <button class=\"dropdown-item\" (click)=\"journeyType='Business';classSelect(4)\">Business</button>\r\n                                            <button class=\"dropdown-item\" (click)=\"journeyType='Premium Business';classSelect(5)\">Premium Business</button>\r\n                                            <button class=\"dropdown-item\" (click)=\"journeyType='First';classSelect(6)\">First</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-sm-6 padding-left-0\" *ngIf=\"trip!==3\">\r\n                                <div class=\"col-sm-6 float-left padding-left-0\">\r\n                                    <label class=\"lbl-from\">Depart</label><br>\r\n                                    <div class=\"input-group\">\r\n                                        <input class=\"form-control\" placeholder=\"Departure Date\" name=\"dp\" [(ngModel)]=\"modelDept\" ngbDatepicker #d=\"ngbDatepicker\">\r\n                                        <button class=\"btn btn-outline-secondary btn-calender\" (click)=\"d.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i> </button>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-sm-6 float-left padding-left-0\" *ngIf=\"trip===2\">\r\n                                    <label class=\"lbl-from\">Return</label><br>\r\n\r\n                                    <div class=\"input-group\">\r\n                                        <input class=\"form-control\" placeholder=\"Return Date\" name=\"dp1\" [(ngModel)]=\"modelReturn\" ngbDatepicker #d1=\"ngbDatepicker\">\r\n\r\n                                        <button class=\"btn btn-outline-secondary btn-calender\" (click)=\"d1.toggle()\" type=\"button\"><i class=\"fa fa-calendar\"></i></button>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-12\">\r\n                                <button type=\"button\" class=\"btn btn-info float-right btn-search\" (click)=\"searchflight()\">Go <i class=\"fa fa-hand-o-right\"></i> </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n   \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/layout/home/home.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/home/home.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".lbl-from {\n  padding-left: 0px; }\n\n.card-booking {\n  padding-left: 10%;\n  padding-right: 10%; }\n\n.page-header {\n  color: #007bff; }\n\n.page-header i {\n  color: #f26722;\n  padding-right: 5px; }\n\n.padding-left-0 {\n  padding-left: 0px; }\n\n.card {\n  border-color: #fff; }\n\n.card-header {\n  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;\n  background-color: #f5f6f8;\n  border-color: #f5f6f8;\n  padding: 0px;\n  height: 68px;\n  border-bottom: 1px solid #1081e1; }\n\n.nav-tabs {\n  border-bottom: none;\n  height: 100%; }\n\n.nav-tabs li {\n  text-align: center; }\n\n.nav-tabs li i {\n  margin-left: 3px;\n  font-size: 24px;\n  margin-top: 10px; }\n\n.nav-tabs li a {\n  font-weight: bold; }\n\n.nav-tabs .active {\n  background-color: #ef0303; }\n\n.nav-tabs li a {\n  color: #a5acb9; }\n\n.nav-tabs li i {\n  color: #a5acb9; }\n\n.nav-tabs .active a {\n  color: #fff; }\n\n.nav-tabs .active i {\n  color: #fff; }\n\n.width-100 {\n  width: 100%; }\n\n.width-6 {\n  width: 16.6667%; }\n\n.card-body {\n  background-color: #1081e1; }\n\n.float-left {\n  float: left; }\n\n.float-right {\n  float: right; }\n\n.btn-search {\n  background-color: #ef0303;\n  color: #fff;\n  margin-top: 15px;\n  margin-left: -12px; }\n\n.btn-search:hover {\n  background-color: #ef0303;\n  color: #fff; }\n\n.card-body-cust {\n  padding: 13px 13px 20px 35px; }\n\n.btn-drp {\n  background-color: #fff;\n  text-align: left; }\n\n.btn-drp::after {\n  float: right;\n  margin-top: 10px; }\n\n.btn-calender {\n  background-color: #fff; }\n\n.btn-calender:hover {\n  color: #000fff !important; }\n\n.border-menu {\n  border-right: 1px solid #a1a6af; }\n\n.numberinc {\n  float: left;\n  width: 100%;\n  padding: 7px; }\n\n.numberinc .minus {\n  float: left;\n  background-color: #dedede;\n  border: 1px solid #c2c2c2;\n  outline: none;\n  color: #4a4a4a;\n  padding: 0 10px;\n  font-size: 15px;\n  font-weight: bold;\n  cursor: pointer;\n  width: 30px;\n  height: 25px; }\n\n.numberinc .numeric {\n  border: 1px solid #c2c2c2;\n  border-left-width: 0;\n  border-right-width: 0;\n  outline: none;\n  font-size: 15px;\n  padding: 5px;\n  text-align: center;\n  width: 30px;\n  float: left;\n  height: 25px; }\n\n.numberinc .plus {\n  float: left;\n  background-color: #dedede;\n  border: 1px solid #c2c2c2;\n  outline: none;\n  color: #4a4a4a;\n  padding: 0 10px;\n  font-size: 15px;\n  font-weight: bold;\n  cursor: pointer;\n  width: 30px;\n  height: 25px; }\n\n.numberinc label {\n  float: left;\n  font-size: 12px;\n  font-weight: bold; }\n\n.numberinc label > span {\n  color: #f26722; }\n\n.numberinc div {\n  float: right; }\n\n.remove-fight {\n  font-size: 20px;\n  margin-top: 27px; }\n\n.margin-bottom-20 {\n  margin-bottom: 20px; }\n\n.btn-info-add {\n  color: #fff;\n  background-color: #fc9602;\n  border-color: #fc9602; }\n\n.cursor-pointer {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/layout/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
        this.state = "";
        this.stateopen = false;
        this.audultcount = '1';
        this.childrencount = '0';
        this.infrantscount = '0';
        this.travellerCount = 1;
        this.trip = 1;
        this.journeyType = 'All';
        this.journeyClass = 1;
        this.states = [];
        this.fromState = "";
        this.toState = "";
        this.showResult = false;
        this.multicityTrip = [
            { fromState: "", toState: "", modelDept: "" },
            { fromState: "", toState: "", modelDept: "" },
            { fromState: "", toState: "", modelDept: "" }
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
        //this.openPaymentGateWay();
    };
    HomeComponent.prototype.tripChange = function () {
        if (this.trip == 3) {
            this.multicityTrip = [
                { fromState: "", toState: "", modelDept: "" },
                { fromState: "", toState: "", modelDept: "" },
                { fromState: "", toState: "", modelDept: "" }
            ];
        }
    };
    HomeComponent.prototype.fromStateMulticastChange = function (state, index) {
        this.multicityTrip[index].fromState = state;
    };
    HomeComponent.prototype.toStateMulticastChange = function (state, index) {
        this.multicityTrip[index].toState = state;
    };
    HomeComponent.prototype.addAnotherFlight = function () {
        this.multicityTrip.push({ fromState: "", toState: "", modelDept: "" });
    };
    HomeComponent.prototype.removeAnotherFlight = function (index) {
        this.multicityTrip.splice(index, 1);
    };
    HomeComponent.prototype.ondocClick = function (event) {
        var closeSelection = true;
        if (event.target) {
            if (event.target.className) {
                if (event.target.className.indexOf('cust-autofill-input-unique') > -1) {
                    closeSelection = false;
                }
            }
        }
        if (closeSelection) {
            this.stateopen = false;
        }
        else {
            this.onStateFocus();
        }
    };
    HomeComponent.prototype.classSelect = function (type) {
        this.journeyClass = type;
    };
    HomeComponent.prototype.stateSelected = function (state) {
        this.state = state;
        this.stateopen = false;
    };
    HomeComponent.prototype.onStateFocus = function () {
        this.stateopen = false;
        if (this.state.length > 2) {
            this.stateopen = true;
        }
    };
    HomeComponent.prototype.openDialog = function () {
    };
    HomeComponent.prototype.AudultMClick = function (eve) {
        var val = parseInt(this.audultcount) - 1;
        val = val < 1 ? 1 : val;
        this.audultcount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    };
    HomeComponent.prototype.AudultNClick = function (eve) {
        eve.stopPropagation();
    };
    HomeComponent.prototype.AudultPClick = function (eve) {
        var val = parseInt(this.audultcount) + 1;
        val = val > 9 ? 9 : val;
        this.audultcount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    };
    HomeComponent.prototype.ChildrenMClick = function (eve) {
        var val = parseInt(this.childrencount) - 1;
        val = val < 0 ? 0 : val;
        this.childrencount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    };
    HomeComponent.prototype.ChildrenNClick = function (eve) {
        eve.stopPropagation();
    };
    HomeComponent.prototype.ChildrenPClick = function (eve) {
        var val = parseInt(this.childrencount) + 1;
        val = val > 9 ? 9 : val;
        this.childrencount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    };
    HomeComponent.prototype.InfantMClick = function (eve) {
        var val = parseInt(this.infrantscount) - 1;
        val = val < 0 ? 0 : val;
        this.infrantscount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    };
    HomeComponent.prototype.InfantNClick = function (eve) {
        eve.stopPropagation();
    };
    HomeComponent.prototype.InfantPClick = function (eve) {
        var val = parseInt(this.infrantscount) + 1;
        val = val > 9 ? 9 : val;
        this.infrantscount = String(val);
        this.calcTotalTravellers();
        eve.stopPropagation();
    };
    HomeComponent.prototype.onBlureve = function () {
        debugger;
        if (this.audultcount == "") {
            this.audultcount = "1";
        }
        if (this.childrencount == "") {
            this.childrencount = "0";
        }
        if (this.infrantscount == "") {
            this.infrantscount = "0";
        }
        this.calcTotalTravellers();
    };
    HomeComponent.prototype.calcTotalTravellers = function () {
        this.travellerCount = parseInt(this.audultcount) + parseInt(this.childrencount) + parseInt(this.infrantscount);
    };
    HomeComponent.prototype.restrictNumeric = function (e) {
        var input;
        if (e.metaKey || e.ctrlKey) {
            return true;
        }
        if (e.which === 32) {
            return false;
        }
        if (e.which === 0) {
            return true;
        }
        if (e.which < 33) {
            return true;
        }
        input = String.fromCharCode(e.which);
        return !!/[\d\s]/.test(input);
    };
    HomeComponent.prototype.fromStateChange = function (state) {
        this.fromState = state;
    };
    HomeComponent.prototype.toStateChange = function (state) {
        this.toState = state;
    };
    HomeComponent.prototype.formateDate = function (model) {
        if (model) {
            return model.year + '-' + this.roungingDate(model.month) + '-' + this.roungingDate(model.day) + 'T00:00:00';
        }
        return "";
    };
    HomeComponent.prototype.roungingDate = function (val) {
        if (String(val).length == 1) {
            val = '0' + String(val);
        }
        return val;
    };
    HomeComponent.prototype.gotoSearch = function () {
        this.showResult = false;
    };
    HomeComponent.prototype.searchflight = function () {
        for (var v = 0; v < this.multicityTrip.length; v++) {
            this.multicityTrip[v].modelDept = this.formateDate(this.multicityTrip[v].modelDept);
        }
        var queryParams = {
            audultcount: this.audultcount,
            childrencount: this.childrencount,
            infrantscount: this.infrantscount,
            travellerCount: this.travellerCount,
            trip: this.trip,
            fromState: this.fromState,
            toState: this.toState,
            journeyClass: this.journeyClass,
            modelDept: this.formateDate(this.modelDept),
            modelReturn: this.formateDate(this.modelReturn),
            multicityTrip: JSON.stringify(this.multicityTrip)
        };
        this.router.navigate(['home/search-result'], { queryParams: queryParams });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/layout/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/layout/home/home.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()],
            host: {
                '(document:click)': 'ondocClick($event)',
            },
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/home/home.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/home/home.module.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/layout/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/layout/home/home.component.ts");
/* harmony import */ var _autofillFlight_autofillFlight_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../autofillFlight/autofillFlight.component */ "./src/app/layout/autofillFlight/autofillFlight.component.ts");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _searchResult_searchResult_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../searchResult/searchResult.component */ "./src/app/layout/searchResult/searchResult.component.ts");
/* harmony import */ var _flightBook_flightBook_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../flightBook/flightBook.component */ "./src/app/layout/flightBook/flightBook.component.ts");
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../bookings/bookings.component */ "./src/app/layout/bookings/bookings.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var HomeModule = /** @class */ (function () {
    function HomeModule() {
        this.options = [
            'One',
            'Two',
            'Three'
        ];
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"]],
            exports: [_angular_material_radio__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _autofillFlight_autofillFlight_component__WEBPACK_IMPORTED_MODULE_4__["autofillFlightComponent"], _searchResult_searchResult_component__WEBPACK_IMPORTED_MODULE_8__["searchResultComponent"], _flightBook_flightBook_component__WEBPACK_IMPORTED_MODULE_9__["flightBookComponent"], _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_10__["bookingsComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/layout/searchResult/searchResult.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/layout/searchResult/searchResult.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-result\">\r\n    <button type=\"button\" class=\"btn btn-default pull-left\" (click)=\"gotoSearchClick()\"> <i class=\"fa fa-backward\" ></i>&nbsp;&nbsp;Back</button>\r\n    <button type=\"button\"  (click)=\"gotoRoundTrip()\" *ngIf=\"searchOutput&&bookRoundTrip&&searchOutput.length==2 && bookRoundTrip.length==2\"  class=\"btn btn-warning pull-right margin-right-20\">Book&nbsp;&nbsp;<i class=\"fa fa-forward\" ></i></button>\r\n</div>\r\n\r\n\r\n<div class=\"row card-cust\">\r\n    <div class=\"pull-left\" [ngClass]=\"{'col-sm-12':searchOutput.length==1,'col-sm-6':searchOutput.length==2}\" *ngFor=\"let output of searchOutput;let searchOutputIndex=index\">\r\n\r\n        <div class=\"card_book\" [ngClass]=\"{'flight-selected':searchOutput.length==2 && (bookRoundTrip[searchOutputIndex] && \r\n                          res.ResultIndex===bookRoundTrip[searchOutputIndex].ResultIndex)}\" *ngFor=\"let res of output\">\r\n            <div class=\"row\" [ngClass]=\"{'inner-flights-seperation':!segmentFirst}\" *ngFor=\"let segment of res.Segments;let segmentFirst=first;\">\r\n                <div class=\"div-img\">\r\n                    <div><img src=\"https://s3-us-west-2.amazonaws.com/paytm-travel/travel_db/flights/airlines+logo/SG.png\" role=\"presentation\"></div>\r\n                </div>\r\n\r\n                <div [ngClass]=\"{'flight-name':searchOutput.length==1,'flight-name-trip':searchOutput.length==2}\">\r\n                    <div class=\"flight-name-key \">{{segment[0].Airline.AirlineName}}</div>\r\n                    <div class=\"flight-name-value\">\r\n                        {{segment[0].Airline.AirlineCode}} - {{segment[0].Airline.FlightNumber}}\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"start-time text-align-center\">\r\n                    <div class=\"timing\">{{segment[0].Origin.DepTime | date:'dd/MM/yyyy'}}</div>\r\n                    <div class=\"timing\">{{segment[0].Origin.DepTime | date:'HH:mm'}}</div>\r\n                    <div class=\"place\"> {{segment[0].Origin.Airport.AirportCode}}</div>\r\n                </div>\r\n                <div class=\"duration text-align-center\" *ngIf=\"searchOutput.length==1\">\r\n                    <div class=\"opacity-1 duration-1\">{{convertDurationHRS(segment[0].Duration)}}</div>\r\n                    <div class=\"duration-icon\"><img src=\"https://paytm.com/travel/images/flights/srp_arrow.svg\" role=\"presentation\"></div>\r\n                    <div class=\"duration-1\">Non Stop</div>\r\n                </div>\r\n                <div class=\"start-time text-align-center\" *ngIf=\"searchOutput.length!==1\">\r\n                    <div class=\"timing\">{{segment[0].Duration}}</div>\r\n                    <div class=\"place\">Non Stop</div>\r\n                </div>\r\n                <div class=\"arrival-1 text-align-center\">\r\n                    <div class=\"timing\">{{segment[0].Destination.ArrTime | date:'dd/MM/yyyy'}}</div>\r\n                    <div class=\"timing\">{{segment[0].Destination.ArrTime | date:'HH:mm'}}</div>\r\n                    <div class=\"place\"> {{segment[0].Destination.Airport.AirportCode}}</div>\r\n                </div>\r\n\r\n                <div class=\"price-1 text-align-center\" *ngIf=\"segmentFirst\">\r\n                    <div class=\"price-amount\">\r\n                        <div class=\"display-inline-block\"><img src=\"//drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/c73cc5fb.svg\" role=\"presentation\"></div>\r\n                        {{res.Fare.PublishedFare}}\r\n\r\n                    </div>\r\n                    <div class=\"place\">{{res.IsRefundable && 'Refundable' || 'Non-Refundable'}}</div>\r\n                </div>\r\n                <div class=\"price-1 text-align-center\" *ngIf=\"segmentFirst\">\r\n                    <div>\r\n                        <button *ngIf=\"searchOutput.length==1\" class=\"btn btn-primary\" (click)=\"book(res)\">Book &nbsp;&nbsp;<i class=\"fa fa-forward\"  ></i></button>\r\n                        <button *ngIf=\"searchOutput.length==2 && !(bookRoundTrip[searchOutputIndex] && \r\n                          res.ResultIndex===bookRoundTrip[searchOutputIndex].ResultIndex)\" class=\"btn btn-primary\" (click)=\"bookpush(res,searchOutputIndex)\">\r\n                                Select\r\n                         </button>\r\n                        <button *ngIf=\"searchOutput.length==2 && (bookRoundTrip[searchOutputIndex] && \r\n                          res.ResultIndex===bookRoundTrip[searchOutputIndex].ResultIndex)\" class=\"btn btn-success\" (click)=\"bookpush(res,searchOutputIndex)\">\r\n                            <i  class=\"fa fa-check-circle-o\"></i>\r\n                                Selected\r\n                         </button>\r\n                    </div>\r\n                    <a>Flight Details</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/searchResult/searchResult.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/searchResult/searchResult.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card_book {\n  padding: 30px 20px;\n  border: 1px solid #e3e6e6;\n  margin: 0;\n  width: 100%;\n  background: #fff;\n  margin-top: 10px;\n  -webkit-border-radius: 5px;\n  -moz-border-radius: 5px;\n  background: #fff;\n  transition: box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);\n  border: 1px solid rgba(0, 0, 0, 0.125); }\n\n.card-cust {\n  margin: 0% 5% 0% 5%; }\n\n.card_book:hover {\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.24); }\n\n.div-img {\n  flex-basis: 10%;\n  max-width: 10%; }\n\n.div-img > div {\n  text-align: center; }\n\n.div-img > div > img {\n  height: 45px;\n  width: 45px; }\n\n.flight-name {\n  flex-basis: 18%;\n  max-width: 18%; }\n\n.flight-name-key {\n  font-size: 18px;\n  font-size: 1.8rem;\n  color: #4a4a4a; }\n\n.flight-name-value {\n  opacity: .4;\n  font-size: 12px;\n  font-weight: 600;\n  color: #4d4d4d; }\n\n.text-align-center {\n  text-align: center; }\n\n.start-time {\n  margin-right: 10px; }\n\n.start-time, .end-time {\n  flex-basis: 10%;\n  max-width: 10%; }\n\n.timing {\n  color: #4a4a4a; }\n\n.place {\n  opacity: .4;\n  font-size: 12px;\n  font-weight: 600;\n  color: #4d4d4d; }\n\n.duration {\n  max-width: 17%;\n  flex-basis: 17%; }\n\n.opacity-1 {\n  opacity: 1; }\n\n.duration-1 {\n  opacity: .4;\n  font-size: 11px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #4d4d4d; }\n\n.duration-icon {\n  height: 10px;\n  width: 100%; }\n\n.arrival-1 {\n  flex-basis: 8%;\n  max-width: 8%; }\n\n.price-1 {\n  flex-basis: 15%;\n  max-width: 15%; }\n\n.price-amount {\n  font-size: 18px;\n  font-weight: 700;\n  color: #4a4a4a; }\n\n.display-inline-block {\n  display: inline-block; }\n\n.pull-left {\n  float: left; }\n\n.flight-name-trip {\n  max-width: 30%; }\n\n.inner-flights-seperation {\n  padding-top: 15px; }\n\n.flight-selected {\n  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.24); }\n\n.margin-right-20 {\n  margin-right: 20px; }\n\n.header-result {\n  position: fixed;\n  width: 100%;\n  z-index: 999999; }\n"

/***/ }),

/***/ "./src/app/layout/searchResult/searchResult.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/searchResult/searchResult.component.ts ***!
  \***************************************************************/
/*! exports provided: searchResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchResultComponent", function() { return searchResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_models_search_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/models/search.model */ "./src/app/shared/models/search.model.ts");
/* harmony import */ var _shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var searchResultComponent = /** @class */ (function () {
    function searchResultComponent(searchService, router, route) {
        this.searchService = searchService;
        this.router = router;
        this.route = route;
        this.audultcount = '1';
        this.childrencount = '0';
        this.infrantscount = '0';
        this.travellerCount = 1;
        this.trip = 1;
        this.fromState = "";
        this.toState = "";
        this.journeyClass = 1;
        this.bookRoundTrip = [];
        this.multicityTrip = [
            { fromState: "", toState: "", modelDept: "" },
            { fromState: "", toState: "", modelDept: "" },
            { fromState: "", toState: "", modelDept: "" }
        ];
        this.searchOutput = [];
        this.gotoSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    searchResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            debugger;
            _this.audultcount = params.audultcount;
            _this.childrencount = params.childrencount;
            _this.infrantscount = params.infrantscount;
            _this.travellerCount = parseInt(params.travellerCount);
            _this.trip = parseInt(params.trip);
            _this.fromState = params.fromState;
            _this.toState = params.toState;
            _this.journeyClass = parseInt(params.journeyClass);
            _this.modelDept = params.modelDept;
            _this.modelReturn = params.modelReturn;
            _this.multicityTrip = JSON.parse(params.multicityTrip);
            _this.searchflight();
        });
    };
    searchResultComponent.prototype.gotoSearchClick = function () {
        this.router.navigate(['home']);
    };
    searchResultComponent.prototype.searchflight = function () {
        var _this = this;
        var searchInputModel = new _shared_models_search_model__WEBPACK_IMPORTED_MODULE_1__["SearchInputModel"]();
        searchInputModel.TokenId = localStorage.getItem('TokenId');
        searchInputModel.EndUserIp = localStorage.getItem('ClientIp');
        searchInputModel.AdultCount = this.audultcount;
        searchInputModel.ChildCount = this.childrencount;
        searchInputModel.InfantCount = this.infrantscount;
        searchInputModel.DirectFlight = "false";
        searchInputModel.OneStopFlight = "false";
        searchInputModel.JourneyType = String(this.trip);
        searchInputModel.PreferredAirlines = null;
        if (this.trip != 3) {
            var segmentsOneWay = new _shared_models_search_model__WEBPACK_IMPORTED_MODULE_1__["Segments"]();
            segmentsOneWay.Origin = this.fromState;
            segmentsOneWay.Destination = this.toState;
            segmentsOneWay.FlightCabinClass = String(this.journeyClass);
            segmentsOneWay.PreferredDepartureTime = this.modelDept;
            segmentsOneWay.PreferredArrivalTime = this.modelDept; //this.formateDate(this.modelReturn) ? this.formateDate(this.modelReturn) : this.formateDate(this.modelDept);
            searchInputModel.Segments = [segmentsOneWay];
            if (this.trip == 2) {
                var segmentsReturn = new _shared_models_search_model__WEBPACK_IMPORTED_MODULE_1__["Segments"]();
                segmentsReturn.Origin = this.toState;
                segmentsReturn.Destination = this.fromState;
                segmentsReturn.FlightCabinClass = String(this.journeyClass);
                segmentsReturn.PreferredDepartureTime = this.modelReturn;
                segmentsReturn.PreferredArrivalTime = this.modelReturn;
                searchInputModel.Segments = [segmentsOneWay, segmentsReturn];
            }
        }
        else {
            searchInputModel.Segments = [];
            for (var v = 0; v < this.multicityTrip.length; v++) {
                var segmentsMulti = new _shared_models_search_model__WEBPACK_IMPORTED_MODULE_1__["Segments"]();
                segmentsMulti.Origin = this.multicityTrip[v].toState;
                segmentsMulti.Destination = this.multicityTrip[v].fromState;
                segmentsMulti.FlightCabinClass = String(this.journeyClass);
                segmentsMulti.PreferredDepartureTime = this.multicityTrip[v].modelDept;
                segmentsMulti.PreferredArrivalTime = this.multicityTrip[v].modelDept;
                searchInputModel.Segments.push(segmentsMulti);
            }
        }
        this.searchService.search(searchInputModel).subscribe(function (x) {
            _this.searchOutputModel = x;
            _this.searchOutput = _this.searchOutputModel.Response.Results;
        });
    };
    searchResultComponent.prototype.bookpush = function (obj, index) {
        this.bookRoundTrip[index] = obj;
        if (this.bookRoundTrip.length == 2) {
        }
    };
    searchResultComponent.prototype.book = function (obj) {
        // BaseFare
        this.router.navigate(['home/book', obj.ResultIndex,
            this.searchOutputModel.Response.TraceId, this.audultcount, this.childrencount, this.infrantscount, this.journeyClass]);
    };
    searchResultComponent.prototype.gotoRoundTrip = function () {
        this.router.navigate(['home/book', this.bookRoundTrip[0].ResultIndex + "-" + this.bookRoundTrip[1].ResultIndex,
            this.searchOutputModel.Response.TraceId, this.audultcount, this.childrencount, this.infrantscount, this.journeyClass]);
    };
    searchResultComponent.prototype.convertDurationHRS = function (val) {
        if (val) {
            // var hours = Math.floor(val / 60)
            val = Math.floor(parseInt(val) / 60) + " hrs";
        }
        return val;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], searchResultComponent.prototype, "gotoSearch", void 0);
    searchResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-searchResultComponent',
            template: __webpack_require__(/*! ./searchResult.component.html */ "./src/app/layout/searchResult/searchResult.component.html"),
            styles: [__webpack_require__(/*! ./searchResult.component.scss */ "./src/app/layout/searchResult/searchResult.component.scss")],
            providers: [_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"]]
        }),
        __metadata("design:paramtypes", [_shared_services_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], searchResultComponent);
    return searchResultComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/book.model.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/models/book.model.ts ***!
  \*********************************************/
/*! exports provided: BookRequest, Passengers, Fare, KeyValue, Meal, Seat, BookResponse, ResponseAll, bookResp, FlightItinerary, FareAll, FareRules, ChargeBU, PassengersAll, SegmentsBook, Origin, Destination, Airport, Airline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookRequest", function() { return BookRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Passengers", function() { return Passengers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fare", function() { return Fare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValue", function() { return KeyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meal", function() { return Meal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seat", function() { return Seat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookResponse", function() { return BookResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponseAll", function() { return ResponseAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookResp", function() { return bookResp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightItinerary", function() { return FlightItinerary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareAll", function() { return FareAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareRules", function() { return FareRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeBU", function() { return ChargeBU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassengersAll", function() { return PassengersAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentsBook", function() { return SegmentsBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Origin", function() { return Origin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Destination", function() { return Destination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airport", function() { return Airport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airline", function() { return Airline; });

var BookRequest = /** @class */ (function () {
    function BookRequest() {
    }
    return BookRequest;
}());

var Passengers = /** @class */ (function () {
    function Passengers() {
    }
    return Passengers;
}());

var Fare = /** @class */ (function () {
    function Fare() {
    }
    return Fare;
}());

var KeyValue = /** @class */ (function () {
    function KeyValue() {
    }
    return KeyValue;
}());

var Meal = /** @class */ (function () {
    function Meal() {
    }
    return Meal;
}());

var Seat = /** @class */ (function () {
    function Seat() {
    }
    return Seat;
}());

var BookResponse = /** @class */ (function () {
    function BookResponse() {
    }
    return BookResponse;
}());

var ResponseAll = /** @class */ (function () {
    function ResponseAll() {
    }
    return ResponseAll;
}());

var bookResp = /** @class */ (function () {
    function bookResp() {
    }
    return bookResp;
}());

var FlightItinerary = /** @class */ (function () {
    function FlightItinerary() {
    }
    return FlightItinerary;
}());

var FareAll = /** @class */ (function () {
    function FareAll() {
    }
    return FareAll;
}());

var FareRules = /** @class */ (function () {
    function FareRules() {
    }
    return FareRules;
}());

var ChargeBU = /** @class */ (function () {
    function ChargeBU() {
    }
    return ChargeBU;
}());

var PassengersAll = /** @class */ (function () {
    function PassengersAll() {
    }
    return PassengersAll;
}());

var SegmentsBook = /** @class */ (function () {
    function SegmentsBook() {
    }
    return SegmentsBook;
}());

var Origin = /** @class */ (function () {
    function Origin() {
    }
    return Origin;
}());

var Destination = /** @class */ (function () {
    function Destination() {
    }
    return Destination;
}());

var Airport = /** @class */ (function () {
    function Airport() {
    }
    return Airport;
}());

var Airline = /** @class */ (function () {
    function Airline() {
    }
    return Airline;
}());



/***/ }),

/***/ "./src/app/shared/models/fare-quote.model.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/models/fare-quote.model.ts ***!
  \***************************************************/
/*! exports provided: FareQuoteRequest, FareQuoteResponse, Response, Results, FareRules, Fare, KeyValue, FareBreakdown, SingleSegment, Airline, Origin, Destination, Airport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareQuoteRequest", function() { return FareQuoteRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareQuoteResponse", function() { return FareQuoteResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Results", function() { return Results; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareRules", function() { return FareRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fare", function() { return Fare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValue", function() { return KeyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareBreakdown", function() { return FareBreakdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSegment", function() { return SingleSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airline", function() { return Airline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Origin", function() { return Origin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Destination", function() { return Destination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airport", function() { return Airport; });

var FareQuoteRequest = /** @class */ (function () {
    function FareQuoteRequest() {
    }
    return FareQuoteRequest;
}());

var FareQuoteResponse = /** @class */ (function () {
    function FareQuoteResponse() {
    }
    return FareQuoteResponse;
}());

var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());

var Results = /** @class */ (function () {
    function Results() {
    }
    return Results;
}());

var FareRules = /** @class */ (function () {
    function FareRules() {
    }
    return FareRules;
}());

var Fare = /** @class */ (function () {
    function Fare() {
    }
    return Fare;
}());

var KeyValue = /** @class */ (function () {
    function KeyValue() {
    }
    return KeyValue;
}());

var FareBreakdown = /** @class */ (function () {
    function FareBreakdown() {
    }
    return FareBreakdown;
}());

var SingleSegment = /** @class */ (function () {
    function SingleSegment() {
    }
    return SingleSegment;
}());

var Airline = /** @class */ (function () {
    function Airline() {
    }
    return Airline;
}());

var Origin = /** @class */ (function () {
    function Origin() {
    }
    return Origin;
}());

var Destination = /** @class */ (function () {
    function Destination() {
    }
    return Destination;
}());

var Airport = /** @class */ (function () {
    function Airport() {
    }
    return Airport;
}());



/***/ }),

/***/ "./src/app/shared/models/flight-ticket.model.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/models/flight-ticket.model.ts ***!
  \******************************************************/
/*! exports provided: FlightTicket, FilghtDetails, PassengerDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightTicket", function() { return FlightTicket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilghtDetails", function() { return FilghtDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PassengerDetails", function() { return PassengerDetails; });

var FlightTicket = /** @class */ (function () {
    function FlightTicket() {
    }
    return FlightTicket;
}());

var FilghtDetails = /** @class */ (function () {
    function FilghtDetails() {
    }
    return FilghtDetails;
}());

var PassengerDetails = /** @class */ (function () {
    function PassengerDetails() {
    }
    return PassengerDetails;
}());



/***/ }),

/***/ "./src/app/shared/models/search.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/models/search.model.ts ***!
  \***********************************************/
/*! exports provided: SearchInputModel, Segments, SearchOutputModel, Response, SearchResults, Results, Fare, KeyValue, FareBreakdown, SingleSegment, Airline, Origin, Destination, Airport, FareRules */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchInputModel", function() { return SearchInputModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Segments", function() { return Segments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchOutputModel", function() { return SearchOutputModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResults", function() { return SearchResults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Results", function() { return Results; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fare", function() { return Fare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyValue", function() { return KeyValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareBreakdown", function() { return FareBreakdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleSegment", function() { return SingleSegment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airline", function() { return Airline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Origin", function() { return Origin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Destination", function() { return Destination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Airport", function() { return Airport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FareRules", function() { return FareRules; });

var SearchInputModel = /** @class */ (function () {
    function SearchInputModel() {
    }
    return SearchInputModel;
}());

var Segments = /** @class */ (function () {
    function Segments() {
    }
    return Segments;
}());

var SearchOutputModel = /** @class */ (function () {
    function SearchOutputModel() {
    }
    return SearchOutputModel;
}());

var Response = /** @class */ (function () {
    function Response() {
    }
    return Response;
}());

var SearchResults = /** @class */ (function () {
    function SearchResults() {
    }
    return SearchResults;
}());

var Results = /** @class */ (function () {
    function Results() {
    }
    return Results;
}());

var Fare = /** @class */ (function () {
    function Fare() {
    }
    return Fare;
}());

var KeyValue = /** @class */ (function () {
    function KeyValue() {
    }
    return KeyValue;
}());

var FareBreakdown = /** @class */ (function () {
    function FareBreakdown() {
    }
    return FareBreakdown;
}());

var SingleSegment = /** @class */ (function () {
    function SingleSegment() {
    }
    return SingleSegment;
}());

var Airline = /** @class */ (function () {
    function Airline() {
    }
    return Airline;
}());

var Origin = /** @class */ (function () {
    function Origin() {
    }
    return Origin;
}());

var Destination = /** @class */ (function () {
    function Destination() {
    }
    return Destination;
}());

var Airport = /** @class */ (function () {
    function Airport() {
    }
    return Airport;
}());

var FareRules = /** @class */ (function () {
    function FareRules() {
    }
    return FareRules;
}());



/***/ }),

/***/ "./src/app/shared/services/airports.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/airports.service.ts ***!
  \*****************************************************/
/*! exports provided: AirportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirportService", function() { return AirportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AirportService = /** @class */ (function () {
    function AirportService(http) {
        this.http = http;
    }
    AirportService.prototype.getairports = function (val) {
        debugger;
        return this.http.get('/assets/static/airports.json').toPromise().then(function (x) {
            return x;
        });
    };
    AirportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AirportService);
    return AirportService;
}());



/***/ }),

/***/ "./src/app/shared/services/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.search = function (searchInputModel) {
        debugger;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serviceUrl + '/postSearchService', searchInputModel).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(function (x) { return x.empty(); });
        }));
    };
    SearchService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchService);
    return SearchService;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map
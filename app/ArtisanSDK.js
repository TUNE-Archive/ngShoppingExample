(function(window, document, undefined) {

  // Constant Values
  // IMPORTANT -- do not rename SDK_VERSION_NUMBER it is updated by the build script
  var SDK_VERSION_NUMBER = "2.0",
    PRODUCT_ID = "product-id",
    PRODUCT_DESCRIPTION = "description",
    PRODUCT_PRICE = "price",
    PRODUCT_QUANTITY = "quantity",
    PRODUCT_CURRENCY = "currency-code",
    PRODUCT_INFO = "productInfo",
    CATEGORY = "category",
    SUB_CATEGORY = "subCategory",
    SUB_SUB_CATEGORY = "subSubCategory";

  window.ArtisanSDK = {
    callbacksCount: 1,
    elementIdCounter: 1,
    callbacks: {},
    nativeSDKVersionNumber: "",

    /**
     * Track an event with Artisan with optional additional data.
     *
     * Use this to track an event with Artisan and also supply additional data.
     * For instance, if you have a product page that you want to check, but you
     * also want to be able to know which products are being viewed, you could
     * track an event named "Viewed Product" and pass the product id as
     * additional data.
     *
     * @param elementId
     *            The name of the element tracking, e.g. "my-test-button".
     *
     * @param parameters
     *            (optional) An Array representing additional parameters
     *            associated with the event. All keys and values must be
     *            strings, or they will be ignored.
     *
     * @param category
     *           (optional) A String that provides an extra classification
     *           for this event, e.g. "Womens" or "Mens".
     *
     * @param subCategory
     *           (optional) A String that provides a further classification
     *           for this event, e.g. "Sweaters" or "Jackets".
     *
     * @param subSubCategory
     *           (optional) A String that provides even further classification
     *           for this event, e.g. "Hoodies" or "Zip-ups".
     */

    trackEvent: function trackEvent(eventName, parameters, category, subCategory, subSubCategory) {
      if (parameters !== undefined && category !== undefined && subCategory !== undefined && subSubCategory !== undefined) {
        ArtisanSDK.call("trackEvent", [eventName, parameters, category, subCategory, subSubCategory]);
      } else if (parameters !== undefined && category !== undefined && subCategory !== undefined) {
        ArtisanSDK.call("trackEvent", [eventName, parameters, category, subCategory]);
      } else if (parameters !== undefined && category !== undefined) {
        ArtisanSDK.call("trackEvent", [eventName, parameters, category]);
      } else if (parameters !== undefined) {
        ArtisanSDK.call("trackEvent", [eventName, parameters]);
      } else {
        ArtisanSDK.call("trackEvent", [eventName]);
      }
    },

    trackWebViewElementEvent: function trackWebViewElementEvent(eventName, parameters, uniqueIdentifier, elementType) {
      if (elementType !== null) {
        parameters["elementType"] = elementType;
      }

      if (ArtisanSDK.documentName() !== null) {
        parameters["url"] = ArtisanSDK.documentName();
      }
      if (uniqueIdentifier !== null) {
        parameters["uniqueIdentifier"] = uniqueIdentifier;
      }
      console.log("tracking", eventName, uniqueIdentifier);
      ArtisanSDK.call("trackWebViewElementEvent", [eventName, parameters]);
    },

    trackPageView: function trackPageView() {
      ArtisanSDK.call("trackPageView", [ArtisanSDK.documentName()]);
    },

    /**
     * Specify a User ID for the current user.
     *
     * Use this method to connect the current user of this app with an ID in
     * your user management system. For example, if your user management system
     * has a user whose ID is 'ABC123456' and that user logs into this app, you
     * can use this method to pass that ID to Artisan as part of the
     * personalization profile for this user. You can then use this ID to trace
     * the data collected by Artisan directly to an existing user in your
     * system.
     *
     * @param userId
     *            The ID string to associate with the current user.
     */
    setSharedUserId: function setSharedUserId(userId) {
      ArtisanSDK.call("setSharedUserId", [userId]);
    },

    /**
     * Specify the age for the current user.
     *
     * This information is added to the personalization profile of the current
     * user for segmentation, targeting, and reporting purposes.
     *
     * @param age
     *            The age of the current user.
     */
    setUserAge: function setUserAge(age) {
      ArtisanSDK.call("setUserAge", [age]);
    },

    /**
     * Specify the gender of the current user.
     *
     * This information is added to the personalization profile of the current
     * user for segmentation, targeting, and reporting purposes.
     *
     * @param gender
     *            The gender of the current user. Possible values include male,
     *            female, and na.
     *
     */
    setGender: function setGender(gender) {
      ArtisanSDK.call("setGender", [gender]);
    },

    /**
     * Additional user profile variables
     *
     */
    setUserPrefix: function setUserPrefix(prefix) {
      ArtisanSDK.call("setUserPrefix", [prefix]);
    },

    setUserFirstName: function setUserFirstName(firstName) {
      ArtisanSDK.call("setUserFirstName", [firstName]);
    },

    setUserMiddleName: function setUserMiddleName(middleName) {
      ArtisanSDK.call("setUserMiddleName", [middleName]);
    },

    setUserLastName: function setUserLastName(lastName) {
      ArtisanSDK.call("setUserLastName", [lastName]);
    },

    setUserSuffix: function setUserSuffix(suffix) {
      ArtisanSDK.call("setUserSuffix", [suffix]);
    },

    setUserEmail: function setUserEmail(email) {
      ArtisanSDK.call("setUserEmail", [email]);
    },

    setUserPhoneNumber: function setUserPhoneNumber(phone) {
      ArtisanSDK.call("setUserPhoneNumber", [phone]);
    },

    setUserCompanyName: function setUserCompanyName(name) {
      ArtisanSDK.call("setUserCompanyName", [name]);
    },

    setFirstSeen: function setFirstSeen(firstSeen) {
      var dateVal;
      if (value instanceof Date) {
        dateVal = firstSeen.toISOString();
      } else {
        dateVal = firstSeen;
      }
      ArtisanSDK.call("setFirstSeen", [dateVal]);
    },

    setSignUpDate: function setSignUpDate(signUp) {
      var dateVal;
      if (value instanceof Date) {
        dateVal = signUp.toISOString();
      } else {
        dateVal = signUp;
      }
      ArtisanSDK.call("setSignUpDate", [dateVal]);
    },

    setUserTwitterName: function setUserTwitterName(twitter) {
      ArtisanSDK.call("setUserTwitterName", [twitter]);
    },

    setUserFacebook: function setUserFacebook(facebook) {
      ArtisanSDK.call("setUserFacebook", [facebook]);
    },

    setUserUrl: function setUserUrl(url) {
      ArtisanSDK.call("setUserUrl", [url]);
    },

    setOptedOutPush: function setOptedOutPush(opted) {
      ArtisanSDK.call("setOptedOutPush", [opted]);
    },

    setOptedOutText: function setOptedOutText(opted) {
      ArtisanSDK.call("setOptedOutText", [opted]);
    },

    setOptedOutEmail: function setOptedOutEmail(opted) {
      ArtisanSDK.call("setOptedOutEmail", [opted]);
    },

    setUserStreetAddress: function setUserStreetAddress(street) {
      ArtisanSDK.call("setUserStreetAddress", [street]);
    },

    setUserStreetAddress2: function setUserStreetAddress2(street2) {
      ArtisanSDK.call("setUserStreetAddress2", [street2]);
    },

    setUserCity: function setUserCity(city) {
      ArtisanSDK.call("setUserCity", [city]);
    },

    setUserStateProvince: function setUserStateProvince(stateProvince) {
      ArtisanSDK.call("setUserStateProvince", [stateProvince]);
    },

    setUserCountry: function setUserCountry(country) {
      ArtisanSDK.call("setUserCountry", [country]);
    },

    setUserPostalCode: function setUserPostalCode(postCode) {
      ArtisanSDK.call("setUserPostalCode", [postCode]);
    },

    setUserReferralSource: function setUserReferralSource(source) {
      ArtisanSDK.call("setUserReferralSource", [source]);
    },

    setUserAvatarUrl: function setUserAvatarUrl(avatar) {
      ArtisanSDK.call("setUserAvatarUrl", [avatar]);
    },

    setStringValue: function setStringValue(variable, value) {
      ArtisanSDK.call("setStringValue", [variable, value]);
    },

    setNumberValue: function setNumberValue(variable, value) {
      ArtisanSDK.call("setNumberValue", [variable, value]);
    },

    setLocationValue: function setLocationValue(variable, latitude, longitude) {
      ArtisanSDK.call("setLocationValue", [variable, latitude, longitude]);
    },

    setDateTimeValue: function setDateTimeValue(variableName, value) {
      var dateVal;
      if (value instanceof Date) {
        dateVal = value.toISOString();
      } else {
        dateVal = value;
      }
      ArtisanSDK.call("setDateTimeValue", [variableName, dateVal]);
    },

    /**
     * Clear out all previously specified profile information.
     *
     * Use this method to clear out all data previously specified for the
     * current user, including any data set via setUserId, setUserAge,
     * setGender, and setValue.
     *
     */
    clearProfile: function clearProfile() {
      ArtisanSDK.call("clearProfile", []);
    },

    /**
     * Clear out a user profile variable value.
     *
     * Use this method to clear a previously specified user profile variable value
     * for the current user.
     *
     */
    clearVariableValue: function clearVariableValue(variableName) {
      ArtisanSDK.call("clearVariableValue", [variableName]);
    },
    /**
     * Indicate that the experiment has been viewed.
     *
     * Use this method to specify that your experiment has been viewed by the
     * user. When this code is triggered, an experiment view officially begins.
     * This experiment view counts as a conversion if
     * setTargetReachedForExperiment: is called for this experiment after this
     * gets called. If the target is reached before a view has happened it does
     * not count as a conversion. It is essential to call this method at least
     * once for each experiment that you build to ensure that you will get an
     * accurate conversion rate.
     *
     * It is essential to call this method at least once for each experiment
     * that you build to ensure that you will get an accurate conversion rate.
     *
     * We recommend that you place this in onResume() for your activity so that
     * it will be called each time the user sees the activity.
     *
     *
     * @warning Placement of this event is critical to creating useful and
     *          accurate analytics. Make sure this code fires ONLY when you deem
     *          that the user has encountered your experiment. Consider cases
     *          where this method is fired, then the target for this experiment
     *          is reached, which transitions back to the same code that
     *          originally triggered this method. The conversion rate would now
     *          be 50%, rather than 100%, since this method was called twice.
     *
     * @param experimentName
     *            Name of the experiment that has been viewed. Leading and
     *            trailing whitespace will be trimmed. Must be a valid
     *            experiment.
     */
    setExperimentViewedForExperiment: function setExperimentViewedForExperiment(experimentName) {
      ArtisanSDK.call("setExperimentViewedForExperiment", [experimentName]);
    },

    /**
     * Check to see which variant is currently active.
     *
     * Use this method to wrap blocks of code that you want to execute for this
     * variant of the specified experiment. For example, if you want to set the
     * text of a UILabel to 'Buy Now!' for variant 'A' of experiment 'Buy Button
     * Test', your code would appear as follows:
     *
     * `if (ArtisanSDK.isCurrentVariant:(@"A",@"Buy Button Test")) {
     * element.innerHTML =
     *
     * @"Buy Now!"; }`
     *
     * Any experiment code can be wrapped in this manner, and these conditional
     * blocks can be used in more than one location throughout your app. If you
     * haven't yet called startAppWithId, isCurrentVariant will always return
     * false for everything except the default variant.
     *
     * @param variantName
     *            Name of the variant. This must be the name of a variant
     *            already added to this experiment, otherwise `NO` will
     *            automatically be returned.
     *
     * @param experimentName
     *            Name of the experiment to which this variant belongs. This
     *            must be the name of an experiment already added to this app,
     *            otherwise `NO` will automatically be returned. Leading and
     *            trailing whitespace of experimentName will be trimmed.
     */
    isCurrentVariantForExperiment: function isCurrentVariantForExperiment(variantName, experimentName) {
      var result;
      if (isMobile.Android()) {
        if (typeof Artisan != 'undefined') {
          result = Artisan.isCurrentVariant(ArtisanSDK.stringify([variantName, experimentName]));
        }
      } else {
        ArtisanSDK.call("isCurrentVariant", [variantName, experimentName], function(response) {
          result = (response == "true");
        });
      }
      return result;
    },

    /**
     * Set the conversion target for the specified experiment, with an attached
     * description.
     *
     * Use this method to specify what the conversion target should be for an
     * in-code experiment. The conversion target is the end of your funnel - the
     * action that this variant is trying to maximize.
     *
     * @param experimentName
     *            Name of the experiment for which the target is being set.
     *            Leading and trailing whitespace of experimentName will be
     *            trimmed. Must be a valid experiment.
     *
     * @param description
     *            (optional) Description of the target, which will be displayed
     *            to the user on the Artisan Tools website.
     *
     * @warning If no target is specified for an experiment, your conversion
     *          rate for this test will default to zero percent. If more than
     *          one target is specified for an experiment, the target will be
     *          the first conversion event reported by a user device.
     *
     */
    setTargetReachedForExperiment: function setTargetReachedForExperiment(experimentName, description) {
      if (description) {
        ArtisanSDK.call("setTargetReachedForExperiment", [experimentName, description]);
      } else {
        ArtisanSDK.call("setTargetReachedForExperiment", [experimentName]);
      }
    },

    /**
     * Start an in-code Artisan experiment manually.
     *
     * Use this method to manually apply an experiment built using the Artisan
     * in-code API. The app will behave as if the experiment has been published
     * and the user has received the variant specified. Because this is a test
     * method not intended for production use, you don't need a valid app ID,
     * nor do you need to call startAppwithId, for this to work.
     *
     * This method should be called immediately after all of the variants for
     * your test have been added via calls to `addVariant:forExperiment`.
     *
     * @warning This method is intended for local test and QA use only, and
     *          should *not* be used within production code. If you accidentally
     *          leave this in your production code, the variant specified will
     *          effectively become the default.
     *
     * @param experimentName
     *            Name of the experiment being started. Leading and trailing
     *            whitespace will be trimmed. An error will be logged if a valid
     *            experiment is not specified.
     *
     * @param variantName
     *            Name of the variant to apply for this experiment. This should
     *            be one of the variants added to the experiment. If the name is
     *            invalid, the experiment will apply the default variant.
     */
    startExperiment: function startExperiment(experimentName, variantName) {
      ArtisanSDK.call("startExperiment", [experimentName, variantName]);
    },

    getValueForHookById: function getValueForHookById(idString) {
      var result;
      if (isMobile.Android()) {
        if (typeof Artisan != 'undefined') {
          result = Artisan.getValueForHookById(ArtisanSDK.stringify([idString]));
        }
      } else {
        ArtisanSDK.call("getValueForHookById", [idString], function(response) {
          result = response;
        });
      }
      return result;
    },

    // purchase manager

    addItemToCart: function addItemToCart(productIdentifier, price, description, category, subCategory, subSubCategory, quantity, productInfo, priceLocale) {
      var params = {};
      params[PRODUCT_ID] = productIdentifier;
      params[PRODUCT_PRICE] = price;
      params[PRODUCT_DESCRIPTION] = description;
      params[CATEGORY] = category;
      params[SUB_CATEGORY] = subCategory;
      params[SUB_SUB_CATEGORY] = subSubCategory;
      params[PRODUCT_INFO] = productInfo;
      params[PRODUCT_CURRENCY] = priceLocale;
      params[PRODUCT_QUANTITY] = quantity;

      ArtisanSDK.call("addItemToCart", params, null, true);
    },

    cartCheckoutFailed: function cartCheckoutFailed() {
      ArtisanSDK.call("cartCheckoutFailed", []);
    },

    cartCheckoutSucceeded: function cartCheckoutSucceeded(shipping, tax) {
      ArtisanSDK.call("cartCheckoutSucceeded", [shipping, tax]);
    },

    cartCheckoutWasCancelled: function cartCheckoutWasCancelled() {
      ArtisanSDK.call("cartCheckoutWasCancelled", []);
    },

    // This receives ArtisanPurchaseWorkflowManager's cartIsEmpty()
    // Thus it should return the opposite of what it receives
    cartIsNotEmpty: function cartIsNotEmpty() {
      var result;
      if (isMobile.Android()) {
        if (typeof Artisan != 'undefined') {
          result = Artisan.cartIsNotEmpty();
        }
      } else {
        ArtisanSDK.call("cartIsNotEmpty", [], function(response) {
          result = (response == "true");
        });
      }
      return result;
    },

    cartWasAbandoned: function cartWasAbandoned() {
      ArtisanSDK.call("cartWasAbandoned", []);
    },

    emptyCart: function emptyCart() {
      ArtisanSDK.call("emptyCart", []);
    },

    productViewed: function productViewed(productIdentifier, price, description, category, subCategory, subSubCategory, productInfo, priceLocale) {
      var params = {};
      params[PRODUCT_ID] = productIdentifier;
      params[PRODUCT_PRICE] = price;
      params[PRODUCT_DESCRIPTION] = description;
      params[CATEGORY] = category;
      params[SUB_CATEGORY] = subCategory;
      params[SUB_SUB_CATEGORY] = subSubCategory;
      params[PRODUCT_INFO] = productInfo;
      params[PRODUCT_CURRENCY] = priceLocale;

      ArtisanSDK.call("productViewed", params, null, true);
    },

    removeItemFromCart: function removeItemFromCart(productIdentifier, price, description, quantity) {
      var params = {};
      params[PRODUCT_ID] = productIdentifier;
      params[PRODUCT_PRICE] = price;
      params[PRODUCT_DESCRIPTION] = description;
      params[PRODUCT_QUANTITY] = quantity;

      ArtisanSDK.call("removeItemFromCart", params, null, true);
    },

    // social sharing manager

    shareOnServiceType: function shareOnServiceType(serviceType, successful, metadata) {
      if (metadata !== null) {
        ArtisanSDK.call("shareOnServiceType", [serviceType, successful, metadata]);
      } else {
        ArtisanSDK.call("shareOnServiceType", [serviceType, successful]);
      }
    },

    // Automatically called by native layer when a result is available
    resultForCallback: function resultForCallback(callbackId, resultArray) {
      try {
        var callback = ArtisanSDK.callbacks[callbackId];
        if (!callback)
          return;
        callback.apply(null, resultArray);
      } catch (e) {

      }
    },

    // Use this in javascript to request native code
    // functionName : string
    // args : array of arguments
    // callback : function with n-arguments that is going to be called when the
    // native code returned
    // Warning: Should not be called directly from app. This is for internal SDK use only.
    call: function call(functionName, args, callback, treatArgsAsDictionary) {
      var hasCallback = callback && typeof callback == "function";
      var callbackId = hasCallback ? ArtisanSDK.callbacksCount++ : 0;

      if (hasCallback)
        ArtisanSDK.callbacks[callbackId] = callback;

      // Android device
      if (isMobile.Android()) {
        if (typeof Artisan != 'undefined') {
          if (args !== null && treatArgsAsDictionary) {
            Artisan.handleCallWithDictionaryArguments(functionName, JSON.stringify(args));
          } else {
            Artisan.handleCall(functionName, ArtisanSDK.stringify(args));
          }
        }
        // iOS device
      } else if (isMobile.iOS()) {
        var iframe = document.createElement("IFRAME");
        var iframeSrc = "artisan-frame:" + functionName + ":" + callbackId + ":" + encodeURIComponent(JSON.stringify(args));
        if (treatArgsAsDictionary) {
          iframeSrc += ":dictionary";
        }
        iframe.setAttribute("src", iframeSrc);
        document.documentElement.appendChild(iframe);
        iframe.parentNode.removeChild(iframe);
        iframe = null;
      }
    },

    // Use this method to turn any objects in the args array
    // into a string so that they can be passed to Android
    stringify: function stringify(args) {
      var stringArgs = [];
      for (var i = 0; i < args.length; i++) {
        if (typeof args[i] == "string") {
          stringArgs.push(args[i]);
        } else {
          stringArgs.push(JSON.stringify(args[i]));
        }
      }
      return stringArgs;
    },

    // Returns the filename of this HTML document
    documentName: function documentName() {
      var docName = location.pathname.split("/").slice(-1)[0];

      // If the filename is an empty string then we treat it as if it's the index.html page
      if (docName === "") {
        return "index.html";
      } else {
        return docName;
      }
    },

    filterElementsByTagAndType: function filterElementsByTagAndType(node, tagToFilter, typeToFilter) {
      var inputs, filteredInputs, index;
      inputs = node.getElementsByTagName(tagToFilter);
      filteredInputs = new Array();
      for (index = 0; index < inputs.length; ++index) {
        var input = inputs[index];
        if (input.getAttribute("type") == typeToFilter) {
          filteredInputs.push(input);
        }
      }
      return filteredInputs;
    },

    filterElementsByTag: function filterElementsByTagAndType(node, tagToFilter) {
      return node.getElementsByTagName(tagToFilter);
    },

    generateUniqueIdentifier: function(element) {
      return "id" + Math.random();
    },


    flatten: function(cs) {
      var items = new Array();
      for (cindx = 0; cindx < cs.length; cindx++) {
        var collection = cs[cindx];
        for (indx = 0; indx < collection.length; indx++) {
          items.push(collection[indx]);
        }
      }
      return items;
    },

    //returns the list of newly added: div, span, p, li that are marked by ember or angular with click listeners
    //also all anchors and button inputs
    findElementsToInstrument: function(node) {
      var elements = [node.getElementsByTagName('div'),
        node.getElementsByTagName('span'),
        node.getElementsByTagName('p'),
        node.getElementsByTagName('li')
      ];

      var items = ArtisanSDK.flatten(elements);
      var filtered = items.filter(function(el) {
        return el.hasAttribute('ng:click') ||
          el.hasAttribute('ng-click') ||
          el.hasAttribute('data-ember-action')
      });

      var hrefs = ArtisanSDK.filterElementsByTag(node, 'a');
      var buttons = ArtisanSDK.filterElementsByTag(node, 'input', 'button');

      return ArtisanSDK.flatten([filtered, hrefs, buttons]);
    },

    findUniqueIdentifier: function findUniqueIdentifier(element) {
      var atts = ["id", "name", "href", "ng:click", "ng-click", "data-ember-action"];
      for (i = 0; i < atts.length; i++) {
        if (element.getAttribute(atts[i])) {
          return element.getAttribute(atts[i]);
        }
      }
      return ArtisanSDK.generateUniqueIdentifier();
    },

    addArtisanListener: function addArtisanListener(element, eventName, elementIdOverride) {
      if (element) {
        var uniqueIdentifier, elementType;

        if (elementIdOverride) {
          uniqueIdentifier = elementIdOverride;
        } else {
          uniqueIdentifier = ArtisanSDK.findUniqueIdentifier(element);
        }

        if (uniqueIdentifier === null) {
          console.log("couldn't find uniqueIdentifier for item - not instrumenting");
          return null;
        }

        elementType = element.getAttribute("type");

        if (element.tagName == "A") {
          // We only want to capture an anchor with an href
          var href = element.getAttribute("href");
          if (href) {
            elementType = "anchor";
          }
        }

        if (!element.artisanInstrumented) {
          element.artisanInstrumented = true;
          element.addEventListener(eventName, function() {
            ArtisanSDK.trackWebViewElementEvent(eventName, {}, uniqueIdentifier, elementType);
          }, false);
        }
      }
    },

    addListenersToChildren: function(node) {
      var items = ArtisanSDK.findElementsToInstrument(node)
      for (index = 0; index < items.length; ++index) {
        ArtisanSDK.addArtisanListener(items[index], "click");
      }
    },

    initArtisan: function initArtisan() {
      // Send version number of the Javascript to native SDK and get the version of the native SDK
      var result;
      if (isMobile.Android()) {
        if (typeof Artisan != 'undefined') {
          nativeSDKVersionNumber = Artisan.syncVersions("syncVersions", JSON.stringify({
            "sdkVersionNumber": SDK_VERSION_NUMBER
          }));
        }
      } else {
        ArtisanSDK.call("syncVersions", {
          "sdkVersionNumber": SDK_VERSION_NUMBER
        }, function(response) {
          nativeSDKVersionNumber = response;
        });
      }
    }
  };

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    }
  };

  window.addEventListener("load", function() {
    try {
      ArtisanSDK.initArtisan();
      ArtisanSDK.trackPageView();
    } catch (e) {}
  }, false);

  window.addEventListener('DOMNodeInserted', function(e) {
    try {
      ArtisanSDK.addListenersToChildren(e.relatedNode);
    } catch (e) {}
  }, false);


})(window, document);

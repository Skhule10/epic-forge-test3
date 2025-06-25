sap.ui.define([
    "myApp/controller/App.controller"
], function (AppController) {
    "use strict";

    QUnit.module("App Controller");

    QUnit.test("I should test the app controller initialization", function (assert) {
        var oAppController = new AppController();
        oAppController.onInit();
        assert.ok(oAppController, "Controller initialized successfully");
    });

    QUnit.test("I should test the onAfterRendering method", function (assert) {
        var oAppController = new AppController();
        assert.ok(typeof oAppController.onAfterRendering === "function", "onAfterRendering function exists");
    });

    QUnit.start();
});
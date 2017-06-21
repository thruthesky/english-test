"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Nightmare = require('nightmare');
var j = require("cheerio");
var SiteTest = (function () {
    function SiteTest() {
        this.nightmare = Nightmare({
            openDevTools: { mode: '' },
            show: true
        });
    }
    SiteTest.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.open()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.register()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.logout()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.login()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.infoUpdate()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.livechat()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SiteTest.prototype.testBegin = function (msg) {
        console.log(">>> [ " + msg + " : TEST Begin ... ] ");
    };
    SiteTest.prototype.success = function (msg) {
        console.log("> SUCCESS: " + msg);
    };
    SiteTest.prototype.error = function (msg) {
        console.log("> ERROR: " + msg);
    };
    SiteTest.prototype.log = function (msg) {
        console.log("> " + msg);
    };
    SiteTest.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            var re, $html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.testBegin('open');
                        return [4 /*yield*/, this.nightmare
                                .goto('http://localhost:4200/')
                                .then(function (x) { return x; })
                                .catch(function (e) { return e; })];
                    case 1:
                        re = _a.sent();
                        $html = j.load(re);
                        this.log("Got site content");
                        return [2 /*return*/, true];
                }
            });
        });
    };
    SiteTest.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var re;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.testBegin("register");
                        return [4 /*yield*/, this.nightmare
                                .click('.fa-bars')
                                .wait('#small-header-register-button')
                                .click('#small-header-register-button')
                                .evaluate(function () {
                                return document.querySelector('body').innerHTML;
                            })
                                .then(function (x) { return x; })];
                    case 1:
                        re = _a.sent();
                        return [4 /*yield*/, this.nightmare
                                .type('[name="id"]', 'test-id')
                                .type('[name="password"]', 'test-password')
                                .wait(2000)
                                .then(function (x) { return x; })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    SiteTest.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SiteTest.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SiteTest.prototype.infoUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    SiteTest.prototype.closeChatComponent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.nightmare
                            .wait('#chat-component .closer')
                            .click('#chat-component .closer')];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SiteTest.prototype.livechat = function () {
        return __awaiter(this, void 0, void 0, function () {
            var re, msg, $, Time;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.testBegin("livechat");
                        msg = "Time:" + (new Date()).getMinutes() + ':' + (new Date()).getSeconds();
                        return [4 /*yield*/, this.nightmare
                                .type("#chat-component input", msg)
                                .click("#chat-component .fa-mail-forward")
                                .wait("#chat-component span.text")
                                .evaluate(function () {
                                return document.querySelector('body').innerHTML;
                            })
                                .then(function (x) { return x; })
                                .catch(function (e) { return e; })];
                    case 1:
                        re = _a.sent();
                        $ = j.load(re);
                        this.log("Typed chat message.");
                        Time = $('body')
                            .find('#chat-component')
                            .find(".messages")
                            .find("span.text")
                            .text();
                        if (msg == Time) {
                            this.closeChatComponent();
                            this.success("Live chat is working fine !!");
                        }
                        else {
                            this.closeChatComponent();
                            this.error("Oo.. :(   Live chat is not working");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return SiteTest;
}());
(new SiteTest()).run();
//# sourceMappingURL=index.js.map
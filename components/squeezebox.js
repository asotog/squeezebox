"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var sb_item_1 = require("./sb-item");
var SqueezeBox = /** @class */ (function () {
    function SqueezeBox() {
        this.multiple = true;
    }
    SqueezeBox.prototype.didItemToggled = function (item) {
        // on not multiple, it will collpase the rest of items
        if (!this.multiple) {
            this.items.toArray().forEach(function (i) {
                if (i !== item && !i.collapsed) {
                    i.applyToggle(true);
                }
            });
        }
    };
    /**
     * Refreshes and recalculates expanded items
     */
    SqueezeBox.prototype.refresh = function () {
        this.items.toArray().forEach(function (i) {
            i.refreshBody();
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SqueezeBox.prototype, "multiple", void 0);
    __decorate([
        core_1.ContentChildren(core_1.forwardRef(function () { return sb_item_1.SBItem; })),
        __metadata("design:type", core_1.QueryList)
    ], SqueezeBox.prototype, "items", void 0);
    SqueezeBox = __decorate([
        core_1.Component({
            exportAs: 'squeezebox',
            selector: 'squeezebox',
            template: "\n        <div class=\"squeezebox\">\n            <ng-content></ng-content>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [])
    ], SqueezeBox);
    return SqueezeBox;
}());
exports.SqueezeBox = SqueezeBox;
//# sourceMappingURL=squeezebox.js.map
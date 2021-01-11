"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var header_component_1 = require("./header/header.component");
var footer_component_1 = require("./footer/footer.component");
var sidenav_component_1 = require("./sidenav/sidenav.component");
var toolbar_1 = require("@angular/material/toolbar");
var icon_1 = require("@angular/material/icon");
var button_1 = require("@angular/material/button");
var flex_layout_1 = require("@angular/flex-layout");
var divider_1 = require("@angular/material/divider");
var card_1 = require("@angular/material/card");
var list_1 = require("@angular/material/list");
var menu_1 = require("@angular/material/menu");
var cards_component_1 = require("./outlook/cards/cards.component");
var middle_component_1 = require("./outlook/middle/middle.component");
var last_component_1 = require("./outlook/last/last.component");
var highcharts_angular_1 = require("highcharts-angular");
var card_area_component_1 = require("./outlook/card-area/card-area.component");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            declarations: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, sidenav_component_1.SidenavComponent, cards_component_1.CardsComponent, middle_component_1.MiddleComponent, last_component_1.LastComponent, card_area_component_1.CardAreaComponent],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                toolbar_1.MatToolbarModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                flex_layout_1.FlexLayoutModule,
                divider_1.MatDividerModule,
                card_1.MatCardModule,
                list_1.MatListModule,
                menu_1.MatMenuModule,
                highcharts_angular_1.HighchartsChartModule
            ],
            exports: [header_component_1.HeaderComponent, footer_component_1.FooterComponent, sidenav_component_1.SidenavComponent, cards_component_1.CardsComponent, middle_component_1.MiddleComponent, last_component_1.LastComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;

//# sourceMappingURL=shared.module.js.map

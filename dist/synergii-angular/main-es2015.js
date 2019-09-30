(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/login/login.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/login/login.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div style=\"background:#f5f5f5;padding-bottom:5%;\">\n    <div class=\"container-fluid\">\n      <div class=\"header text-center\">\n        <a href=\"javascript:;\" routerLink=\"home\"><img src=\"../assets/img/home/logo.png\"></a>\n        <hr>\n      </div>\n      <div class=\"middle-form\">\n        <div class=\"text-center\">\n          <h3>Log In Synergii </h3>\n         \n        </div>\n        <hr>\n        <div class=\"text-center\" style=\"margin-top:3%;\">\n            <a><button class=\"facebook\" >LOGIN WITH FACEBOOK</button></a>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-xs-6 text-right\">\n            <a><button class=\"google\" >LOGIN WITH GOOGLE</button></a>\n          </div>\n          <div class=\"col-xs-6 text-left\">\n            <a><button class=\"linked\" >LOGIN WITH LINKED IN</button></a>\n          </div>\n        </div>\n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"text-center\">\n            <br>\n            <img src=\"../assets/img/or.png\">\n            <h4 style=\"color:black;font-weight:bold;font-size:18px;margin-top:2%;\">Login with your email address</h4>\n            <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" required>\n            <input type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" required>\n          </div>\n  \n          <div class=\"text-center\" *ngIf=\"message\"><br>\n            <div class=\"alert alert-danger  alert-dismissible\">{{message}}</div>\n          </div>\n  \n          <!-- <div class=\"text-right\">\n            <br>\n            <a style=\"color:grey;font-size:18px;cursor: pointer;\" (click)=\"viewForgetForm()\">Forget Password ?</a>\n          </div> -->\n          <input type=\"submit\" [disabled]='btnDisabled' class=\"form-control\" value=\"Login\" style=\"color:white;background:#00A0DC;font-size:18px;height:55px;border-radius:25px;\">\n        </form>\n              \n        <!-- <form [formGroup]=\"forgetForm\" (ngSubmit)=\"forgetPasswordRequest()\" *ngIf=\"showForgetForm\">\n          <div class=\"text-center\">  \n            <br>\n            <input class=\"form-control\" formControlName=\"useremail\" placeholder=\"Email\" name=\"useremail\" type=\"text\" id=\"user_email\" autofocus>\n          </div>\n          <div class=\"text-right\">\n            <br>\n            <a style=\"color:grey;font-size:18px;\" (click)=\"viewLoginForm()\">Go to Login ?</a>\n          </div>\n          \n          <input type=\"submit\" [disabled]='btnDisabled' class=\"form-control\" value=\"Submit\" style=\"color:white;background:#00A0DC;font-size:18px;height:55px;border-radius:25px;\">\n          \n        </form> -->\n<!--         \n        <form [formGroup]=\"otpForm\" (ngSubmit)=\"verifyOTPRequest()\" *ngIf=\"showOTPForm\">\n          <div class=\"text-center\">\n            <br>\n            <input class=\"form-control\" formControlName=\"userotp\" placeholder=\"Otp\" name=\"userotp\" type=\"text\" autofocus>\n          </div>\n          <input type=\"submit\" [disabled]='btnDisabled' class=\"form-control\" value=\"Submit\" style=\"color:white;background:#00A0DC;font-size:18px;height:55px;border-radius:25px;\">\n        </form>\n   -->\n        \n        <!-- <form [formGroup]=\"ResetPasswordForm\" (ngSubmit)=\"changePasswordRequest()\" *ngIf=\"showResetPasswordForm\">\n          <div class=\"text-center\">\n            <br>\n            <input class=\"form-control\" formControlName=\"new_password\" placeholder=\"Password\" name=\"password\" type=\"password\" autofocus>\n          </div>\n          \n          <input type=\"submit\" [disabled]='btnDisabled' class=\"form-control\" value=\"Submit\" style=\"color:white;background:#00A0DC;font-size:18px;height:55px;border-radius:25px;\">\n          \n        </form> -->\n        \n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/signup/signup.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/signup/signup.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>signup works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/modal-components/make-payment/make-payment.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/modal-components/make-payment/make-payment.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"closeFirstModal()\">&times;</button>\n      <h4 class=\"modal-title text-center\">User Detail</h4>\n    </div>\n  \n    <div class=\"modal-body\">\n      <form [formGroup]=\"permanentUserForm\" (ngSubmit)=\"makePermanentRequest()\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name:</label>\n          <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"email\">Email:</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n        </div>\n        \n        <button type=\"submit\" class=\"btn btn-default pull-right\">Submit</button>\n        <br><br>\n      </form>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/add-client/add-client.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/add-client/add-client.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"signupbox\" style=\" margin-top:2%;\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n    <div class=\"panel panel-info\">\n      <div class=\"panel-heading\">\n        <div class=\"panel-title text-center\">Add Client</div>\n      </div>  \n      <div class=\"panel-body\" >\n        <form  [formGroup]=\"addClientForm\" (ngSubmit)=\"onSubmit()\" class=\"form-horizontal\">\n          <div  class=\"form-group required\">\n            <label  class=\"control-label col-md-4  requiredField\">First Name<span class=\"asteriskField\">*</span> </label>\n            <div class=\"controls col-md-8 \">\n              <input class=\"input-md  textinput textInput form-control\" id=\"name\" maxlength=\"30\"  placeholder=\"Enter First Name\" style=\"margin-bottom: 10px\" type=\"text\" formControlName=\"name\" required>\n            </div>\n          </div>\n  \n          <div  class=\"form-group required\">\n            <label class=\"control-label col-md-4  requiredField\">Last Name<span class=\"asteriskField\">*</span> </label>\n            <div class=\"controls col-md-8 \">\n              <input class=\"input-md  textinput textInput form-control\" id=\"last_name\" maxlength=\"30\"  placeholder=\"Enter Last Name\" style=\"margin-bottom: 10px\" type=\"text\" formControlName=\"lname\" required>\n            </div>\n          </div>\n  \n          <div  class=\"form-group required\">\n            <label  class=\"control-label col-md-4  requiredField\"> E-mail<span class=\"asteriskField\">*</span> </label>\n            <div class=\"controls col-md-8 \">\n                <input class=\"input-md emailinput form-control\" id=\"email\"  placeholder=\"Your current email address\" style=\"margin-bottom: 10px\" type=\"email\" formControlName=\"email\" required>\n            </div>     \n          </div>\n            <div  class=\"form-group required\">\n              <label  class=\"control-label col-md-4  requiredField\">IDs of listing (MLS or otherwise)<span class=\"asteriskField\">*</span> </label>\n              <div class=\"controls col-md-8 \"> \n                <input class=\"input-md textinput textInput form-control\" id=\"mls_id\"  placeholder=\"Ex.E0001,E0002\" style=\"margin-bottom: 10px\" type=\"text\" formControlName=\"mls_ids\" />\n              </div>\n            </div>\n            <div class=\"form-group\"> \n                \n              <div class=\"controls col-sm-12 col-md-12 col-lg-12 \">\n                <input type=\"submit\" name=\"Submit\" value=\"Submit\" class=\"btn btn-primary btn btn-info pull-right\" >\n              </div>\n            </div>    \n        </form> \n      </div>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/add-listing/add-listing.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/add-listing/add-listing.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid second-listing\">\n        <div class=\"listing-1\">\n         \n          <div id=\"after-add\">\n            <form role=\"form\" (ngSubmit)=\"addListing()\" #listingForm=\"ngForm\">\n              <div class=\"form-group list-form\">\n                <label>Sale/Lease <span style=\"color:red;\">*</span></label><br>\n                <select (change)=\"selectSaleLease($event)\" id=\"sale_lease\">\n                  <option  value=\"\" hidden>Select Sale/Lease</option>\n                  <optgroup disabled hidden></optgroup>\n                  <option>Sale</option>\n                  <option>Lease</option>\n                </select>\t\t\n              </div>\n      \n              <div class=\"form-group list-form\">\n                <label>Title/Heading</label><br>\n                <input type=\"text\" name=\"project_name\" placeholder=\"project name\" class=\"form-control\" [(ngModel)]=\"listing.project_name\">\t\n              </div>\n              <!-- <div class=\"form-group list-form\">\n                <label>Address <span style=\"color:red;\">*</span></label><br>\n                <input type=\"text\" name=\"address\" placeholder=\"33 Laird Dr\" class=\"form-control\" [(ngModel)]=\"listing.address\" id=\"address\">\t\n              </div> -->\n              <div class=\"form-group list-form\">\n                <label>Street Number</label><br>\n                <input type=\"text\" name=\"street_num\" placeholder=\"Street Num\"  class=\"form-control\" [(ngModel)]=\"listing.street_num\">\t\t\n              </div>\n      \n              <div class=\"form-group list-form\">\n                <label>Street <span style=\"color:red;\">*</span></label><br>\n                <input type=\"text\" name=\"street\" placeholder=\"Street\"  class=\"form-control\" [(ngModel)]=\"listing.street\" id=\"street\">\t\t\n              </div>\n              \n              <div class=\"form-group list-form\">\n                <label>Street Abbreviation</label><br>\n                <input type=\"text\" name=\"street_abber\" placeholder=\"Street Abbreviation\"  class=\"form-control\" [(ngModel)]=\"listing.street_abbreviation\">\t\t\n              </div>\n      \n              <div class=\"form-group list-form\">\n                <label>Area </label><br>\n                <select (change)=\"selectArea($event)\">\n                  <option  value=\"\" hidden>Select Area</option>\n                  <option>Toronto</option>\n                  <option>York</option>\n                  <option>Durham</option>\n                  <option>Peel</option>\n                  <option>Halton</option>\n                  <option>Other</option>\n                </select>\t\t\n              </div>\n      \n              <div class=\"form-group list-form\">\n                <label>Municipality <span style=\"color:red;\">*</span></label><br>\n                <input type=\"text\" name=\"municipality\" placeholder=\"Municipality\" class=\"form-control\" [(ngModel)]=\"listing.municipality\" id=\"municipality\">\t\t\n              </div>\n      \n              <div class=\"form-group list-form\">\n                <label>Province/State</label><br>\n                <input type=\"text\" name=\"state\" placeholder=\"State\" class=\"form-control\" [(ngModel)]=\"listing.state\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Postal Code/Zip <span style=\"color:red;\">*</span></label><br>\n                <input type=\"text\" name=\"zip\" placeholder=\"Zip\" class=\"form-control\" [(ngModel)]=\"listing.zip\" id=\"zip\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Country <span style=\"color:red;\">*</span></label><br>\n                <input type=\"text\" name=\"country\" placeholder=\"Canada\"  class=\"form-control\" [(ngModel)]=\"listing.country\" id=\"country\">\t\t\n              </div>\n              \n              <div class=\"form-group list-form\">\n                <label>Layout Name </label><br>\n                <input type=\"text\" name=\"layout_name\" placeholder=\"playground\"  class=\"form-control\" [(ngModel)]=\"listing.layout_name\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Developer Name</label><br>\n                <input type=\"text\" name=\"developer\" placeholder=\"developer name\" class=\"form-control\" [(ngModel)]=\"listing.developer\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Nearest Intersection</label><br>\n                <input type=\"text\" name=\"nearest_intersection\" placeholder=\"Younge and stells\" class=\"form-control\" [(ngModel)]=\"listing.nearest_intersection\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Community</label><br>\n                <input type=\"text\" name=\"community\" placeholder=\"Ex. Unionville\" class=\"form-control\" [(ngModel)]=\"listing.community\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Property Type</label><br>\n                <select (change)=\"selectPropertyType($event)\">\n                  <option  value=\"\" hidden>Select Property Type</option>\n                  <optgroup disabled hidden></optgroup>\n                  <option>COMMERCIAL</option>\n                  <option>CONDO</option>\n                  <option>RESIDENTIAL</option>\n                </select>\n              </div>\n              <div class=\"form-group list-form\">\n                <label> Category</label><br>\n                <input type=\"text\" name=\"category\" placeholder=\"Category\" class=\"form-control\" [(ngModel)]=\"listing.category\">\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Price<span style=\"font-size: 14px;\"></span> <span style=\"color:red;\">*</span></label><br>\n                <input type=\"text\" name=\"estimated_price\" placeholder=\"$14500\"  class=\"form-control\" [(ngModel)]=\"listing.estimated_price\" id=\"estimated_price\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Size <span style=\"font-size: 14px;\">(Sq.Ft.)</span> <span style=\"color:red;\">*</span></label><br>\n                <input type=\"text\" name=\"total_area\" placeholder=\"5000\" class=\"form-control\" [(ngModel)]=\"listing.total_area\" id=\"total_area\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Balcony <span style=\"font-size: 14px;\">(Sq.Ft.)</span></label><br>\n                <input type=\"text\" name=\"balcony_size\" placeholder=\"30\" class=\"form-control\" [(ngModel)]=\"listing.balcony_size\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Floors</label><br>\n                <select (change)=\"selectFloors($event)\">\n                  <option value=\"\" hidden >Select Floors</option>\n                  <optgroup disabled hidden></optgroup>\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                  <option>5</option>\n                  <option>6</option>\n                  <option>7</option>\n                  <option>8</option>\n                  <option>9</option>\n                  <option>10</option>\n                  <option>11</option>\n                  <option>12</option>\n                  <option>13</option>\n                  <option>14</option>\n                  <option>15</option>\n                  <option>16</option>\n                  <option>17</option>\n                  <option>18</option>\n                  <option>19</option>\n                  <option>20</option>\n                </select>\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Bedrooms</label><br>\n                <select (change)=\"selectBedromms($event)\">\n                  <option value=\"\" hidden >Select Bedroom</option>\n                  <optgroup disabled hidden></optgroup>\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                  <option>5</option>\n                  <option>6</option>\n                </select>\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Washrooms</label><br>\n                <select (change)=\"selectWashrooms($event)\">\n                  <option value=\"\" hidden >Select Washroom</option>\n                  <optgroup disabled hidden></optgroup>\n                  <option>1</option>\n                  <option>2</option>\n                  <option>3</option>\n                  <option>4</option>\n                  <option>5</option>\n                  <option>6</option>\n                </select>\n              </div>\n              <div class=\"form-group list-form\">\n                  <label>Stores</label><br>\n                  <select (change)=\"selectStores($event)\">\n                    <option  value=\"\" hidden>Select Stores</option>\n                    <optgroup disabled hidden></optgroup>\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                    <option>5</option>\n                    <option>6</option>\n                  </select>\n                </div>\n              <div class=\"form-group list-form\">\n                <label>Contact Name</label><br>\n                <input type=\"text\" name=\"contact_name\" placeholder=\"contact name\"  class=\"form-control\" [(ngModel)]=\"listing.contact_name\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Contact Email</label><br>\n                <input type=\"email\" name=\"email\" placeholder=\"Email\" class=\"form-control\" [(ngModel)]=\"listing.contact_email\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <label>Contact Phone</label><br>\n                <input type=\"text\" name=\"contact_phone\" placeholder=\"phone number\" class=\"form-control\" [(ngModel)]=\"listing.contact_phone\">\t\t\n              </div>\n      \n              <div class=\"form-group list-form\">\n                <label>Construction Status</label><br>\n                <input type=\"text\" name=\"construction_status\" placeholder=\"completed\" class=\"form-control\" [(ngModel)]=\"listing.construction_status\">\t\t\n              </div>\n      \n              <div class=\"form-group list-form\">\n                <label>Completion Date</label><br>\t\t\n                <input type=\"date\" name=\"completion_date\"  placeholder=\"Ex:2019\"  class=\"form-control\" [(ngModel)]=\"listing.completion_date\" min=\"{{date | date: 'yyy-MM-dd'}}\">\n              </div>\n      \n              <div class=\"form-group list-form\">\n                <label>Sales Started</label><br>\n                <input type=\"text\" name=\"sales_started\" placeholder=\"Ex:Winnter\"  class=\"form-control\" [(ngModel)]=\"listing.sales_started\">\t\t\n              </div>\n      \n              <div class=\"form-group list-form\">\n                <label>Ownership </label><br>\n                <input type=\"text\" name=\"ownership\" placeholder=\"Ex:Freehold\" class=\"form-control\" [(ngModel)]=\"listing.ownership\">\t\t\n              </div>\n      \n              \n                <div class=\"form-group list-form\">\n                  <label>No. Units</label><br>\n                  <input type=\"text\" name=\"units_no\" placeholder=\"Ex:52\" class=\"form-control\" [(ngModel)]=\"listing.units_no\">\t\t\n                </div>\n              \n              \n              <div class=\"form-group list-form desc\">\n                <label>Description <span style=\"color:red;\">*</span></label><br>\n                <textarea placeholder=\"Add a discription for this property\" name=\"remarks_for_clients\" rows=\"5\"  class=\"form-control control-2\" [(ngModel)]=\"listing.remarks_for_clients\" id=\"remarks_for_clients\"></textarea>\t\t\n              </div>\n      \n              <br><br>\n              <!--building-image-->\n              <div class=\"row\">\n                <div class=\"form-group col-sm-4\">\n                  <label class=\"limit\">Building Images (Limit to 1):</label>\n                  <label for=\"file1\" class=\"trigger\">  \n                    <img [attr.src]=\"imageBuildingSrc\"  style=\"width:100%;height:180px\" *ngIf=\"imageBuildingSrc\"/>\n                    <img src=\"../assets/img/files/bulding.png\"  *ngIf=\"!imageBuildingSrc\" style=\"padding: 15% 30% 4%;\">\n                    <p style=\"padding: 0px 20%;\"  *ngIf=\"!imageBuildingSrc\">choose building image</p>\n                  </label>  \n                  <input type=\"file\" id=\"file1\" name=\"image\" accept=\"image/x-png,image/jpeg\" style=\"display: none;\" (change)=\"handleBuildingImageChange($event)\">\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label class=\"limit\">Videos (Limit to 1):</label><br>\n                  <label class=\"trigger\" for=\"sile2\">\n                     \n                      <img src=\"../assets/img/files/video.png\" style=\"padding: 15% 30% 4%;\">\n                      <p *ngIf=\"video\" style=\"padding: 0px 20%;\">{{video.name}}</p>\n                      <p style=\"padding: 0px 20%;\" *ngIf=\"!video\" >choose a video</p>\n                  </label>\n                  <input type=\"file\" id=\"sile2\" name=\"\" style=\"display: none;\" (change)=\"uploadVideo($event)\">\n                </div>\n                <div class=\"form-group col-sm-4\">\n                  <label class=\"limit\">Upload your PDF Listing (Limit to 1):</label><br>\n                  <label class=\"trigger\" for=\"xile2\">\n                      <img src=\"../assets/img/files/pdf.png\" id=\"xile1\" style=\"padding: 15% 30% 4%;\">\n                      <p *ngIf=\"file\" style=\"padding: 0px 20%;\">{{file.name}}</p>\n                      <p style=\"padding: 0px 20%;\" *ngIf=\"!file\">choose a PDF</p>\n                  </label>\n                  <input type=\"file\" id=\"xile2\" name=\"\" style=\"display: none;\" (change)=\"uploadPropertyDoc($event)\">\n                  <br> \n                  <small style=\"color:red;\">{{this.message}}</small>\n                </div>\n              </div>\n              <!--row-->\n              <br><br>\n              <div class=\"row\">\n                <div class=\"form-group col-lg-12\">\n                  <label>Property Images (Limit to 4):</label><br>\n                  <div class=\"col-sm-3\" *ngFor=\"let url of urls\">\n                    <img  class=\"imageThumb\" [attr.src]=\"url\"  style=\"width:100%;height:180px\"><br/>\n                    <span class=\"remove\" (click)=\"removeSelectedImage(url)\">Remove image</span>\n                  </div>\n                  <input type=\"file\" id=\"vile2\" name=\"\" multiple (change)=\"handlePropertyImageChange($event)\" accept=\".png, .jpg, .jpeg\">\n                </div>\n              </div>\n              <!--row-->\n              <div class=\"form-group list-form\">\n                <input type=\"submit\" [disabled]='btnDisabled' name=\"\" value=\"SUBMIT\" style=\"background:#00BB35;color: white;font-weight: 550;\">\t\t\n              </div>\n              <div class=\"form-group list-form\">\n                <input type=\"button\" name=\"\" value=\"CLEAR\" style=\"background:#DC0000;color: white;font-weight: 550;\"  (click)=\"clearListingForm()\">\t\n              </div>\n            </form>\n          </div>\n          <br><br>\n        </div>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/advertise/advertise.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/advertise/advertise.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid second-listing\">\n    <div class=\"row\">\n        <div class=\"col-md-7\">\n            <div class=\"invite-section\">\n                <h1>Add Advertise by MLS Id</h1>\n                <p style=\"font-size: 13px;\">Send an assortment of listing presented simpily to prospective </p>\n                <p style=\"margin-top: -15px;\">clients in order to catch thier interest.</p>\n                <div class=\"alert alert-danger\" *ngIf=\"addStatus.status==0\">{{addStatus.message}}</div>\n\n                <div class=\"generate-link\" *ngIf=\"addStatus.status==1\" style=\"display: block;\">\n                    <h4>Your advertise link is generated and copied to clip board</h4>\n                    <p>Go ahead and post it somewhere so you can prospective clients show up and see what properties you have already from them</p>\n                </div>\n                <div class=\"row\">\n                    <br><br>\n                    <form  [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"col-sm-5\">\n                            <label>IDs of listing (MLS or otherwise)</label>\n                            <input type=\"text\" formControlName=\"properties\" placeholder=\"Ex.E0001,E0002\" style=\"width: 95%;\" required>\n                            <span class=\"text-danger\"  *ngIf=\"validFormStatus\"><strong> **Please Provide Mls Number**</strong></span>          \n                        </div>\n                        \n                        <div class=\"col-sm-3\">\n                            <br>\n                            <button value=\"\" id=\"link\" class=\"btn btn-success\" readonly=\"\"> Generate Invite Link</button>\n                        </div>\n                    </form>\n                </div><!--row-->\n            </div>\n        </div><!--col-8-->\n        <div class=\"col-md-5 advertise-link\">\n            <h3>Saved Advertisement links</h3>\n            <div class=\"alert alert-danger\" *ngIf=\"removeStatus.status==0\">{{removeStatus.message}}</div>\n            <div class=\"alert alert-success\" *ngIf=\"removeStatus.status==1\">{{removeStatus.message}}</div>\n            <!-- <div *ngIf=\"adds.length>0\"> -->\n                    <table class=\"table table-striped\">\n                        <tbody *ngFor=\"let add of adds\">\n                            <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                <p>#{{add.id}}-{{add.title}}</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <!-- <a class=\"btn btn-primary btn-xs pull-right\" href=\"javascript:;\" (click)=\"addLink(add.id)\"> Copy link</a> -->\n                                    <a href=\"javascript:;\" class=\"pull-right\" (click)=\"addLink(add.id)\"><img src=\"../../../assets/img/link.png\" width=\"10%\"> Copy link</a>\n                                    <a href=\"javascript:;\" (click)=\"removeAdd(add.id)\" class=\"pull-right\"><img src=\"../../../assets/img/cross.png\" width=\"15%\"></a>\n                                </div>\n            \n                            </td>\n                            </tr>\n            \n                        </tbody>\n                    </table>\n                <!-- <div class=\"row link-row\" *ngFor=\"let add of adds\">\n                    <div class=\"col-xs-5\" style=\"word-break: break-all;\">\n                        <p style=\"padding: 6%;\">{{add.title}}</p>\n                    </div>\n                    <div class=\"col-xs-5\">\n                        \n                        <a href=\"javascript:;\" class=\"pull-right\" (click)=\"addLink(add.id)\"><img src=\"../../../assets/img/link.png\" width=\"30%\"> Copy link</a>\n                    </div>\n                    <div class=\"col-xs-2\">\n                        <a href=\"javascript:;\" (click)=\"removeAdd(add.id)\" class=\"pull-left\"><img src=\"../../../assets/img/cross.png\" width=\"40%\"></a>\n                    </div>\n                </div> -->\n            <!-- </div> -->\n            <div class=\"row\" *ngIf=\"adds.length==0\">\n                <div class=\"col-lg-12\" >\n                        <img src=\"../../../assets/img/notimg/no_ads.png\" width=\"50%\">\n                        <!-- <hr> -->\n                        <p style=\"color: #979797\"> You did not created any advertise link yet. Generate your Advertisement link by adding properties mls id's in comma saperated like C4122782, C4141303, W4215305, W4215305.</p>\n                </div>\n            </div>\n        </div><!--col-4-->\n    </div><!--row-->\n</div><!--fluid-->\t");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/edit-add-listing/edit-add-listing.component.html":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/edit-add-listing/edit-add-listing.component.html ***!
  \****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid second-listing\">\n    <div class=\"listing-1\">\n     \n      <div id=\"after-add\">\n        <form role=\"form\" (ngSubmit)=\"addListing()\" #listingForm=\"ngForm\" enctype=\"multipart/form-data\">\n          <div class=\"form-group list-form\">\n            <label>Sale/Lease <span style=\"color:red;\">*</span></label><br>\n            <select (change)=\"selectSaleLease($event)\" id=\"sale_lease\">\n                <optgroup disabled hidden></optgroup>\n              <option  value=\"\" hidden>Select Sale/Lease</option>\n              <option *ngFor=\"let p of properties_for\" [ngValue]=\"p\" [selected]=\"p == sale_lease\">{{p}}</option>\n            </select>\t\t\n          </div>\n    \n          <div class=\"form-group list-form\">\n            <label> Title/Heading</label><br>\n            <input type=\"text\" name=\"project_name\" placeholder=\"project name\" class=\"form-control\" [(ngModel)]=\"listing.project_name\">\t\n          </div>\n         \n          <div class=\"form-group list-form\">\n            <label>Street Number</label><br>\n            <input type=\"text\" name=\"street_num\" placeholder=\"Street Num\"  class=\"form-control\" [(ngModel)]=\"listing.street_num\">\t\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Street <span style=\"color:red;\">*</span></label><br>\n            <input type=\"text\" name=\"street\" placeholder=\"Street\"  class=\"form-control\" [(ngModel)]=\"listing.street\" id=\"street\">\t\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Street Abbreviation</label><br>\n            <input type=\"text\" name=\"street_abber\" placeholder=\"Street Abbreviation\"  class=\"form-control\" [(ngModel)]=\"listing.street_abbreviation\">\t\t\n          </div>\n\n          <div class=\"form-group list-form\">\n            <label>Area</label><br>\n            <select (change)=\"selectArea($event)\">\n                <optgroup disabled hidden></optgroup>\n              <option  value=\"\" hidden>Select Area</option>\n              <option *ngFor=\"let area of areas\" [ngValue]=\"area\" [selected]=\"area == selectedarea\">{{area}}</option>\n            </select>\t\t\n          </div>\n\n          <div class=\"form-group list-form\">\n            <label>Municipality <span style=\"color:red;\">*</span></label><br>\n            <input type=\"text\" name=\"municipality\" placeholder=\"Municipality\" class=\"form-control\" [(ngModel)]=\"listing.municipality\" id=\"municipality\">\t\t\n          </div>\n          \n            \n          <div class=\"form-group list-form\">\n            <label>Province/State</label><br>\n            <input type=\"text\" name=\"state\" placeholder=\"State\" class=\"form-control\" [(ngModel)]=\"listing.state\">\t\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Postal Code/Zip <span style=\"color:red;\">*</span></label><br>\n            <input type=\"text\" name=\"zip\" placeholder=\"Zip\" class=\"form-control\" [(ngModel)]=\"listing.zip\" id=\"zip\">\t\t\n          </div>\n\n          <div class=\"form-group list-form\">\n            <label>Country <span style=\"color:red;\">*</span></label><br>\n            <input type=\"text\" name=\"country\" placeholder=\"Canada\"  class=\"form-control\" [(ngModel)]=\"listing.country\" id=\"country\">\t\t\n          </div>\n\n          \n          <div class=\"form-group list-form\">\n            <label>Layout Name</label><br>\n            <input type=\"text\" name=\"layout_name\" placeholder=\"playground\"  class=\"form-control\" [(ngModel)]=\"listing.layout_name\">\t\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Developer Name</label><br>\n            <input type=\"text\" name=\"developer\" placeholder=\"developer name\" class=\"form-control\" [(ngModel)]=\"listing.developer\">\t\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Nearest Intersection</label><br>\n            <input type=\"text\" name=\"nearest_intersection\" placeholder=\"Younge and stells\" class=\"form-control\" [(ngModel)]=\"listing.nearest_intersection\">\t\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Community</label><br>\n            <input type=\"text\" name=\"community\" placeholder=\"Ex. Unionville\" class=\"form-control\" [(ngModel)]=\"listing.community\">\t\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Property Type</label><br>\n            <select (change)=\"selectPropertyType($event)\">\n                <optgroup disabled hidden></optgroup>\n              <option  value=\"\" hidden>Select Property Type</option>\n              <option *ngFor=\"let ptype of properties_type\" [ngValue]=\"ptype\" [selected]=\"ptype == property_type\">{{ptype}}</option>\n              \n            </select>\n          </div>\n          <div class=\"form-group list-form\">\n            <label> Category</label><br>\n            <input type=\"text\" name=\"category\" placeholder=\"Category\" class=\"form-control\" [(ngModel)]=\"listing.category\">\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Price<span style=\"font-size: 14px;\"></span> <span style=\"color:red;\">*</span></label><br>\n            <input type=\"text\" name=\"estimated_price\" placeholder=\"$14500 to $170,000\"  class=\"form-control\" [(ngModel)]=\"listing.estimated_price\" id=\"estimated_price\">\t\t\n            \n          </div>\n          <div class=\"form-group list-form\">\n            <label>Size <span style=\"font-size: 14px;\">(Sq.Ft.)</span> <span style=\"color:red;\">*</span></label><br>\n            <input type=\"text\" name=\"total_area\" placeholder=\"5000\" class=\"form-control\" [(ngModel)]=\"listing.total_area\" id=\"total_area\">\t\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Balcony <span style=\"font-size: 14px;\">(Sq.Ft.)</span></label><br>\n            <input type=\"text\" name=\"balcony_size\" placeholder=\"30\" class=\"form-control\" [(ngModel)]=\"listing.balcony_size\">\t\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Floors</label><br>\n            <select (change)=\"selectFloors($event)\">\n                <optgroup disabled hidden></optgroup>\n              <option  value=\"\" hidden>Select Floors</option>\n              <option *ngFor=\"let floor of floors\" [ngValue]=\"floor\" [selected]=\"floor == selectedFloor\">{{floor}}</option>\n            </select>\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Bedrooms</label><br>\n            <select (change)=\"selectBedromms($event)\">\n                <optgroup disabled hidden></optgroup>\n              <option  value=\"\" hidden>Select Bedrooms</option>\n              <option *ngFor=\"let bedroom of bedrooms\" [ngValue]=\"bedroom\" [selected]=\"bedroom == selectedBedroom\">{{bedroom}}</option>\n            </select>\n           \n          </div>\n          <div class=\"form-group list-form\">\n            <label>Washrooms</label><br>\n            <select (change)=\"selectWashrooms($event)\">\n                <optgroup disabled hidden></optgroup>\n              <option  value=\"\" hidden>Select Washrooms</option> \n              <option *ngFor=\"let washroom of washrooms\" [ngValue]=\"washroom\" [selected]=\"washroom == selectedWashroom\">{{washroom}}</option>\n            </select>\n          </div>\n          <div class=\"form-group list-form\">\n              <label>Stores</label><br>\n              <select (change)=\"selectStores($event)\">\n                  <optgroup disabled hidden></optgroup>\n                <option  value=\"\" hidden>Select Stores</option>\n                <option *ngFor=\"let store of stores\" [ngValue]=\"store\" [selected]=\"store == selectedStore\">{{store}}</option>\n              </select>\n            </div>\n          <div class=\"form-group list-form\">\n            <label>Contact Name</label><br>\n            <input type=\"text\" name=\"contact_name\" placeholder=\"contact name\"  class=\"form-control\" [(ngModel)]=\"listing.contact_name\">\t\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Contact Email</label><br>\n            <input type=\"email\" name=\"email\" placeholder=\"Email\" class=\"form-control\" [(ngModel)]=\"listing.contact_email\">\t\t\n          </div>\n          <div class=\"form-group list-form\">\n            <label>Contact Phone</label><br>\n            <input type=\"text\" name=\"contact_phone\" placeholder=\"phone number\" class=\"form-control\" [(ngModel)]=\"listing.contact_phone\">\t\t\n          </div>\n  \n          <div class=\"form-group list-form\">\n            <label>Construction Status</label><br>\n            <input type=\"text\" name=\"construction_status\" placeholder=\"completed\" class=\"form-control\" [(ngModel)]=\"listing.construction_status\">\t\t\n          </div>\n  \n          <div class=\"form-group list-form\">\n            <label>Completion Date</label><br>\t\t\n            <input type=\"date\" name=\"completion_date\"  placeholder=\"Ex:2019\"  class=\"form-control\" [(ngModel)]=\"listing.completion_date\" min=\"{{date | date: 'yyy-MM-dd'}}\">\n          </div>\n  \n          <div class=\"form-group list-form\">\n            <label>Sales Started</label><br>\n            <input type=\"text\" name=\"sales_started\" placeholder=\"Ex:Winter\"  class=\"form-control\" [(ngModel)]=\"listing.sales_started\">\t\t\n          </div>\n  \n          <div class=\"form-group list-form\">\n            <label>Ownership</label><br>\n            <input type=\"text\" name=\"ownership\" placeholder=\"Ex:Freehold\" class=\"form-control\" [(ngModel)]=\"listing.ownership\">\t\t\n          </div>\n  \n          <div class=\"form-group list-form\">\n            <br>\n            <label>No. Units</label><br>\n            <input type=\"text\" name=\"units_no\" placeholder=\"Ex:52\" class=\"form-control\" [(ngModel)]=\"listing.units_no\">\t\t\n          </div>\n          \n          <div class=\"form-group list-form desc\">\n            <label>Description <span style=\"color:red;\">*</span></label><br>\n            <textarea placeholder=\"Add a discription for this propert\" name=\"remarks_for_clients\" rows=\"5\"  class=\"form-control\" [(ngModel)]=\"listing.remarks_for_clients\" id=\"remarks_for_clients\"></textarea>\t\t\n          </div>\n\n          <br><br><br>\n          <!--building-image-->\n          <div class=\"row\">\n            <div class=\"form-group col-sm-4\">\n              <label>Building Images (Limit to 1):</label>\n              <label for=\"file1\" class=\"trigger\" *ngIf=\"!imageBuildingSrc\">  \n                <img src=\"../assets/img/files/bulding.png\"  style=\"padding: 15% 30% 4%;\">\n                <p style=\"padding: 0px 20%;\">choose building image</p>\n              </label>  \n              <label for=\"file1\" *ngIf=\"imageBuildingSrc\" class=\"trigger1\">\n                <img [attr.src]=\"imageBuildingSrc\"  style=\"width:100%;height:180px;\"/>\n              </label>\n              <input type=\"file\" id=\"file1\" name=\"image\" accept=\"image/x-png,image/jpeg\" style=\"display: none;\" (change)=\"handleBuildingImageChange($event)\">\n            </div>\n            <div class=\"form-group col-sm-4\">\n              <label>Videos (Limit to 1):</label><br>\n              <label class=\"trigger\" for=\"sile2\">\n                <img src=\"../assets/img/files/video.png\" style=\"padding: 15% 30% 4%;\">\n                <a *ngIf=\"video_name\" style=\"padding: 0px 20%;\" href=\"{{video_name}}\" target=\"_blank\">View Previous Video </a>\n                <p *ngIf=\"video\" style=\"padding: 0px 20%;\">{{video.name}}</p>\n                <p style=\"padding: 0px 20%;\" *ngIf=\"!video && !video_name\" >choose a video</p>\n              </label>\n              <input type=\"file\" id=\"sile2\" name=\"\" style=\"display: none;\" (change)=\"uploadVideo($event)\">\n            </div>\n\n            <div class=\"form-group col-sm-4\">\n              <label>Upload your PDF Listing (Limit to 1):</label><br>\n              <label class=\"trigger\" for=\"xile2\">\n                <img src=\"../assets/img/files/pdf.png\" id=\"xile1\" style=\"padding: 15% 30% 4%;\">\n                <a *ngIf=\"pdf_name\" style=\"padding: 0px 20%;\" href=\"{{pdf_name}}\" target=\"_blank\">View Previous file</a>\n                <p *ngIf=\"file\" style=\"padding: 0px 20%;\">{{file.name}}</p>\n                <p style=\"padding: 0px 20%;\" *ngIf=\"!file && !pdf_name\">choose a PDF</p>\n              </label>\n              <input type=\"file\" id=\"xile2\" name=\"\" style=\"display: none;\" (change)=\"uploadPropertyDoc($event)\">\n              <br> \n              <small style=\"color:red;\">{{this.message}}</small>\n            </div>\n            \n          </div>\n         \n          <br><br>\n          <div class=\"row\">\n            <div class=\"form-group col-lg-12\">\n              <label>Property Images (Limit to 4:</label><br>\n              <div  *ngIf=\"old_images?.length > 0\">\n                <div class=\"col-sm-3\" *ngFor=\"let image of old_images\">\n                  <img  class=\"imageThumb\" src=\"{{image}}\"  style=\"width:100%;height:180px\"><br/>\n                  <span class=\"remove\" (click)=\"removefromOldArray(image)\">Remove image</span>\n                </div>\n              </div>\n              <div  *ngIf=\"urls?.length > 0\">\n                <div class=\"col-sm-3\" *ngFor=\"let url of urls\">\n                  <img  class=\"imageThumb\" [attr.src]=\"url\"  style=\"width:100%;height:180px\"><br/>\n                  <span class=\"remove\" (click)=\"removeSelectedImage(url)\">Remove image</span>\n                </div>\n              </div>  \n              <input type=\"file\" id=\"vile2\" name=\"\" multiple (change)=\"handlePropertyImageChange($event)\">\n            </div>\n          </div>\n          <!--row-->\n          <div class=\"form-group list-form\">\n            <input type=\"submit\" [disabled]='btnDisabled' name=\"\" value=\"SUBMIT\" style=\"background:#00BB35;color: white;font-weight: 550;\">\t\t\n          </div>\n        </form>\n      </div>\n      <br><br>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/invitation/invitation.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/invitation/invitation.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid second-listing\">\n        <div class=\"listing-1\">\n          <div id=\"after-add\" *ngIf=\"(subscribe ? subscribe.subscription_total_members > 1 : '') && (subscribe ? subscribe.subscribed_emails==null : '')\">\n            <form role=\"form\"  [formGroup]=\"inviteForm\" (ngSubmit)=\"addListing()\">\n              <div formArrayName=\"users\" *ngFor=\"let user of inviteForm.controls.users.controls; let i = index;\">\n                <div [formGroupName]=\"i\">\n                  <div class=\"row\" style=\"margin-bottom:5%;\">\n                    <div class=\"col-sm-4 col-md-4\">\n                      <label>Brokerage Name</label>\n                      <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Brokerage Name\"  formControlName=\"brokerage_name\" id=\"broker{{i}}\">\n                    </div> \n                    <div class=\"col-sm-4 col-md-4\">\n                      <label>User Name</label>\n                      <input type=\"text\" name=\"\" class=\"form-control\" formControlName=\"username\" placeholder=\"Full Name\"  id=\"username{{i}}\">\n                    </div> \n                    <div class=\"col-sm-4 col-md-4\">\n                      <label>Email</label>\n                      <input type=\"email\" name=\"\" class=\"form-control\"  formControlName=\"email\" placeholder=\"Email\"  id=\"email{{i}}\">\n                    </div>\n                  </div>    \n                </div>\n              </div> \n              <input type=\"submit\" name=\"\" value=\"Submit\" style=\"background:#DC0000;color: white;font-weight: 550;width:10% !important;text-align:pull-right;\">\t\n            </form>\n          </div>\n      \n          <div *ngIf=\"!subscribe || subscribed_users?.length == 0\">\n            <div style=\"margin-top:8%;text-align: center;\" >\n              <img src=\"../assets/img/no_subscription_user.png\" style=\"height:50vh;\">\n              <br><br>\n              <p>You have not pay for any Other Agent you cant't invite any User.</p>\n            </div>  \n          </div>\n      \n          <div class=\"row\"  *ngIf=\"subscribed_users?.length>0\" style=\"margin-top:160px;\">\n            <div class=\"table-container\">\n              <table class=\"table table-condensed\">\n                <thead>\n                  <tr>\n                    <th>Image</th>\n                    <th>Member Name</th>\n                    <th>Email</th>\n                    <th>Contact Number</th>\n                    <th>Role</th>  \n                  </tr>\n                </thead>  \n                <tbody>\n                    <tr *ngFor=\"let user of subscribed_users\">\n                        <td>\n                          <img src=\"{{user.image || '../assets/img/profile.png'}}\"  style=\"width:40px;height:40px\"/>\n                        </td>\n                        <td>\n                            {{user.fname}} {{user.lname}}\n                        </td>\n                        <td>\n                            {{user.email}}\n                        </td>\n                        <td>\n                            {{user.contact ? user.contact : 'Not Available'}}\n                        </td>\n                        <td>\n                            {{user.role==\"customer\" ? 'Client' : 'Agent'}}\n                        </td>\n                    </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <br><br>\n        </div>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/link-multiple-listing/link-multiple-listing.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/link-multiple-listing/link-multiple-listing.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"agent\">\n  <div class=\"container-fluid\">\n    <div class=\"col-md-7\">\n      <div class=\"invite-section\">\n        <h1>Select Criteria</h1>\n        <p>Select criteria of listings presented simpily to prospective </p>\n        <div class=\"row\" id=\"panel\">\n          <div class=\"col-md-4 col-lg-5\">\n            <a class=\"btn btn-info btn-block\" [ngClass]=\"{'active-btn': property_for=='SALE'}\" (click)=\"onChangePropertyFor('SALE')\">SALE</a>\n            <br>\n          </div>\n          <div class=\"col-md-4 col-lg-5\">\n            <a class=\"btn btn-info btn-block active-btn\" [ngClass]=\"{'active-btn': property_for=='LEASE'}\" (click)=\"onChangePropertyFor('LEASE')\">LEASE</a>\n          </div>\n        </div>\n        <div class=\"row\" id=\"inside-panel\" style=\"display: block;\">\n          <br>\n          <div class=\"col-md-4 col-lg-4\">\n            <div class=\"custom-radios\">\n              <div class=\"msg\"><input id=\"color-3\" name=\"color\" type=\"radio\" value=\"COMMERCIAL\" (change)=\"SelectPropertyType($event,'')\">\n                <label for=\"color-3\"></label>\n                <span>COMMERCIAL</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-lg-4\">\n            <div class=\"custom-radios\">\n              \n              <div class=\"msg\">\n                <input type=\"radio\" id=\"radio\" name=\"color\" value=\"CONDO\" (change)=\"SelectPropertyType($event,'')\">\n                <label for=\"radio\"></label>\n                <span> RESIDENTIAL CONDO</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-lg-4\">\n            <div class=\"custom-radios\">\n              <div class=\"msg\">\n                <input id=\"color-1\" name=\"color\" type=\"radio\" value=\"RESIDENTIAL\" (change)=\"SelectPropertyType($event,'')\">\n                <label for=\"color-1\"></label>\n                <span>RESIDENTIAL FREEHOLD</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\" style=\"margin-top:8%;\">\n           \n            <form novalidate=\"\" class=\"ng-untouched ng-pristine ng-valid\">\n              \n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\">\n                  <!-- <div *ngIf=\"areas?.length > 0\"> -->\n                    <ng-multiselect-dropdown-angular7\n                      [placeholder]=\"'Select Area'\"\n                      [data]=\"areas?.length > 0 ? areas : ''\"\n                      [(ngModel)]=\"selected_area\"\n                      [settings]=\"dropdownSettings\"\n                      (onSelect)=\"onAreaSelect($event)\"\n                      (onSelectAll)=\"onSelectAllArea($event)\"\n                      (onDeSelect)=\"onAreaDeSelect($event)\"\n                      (onDeSelectAll)=\"onAreaDeSelectAll($event)\"\n                      [ngModelOptions]=\"{standalone: true}\"\n                    >\n                    </ng-multiselect-dropdown-angular7>\n                  <!-- </div> -->\n                </div>\n               \n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\">\n                  <!-- <div *ngIf=\"municipalities?.length > 0\"> -->\n                    <ng-multiselect-dropdown-angular7\n                      [placeholder]=\"'Select Municipality'\"\n                      [data]=\"municipalities?.length > 0 ? municipalities : ''\"\n                      [(ngModel)]=\"municipality\"\n                      [settings]=\"dropdownSettings\"\n                      (onSelect)=\"onItemSelect($event)\"\n                      (onSelectAll)=\"onSelectAllItem($event)\"\n                      (onDeSelect)=\"onItemDeSelect($event)\"\n                      (onDeSelectAll)=\"onItemDeSelectAll($event)\"\n                      [ngModelOptions]=\"{standalone: true}\"\n                    >\n                    </ng-multiselect-dropdown-angular7>\n                  <!-- </div>   -->\n                </div>\n\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\" *ngIf=\"show_lease_price\">\n                  <select class=\"form-control\" (change)=\"onChangeLowerPrice($event)\">\n                    <option value=\"\" hidden >Lower Price Range</option>\n                    <option value=\"0\">0</option>\n                    <option value=\"100\" *ngIf=\"selected_upper_price >= 100\">100</option>\n                    <option value=\"500\" *ngIf=\"selected_upper_price >= 500\">500</option>\n                    <option value=\"1000\" *ngIf=\"selected_upper_price >= 1000\">1,000</option>\n                    <option value=\"1500\" *ngIf=\"selected_upper_price >= 1500\">1,500</option>\n                    <option value=\"2000\" *ngIf=\"selected_upper_price >= 2000\">2,000</option>\n                    <option value=\"3000\" *ngIf=\"selected_upper_price >= 3000\">3,000</option>\n                    <option value=\"4000\" *ngIf=\"selected_upper_price >= 4000\">4,000</option>\n                    <option value=\"5000\" *ngIf=\"selected_upper_price >= 5000\">5,000</option>\n                    <option value=\"6000\" *ngIf=\"selected_upper_price >= 6000\">6,000</option>    \n                    <option value=\"7000\" *ngIf=\"selected_upper_price >= 7000\">7,000</option>         \n                    <option value=\"8000\" *ngIf=\"selected_upper_price >= 8000\">8,000</option>\n                    <option value=\"99999\" *ngIf=\"selected_upper_price >= 99999\">99,999</option>\n                  </select>\t\n                </div>\n\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\" *ngIf=\"show_lease_price\">\n                  <select class=\"form-control\" (change)=\"onChangeUpperPrice($event)\">\n                    <option value=\"\" hidden >Upper Price Range</option>\n                    <option value=\"1000000\">Unlimited</option>\n                    <option value=\"100\" *ngIf=\"selected_lower_price <= 100\">100</option>\n                    <option value=\"500\" *ngIf=\"selected_lower_price <= 500\">500</option>\n                    <option value=\"1000\" *ngIf=\"selected_lower_price <= 1000\">1,000</option>\n                    <option value=\"1500\" *ngIf=\"selected_lower_price <= 1500\">1,500</option>\n                    <option value=\"2000\" *ngIf=\"selected_lower_price <= 2000\">2,000</option>\n                    <option value=\"3000\" *ngIf=\"selected_lower_price <= 3000\">3,000</option>\n                    <option value=\"4000\" *ngIf=\"selected_lower_price <= 4000\">4,000</option>\n                    <option value=\"5000\" *ngIf=\"selected_lower_price <= 5000\">5,000</option>\n                    <option value=\"6000\" *ngIf=\"selected_lower_price <= 6000\">6,000</option>    \n                    <option value=\"7000\" *ngIf=\"selected_lower_price <= 7000\">7,000</option>         \n                    <option value=\"8000\" *ngIf=\"selected_lower_price <= 8000\">8,000</option>\n                    <option value=\"99999\" *ngIf=\"selected_lower_price <= 99999\">99,999</option>\n                  </select>\n                </div>\n\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\" *ngIf=\"show_sale_price\">\n                  <select class=\"form-control\" (change)=\"onChangeLowerPrice($event)\">\n                    <option value=\"\" hidden >Lower Price Range</option> \n                    <option value=\"0\">0</option>\n                    <option value=\"25000\" *ngIf=\"selected_upper_price >= 25000\">25,000</option>\n                    <option value=\"50000\" *ngIf=\"selected_upper_price >= 50000\">50,000</option>\n                    <option value=\"75000\" *ngIf=\"selected_upper_price >= 75000\">75,000</option>\n                    <option value=\"100000\" *ngIf=\"selected_upper_price >= 100000\">100,000</option>\n                    <option value=\"125000\"  *ngIf=\"selected_upper_price>=125000\">125,000</option>\n                    <option value=\"150000\"  *ngIf=\"selected_upper_price>=150000\">150,000</option>    \n                    <option value=\"175000\"  *ngIf=\"selected_upper_price>=175000\">175,000</option>\n                    <option value=\"200000\"  *ngIf=\"selected_upper_price>=200000\">200,000</option>\n                    <option value=\"250000\"  *ngIf=\"selected_upper_price>=250000\" >250,000</option>\n                    <option value=\"300000\"  *ngIf=\"selected_upper_price>=300000\">300,000</option>\n                    <option value=\"325000\"  *ngIf=\"selected_upper_price>=325000\">325,000</option>\n                    <option value=\"375000\"  *ngIf=\"selected_upper_price>=375000\">375,000</option>\n                    <option value=\"400000\"  *ngIf=\"selected_upper_price>=400000\">400,000</option>\n                    <option value=\"450000\"  *ngIf=\"selected_upper_price>=450000\">450,000</option>\n                    <option value=\"550000\"  *ngIf=\"selected_upper_price>=550000\">500,000</option>\n                    <option value=\"600000\"  *ngIf=\"selected_upper_price>=600000\">600,000</option>\n                    <option value=\"650000\"  *ngIf=\"selected_upper_price>=650000\">650,000</option>\n                    <option value=\"700000\"  *ngIf=\"selected_upper_price>=700000\">700,000</option>\n                    <option value=\"750000\"  *ngIf=\"selected_upper_price>=750000\">750,000</option>\n                    <option value=\"800000\"  *ngIf=\"selected_upper_price>=800000\">800,000</option>\n                    <option value=\"850000\"  *ngIf=\"selected_upper_price>=850000\">850,000</option>\n                    <option value=\"900000\"  *ngIf=\"selected_upper_price>=900000\">900,000</option>\n                    <option value=\"950000\"  *ngIf=\"selected_upper_price>=950000\">950,000</option>\n                    <option value=\"1000000\"  *ngIf=\"selected_upper_price>=1000000\">1,000,000</option>\n                    <option value=\"1200000\"  *ngIf=\"selected_upper_price>=1200000\">1,200,000</option>\n                    <option value=\"1300000\"  *ngIf=\"selected_upper_price>=1300000\">1,300,000</option>\n                    <option value=\"1400000\"  *ngIf=\"selected_upper_price>=1400000\">1,400,000</option>\n                    <option value=\"1500000\"  *ngIf=\"selected_upper_price>=1500000\">1,500,000</option>\n                    <option value=\"1600000\"  *ngIf=\"selected_upper_price>=1600000\">1,600,000</option>\n                    <option value=\"1700000\"  *ngIf=\"selected_upper_price>=1700000\">1,700,000</option>\n                    <option value=\"1800000\"  *ngIf=\"selected_upper_price>=1800000\">1,800,000</option>\n                    <option value=\"1900000\"  *ngIf=\"selected_upper_price>=1900000\">1,900,000</option>\n                    <option value=\"2000000\"  *ngIf=\"selected_upper_price>=2000000\">2,000,000</option>\n                    <option value=\"25000000\"  *ngIf=\"selected_upper_price>=25000000\">2,500,000</option>\n                    <option value=\"3000000\"  *ngIf=\"selected_upper_price>=3000000\">3,000,000</option>\n                    <option value=\"4000000\"  *ngIf=\"selected_upper_price>=4000000\">4,000,000</option>\n                    <option value=\"5000000\"  *ngIf=\"selected_upper_price>=5000000\">5,000,000</option>\n                    <option value=\"7500000\"  *ngIf=\"selected_upper_price>=7500000\">7,500,000</option>\n                    <option value=\"10000000\"  *ngIf=\"selected_upper_price>=10000000\">10,000,000</option>\n                  </select>\t\n                </div>\n\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\" *ngIf=\"show_sale_price\">\n                  <select class=\"form-control\" (change)=\"onChangeUpperPrice($event)\"> \n                    <option value=\"\" hidden >Upper Price Range</option>\n                    <option value=\"100000000\">Unlimited</option>\n                    <option value=\"25000\" *ngIf=\"selected_lower_price <= 25000\">25,000</option>\n                    <option value=\"50000\" *ngIf=\"selected_lower_price <= 50000\">50,000</option>\n                    <option value=\"75000\" *ngIf=\"selected_lower_price <= 75000\">75,000</option>\n                    <option value=\"100000\" *ngIf=\"selected_lower_price <= 100000\">100,000</option>\n                    <option value=\"125000\"  *ngIf=\"selected_lower_price<=125000\">125,000</option>\n                    <option value=\"150000\"  *ngIf=\"selected_lower_price<=150000\">150,000</option>    \n                    <option value=\"175000\"  *ngIf=\"selected_lower_price<=175000\">175,000</option>\n                    <option value=\"200000\"  *ngIf=\"selected_lower_price<=200000\">200,000</option>\n                    <option value=\"250000\"  *ngIf=\"selected_lower_price<=250000\" >250,000</option>\n                    <option value=\"300000\"  *ngIf=\"selected_lower_price<=300000\">300,000</option>\n                    <option value=\"325000\"  *ngIf=\"selected_lower_price<=325000\">325,000</option>\n                    <option value=\"375000\"  *ngIf=\"selected_lower_price<=375000\">375,000</option>\n                    <option value=\"400000\"  *ngIf=\"selected_lower_price<=400000\">400,000</option>\n                    <option value=\"450000\"  *ngIf=\"selected_lower_price<=450000\">450,000</option>\n                    <option value=\"550000\"  *ngIf=\"selected_lower_price<=550000\">500,000</option>\n                    <option value=\"600000\"  *ngIf=\"selected_lower_price<=600000\">600,000</option>\n                    <option value=\"650000\"  *ngIf=\"selected_lower_price<=650000\">650,000</option>\n                    <option value=\"700000\"  *ngIf=\"selected_lower_price<=700000\">700,000</option>\n                    <option value=\"750000\"  *ngIf=\"selected_lower_price<=750000\">750,000</option>\n                    <option value=\"800000\"  *ngIf=\"selected_lower_price<=800000\">800,000</option>\n                    <option value=\"850000\"  *ngIf=\"selected_lower_price<=850000\">850,000</option>\n                    <option value=\"900000\"  *ngIf=\"selected_lower_price<=900000\">900,000</option>\n                    <option value=\"950000\"  *ngIf=\"selected_lower_price<=950000\">950,000</option>\n                    <option value=\"1000000\"  *ngIf=\"selected_lower_price<=1000000\">1,000,000</option>\n                    <option value=\"1200000\"  *ngIf=\"selected_lower_price<=1200000\">1,200,000</option>\n                    <option value=\"1300000\"  *ngIf=\"selected_lower_price<=1300000\">1,300,000</option>\n                    <option value=\"1400000\"  *ngIf=\"selected_lower_price<=1400000\">1,400,000</option>\n                    <option value=\"1500000\"  *ngIf=\"selected_lower_price<=1500000\">1,500,000</option>\n                    <option value=\"1600000\"  *ngIf=\"selected_lower_price<=1600000\">1,600,000</option>\n                    <option value=\"1700000\"  *ngIf=\"selected_lower_price<=1700000\">1,700,000</option>\n                    <option value=\"1800000\"  *ngIf=\"selected_lower_price<=1800000\">1,800,000</option>\n                    <option value=\"1900000\"  *ngIf=\"selected_lower_price<=1900000\">1,900,000</option>\n                    <option value=\"2000000\"  *ngIf=\"selected_lower_price<=2000000\">2,000,000</option>\n                    <option value=\"25000000\"  *ngIf=\"selected_lower_price<=25000000\">2,500,000</option>\n                    <option value=\"3000000\"  *ngIf=\"selected_lower_price<=3000000\">3,000,000</option>\n                    <option value=\"4000000\"  *ngIf=\"selected_lower_price<=4000000\">4,000,000</option>\n                    <option value=\"5000000\"  *ngIf=\"selected_lower_price<=5000000\">5,000,000</option>\n                    <option value=\"7500000\"  *ngIf=\"selected_lower_price<=7500000\">7,500,000</option>\n                    <option value=\"10000000\"  *ngIf=\"selected_lower_price<=10000000\">10,000,000</option>\n                  </select>\t\n                  \n                </div>\n\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\">\n                  <!-- <select class=\"form-control\" (change)=\"onChangeCategory($event)\">\n                    <option value=\"\" hidden >Select Property Type</option>\n                    <option [value]=\"pro\" *ngFor=\"let pro of property_types\" [selected]=\"pro == category\">{{pro}}</option>\n                  </select>\t -->\n                  <ng-multiselect-dropdown-angular7\n                    [placeholder]=\"'Select Property Type'\"\n                    [data]=\"property_types\"\n                    [(ngModel)]=\"category\"\n                    [settings]=\"dropdownSettings\"\n                    (onSelect)=\"onItemSelect($event)\"\n                    (onSelectAll)=\"onSelectAllItem($event)\"\n                    (onDeSelect)=\"onItemDeSelect($event)\"\n                    (onDeSelectAll)=\"onItemDeSelectAll($event)\"\n                    [ngModelOptions]=\"{standalone: true}\"\n                  >\n                  </ng-multiselect-dropdown-angular7>\n                </div>\n\n\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\" *ngIf=\"show_bedrooms\">\n                  <select class=\"form-control\" (change)=\"onChangeBedroom($event)\">\n                    <option value=\"\" hidden ># Bedrooms</option>\n                    <option *ngFor=\"let bedroom of bedrooms\" [ngValue]=\"bedroom\" [selected]=\"bedroom == selected_bedroom\">{{bedroom}}</option>    \n                  </select>\t\n                </div>\n\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\" *ngIf=\"show_dens\">\n                  <select class=\"form-control\" (change)=\"onChangeDen($event)\">\n                    <option value=\"\" hidden ># Dens</option>\n                    <option *ngFor=\"let den of dens\" [ngValue]=\"den\" [selected]=\"den == selected_den\">{{den}}</option>    \n                  </select>\t\n                </div>\n                \n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\" *ngIf=\"show_size\">\n                  <select class=\"form-control\" (change)=\"onChangeLowerSize($event)\">\n                    <option value=\"\" hidden >Lower Size Range</option>\n                    <option value=\"0\">0</option>\n                    <option value=\"100\" *ngIf=\"upper_selected_size >= 100\">100</option>\n                    <option value=\"500\" *ngIf=\"upper_selected_size >= 500\">500</option>\n                    <option value=\"1000\" *ngIf=\"upper_selected_size >= 1000\">1,000</option>\n                    <option value=\"1500\" *ngIf=\"upper_selected_size >= 1500\">1,500</option>\n                    <option value=\"2000\" *ngIf=\"upper_selected_size >= 2000\">2,000</option>\n                    <option value=\"2500\" *ngIf=\"upper_selected_size >= 2500\">2,500</option>\n                    <option value=\"3000\" *ngIf=\"upper_selected_size >= 3000\">3,000</option>\n                    <option value=\"3500\" *ngIf=\"upper_selected_size >= 3500\">3,500</option>\n                    <option value=\"4000\" *ngIf=\"upper_selected_size >= 4000\">4,000</option>\n                    <option value=\"4500\" *ngIf=\"upper_selected_size >= 4500\">4,500</option>\n                    <option value=\"5000\" *ngIf=\"upper_selected_size >= 5000\">5,000</option>\n                    <option value=\"5500\" *ngIf=\"upper_selected_size >= 5500\">5,500</option>\n                    <option value=\"6000\" *ngIf=\"upper_selected_size >= 6000\">6,000</option>    \n                    <option value=\"7000\" *ngIf=\"upper_selected_size >= 7000\">7,000</option>         \n                    <option value=\"8000\" *ngIf=\"upper_selected_size >= 8000\">8,000</option>\n                    <option value=\"8000\" *ngIf=\"upper_selected_size >= 9000\">9,000</option>\n                    <option value=\"10000\" *ngIf=\"upper_selected_size >= 10000\">10,000</option>\n                    <option value=\"30000\" *ngIf=\"upper_selected_size >= 30000\">30,000</option>\n                    <option value=\"50000\" *ngIf=\"upper_selected_size >= 50000\">50,000</option>\n                    <option value=\"70000\" *ngIf=\"upper_selected_size >= 70000\">70,000</option>\n                    <option value=\"100000\" *ngIf=\"upper_selected_size >= 100000\">100,000</option>\n                  </select>\n                </div>\n\n                <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\" *ngIf=\"show_size\">\n                  <select class=\"form-control\" (change)=\"onChangeUpperSize($event)\">\n                    <option value=\"\" hidden >Upper Size Range</option>\n                    <option value=\"100000\">Unlimited</option>\n                    <option value=\"100\" *ngIf=\"lower_selected_size <= 100\">100</option>\n                    <option value=\"500\" *ngIf=\"lower_selected_size <= 500\">500</option>\n                    <option value=\"1000\" *ngIf=\"lower_selected_size <= 1000\">1,000</option>\n                    <option value=\"1500\" *ngIf=\"lower_selected_size <= 1500\">1,500</option>\n                    <option value=\"2000\" *ngIf=\"lower_selected_size <= 2000\">2,000</option>\n                    <option value=\"2500\" *ngIf=\"lower_selected_size <= 2500\">2,500</option>\n                    <option value=\"3000\" *ngIf=\"lower_selected_size <= 3000\">3,000</option>\n                    <option value=\"3500\" *ngIf=\"lower_selected_size <= 3500\">3,500</option>\n                    <option value=\"4000\" *ngIf=\"lower_selected_size <= 4000\">4,000</option>\n                    <option value=\"4500\" *ngIf=\"lower_selected_size <= 4500\">4,500</option>\n                    <option value=\"5000\" *ngIf=\"lower_selected_size <= 5000\">5,000</option>\n                    <option value=\"5500\" *ngIf=\"lower_selected_size <= 5500\">5,500</option>\n                    <option value=\"6000\" *ngIf=\"lower_selected_size <= 6000\">6,000</option>    \n                    <option value=\"7000\" *ngIf=\"lower_selected_size <= 7000\">7,000</option>         \n                    <option value=\"8000\" *ngIf=\"lower_selected_size <= 8000\">8,000</option>\n                    <option value=\"8000\" *ngIf=\"lower_selected_size <= 9000\">9,000</option>\n                    <option value=\"10000\" *ngIf=\"lower_selected_size <= 10000\">10,000</option>\n                    <option value=\"30000\" *ngIf=\"lower_selected_size <= 30000\">30,000</option>\n                    <option value=\"50000\" *ngIf=\"lower_selected_size <= 50000\">50,000</option>\n                    <option value=\"70000\" *ngIf=\"lower_selected_size <= 70000\">70,000</option>\n                    <option value=\"100000\" *ngIf=\"lower_selected_size <= 70000\">100,000</option>\n                  </select>\n                </div>\n              \n              </form>\n          </div>\n          <div class=\"row\">\n            <button class=\"btn btn-primary pull-right\" type=\"submit\" name=\"\" style=\"border-radius:0;\" (click)=\"generateAdvertisement()\">Submit</button>\t\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-5\">\n      <div *ngIf=\"adds?.length>0\">\n        <h4>Generated Advertisement Links</h4>\n        <div class=\"search-results\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"50\"\n          (scrolled)=\"onScroll()\">\n          <table class=\"table table-striped\">\n            <tbody *ngFor=\"let add of adds\">\n              <tr>\n                <td>\n                  <div style=\"word-break: break-all;\">\n                    <p>#{{add.id}}-{{add.property_type}}, {{add.property_for}}- ${{add.lower_price}} to ${{add.upper_price}}</p>\n                  </div>\n                </td>\n                <td>\n                  <div style=\"word-break: break-all;\">\n                    <a class=\"btn btn-primary btn-xs pull-right\" href=\"javascript:;\" (click)=\"addLink(add.id)\"> Copy link</a>\n                  </div>\n\n                </td>\n              </tr>\n\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div class=\"col-lg-12 no-adds\" *ngIf=\"adds?.length==0\" >\n        <img src=\"../../../assets/img/notimg/no_ads.png\" width=\"50%\">\n        <hr>\n        <p style=\"color: #979797\"> You did not created any listing link yet.<br>\n           Generate your listing link by adding criteria in comma saperated <br>\n           like Sale, Lease, Commercial, etc.</p>\n           <hr>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/main-dashboard/main-dashboard.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/main-dashboard/main-dashboard.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div  style=\"background: #ffff;z-index: 1000;\">\n    <nav class=\"navbar\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\" style=\"background-color: white;\">\n            <span class=\"sr-only\">Toggle-Navigation</span>\n            <span class=\"icon-bar\" style=\"background-color: black;\"></span>\n            <span class=\"icon-bar\" style=\"background-color: black;\"></span>\n            <span class=\"icon-bar\" style=\"background-color: black;\"></span>\n          </button>\n          <a  href=\"javascript:;\" class=\"navbar-brand\">\n            <div> <!-- *ngIf=\"loggedInUserDetails.firm_logo\"-->\n              <img (error)=\"'../assets/img/home/logo.png'\" [src]=\"firm_logo || '../assets/img/home/logo.png'\" style=\"width:165px;height:50px;\">\n              <div style=\"position:absolute;top:5px;left:200px;\">\n                <h2 style=\"color:black;font-weight:bold;font-size:18px;\">{{brokerage_name}}</h2>\n                <p style=\"color:gray;font-size:12px;margin-top:-8px;\">{{firm_title}}</p>\n              </div>\n            </div>\n          </a>\n        </div> <!--navbar -header-->\n  \n        <div id=\"navbar\" class=\"collapse navbar-collapse navbar-right\">\n          <ul class=\"nav navbar-nav\">\n            <li><a routerLink=\"multiple\">MULTIPLE LISTING</a></li>\n            <li><a routerLink=\"client\">ADD CLIENT</a></li>\n            <li><a routerLink=\"profile\">PROFILE</a></li>\n            <li><a >TERMS & CONDITION</a></li>\n            <li><a routerLink=\"settings\">SETTINGS</a></li>\n            <li><a (click)=\"logout()\" >LOGOUT</a></li>\n          </ul> <!--ul close -->\n        </div> <!--div -->\n      </div><!-- container-->\n    </nav> <!--nav -->\n\n    <hr style=\"background: lightgrey;height: 1px;border: none;margin-top: 10px;margin-bottom:10px;width:100%;\">\n  \n    <div class=\"container-fluid agent\">\n      <div class=\"row\"> <!--*ngIf=\"loggedInUserDetails.role=='agent'\"-->\n        <div class=\"col-xs-12 col-sm-6 col-md-5 col-lg-4\">\n          <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-2\">\n            <img  [src]=\"image || '../assets/img/profile.png'\"  style=\"width:55px;height:55px;\" class=\"img-circle\">\n          </div>\n          <div class=\"col-xs-9 col-sm-9 col-md-9 col-lg-10\">\n            <h2 style=\"display:inline-block;font-size:16px; padding-top: 10px;\">{{fname +lname}}\n              <!--*ngIf=\"loggedInUserDetails.is_subscribed\" -->\n              <span class=\"badge badge-success\" *ngIf=\"is_subscribed\"> Pro Account</span>\n              <!--*ngIf=\"!loggedInUserDetails.is_subscribed\" -->\n              <span class=\"badge badge-warning\" *ngIf=\"!is_subscribed\"> Trial Account</span>\n              <div style=\"font-size:15px;margin-top:1%;\">{{contact}}</div>\n            </h2>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-7 col-lg-8\" style=\"padding-top:20px;\">\n          <div class=\"scrollmenu\">     \n            <!-- <a routerLink=\"#\" style=\"color:#D4AC0D\" (click)=\"seenNotification()\"><i class=\"fa fa-bell\"></i> {{notiCount>0 ? notiCount : ''}}</a>\t\t -->\n            <a routerLink=\"lead/details\" [ngClass]=\"{'activetatab': activeTab=='lead'}\" (click)=\"checkActiveTab('lead')\">WORKSPACE</a>\n            <a routerLink=\"listings\" [ngClass]=\"{'activetatab': activeTab=='listings'}\" (click)=\"checkActiveTab('listings')\">YOUR LISTINGS</a>\n            <a routerLink=\"listing\" [ngClass]=\"{'activetatab': activeTab=='listing'}\" (click)=\"checkActiveTab('listing')\">ADD LISTING</a>\n            <a routerLink=\"advertise\" [ngClass]=\"{'activetatab': activeTab=='advertise'}\" (click)=\"checkActiveTab('advertise')\">ADVERTISE</a>\t\n            <a routerLink=\"invitation\" [ngClass]=\"{'activetatab': activeTab=='invitation'}\" (click)=\"checkActiveTab('invitation')\">MANAGE PLAN INVITATION</a>\t\n          </div>\n        </div>\n      </div>\n\n      \n      <!-- <div class=\"row\" *ngIf=\"loggedInUserDetails.role=='customer'\">\n        <div class=\"col-xs-12 col-sm-6 col-md-9 col-lg-9\">\n          <div class=\"col-xs-3 col-sm-3 col-md-3 col-lg-1\">\n            <img src=\"{{loggedInUserDetails.image || '../assets/img/profile_image.jpeg'}}\" style=\"border-radius: 50%;width:65px;height:65px;\">\n          </div>\n          <div class=\"col-xs-9 col-sm-9 col-md-9 col-lg-11\">\n            <h2 style=\"display:inline-block;font-size:16px;margin-top:10px !important;\">Hello {{loggedInUserDetails.fname}} {{loggedInUserDetails.lname}} \n              <p style=\"font-size:15px;margin-top:8%;\">{{loggedInUserDetails.contact}}</p>\n            </h2>\n          </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-6 col-md-3 col-lg-3\">\n          <div class=\"scrollmenu\" *ngIf=\"loggedInUserDetails.role=='customer'\">    \n            <a href=\"javascript:;\" routerLink=\"/notifications\" style=\"color:#D4AC0D\"  (click)=\"seenNotification()\"><i class=\"fa fa-bell\"></i> {{notiCount>0 ? notiCount : ''}}</a>\t\t  \t\t\t\n            <a href=\"javascript:;\" routerLink=\"/client/workspaces/lead/chat\" style=\"color: black;\">WORKSPACE</a> \n          </div>\n        </div>    \n      </div> -->\n    </div><!--fluid-->\n    <hr style=\"background: lightgrey;height: 1px;border: none;margin-top: 15px;width: 100%;\">\n  </div>\n\n  <router-outlet></router-outlet>\n\n\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/profile/profile.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/profile/profile.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-4 col-md-5 col-lg-5\">\n            <div class=\"row\">\n                <div class=\"col-xs-6 col-sm-12 col-md-6\">\t\t\n                    <div class=\"user-profile\">\n                        <form (ngSubmit)=\"updateUserImage()\">\n                            <label for=\"userimage\">\n                                <img [attr.src]=\"imageSrc || '../assets/img/profile.png'\"  style=\"max-width:400px;max-height:400px;cursor: pointer;\"/>\t\t\n                            </label>\n                            <br>\n                            <h4 style=\"font-weight:700;\">USER PROFILE</h4>\n                            \n                            <img src=\"https://www.osecac.org.ar/Image/loading_puntos.gif\" *ngIf=\"showloader\" style=\"height:15vh;\">\n                            <input type=\"file\" (change)=\"handleUserImageChange($event)\" name=\"file\" id=\"userimage\"/>\n                            <button id=\"edit_image\"  [disabled]=\"imagebtn\" *ngIf=\"!showloader\">EDIT IMAGE</button>\n                        </form>\n                    </div>\n                </div>\n                <div class=\"col-xs-6 col-sm-12 col-md-6\" >\t\t\n                    <div class=\"firm-logo\">\n                        <form (ngSubmit)=\"updateUserImage()\">\n                            <label for=\"company_logo\">\n                              <img [attr.src]=\"logoSrc || '../assets/img/profile.png'\"  style=\"max-width:400px;max-height:400px;cursor: pointer;\"/>\n                            </label>\n                            <br>\n                            <h4 style=\"font-weight:700;\">COMPANY LOGO</h4>\n                            \n                            <img src=\"https://www.osecac.org.ar/Image/loading_puntos.gif\"  *ngIf=\"showlogoloader\" style=\"height:15vh;\">\n                            <input type=\"file\" (change)=\"handleLogoChange($event)\" name=\"file\" id=\"company_logo\"/>\n                        \n                            <button id=\"edit_logo\" [disabled]=\"logobtn\" *ngIf=\"!showlogoloader\">EDIT LOGO</button>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-xs-12 col-sm-8 col-md-7 col-lg-7\">\n            <div class=\"row\">\n                <div class=\"user-detail\">\n                    <form [formGroup]=\"userForm\" (ngSubmit)=\"updateProfile()\">\t\t\n                        <div class=\"row\">\n                            <!-- <div class=\"col-sm-6\" >\n                                <label>First Name</label>\n                                <input type=\"text\" name=\"\" placeholder=\"first name\" formControlName=\"name\" class=\"form-control\">\n                            </div> -->\n                            <!-- <div class=\"col-sm-6\" >\n                                <label>Last Name</label>\n                                <input type=\"text\" name=\"\" placeholder=\"last name\" formControlName=\"lname\" class=\"form-control\">\n                            </div> -->\n                            <div class=\"col-sm-4\" >\n                                <label>First Name</label>\n                                <input type=\"text\" name=\"\" placeholder=\"first name\" formControlName=\"name\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4\" >\n                                <label>Last Name</label>\n                                <input type=\"text\" name=\"\" placeholder=\"last name\" formControlName=\"lname\" class=\"form-control\">\n                            </div>\n\n                            <div class=\"col-sm-4\">\n                                <label>Email</label>\n                                <input type=\"email\" name=\"\" placeholder=\"sk@email.com\" formControlName=\"email\" class=\"form-control\" readonly>\n                            </div>\n                        </div>\n                        <br>\n                        <div class=\"row\">\n                            <!-- <div class=\"col-sm-6\" >\n                                <label>Phone Number</label>\n                                <input type=\"text\" name=\"\" placeholder=\"Phone number\" formControlName=\"contact\" class=\"form-control\">\n                            </div> -->\n                            <!-- <div class=\"col-sm-6\" >\n                                <label>Email</label>\n                                <input type=\"email\" name=\"\" placeholder=\"sk@email.com\" formControlName=\"email\" class=\"form-control\" readonly>\n                            </div> -->\n\n                            <div class=\"col-sm-4\" >\n                                <label class=\"pro2\">Phone Number</label>\n                                <input type=\"text\" name=\"\" placeholder=\"Phone number\" formControlName=\"contact\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4\" >\n                                <label class=\"pro2\">Brokerage Name</label>\n                                <input type=\"text\" name=\"\" placeholder=\"borkerage_name\" formControlName=\"brokerage_name\" class=\"form-control\">\n                            </div>\n                            <div class=\"col-sm-4\" >\n                                <label class=\"pro2\">Title</label>\n                                <select (change)=\"selectBorkerageTitle($event)\" class=\"form-control\">\n                                <option  value=\"\" hidden>Select Title</option>\n                                <option *ngFor=\"let title of firm_titles\" [ngValue]=\"title\" [selected]=\"title == firm_title\">{{title}}</option>\n                                </select>\n                            </div>\n                        </div>\n                        <br>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\n                                <label>Description</label>\n                                <textarea name=\"\" rows=\"3\" class=\"form-control\" placeholder=\"write about yourself\" formControlName=\"description\" style=\"resize: none !important;\"></textarea>\n                            </div>\n                        </div>\n                        <br>\n                        <div class=\"row\">\n                            <div class=\"col-sm-12\">\t\t\t\t\t\t\t\n                                <input type=\"submit\" class=\"btn btn-success pull-right\" value=\"Update Profile\" style=\"color:white;\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n\n            <div class=\"row\"> \n               <div class=\"user-detail\" style=\"padding-top:5px;height:210px;\">\n                    <h3>Change Password</h3>\n                    <br>\n                    <div class=\"alert alert-danger\"  *ngIf=\"passUpdatedResponse.status==0\">{{passUpdatedResponse.message}}</div>\n                    <div class=\"alert alert-success\" *ngIf=\"passUpdatedResponse.status==1\">{{passUpdatedResponse.message}}</div>\n            \n                    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n                        <div class=\"row\">\n                            <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                <label>Old Password</label>\n                                <input (keyup)=\"onkeyup()\" class=\"form-control\" formControlName=\"old_password\" type=\"password\" autocomplete=\"off\" name=\"\" placeholder=\"**************\">\n                                <span class=\"text-danger\"  *ngIf=\"validatorContainer.old_pass.error\"><strong> {{validatorContainer.old_pass.message}}</strong></span>          \n                            </div>\n                            \n                            <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                <label>New Password</label>\n                                <input (keyup)=\"onkeyup()\" class=\"form-control\" formControlName=\"new_password\" type=\"password\" autocomplete=\"off\" name=\"\" placeholder=\"**************\" required>\n                                <span class=\"text-danger\"  *ngIf=\"validatorContainer.new_pass.error\"><strong> {{validatorContainer.new_pass.message}}</strong></span>\n                            </div>\n                            <div class=\"col-xs-12 col-sm-12 col-md-4\">\n                                <label>Confirm Password</label>\n                                <input (keyup)=\"onkeyup()\" class=\"form-control\" formControlName=\"confirm_password\" type=\"password\" autocomplete=\"off\" name=\"\" placeholder=\"**************\" required>\n                                <span class=\"text-danger\"  *ngIf=\"validatorContainer.conf_pass.error\"><strong> {{validatorContainer.conf_pass.message}}</strong></span>\n                                <span class=\"text-success\" *ngIf=\"!validatorContainer.conf_pass.error\"><strong> Password matched</strong> </span>\n                            </div>\n                            \n                            <div class=\"col-sm-12\">\n                                <br>\n                                <input type=\"submit\" class=\"pull-right\" value=\"SUBMIT\" [disabled]='validatorContainer.error_status' style=\"background: #42b5eb;border:1px solid #42b5eb;padding:6px;color: white;font-size: 16px;font-weight: 600;\">\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div><!--row-->\n    \n</div><!--container-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/setting/setting.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/setting/setting.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\" style=\"padding-bottom: 5px;\">\n    <div class=\"row\" *ngIf=\"subscribe\">\n      <div class=\"col-md-4\">\n        <div class=\"bill\">\n          <div class=\"bill-1\">\n  \n            <span class=\"discount\"><h1>Billing Schedule <span class=\"right\" style=\"font-size:15px;padding-top:2%;\">5% Discount</span></h1></span>\n            <div class=\"row\">\n              <h2 class=\"col-lg-6 left\">Trial Start  : <span style=\"font-size:15px;\">{{subscribe ? (subscribe.subscription_start_date | date: 'yyy-MM-dd') : ''}}</span></h2>\n              <h2 class=\"col-lg-6 right\">Trial End : <span style=\"font-size:15px;\">{{subscribe ? (subscribe.subscription_end_date | date: 'yyy-MM-dd') : ''}}</span></h2>\n            </div>\n            <div class=\"row\" style=\"margin-bottom: 3%;\">\n              <h2 class=\"col-lg-6 left\">Total Days : <span style=\"font-size:15px;\">{{subscribe ? subscribe.subscription_valid_days : 0}} Days</span></h2>\n              <h2 class=\"col-lg-6 right\">Invited Users : <span style=\"font-size:15px;\">{{subscribe ? subscribe.subscription_total_members-1 : 0}}</span></h2>\n            </div>\n          </div><!--bill-1-->\n  \n          <div class=\"bill-2\">\n            <h1>Total</h1>\n            <div class=\"row\">\n              <h5 class=\"col-lg-6 pull-left\"><b>Total no. of paid Agent :</b></h5>\n              <h5 class=\"col-lg-6\"><span class=\"pull-right\">{{subscribe ? subscribe.subscription_total_members : 0}} </span></h5>\n            </div>\n            <div class=\"row\">\n              <h5 class=\"col-lg-6 pull-left\"><b>Total before Tax :</b></h5>\n              <h5 class=\"col-lg-6\"><span class=\"pull-right\">{{subscribe ? (subscribe.subscription_paid_amount | currency:'USD':true:'1.2-2') : 0}}</span></h5>\n            </div>\n  \n            <div class=\"row\">\n              <h5 class=\"col-lg-6 pull-left\"><b>HST Amount:</b></h5>\n              <h5 class=\"col-lg-6\"><span class=\"pull-right\">{{hst_amount | currency:'USD':true:'1.2-2'}}</span></h5>\n            </div>\n  \n            <div class=\"row\" *ngIf=\"(subscribe ? subscribe.promo_percentage : '')\">\n              <h5 class=\"col-lg-6 pull-left\"><b>Offer Amount:</b></h5>\n              <h5 class=\"col-lg-6\"><span class=\"pull-right\">{{offer_amount | currency:'USD':true:'1.2-2'}}</span></h5>\n            </div>\n  \n            <div style=\"position: relative;height: 50px;\">\n              \n              <h2 class=\"pull-left\">Total Paid Amount:</h2>\n              <h2 class=\"pull-right\">{{subscribe ? (subscribe.paid_amount | currency:'USD':true:'1.2-2') : ''}}</h2>\n            </div>\n            \n          </div><!--bill-2-->\n        </div><!--bill-->\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"customer\">\n          <h2 style=\"margin-top:5%;color:black;\">Saved Cards</h2>\n          <br>\n          <div *ngIf=\"cards?.length > 0\">\n            <div class=\"card\" *ngFor=\"let ca of cards\">\n              <div class=\"row\">\n                <div class=\"col-xs-2\">\n                  <i class=\"fa fa-credit-card fa-2x\" aria-hidden=\"true\"></i>\n                </div>\n                <div class=\"col-xs-9 pad\">\n                  <p style=\"font-size: 16px;\">*************{{ca.last4}}  <span style=\"margin-left:2%;\">{{ca.exp_month}}/{{ca.exp_year}}</span></p>\t\n                  <p style=\"margin-top: -16px;font-size: 15px;\">{{ca.brand}} </p>\n                </div>\n                <div class=\"col-xs-1\" style=\"padding-left: 0px;\">\n                  <a (click)=\"removeSavedCard(ca.id)\"><span class=\"remove-card\"><i class=\"fa fa-times-circle\"></i></span></a>\n                </div>\n              </div>\n            </div>\n          </div>\n  \n          <div *ngIf=\"cards?.length == 0\" style=\"text-align:center;\">\n            <img src=\"../assets/img/no-credit-cards.png\" style=\"width:50px;height:50px;\">\n            <p>You have no saved cards</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"data\">\n          <h2 style=\"margin-top:5%;color:black;\">Payment Methods</h2>\n          <form novalidate (ngSubmit)=\"buy()\"  style=\"margin-top:7%;\">  \n            <div class=\"form-control\" style=\"height: 55px; padding: 17px 13px;\">\n              <ngx-stripe-card [options]=\"cardOptions\" [elementsOptions]=\"elementsOptions\"></ngx-stripe-card>\n            </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <button type=\"submit\" class=\"pull-right btn btn-success btn-md\">Add New Card</button>\n              </div>\n            </div>\n            <br><br>\n            <div class=\"row\">\n              <div class=\"col-lg-12\" *ngIf=\"subscribebtn\">\n                        <a type=\"submit\" name=\"\" class=\"form-control btn btn-danger\"  (click)=\"cancelNextSubscription()\">Unsubscribe your Subscription</a>\n              </div>\n  \n              <div class=\"col-lg-12\" *ngIf=\"!subscribebtn\">\n                <div class=\"alert alert-info\">Your Subscription is Cancelled</div>\n              </div>\n            </div>\n          </form>\n        </div>  \n      </div>\n      \n    </div>\n  \n    <div class=\"row\" *ngIf=\"!subscribe\" style=\"text-align:center;\">\n      <img src=\"../assets/img/subscribe.png\" style=\"margin-top:10%;height:200px;width:200px;\">\n      <br>\n      <h2>No Plan Subscibed By You</h2>\n    </div>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/your-listing/your-listing.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/your-listing/your-listing.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid second-listing\">\n        <div class=\"listing-1\">\n          <h1>YOUR LISTING\n          </h1>\n          <P>View the listing for Projects You Own(Or add a new one!)</P>\n          <small style=\"text-align: left\"><span style=\"color: black;font-size: 16px;font-weight: 600;\">Add a New Listing</span>\n            <span ><a routerLink=\"../listing\"><i id=\"add-list\" class=\"fa fa-plus-circle\" style=\"color:#0FD892;font-size: 30px;margin-left: 5%;margin-top: 1%;cursor: pointer;\"></i></a></span>\n          </small>\n          \n          <br>\n      \n          <!-- <div role=\"tabpanel\" class=\"tab-pane\" id=\"property\"> -->\n            <div *ngIf=\"properties?.length > 0\">\n              <div class=\"listing-table\" *ngFor=\"let property of properties\" [ngClass]=\"{'activeAgentPro': property.id==pId}\">\n                <div class=\"row\">\n                  <div class=\"col-sm-1 text-center\">\n                    <span (click)=\"addToFavourite(property.id)\" style=\"cursor:pointer;\" *ngIf=\"!property.is_favourite\"><i class=\"fa fa-heart\"></i></span>\n                    <span (click)=\"addToFavourite(property.id)\" style=\"cursor:pointer;\" *ngIf=\"property.is_favourite\"><img src=\"../assets/img/heart.png\" style=\"height:27px;width:27px;\"></span>\n                    <span (click)=gotoListing(property.id)><i class=\"fa fa-eye\"></i></span>\n                    <span (click)=\"goToAppointment()\" style=\"cursor:pointer;\"><i class=\"fa fa-calendar\"></i></span>\n                    <span (click)=\"editAgentListing(property.id)\" class=\"list-show\"><i class=\"fa fa-edit\"></i></span>\n                    <span (click)=\"removeAgentListing(property.id)\" class=\"list-show\"><i class=\"fa fa-times-circle\"></i></span>\n                  </div>\n                  <div class=\"col-sm-2 col-lg-2\" style=\"padding-left: 0px;\" (click)=gotoListing(property.id) style=\"cursor:pointer;\">\n                    <img src=\"{{property.images_list[0] || '../assets/img/nophoto.png'}}\">\n                  </div>\n                  <div class=\"col-sm-7 col-lg-7\">\n      \n                    <h1 *ngIf=\"property.project_name!=null\"><span (click)=gotoListing(property.id) style=\"float: left; margin-top: 0px; margin-bottom: 0px; color: steelblue; cursor: pointer;\">{{property.project_name}}</span> <span class=\"pull-right label label-info\">{{property ? property.sale_lease : ''}}</span></h1>\n                    <h1 *ngIf=\"property.project_name==null\"><span (click)=gotoListing(property.id) style=\"float: left; margin-top: 0px; margin-bottom: 0px; color: steelblue; cursor: pointer;\"> {{property.street_num}} {{property.street}}</span> <span class=\"pull-right label label-info\">{{property ? property.sale_lease : ''}}</span></h1>\n                    <br><br>\n                    <h2 *ngIf=\"property.project_name!=null\"><i class=\"fa fa-map-marker\"></i>  {{property.street_num}}{{property.street}} {{property.street ? ',' : ''}} {{property.municipality}} {{property.state}} {{property.zip}}</h2>\n                    <h2 *ngIf=\"property.project_name==null\"><i class=\"fa fa-map-marker\"></i>  {{property.municipality}} {{property.state}} {{property.zip}}</h2>\n                    \n                    <p style=\"font-size:14px;\">{{property.remarks_for_clients }}</p>\n                    <div class=\"listing-table2\">\n                      <span> <i>#</i> {{property.mls_id}}</span>\n                      <span *ngIf=\"property.estimated_price!=null\"> {{property.estimated_price | currency:'USD':true:'1.2-2'}}</span>\n                      <span *ngIf=\"property.total_area!=null\"> <i class=\"fa fa-building\"></i> {{property.total_area}} sq Ft</span>\n                      <span *ngIf=\"property.bedrooms>0\"> <i class=\"fa fa-bed\"></i> {{property.bedrooms}}</span>\n                      <span *ngIf=\"property.washrooms>0\"> <i class=\"fa fa-bath\"></i> {{property.washrooms}}</span>\n                      <span *ngIf=\"property.notes>0\"> <i class=\"fa fa-notes-medical\"></i>{{property.notes}} Notes</span>\n                    </div>\n                  </div>\n                  <div class=\"col-sm-1 col-lg-1\">\n                    <a (click)=\"editAgentListing(property.id)\" class=\"list-hide\"><span><i class=\"fa fa-edit\"></i> Edit</span></a>\n                  </div>\n                  <div class=\"col-sm-1 col-lg-1\">\n                    <a (click)=\"removeAgentListing(property.id)\" class=\"list-hide\"><span><i class=\"fa fa-times-circle\"></i></span></a>\n                  </div>\n                  \n                </div>\n                <hr>\n                <!--row-->\n              </div>\n            </div>\n            <div *ngIf=\"properties?.length == 0\">\n              <br>\n              <div style=\"margin-top:20px;\">\n                <div style=\"padding:5% 10%;text-align:center;\">\n                  <img src=\"../assets/img/notimg/no_property.png\" class=\"no-property\">\n                  <br><br>\n                  <p>You did not added any property yet, please go the Add Listing to create new one.</p> \n                </div>\n              </div>\n            </div>\n            <!--table-listing-->\n          <!-- </div> -->\n          \n        </div>\n        <!--listing-1-->\t\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/appointments/appointments.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/appointments/appointments.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" *ngIf=\"accessable\">\n  <br>\n  <div class=\"col-md-12\">\n    <H4>Appointments</H4>\n  </div>\n\n  <div class=\"col-md-6\" *ngIf=\"appointments?.length > 0\">\n    <div class=\"appoinment-list\">\n      <div class=\"row\" *ngFor=\"let appoint of appointments\" [ngClass]=\"{'activeAppoint': appoint.id==appointment_id}\">\n        <div class=\"col-xs-10\">\n          <H2>{{appoint.title}}</H2>\n          <p>{{appoint.description}}</p>\n          <h4>{{appoint.appointment_date |date:'MMM dd, yyyy' : '+0000'}}, {{appoint.appointment_time}}</h4>\n          <h5><b style=\"color:gray;\">Created_by</b> : {{appoint.user_detail.fname}} {{appoint.user_detail.lname}}</h5>\n          <h5 *ngIf=\"appoint.appoint_confirm\"><b style=\"color:gray;\">Appointment Confirmed_by</b> :\n            {{appoint.client_detail.fname}} {{appoint.client_detail.lname}}</h5>\n          <h5 *ngIf=\"appoint.appoint_reject\"><b style=\"color:gray;\">Appointmet Cancelled by</b> :\n            {{appoint.client_detail.fname}} {{appoint.client_detail.lname}}</h5>\n        </div>\n        <div class=\"col-xs-2\" style=\"padding-top: 7%;\" *ngIf=\"appoint.user_detail.id==agent_id\">\n          <a (click)=\"updateAppointment(appoint)\"><span><i class=\"fa fa-edit\"></i></span></a>\n          <a (click)=\"removeAppointment(appoint.id)\"><span><i class=\"fa fa-times-circle\"></i></span></a>\n        </div>\n        <div class=\"col-lg-12\">\n          <a class=\"btn btn-success btn-sm pull-right\" *ngIf=\"appoint.user_detail.id!=agent_id && (!appoint.appoint_confirm && !appoint.appoint_reject)\"\n            (click)=\"confirmAppointment(appoint.id,'accept')\">Confirm Appointment</a>\n          <a class=\"btn btn-danger btn-sm pull-right\" *ngIf=\"(!appoint.appoint_confirm && !appoint.appoint_reject)\"\n            (click)=\"confirmAppointment(appoint.id,'reject')\" style=\"margin-right:1%;\">Cancel Appointment</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--col-6-->\n  <div class=\"col-xs-12 col-md-6\" *ngIf=\"appointments?.length >0\" style=\"text-align:center;\">\n    <br>\n    <div style=\"margin-top:20px;border:1px solid #ccc;\">\n      <div style=\"padding:80px 20px;\">\n        <img src=\"../assets/img/task.png\" style=\"height:50px;width:50px;\">\n        <br><br>\n        <p>No Appointments Available Right Now</p>\n        <h5>Add Appointment</h5>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-xs-12 col-md-6\">\n    <div class=\"appoinment-form2\">\n      <br>\n      <form [formGroup]=\"appointmentForm\" (ngSubmit)=\"addAppointmentRequest()\">\n        <label>Add a new Appointment</label>\n        <input type=\"text\" name=\"\" class=\"form-control\" formControlName=\"title\" placeholder=\"Purpose of Meeting\">\n        <br>\n        <label>Discription of meeting</label>\n        <textarea class=\"form-control\" formControlName=\"appoint_description\"></textarea>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n            <label>Date</label>\n            <br>\n            <input type=\"text\" placeholder=\"Datepicker\" class=\"form-control\"   bsDatepicker   formControlName=\"appointment_date\">\n          </div>\n          <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6\">\n            <br>\n            <timepicker  [formControlName]=\"'appointment_time'\"></timepicker>\n\n\n\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-xs-6 pull-right\">\n            <input type=\"submit\" name=\"\" class=\"form-control\" value=\"Add Appoinment\">\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n  </div>\n  <!--col-6-->\n\n</div>\n<!--row-->\n<div *ngIf=\"!accessable\">\n    <br>\n    <h4 style=\"text-align: center\">This is temporary Client at this movement</h4>\n    <img src=\"../../../../../assets/img/no/noAccess.png\" class=\"not-access\">\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/chats/chats.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/chats/chats.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>Chat Works </p>\nFirebase Chat module\n<ul>\n    <li *ngFor=\"let item of messagesList; let i = index\">\n        {{i}} {{item.message}}\n    </li>\n</ul>\n<form [formGroup]=\"form\"  (submit)=\"sendMessage()\">\n    <input type=\"text\" name=\"textMessage\"  formControlName=\"textMessage\" autocomplete=\"off\">\n    <input type=\"submit\" value=\"send\">\n</form> -->\n<div class=\"chat-container\">\n    <div  #scrollMe [scrollTop]=\"scrollMe.scrollHeight\" class=\"postChat clearfix\" id=\"message-container\">\n        <div [ngClass]=\"{'person1': msg.user_id==lead.agent_id,'person2': msg.user_id!=lead.agent_id}\" *ngFor=\"let msg of messagesList; let i=index\">\n            <img src=\"../../../../assets/img/home/profile.png\" alt=\"profile\" *ngIf=\"msg.user_id!=lead.agent_id\">\n            <div class=\"text\">\n                <p class=\"up\">{{msg.message}}</p>\n                <div *ngIf=\"msg.mls_number!=''&&msg.mls_number!=undefined\">MLS ID {{msg.mls_number}}</div>\n            </div>\n        </div>\n        <img src=\"../../../../../assets/img/no/no_chat.png\" class=\"no-chat\" *ngIf=\"messagesList.length==0\">\n    </div>\n    <div class=\"row message-form\">\n        <form [formGroup]=\"form\"  (submit)=\"sendMessage()\">\n            <div class=\"col-md-10 msg-container\">\n                <div class=\"profile-details\">\n                    <input type=\"text\" class=\"chat-box\" placeholder=\"Write your message\"  name=\"textMessage\"  formControlName=\"textMessage\" autocomplete=\"off\">\n                </div>\n            </div>\n            <div class=\"col-md-2\">\n                <button class=\"btn btn-default btn-circle\" [disabled]=\"submitted\"> <i class=\"fa fa-refresh fa-spin fa-2x\" *ngIf=\"submitted\"></i> <img src=\"../../../../assets/img/send.png\" *ngIf=\"!submitted\" class=\"send-message\" alt=\"send\"></button>\n            </div>\n        </form>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/details/details.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/details/details.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"tab-content\">\n  <div role=\"tabpanel\" class=\"tab-pane active\" id=\"detail\">\n    <div class=\"first-tab\">\n      <div class=\"one\">\n        <h1 class=\"text-left\" >{{leadDetails.title}} &nbsp;&nbsp;<button class=\"btn btn-primary\" (click)=\"openModal()\">Edit</button>  &nbsp;&nbsp;<button class=\"btn btn-danger\" (click)=\"removeLead(leadDetails.id,leadDetails)\" >Remove Lead</button></h1>\n        <form class=\"form-inline\" >\n          <input type=\"text\" name=\"\" class=\"form-control\" formControlName=\"title\" placeholder=\"On Synergy\" style=\"border-radius:0px;\">\n          <button type=\"submit\" class=\"btn btn-info\" style=\"border-radius:0px;\">Update</button>\n        </form>\n      </div>\n      <div class=\"two\" style=\"margin-top: 5%;\">\n        <h2>Workplace Info</h2>\n        <p>ID: <span style=\"font-weight: 550;\">{{leadDetails.id}}</span></p>\n        <p>Date Created: <span style=\"font-weight: 550;\">{{leadDetails.received_at}}</span></p>\n        <p>Number of Users: <span style=\"font-weight: 550;\">{{leadDetails.total_members}}</span></p>\n      </div>\n      <hr style=\"width:100%;margin-bottom: 10px;margin-top:5px;\">\n      <div class=\"row\">\n        <div class=\"col-xs-6 col-sm-4 col-md-4 col-lg-4\">\n          <h2>Screenshare</h2>\n          <a href=\"#\" style=\"border:none;\"><button class=\"btn btn-success\">START</button></a>\n        </div>\n\n        <div class=\"col-xs-6 col-sm-8 col-md-8 col-lg-8\" >\n          <h2>Permanent client</h2>\n          <label class=\"switch\">\n          <input type=\"checkbox\" >\n          <span class=\"slider round\"></span>\n          </label>\n        </div>\n        <div class=\"col-xs-6 col-sm-8 col-md-8 col-lg-8\" >\n          <br>\n          <div class=\"oaerror info\">\n            <strong>Permanent Client</strong> \n          </div>\n        </div>\n      </div>\n      <br>\n      <h2 style=\"padding-bottom: 3px;\">STATUS</h2>\n      <div style=\"overflow-x:auto;white-space:nowrap;padding:10px 0px;\">\n        <a style=\"padding-left: 15px;padding-right: 15px;cursor:pointer;\" [ngClass]=\"{'activestatus': leadDetails.status=='Active Clients'}\" (click)=\"changeLeadStatus('Active Clients')\">Active Client</a>\n        <a style=\"padding-left: 15px;padding-right: 15px;cursor:pointer;\" [ngClass]=\"{'activestatus': leadDetails.status=='Closing On Process'}\" (click)=\"changeLeadStatus('Closing On Process')\">Closing On Process</a>\n        <a style=\"padding-left: 15px;padding-right: 15px;cursor:pointer;\" (click)=\"changeLeadStatus('Closing Deals')\" [ngClass]=\"{'activestatus': leadDetails.status=='Closing Deals'}\">Closing Deals</a>\n        <a style=\"padding-left: 15px;padding-right: 15px;cursor:pointer;\" (click)=\"changeLeadStatus('Clients On Hold')\" [ngClass]=\"{'activestatus': leadDetails.status=='Clients On Hold'}\">Clients On Hold</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div id=\"permanent-modal\" class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" >&times;</button>\n        <h4 class=\"modal-title text-center\">User Detail</h4>\n      </div>\n      <div class=\"modal-body\">\n        <form >\n          <div class=\"form-group\">\n            <label for=\"name\">Name:</label>\n            <input type=\"text\" class=\"form-control\" id=\"name\" formControlName=\"username\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email:</label>\n            <input type=\"email\" class=\"form-control\" id=\"email\" formControlName=\"email\">\n          </div>\n          \n          <button type=\"submit\" class=\"btn btn-default pull-right\">Submit</button>\n          <br><br>\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div> -->\n<div class=\"row\" *ngIf=\"leadPresent\">\n  <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\n    <h3> Lead details: </h3>\n    <h3 class=\"product-title\">{{leadDetails.title}} &nbsp;\n      <span class=\"btn btn-warning btn-xs\" title=\"Edit Title\"><i class=\"fa fa-pencil\"></i> Edit</span>&nbsp;\n      <span class=\"btn btn-danger btn-xs\" title=\"Delete Lead\"><i class=\"fa fa-trash\"> Delete</i></span>\n    </h3>\n    <hr style=\"width: 100%;\">\n    <div>\n      <div><strong>Current Status:</strong> Contact made</div>\n      <div><strong>Client Type:</strong> {{leadDetails.is_permanent ? 'Permanent Client' : (leadDetails.id==undefined) ? 'Temporary Client' : 'Saved'}}</div>\n      <div><strong>Created at:</strong> {{leadDetails.received_at ==undefined ? 'Today' : leadDetails.received_at}}</div>\n      <div><strong>Lead Id:</strong> {{leadDetails.id ==undefined ? 'Waiting' : leadDetails.id}}</div>\n      <div><strong>Permanent: </strong>\n        <a class=\"btn btn-primary btn-xs\" *ngIf=\"is_permanent\"> isTrue</a>\n        <a class=\"btn btn-primary btn-xs\" *ngIf=\"!is_permanent\" (click)=\"openModalMakePayment()\"> Make Permanent</a>\n      </div>\n      <hr style=\"width: 100%;\">\n      <div>\n        <strong>Change Status: </strong> \n          <span>      \n            <div class=\"btn-group\">\n              <a class=\"btn btn-default btn-xs\" [ngClass]=\"{'active': leadDetails.status=='Active Clients'}\">Active Client</a>\n              <a class=\"btn btn-default btn-xs\" [ngClass]=\"{'active': leadDetails.status=='Closing On Process'}\">Closing On Process</a>\n              <a class=\"btn btn-default btn-xs\" [ngClass]=\"{'active': leadDetails.status=='Closing Deals'}\">Closing Deals</a>\n              <a class=\"btn btn-default btn-xs\" [ngClass]=\"{'active': leadDetails.status=='Clients On Hold'}\">Clients On Hold</a>\n            </div>\n          </span>\n      </div>\n    </div>\n  \n\n  </div>\n  <div class=\"col-lg-9 col-md-9 col-sm-12 col-xs-12\" style=\"border-left: 1px solid grey\">\n    <app-chats></app-chats>\n  </div>\n</div>\n<div class=\"row\" *ngIf=\"!leadPresent\">\n  <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n    <img src=\"../../../../../assets/img/no/NoLeads.png\" class=\"no-lead\">\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/documents/documents.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/documents/documents.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div role=\"tabpanel\" class=\"tab-pane\" id=\"document\"  *ngIf=\"accessable\">\n    <h2>Documents</h2>\n    \n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-7\" *ngIf=\"documents?.length>0\">\n        <div class=\"doc-list\">\n          <div class=\"row\" *ngFor=\"let document of documents\" [ngClass]=\"{'activeDoc': document.id==document_id}\">\n            <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-8\">\n              <h3>{{document.title}}</h3>\n              <!-- <p>LIV Residence Dubia Marina</p> -->\n            </div>\n            <div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-2 text-center\" style=\"padding-top: 14px;\" *ngIf=\"document.document_url\">\n              <a href=\"{{document.document_url}}\" target=\"_blank\"><span><i class=\"fa fa-download\"></i></span></a>\n              <h4>Download</h4>\n            </div>\n            <div class=\"col-xs-6 col-sm-6 col-md-3 col-lg-2 text-center\" *ngIf=\"document.user_detail.id==agent_id\" style=\"padding-top: 14px;\">\n              <a (click)=\"removeDocument(document.id)\" style=\"cursor:pointer;\"><span><i class=\"fa fa-times-circle\"></i></span></a>\n              <h4>Remove</h4>\n            </div>\n          </div><!--row-->\n          <hr style=\"width:100%;\">\n        </div><!--doc-list-->\n      </div>\n      <div class=\"col-xs-12 col-md-7\" *ngIf=\"documents?.length==0\" style=\"text-align:center;\">\n        <div style=\"margin-top:10px;\">\n          <div style=\"padding:20px 20px;\">\n            <img src=\"../assets/img/no/no_document.png\" style=\"height:20vh;\">\n            <br><br>\n            <p>No Documents Available Right Now</p>\n            <h5>Upload Documents</h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"doc-title\">\n          <br>\n          <form role=\"form\" (ngSubmit)=\"uploaddocumentRequest()\" #documentForm=\"ngForm\">\n            <div class=\"text-center\">\n              <label for=\"document\">\n                <span><i class=\"fa fa-upload\"></i></span>\n              </label>\n              <input type=\"file\" (change)=\"fileChange($event)\"  name=\"file\" id=\"document\"/>   \n              <br>\n              <small style=\"color:red;\">{{this.message}}</small>\n            </div> \n            <br>\n            <label>ADD TITLE</label>\n            <input type=\"text\" name=\"\" class=\"form-control\" placeholder=\"Type Here\" [(ngModel)]=\"title\" name=\"title\" id=\"title\">\n            <br>\n            <input type=\"submit\" name=\"\" [disabled]='btnDisabled' value=\"UPLOAD DOCUMENT\" class=\"form-control form-doc\">\n          </form>\n        </div>\n      </div>\n    </div>\n  </div><!--document-end-->\n\n\n<div *ngIf=\"!accessable\">\n  <br>\n  <h4 style=\"text-align: center\">This is temporary Client at this movement</h4>\n  <img src=\"../../../../../assets/img/no/noAccess.png\" class=\"not-access\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/invite/invite.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/invite/invite.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"col-md-8\" *ngIf=\"accessable\">\n    <br><br>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      Invite Someone to View this Property with you\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"appoinment-form2\">\n        <br>\n        <form [formGroup]=\"inviteForm\" (ngSubmit)=\"inviteFriendRequest()\">\n          \n          \n          <div class=\"row\">\n            <label>Email</label>\n            <input type=\"text\" id=\"email\" class=\"form-control\" formControlName=\"email\" required>\n            \n          </div>  \n          \n          <br>\n\n          <div class=\"row\">\n            <input type=\"submit\" name=\"\" class=\"btn btn-success pull-right\" value=\"Invite Your Friend\">\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>  \n</div><!--col-6-->\n\n<div *ngIf=\"!accessable\">\n  <br>\n  <h4 style=\"text-align: center\">This is temporary Client at this movement</h4>\n  <img src=\"../../../../../assets/img/no/noAccess.png\" class=\"not-access\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/members/members.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/members/members.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"table-container table-responsive\"  *ngIf=\"users?.length>0\">\n  <table class=\"table table-condensed\">\n    <thead>\n        <tr>\n            <th>Image</th>\n            <th>Member Name</th>\n            <th>Email</th>\n            <th>Contact Number</th>\n            <th>Role</th>  \n        </tr>\n    </thead>  \n    <tbody>\n        <tr *ngFor=\"let user of users\">\n            <td>\n              <img src=\"{{user.image || '../assets/img/profile.png'}}\"  style=\"width:40px;height:40px\"/>\n            </td>\n            <td>\n                {{user.fname}} {{user.lname}}\n            </td>\n            <td>\n                {{user.email}}\n            </td>\n            <td>\n                {{user.contact ? user.contact : 'Not Available'}}\n            </td>\n            <td>\n                {{user.role==\"customer\" ? 'Client' : 'Agent'}}\n            </td>\n        </tr>\n    </tbody>\n  </table>\n</div>\n<div class=\"col-md-12\"  style=\"text-align:center;\" *ngIf=\"users?.length==0\">\n    <br>\n    <div style=\"margin-top:20px;\">\n        <div style=\"padding:80px 20px;\">\n        <img src=\"../assets/img/profile.png\" style=\"height:50px;width:50px;\">\n        <br><br>\n        <p>No Members Available</p>\n        <h5>Add Members in Your Lead</h5>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/properties/properties.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/properties/properties.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div role=\"tabpanel\" class=\"tab-pane\" id=\"property\" *ngIf=\"accessable\">\n  <div *ngIf=\"properties?.length > 0\">\n    <div class=\"listing-table\" *ngFor=\"let property of properties\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-md-1\">\n          <span (click)=\"addToFavourite(property.id)\" style=\"cursor:pointer;\" *ngIf=\"!property.is_favourite\"><i class=\"fa fa-heart\"></i></span>\n          <span (click)=\"addToFavourite(property.id)\" style=\"cursor:pointer;\" *ngIf=\"property.is_favourite\"><img src=\"../assets/img/heart.png\" style=\"height:27px;width:27px;\"></span>\n          <!-- <span><i class=\"fa fa-ban\"></i></span> -->\n          <span [routerLink]=\"['../property', property.id]\" style=\"cursor:pointer;\"><i class=\"fa fa-eye\"></i></span>\n          <span [routerLink]=\"['../../lead/appointments']\" style=\"cursor:pointer;\"><i class=\"fa fa-calendar\"></i></span>\n          <span (click)=\"removeProperty(property.id)\" class=\"remove-1\"><i class=\"fa fa-times-circle\"></i></span>\n        </div>\n        <div class=\"col-sm-10 col-md-3\" style=\"padding-left: 0px;cursor: pointer;\" (click)=\"goTOView(property.id)\">\n          <img src=\"{{property.images_list ? property.images_list[0] || 'https://propertyinsurat.com/templates/bootstrap2-responsive/assets/images/nophoto.png' : 'https://propertyinsurat.com/templates/bootstrap2-responsive/assets/images/nophoto.png'}}\">\n        </div>\n        <div class=\"col-sm-12 col-md-6\">\n          <h1 *ngIf=\"property.project_name!=null\"><span [routerLink]=\"['../../property', property.id]\" style=\"float: left; margin-top: 0px; margin-bottom: 0px; color: steelblue; cursor: pointer;\">{{property.project_name}}</span> <span class=\"pull-right label label-info\">{{property.sale_lease}}</span></h1>\n          <h1 *ngIf=\"property.project_name==null\"><span [routerLink]=\"['../../property', property.id]\" style=\"float: left; margin-top: 0px; margin-bottom: 0px; color: steelblue; cursor: pointer;\">{{property.street_num}} {{property.street}}</span> <span class=\"pull-right label label-info\">{{property.sale_lease}}</span></h1>\n          <br><br>\n          <!-- {{property.address}} {{property.street ? ',' : ''}} -->\n          <h2 *ngIf=\"property.project_name!=null\"><i class=\"fa fa-map-marker\"></i> {{property.street_num}} {{property.street}} {{property.street ? ',' : ''}} {{property.municipality}} {{property.state}} {{property.zip}}</h2>\n          <h2 *ngIf=\"property.project_name==null\"><i class=\"fa fa-map-marker\"></i>  {{property.municipality}} {{property.state}} {{property.zip}}</h2>\n          <p [hidden]=\"(property_id == property.id)\">{{property.remarks_for_clients | slice:0:140}} <a (click)=\"showText(property.id)\" style=\"margin-top:1px !important;margin-bottom:1px !important;display: inline-block !important;float:none !important;font-size:14px;\">....Read More</a></p>\n          <p *ngIf=\"moreText && (property_id == property.id)\">{{property.remarks_for_clients}}<a (click)=\"hideText(property.id)\" style=\"margin-top:1px !important;margin-bottom:1px !important;display: inline-block !important;float:none;float:none !important;font-size:14px;\">....Read less</a></p>\n          <div class=\"listing-table2\">\n            <span> <i>#</i> {{property.mls_id}}</span>\n            <span> {{property.estimated_price | currency:'USD':true:'1.2-2'}}</span>\n            <span *ngIf=\"property.total_area!=null\"> <i class=\"fa fa-building\"></i> {{property.total_area}} sq Ft</span>\n            <span *ngIf=\"property.bedrooms>0\"> <i class=\"fa fa-bed\"></i> {{property.bedrooms}}</span>\n            <span *ngIf=\"property.washrooms>0\"> <i class=\"fa fa-bath\"></i> {{property.washrooms}}</span>\n            <span *ngIf=\"property.notes>0\"> <i class=\"fa fa-notes-medical\"></i>{{property.notes}} Notes</span>\n          </div>\n        </div>\n        <div class=\"col-sm-2\">\n          <a (click)=\"removeProperty(property.id)\" class=\"remove-2\"><span><i class=\"fa fa-times-circle\"></i></span></a>\n        </div>\n      </div>\n      <hr style=\"width:100%;\">\n      <!--row-->\n    </div>\n  </div>\n  <div *ngIf=\"properties?.length==0\">\n    <br>\n    <div style=\"margin-top:20px;\">\n      <div style=\"padding:5% 10%;text-align:center;\">\n        <img src=\"../assets/img/notimg/no_property.png\" class=\"no-property\">\n        <br><br>\n        <p>You did not added any property yet, please go the Search Properties and Added to Your Workspace.</p> \n      </div>\n    </div>\n  </div>\n  <!--table-listing-->\n</div>\n<div *ngIf=\"!accessable\">\n  <br>\n  <h4 style=\"text-align: center\">This is temporary Client at this movement</h4>\n  <img src=\"../../../../../assets/img/no/noAccess.png\" class=\"not-access\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/property-details/property-details.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/property-details/property-details.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div role=\"tabpanel\" class=\"tab-pane\" id=\"xyz\">\n    <div class=\"container-fluid\">\n      <hr>\n      <div class=\"advertise-body\">\n        <div class=\"row\">\n  \n        <div class=\"col-md-8\">\n          <h1 *ngIf=\"(property ? property.project_name!=null : '')\">{{(property ? property.project_name : '')}} <span class=\"pull-right label label-info\">{{property ? property.sale_lease : ''}}</span></h1>\n          <h1 *ngIf=\"(property ? property.project_name==null : '')\">{{property.street_num}} {{property.street}} <span class=\"pull-right label label-info\">{{property ? property.sale_lease : ''}}</span></h1>\n          <!-- {{property.address}} {{property.street ? ',' : ''}} -->\n          <p *ngIf=\"(property ? property.project_name!=null : '')\" style=\"margin-top: -10px;\"><i class=\"fa fa-map-marker\"></i> {{property.street_num}} {{property.street}} {{property.street ? ',' : ''}} {{property.municipality}} {{property.state}} {{property.zip}}</p>\n          <p *ngIf=\"(property ? property.project_name==null : '')\" style=\"margin-top: -10px;\"><i class=\"fa fa-map-marker\"></i>  {{property.municipality}} {{property.state}} {{property.zip}}</p>\n          <div class=\"body-listing\">\n            <div class=\"container-fluid\" style=\"padding-left: 0px;\">\n              <div *ngIf=\"imageSources?.length > 0\">\n                <slideshow [minHeight]=\"'350px'\"\n                  [autoPlay]=\"true\"\n                  [showArrows]=\"true\"\n                  [showDots]=\"true\"\n                  [imageUrls]=\"imageSources\"\n                  [lazyLoad]=\"imageSources?.length > 1\"\n                  [autoPlayWaitForLazyLoad]=\"true\">  \n                </slideshow>\n              </div>\n              <div *ngIf=\"imageSources?.length == 0\">\n                <img src=\"../assets/img/nophoto.png\" style=\"height:auto;width:100%;text-align: center;\">\n              </div>\n  \n              <div class=\"listing-table2\" style=\"margin-top: 2%;\">\n                <span> <i>#</i> {{(property ? property.mls_id : '')}}</span>\n                <span> {{(property ? (property.estimated_price | currency:'USD':true:'1.2-2') : '')}}</span>\n                <span *ngIf=\"(property.total_area!=null)\"> <i class=\"fa fa-building\"></i> {{property ? property.total_area : ''}} sq Ft</span>\n                <span *ngIf=\"(property ? property.bedrooms>0 : '')\">  <i class=\"fa fa-bed\"></i> {{property.bedrooms}}</span>\n                <span *ngIf=\"(property ? property.washrooms>0 : '')\"> <i class=\"fa fa-bath\"></i> {{property.washrooms}}</span>\n                <span *ngIf=\"(property ? property.notes>0 : '')\"> <i class=\"fa fa-notes-medical\"></i>{{property.notes}} Notes</span>\n                <span  *ngIf=\"(property ? (property.pdf_link!='' && property.pdf_link!=null) : '')\"> <a href=\"{{property.pdf_link}}\" target=\"_blank\">View Document</a></span>\n                <span  *ngIf=\"(property ? (property.property_video_url!='' && property.property_video_url!=null) : '')\"> <a href=\"{{property.property_video_url}}\" target=\"_blank\">View Video</a></span>\n              </div>\n  \n              <div class=\"discrption\">\n                <h2>Description</h2>\n                <p>{{(property ? property.remarks_for_clients : '')}}</p>\n                <br>\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <div class=\"row\">\n                      <div class=\"col-xs-6\">\n                        <p *ngIf=\"(property ? property.project_name!=null : '')\">Project Name</p>\n                        <p *ngIf=\"(property ? property.layout_name!=null : '')\">Layout Name</p>\n                        <p *ngIf=\"(property ? property.bedrooms>0 : '')\">Bedrooms</p>\n                        <p *ngIf=\"(property ? property.washrooms>0 : '')\">Washroom</p>\n                        <p *ngIf=\"(property ? (property.total_area!=null && property.total_area!='') : '')\">Size (in sq ft)</p>\n                        <p *ngIf=\"(property ? (property.balcony_size!=null && property.balcony_size!='') : '')\">Balcony(in sq ft)</p>\n                        <p *ngIf=\"(property ? (property.taxes!=null && property.taxes!='') : '')\">Taxes</p>\n                        <p *ngIf=\"(property ? (property.basement!=null && property.basement!='') : '')\">Basement</p>\n                      </div>\n                      <div class=\"col-xs-6\">\n                        <p style=\"color: black;\" *ngIf=\"(property ? property.project_name!=null : '')\">: Perfect Excusive Home</p>\n                        <p style=\"color: black;\" *ngIf=\"(property ? property.layout_name!=null : '')\">: {{property.layout_name}}</p>\n                        <p style=\"color: black;\" *ngIf=\"(property ? property.bedrooms>0 : '')\">: {{property.bedrooms}}</p>\n                        <p style=\"color: black;\" *ngIf=\"(property ? property.washrooms>0 : '')\">: {{property.washrooms}}</p>\n                        <p style=\"color: black;\" *ngIf=\"(property ? (property.total_area!=null && property.total_area!='') : '')\">: {{property.total_area}}</p>\n                        <p style=\"color: black;\" *ngIf=\"(property ? (property.balcony_size!=null && property.balcony_size!='') : '')\">: {{property.balcony_size}}</p>\n                        <p *ngIf=\"(property ? (property.taxes!=null && property.taxes!='') : '')\">: {{property.taxes}}</p>\n                        <p *ngIf=\"(property ? (property.basement!=null && property.basement!='') : '')\">: {{property.basement}}</p>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <div class=\"row\">\n                      <div class=\"col-xs-6\">\n                        <p *ngIf=\"(property ? property.floors>0 : '')\">Floors</p>\n                        <p *ngIf=\"(property ? property.property_type!=null : '')\">Property type</p>\n                        <p *ngIf=\"(property ? property.nearest_intersection : '')\">Nearest Intersection</p>\n                        <p *ngIf=\"(property ? property.municipality : '')\">Muncipality</p>\n                        <p *ngIf=\"(property ? property.community : '')\">Community</p>\n                        <p *ngIf=\"(property ? property.developer : '')\">Developer</p>\n                        <p *ngIf=\"(property ? (property.garage_type!=null && property.garage_type!='') : '')\">Garage Type</p>\n                        <p *ngIf=\"(property ? (property.garage_spaces!=null && property.garage_spaces!='') : '')\">Garage spaces</p>\n  \n                      </div>\n                      <div class=\"col-xs-6\">\n                        <p style=\"color: black;\" *ngIf=\"(property ? property.floors>0 : '')\">: {{property.floors}}</p>\n                        <p style=\"color: black;\" *ngIf=\"(property ? property.property_type!=null : '')\">: {{property.property_type}}</p>\n                        <p style=\"color: black;\" *ngIf=\"(property ? property.nearest_intersection : '')\">: {{property.nearest_intersection}}</p>\n                        <p style=\"color: black;\" *ngIf=\"(property ? property.municipality : '')\">: {{property.municipality}}</p>\n                        <p style=\"color: black;\" *ngIf=\"(property ? property.community : '')\">: {{property.community}}</p>\n                        <p style=\"color: black;\" *ngIf=\"(property ? property.developer : '')\">:{{property.developer}} </p>\n                        <p *ngIf=\"(property ? (property.garage_type!=null && property.garage_type!='') : '')\">: {{property.garage_type}}</p>\n                        <p *ngIf=\"(property ? (property.garage_spaces!=null && property.garage_spaces!='') : '')\">: {{property.garage_spaces}}</p>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n  \n            </div><!--fluid-->\n          </div><!--body-listing-->\t\n  \n        </div><!--col-8-->\n        <div class=\"col-md-4\" style=\"border-left: 5px solid grey;\">\n          <div class=\"mesgs\">\n            <div class=\"msg_history\">\n              <div *ngFor=\"let note of notes\">\n                <div class=\"incoming_msg\">\n                  <div class=\"incoming_msg_img\"> <img src=\"{{note.image || '../assets/img/profile.png'}}\" style=\"height:40px;width:40px;\"> </div>\n                  <div class=\"received_msg\">\n                    <div class=\"received_withd_msg\">\n                      <p><b>{{note.user_name}}</b></p>\n                      <p>{{note.comment}}</p>\n                      <span class=\"time_date pull-right\">{{note.received_at}}</span>\n                    </div>\n                  </div>\n                  <br>\n                </div>\n              </div>\n            </div>\n            <div class=\"type_msg\">\n              <form [formGroup]=\"addNoteForm\" (ngSubmit)=\"addNoteRequest()\">\n                <div class=\"input_msg_write\">\n                  <input type=\"text\" class=\"write_msg\" placeholder=\"Type a message\" formControlName=\"note\"/>\n                  \n                  <button class=\"msg_send_btn\" type=\"submit\" ><i class=\"fa fa-paper-plane-o\" aria-hidden=\"true\"></i></button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n  \n  \n        </div><!--row-->\n  \n      </div><!--body-->\n    </div><!--fluid-->\n  </div><!--xyz-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/search-properties/search-properties.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/search-properties/search-properties.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div role=\"tabpanel\" class=\"tab-pane\" id=\"search\" *ngIf=\"accessable\">\n  <div class=\"container-fluid second-listing\">\n    <div class=\"listing-1\" style=\"margin-top:2%;\">\n      <div class=\"row\">\n        <div class=\"search-1\">\n          <div class=\"col-xs-12 col-sm-6\">\n            <div class=\"row\" style=\"margin-bottom:2%;\">\n              <div class=\"col-xs-8 col-sm-6\">\n                <select   style=\"width:100%;background:white !important;border:1px solid grey;height:40px;\">\n                  <option value=\"\" hidden ><span class=\"pull-left\"><i class=\"fa fa-filter\" aria-hidden=\"true\"></i></span> <span>Filter</span></option>\n                  <option class=\"filter\" ></option>\n                </select>\n              </div>\n              <div class=\"col-xs-4 col-sm-6\">\n                <a  class=\"btn btn-default btn-sm\" style=\"cursor:pointer;margin-top:1%;\">Reset Filter</a>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-xs-12 col-sm-6 pull-right\">\n            <form >\n              <input type=\"text\" name=\"\" placeholder=\"Search by Mls Number\" class=\"id-input\"  formControlName=\"mls_id\">\n              <input type=\"submit\" name=\"\" value=\"SEARCH\" class=\"sub-input\">\n              <br><br>\n            </form>\n          </div>\n        </div>\n      </div><!--row end-->\n      <br>\n      <div class=\"row\" id=\"panel\">\n        <div class=\"col-lg-12\">\n          <div class=\"col-md-4 col-lg-4\">\n            <div class=\"custom-radios\">\n              <div>\n                <input type=\"radio\" id=\"color-3\" name=\"color\"  >\n                <label for=\"color-3\">\n                  <span>\n                  </span> &nbsp; COMMERCIAL\n                </label>\n              </div> \n            </div>\n          </div>\n          <div class=\"col-md-4 col-lg-4\">\n            <div class=\"custom-radios\">\n              <div>\n                <input type=\"radio\" id=\"color-2\" name=\"color\" >\n                <label for=\"color-2\">\n                  <span>\n                  </span> &nbsp; RESIDENTIAL CONDO\n                </label>\n              </div> \n            </div>  \n          </div>\n          <div class=\"col-md-4 col-lg-4\">\n            <div class=\"custom-radios\">\n              <div>\n                <input type=\"radio\" id=\"color-1\" name=\"color\">\n                <label for=\"color-1\">\n                  <span>\n                  </span> &nbsp; RESIDENTIAL FREEHOLD\n                </label>\n              </div> \n            </div>\n          </div>\n          <form >\n            <div class=\"form-group list-form\">\n              <select >\n                <option value=\"\" hidden >Select Area</option>\n                <option ></option>\n              </select>\n            </div>\n\n            <div class=\"form-group list-form\">\n              <select >\n                <option value=\"\" hidden >Select Municipality</option>\n                <option ></option>\n              </select>\n            </div>\n\n            <div class=\"form-group list-form\">\n              <select  >\n                <option value=\"\" hidden >Lower Price Range</option>\n                <option value=\"0\">0</option>\n              \n              </select>\t\n            </div>\n\n            <div class=\"form-group list-form\" >\n              <select  >\n                <option value=\"\" hidden >Upper Price Range</option>\n                <option value=\"1000000\">Unlimited</option>\n              </select>\n            </div>\n\n            <div class=\"form-group list-form\">\n              <select >\n                <option value=\"\" hidden >Lower Price Range</option> \n                <option value=\"0\">0</option>\n              \n              </select>\t\n            </div>\n\n            <div class=\"form-group list-form\" >\n              <select > \n                <option value=\"\" hidden >Upper Price Range</option>\n                <option value=\"100000000\">Unlimited</option>\n              \n              </select>\t\n              \n            </div>\n\n            <div class=\"form-group list-form\">\n              <select >\n                <option value=\"\" hidden >Select Property Type</option>\n                <option ></option>\n              </select>\t\n            </div>\n\n\n            <div class=\"form-group list-form\" >\n              <select >\n                <option value=\"\" hidden ># Bedrooms</option>\n                <option ></option>    \n              </select>\t\n            </div>\n\n            <div class=\"form-group list-form\" >\n              <select >\n                <option value=\"\" hidden ># Dens</option>\n                <option ></option>    \n              </select>\t\n            </div>\n            \n            <div class=\"form-group list-form\" >\n              <select >\n                <option value=\"\" hidden >Lower Size Range</option>\n                <option value=\"0\">0</option>\n              \n              </select>\n            </div>\n\n            <div class=\"form-group list-form\" *ngIf=\"show_size\">\n              <select (change)=\"onChangeUpperSize($event)\" [value]=\"upp_size\">\n                <option value=\"\" hidden >Upper Size Range</option>\n                <option value=\"100000\">Unlimited</option>\n                \n              </select>\n            </div>\n            \n            \n            <div class=\"row\">\n              <button class=\"btn btn-primary pull-right\" type=\"submit\" name=\"\" style=\"border-radius:0;\">Filter Result\t</button>\t\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"listing-table\" >\n        <div class=\"search-results\" >\n          <div class=\"row\" *ngFor=\"let property of properties\" style=\"margin-bottom:2%;border-bottom:1px solid lightgrey;\">\n            <div  class=\"col-sm-3 col-md-3\" style=\"padding-left: 0px;margin-bottom:1%;cursor: pointer;\" (click)=\"goToListing(property.id)\">\n              <img src=\"{{(property.images_list ? property.images_list[0] : 'https://propertyinsurat.com/templates/bootstrap2-responsive/assets/images/nophoto.png') || 'https://propertyinsurat.com/templates/bootstrap2-responsive/assets/images/nophoto.png'}}\">\n            </div>\n            <div class=\"col-sm-9 col-md-6\" id=\"padding-col\">\n              <h1 *ngIf=\"property.project_name!=null\" (click)=\"goToListing(property.id)\" style=\"cursor:pointer;\">{{property.project_name}}  <span class=\"pull-right label label-info\">{{property.sale_lease}}</span></h1>\n              <h1 *ngIf=\"property.project_name==null\" (click)=\"goToListing(property.id)\" style=\"cursor:pointer;\">{{property.street_num}} {{property.street}}  <span class=\"pull-right label label-info\">{{property.sale_lease}}</span></h1>\n              <h5 *ngIf=\"property.project_name!=null\"><i class=\"fa fa-map-marker\"></i> {{property.street_num}} {{property.street}} {{property.street ? ',' : ''}} {{property.municipality}} {{property.state}} {{property.zip}} {{property.nearest_intersection}}</h5>\n              <h5 *ngIf=\"property.project_name==null\"><i class=\"fa fa-map-marker\"></i>  {{property.municipality}} {{property.state}} {{property.zip}} {{property.nearest_intersection}}</h5>\n              <br>\n              <p [hidden]=\"(property_id == property.id)\">{{property.remarks_for_clients | slice:0:140}} <a (click)=\"showText(property.id)\" style=\"margin-top:1px !important;margin-bottom:1px !important;display: inline-block !important;float:none !important;\">....Read More</a></p>\n              <p  *ngIf=\"moreText && (property_id == property.id)\">{{property.remarks_for_clients}}<a (click)=\"hideText(property.id)\" style=\"margin-top:1px !important;margin-bottom:1px !important;display: inline-block !important;float:none;float:none !important;\">....Read less</a></p>\n              \n              <div class=\"listing-table2\">\n                <span> <i>#</i> {{property.mls_id}}</span>\n                <span> {{property.estimated_price | currency:'USD':true:'1.2-2'}}</span>\n                <span *ngIf=\"property.total_area!=null\"> <i class=\"fa fa-building\"></i> {{property.total_area}} sq Ft</span>\n                <span *ngIf=\"property.bedrooms>0\"> <i class=\"fa fa-bed\"></i> {{property.bedrooms}}</span>\n                <span *ngIf=\"property.washrooms>0\"> <i class=\"fa fa-bath\"></i>{{property.washrooms}}</span>\n                <span *ngIf=\"property.notes>0\"> <i class=\"fa fa-notes-medical\"></i>{{property.notes}} Notes</span>\n              </div>\n            </div>\n            <div class=\"col-md-3\" id=\"padding-col\" style=\"padding-right: 0px;\">\n              <button class=\"list-btn1\" (click)=\"addPropertyToLead(property.id)\" style=\"margin-bottom:5px;\">ADD TO WORKSPACE</button>\n              \n              <button class=\"list-btn2\" (click)=\"copyMlsID(property.mls_id)\">COPY ID</button>\n            </div>\n            <div class=\"col-sm-1\">\n            </div>\n            \n          </div>\n        </div>\n        \n        <!--row-->\n      </div>\n      <div *ngIf=\"properties?.length==0\">\n        <br>\n        <div style=\"margin-top:20px;\">\n          <div style=\"padding:5% 10%;text-align:center;\">\n            <img src=\"../assets/img/notimg/no_property.png\" class=\"no-property\" style=\"height:20vh;\">\n            <br><br>\n            <p>No Property Match accroding to Your Search,Please Refine Your Search</p> \n          </div>\n        </div>\n      </div>\n      <!--table-listing-->\n    </div>\n    <!--listing-1-->\t\n  </div>\n  <!--fluid-->\t\n</div>\n\n<div *ngIf=\"!accessable\">\n  <br>\n  <h4 style=\"text-align: center\">This is temporary Client at this movement</h4>\n  <img src=\"../../../../../assets/img/no/noAccess.png\" class=\"not-access\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/task/task.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/task/task.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div role=\"tabpanel\" class=\"tab-pane\" id=\"task\" *ngIf=\"accessable\">\n    <br>\n    <h3>Tasks List</h3>\n    \n    <div class=\"row\">\n      <div class=\"col-md-6\" *ngIf=\"tasks?.length > 0\">\n        <div class=\"appoinment-list\" *ngFor=\"let task of tasks\">\n          <div class=\"row\" [ngClass]=\"{'activeTask': task.id==task_id}\" style=\"padding-top:10px;\">\n            <div class=\"col-xs-9\">\n              <p style=\"word-wrap: break-word;\">{{task.task}}</p>\n              <h5><small>Task Created : </small>{{task.task_created_at}}</h5>\n              <h5><small>Task Completion Date : </small>{{task.task_completed_at ? task.task_completed_at : 'Not Available'}}</h5>\n              <h5><b style=\"color:gray;\">Created_by</b> : {{task.user_detail.fname}} {{task.user_detail.lname}}</h5>\n              <h5 *ngIf=\"task.task_confirm\"><b style=\"color:gray;\">Task Confirmed_by</b> : {{task.client_detail.fname}} {{task.client_detail.lname}}</h5>\n              <h5 *ngIf=\"task.task_cancel\"><b style=\"color:gray;\">Task Cancelled by</b> : {{task.client_detail.fname}} {{task.client_detail.lname}}</h5>\n            </div>\n            <div class=\"col-xs-3\" style=\"margin-top:-10px;text-align: left;\">\n              \n              <span *ngIf=\"task.user_detail.id==agent_id\"><a (click)=\"removeTask(task.id)\"><i class=\"fa fa-times-circle\"></i></a> &nbsp;&nbsp;&nbsp; <a (click)=\"updateTask(task)\"><i class=\"fa fa-edit\"></i></a></span>\n              <a class=\"btn btn-success btn-sm pull-right\" *ngIf=\"task.user_detail.id!=agent_id&& (!task.task_confirm && !task.task_cancel)\" (click)=\"performTask(task.id,'accept')\" style=\"margin-top:3%;\">Confirm Task</a>\n              <a class=\"btn btn-danger btn-sm pull-right\" *ngIf=\"(!task.task_confirm && !task.task_cancel)\" (click)=\"performTask(task.id,'reject')\" style=\"margin-top:3%;\">&nbsp;Cancel Task</a>\n            </div>\n  \n            <div class=\"col-lg-12\">\n              <a class=\"btn btn-success btn-sm pull-right\" *ngIf=\"task.user_detail.id!=agent_id && (!task.task_confirm && !task.task_cancel)\" (click)=\"performTask(task.id,'accept')\">Confirm Task</a>\n              <a class=\"btn btn-danger btn-sm pull-right\" *ngIf=\"(!task.task_confirm && !task.task_cancel)\" (click)=\"performTask(task.id,'reject')\" style=\"margin-right:1%;\">Cancel Task</a>\n            </div>\n            <br>\n          </div>\n          <hr style=\"width:100%\">\n        </div>\n      </div><!--col-6-->\n      <div class=\"col-md-6\" *ngIf=\"tasks?.length<=0\" style=\"text-align:center;\">\n        <br>\n        <div class=\"no-task\">\n          <div style=\"padding:80px 20px;\">\n            <img src=\"../assets/img/task.png\" style=\"height:50px;width:50px;\">\n            <br><br>\n            <p>No Tasks Available Right Now</p>\n            <h5>Add Tasks</h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"appoinment-form2\">\n          <div class=\"row\"><H2>Task Form</H2></div>\n          <br>\n          <form [formGroup]=\"taskForm\" (ngSubmit)=\"submitTask()\">\n            <div class=\"row\">\n              <label>Task Completion Date</label>\n              <input type=\"date\" name=\"\" class=\"form-control\" placeholder=\"6:50 PM\" formControlName=\"task_completion_date\"  min=\"{{date | date: 'yyy-MM-dd'}}\" style=\"width:100%;\">\n            </div>\n            <br>\n            <div class=\"row\">\n              <label>Discription of Task</label>\n              <textarea class=\"form-control\" rows=\"10\" cols=\"30\"  formControlName=\"task_description\"></textarea>\n            </div>\n            <br>\n            <div class=\"row\">\n              <input type=\"submit\" name=\"\" class=\"btn btn-info pull-right\" value=\"Submit\">\n            </div>\n          </form>\n        </div>\n      </div><!--col-6-->\n      \n    </div>\n  </div>\n\n<div *ngIf=\"!accessable\">\n  <br>\n  <h4 style=\"text-align: center\">This is temporary Client at this movement</h4>\n  <img src=\"../../../../../assets/img/no/noAccess.png\" class=\"not-access\">\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/work-spaces/work-spaces.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/work-spaces/work-spaces.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\n  <div class=\"row\">\n  <div class=\"col-xs-12 col-sm-4 col-md-3 col-lg-3 sidebar\">\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-6 col-md-5 col-lg-5\" style=\"padding-right: 0px;\">\n          <select (change)=\"onChangeStatus($event)\" class=\"form-control\" style=\"border-radius:0px;\">\n            <option value=\"\" hidden> Select Status </option>\n            <option [value]=\"sv.value\" *ngFor=\"let sv of statusValues\" [selected]=\"sv.value == selectedStatus\">{{sv.name}}</option>\n          </select>\n        </div>\n        <form>\n          <div class=\"col-xs-12 col-sm-6 col-md-5 col-lg-5\" style=\"padding-right: 0px;\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search Client\">\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-2 col-lg-2\">\n              <button type=\"submit\" class=\"btn btn-success\"><i class=\"fa fa-search\"></i></button>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"side-menu\">\n        <nav class=\"navbar\" role=\"navigation\" style=\"background: white;border: none;\">\n          <!-- Main Menu -->\n          <div class=\"side-menu-container\">\n            <div>\n              <h2 class=\"main-heading\">Clients Workspace</h2>\n              <p class=\"sub-heading\">Your Leads</p>\n            </div>\n            <div class=\"leads-container\">\n              <ul class=\"nav navbar-nav\">\n                <li style=\"cursor: pointer\" *ngFor=\"let item of activeLeads\">\n\n                  <a [ngClass]=\"{'active': isSelected(item)}\" (click)=\"selectLeadData(item)\">\n                    <div class=\"row\">\n\n                      <div class=\"col-xs-1\" style=\"padding-top: 10px;\">\n                        <i class=\"fa fa-circle\" style=\"color: #00AA42;font-size: 14px;\"></i>\n                      </div>\n                      <div class=\"col-xs-8\">\n                        <h2 class=\"link-heading\">{{item.title}}</h2>\n                        <div class=\"link-subheading\">{{item.status}}</div>\n                        <!-- <div class=\"link-subheading-2\">Online</div> -->\n\n                      </div>\n                      <div class=\"col-xs-2\">\n                        <i class=\"fa fa-chevron-right arrow\" style=\"font-size: 20px;color: grey;\"></i>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n\n                <li style=\"cursor: pointer\" *ngFor=\" let lead of leadArray\">\n                  <a [ngClass]=\"{'active': isSelected(lead)}\" (click)=\"selectLeadData(lead)\">\n                    <div class=\"row\">\n\n                      <div class=\"col-xs-1\" style=\"padding-top: 10px;\">\n                        <i class=\"fa fa-circle\" *ngIf=\"!lead.online\" style=\"color:rgba(255, 255, 0, 0.849);font-size: 14px;\"></i>\n                        <i class=\"fa fa-circle\" *ngIf=\"lead.online\" style=\"color:#00AA42;font-size: 14px;\"></i>\n                      </div>\n                      <div class=\"col-xs-8\">\n                        <h2 class=\"link-heading\">{{lead.title}} </h2>\n                        <div class=\"link-subheading\">{{lead.status}} <span class=\"badge badge-danger\" *ngIf=\"lead.msg!=undefined && lead.msg>0\">{{lead.msg}}</span></div>\n                        <!-- <div class=\"link-subheading-2\">{{lead.online ? 'Online' : 'Offline'}} </div> -->\n                      </div>\n                      <div class=\"col-xs-2\">\n                        <i class=\"fa fa-chevron-right arrow\" style=\"font-size: 20px;color: grey;\"></i>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n              </ul>\n\n              <!-- <ul class=\"nav navbar-nav\">\n                  <li>\n                    <h2 class=\"main-heading\">WORKPLACES</h2>\n                    <p class=\"sub-heading\">No Client active yet</p>\n                  </li>\n                  <li *ngFor=\"let nul of [1,2,3]\">\n                    <img src=\"../../../assets/img/notimg/watermark.png\" width=\"100%\">\n                    <hr>\n                  </li>            \n                </ul> -->\n            </div>\n          </div>\n        </nav>\n      </div>\n\n  </div>\n  <div class=\"col-xs-12 col-sm-8 col-md-9 col-lg-9\">\n  \n    <div class=\"work-listing\">\n      <div class=\"work-tab\">\n        <a routerLink=\"details\">Details</a>\n        <a routerLink=\"chats\">Chat</a>\n        <a routerLink=\"properties\">My Properties</a>\n        <a routerLink=\"search\">Search Properties</a>\n        <a routerLink=\"tasks\">Task List</a>\n        <a routerLink=\"documents\">Documents</a>\n        <a routerLink=\"appointments\">Appointments</a>\n        <a routerLink=\"members\">Lead Members</a>\n        <a routerLink=\"invite\">Invite Friend</a>\n      </div>\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid header-1\">\n\t<div class=\"topbar\">\n\t\t<ul>\n\t\t\t<li><span><i class=\"fa fa-envelope\"></i></span><a href=\"mailto:Synergy@gmail.com\" target=\"_blank\">\n\t\t\t\t\tsynergii.ca@gmail.com</a></li>\n\t\t\t<li><a href=\"javascript:;\" routerLink=\"login\">Login</a></li>\n\t\t\t<li class=\"suscribe\"><a href=\"javascript:;\" style=\"color: white;\" (click)=\"scroll('price')\">SUBSCRIBE</a>\n\t\t\t</li>\n\t\t</ul>\n\n\t</div>\n\t<!--topbar-->\n</div>\n<!--header-1-->\n<nav class=\"navbar\" id=\"home\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"\n\t\t\t\taria-expanded=\"false\" aria-controls=\"navbar\" style=\"background-color: white;\">\n\n\t\t\t\t<span class=\"sr-only\">Toggle-Navigation</span>\n\t\t\t\t<span class=\"icon-bar\" style=\"background-color: black;\"></span>\n\t\t\t\t<span class=\"icon-bar\" style=\"background-color: black;\"></span>\n\t\t\t\t<span class=\"icon-bar\" style=\"background-color: black;\"></span>\n\t\t\t</button>\n\t\t\t<a href=\"#\" class=\"navbar-brand\"><img src=\"../../../assets/img/home/logo.png\"></a>\n\t\t</div>\n\t\t<!--navbar -header-->\n\n\t\t<div id=\"navbar\" class=\"collapse navbar-collapse navbar-right\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li><a href=\"javascript:;\" (click)=\"scroll(home)\" style=\"margin-top: 0px\" class=\"active\">Home</a></li>\n\t\t\t\t<li><a href=\"javascript:;\" (click)=\"scroll(about)\" style=\"margin-top: 0px\">About us</a></li>\n\t\t\t\t<li><a href=\"javascript:;\" (click)=\"scroll(why)\" style=\"margin-top: 0px\">Why synergii</a></li>\n\t\t\t\t<li><a href=\"javascript:;\" (click)=\"scroll(price)\" style=\"margin-top: 0px\">Pricing</a></li>\n\t\t\t\t<li><a href=\"javascript:;\" (click)=\"scroll(clients)\" style=\"margin-top: 0px\">Our clients</a></li>\n\t\t\t\t<li><a href=\"javascript:;\" (click)=\"scroll(contact)\" style=\"margin-top: 0px\">Contact US</a></li>\n\t\t\t\t<li class=\"one\"><a href=\"javascript:;\" (click)=\"scroll(contact)\" style=\"margin-top: 0px\">Subscribe</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"two\"><a href=\"javascript:;\" routerLink=\"signin\" style=\"margin-top: 0px\">Login</a></li>\n\t\t\t</ul>\n\t\t\t<!--ul close -->\n\t\t</div>\n\t\t<!--div -->\n\t</div><!-- container-->\n</nav>\n<!--nav -->\n\n\n<app-slider></app-slider>\n<app-chat></app-chat>\n<!-- <app-slide-show></app-slide-show> -->\n<!-- <app-chat-bot></app-chat-bot> -->\n\n<div class=\"container-fluid second-section\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-3 text-center\">\n\t\t\t<img src=\"../../../assets/img/home/heart.png\" style=\"margin-bottom: 15px;\">\n\t\t\t<!-- <h4>10 Millions</h4> -->\n\t\t\t<p>Happy Customers</p>\n\t\t</div>\n\t\t<div class=\"col-md-3 text-center\">\n\t\t\t<img src=\"../../../assets/img/home/like.png\" style=\"margin-bottom: 15px;\">\n\t\t\t<!-- <h4>15 Millions</h4> -->\n\t\t\t<p>sellers prefer us</p>\n\t\t</div>\n\t\t<div class=\"col-md-3 text-center\">\n\t\t\t<img src=\"../../../assets/img/home/people.png\" style=\"margin-bottom: 15px;\">\n\t\t\t<!-- <h4>18 Millions</h4> -->\n\t\t\t<p>buyers trust us</p>\n\t\t</div>\n\t\t<div class=\"col-md-3 text-center\">\n\t\t\t<img src=\"../../../assets/img/home/message.png\" style=\"margin-bottom: 15px;\">\n\t\t\t<!-- <h4>1000</h4> -->\n\t\t\t<p>expert guidance</p>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container about\" id=\"about\" #about>\n\t<h2>ABOUT US</h2>\n\t<hr align=\"left\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-7\">\n\t\t\t<div class=\"about-row\">\n\t\t\t\t<h4>Let's take you to Your</h4>\n\t\t\t\t<h1>Dream destination</h1>\n\t\t\t\t<p>SYNERGii focuses on catering to what your client needs so that you can help them find what they want\n\t\t\t\t\tfaster and more effectively. At SYNERGii we strive to help you, agents, better understand what\n\t\t\t\t\tclients are looking for. Property hunting is never an easy task so we created a platform where both\n\t\t\t\t\tyou and your client can work collaboratively in closing this deal together. We like to call this\n\t\t\t\t\tsynergize.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-5 text-center\">\n\t\t\t<img src=\"../../../assets/img/home/about.png\">\n\t\t\t<br><br>\n\t\t\t<div class=\"row text-center\">\n\t\t\t\t<a style=\"text-align:center;cursor:pointer;\" (click)=\"openVideoModal()\"><img\n\t\t\t\t\t\tsrc=\"../../../assets/img/home/play.png\" style=\"width:34%;\"></a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--row-end-->\n</div>\n<!--why-->\n\n<div class=\"container why\" id=\"why\" #why>\n\t<h2>Why Synergii</h2>\n\t<hr align=\"left\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-7\">\n\t\t\t<div style=\"padding-right: 50px;padding-top: 10px;\">\n\t\t\t\t<h3>Engage</h3>\n\t\t\t\t<h4>Know what your client is looking for</h4>\n\t\t\t\t<h1>before you start looking.</h1>\n\t\t\t\t<p>Engage with your clients in real time with our instant messaging tool and observe your client’s\n\t\t\t\t\tbehaviours as they actively search for listings with you. Understanding what they like and don’t\n\t\t\t\t\tlike has never been so easy.</p>\n\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Leave comments on listings</li>\n\t\t\t\t\t<li>Chat box tool</li>\n\t\t\t\t\t<li>Easy icons to indicate how you feel about the listings</li>\n\t\t\t\t\t<li>Search engine of listings for your clients to use</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-5\">\n\t\t\t<img src=\"../../../assets/img/home/instant_message.png\">\n\t\t</div>\n\t</div>\n\t<!--row-end-->\n</div>\n\n<button (click)=\"scroll(home)\" id=\"myBtn\" title=\"Go to top\"><i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i>\n</button>\n\n<!--why-->\n<div class=\"container observe\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-6\" style=\"padding-right: 20px;\">\n\t\t\t<div class=\"first\">\n\t\t\t\t<h4>Observe</h4>\n\t\t\t\t<h3>Let your clients know</h3>\n\t\t\t\t<h2>what you are doing for them.</h2>\n\t\t\t\t<p>We all know how tedious searching for properties can be, why not let your clients have a peek as\n\t\t\t\t\twell? With our user friendly platform, you can allow your users to see exactly what you are doing\n\t\t\t\t\tbehind the scenes for them. Whether it be finding a space or checking for uses, let everyone know\n\t\t\t\t\thow hard working you are!</p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Real time screen share</li>\n\t\t\t\t\t<li>Updated activity logs</li>\n\t\t\t\t\t<li>Transparent task lists</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"col-md-6\" style=\"padding-left: 20px;\">\n\t\t\t<div class=\"second\">\n\t\t\t\t<h4 style=\"color: #1F4785;text-shadow: 1px 0px #1F4785;font-size:29px !important;\">Organised</h4>\n\t\t\t\t<h3>Have everything all in</h3>\n\t\t\t\t<h2>one space. </h2>\n\t\t\t\t<p>Did I send this already? What did they say about that listing again? Don’t worry, it’s all here at\n\t\t\t\t\tSYNERGii. All the listings you find can be added to the workspace where you can always go back on\n\t\t\t\t\tlater. We keep a track record of all the concerns, questions and comments your clients may have so\n\t\t\t\t\tyou don’t have to. </p>\n\t\t\t\t<ul>\n\t\t\t\t\t<li>Get notified on upcoming appointments</li>\n\t\t\t\t\t<li>Create to-do lists for you and your clients</li>\n\t\t\t\t\t<li>Upload documents, forms and applications</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--observe-->\n<div class=\"container price\" id=\"price\" #price>\n\t<h2 style=\"color: #1F4785;\">Subscribe to a plan</h2>\n\t<hr align=\"left\" style=\"margin-bottom:5px;\">\n\t<p style=\"color:grey;font-size:16px;\">All plans include a 30 day FREE Trial No contracts, no hidden fees Cancel\n\t\tAnytime!</p>\n\t<br>\n\t<div class=\"row\">\n\t\t<br>\n\t\t<div class=\"col-md-4\" *ngFor=\"let plan of plans\">\n\t\t\t<div class=\"price-block text-center\">\n\t\t\t\t<h2><span *ngIf=\"plan.price==55\">BROKERAGE</span> <span *ngIf=\"plan.price==77\">TEAM</span> <span\n\t\t\t\t\t\t*ngIf=\"plan.price==99\">AGENT</span> ({{plan.total_agents}} User)</h2>\n\t\t\t\t<h3>${{plan.price}}</h3>\n\t\t\t\t<h4>Per Month/User</h4>\n\t\t\t\t<p *ngIf=\"plan.clients<0\">Unlimited Clients <span style=\"color:red;\">*</span></p>\n\t\t\t\t<p *ngIf=\"plan.documents<0\">Unlimited Documents <span style=\"color:red;\">*</span></p>\n\t\t\t\t<p *ngIf=\"plan.hours_of_screenshare<0\">Unlimited Hours of Screenshare <span style=\"color:red;\">*</span>\n\t\t\t\t</p>\n\t\t\t\t<a href=\"javascript:;\" target=\"_blank\" > <button\n\t\t\t\t\t\tclass=\"btn btn-primary\">Sign Up as an <span *ngIf=\"plan.price==55\">Brokerage</span> <span\n\t\t\t\t\t\t\t*ngIf=\"plan.price==77\">Team</span> <span *ngIf=\"plan.price==99\">Agent</span> &nbsp;<i\n\t\t\t\t\t\t\tclass=\"fa fa-angle-double-right\"></i></button></a>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\n\t</div>\n</div>\n<!--price-->\n<div class=\"container-fluid clients\" id=\"clients\" #clients>\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6 col-md-offset-3 text-center\">\n\t\t\t\t<h2>Our Clients are Our Partners</h2>\n\t\t\t\t<hr align=\"text-center\">\n\t\t\t\t<div class=\"client-2\">\n\t\t\t\t\t<!-- <h3>are Our Partners</h3> -->\n\t\t\t\t\t<!-- <h1>CLIENT MUST BE 'WE'</h1> -->\n\t\t\t\t\t<p>Over the years, our founders have accumulated substantial experience in the industry of property\n\t\t\t\t\t\tmanagement and real estate. We understand how a company’s goal and success can be supported and\n\t\t\t\t\t\treinforced with the proper and well-rounded features paired with an experienced and\n\t\t\t\t\t\tknowledgeable staff team.</p>\n\t\t\t\t\t<p>We aim to work with you collaboratively as a team, just as you are with your clients as well.\n\t\t\t\t\t</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!-- <div class=\"col-md-6\" style=\"padding-left: 60px;\">\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<img src=\"../../../assets/img/home/logo_four.png\">\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<img src=\"../../../assets/img/home/logo_two.png\">\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"row\" style=\"margin-top: 2%;\">\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<img src=\"../../../assets/img/home/logo_three.png\">\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<img src=\"../../../assets/img/home/logo_one.png\">\n\t\t\t</div>\n\t\t\t</div>\n\t\t</div> -->\n\t\t</div>\n\t</div>\n</div>\n<!--clients-->\n<div class=\"container-fluid\" style=\"background:#061B30;\" id=\"contact\" #contact>\n\t<div class=\"container footer\">\n\t\t<img src=\"../../../assets/img/home/logo_white.png\">\n\t\t<h1>Interested in finding out how we can help you</h1>\n\t\t<p>Provide us your details and let our professionals make a contact with you</p>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-10 contact\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<h2 style=\"margin-top: 33px;\">CONTACT US:</h2>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<span><i class=\"fa fa-phone\"></i></span>\n\t\t\t\t\t\t<h4><a href=\"tel:1 (416) 510-3000\">+1 (416) 510-3000</a></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<span><i class=\"fa fa-skype\"></i></span>\n\t\t\t\t\t\t<h4><a href=\"skype:synergii.ca?call\">skype: synergii.ca</a></h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t\t\t<span><i class=\"fa fa-envelope\"></i></span>\n\t\t\t\t\t\t<h4>synergii.ca@gmail.com</h4>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--row-end-->\n\t\t\t\t<br><br>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t<h2>Subscribe Newsletter</h2>\n\t\t\t\t\t\t<p style=\"font-size: 18px;margin-top: -5px;\">Subscribe to our list to get email updates.</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-sm-6\" style=\"padding-top: 33px;\">\n\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Enter your Email\"\n\t\t\t\t\t\t\t\tstyle=\"background: #0B1016;padding: 10px;width: 70%;border:1px solid #5b5a5a;color:white;\">\n\t\t\t\t\t\t\t<input type=\"submit\" name=\"\" value=\"Submit\"\n\t\t\t\t\t\t\t\tstyle=\"background: white;padding: 10px;background: #0B1016;color: #134678;margin-left: -4px;border:1px solid grey;font-weight: bold;border:1px solid #5b5a5a;\">\n\t\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-sm-12 foot-link\" style=\"padding-top: 70px;\">\n\t\t\t\t\t\t<a href=\"javascript:;\" (click)=\"scroll('home')\">HOME</a>\n\t\t\t\t\t\t<a href=\"javascript:;\" (click)=\"scroll('about')\">ABOUT US</a>\n\t\t\t\t\t\t<a href=\"javascript:;\" (click)=\"scroll('clients')\">OUR CLIENTS</a>\n\t\t\t\t\t\t<a href=\"javascript:;\" (click)=\"scroll('why')\">WHY SYNERGII</a>\n\t\t\t\t\t\t<a href=\"javascript:;\" (click)=\"scroll('price')\">PRICING</a>\n\t\t\t\t\t\t<a href=\"javascript:;\" (click)=\"scroll('contact')\">CONTACT US</a>\n\t\t\t\t\t\t<a routerLink=\"/privacy\" target=\"_blank\">POLICY</a>\n\t\t\t\t\t\t<a routerLink=\"/multiple-properties\">forchatting</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<p style=\"font-size: 19px;margin-top: 27px;\" id=\"big-end\">@all right reserved by tecorb</p>\n\t\t\t\t<div class=\"col-md-1\">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-md-2 text-right icon pull-right\">\n\t\t\t\t<span><a href=\"https://www.youtube.com/channel/UCTN94g0aK1vz0fXqlapY8hA\" target=\"_blank\"><i\n\t\t\t\t\t\t\tclass=\"fa fa-youtube\"></i></a></span>\n\t\t\t\t<span><i class=\"fa fa-google\"></i></span>\n\t\t\t\t<span><a href=\"https://www.linkedin.com/company/synergii-io/ \" target=\"_blank\"><i\n\t\t\t\t\t\t\tclass=\"fa fa-linkedin\"></i></a></span>\n\t\t\t\t<span><a href=\"https://twitter.com/synergii_io \n\t\t\t\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></span>\n\t\t\t\t<span><a href=\"https://www.facebook.com/synergii.io/\" target=\"_blank\"><i\n\t\t\t\t\t\t\tclass=\"fa fa-facebook\"></i></a></span>\n\t\t\t</div>\n\t\t\t<p style=\"font-size: 14px;margin-top: 27px;\" id=\"small-end\">@all rights reserved by tecorb</p>\n\t\t\t<div class=\"col-md-1\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<div id=\"videomodal\" class=\"modal fade\" data-backdrop=\"static\" data-keyboard=\"false\" role=\"dialog\">\n\t<div class=\"modal-dialog\">\n\n\t\t<!-- Modal content-->\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"closeVideoModal()\">&times;</button>\n\t\t\t\t<h4 class=\"modal-title text-center\" style=\"color:black;\">Synergii</h4>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\">\n\t\t\t\t<video style=\"width:100%;\" controls preload id=\"bgvid\">\n\t\t\t\t\t<source src=\"../assets/synergii.mp4\" type=\"video/mp4\" />\n\t\t\t\t</video>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/advertise-link/advertise-link.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/advertise-link/advertise-link.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Firebase Chat module\n\n<hr>\nProperties\n<ul>\n    <li *ngFor=\"let property of propertiesList; let i = index\">\n        {{property.id}} #{{property.mls_id}}\n        <ul>\n            <li *ngFor=\"let item of messagesList;\">\n                {{item.id}} {{item.message}}\n            </li>\n        </ul>\n        <form [formGroup]=\"form\"  (submit)=\"sendMessage(property.mls_id)\">\n            <input type=\"text\" name=\"textMessage\"  formControlName=\"textMessage\" autocomplete=\"off\">\n            <input type=\"submit\" value=\"send\">\n        </form>\n        <br>\n    </li>\n</ul> -->\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n        <div class=\"container-fluid\">\n            <div class=\"navbar-header\">\n            <a class=\"navbar-brand\" href=\"#\">Synergii</a>\n            </div>\n        </div>\n    </nav>\n    <div class=\"properties\">\n        <div class=\"container\">\n            <div class=\"row no-gutters\">\n                <div class=\"col-md-3\">\n                    <div class=\"sidebar-2\">\n                        <div class=\"head\">\n                            <div class=\"row\">\n                                <div class=\"col-md-3\">\n                                    <img src=\"{{agent.firm_logo}}\" onError=\"this.src='../../../../assets/img/home/logo.png'\" alt=\"logo\" class=\"w-100\">\n                                </div>\n                                <div class=\"col-md-8\">\n                                    <div class=\"heading\">\n                                        <h5>Xoocca Brokerage</h5>\n                                        <p>Broker of Record</p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-12\">\n                                <table class=\"table table-strip\">\n                                    <thead>\n                                        <tr>\n                                            <th>Advertise details</th>\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr>\n                                            <td>Advertise Id #{{advertise.id}}</td>\n                                        </tr>\n                                        <tr *ngFor=\"let property of propertiesList\">\n                                            <td>MLS Id #{{property.mls_id}}</td>\n                                        </tr>\n                                        <tr>\n                                            <td><hr>We are available to help you for these properties. You just need to start chat over your favourite listing.</td>\n                                        </tr>\n                                        \n                                    </tbody>\n                                </table>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"feeds\" *ngFor=\"let property of propertiesList; let i = index\">\n                        <div class=\"row\">\n                            <div class=\"col-md-2\">\n                                <div class=\"profile-img\">\n                                    <img src=\"{{agent.image}}\" onError=\"this.src='../../../../assets/img/notimg/property_placeholder.jpg'\" alt=\"profile\" style=\"width: 50px; height:50px;\" class=\"img-circle\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-10\">\n                                <div class=\"profile-details\">\n                                    <p>{{agent.fname}} {{agent.lname}}\n                                        <span class=\"pull-right\">MLS-ID: #{{property.mls_id}}</span>\n                                    </p>\n                                    <Span>{{advertise.received_at}}</Span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"post\">\n                                <div class=\"description\">\n                                    <p><i class=\"fa fa-map-marker\"></i> {{property.address}}, {{property.area}}, {{property.zip}} <img src=\"../../../../assets/img/heart.png\" alt=\"heart\"></p>\n    \n                                    <span>${{property.list_price}} {{property.category}} {{property.property_type}} <span class=\"pull-right\">{{property.total_area ==undefined ? '' : property.total_area+\" Sq. Ft.\"}}</span> </span>\n                                </div>\n                                <div class=\"image\">\n                                    <img src=\"{{property.images_list[0]}}\" onError=\"this.src='../../../../assets/img/notimg/property_placeholder.jpg'\" alt=\"post\">\n                                </div>\n                                <div class=\"afterText\">\n                                    <p>{{property.remarks_for_clients}}<br> {{(property.nearest_intersection==\"\" || property.nearest_intersection==undefined) ? '' : 'Nearest Intersection - '+property.nearest_intersection }}</p>\n    \n                                </div>\n                                <div class=\"row\">\n                                    <form [formGroup]=\"form\"  (submit)=\"sendMessage(property.mls_id)\">\n                                        <div class=\"col-md-10 msg-container\">\n                                            <div class=\"profile-details\">\n                                                <input type=\"text\" class=\"chat-box\" placeholder=\"Start Chat\" name=\"textMessage\"  formControlName=\"textMessage\" autocomplete=\"off\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-2\">\n                                            <!-- <input type=\"submit\"  class=\"btn btn-default\" value=\"send\"> -->\n                                            <button class=\"btn btn-default btn-circle\">  <i class=\"fa fa-refresh fa-spin fa-2x\" *ngIf=\"submitted\"></i>  <img src=\"../../../../assets/img/send.png\" *ngIf=\"!submitted\"  class=\"send-message\" alt=\"send\"></button>\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div *ngIf=\"propertiesList?.length==0\">\n                        <br>\n                        <div>\n                            <div style=\"text-align:center;\">\n                            <img src=\"../assets/img/notimg/no_property.png\" class=\"no-property\">\n                            <p>No properties found with this selected filter, please change the filter vaules to see more results.</p> \n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-lg-3\">\n                    <div class=\"postChat clearfix\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n                        <div [ngClass]=\"{'person2': msg.user_id==agentId,'person1': msg.user_id!=agentId}\" *ngFor=\"let msg of messagesList;\">\n                            <img src=\"../../../../assets/img/home/profile.png\" alt=\"profile\" *ngIf=\"msg.user_id==agentId\">\n                            <div class=\"text\">\n                                <p class=\"up\">{{msg.message}}</p>\n                                <div *ngIf=\"msg.mls_number!=''&&msg.mls_number!=undefined\">MLS ID {{msg.mls_number}}</div>\n                            </div>\n                            <div class=\"small\">Sept 20, 2019. 6:47:46 PM</div>\n                        </div>\n                        <img src=\"../../../../../assets/img/no/no_chat.png\" class=\"no-chat\" *ngIf=\"messagesList.length==0\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/agent-multiple-properties/agent-multiple-properties.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/agent-multiple-properties/agent-multiple-properties.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"agent\">\n    <div class=\"container-fluid\">\n        <div class=\"col-md-7\">\n            <div class=\"invite-section\">\n                <h1>Select Criteria</h1>\n                <p>Select criteria of listings presented simpily to prospective </p>\n                <div class=\"row\" id=\"panel\">\n                    <div class=\"col-md-4 col-lg-5\">\n                        <a class=\"btn btn-info btn-block\">SALE</a>\n                        <br>\n                    </div>\n                    <div class=\"col-md-4 col-lg-5\">\n                        <a class=\"btn btn-info btn-block active-btn\">LEASE</a>\n                    </div>\n                </div>\n                <div class=\"row\" id=\"inside-panel\" style=\"display: block;\">\n                    <br>\n                    <div class=\"col-md-4 col-lg-4\">\n                        <div class=\"custom-radios\">\n                            <div><input id=\"color-3\" name=\"color\" type=\"radio\" value=\"COMMERCIAL\">\n                                <label for=\"color-3\">\n                                    <span></span> &nbsp; COMMERCIAL\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-lg-4\">\n                        <div class=\"custom-radios\">\n                            <div><input id=\"color-2\" name=\"color\" type=\"radio\" value=\"CONDO\">\n                                <label for=\"color-2\">\n                                    <span></span> &nbsp; RESIDENTIAL CONDO\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 col-lg-4\">\n                        <div class=\"custom-radios\">\n                            <div>\n                                <input id=\"color-1\" name=\"color\" type=\"radio\" value=\"RESIDENTIAL\">\n                                <label for=\"color-1\">\n                                    <span></span> &nbsp; RESIDENTIAL FREEHOLD\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\" style=\"margin-top:8%;\">\n                        <form novalidate=\"\" class=\"ng-untouched ng-pristine ng-valid\">\n                            <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\">\n                                <ng-multiselect-dropdown-angular7 [placeholder]=\"'Select Area'\" [data]=\"dropdownList\"\n                                    (ngModel)=\"selectedItems\" [settings]=\"dropdownSettings\"\n                                    (onSelect)=\"onItemSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\n                                </ng-multiselect-dropdown-angular7>\n                            </div>\n                            <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\">\n                                <ng-multiselect-dropdown-angular7 [placeholder]=\"'Select Area'\" [data]=\"dropdownList\"\n                                    (ngModel)=\"selectedItems\" [settings]=\"dropdownSettings\"\n                                    (onSelect)=\"onItemSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\n                                </ng-multiselect-dropdown-angular7>\n                            </div>\n                            <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\">\n                                <select class=\"form-control\">\n                                    <option hidden=\"\" value=\"\">Lower Price Range</option>\n                                    <option value=\"0\">0</option>\n                                    <option value=\"100\">100</option>\n                                    <option value=\"500\">500</option>\n                                    <option value=\"1000\">1,000</option>\n                                    <option value=\"1500\">1,500</option>\n                                    <option value=\"2000\">2,000</option>\n                                    <option value=\"3000\">3,000</option>\n                                    <option value=\"4000\">4,000</option>\n                                    <option value=\"5000\">5,000</option>\n                                    <option value=\"6000\">6,000</option>\n                                    <option value=\"7000\">7,000</option>\n                                    <option value=\"8000\">8,000</option>\n                                    <option value=\"99999\">99,999</option>\n                                </select>\n                            </div>\n                            <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\">\n                                <select class=\"form-control\">\n                                    <option hidden=\"\" value=\"\">Lower Price Range</option>\n                                    <option value=\"0\">0</option>\n                                    <option value=\"100\">100</option>\n                                    <option value=\"500\">500</option>\n                                    <option value=\"1000\">1,000</option>\n                                    <option value=\"1500\">1,500</option>\n                                    <option value=\"2000\">2,000</option>\n                                    <option value=\"3000\">3,000</option>\n                                    <option value=\"4000\">4,000</option>\n                                    <option value=\"5000\">5,000</option>\n                                    <option value=\"6000\">6,000</option>\n                                    <option value=\"7000\">7,000</option>\n                                    <option value=\"8000\">8,000</option>\n                                    <option value=\"99999\">99,999</option>\n                                </select>\n                            </div>\n                            <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\">\n                                <ng-multiselect-dropdown-angular7 [placeholder]=\"'Select Area'\" [data]=\"dropdownList\"\n                                    (ngModel)=\"selectedItems\" [settings]=\"dropdownSettings\"\n                                    (onSelect)=\"onItemSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\n                                </ng-multiselect-dropdown-angular7>\n                            </div>\n                            <div class=\"col-xs-12 col-sm-6 col-md-6 col-lg-6 form-group\">\n                                <select class=\"form-control\">\n                                    <option hidden=\"\" value=\"\">Lower Price Range</option>\n                                    <option value=\"0\">0</option>\n                                    <option value=\"100\">100</option>\n                                    <option value=\"500\">500</option>\n                                    <option value=\"1000\">1,000</option>\n                                    <option value=\"1500\">1,500</option>\n                                    <option value=\"2000\">2,000</option>\n                                    <option value=\"3000\">3,000</option>\n                                    <option value=\"4000\">4,000</option>\n                                    <option value=\"5000\">5,000</option>\n                                    <option value=\"6000\">6,000</option>\n                                    <option value=\"7000\">7,000</option>\n                                    <option value=\"8000\">8,000</option>\n                                    <option value=\"99999\">99,999</option>\n                                </select>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <button class=\"btn btn-primary pull-right\" name=\"\" style=\"border-radius:0;\"\n                                    type=\"submit\">Submit</button>\n                            </div>\n                        </form>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        <div class=\"col-md-5\">\n            <div class=\"search-results\" infinitescroll=\"\">\n                <table class=\"table table-striped\">\n                    <tbody>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <p>Link</p>\n                                </div>\n                            </td>\n                            <td>\n                                <div style=\"word-break: break-all;\">\n                                    <a class=\"btn btn-primary pull-right\" href=\"javascript:;\"> Copy link</a>\n                                </div>\n\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/properties-listings/properties-listings.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/properties-listings/properties-listings.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Firebase Chat module\n\n<hr>\nProperties\n<ul>\n    <li *ngFor=\"let property of propertiesList; let i = index\">\n        {{property.id}} #{{property.mls_id}}\n        <ul>\n            <li *ngFor=\"let item of messagesList;\">\n                {{item.id}} {{item.message}}\n            </li>\n        </ul>\n        <form [formGroup]=\"form\"  (submit)=\"sendMessage(property.mls_id)\">\n            <input type=\"text\" name=\"textMessage\"  formControlName=\"textMessage\" autocomplete=\"off\">\n            <input type=\"submit\" value=\"send\">\n        </form>\n        <br>\n    </li>\n</ul> -->\n\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\">Synergii</a>\n        </div>\n    </div>\n</nav>\n<div class=\"properties\">\n    <div class=\"container\">\n        <div class=\"row no-gutters\">\n            <div class=\"col-md-3\">\n                <div class=\"sidebar-2\">\n                    <div class=\"head\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <img src=\"{{agent.firm_logo}}\" onError=\"this.src='../../../../assets/img/home/logo.png'\" alt=\"logo\" class=\"w-100\">\n                            </div>\n                            <div class=\"col-md-8\">\n                                <div class=\"heading\">\n                                    <h5>Xoocca Brokerage</h5>\n                                    <p>Broker of Record</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"criteria-perpose\">\n                                <h3>Select Criteria</h3>\n                                <div class=\"msg\">\n                                    <input type=\"radio\" id=\"radio\" name=\"radio\" value=\"SALE\" (change)=\"onChangePropertyFor('SALE','')\">\n                                    <label for=\"radio\"></label>\n                                    <span> Sale</span>\n                                </div>\n                                <div class=\"msg\">\n                                    <input type=\"radio\" id=\"radio2\" name=\"radio\" value=\"Lease\" (change)=\"onChangePropertyFor('Lease','')\">\n                                    <label for=\"radio2\"></label>\n                                    <span>Lease</span>\n                                </div>\n                            </div>\n                            <div class=\"criteria-method\">\n                                <div class=\"msg\">\n                                    <input type=\"radio\" id=\"radio3\" name=\"method\" value=\"COMMERCIAL\" (change)=\"SelectPropertyType($event)\">\n                                    <label for=\"radio3\"></label>\n                                    <span>COMMERCIAL</span>\n                                </div>\n                                <div class=\"msg\">\n                                    <input type=\"radio\" id=\"radio4\" name=\"method\" value=\"CONDO\" (change)=\"SelectPropertyType($event)\">\n                                    <label for=\"radio4\"></label>\n                                    <span>RESIDENTIAL CONDO</span>\n                                </div>\n                                <div class=\"msg\">\n                                    <input type=\"radio\" id=\"radio5\" name=\"method\" value=\"RESIDENTIAL\" (change)=\"SelectPropertyType($event)\">\n                                    <label for=\"radio5\"></label>\n                                    <span>RESIDENTIAL FREEHOLD</span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"select-area\">\n                        <div class=\"row\">\n                                <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <ng-multiselect-dropdown-angular7  [placeholder]=\"'Select Area'\"\n                                [data]=\"areas\"\n                                [(ngModel)]=\"selected_area\"\n                                [settings]=\"dropdownSettings\"\n                                (onSelect)=\"onAreaSelect($event)\"\n                                (onSelectAll)=\"onSelectAllArea($event)\"\n                                (onDeSelect)=\"onAreaDeSelect($event)\"\n                                (onDeSelectAll)=\"onAreaDeSelectAll($event)\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                                </ng-multiselect-dropdown-angular7>\n                            </div>\n                                </div>\n                                <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                \n                                <ng-multiselect-dropdown-angular7  [placeholder]=\"'Select Municipality'\"\n                                [data]=\"municipalities\"\n                                [(ngModel)]=\"selected_municipalities\"\n                                [settings]=\"dropdownSettings\"\n                                (onSelect)=\"onItemSelect($event)\"\n                                (onSelectAll)=\"onSelectAllItem($event)\"\n                                (onDeSelect)=\"onItemDeSelect($event)\"\n                                (onDeSelectAll)=\"onItemDeSelectAll($event)\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                                </ng-multiselect-dropdown-angular7>\n                            </div>\n                                </div>\n                                <div class=\"form-group\">\n                            <div class=\"col-md-12\">\n                                <ng-multiselect-dropdown-angular7 [placeholder]=\"'Select Property Type'\"\n                                [data]=\"property_types\"\n                                [(ngModel)]=\"selected_categories\"\n                                [settings]=\"dropdownSettings\"\n                                (onSelect)=\"onItemSelect($event)\"\n                                (onSelectAll)=\"onSelectAllItem($event)\"\n                                (onDeSelect)=\"onItemDeSelect($event)\"\n                                (onDeSelectAll)=\"onItemDeSelectAll($event)\"\n                                [ngModelOptions]=\"{standalone: true}\">\n                                </ng-multiselect-dropdown-angular7>\n                            </div>\n                                </div>\n                            <div class=\"col-md-12\">\n                                <div *ngIf=\"show_lease_price\">\n                                    <select class=\"form-control\" (change)=\"onChangeLowerPrice($event)\" [value]=\"low_price\">\n                                      <option value=\"\" hidden>Lower Price Range</option>\n                                      <option value=\"0\">0</option>\n                                      <option value=\"100\" *ngIf=\"selected_upper_price >= 100\">100</option>\n                                      <option value=\"500\" *ngIf=\"selected_upper_price >= 500\">500</option>\n                                      <option value=\"1000\" *ngIf=\"selected_upper_price >= 1000\">1,000</option>\n                                      <option value=\"1500\" *ngIf=\"selected_upper_price >= 1500\">1,500</option>\n                                      <option value=\"2000\" *ngIf=\"selected_upper_price >= 2000\">2,000</option>\n                                      <option value=\"3000\" *ngIf=\"selected_upper_price >= 3000\">3,000</option>\n                                      <option value=\"4000\" *ngIf=\"selected_upper_price >= 4000\">4,000</option>\n                                      <option value=\"5000\" *ngIf=\"selected_upper_price >= 5000\">5,000</option>\n                                      <option value=\"6000\" *ngIf=\"selected_upper_price >= 6000\">6,000</option>\n                                      <option value=\"7000\" *ngIf=\"selected_upper_price >= 7000\">7,000</option>\n                                      <option value=\"8000\" *ngIf=\"selected_upper_price >= 8000\">8,000</option>\n                                      <option value=\"99999\" *ngIf=\"selected_upper_price >= 99999\">99,999</option>\n                                    </select>\n                                  </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div *ngIf=\"show_lease_price\">\n                                    <select class=\"form-control\" (change)=\"onChangeUpperPrice($event)\" [value]=\"upp_price\">\n                                      <option value=\"\" hidden>Upper Price Range</option>\n                                      <option value=\"1000000\">Unlimited</option>\n                                      <option value=\"100\" *ngIf=\"selected_lower_price <= 100\">100</option>\n                                      <option value=\"500\" *ngIf=\"selected_lower_price <= 500\">500</option>\n                                      <option value=\"1000\" *ngIf=\"selected_lower_price <= 1000\">1,000</option>\n                                      <option value=\"1500\" *ngIf=\"selected_lower_price <= 1500\">1,500</option>\n                                      <option value=\"2000\" *ngIf=\"selected_lower_price <= 2000\">2,000</option>\n                                      <option value=\"3000\" *ngIf=\"selected_lower_price <= 3000\">3,000</option>\n                                      <option value=\"4000\" *ngIf=\"selected_lower_price <= 4000\">4,000</option>\n                                      <option value=\"5000\" *ngIf=\"selected_lower_price <= 5000\">5,000</option>\n                                      <option value=\"6000\" *ngIf=\"selected_lower_price <= 6000\">6,000</option>\n                                      <option value=\"7000\" *ngIf=\"selected_lower_price <= 7000\">7,000</option>\n                                      <option value=\"8000\" *ngIf=\"selected_lower_price <= 8000\">8,000</option>\n                                      <option value=\"99999\" *ngIf=\"selected_lower_price <= 99999\">99,999</option>\n                                    </select>\n                                  </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div *ngIf=\"show_sale_price\">\n                                    <select class=\"form-control\" (change)=\"onChangeLowerPrice($event)\" [value]=\"low_price\">\n                                      <option value=\"\" hidden>Lower Price Range</option>\n                                      <option value=\"0\">0</option>\n                                      <option value=\"25000\" *ngIf=\"selected_upper_price >= 25000\">25,000</option>\n                                      <option value=\"50000\" *ngIf=\"selected_upper_price >= 50000\">50,000</option>\n                                      <option value=\"75000\" *ngIf=\"selected_upper_price >= 75000\">75,000</option>\n                                      <option value=\"100000\" *ngIf=\"selected_upper_price >= 100000\">100,000</option>\n                                      <option value=\"125000\" *ngIf=\"selected_upper_price>=125000\">125,000</option>\n                                      <option value=\"150000\" *ngIf=\"selected_upper_price>=150000\">150,000</option>\n                                      <option value=\"175000\" *ngIf=\"selected_upper_price>=175000\">175,000</option>\n                                      <option value=\"200000\" *ngIf=\"selected_upper_price>=200000\">200,000</option>\n                                      <option value=\"250000\" *ngIf=\"selected_upper_price>=250000\">250,000</option>\n                                      <option value=\"300000\" *ngIf=\"selected_upper_price>=300000\">300,000</option>\n                                      <option value=\"325000\" *ngIf=\"selected_upper_price>=325000\">325,000</option>\n                                      <option value=\"375000\" *ngIf=\"selected_upper_price>=375000\">375,000</option>\n                                      <option value=\"400000\" *ngIf=\"selected_upper_price>=400000\">400,000</option>\n                                      <option value=\"450000\" *ngIf=\"selected_upper_price>=450000\">450,000</option>\n                                      <option value=\"550000\" *ngIf=\"selected_upper_price>=550000\">500,000</option>\n                                      <option value=\"600000\" *ngIf=\"selected_upper_price>=600000\">600,000</option>\n                                      <option value=\"650000\" *ngIf=\"selected_upper_price>=650000\">650,000</option>\n                                      <option value=\"700000\" *ngIf=\"selected_upper_price>=700000\">700,000</option>\n                                      <option value=\"750000\" *ngIf=\"selected_upper_price>=750000\">750,000</option>\n                                      <option value=\"800000\" *ngIf=\"selected_upper_price>=800000\">800,000</option>\n                                      <option value=\"850000\" *ngIf=\"selected_upper_price>=850000\">850,000</option>\n                                      <option value=\"900000\" *ngIf=\"selected_upper_price>=900000\">900,000</option>\n                                      <option value=\"950000\" *ngIf=\"selected_upper_price>=950000\">950,000</option>\n                                      <option value=\"1000000\" *ngIf=\"selected_upper_price>=1000000\">1,000,000</option>\n                                      <option value=\"1200000\" *ngIf=\"selected_upper_price>=1200000\">1,200,000</option>\n                                      <option value=\"1300000\" *ngIf=\"selected_upper_price>=1300000\">1,300,000</option>\n                                      <option value=\"1400000\" *ngIf=\"selected_upper_price>=1400000\">1,400,000</option>\n                                      <option value=\"1500000\" *ngIf=\"selected_upper_price>=1500000\">1,500,000</option>\n                                      <option value=\"1600000\" *ngIf=\"selected_upper_price>=1600000\">1,600,000</option>\n                                      <option value=\"1700000\" *ngIf=\"selected_upper_price>=1700000\">1,700,000</option>\n                                      <option value=\"1800000\" *ngIf=\"selected_upper_price>=1800000\">1,800,000</option>\n                                      <option value=\"1900000\" *ngIf=\"selected_upper_price>=1900000\">1,900,000</option>\n                                      <option value=\"2000000\" *ngIf=\"selected_upper_price>=2000000\">2,000,000</option>\n                                      <option value=\"25000000\" *ngIf=\"selected_upper_price>=25000000\">2,500,000</option>\n                                      <option value=\"3000000\" *ngIf=\"selected_upper_price>=3000000\">3,000,000</option>\n                                      <option value=\"4000000\" *ngIf=\"selected_upper_price>=4000000\">4,000,000</option>\n                                      <option value=\"5000000\" *ngIf=\"selected_upper_price>=5000000\">5,000,000</option>\n                                      <option value=\"7500000\" *ngIf=\"selected_upper_price>=7500000\">7,500,000</option>\n                                      <option value=\"10000000\" *ngIf=\"selected_upper_price>=10000000\">10,000,000</option>\n                                    </select>\n                                  </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div *ngIf=\"show_sale_price\">\n                                    <select class=\"form-control\" (change)=\"onChangeUpperPrice($event)\" [value]=\"upp_price\">\n                                      <option value=\"\" hidden>Upper Price Range</option>\n                                      <option value=\"100000000\">Unlimited</option>\n                                      <option value=\"25000\" *ngIf=\"selected_lower_price <= 25000\">25,000</option>\n                                      <option value=\"50000\" *ngIf=\"selected_lower_price <= 50000\">50,000</option>\n                                      <option value=\"75000\" *ngIf=\"selected_lower_price <= 75000\">75,000</option>\n                                      <option value=\"100000\" *ngIf=\"selected_lower_price <= 100000\">100,000</option>\n                                      <option value=\"125000\" *ngIf=\"selected_lower_price<=125000\">125,000</option>\n                                      <option value=\"150000\" *ngIf=\"selected_lower_price<=150000\">150,000</option>\n                                      <option value=\"175000\" *ngIf=\"selected_lower_price<=175000\">175,000</option>\n                                      <option value=\"200000\" *ngIf=\"selected_lower_price<=200000\">200,000</option>\n                                      <option value=\"250000\" *ngIf=\"selected_lower_price<=250000\">250,000</option>\n                                      <option value=\"300000\" *ngIf=\"selected_lower_price<=300000\">300,000</option>\n                                      <option value=\"325000\" *ngIf=\"selected_lower_price<=325000\">325,000</option>\n                                      <option value=\"375000\" *ngIf=\"selected_lower_price<=375000\">375,000</option>\n                                      <option value=\"400000\" *ngIf=\"selected_lower_price<=400000\">400,000</option>\n                                      <option value=\"450000\" *ngIf=\"selected_lower_price<=450000\">450,000</option>\n                                      <option value=\"550000\" *ngIf=\"selected_lower_price<=550000\">500,000</option>\n                                      <option value=\"600000\" *ngIf=\"selected_lower_price<=600000\">600,000</option>\n                                      <option value=\"650000\" *ngIf=\"selected_lower_price<=650000\">650,000</option>\n                                      <option value=\"700000\" *ngIf=\"selected_lower_price<=700000\">700,000</option>\n                                      <option value=\"750000\" *ngIf=\"selected_lower_price<=750000\">750,000</option>\n                                      <option value=\"800000\" *ngIf=\"selected_lower_price<=800000\">800,000</option>\n                                      <option value=\"850000\" *ngIf=\"selected_lower_price<=850000\">850,000</option>\n                                      <option value=\"900000\" *ngIf=\"selected_lower_price<=900000\">900,000</option>\n                                      <option value=\"950000\" *ngIf=\"selected_lower_price<=950000\">950,000</option>\n                                      <option value=\"1000000\" *ngIf=\"selected_lower_price<=1000000\">1,000,000</option>\n                                      <option value=\"1200000\" *ngIf=\"selected_lower_price<=1200000\">1,200,000</option>\n                                      <option value=\"1300000\" *ngIf=\"selected_lower_price<=1300000\">1,300,000</option>\n                                      <option value=\"1400000\" *ngIf=\"selected_lower_price<=1400000\">1,400,000</option>\n                                      <option value=\"1500000\" *ngIf=\"selected_lower_price<=1500000\">1,500,000</option>\n                                      <option value=\"1600000\" *ngIf=\"selected_lower_price<=1600000\">1,600,000</option>\n                                      <option value=\"1700000\" *ngIf=\"selected_lower_price<=1700000\">1,700,000</option>\n                                      <option value=\"1800000\" *ngIf=\"selected_lower_price<=1800000\">1,800,000</option>\n                                      <option value=\"1900000\" *ngIf=\"selected_lower_price<=1900000\">1,900,000</option>\n                                      <option value=\"2000000\" *ngIf=\"selected_lower_price<=2000000\">2,000,000</option>\n                                      <option value=\"25000000\" *ngIf=\"selected_lower_price<=25000000\">2,500,000</option>\n                                      <option value=\"3000000\" *ngIf=\"selected_lower_price<=3000000\">3,000,000</option>\n                                      <option value=\"4000000\" *ngIf=\"selected_lower_price<=4000000\">4,000,000</option>\n                                      <option value=\"5000000\" *ngIf=\"selected_lower_price<=5000000\">5,000,000</option>\n                                      <option value=\"7500000\" *ngIf=\"selected_lower_price<=7500000\">7,500,000</option>\n                                      <option value=\"10000000\" *ngIf=\"selected_lower_price<=10000000\">10,000,000</option>\n                                    </select>\n                                  </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div *ngIf=\"show_bedrooms\">\n                                    <select class=\"form-control\" (change)=\"onChangeBedroom($event)\">\n                                      <option value=\"\" hidden># Bedrooms</option>\n                                      <option *ngFor=\"let bedroom of bedrooms\" [ngValue]=\"bedroom\" [selected]=\"bedroom == selected_bedroom\">{{bedroom}}</option>\n                                    </select>\n                                  </div>\n                            </div>\n                            <div class=\"col-md-12\"> \n                                <div *ngIf=\"show_dens\">\n                                    <select class=\"form-control\" (change)=\"onChangeDen($event)\">\n                                      <option value=\"\" hidden># Dens</option>\n                                      <option *ngFor=\"let den of dens\" [ngValue]=\"den\" [selected]=\"den == selected_den\">{{den}}</option>\n                                    </select>\n                                  </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div *ngIf=\"show_size\">\n                                    <select class=\"form-control\" (change)=\"onChangeLowerSize($event)\" [value]=\"low_size\">\n                                      <option value=\"\" hidden>Lower Size Range</option>\n                                      <option value=\"0\">0</option>\n                                      <option value=\"100\" *ngIf=\"upper_selected_size >= 100\">100</option>\n                                      <option value=\"500\" *ngIf=\"upper_selected_size >= 500\">500</option>\n                                      <option value=\"1000\" *ngIf=\"upper_selected_size >= 1000\">1,000</option>\n                                      <option value=\"1500\" *ngIf=\"upper_selected_size >= 1500\">1,500</option>\n                                      <option value=\"2000\" *ngIf=\"upper_selected_size >= 2000\">2,000</option>\n                                      <option value=\"2500\" *ngIf=\"upper_selected_size >= 2500\">2,500</option>\n                                      <option value=\"3000\" *ngIf=\"upper_selected_size >= 3000\">3,000</option>\n                                      <option value=\"3500\" *ngIf=\"upper_selected_size >= 3500\">3,500</option>\n                                      <option value=\"4000\" *ngIf=\"upper_selected_size >= 4000\">4,000</option>\n                                      <option value=\"4500\" *ngIf=\"upper_selected_size >= 4500\">4,500</option>\n                                      <option value=\"5000\" *ngIf=\"upper_selected_size >= 5000\">5,000</option>\n                                      <option value=\"5500\" *ngIf=\"upper_selected_size >= 5500\">5,500</option>\n                                      <option value=\"6000\" *ngIf=\"upper_selected_size >= 6000\">6,000</option>\n                                      <option value=\"7000\" *ngIf=\"upper_selected_size >= 7000\">7,000</option>\n                                      <option value=\"8000\" *ngIf=\"upper_selected_size >= 8000\">8,000</option>\n                                      <option value=\"8000\" *ngIf=\"upper_selected_size >= 9000\">9,000</option>\n                                      <option value=\"10000\" *ngIf=\"upper_selected_size >= 10000\">10,000</option>\n                                      <option value=\"30000\" *ngIf=\"upper_selected_size >= 30000\">30,000</option>\n                                      <option value=\"50000\" *ngIf=\"upper_selected_size >= 50000\">50,000</option>\n                                      <option value=\"70000\" *ngIf=\"upper_selected_size >= 70000\">70,000</option>\n                                      <option value=\"100000\" *ngIf=\"upper_selected_size >= 100000\">100,000</option>\n                                    </select>\n                                  </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <div *ngIf=\"show_size\">\n                                    <select class=\"form-control\" (change)=\"onChangeUpperSize($event)\" [value]=\"upp_size\">\n                                      <option value=\"\" hidden>Upper Size Range</option>\n                                      <option value=\"upper_selected_size\">Unlimited</option>\n                                      <option value=\"100\" *ngIf=\"lower_selected_size <= 100\">100</option>\n                                      <option value=\"500\" *ngIf=\"lower_selected_size <= 500\">500</option>\n                                      <option value=\"1000\" *ngIf=\"lower_selected_size <= 1000\">1,000</option>\n                                      <option value=\"1500\" *ngIf=\"lower_selected_size <= 1500\">1,500</option>\n                                      <option value=\"2000\" *ngIf=\"lower_selected_size <= 2000\">2,000</option>\n                                      <option value=\"2500\" *ngIf=\"lower_selected_size <= 2500\">2,500</option>\n                                      <option value=\"3000\" *ngIf=\"lower_selected_size <= 3000\">3,000</option>\n                                      <option value=\"3500\" *ngIf=\"lower_selected_size <= 3500\">3,500</option>\n                                      <option value=\"4000\" *ngIf=\"lower_selected_size <= 4000\">4,000</option>\n                                      <option value=\"4500\" *ngIf=\"lower_selected_size <= 4500\">4,500</option>\n                                      <option value=\"5000\" *ngIf=\"lower_selected_size <= 5000\">5,000</option>\n                                      <option value=\"5500\" *ngIf=\"lower_selected_size <= 5500\">5,500</option>\n                                      <option value=\"6000\" *ngIf=\"lower_selected_size <= 6000\">6,000</option>\n                                      <option value=\"7000\" *ngIf=\"lower_selected_size <= 7000\">7,000</option>\n                                      <option value=\"8000\" *ngIf=\"lower_selected_size <= 8000\">8,000</option>\n                                      <option value=\"8000\" *ngIf=\"lower_selected_size <= 9000\">9,000</option>\n                                      <option value=\"10000\" *ngIf=\"lower_selected_size <= 10000\">10,000</option>\n                                      <option value=\"30000\" *ngIf=\"lower_selected_size <= 30000\">30,000</option>\n                                      <option value=\"50000\" *ngIf=\"lower_selected_size <= 50000\">50,000</option>\n                                      <option value=\"70000\" *ngIf=\"lower_selected_size <= 70000\">70,000</option>\n                                      <option value=\"100000\" *ngIf=\"lower_selected_size <= 100000\">100,000</option>\n                                    </select>\n                                  </div>\n                            </div>\n                            <div class=\"col-md-12\">\n                                <button class=\"btn pull-right\" (click)=\"searchResult()\" type=\"button\"> Filter Result</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"feeds\" *ngFor=\"let property of propertiesList; let i = index\">\n                    <div class=\"row\">\n                        <div class=\"col-md-2\">\n                            <div class=\"profile-img\">\n                                <img src=\"{{agent.image}}\" onError=\"this.src='../../../../assets/img/notimg/property_placeholder.jpg'\" alt=\"profile\" style=\"width: 50px; height:50px;\" class=\"img-circle\">\n                            </div>\n                        </div>\n                        <div class=\"col-md-10\">\n                            <div class=\"profile-details\">\n                                <p>{{agent.fname}} {{agent.lname}}\n                                    <span class=\"pull-right\">MLS-ID: #{{property.mls_id}}</span>\n                                </p>\n                                <Span>{{advertise.received_at}}</Span>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"post\">\n                            <div class=\"description\">\n                                <p><i class=\"fa fa-map-marker\"></i> {{property.address}}, {{property.area}}, {{property.zip}}\n                                     <span class=\"pull-right\" (click)=\"addToFavourite(property.id)\" style=\"cursor:pointer;\" *ngIf=\"!property.is_advertise_favourite\"></span>\n                                     <span class=\"pull-right\" (click)=\"addToFavourite(property.id)\" style=\"cursor:pointer;\" *ngIf=\"property.is_advertise_favourite\"><img src=\"../../../../assets/img/heart.png\" alt=\"heart\"></span>\n                                </p>\n\n                                <span>${{property.list_price}} {{property.category}} {{property.property_type}}  <span class=\"pull-right\">{{property.total_area ==undefined ? '' : property.total_area+\" Sq. Ft.\"}}</span></span>\n                            </div>\n                            <div class=\"image\">\n                                <img src=\"{{property.images_list[0]}}\" onError=\"this.src='../../../../assets/img/notimg/property_placeholder.jpg'\" alt=\"post\">\n                            </div>\n                            <div class=\"afterText\">\n                                <p>{{property.remarks_for_clients}}<br> {{(property.nearest_intersection==\"\" || property.nearest_intersection==undefined) ? '' : 'Nearest Intersection - '+property.nearest_intersection }}</p>\n\n                            </div>\n                            <div class=\"row\">\n                                <form [formGroup]=\"form\"  (submit)=\"sendMessage(property.mls_id)\">\n                                    <div class=\"col-md-10 msg-container\">\n                                        <div class=\"profile-details\">\n                                            <input type=\"text\" class=\"chat-box\" placeholder=\"Start Chat\" name=\"textMessage\"  formControlName=\"textMessage\" autocomplete=\"off\">\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                        <!-- <input type=\"submit\"  class=\"btn btn-default\" value=\"send\"> -->\n                                        <button class=\"btn btn-default btn-circle\">  <i class=\"fa fa-refresh fa-spin fa-2x\" *ngIf=\"submitted\"></i>  <img src=\"../../../../assets/img/send.png\" *ngIf=\"!submitted\"  class=\"send-message\" alt=\"send\"></button>\n                                    </div>\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"propertiesList?.length==0\">\n                    <br>\n                    <div>\n                        <div style=\"text-align:center;\">\n                        <img src=\"../assets/img/notimg/no_property.png\" class=\"no-property\">\n                        <p>No properties found with this selected filter, please change the filter vaules to see more results.</p> \n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-3\">\n                <div class=\"postChat clearfix\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n                    <div [ngClass]=\"{'person2': msg.user_id==agentId,'person1': msg.user_id!=agentId}\" *ngFor=\"let msg of messagesList;\">\n                        <img src=\"../../../../assets/img/home/profile.png\" alt=\"profile\" *ngIf=\"msg.user_id==agentId\">\n                        <div class=\"text\">\n                            <p class=\"up\">{{msg.message}}</p>\n                            <div *ngIf=\"msg.mls_number!=''&&msg.mls_number!=undefined\">MLS ID {{msg.mls_number}}</div>\n                        </div>\n                        <div class=\"small\">Sept 20, 2019. 6:47:46 PM</div>\n                    </div>\n        \n                    <img src=\"../../../../../assets/img/no/no_chat.png\" class=\"no-chat\" *ngIf=\"messagesList.length==0\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat/chat.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat/chat.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chat-mob\" *ngIf=\"windowState=='close'\" (click)=\"closeChatWindow('open')\">\n\t<span id=\"mob\"><i class=\"fa fa-comment\"></i></span>\n</div>\n<div class=\"chat-home\" *ngIf=\"windowState=='open'\">\n\t<div class=\"chat-user\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t<img src=\"../assets/img/home/profile.png\">\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-8\">\n\t\t\t\t<h4 style=\"color:white;\">Chat with us</h4>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-2\" style=\"padding-top:8px;\">\n\t\t\t\t<span style=\"font-size:24px;color:white;cursor: pointer;\" (click)=\"closeChatWindow('close')\"><i class=\"fa fa-times\"></i></span>\n\t\t\t</div>\n\t\t</div>\n\t\t\n    </div>\n    \n    <div class=\"chat-body\" #scrollMe>\n\t\t<div class=\"container-fluid\">\n\t\t\t<div class=\"user-mssg\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t\t<div class=\"user-photo\">\n\t\t\t\t\t\t\t<img src=\"../assets/img/home/profile.png\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"col-xs-10\">\n\t\t\t\t\t\t<div class=\"mssg\">\n\t\t\t\t\t\t\t<p>Agent</p>\n\t\t\t\t\t\t\t<h4>Hello, I am here to help you... Please let me know what are you looking for</h4>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t\t\n\t\t<!-- <div class=\"container-fluid\" *ngIf=\"feed.length>0\">\n\t\t\t<div *ngFor=\"let message of feed\">\n\t\t\t\t<div class=\"user-mssg\" *ngIf=\"message.user_id==agentId\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-2\">\n\t\t\t\t\t\t\t<div class=\"user-photo\">\n\t\t\t\t\t\t\t\t<img src=\"../assets/img/home/profile.png\">\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-xs-10\">\n\t\t\t\t\t\t\t<div class=\"mssg\">\n\t\t\t\t\t\t\t\t<h4 [innerHTML]=\"message.message\"> <br><span style=\"font-size:10px;text-align:right\" innerHTML=\"{{getDate(message.created_at) | date: 'medium'}}\"></span></h4>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"team-mssg\" *ngIf=\"message.user_id==lead.customer_token\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-xs-12\">\n\t\t\t\t\t\t\t<div class=\"mssg text-right\">\n\t\t\t\t\t\t\t\t<h4><span style=\"text-align:left !important;\">{{message.message}} </span><br><span style=\"font-size:10px;text-align:right;\" innerHTML=\"{{getDate(message.created_at) | date: 'medium'}}\"></span></h4>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\t -->\n    </div>\n    <div class=\"chat-footer\">\n\t\t<div class=\"chat-form\">\n\t\t\t<form>\n\t\t\t\t<input type=\"text\" name=\"message\" placeholder=\"Type your message here\" autocomplete=\"off\">\n\t\t\t\t<label for=\"sub\"><i class=\"fa fa-paper-plane\"></i></label>\t\n\t\t\t\t<input (click)=\"sendMessage()\" type=\"image\" id=\"sub\" value=\"submit\" style=\"display: none;\">\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/lead-messages/lead-messages.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/lead-messages/lead-messages.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("Firebase Chat module\n<ul>\n    <li *ngFor=\"let item of messagesList; let i = index\">\n        {{i}} {{item.message}}\n    </li>\n</ul>\n<form>\n    <input type=\"text\">\n    <input type=\"submit\" value=\"send\">\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/slider/slider.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/slider/slider.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<slideshow [minHeight]=\"'600px'\"\n[autoPlay]=\"false\"\n[showArrows]=\"false\"\n[showDots]=\"true\"\n[imageUrls]=\"imageSources\"\n[lazyLoad]=\"true\"\n[autoPlayInterval]=\"4000\"\n[autoPlayWaitForLazyLoad]=\"true\"\n[showCaptions]=\"true\">\n\n</slideshow>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");




const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: '', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'top' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'synergii-angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _shared_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/slider/slider.component */ "./src/app/shared/components/slider/slider.component.ts");
/* harmony import */ var _shared_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/components/chat/chat.component */ "./src/app/shared/components/chat/chat.component.ts");
/* harmony import */ var _shared_components_lead_messages_lead_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/lead-messages/lead-messages.component */ "./src/app/shared/components/lead-messages/lead-messages.component.ts");
/* harmony import */ var _pages_links_link_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/links/link.module */ "./src/app/pages/links/link.module.ts");
/* harmony import */ var _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/auth/auth.module */ "./src/app/core/auth/auth.module.ts");
/* harmony import */ var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/interceptors/auth.interceptor */ "./src/app/core/interceptors/auth.interceptor.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/dashboard/dashboard.module */ "./src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _shared_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_7__["SliderComponent"],
            _shared_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_8__["ChatComponent"],
            _shared_components_lead_messages_lead_messages_component__WEBPACK_IMPORTED_MODULE_9__["LeadMessagesComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_3__["SlideshowModule"],
            _pages_links_link_module__WEBPACK_IMPORTED_MODULE_10__["LinkModule"],
            _core_auth_auth_module__WEBPACK_IMPORTED_MODULE_11__["AuthModule"],
            _pages_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_14__["DashboardModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_16__["AngularFireModule"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HTTP_INTERCEPTORS"], useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/config/backend-url.config.ts":
/*!**********************************************!*\
  !*** ./src/app/config/backend-url.config.ts ***!
  \**********************************************/
/*! exports provided: BACKEND_URL_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKEND_URL_CONFIG", function() { return BACKEND_URL_CONFIG; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * @description This file contains all endpoints used across app
 */

const BACKEND_URL_CONFIG = {
    homeapi: 'v1/all/subscriptions',
    login: 'v1/user/signin',
    leads: 'v1/leads/list',
    leadMessages: 'v1/lead/messages',
    sendMessage: 'v1/lead/message/create',
    advertiseProperties: 'v1/agent/advertisement/properties',
    properties: 'v1/lead/properties',
    propertiesSearch: 'v1/properties/search',
    taskLead: 'v1/lead/tasks',
    documents: 'v1/lead/documents',
    appoinments: 'v1/lead/appointments',
    member: 'v1/lead/members',
    invite: 'v1/invite/friend',
    addclient: 'v1/make/permanentclient/bymls',
    sessiondetailprofile: 'v1/user/session',
    updateimageurl: 'v1/edit/user/image',
    usersubcription: 'v1/user/subscription',
    addcardurl: 'v1/add/new/card',
    removecardurl: 'v1/remove/card',
    removesubcriptionurl: 'v1/edit/next/subscription/status',
    resetpassword: 'v1/password/change',
    updateprofile: 'v1/user/update',
    multiplelist: 'v1/agent/multiple/advertisements',
    municipalitiesproperty: 'v1/property/municipalities',
    propertytype: 'v1/property/types',
    createmultipleproprties: 'v1/create/multiple/advertisements',
    favoriteproperty: 'v1/add/property/favourite',
    propertshow: 'v1/property/show',
    notesProperty: 'v1/property/notes',
    addproperty: 'v1/add/property/note',
    removeleadproperty: 'v1/remove/lead/property',
    createtasklist: 'v1/create/lead/task',
    edittasklist: 'v1/edit/lead/task',
    removetasklist: 'v1/remove/lead/task',
    taskactionurl: 'v1/confirm/task',
    uploaddocuments: 'v1/upload/lead/document',
    removedocuments: 'v1/remove/document',
    createappoinments: 'v1/create/appointment',
    removeappoinment: 'v1/remove/appointment',
    editappoinments: 'v1/edit/appointment',
    confirmappoinment: 'v1/confirm/appointment',
    agentpropertydetail: 'v1/agent/properties',
    removeagentlisting: 'v1/remove/agent/property',
    addpropertyfavorite: 'v1/add/property/favourite',
    avgentadvertisements: 'v1/agent/advertisements',
    agentadddeleteurl: 'v1/agent/adds/delete',
    agentcreateadds: 'v1/agent/adds/create',
    checkemail: 'v1/check/emails',
    addsubcription: 'v1/add/subscribe/user',
    usersubcriptions: 'v1//subscription/users',
    agentaddproperty: 'v1/agent/add/property',
    advertiseDetails: 'v1/client/find/add',
    homePageTempToken: '/v1/temp/user/token',
    agentPropertyDetails: 'v1/agent/property',
    editAgentProperty: 'v1/edit/agent/property',
    addAdvertiseFavProperty: 'v1/add/advertise/fav/property',
    makeClientPayment: 'v1/make/permanent/client'
};


/***/ }),

/***/ "./src/app/core/auth/auth-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/core/auth/auth-routing.module.ts ***!
  \**************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/core/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/core/auth/signup/signup.component.ts");





const routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/core/auth/auth.module.ts":
/*!******************************************!*\
  !*** ./src/app/core/auth/auth.module.ts ***!
  \******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/core/auth/auth-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/core/auth/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/core/auth/signup/signup.component.ts");







let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/core/auth/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/auth/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/backend-url.config */ "./src/app/config/backend-url.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");







let AuthService = class AuthService {
    constructor(apiService, localStorageService) {
        this.apiService = apiService;
        this.localStorageService = localStorageService;
    }
    login(data) {
        return this.apiService.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_3__["BACKEND_URL_CONFIG"].login, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(res => {
            if (res) {
                this.handleSuccess(res);
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
        }));
    }
    handleSuccess(res) {
        // save token in LocalStorage
        console.log(res);
        this.localStorageService.setItem('token', res.user.session_token);
    }
    isAuthenticated() {
        return this.localStorageService.has('token');
    }
    /**
     * @description returns authentication token for user
     */
    getToken() {
        return this.localStorageService.getItem('token');
    }
};
AuthService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/core/auth/login/login.component.css":
/*!*****************************************************!*\
  !*** ./src/app/core/auth/login/login.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.header{\n\tmargin-top: 20px;\n}\n\n.middle-form{\n\tmargin-left:auto;\n\tmargin-right: auto;\n\twidth: 40%;\n\t/* border:1px solid black; */\n}\n\n@media only screen and (max-width: 992px) {\n\t.middle-form{\n\t\twidth: 100%;\n\t}\n}\n\n.middle-form h3{\n\tcolor: black;\n\tfont-weight: bold;\n\tmargin-top: 20px;\n\tfont-size: 20px;\n\t\n}\n\n.middle-form p{\n\tcolor: grey;\n\tfont-size: 16px;\n\tmargin-top: -10px;\n}\n\nbutton.agent{\n\tcolor:#67C1E6;\n\tbackground:white;\n\tborder:none;\n\tpadding:15px 45px 15px 45px;\n\tborder-radius:25px;\n\tfont-size: 16px;\n\tfont-weight: 550;\n}\n\nbutton.user{\n\tcolor:#02E27F;\n\tbackground:white;\n\tborder:none;\n\tpadding:15px 45px 15px 45px;\n\tborder-radius:25px;\n\tfont-size: 16px;\n\tfont-weight: 550;\n}\n\nbutton.facebook{\n\tcolor:white;\n\tbackground:#305997;\n\tborder:none;\n\tpadding:15px 45px 15px 45px;\n\tborder-radius:25px;\n\tfont-size: 16px;\n\tfont-weight: 550;\n\twidth: 90%;\n}\n\nbutton.google{\n\tcolor:white;\n\tbackground:#F24328;\n\tborder:none;\n\tpadding:15px 35px 15px 35px;\n\tborder-radius:25px;\n\tfont-size: 16px;\n\tfont-weight: 550;\n}\n\nbutton.linked{\n\tcolor:white;\n\tbackground:#018AC1;\n\tborder:none;\n\tpadding:15px 35px 15px 35px;\n\tborder-radius:25px;\n\tfont-size: 16px;\n\tfont-weight: 550;\n}\n\n.middle-form input{\n\tcolor:black;\n\tborder-radius: 0px;\n\tpadding:10px;\n\theight: 50px;\n\tmargin-top:5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0M7RUFDQyxXQUFXO0NBQ1o7QUFDRDs7QUFDQTtDQUNDLFlBQVk7Q0FDWixpQkFBaUI7Q0FDakIsZ0JBQWdCO0NBQ2hCLGVBQWU7O0FBRWhCOztBQUNBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCwyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsZ0JBQWdCO0NBQ2hCLFdBQVc7Q0FDWCwyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCwyQkFBMkI7Q0FDM0Isa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsVUFBVTtBQUNYOztBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsMkJBQTJCO0NBQzNCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsMkJBQTJCO0NBQzNCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGVhZGVye1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubWlkZGxlLWZvcm17XG5cdG1hcmdpbi1sZWZ0OmF1dG87XG5cdG1hcmdpbi1yaWdodDogYXV0bztcblx0d2lkdGg6IDQwJTtcblx0LyogYm9yZGVyOjFweCBzb2xpZCBibGFjazsgKi9cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuXHQubWlkZGxlLWZvcm17XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbn1cbi5taWRkbGUtZm9ybSBoM3tcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRcbn1cbi5taWRkbGUtZm9ybSBwe1xuXHRjb2xvcjogZ3JleTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRtYXJnaW4tdG9wOiAtMTBweDtcbn1cbmJ1dHRvbi5hZ2VudHtcblx0Y29sb3I6IzY3QzFFNjtcblx0YmFja2dyb3VuZDp3aGl0ZTtcblx0Ym9yZGVyOm5vbmU7XG5cdHBhZGRpbmc6MTVweCA0NXB4IDE1cHggNDVweDtcblx0Ym9yZGVyLXJhZGl1czoyNXB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1NTA7XG59XG5idXR0b24udXNlcntcblx0Y29sb3I6IzAyRTI3Rjtcblx0YmFja2dyb3VuZDp3aGl0ZTtcblx0Ym9yZGVyOm5vbmU7XG5cdHBhZGRpbmc6MTVweCA0NXB4IDE1cHggNDVweDtcblx0Ym9yZGVyLXJhZGl1czoyNXB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1NTA7XG59XG5idXR0b24uZmFjZWJvb2t7XG5cdGNvbG9yOndoaXRlO1xuXHRiYWNrZ3JvdW5kOiMzMDU5OTc7XG5cdGJvcmRlcjpub25lO1xuXHRwYWRkaW5nOjE1cHggNDVweCAxNXB4IDQ1cHg7XG5cdGJvcmRlci1yYWRpdXM6MjVweDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNTUwO1xuXHR3aWR0aDogOTAlO1xufVxuYnV0dG9uLmdvb2dsZXtcblx0Y29sb3I6d2hpdGU7XG5cdGJhY2tncm91bmQ6I0YyNDMyODtcblx0Ym9yZGVyOm5vbmU7XG5cdHBhZGRpbmc6MTVweCAzNXB4IDE1cHggMzVweDtcblx0Ym9yZGVyLXJhZGl1czoyNXB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1NTA7XG59XG5idXR0b24ubGlua2Vke1xuXHRjb2xvcjp3aGl0ZTtcblx0YmFja2dyb3VuZDojMDE4QUMxO1xuXHRib3JkZXI6bm9uZTtcblx0cGFkZGluZzoxNXB4IDM1cHggMTVweCAzNXB4O1xuXHRib3JkZXItcmFkaXVzOjI1cHg7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Zm9udC13ZWlnaHQ6IDU1MDtcbn1cbi5taWRkbGUtZm9ybSBpbnB1dHtcblx0Y29sb3I6YmxhY2s7XG5cdGJvcmRlci1yYWRpdXM6IDBweDtcblx0cGFkZGluZzoxMHB4O1xuXHRoZWlnaHQ6IDUwcHg7XG5cdG1hcmdpbi10b3A6NSU7XG59Il19 */");

/***/ }),

/***/ "./src/app/core/auth/login/login.component.ts":
/*!****************************************************!*\
  !*** ./src/app/core/auth/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/core/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/core/services/common.service.ts");






let LoginComponent = class LoginComponent {
    constructor(fb, authservice, router, commonservice) {
        this.fb = fb;
        this.authservice = authservice;
        this.router = router;
        this.commonservice = commonservice;
    }
    ngOnInit() {
        this.buildForm();
    }
    /**
     * @description This function builds login form
     */
    buildForm() {
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
        });
    }
    onSubmit() {
        console.log(this.loginForm.value);
        if (this.loginForm.invalid) {
            this.message = "Email/Password can't be blank!";
            return;
        }
        this.btnDisabled = true;
        this.authservice.login(this.loginForm.value).subscribe((res) => {
            let user = res.user;
            console.log(user);
            if (user.role == 'agent') {
                console.log("indddddsdsd");
                this.router.navigate(["/agent/dashboard"]);
            }
            else if (user.role == 'customer') {
                this.router.navigate(["/client/workspaces"]);
            }
            this.btnDisabled = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/core/auth/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/core/auth/signup/signup.component.css":
/*!*******************************************************!*\
  !*** ./src/app/core/auth/signup/signup.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/core/auth/signup/signup.component.ts":
/*!******************************************************!*\
  !*** ./src/app/core/auth/signup/signup.component.ts ***!
  \******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignupComponent = class SignupComponent {
    constructor() { }
    ngOnInit() {
    }
};
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/auth/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/core/auth/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/core/interceptors/auth.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/core/auth/auth.service.ts");



let AuthInterceptor = class AuthInterceptor {
    constructor(authService) {
        this.authService = authService;
    }
    /**
     * @description Injects auth token in every outgoing request
     * @param request
     * @param next
     */
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Timezone: 'Asia/Kolkata',
                'accessToken': `${this.authService.getToken()}`
                // accessToken: 'PgCRw1iryFfKZXJTWjEo_Q'
                // accessToken: this.sessonTocken,
                // accessToken: this.authService.getToken()
                /* Authorization: this.authService.getToken() */
            }
        });
        return next.handle(request);
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/core/services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/*! exports provided: HttpOptions, ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpOptions", function() { return HttpOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




const API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
/**
 * @description Model for HttpParams
 */
class HttpOptions {
}
let ApiService = class ApiService {
    constructor(http) {
        this.http = http;
    }
    /**
     * @description Wrapper method for HttpClient.get
     * @param path
     * @param options
     */
    get(path, options) {
        const params = (options) ? this.toHttpParams(options) : new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        return this.http.get(API_URL + path, { params });
    }
    /**
     * @description Wrapper method for HttpClient.post
     * @param path
     * @param body
     */
    post(path, body) {
        return this.http.post(API_URL + path, body);
    }
    /**
     * @description This method converts query string object to HttpParams
     * @param params
     */
    toHttpParams(params) {
        return Object.getOwnPropertyNames(params)
            .reduce((p, key) => p.set(key, params[key]), new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]());
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiService);



/***/ }),

/***/ "./src/app/core/services/common.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/common.service.ts ***!
  \*************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let CommonService = class CommonService {
    constructor() {
        this.leadFlag = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("0");
        this.leadFlagData = this.leadFlag.asObservable();
    }
    changeLeadFlag(cData) {
        this.leadFlag.next(cData);
    }
};
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "./src/app/core/services/home.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/home.service.ts ***!
  \***********************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/backend-url.config */ "./src/app/config/backend-url.config.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let HomeService = class HomeService {
    constructor(apiservice, localStorageService) {
        this.apiservice = apiservice;
        this.localStorageService = localStorageService;
    }
    homedata(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_3__["BACKEND_URL_CONFIG"].homeapi, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
            if (res.code == 200) {
                // this.handleSuccess(res);
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
        }));
    }
    tempToken(token) {
        let tokenBody = { token: token };
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_3__["BACKEND_URL_CONFIG"].homePageTempToken, tokenBody)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(res => {
            if (res.code == 200) {
                // this.handleSuccess(res);
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(err => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(err);
        }));
    }
    getTempClientToken() {
        let customerToken = this.localStorageService.getItem("homeClientToken");
        if (customerToken == undefined || customerToken == "undefined") {
            return "";
        }
        else {
            return customerToken;
        }
    }
    setTempClientToken(token) {
        this.localStorageService.setItem("homeClientToken", token);
    }
};
HomeService.ctorParameters = () => [
    { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_4__["LocalStorageService"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HomeService);



/***/ }),

/***/ "./src/app/core/services/lead-advertise.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/lead-advertise.service.ts ***!
  \*********************************************************/
/*! exports provided: LeadAdvertiseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadAdvertiseService", function() { return LeadAdvertiseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config/backend-url.config */ "./src/app/config/backend-url.config.ts");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/core/services/local-storage.service.ts");







let LeadAdvertiseService = class LeadAdvertiseService {
    constructor(apiservice, localStorageService) {
        this.apiservice = apiservice;
        this.localStorageService = localStorageService;
    }
    properties(advertiseId, customerToken) {
        let reqBody = { advertise_id: advertiseId, client_token: customerToken };
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].advertiseProperties, reqBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    mlsAdvertise(advertiseId, prevClientToken) {
        let reqBody = { add_id: advertiseId, prev_client_token: prevClientToken };
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].advertiseDetails, reqBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    getCustomerToken() {
        let customerToken = this.localStorageService.getItem("customerToken");
        if (customerToken == undefined || customerToken == "undefined") {
            return "";
        }
        else {
            return customerToken;
        }
    }
    setCustomerToken(token) {
        this.localStorageService.setItem("customerToken", token);
    }
};
LeadAdvertiseService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
];
LeadAdvertiseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LeadAdvertiseService);



/***/ }),

/***/ "./src/app/core/services/lead-chat.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/lead-chat.service.ts ***!
  \****************************************************/
/*! exports provided: LeadChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadChatService", function() { return LeadChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config/backend-url.config */ "./src/app/config/backend-url.config.ts");






let LeadChatService = class LeadChatService {
    constructor(apiservice) {
        this.apiservice = apiservice;
    }
    messages(leadId) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].leadMessages, { leadId: leadId }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    sendMessage(advertiseType, advertiseId, customerToken, senderId, message, mlsNumber) {
        let reqBody = { advertiseType: advertiseType, advertiseId: advertiseId, customerToken: customerToken, senderId: senderId, textMessage: message, mlsNumber: mlsNumber };
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].sendMessage, reqBody).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
};
LeadChatService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
LeadChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LeadChatService);



/***/ }),

/***/ "./src/app/core/services/local-storage.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/local-storage.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocalStorageService = class LocalStorageService {
    constructor() { }
    /**
     * @description This function checks whether key is present in localStorage
     * @param key
     */
    has(key) {
        return localStorage.getItem(key) !== null;
    }
    /**
     * @description This function removes a key from localStorage
     * @param key
     */
    removeItem(key) {
        localStorage.removeItem(key);
    }
    /**
     * @description This function clears localStorage
     */
    clear() {
        localStorage.clear();
    }
    /**
     * @description This function gets value of key present in localStorage
     * @param key
     */
    getItem(key) {
        const value = localStorage.getItem(key);
        return value !== null ? value : undefined;
    }
    /**
     * @description This function sets a key/value in localStorage
     * @param key
     * @param value
     */
    setItem(key, value) {
        return localStorage.setItem(key, value);
    }
};
LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LocalStorageService);



/***/ }),

/***/ "./src/app/models/property.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/property.model.ts ***!
  \******************************************/
/*! exports provided: Property */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Property", function() { return Property; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Property {
}


/***/ }),

/***/ "./src/app/pValidators/password.validators.ts":
/*!****************************************************!*\
  !*** ./src/app/pValidators/password.validators.ts ***!
  \****************************************************/
/*! exports provided: PasswordValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordValidation", function() { return PasswordValidation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class PasswordValidation {
    static MatchPassword(AC) {
        let password = AC.get('new_password').value; // to get value in input tag
        let confirmPassword = AC.get('confirm_password').value; // to get value in input tag
        if (password != confirmPassword) {
            // console.log('false');
            AC.get('confirm_password').setErrors({ MatchPassword: true });
        }
        else {
            // console.log('true');
            return null;
        }
    }
}


/***/ }),

/***/ "./src/app/pages/dashboard/dashboard-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _top_header_page_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./top-header-page/main-dashboard/main-dashboard.component */ "./src/app/pages/dashboard/top-header-page/main-dashboard/main-dashboard.component.ts");
/* harmony import */ var _top_header_page_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-header-page/add-client/add-client.component */ "./src/app/pages/dashboard/top-header-page/add-client/add-client.component.ts");
/* harmony import */ var _top_header_page_add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./top-header-page/add-listing/add-listing.component */ "./src/app/pages/dashboard/top-header-page/add-listing/add-listing.component.ts");
/* harmony import */ var _top_header_page_advertise_advertise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./top-header-page/advertise/advertise.component */ "./src/app/pages/dashboard/top-header-page/advertise/advertise.component.ts");
/* harmony import */ var _top_header_page_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-header-page/invitation/invitation.component */ "./src/app/pages/dashboard/top-header-page/invitation/invitation.component.ts");
/* harmony import */ var _top_header_page_link_multiple_listing_link_multiple_listing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-header-page/link-multiple-listing/link-multiple-listing.component */ "./src/app/pages/dashboard/top-header-page/link-multiple-listing/link-multiple-listing.component.ts");
/* harmony import */ var _top_header_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./top-header-page/profile/profile.component */ "./src/app/pages/dashboard/top-header-page/profile/profile.component.ts");
/* harmony import */ var _top_header_page_setting_setting_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./top-header-page/setting/setting.component */ "./src/app/pages/dashboard/top-header-page/setting/setting.component.ts");
/* harmony import */ var _top_header_page_your_listing_your_listing_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./top-header-page/your-listing/your-listing.component */ "./src/app/pages/dashboard/top-header-page/your-listing/your-listing.component.ts");
/* harmony import */ var _work_space_dashboard_work_spaces_work_spaces_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./work-space-dashboard/work-spaces/work-spaces.component */ "./src/app/pages/dashboard/work-space-dashboard/work-spaces/work-spaces.component.ts");
/* harmony import */ var _work_space_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./work-space-dashboard/details/details.component */ "./src/app/pages/dashboard/work-space-dashboard/details/details.component.ts");
/* harmony import */ var _work_space_dashboard_chats_chats_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./work-space-dashboard/chats/chats.component */ "./src/app/pages/dashboard/work-space-dashboard/chats/chats.component.ts");
/* harmony import */ var _work_space_dashboard_search_properties_search_properties_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./work-space-dashboard/search-properties/search-properties.component */ "./src/app/pages/dashboard/work-space-dashboard/search-properties/search-properties.component.ts");
/* harmony import */ var _work_space_dashboard_properties_properties_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./work-space-dashboard/properties/properties.component */ "./src/app/pages/dashboard/work-space-dashboard/properties/properties.component.ts");
/* harmony import */ var _work_space_dashboard_task_task_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./work-space-dashboard/task/task.component */ "./src/app/pages/dashboard/work-space-dashboard/task/task.component.ts");
/* harmony import */ var _work_space_dashboard_documents_documents_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./work-space-dashboard/documents/documents.component */ "./src/app/pages/dashboard/work-space-dashboard/documents/documents.component.ts");
/* harmony import */ var _work_space_dashboard_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./work-space-dashboard/appointments/appointments.component */ "./src/app/pages/dashboard/work-space-dashboard/appointments/appointments.component.ts");
/* harmony import */ var _work_space_dashboard_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./work-space-dashboard/property-details/property-details.component */ "./src/app/pages/dashboard/work-space-dashboard/property-details/property-details.component.ts");
/* harmony import */ var _work_space_dashboard_members_members_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./work-space-dashboard/members/members.component */ "./src/app/pages/dashboard/work-space-dashboard/members/members.component.ts");
/* harmony import */ var _work_space_dashboard_invite_invite_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./work-space-dashboard/invite/invite.component */ "./src/app/pages/dashboard/work-space-dashboard/invite/invite.component.ts");
/* harmony import */ var _top_header_page_edit_add_listing_edit_add_listing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./top-header-page/edit-add-listing/edit-add-listing.component */ "./src/app/pages/dashboard/top-header-page/edit-add-listing/edit-add-listing.component.ts");
























const routes = [
    { path: 'agent/dashboard', component: _top_header_page_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["MainDashboardComponent"],
        children: [
            { path: 'client', component: _top_header_page_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_4__["AddClientComponent"] },
            { path: 'listing', component: _top_header_page_add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_5__["AddListingComponent"] },
            { path: 'advertise', component: _top_header_page_advertise_advertise_component__WEBPACK_IMPORTED_MODULE_6__["AdvertiseComponent"] },
            { path: 'invitation', component: _top_header_page_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_7__["InvitationComponent"] },
            { path: 'multiple', component: _top_header_page_link_multiple_listing_link_multiple_listing_component__WEBPACK_IMPORTED_MODULE_8__["LinkMultipleListingComponent"] },
            { path: 'profile', component: _top_header_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] },
            { path: 'settings', component: _top_header_page_setting_setting_component__WEBPACK_IMPORTED_MODULE_10__["SettingComponent"] },
            { path: 'listings', component: _top_header_page_your_listing_your_listing_component__WEBPACK_IMPORTED_MODULE_11__["YourListingComponent"] },
            { path: 'edit/Add/listing/:id', component: _top_header_page_edit_add_listing_edit_add_listing_component__WEBPACK_IMPORTED_MODULE_23__["EditAddListingComponent"] },
            {
                path: 'lead', component: _work_space_dashboard_work_spaces_work_spaces_component__WEBPACK_IMPORTED_MODULE_12__["WorkSpacesComponent"],
                children: [
                    { path: 'details', component: _work_space_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_13__["DetailsComponent"] },
                    { path: 'chats', component: _work_space_dashboard_chats_chats_component__WEBPACK_IMPORTED_MODULE_14__["ChatsComponent"] },
                    { path: 'search', component: _work_space_dashboard_search_properties_search_properties_component__WEBPACK_IMPORTED_MODULE_15__["SearchPropertiesComponent"] },
                    { path: 'properties', component: _work_space_dashboard_properties_properties_component__WEBPACK_IMPORTED_MODULE_16__["PropertiesComponent"] },
                    { path: 'tasks', component: _work_space_dashboard_task_task_component__WEBPACK_IMPORTED_MODULE_17__["TaskComponent"] },
                    { path: 'documents', component: _work_space_dashboard_documents_documents_component__WEBPACK_IMPORTED_MODULE_18__["DocumentsComponent"] },
                    { path: 'appointments', component: _work_space_dashboard_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_19__["AppointmentsComponent"] },
                    { path: 'property/:id', component: _work_space_dashboard_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_20__["PropertyDetailsComponent"] },
                    { path: 'members', component: _work_space_dashboard_members_members_component__WEBPACK_IMPORTED_MODULE_21__["MembersComponent"] },
                    { path: 'invite', component: _work_space_dashboard_invite_invite_component__WEBPACK_IMPORTED_MODULE_22__["InviteComponent"] }
                ]
            }
        ]
    },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _work_space_dashboard_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work-space-dashboard/appointments/appointments.component */ "./src/app/pages/dashboard/work-space-dashboard/appointments/appointments.component.ts");
/* harmony import */ var _work_space_dashboard_chats_chats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work-space-dashboard/chats/chats.component */ "./src/app/pages/dashboard/work-space-dashboard/chats/chats.component.ts");
/* harmony import */ var _work_space_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work-space-dashboard/details/details.component */ "./src/app/pages/dashboard/work-space-dashboard/details/details.component.ts");
/* harmony import */ var _work_space_dashboard_documents_documents_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work-space-dashboard/documents/documents.component */ "./src/app/pages/dashboard/work-space-dashboard/documents/documents.component.ts");
/* harmony import */ var _work_space_dashboard_invite_invite_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./work-space-dashboard/invite/invite.component */ "./src/app/pages/dashboard/work-space-dashboard/invite/invite.component.ts");
/* harmony import */ var _work_space_dashboard_members_members_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./work-space-dashboard/members/members.component */ "./src/app/pages/dashboard/work-space-dashboard/members/members.component.ts");
/* harmony import */ var _work_space_dashboard_properties_properties_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./work-space-dashboard/properties/properties.component */ "./src/app/pages/dashboard/work-space-dashboard/properties/properties.component.ts");
/* harmony import */ var _work_space_dashboard_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./work-space-dashboard/property-details/property-details.component */ "./src/app/pages/dashboard/work-space-dashboard/property-details/property-details.component.ts");
/* harmony import */ var _work_space_dashboard_search_properties_search_properties_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./work-space-dashboard/search-properties/search-properties.component */ "./src/app/pages/dashboard/work-space-dashboard/search-properties/search-properties.component.ts");
/* harmony import */ var _work_space_dashboard_task_task_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./work-space-dashboard/task/task.component */ "./src/app/pages/dashboard/work-space-dashboard/task/task.component.ts");
/* harmony import */ var _work_space_dashboard_work_spaces_work_spaces_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./work-space-dashboard/work-spaces/work-spaces.component */ "./src/app/pages/dashboard/work-space-dashboard/work-spaces/work-spaces.component.ts");
/* harmony import */ var _top_header_page_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./top-header-page/add-client/add-client.component */ "./src/app/pages/dashboard/top-header-page/add-client/add-client.component.ts");
/* harmony import */ var _top_header_page_add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./top-header-page/add-listing/add-listing.component */ "./src/app/pages/dashboard/top-header-page/add-listing/add-listing.component.ts");
/* harmony import */ var _top_header_page_advertise_advertise_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./top-header-page/advertise/advertise.component */ "./src/app/pages/dashboard/top-header-page/advertise/advertise.component.ts");
/* harmony import */ var _top_header_page_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./top-header-page/invitation/invitation.component */ "./src/app/pages/dashboard/top-header-page/invitation/invitation.component.ts");
/* harmony import */ var _top_header_page_link_multiple_listing_link_multiple_listing_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./top-header-page/link-multiple-listing/link-multiple-listing.component */ "./src/app/pages/dashboard/top-header-page/link-multiple-listing/link-multiple-listing.component.ts");
/* harmony import */ var _top_header_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./top-header-page/profile/profile.component */ "./src/app/pages/dashboard/top-header-page/profile/profile.component.ts");
/* harmony import */ var _top_header_page_setting_setting_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./top-header-page/setting/setting.component */ "./src/app/pages/dashboard/top-header-page/setting/setting.component.ts");
/* harmony import */ var _top_header_page_your_listing_your_listing_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./top-header-page/your-listing/your-listing.component */ "./src/app/pages/dashboard/top-header-page/your-listing/your-listing.component.ts");
/* harmony import */ var _top_header_page_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./top-header-page/main-dashboard/main-dashboard.component */ "./src/app/pages/dashboard/top-header-page/main-dashboard/main-dashboard.component.ts");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/pages/dashboard/dashboard-routing.module.ts");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm2015/ngx-stripe.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng_multiselect_dropdown_angular7__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng-multiselect-dropdown-angular7 */ "./node_modules/ng-multiselect-dropdown-angular7/fesm2015/ng-multiselect-dropdown-angular7.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-bootstrap/timepicker */ "./node_modules/ngx-bootstrap/timepicker/fesm2015/ngx-bootstrap-timepicker.js");
/* harmony import */ var src_app_models_property_model__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! src/app/models/property.model */ "./src/app/models/property.model.ts");
/* harmony import */ var _top_header_page_edit_add_listing_edit_add_listing_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./top-header-page/edit-add-listing/edit-add-listing.component */ "./src/app/pages/dashboard/top-header-page/edit-add-listing/edit-add-listing.component.ts");
/* harmony import */ var _modal_components_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./modal-components/make-payment/make-payment.component */ "./src/app/pages/dashboard/modal-components/make-payment/make-payment.component.ts");







































let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_top_header_page_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_15__["AddClientComponent"], _top_header_page_add_listing_add_listing_component__WEBPACK_IMPORTED_MODULE_16__["AddListingComponent"], _top_header_page_advertise_advertise_component__WEBPACK_IMPORTED_MODULE_17__["AdvertiseComponent"], _top_header_page_invitation_invitation_component__WEBPACK_IMPORTED_MODULE_18__["InvitationComponent"], _top_header_page_link_multiple_listing_link_multiple_listing_component__WEBPACK_IMPORTED_MODULE_19__["LinkMultipleListingComponent"],
            _top_header_page_profile_profile_component__WEBPACK_IMPORTED_MODULE_20__["ProfileComponent"], _top_header_page_setting_setting_component__WEBPACK_IMPORTED_MODULE_21__["SettingComponent"], _top_header_page_your_listing_your_listing_component__WEBPACK_IMPORTED_MODULE_22__["YourListingComponent"], _top_header_page_main_dashboard_main_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["MainDashboardComponent"], _work_space_dashboard_appointments_appointments_component__WEBPACK_IMPORTED_MODULE_4__["AppointmentsComponent"], _work_space_dashboard_chats_chats_component__WEBPACK_IMPORTED_MODULE_5__["ChatsComponent"],
            _work_space_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"], _work_space_dashboard_documents_documents_component__WEBPACK_IMPORTED_MODULE_7__["DocumentsComponent"], _work_space_dashboard_invite_invite_component__WEBPACK_IMPORTED_MODULE_8__["InviteComponent"], _work_space_dashboard_members_members_component__WEBPACK_IMPORTED_MODULE_9__["MembersComponent"], _work_space_dashboard_properties_properties_component__WEBPACK_IMPORTED_MODULE_10__["PropertiesComponent"], _work_space_dashboard_property_details_property_details_component__WEBPACK_IMPORTED_MODULE_11__["PropertyDetailsComponent"],
            _work_space_dashboard_search_properties_search_properties_component__WEBPACK_IMPORTED_MODULE_12__["SearchPropertiesComponent"], _work_space_dashboard_task_task_component__WEBPACK_IMPORTED_MODULE_13__["TaskComponent"], _work_space_dashboard_work_spaces_work_spaces_component__WEBPACK_IMPORTED_MODULE_14__["WorkSpacesComponent"], _top_header_page_edit_add_listing_edit_add_listing_component__WEBPACK_IMPORTED_MODULE_37__["EditAddListingComponent"], _modal_components_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_38__["MakePaymentComponent"]],
        entryComponents: [_modal_components_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_38__["MakePaymentComponent"]],
        imports: [
            ng_multiselect_dropdown_angular7__WEBPACK_IMPORTED_MODULE_29__["NgMultiSelectDropDownModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["FormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_26__["ReactiveFormsModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_24__["DashboardRoutingModule"],
            ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_31__["SlideshowModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_30__["InfiniteScrollModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(),
            ngx_stripe__WEBPACK_IMPORTED_MODULE_27__["NgxStripeModule"].forRoot(src_environments_environment__WEBPACK_IMPORTED_MODULE_28__["environment"].stripeKey),
            ng_multiselect_dropdown_angular7__WEBPACK_IMPORTED_MODULE_29__["NgMultiSelectDropDownModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_34__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_timepicker__WEBPACK_IMPORTED_MODULE_35__["TimepickerModule"].forRoot(),
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_25__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_25__["OwlNativeDateTimeModule"]
        ],
        exports: [_work_space_dashboard_details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"]],
        providers: [src_app_models_property_model__WEBPACK_IMPORTED_MODULE_36__["Property"]]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/pages/dashboard/modal-components/make-payment/make-payment.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/modal-components/make-payment/make-payment.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9tb2RhbC1jb21wb25lbnRzL21ha2UtcGF5bWVudC9tYWtlLXBheW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/dashboard/modal-components/make-payment/make-payment.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/modal-components/make-payment/make-payment.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: MakePaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakePaymentComponent", function() { return MakePaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");





// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
let MakePaymentComponent = class MakePaymentComponent {
    constructor(formBuilder, modalRef) {
        this.formBuilder = formBuilder;
        this.modalRef = modalRef;
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.buildForm();
        this.lead_id = this.leadDetails.id;
    }
    buildForm() {
        this.permanentUserForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    closeFirstModal() {
        if (!this.modalRef) {
            return;
        }
        this.modalRef.hide();
        this.modalRef = null;
    }
    makePermanentRequest() {
        if (this.permanentUserForm.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Warning',
                text: "User Name/Email can't be blank!",
                type: 'warning'
            });
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Please wait...",
            type: 'info',
            html: "<center><img src='../../../assets/img/loading.gif' width='30%'></center>",
            showConfirmButton: false
        });
        var username = this.permanentUserForm.value.username.split(' ');
        // var response = this.lead.makePermanentUser(this.loggedInUserDetails.session_token,this.leadDetails.id,username[0],username[1],this.permanentUserForm.value.email,location.origin).then(data=>{
        let obj = {
            lead_id: this.lead_id,
            name: username[0],
            lname: username[1],
            email: this.permanentUserForm.value.email,
            angular_root_url: location.origin
        };
        console.log(obj);
        this.action.emit(obj);
        this.closeFirstModal();
    }
};
MakePaymentComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MakePaymentComponent.prototype, "action", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MakePaymentComponent.prototype, "leadDetails", void 0);
MakePaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-make-payment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./make-payment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/modal-components/make-payment/make-payment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./make-payment.component.css */ "./src/app/pages/dashboard/modal-components/make-payment/make-payment.component.css")).default]
    })
], MakePaymentComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/add-client/add-client.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/add-client/add-client.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC90b3AtaGVhZGVyLXBhZ2UvYWRkLWNsaWVudC9hZGQtY2xpZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/add-client/add-client.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/add-client/add-client.component.ts ***!
  \************************************************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _top_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../top-header.service */ "./src/app/pages/dashboard/top-header-page/top-header.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");








let AddClientComponent = class AddClientComponent {
    constructor(topheaderservice, formBuilder, router, commonservice, localStorageService) {
        this.topheaderservice = topheaderservice;
        this.formBuilder = formBuilder;
        this.router = router;
        this.commonservice = commonservice;
        this.localStorageService = localStorageService;
    }
    ngOnInit() {
        this.buildForm();
        this.localstorage();
    }
    buildForm() {
        this.addClientForm = this.formBuilder.group({
            name: [''],
            lname: [''],
            email: [''],
            mls_ids: ['']
        });
    }
    localstorage() {
        let loclLead = JSON.parse(this.localStorageService.getItem('selectedLead'));
        this.commonservice.changeLeadFlag(loclLead);
        this.get_Leads();
    }
    get_Leads() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            this.leadDetails = res;
            this.agent_id = res.agent_id;
        });
    }
    onSubmit() {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (this.addClientForm.value.name == '') {
            document.getElementById('name').focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Warning',
                text: "Name can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.addClientForm.value.lname == '') {
            document.getElementById('last_name').focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Warning',
                text: "Last Name can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.addClientForm.value.email == '') {
            document.getElementById('email').focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Warning',
                text: "Email can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (!filter.test(this.addClientForm.value.email)) {
            document.getElementById('email').focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Warning',
                text: "Please Enter Valid Email",
                type: 'warning'
            });
            return;
        }
        else if (this.addClientForm.value.mls_ids == '') {
            document.getElementById('mls_id').focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Warning',
                text: "Please Enter mls_id",
                type: 'warning'
            });
            return;
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: "Please wait..",
                type: 'info',
                html: "<center><img src='../../../assets/img/loading.gif' width='30%'></center>",
                showConfirmButton: false
            });
            let obj = {
                agent_id: this.agent_id,
                angular_root_url: location.origin,
                email: this.addClientForm.value.email,
                lname: this.addClientForm.value.lname,
                mls_ids: this.addClientForm.value.mls_ids,
                name: this.addClientForm.value.name,
            };
            this.topheaderservice.addClient(obj).subscribe((res) => {
                if (res.code == 200) {
                    this.user = res.user;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Client',
                        text: "Client Created Successfully!",
                        type: 'success'
                    });
                    this.addClientForm.reset();
                    this.router.navigate(["/agent/workspaces/lead/details"]);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Warning',
                        text: res.errors,
                        type: 'error'
                    });
                }
            });
        }
    }
};
AddClientComponent.ctorParameters = () => [
    { type: _top_header_service__WEBPACK_IMPORTED_MODULE_2__["TopHeaderService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
];
AddClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-client',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/add-client/add-client.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-client.component.css */ "./src/app/pages/dashboard/top-header-page/add-client/add-client.component.css")).default]
    })
], AddClientComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/add-listing/add-listing.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/add-listing/add-listing.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".listing-1{\n\tpadding-left: 3%;padding-right: 3%;\n}\n\n.listing-1 h1{\n\tcolor: black;\n\tfont-size: 20px;\n\tfont-weight: 600;\n}\n\n.listing-1 p{\n\tcolor: grey;\n\tfont-size: 16px;\n\tmargin-top: -10px;\n}\n\n.listing-1 label{\n\tfont-size: 18px;\n\tfont-weight: 500;\n\tcolor: black !important;\n}\n\n.listing-1 select{\n\tpadding:10px;\n\tborder: 1px solid lightgrey;\n\tborder-radius: 10px;\n\tcolor: #2f2d2d !important;\n\tfont-size: 16px;\n\tbackground: white;\n\twidth: 80%;\n\tcursor:pointer;\n}\n\n.listing-1 input{\n\tpadding:10px;\n\tborder: 1px solid lightgrey;\n\tborder-radius: 10px;\n\tcolor: #2f2d2d !important;\n\tfont-size: 16px;\n\tbackground: white;\n\twidth: 80%;\n}\n\n.listing-1 textarea{\n\tpadding:10px;\n\tborder: 1px solid lightgrey;\n\tborder-radius: 10px;\n\tcolor: #2f2d2d !important;\n\tfont-size: 16px;\n\tbackground: white;\n\twidth: 80%;\n\tresize: none !important;\n}\n\n.trigger {\n    border: 1px solid lightgrey;\n    width: 90%;\n    padding: 5px 15px;\n    border-radius: 10px;\n    height: 200px;\n    box-sizing: border-box;\n}\n\n.imageThumb {\n    border: 1px solid lightgray;\n    padding: 1px;\n    cursor: pointer;\n}\n\n.remove {\ndisplay: block;\nbackground: #444;\nborder: 1px solid black;\ncolor: white;\ntext-align: center;\ncursor: pointer;\nmargin-bottom: 5px;\n}\n\n.remove:hover {\nbackground: white;\ncolor: black;\n}\n\n.desc{\n\twidth: 50%;top:-33px;position: relative;\n}\n\n@media(max-width:512px){\n\t/* .listing-1{\n\t\tmargin-top: -46% !important;\n\t} */\n\t.list-form input{\n\t\twidth:91%;\n\t}\n\t.desc{\n\t\twidth: 50%;top:0px;position: relative;\n\t}\n\t.control-2{\n\t\twidth: 180% !important;\n\t}\n\t.listing-1[_ngcontent-c2] select[_ngcontent-c2] {\n\t\tpadding: 10px;\n\t\tborder: 1px solid lightgrey;\n\t\tborder-radius: 10px;\n\t\tcolor: #2f2d2d !important;\n\t\tfont-size: 16px;\n\t\tbackground: white;\n\t\twidth: 91% !important;\n\t\tcursor: pointer;\n\t}\n}\n\n@media (min-width:512px) and (max-width:769px){\n\tlabel.limit{\n\t\theight: 55px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RvcC1oZWFkZXItcGFnZS9hZGQtbGlzdGluZy9hZGQtbGlzdGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCLENBQUMsaUJBQWlCO0FBQ25DOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0FBQ3hCOztBQUNBO0NBQ0MsWUFBWTtDQUNaLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsVUFBVTtDQUNWLGNBQWM7QUFDZjs7QUFDQTtDQUNDLFlBQVk7Q0FDWiwyQkFBMkI7Q0FDM0IsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLFVBQVU7QUFDWDs7QUFDQTtDQUNDLFlBQVk7Q0FDWiwyQkFBMkI7Q0FDM0IsbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLFVBQVU7Q0FDVix1QkFBdUI7QUFDeEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFHQTtBQUNBLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsdUJBQXVCO0FBQ3ZCLFlBQVk7QUFDWixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQjs7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1o7O0FBQ0E7Q0FDQyxVQUFVLENBQUMsU0FBUyxDQUFDLGtCQUFrQjtBQUN4Qzs7QUFDQTtDQUNDOztJQUVHO0NBQ0g7RUFDQyxTQUFTO0NBQ1Y7Q0FDQTtFQUNDLFVBQVUsQ0FBQyxPQUFPLENBQUMsa0JBQWtCO0NBQ3RDO0NBQ0E7RUFDQyxzQkFBc0I7Q0FDdkI7Q0FDQTtFQUNDLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0NBQ2hCO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFlBQVk7Q0FDYjtBQUNEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RvcC1oZWFkZXItcGFnZS9hZGQtbGlzdGluZy9hZGQtbGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3RpbmctMXtcblx0cGFkZGluZy1sZWZ0OiAzJTtwYWRkaW5nLXJpZ2h0OiAzJTtcbn1cblxuLmxpc3RpbmctMSBoMXtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ubGlzdGluZy0xIHB7XG5cdGNvbG9yOiBncmV5O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLmxpc3RpbmctMSBsYWJlbHtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbi5saXN0aW5nLTEgc2VsZWN0e1xuXHRwYWRkaW5nOjEwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Y29sb3I6ICMyZjJkMmQgIWltcG9ydGFudDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0d2lkdGg6IDgwJTtcblx0Y3Vyc29yOnBvaW50ZXI7XG59XG4ubGlzdGluZy0xIGlucHV0e1xuXHRwYWRkaW5nOjEwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0Y29sb3I6ICMyZjJkMmQgIWltcG9ydGFudDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRiYWNrZ3JvdW5kOiB3aGl0ZTtcblx0d2lkdGg6IDgwJTtcbn1cbi5saXN0aW5nLTEgdGV4dGFyZWF7XG5cdHBhZGRpbmc6MTBweDtcblx0Ym9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRjb2xvcjogIzJmMmQyZCAhaW1wb3J0YW50O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHR3aWR0aDogODAlO1xuXHRyZXNpemU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnRyaWdnZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaW1hZ2VUaHVtYiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIHBhZGRpbmc6IDFweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuLnJlbW92ZSB7XG5kaXNwbGF5OiBibG9jaztcbmJhY2tncm91bmQ6ICM0NDQ7XG5ib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbmNvbG9yOiB3aGl0ZTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmN1cnNvcjogcG9pbnRlcjtcbm1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5yZW1vdmU6aG92ZXIge1xuYmFja2dyb3VuZDogd2hpdGU7XG5jb2xvcjogYmxhY2s7XG59XG4uZGVzY3tcblx0d2lkdGg6IDUwJTt0b3A6LTMzcHg7cG9zaXRpb246IHJlbGF0aXZlO1xufVxuQG1lZGlhKG1heC13aWR0aDo1MTJweCl7XG5cdC8qIC5saXN0aW5nLTF7XG5cdFx0bWFyZ2luLXRvcDogLTQ2JSAhaW1wb3J0YW50O1xuXHR9ICovXG5cdC5saXN0LWZvcm0gaW5wdXR7XG5cdFx0d2lkdGg6OTElO1xuXHR9XG5cdC5kZXNje1xuXHRcdHdpZHRoOiA1MCU7dG9wOjBweDtwb3NpdGlvbjogcmVsYXRpdmU7XG5cdH1cblx0LmNvbnRyb2wtMntcblx0XHR3aWR0aDogMTgwJSAhaW1wb3J0YW50O1xuXHR9XG5cdC5saXN0aW5nLTFbX25nY29udGVudC1jMl0gc2VsZWN0W19uZ2NvbnRlbnQtYzJdIHtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdGNvbG9yOiAjMmYyZDJkICFpbXBvcnRhbnQ7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdGJhY2tncm91bmQ6IHdoaXRlO1xuXHRcdHdpZHRoOiA5MSUgIWltcG9ydGFudDtcblx0XHRjdXJzb3I6IHBvaW50ZXI7XG5cdH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6NTEycHgpIGFuZCAobWF4LXdpZHRoOjc2OXB4KXtcblx0bGFiZWwubGltaXR7XG5cdFx0aGVpZ2h0OiA1NXB4O1xuXHR9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/add-listing/add-listing.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/add-listing/add-listing.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AddListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddListingComponent", function() { return AddListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_property_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/property.model */ "./src/app/models/property.model.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _top_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../top-header.service */ "./src/app/pages/dashboard/top-header-page/top-header.service.ts");






let AddListingComponent = class AddListingComponent {
    constructor(router, topheaderservice) {
        this.router = router;
        this.topheaderservice = topheaderservice;
        this.imageBuildingSrc = '';
        this.imagePropertySrc = '';
        this.urls = new Array();
        this.images = new Array();
        this.listing = new src_app_models_property_model__WEBPACK_IMPORTED_MODULE_2__["Property"]();
        this.uploadVideo = function (event) {
            this.video = event.target.files[0];
        };
        this.uploadPropertyDoc = function (event) {
            if (event.target.files[0].size < 10000000) {
                this.file = event.target.files[0];
                this.btnDisabled = false;
                this.message = '';
            }
            else {
                this.btnDisabled = true;
                this.message = "Please only upload Maximum size of file 9MB";
            }
        };
    }
    ngOnInit() {
        this.clearListingForm();
    }
    clearListingForm() {
        this.btnDisabled = false;
        this.sale_lease = '',
            this.listing.project_name = '',
            this.listing.category = '',
            this.listing.address = '',
            this.listing.street = '',
            this.listing.street_num = '',
            this.listing.street_abbreviation = '',
            this.listing.zip = '',
            this.listing.state = '',
            this.listing.municipality = '',
            this.listing.country = '',
            this.listing.layout_name = '',
            this.listing.developer = '',
            this.listing.nearest_intersection = '',
            this.listing.community = '',
            this.listing.total_area = '',
            this.listing.balcony_size = '',
            this.listing.contact_name = '',
            this.listing.contact_email = '',
            this.listing.contact_phone = '',
            this.listing.remarks_for_clients = '',
            this.listing.estimated_price = '',
            this.listing.construction_status = '',
            this.listing.completion_date = '',
            this.listing.sales_started = '',
            this.listing.ownership = '',
            this.listing.units_no = '',
            this.building_image = '',
            this.file = '',
            this.video = '';
    }
    selectPropertyType($event) {
        this.property_type = $event.target.value;
    }
    selectFloors($event) {
        this.floors = $event.target.value;
    }
    selectBedromms($event) {
        this.bedrooms = $event.target.value;
    }
    selectWashrooms($event) {
        this.washrooms = $event.target.value;
    }
    selectStores($event) {
        this.stores = $event.target.value;
    }
    selectArea($event) {
        this.area = $event.target.value;
    }
    selectSaleLease($event) {
        this.sale_lease = $event.target.value;
    }
    handleBuildingImageChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        this.building_image = file;
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageBuildingSrc = reader.result;
    }
    handlePropertyImageChange(e) {
        let files = e.target.files;
        if (files && (this.urls.length < 4)) {
            for (let file of files) {
                var pattern = /image-*/;
                if (!file.type.match(pattern)) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire("Warning", 'File is not an image', "warning");
                    return;
                }
                else {
                    let reader = new FileReader();
                    reader.onload = (e) => {
                        this.urls.push(e.target.result);
                        this.images.push(file);
                    };
                    reader.readAsDataURL(file);
                }
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Warning',
                text: "Not uploaded more than 4 images",
                type: 'warning'
            });
        }
    }
    removeSelectedImage(url) {
        const index = this.urls.indexOf(url);
        const imageindex = this.images.indexOf(url);
        if (index !== -1) {
            this.urls.splice(index, 1);
        }
        if (imageindex !== -1) {
            this.images.splice(imageindex, 1);
        }
    }
    addListing() {
        if (this.sale_lease == '') {
            document.getElementById('sale_lease').focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Warning',
                text: "Sale/Lease can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.street == '') {
            document.getElementById("street").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Warning',
                text: "Street can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.zip == '') {
            document.getElementById("zip").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Warning',
                text: "Zip can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.municipality == '') {
            document.getElementById("municipality").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Warning',
                text: "Municipality can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.country == '') {
            document.getElementById("country").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Warning',
                text: "Country can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.total_area == '') {
            document.getElementById("total_area").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Warning',
                text: "Size can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.estimated_price == '') {
            document.getElementById("estimated_price").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Warning',
                text: "Price can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.remarks_for_clients == '') {
            document.getElementById("remarks_for_clients").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Warning',
                text: "Description can't be blank!",
                type: 'warning'
            });
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: "Please wait..",
            type: 'info',
            html: "<center><img src='../../../assets/img/loading.gif' width='30%'></center>",
            showConfirmButton: false
        });
        let formData = new FormData();
        formData.append('project_name', this.listing.project_name);
        formData.append('category', this.listing.category);
        // formData.append('address', this.listing.address);
        formData.append('area', this.area);
        formData.append('street', this.listing.street);
        formData.append('street_num', this.listing.street_num);
        formData.append('street_abbreviation', this.listing.street_abbreviation);
        formData.append('state', this.listing.state);
        formData.append('zip', this.listing.zip);
        formData.append('municipality', this.listing.municipality);
        formData.append('country', this.listing.country);
        formData.append('developer', this.listing.developer);
        formData.append('nearest_intersection', this.listing.nearest_intersection);
        formData.append('estimated_price', this.listing.estimated_price);
        formData.append('total_area', this.listing.total_area);
        formData.append('balcony_size', this.listing.balcony_size);
        formData.append('contact_name', this.listing.contact_name);
        formData.append('contact_email', this.listing.contact_email);
        formData.append('contact_phone', this.listing.contact_phone);
        formData.append('construction_status', this.listing.construction_status);
        formData.append('completion_date', this.listing.completion_date);
        formData.append('sales_started', this.listing.sales_started);
        formData.append('ownership', this.listing.ownership);
        formData.append('units_no', this.listing.units_no);
        formData.append('remarks_for_clients', this.listing.remarks_for_clients);
        formData.append('property_type', this.property_type);
        formData.append('floors', this.floors);
        formData.append('bedrooms', this.bedrooms);
        formData.append('washrooms', this.washrooms);
        formData.append('stores', this.stores);
        formData.append('building_image', this.building_image);
        formData.append('video', this.video);
        formData.append('file', this.file);
        formData.append('sale_lease', this.sale_lease);
        if (this.images.length > 0) {
            for (var i = 0; i < this.images.length; i++) {
                formData.append("property_images[]", this.images[i]);
            }
        }
        else {
            formData.append("property_images[]", "");
        }
        this.topheaderservice.addProperty(formData).subscribe((res) => {
            if (res.code == 200) {
                this.router.navigate(['/agent/dashboard/listings']);
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Property',
                    text: "Property Added Successfully!",
                    type: 'success'
                });
                // var goUrl = "/listing"
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
};
AddListingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _top_header_service__WEBPACK_IMPORTED_MODULE_5__["TopHeaderService"] }
];
AddListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/add-listing/add-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-listing.component.css */ "./src/app/pages/dashboard/top-header-page/add-listing/add-listing.component.css")).default]
    })
], AddListingComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/advertise/advertise.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/advertise/advertise.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".advertise-link{\n    border-left: 1px solid lightgrey;\n    padding-left: 30px;\n    padding-bottom: 20px;\n}\n .advertise-link h1{\n    color: black;\n    font-weight: 600;\n    font-size: 25px;\n    text-transform: uppercase;\n}\n .advertise-link p{\n    color: grey;\n    font-size: 16px;\n    font-weight: 550;\n}\n .advertise-link span{\n    color: #b2b0b0;\n    font-size: 20px;\n    font-weight: 550;\n}\n .advertise-link span:hover{\n    color: black;\n    \n}\n .link-row{\n    margin-top: 8%;\n}\n .generate[_ngcontent-c2] {\n    background: #2B66C4;\n    color: white;\n    font-weight: 550;\n    width: 197px;\n    cursor: pointer;\n    text-align: center;\n    margin-top: 29px;\n}\n @media screen and (max-width:512px){\n    .generate[_ngcontent-c2] {\n        background: #2B66C4;\n        color: white;\n        font-weight: 550;\n        width: 197px;\n        cursor: pointer;\n        text-align: center;\n        margin-top: 10px;\n    }\n}\n @media screen and (max-width:769px){\n    .generate[_ngcontent-c2] {\n        background: #2B66C4;\n        color: white;\n        font-weight: 550;\n        width: 197px;\n        cursor: pointer;\n        text-align: center;\n        margin-top: 30px !important;\n    }\n}\n @media screen and (max-width:1025px){\n    .generate[_ngcontent-c2] {\n        background: #2B66C4;\n        color: white;\n        font-weight: 550;\n        width: 197px;\n        cursor: pointer;\n        text-align: center;\n        margin-top: 56px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RvcC1oZWFkZXItcGFnZS9hZHZlcnRpc2UvYWR2ZXJ0aXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QjtDQUNDO0lBQ0csWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCO0NBQ0M7SUFDRyxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtDQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7Q0FDQTtJQUNJLFlBQVk7O0FBRWhCO0NBQ0E7SUFDSSxjQUFjO0FBQ2xCO0NBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7Q0FDQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0FBQ0o7Q0FDQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsMkJBQTJCO0lBQy9CO0FBQ0o7Q0FDQTtJQUNJO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7UUFDbEIsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvdG9wLWhlYWRlci1wYWdlL2FkdmVydGlzZS9hZHZlcnRpc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZHZlcnRpc2UtbGlua3tcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4gLmFkdmVydGlzZS1saW5rIGgxe1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuIC5hZHZlcnRpc2UtbGluayBwe1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTUwO1xufVxuLmFkdmVydGlzZS1saW5rIHNwYW57XG4gICAgY29sb3I6ICNiMmIwYjA7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG59XG4uYWR2ZXJ0aXNlLWxpbmsgc3Bhbjpob3ZlcntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgXG59XG4ubGluay1yb3d7XG4gICAgbWFyZ2luLXRvcDogOCU7XG59XG4uZ2VuZXJhdGVbX25nY29udGVudC1jMl0ge1xuICAgIGJhY2tncm91bmQ6ICMyQjY2QzQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgd2lkdGg6IDE5N3B4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjlweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTEycHgpe1xuICAgIC5nZW5lcmF0ZVtfbmdjb250ZW50LWMyXSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyQjY2QzQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICAgICAgd2lkdGg6IDE5N3B4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OXB4KXtcbiAgICAuZ2VuZXJhdGVbX25nY29udGVudC1jMl0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMkI2NkM0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XG4gICAgICAgIHdpZHRoOiAxOTdweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjVweCl7XG4gICAgLmdlbmVyYXRlW19uZ2NvbnRlbnQtYzJdIHtcbiAgICAgICAgYmFja2dyb3VuZDogIzJCNjZDNDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXdlaWdodDogNTUwO1xuICAgICAgICB3aWR0aDogMTk3cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/advertise/advertise.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/advertise/advertise.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AdvertiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertiseComponent", function() { return AdvertiseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ts_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts-clipboard */ "./node_modules/ts-clipboard/ts-clipboard.js");
/* harmony import */ var ts_clipboard__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ts_clipboard__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _top_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../top-header.service */ "./src/app/pages/dashboard/top-header-page/top-header.service.ts");






let AdvertiseComponent = class AdvertiseComponent {
    constructor(fb, topheaderservice) {
        this.fb = fb;
        this.topheaderservice = topheaderservice;
        this.adds = [];
        this.removeStatus = { status: 2, message: "Not initiated" };
        this.validFormStatus = false;
        this.addStatus = { status: 2, message: "Not submitted" };
    }
    ngOnInit() {
        this.formbuild();
        this.getAdds(1, 10);
    }
    formbuild() {
        this.form = this.fb.group({
            properties: [""],
        });
    }
    getAdds(page, per_page) {
        let obj = {
            page: page,
            per_page: per_page
        };
        this.topheaderservice.addsList(obj).subscribe((res) => {
            console.log(res);
            this.adds = res.adds;
        });
    }
    addLink(add_id) {
        // var encryptedId = this.jendec.jencrypt(String(add_id))
        this.goUrl = location.origin + "/advertisement/" + add_id;
        ts_clipboard__WEBPACK_IMPORTED_MODULE_3__["Clipboard"].copy(this.goUrl);
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: 'Link Copied',
            text: "Link has been copied to your Clipbord",
            type: 'info'
        });
    }
    removeAdd(add_id) {
        let obj = {
            add_id: add_id
        };
        this.topheaderservice.deleteAdd(obj).subscribe((res) => {
            if (res.code == 200) {
                this.removeStatus = { status: 1, message: "Advertisement Removed successfully!" };
                const index = this.adds.findIndex(item => item.id === add_id);
                this.adds.splice(index, 1);
            }
            else {
                this.removeStatus = { status: 0, message: res.errors };
            }
        });
    }
    // addNewAdd
    onSubmit() {
        if (this.form.value.properties == '') {
            this.validFormStatus = true;
            return;
        }
        else {
            this.validFormStatus = true;
            if (this.validFormStatus) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: "Please wait..",
                    type: 'info',
                    html: "<center><img src='../../../assets/img/loading.gif' width='30%'></center>",
                    showConfirmButton: false,
                    allowOutsideClick: false
                });
                var cpids = this.form.value.properties.split(',');
                if (cpids.length == 1) {
                    cpids = this.form.value.properties.split(' ');
                }
                this.validFormStatus = false;
                let obj = {
                    mls_ids: cpids
                };
                this.topheaderservice.addNewAdd(obj).subscribe((res) => {
                    if (res.code == 200) {
                        this.removeStatus = { status: 1, message: "Advertisement created successfully!" };
                        this.adds.push(res.add);
                        this.form.reset();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                    }
                    else {
                        this.removeStatus = { status: 0, message: res.errors };
                        this.validFormStatus = false;
                        this.form.reset();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                    }
                });
            }
            else {
                this.validFormStatus = false;
            }
        }
    }
};
AdvertiseComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _top_header_service__WEBPACK_IMPORTED_MODULE_5__["TopHeaderService"] }
];
AdvertiseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advertise',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advertise.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/advertise/advertise.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advertise.component.css */ "./src/app/pages/dashboard/top-header-page/advertise/advertise.component.css")).default]
    })
], AdvertiseComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/edit-add-listing/edit-add-listing.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/edit-add-listing/edit-add-listing.component.css ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".trigger1{\n    border: 1px solid lightgrey;\n    width: 90%;\n    padding: 5px;\n    border-radius: 10px;\n    height: 200px;\n    box-sizing: border-box;\n}\n\n.trigger_large{\n    border: 1px solid lightgrey;\n    width: 100%;\n    padding: 5px;\n    border-radius: 10px;\n    height: 200px;\n    box-sizing: border-box;\n}\n\n.listing-1 select{\n\tpadding:10px;\n\tborder: 1px solid lightgrey;\n\tborder-radius: 10px;\n\tcolor: #2f2d2d !important;\n\tfont-size: 16px;\n\tbackground: white;\n\twidth: 80%;\n\tcursor:pointer;\n}\n\n.listing-1 input{\n\tpadding:10px;\n\tborder: 1px solid lightgrey;\n\tborder-radius: 10px;\n\tcolor: #2f2d2d !important;\n\tfont-size: 16px;\n\tbackground: white;\n\twidth: 80%;\n}\n\n.listing-1 textarea{\n\tpadding:10px;\n\tborder: 1px solid lightgrey;\n\tborder-radius: 10px;\n\tcolor: #2f2d2d !important;\n\tfont-size: 16px;\n\tbackground: white;\n    width: 100%;\n    resize: none !important;\n}\n\n.imageThumb {\n    border: 1px solid lightgray;\n    padding: 1px;\n    cursor: pointer;\n}\n\n.remove {\ndisplay: block;\nbackground: #444;\nborder: 1px solid black;\ncolor: white;\ntext-align: center;\ncursor: pointer;\nmargin-bottom: 5px;\n}\n\n.remove:hover {\nbackground: white;\ncolor: black;\n}\n\n.desc{\n\twidth: 50%;position: relative; top:-33px;\n}\n\n@media screen and (max-width:512px){\n\t.desc{\n\t\twidth: 80%;position: relative; top:0px !important;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RvcC1oZWFkZXItcGFnZS9lZGl0LWFkZC1saXN0aW5nL2VkaXQtYWRkLWxpc3RpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osMkJBQTJCO0NBQzNCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixVQUFVO0NBQ1YsY0FBYztBQUNmOztBQUNBO0NBQ0MsWUFBWTtDQUNaLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsVUFBVTtBQUNYOztBQUNBO0NBQ0MsWUFBWTtDQUNaLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixpQkFBaUI7SUFDZCxXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUdBO0lBQ0ksMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0FBQ0EsY0FBYztBQUNkLGdCQUFnQjtBQUNoQix1QkFBdUI7QUFDdkIsWUFBWTtBQUNaLGtCQUFrQjtBQUNsQixlQUFlO0FBQ2Ysa0JBQWtCO0FBQ2xCOztBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWjs7QUFDQTtDQUNDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxTQUFTO0FBQ3pDOztBQUNBO0NBQ0M7RUFDQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCO0NBQ2xEO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvdG9wLWhlYWRlci1wYWdlL2VkaXQtYWRkLWxpc3RpbmcvZWRpdC1hZGQtbGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyaWdnZXIxe1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLnRyaWdnZXJfbGFyZ2V7XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmxpc3RpbmctMSBzZWxlY3R7XG5cdHBhZGRpbmc6MTBweDtcblx0Ym9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRjb2xvcjogIzJmMmQyZCAhaW1wb3J0YW50O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHR3aWR0aDogODAlO1xuXHRjdXJzb3I6cG9pbnRlcjtcbn1cbi5saXN0aW5nLTEgaW5wdXR7XG5cdHBhZGRpbmc6MTBweDtcblx0Ym9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRjb2xvcjogIzJmMmQyZCAhaW1wb3J0YW50O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGJhY2tncm91bmQ6IHdoaXRlO1xuXHR3aWR0aDogODAlO1xufVxuLmxpc3RpbmctMSB0ZXh0YXJlYXtcblx0cGFkZGluZzoxMHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdGNvbG9yOiAjMmYyZDJkICFpbXBvcnRhbnQ7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0YmFja2dyb3VuZDogd2hpdGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcmVzaXplOiBub25lICFpbXBvcnRhbnQ7XG59XG5cblxuLmltYWdlVGh1bWIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgICBwYWRkaW5nOiAxcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucmVtb3ZlIHtcbmRpc3BsYXk6IGJsb2NrO1xuYmFja2dyb3VuZDogIzQ0NDtcbmJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuY29sb3I6IHdoaXRlO1xudGV4dC1hbGlnbjogY2VudGVyO1xuY3Vyc29yOiBwb2ludGVyO1xubWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnJlbW92ZTpob3ZlciB7XG5iYWNrZ3JvdW5kOiB3aGl0ZTtcbmNvbG9yOiBibGFjaztcbn1cbi5kZXNje1xuXHR3aWR0aDogNTAlO3Bvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOi0zM3B4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MTJweCl7XG5cdC5kZXNje1xuXHRcdHdpZHRoOiA4MCU7cG9zaXRpb246IHJlbGF0aXZlOyB0b3A6MHB4ICFpbXBvcnRhbnQ7XG5cdH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/edit-add-listing/edit-add-listing.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/edit-add-listing/edit-add-listing.component.ts ***!
  \************************************************************************************************/
/*! exports provided: EditAddListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddListingComponent", function() { return EditAddListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_property_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/property.model */ "./src/app/models/property.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _top_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../top-header.service */ "./src/app/pages/dashboard/top-header-page/top-header.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let EditAddListingComponent = class EditAddListingComponent {
    constructor(route, router, topheaderservice) {
        this.route = route;
        this.router = router;
        this.topheaderservice = topheaderservice;
        this.imageBuildingSrc = '';
        this.urls = new Array();
        this.images = new Array();
        this.old_images = new Array();
        this.areas = ["Toronto", "York", "Durham", "Peel", "Halton", "Other"];
        this.properties_for = ["Sale", "Lease"];
        this.properties_type = ["COMMERCIAL", "CONDO", "RESIDENTIAL"];
        this.listing = new src_app_models_property_model__WEBPACK_IMPORTED_MODULE_2__["Property"]();
        this.uploadVideo = function (event) {
            this.video = event.target.files[0];
            this.video_name = '';
        };
        this.uploadPropertyDoc = function (event) {
            if (event.target.files[0].size < 10000000) {
                this.file = event.target.files[0];
                this.btnDisabled = false;
                this.message = '';
                this.pdf_name = '';
            }
            else {
                this.btnDisabled = true;
                this.message = "Please only upload Maximum size of file 9MB";
            }
        };
    }
    ngOnInit() {
        this.floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        this.bedrooms = [1, 2, 3, 4, 5, 6];
        this.washrooms = [1, 2, 3, 4, 5, 6];
        this.stores = [1, 2, 3, 4, 5, 6];
        this.listId = this.route.snapshot.params['id'];
        this.btnDisabled = false;
        this.agentProdetail();
    }
    agentProdetail() {
        let obj = {
            property_id: this.listId
        };
        this.topheaderservice.agentPropertyDetail(obj).subscribe((res) => {
            // console.log(data)
            if (res.code == 200) {
                var property = res.property;
                this.sale_lease = (property.sale_lease ? property.sale_lease : '');
                // console.log(this.sale_lease)
                this.listing.project_name = (property.project_name ? property.project_name : ''),
                    this.listing.category = (property.category ? property.category : ''),
                    // this.listing.address = (property.address ? property.address : ''),
                    this.selectedarea = (property.area ? property.area : ''),
                    // console.log(this.selectedarea)
                    this.listing.street = (property.street ? property.street : ''),
                    this.listing.street_num = (property.street_num ? property.street_num : ''),
                    this.listing.street_abbreviation = (property.street_abbreviation ? property.street_abbreviation : ''),
                    this.listing.zip = (property.zip ? property.zip : ''),
                    this.listing.state = (property.state ? property.state : ''),
                    this.listing.municipality = (property.municipality ? property.municipality : ''),
                    this.listing.country = property.country,
                    this.listing.developer = (property.developer ? property.developer : ''),
                    this.listing.nearest_intersection = (property.nearest_intersection ? property.nearest_intersection : ''),
                    this.listing.community = (property.community ? property.community : ''),
                    this.listing.total_area = (property.total_area ? property.total_area : ''),
                    this.listing.balcony_size = (property.balcony_size ? property.balcony_size : ''),
                    this.listing.contact_name = (property.contact_name ? property.contact_name : ''),
                    this.listing.contact_email = (property.contact_email ? property.contact_email : ''),
                    this.listing.contact_phone = (property.contact_phone ? property.contact_phone : ''),
                    this.listing.remarks_for_clients = (property.remarks_for_clients ? property.remarks_for_clients : ''),
                    this.listing.estimated_price = (property.estimated_price ? property.estimated_price : ''),
                    this.listing.construction_status = (property.construction_status ? property.construction_status : ''),
                    this.listing.completion_date = (property.completion_date ? property.completion_date : ''),
                    this.listing.sales_started = (property.sales_started ? property.sales_started : ''),
                    this.listing.ownership = (property.ownership ? property.ownership : ''),
                    this.listing.units_no = (property.units_no ? property.units_no : ''),
                    this.imageBuildingSrc = property.property_image,
                    this.pdf_name = property.pdf_link,
                    this.video_name = property.property_video_url,
                    this.selectedFloor = (property.floors ? property.floors : ''),
                    this.selectedBedroom = (property.bedrooms ? property.bedrooms : ''),
                    this.selectedWashroom = (property.washrooms ? property.washrooms : ''),
                    this.selectedStore = (property.store ? property.store : ''),
                    this.old_images = (property.images_list ? property.images_list : []),
                    this.property_type = property.property_type,
                    this.building_image = '',
                    this.file = '';
                this.video = '';
            }
            else {
                this.router.navigate(["**"]);
            }
        });
    }
    handlePropertyImageChange(e) {
        // console.log(this.old_images.length)
        let files = e.target.files;
        if (files && (this.urls.length < (4 - (this.old_images.length ? this.old_images.length : 0)))) {
            for (let file of files) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.urls.push(e.target.result);
                    this.images.push(file);
                };
                reader.readAsDataURL(file);
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Warning',
                text: "Not uploaded more than 4 images",
                type: 'warning'
            });
        }
        // console.log(this.old_images)
    }
    removeSelectedImage(url) {
        const index = this.urls.indexOf(url);
        const imageindex = this.images.indexOf(url);
        if (index !== -1) {
            this.urls.splice(index, 1);
        }
        if (imageindex !== -1) {
            this.images.splice(imageindex, 1);
        }
    }
    removefromOldArray(url) {
        const index = this.old_images.indexOf(url);
        if (index !== -1) {
            this.old_images.splice(index, 1);
        }
    }
    handleBuildingImageChange(e) {
        this.building_image = e.target.files[0];
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleBuildingLayoutLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleBuildingLayoutLoaded(e) {
        let reader = e.target;
        this.imageBuildingSrc = reader.result;
    }
    selectPropertyType($event) {
        this.property_type = $event.target.value;
    }
    selectFloors($event) {
        this.selectedFloor = $event.target.value;
    }
    selectBedromms($event) {
        this.selectedBedroom = $event.target.value;
    }
    selectWashrooms($event) {
        this.selectedWashroom = $event.target.value;
    }
    selectStores($event) {
        this.selectedStore = $event.target.value;
    }
    selectArea($event) {
        this.selectedarea = $event.target.value;
    }
    selectSaleLease($event) {
        this.sale_lease = $event.target.value;
    }
    addListing() {
        if (this.sale_lease == '') {
            document.getElementById('sale_lease').focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Warning',
                text: "Sale/Lease can't be blank!",
                type: 'warning'
            });
            return;
            // }
            // else if(this.listing.address==''){
            //   document.getElementById("address").focus()
            //   swal({
            //     title: 'Warning',
            //     text: "Address can't be blank!",
            //     type: 'warning'
            //   })
            //   return;
        }
        else if (this.listing.street == '') {
            document.getElementById("street").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Warning',
                text: "Street can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.zip == '') {
            document.getElementById("zip").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Warning',
                text: "Zip can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.municipality == '') {
            document.getElementById("municipality").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Warning',
                text: "Municipality can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.country == '') {
            document.getElementById("country").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Warning',
                text: "Country can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.total_area == '') {
            document.getElementById("total_area").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Warning',
                text: "Size can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.estimated_price == '') {
            document.getElementById("estimated_price").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Warning',
                text: "Price can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.listing.remarks_for_clients == '') {
            document.getElementById("remarks_for_clients").focus();
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Warning',
                text: "Description can't be blank!",
                type: 'warning'
            });
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Please wait..",
            type: 'info',
            html: "<center><img src='../../../assets/img/loading.gif' width='30%'></center>",
            showConfirmButton: false
        });
        let formData = new FormData();
        formData.append('property_id', this.listId);
        formData.append('project_name', this.listing.project_name);
        formData.append('category', this.listing.category);
        formData.append('address', this.listing.address);
        formData.append('area', this.selectedarea);
        formData.append('street', this.listing.street);
        formData.append('street_num', this.listing.street_num);
        formData.append('street_abbreviation', this.listing.street_abbreviation);
        formData.append('state', this.listing.state);
        formData.append('zip', this.listing.zip);
        formData.append('municipality', this.listing.municipality);
        formData.append('country', this.listing.country);
        formData.append('developer', this.listing.developer);
        formData.append('nearest_intersection', this.listing.nearest_intersection);
        formData.append('estimated_price', this.listing.estimated_price);
        formData.append('total_area', this.listing.total_area);
        formData.append('balcony_size', this.listing.balcony_size);
        formData.append('contact_name', this.listing.contact_name);
        formData.append('contact_email', this.listing.contact_email);
        formData.append('contact_phone', this.listing.contact_phone);
        formData.append('construction_status', this.listing.construction_status);
        formData.append('completion_date', this.listing.completion_date);
        formData.append('sales_started', this.listing.sales_started);
        formData.append('ownership', this.listing.ownership);
        formData.append('units_no', this.listing.units_no);
        formData.append('remarks_for_clients', this.listing.remarks_for_clients);
        formData.append('property_type', this.property_type);
        formData.append('floors', this.selectedFloor);
        formData.append('bedrooms', this.selectedBedroom);
        formData.append('washrooms', this.selectedWashroom);
        formData.append('stores', this.selectedStore);
        formData.append('building_image', this.building_image);
        formData.append('video', this.video);
        formData.append('sale_lease', this.sale_lease);
        if (this.images.length > 0) {
            for (var i = 0; i < this.images.length; i++) {
                formData.append("property_images[]", this.images[i]);
            }
        }
        else {
            formData.append("property_images[]", '');
        }
        if (this.old_images.length > 0) {
            for (var i = 0; i < this.old_images.length; i++) {
                formData.append("old_property_images[]", this.old_images[i]);
            }
        }
        else {
            formData.append("old_property_images[]", '');
        }
        formData.append('file', this.file);
        this.topheaderservice.editAgentProperty(formData).subscribe((res) => {
            if (res.code == 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Property',
                    text: "Property Added Successfully!",
                    type: 'success'
                });
                var goUrl = "/agent/listings";
                this.router.navigate([goUrl]);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
};
EditAddListingComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _top_header_service__WEBPACK_IMPORTED_MODULE_4__["TopHeaderService"] }
];
EditAddListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-add-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-add-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/edit-add-listing/edit-add-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-add-listing.component.css */ "./src/app/pages/dashboard/top-header-page/edit-add-listing/edit-add-listing.component.css")).default]
    })
], EditAddListingComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/invitation/invitation.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/invitation/invitation.component.css ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC90b3AtaGVhZGVyLXBhZ2UvaW52aXRhdGlvbi9pbnZpdGF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/invitation/invitation.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/invitation/invitation.component.ts ***!
  \************************************************************************************/
/*! exports provided: InvitationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationComponent", function() { return InvitationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _top_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../top-header.service */ "./src/app/pages/dashboard/top-header-page/top-header.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let InvitationComponent = class InvitationComponent {
    constructor(topheaderservice, formBuilder, router) {
        this.topheaderservice = topheaderservice;
        this.formBuilder = formBuilder;
        this.router = router;
        this.agentRowCount = [];
    }
    ngOnInit() {
        this.inviteForm = this.formBuilder.group({
            users: this.formBuilder.array([this.createUser()])
        });
        this.subscribtiondata();
    }
    subscribtiondata() {
        this.topheaderservice.subscribtionData().subscribe((res) => {
            if (res.code == 200) {
                this.subscribe = res.subscribe;
                // console.log(this.subscribe)
                if (this.subscribe) {
                    if (this.subscribe.subscribed_emails) {
                        this.getSubscriptionUserDetail(this.subscribe.subscribed_emails);
                    }
                    else {
                        for (let i = 1; i < (res.subscribe.subscription_total_members - 1); i++) {
                            this.addUser();
                        }
                    }
                }
                else {
                }
            }
            else {
            }
        });
    }
    createUser() {
        return this.formBuilder.group({
            username: '',
            email: '',
            brokerage_name: ''
        });
    }
    addUser() {
        const control = this.inviteForm.controls['users'];
        control.push(this.createUser());
    }
    addListing() {
        var emails = [];
        for (let i = 0; i < this.inviteForm.controls.users.value.length; i++) {
            emails.push(this.inviteForm.controls.users.value[i].email);
            if (this.inviteForm.controls.users.value[i].brokerage_name == '') {
                document.getElementById("broker" + i).focus();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: "Brokerage Name can't be blank!",
                    type: 'warning'
                });
                return;
            }
            else if (this.inviteForm.controls.users.value[i].username == '') {
                document.getElementById("username" + i).focus();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: "Username can't be blank!",
                    type: 'warning'
                });
                return;
            }
            else if (this.inviteForm.controls.users.value[i].email == '') {
                document.getElementById("email" + i).focus();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: "Email can't be blank!",
                    type: 'warning'
                });
                return;
            }
        }
        let emaiobj = {
            emails: emails
        };
        this.topheaderservice.checkExsitingEmails(emaiobj).subscribe((res) => {
            if (res.code == 200) {
                let obj = {
                    users: this.inviteForm.controls.users.value,
                    subscribe_id: this.subscribe.id,
                    angular_rooturl: location.origin
                };
                this.topheaderservice.addSubscriptionPartner(obj).subscribe((res) => {
                    // console.log(data)
                    if (res.code == 201) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: 'Subscription',
                            text: "Subscribed User Added Successfully!",
                            type: 'success'
                        });
                        var goUrl = "/agent/workspaces/lead/details";
                        this.router.navigate([goUrl]);
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                            title: 'Warning',
                            text: res.errors,
                            type: 'error'
                        });
                    }
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'warning'
                });
            }
        });
    }
    getSubscriptionUserDetail(emails) {
        let obj = {
            emails: emails
        };
        this.topheaderservice.subscriptioUsers(obj).subscribe((res) => {
            // console.log(data)
            if (res.code == 200) {
                this.subscribed_users = res.users;
                // console.log(this.subscribed_users)
            }
            else {
            }
        });
    }
};
InvitationComponent.ctorParameters = () => [
    { type: _top_header_service__WEBPACK_IMPORTED_MODULE_3__["TopHeaderService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
InvitationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invitation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invitation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/invitation/invitation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invitation.component.css */ "./src/app/pages/dashboard/top-header-page/invitation/invitation.component.css")).default]
    })
], InvitationComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/link-multiple-listing/link-multiple-listing.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/link-multiple-listing/link-multiple-listing.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  \n /*************************************************************************************/\n.search-results{\n    min-height: 70vh;\n    max-height: 70vh;\n    overflow-y: auto;\n}\n.properties{\n    margin-top: 5%;\n}\n/* .navbar-inverse {\n    background-color: #3578E5; \n    border-color: #3578E5;\n} */\n.sidebar-2{\n    border: 1px solid #d3d3d3;\n    position: fixed;\n    left: 210px;\n    width: 292px;\n    padding: 10px;\n    background-color: #fff;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    border: 1px solid #d3d3d3;\n}\n.head{\n    padding: 0px 10px 5px;\n}\n.head img{\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n}\n.head h5{\n    margin-bottom: 5px;\n    margin-top: 10px;\n    font-weight: 700;\n    color: #6564c1;\n    font-size: 15px;\n}\n.head p{\n    margin-bottom: 0px;\n}\n.head i{\n    margin-top: 20px;\n}\n.criteria-perpose, .criteria-method{\n    margin-top: 0px;\n    padding-left: 15px;\n    padding-bottom: 10px;\n    margin-left: -11px;\n    margin-right: -10px;\n    border-top: 1px solid #d3d3d3;\n}\n.criteria-method{\n    border-bottom: 1px solid #d3d3d3;\n    padding: 8px 0px 8px 15px;\n}\n.criteria-perpose h3{\n    font-size: 16px;\n    font-weight: 500;\n    margin-top: 5px;\n}\n.msg{\n    padding: 5px 8px;\n}\n.msg span{\n    color: #333;\n    font-family: Arial,sans-serif;\n    font-size: 15px;\n    margin-left: 1rem;\n}\n.msg input[type= radio]{\n    display: none;\n}\ninput[type=radio]+ label {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: -7px 4px 0 -10px;\n    vertical-align: middle;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #808080;\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,.33);\n    background-repeat: no-repeat;\n    background-position: center;\n    text-align: center;\n    line-height: 44px;\n}\ninput[type=radio]:checked + label{\n    display: inline-block;\n    background: url('check-icn.svg');\n    width: 30px;\n    height: 30px;\n    margin: -7px 4px 0 -10px;\n    vertical-align: middle;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #808080;\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,.33);\n    background-repeat: no-repeat;\n    background-position: center;\n    text-align: center;\n    line-height: 44px;\n}\nspan\n    {\n        font-size: 14px;\n        color: #5c6d7a;\n    }\ninput[type=radio],input[type=checkbox]\n     {\n            display:none;\n    }\n.msg\n    {\n        font-size: 20px;\n        \n    }\nlabel{\n            margin-bottom: -8px !important;\n    }\n.select-area{\n        padding: 10px;\n    }\n.multiselect-dropdown{\n        margin-bottom: 6px !important;\n    }\n.multiselect-dropdown .dropdown-btn{\n        display: inline-block;\n        border: 1px solid #adadad;\n        width: 100%;\n        padding: 6px 12px;\n        margin-bottom: 8px;\n        font-weight: 400;\n        line-height: 1.52857143;\n        text-align: left;\n        vertical-align: middle;\n        cursor: pointer;\n        background-image: none;\n        border-radius: 4px;\n      }\n.form-control{\n          margin-bottom: 10px;\n      }\n.feeds{\n        border: 1px solid #d3d3d3;\n        padding: 8px;\n        margin-left: 35px;\n        margin-bottom: 2%;\n        border-radius: 5px;\n    }\n.feeds .profile-details{\n        padding: 3px;\n    }\n.feeds .profile-details p{\n        margin-bottom: -2px;\n        font-weight: 700;\n        color: #6564c1;\n        font-size: 15px;\n    }\n.feeds .profile-details span{\n        color: #bebbb9;\n    }\n.post{\n        padding: 20px;\n    }\n.description{\n        padding: 10px 0px;\n    }\n.description p{\n        font-size: 16px;\n        font-weight: 600;\n    }\n.description p img{\n        width: 20px;\n        top: 0px;\n        float: right;\n        clear: both;\n    }\n.post .image img{\n        width: 100%;\n        height: 400px;\n    }\n.post .afterText{\n        padding-top: 20px;\n    }\n.postChat{\n        width: 100%;\n        height: 300px;\n        border-top: 1px solid #d3d3d3;\n        padding-top: 5px;\n    }\n.postChat .person1{\n        width: auto;\n        max-width: 80%;\n        background-color: #1877F2;\n        color: #fff;\n        float: right;\n        clear: both;\n        text-align: right;\n        padding: 10px;\n        margin: 20px 10px;\n        border-radius: 20px 0px 20px 20px;\n    }\n.postChat .person2{\n        width: auto;\n        max-width: 80%;\n        background-color: #F2F3F5;\n        color: #444950;;\n        float: left;\n        clear: both;\n        padding: 10px;\n        margin: 20px 10px 20px 70px;\n        border-radius: 0px 20px 20px 20px;\n    }\n.postChat .person2 img{\n        margin-left: -70px;\n        margin-top: -10px;\n        width: 45px;\n        height: 45px;\n    }\n.postChat .person2 .text {\n        margin-top: -35px;\n    }\n.chat-box{\n        width: 100%;\n        height: 50px;\n        background-color: rgb(241, 239, 239);\n        border: 1px solid #444950;\n        border-radius: 25px;\n        border: none;\n        padding: 15px 20px;\n        font-size: 18px;\n        color: #444950;\n    }\n.send-message{\n        width: 60%;\n    }\n.btn-circle.btn-xl {\n        width: 70px;\n        height: 70px;\n        padding: 10px 16px;\n        border-radius: 35px;\n        font-size: 24px;\n        line-height: 1.33;\n    }\n.btn-circle {\n        width: 50px;\n        height: 50px;\n        padding: auto;\n        border-radius: 50px;\n        text-align: center;\n        font-size: 12px;\n        line-height: 1.42857;\n    }\n.msg-container{\n        padding-right: 0px;\n    }\n.no-adds{\n        margin-left: auto;\n        margin-right: auto;\n        text-align: center;\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RvcC1oZWFkZXItcGFnZS9saW5rLW11bHRpcGxlLWxpc3RpbmcvbGluay1tdWx0aXBsZS1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Q0FFQyxzRkFBc0Y7QUFDdkY7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNDO0lBQ0csY0FBYztBQUNsQjtBQUVBOzs7R0FHRztBQUNIO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLGdDQUFnQztJQUNoQyx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsdUNBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNDO0lBQ0cscUJBQXFCO0lBQ3JCLGdDQUE2RDtJQUM3RCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsdUNBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBOztRQUVRLGVBQWU7UUFDZixjQUFjO0lBQ2xCO0FBQ0E7O1lBRVEsWUFBWTtJQUNwQjtBQUVBOztRQUVJLGVBQWU7O0lBRW5CO0FBQ0E7WUFDUSw4QkFBOEI7SUFDdEM7QUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDQTtRQUNJLDZCQUE2QjtJQUNqQztBQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixrQkFBa0I7TUFDcEI7QUFDQTtVQUNJLG1CQUFtQjtNQUN2QjtBQUVGO1FBQ0kseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0QjtBQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsZUFBZTtJQUNuQjtBQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNBO1FBQ0ksYUFBYTtJQUNqQjtBQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsUUFBUTtRQUNSLFlBQVk7UUFDWixXQUFXO0lBQ2Y7QUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCO0FBQ0E7UUFDSSxpQkFBaUI7SUFDckI7QUFDQTtRQUNJLFdBQVc7UUFDWCxhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLGdCQUFnQjtJQUNwQjtBQUNBO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsV0FBVztRQUNYLFlBQVk7UUFDWixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsaUNBQWlDO0lBQ3JDO0FBRUE7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsV0FBVztRQUNYLFdBQVc7UUFDWCxhQUFhO1FBQ2IsMkJBQTJCO1FBQzNCLGlDQUFpQztJQUNyQztBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjtBQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9DQUFvQztRQUNwQyx5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWM7SUFDbEI7QUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7QUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLG9CQUFvQjtJQUN4QjtBQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtJQUN0QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC90b3AtaGVhZGVyLXBhZ2UvbGluay1tdWx0aXBsZS1saXN0aW5nL2xpbmstbXVsdGlwbGUtbGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIFxuIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLnNlYXJjaC1yZXN1bHRze1xuICAgIG1pbi1oZWlnaHQ6IDcwdmg7XG4gICAgbWF4LWhlaWdodDogNzB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xufVxuIC5wcm9wZXJ0aWVze1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuXG4vKiAubmF2YmFyLWludmVyc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTc4RTU7IFxuICAgIGJvcmRlci1jb2xvcjogIzM1NzhFNTtcbn0gKi9cbi5zaWRlYmFyLTJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMjEwcHg7XG4gICAgd2lkdGg6IDI5MnB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xufVxuLmhlYWR7XG4gICAgcGFkZGluZzogMHB4IDEwcHggNXB4O1xufVxuLmhlYWQgaW1ne1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaGVhZCBoNXtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjNjU2NGMxO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5oZWFkIHB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmhlYWQgaXtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNyaXRlcmlhLXBlcnBvc2UsIC5jcml0ZXJpYS1tZXRob2R7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTExcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZDNkMztcbn1cbi5jcml0ZXJpYS1tZXRob2R7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XG4gICAgcGFkZGluZzogOHB4IDBweCA4cHggMTVweDtcbn1cbi5jcml0ZXJpYS1wZXJwb3NlIGgze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5tc2d7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbn1cbi5tc2cgc3BhbntcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LWZhbWlseTogQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5tc2cgaW5wdXRbdHlwZT0gcmFkaW9de1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5pbnB1dFt0eXBlPXJhZGlvXSsgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiAtN3B4IDRweCAwIC0xMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjMzKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG4gaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVse1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lL2NoZWNrLWljbi5zdmcpO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IC03cHggNHB4IDAgLTEwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMzMpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbn1cbnNwYW5cbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM1YzZkN2E7XG4gICAgfVxuICAgIGlucHV0W3R5cGU9cmFkaW9dLGlucHV0W3R5cGU9Y2hlY2tib3hdXG4gICAgIHtcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAubXNnXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIFxuICAgIH1cbiAgICBsYWJlbHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNlbGVjdC1hcmVhe1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAubXVsdGlzZWxlY3QtZHJvcGRvd257XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0bntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWRhZGFkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTI4NTcxNDM7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgICAgLmZvcm0tY29udHJvbHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgLmZlZWRze1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIH1cbiAgICAuZmVlZHMgLnByb2ZpbGUtZGV0YWlsc3tcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgIH1cbiAgICAuZmVlZHMgLnByb2ZpbGUtZGV0YWlscyBwe1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzY1NjRjMTtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbiAgICAuZmVlZHMgLnByb2ZpbGUtZGV0YWlscyBzcGFue1xuICAgICAgICBjb2xvcjogI2JlYmJiOTtcbiAgICB9XG4gICAgLnBvc3R7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbntcbiAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiBwe1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbiBwIGltZ3tcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbiAgICAucG9zdCAuaW1hZ2UgaW1ne1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICB9XG4gICAgLnBvc3QgLmFmdGVyVGV4dHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxuICAgIC5wb3N0Q2hhdHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMzAwcHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgIH1cbiAgICAucG9zdENoYXQgLnBlcnNvbjF7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzdGMjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMjBweCAyMHB4O1xuICAgIH1cblxuICAgIC5wb3N0Q2hhdCAucGVyc29uMntcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogODAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGM0Y1O1xuICAgICAgICBjb2xvcjogIzQ0NDk1MDs7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHggMjBweCA3MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMjBweCAyMHB4IDIwcHg7XG4gICAgfVxuICAgIC5wb3N0Q2hhdCAucGVyc29uMiBpbWd7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgfVxuICAgIC5wb3N0Q2hhdCAucGVyc29uMiAudGV4dCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zNXB4O1xuICAgIH1cbiAgICAuY2hhdC1ib3h7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIzOSwgMjM5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDk1MDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICM0NDQ5NTA7XG4gICAgfVxuICAgIC5zZW5kLW1lc3NhZ2V7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICAgIC5idG4tY2lyY2xlLmJ0bi14bCB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zMztcbiAgICB9XG4gICAgXG4gICAgLmJ0bi1jaXJjbGUge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBwYWRkaW5nOiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XG4gICAgfVxuICAgIC5tc2ctY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgfVxuXG4gICAgLm5vLWFkZHN7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/link-multiple-listing/link-multiple-listing.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/link-multiple-listing/link-multiple-listing.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: LinkMultipleListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkMultipleListingComponent", function() { return LinkMultipleListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _top_header_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../top-header.service */ "./src/app/pages/dashboard/top-header-page/top-header.service.ts");
/* harmony import */ var ts_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-clipboard */ "./node_modules/ts-clipboard/ts-clipboard.js");
/* harmony import */ var ts_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_clipboard__WEBPACK_IMPORTED_MODULE_4__);





let LinkMultipleListingComponent = class LinkMultipleListingComponent {
    constructor(topheaderservice) {
        this.topheaderservice = topheaderservice;
        this.property_types = [];
        this.municipalities = [];
        this.selected_area = [];
        this.municipality = [];
        this.category = [];
        this.adds = [];
        this.areas = [];
        this.bedrooms = ["Any", "1", "1+", "2", "2+", "3", "3+", "4", "4+", "5", "5+"];
        this.dens = ["0", "1"];
        this.dropdownSettings = {};
    }
    ngOnInit() {
        this.lower_selected_size = "0";
        this.page = 1;
        this.getAdds(1, 50);
        this.dropdownSettings = {
            singleSelection: false,
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 4,
            allowSearchFilter: true
        };
    }
    getAdds(page, per_page) {
        let obj = {
            page: page,
            per_page: per_page
        };
        this.topheaderservice.advertiseList(obj).subscribe((res) => {
            if (res.code == 200) {
                for (let obj of res.adds) {
                    this.adds.push(obj);
                }
                this.page = res.page;
                this.pages = res.total_pages;
            }
        });
    }
    onChangePropertyFor(property_for) {
        this.property_for = property_for;
        this.municipality = [];
        this.selected_area = [];
        this.selected_bedroom = '';
        this.category = [];
        if (this.property_for == 'SALE') {
            this.show_sale_price = true;
            this.show_lease_price = false;
            this.selected_lower_price = 0;
            this.selected_upper_price = 10000000;
        }
        else {
            this.selected_lower_price = 0;
            this.selected_upper_price = 100000;
            this.show_sale_price = false;
            this.show_lease_price = true;
        }
        $("#color-1").attr("checked", false);
        $("#color-2").attr("checked", false);
        $("#color-3").attr("checked", false);
        $("#inside-panel").slideDown("slow");
        this.getMunicipality();
        this.getPropertyList();
    }
    SelectPropertyType(e, property_type) {
        this.property_type = e ? e.target.value : property_type;
        if (this.property_type == 'RESIDENTIAL') {
            this.lower_selected_size = "";
            this.upper_selected_size = "";
            this.show_size = false;
            this.show_bedrooms = true;
            this.show_dens = false;
        }
        else if (this.property_type == 'CONDO') {
            this.lower_selected_size = "";
            this.upper_selected_size = "";
            this.show_size = false;
            this.show_bedrooms = true;
            this.show_dens = true;
        }
        else if (this.property_type == 'COMMERCIAL') {
            this.lower_selected_size = "0";
            // this.upper_selected_size = "100000"
            this.selected_bedroom = "";
            this.show_size = true;
            this.show_bedrooms = false;
            this.show_dens = false;
        }
        this.getMunicipality();
        this.getPropertyList();
    }
    // onChangeCategory(e){
    //   this.category = e.target.value
    // }
    getMunicipality() {
        let obj = {
            search: this.selected_area,
            property_for: this.property_for,
            property_type: this.property_type
        };
        this.topheaderservice.allMunicipalty(obj).subscribe((res) => {
            this.municipalities = res.municipalities;
        });
    }
    getPropertyList() {
        let obj = {
            property_key: this.property_type
        };
        this.topheaderservice.property_TypeList(obj).subscribe((res) => {
            this.property_types = res.propertytypes;
            this.upper_selected_size = res.upper_size_limit;
            this.areas = res.areas;
        });
    }
    onAreaSelect(item) {
        this.getMunicipality();
    }
    onSelectAllArea(areaitems) {
        this.getMunicipality();
    }
    onAreaDeSelect(item) {
        this.getMunicipality();
    }
    onAreaDeSelectAll(areaitems) {
        this.getMunicipality();
    }
    onItemSelect(item) { }
    onSelectAllItem(items) { }
    onItemDeSelect(item) { }
    onItemDeSelectAll(items) { }
    // onMunicipalitySelect(item:any){
    //   this.municipality
    // }
    // onChangeMunicipality($event){
    //   this.municipality = $event.target.value
    // }
    onChangeLowerPrice($event) {
        this.selected_lower_price = $event.target.value;
    }
    onChangeUpperPrice($event) {
        this.selected_upper_price = $event.target.value;
    }
    onChangeBedroom($event) {
        this.selected_bedroom = $event.target.value;
    }
    onChangeDen($event) {
        this.selected_den = $event.target.value;
    }
    onChangeLowerSize($event) {
        this.lower_selected_size = $event.target.value;
    }
    onChangeUpperSize($event) {
        this.upper_selected_size = $event.target.value;
    }
    generateAdvertisement() {
        let obj = {
            property_for: this.property_for,
            property_type: this.property_type,
            area: this.selected_area,
            municipality: this.municipality,
            lower_price: this.selected_lower_price,
            upper_price: this.selected_upper_price,
            category: this.category,
            lower_size: this.lower_selected_size,
            upper_size: this.upper_selected_size,
            bedrooms: this.selected_bedroom,
            dens: this.selected_den
        };
        this.topheaderservice.createAdvertise(obj).subscribe((res) => {
            if (res.code == 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Advertise',
                    text: "Advertisement Link Generated Successfully!",
                    type: 'success'
                });
                // this.adds.push(data.add)
                this.adds.unshift(res.add);
                $("#inside-panel").slideUp("slow");
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Advertise',
                    text: res.error,
                    type: 'error'
                });
            }
        });
    }
    addLink(add_id) {
        // var encryptedId = this.jendec.jencrypt(String(add_id))
        this.goUrl = location.origin + "/properties/" + add_id;
        ts_clipboard__WEBPACK_IMPORTED_MODULE_4__["Clipboard"].copy(this.goUrl);
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Link Copied',
            text: "Link has been copied to your Clipbord",
            type: 'info'
        });
    }
    onScroll() {
        if (this.page < this.pages) {
            this.page = this.page + 1;
            this.getAdds(this.page, 50);
        }
    }
};
LinkMultipleListingComponent.ctorParameters = () => [
    { type: _top_header_service__WEBPACK_IMPORTED_MODULE_3__["TopHeaderService"] }
];
LinkMultipleListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-link-multiple-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./link-multiple-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/link-multiple-listing/link-multiple-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./link-multiple-listing.component.css */ "./src/app/pages/dashboard/top-header-page/link-multiple-listing/link-multiple-listing.component.css")).default]
    })
], LinkMultipleListingComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/main-dashboard/main-dashboard.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/main-dashboard/main-dashboard.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".activetatab{\n    color:black;\n    font-weight: bold;\n  }\na {\n  cursor: pointer;\n}\n@media(min-width:1200px){\n    div.scrollmenu {\n      background-color: #fff;\n      overflow-x: hidden;\n      white-space: nowrap;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RvcC1oZWFkZXItcGFnZS9tYWluLWRhc2hib2FyZC9tYWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtFQUNuQjtBQUNGO0VBQ0UsZUFBZTtBQUNqQjtBQUVFO0lBQ0U7TUFDRSxzQkFBc0I7TUFDdEIsa0JBQWtCO01BQ2xCLG1CQUFtQjtJQUNyQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RvcC1oZWFkZXItcGFnZS9tYWluLWRhc2hib2FyZC9tYWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZXRhdGFie1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5hIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuICBcbiAgQG1lZGlhKG1pbi13aWR0aDoxMjAwcHgpe1xuICAgIGRpdi5zY3JvbGxtZW51IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/main-dashboard/main-dashboard.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/main-dashboard/main-dashboard.component.ts ***!
  \********************************************************************************************/
/*! exports provided: MainDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainDashboardComponent", function() { return MainDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _work_space_dashboard_workspace_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../work-space-dashboard/workspace.service */ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts");
/* harmony import */ var _top_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../top-header.service */ "./src/app/pages/dashboard/top-header-page/top-header.service.ts");
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");






let MainDashboardComponent = class MainDashboardComponent {
    constructor(router, workspaceservice, topheaderservice, localStorage) {
        this.router = router;
        this.workspaceservice = workspaceservice;
        this.topheaderservice = topheaderservice;
        this.localStorage = localStorage;
        this.notiCount = 0;
    }
    ngOnInit() {
        this.changePage();
        this.sessionProfileDetail();
    }
    changePage() {
        var root = location.href.split("/")[location.href.split("/").length - 1];
        var root_url = root.split('?');
        switch (root_url[0]) {
            case "client": {
                this.router.navigate(["/agent/dashboard/client"]);
                break;
            }
            case "listing": {
                this.router.navigate(["/agent/dashboard/listing"]);
                break;
            }
            case "advertise": {
                this.router.navigate(["/agent/dashboard/advertise"]);
                break;
            }
            case "invitation": {
                this.router.navigate(["/agent/dashboard/invitation"]);
                break;
            }
            case "multiple": {
                this.router.navigate(["/agent/dashboard/multiple"]);
                break;
            }
            case "profile": {
                this.router.navigate(["/agent/dashboard/profile"]);
                break;
            }
            case "settings": {
                this.router.navigate(["/agent/dashboard/settings"]);
                break;
            }
            case "listings": {
                this.router.navigate(["/agent/dashboard/listings"]);
                break;
            }
            default: {
                this.router.navigate(["/agent/dashboard/lead"]);
                break;
            }
        }
    }
    checkActiveTab(value) {
        this.activeTab = value;
    }
    logout() {
        this.localStorage.clear();
        this.router.navigate(['/login']);
    }
    sessionProfileDetail() {
        this.topheaderservice.profileDetail().subscribe((res) => {
            if (res.code == 200) {
                console.log(res);
                this.brokerage_name = res.user.brokerage_name;
                this.firm_title = res.user.firm_title;
                this.fname = res.user.fname;
                this.lname = res.user.lname;
                this.contact = res.user.contact;
                this.is_subscribed = res.user.is_subscribed;
                this.image = res.user.image;
                this.firm_logo = res.user.firm_logo;
            }
        });
    }
};
MainDashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _work_space_dashboard_workspace_service__WEBPACK_IMPORTED_MODULE_3__["WorkspaceService"] },
    { type: _top_header_service__WEBPACK_IMPORTED_MODULE_4__["TopHeaderService"] },
    { type: src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] }
];
MainDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/main-dashboard/main-dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-dashboard.component.css */ "./src/app/pages/dashboard/top-header-page/main-dashboard/main-dashboard.component.css")).default]
    })
], MainDashboardComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/profile/profile.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/profile/profile.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body{\n\tmargin:0px;\n\tpadding:0px;\n\toverflow-x: hidden;\n}\nbody h1,h2,h3,h4,p,a,li,span,input{\n\tfont-family: 'Open Sans', sans-serif;\n}\n.user-profile{\n\t/* margin-top: 22%; */\n\tpadding-right: 20px;\n\ttext-align: center;\n}\n.user-profile img{\n\twidth: 150px;\n\theight: 140px;\n\n}\n.user-profile h2{\n\tcolor: black;\n\tfont-size: 22px;\n\tfont-weight: 600;\n\tmargin-top: 15px;\n\ttext-transform: uppercase;\n}\n.user-profile p{\n\tcolor: grey;\n\tfont-size: 16px;\n\tfont-weight: 550;\n\tline-height: 18px;\n\tmargin-top: -10px;\n}\n.user-profile input{\n\tdisplay: none;\n}\n.user-profile button{\n\tcolor: white;\n\tborder:none;\n\tborder-radius: 8px;\n\tfont-size: 16px;\n\ttext-transform: uppercase;\n\tbackground: #0080FF;\n\tpadding: 10px 20px 10px 20px;\n}\n.firm-logo{\n\t/* margin-top: 5%; */\n\tpadding-right: 20px;\n\ttext-align:center;\n}\n@media only screen and (max-width: 768px) {\n\t.firm-logo{\n\t\tmargin-top: 10%;\n\t\tpadding-right: 20px;\n\t}\n}\n.firm-logo img{\n\twidth: 150px;\n\theight: 140px;\n\n}\n.firm-logo h2{\n\tcolor: black;\n\tfont-size: 22px;\n\tfont-weight: 600;\n\tmargin-top: 15px;\n\ttext-transform: uppercase;\n}\n.firm-logo p{\n\tcolor: grey;\n\tfont-size: 16px;\n\tfont-weight: 550;\n\tline-height: 18px;\n\tmargin-top: -10px;\n}\n.firm-logo input{\n\tdisplay: none;\n}\n.firm-logo button{\n\tcolor: white;\n\tborder:none;\n\tborder-radius: 8px;\n\tfont-size: 16px;\n\ttext-transform: uppercase;\n\tbackground: #0080FF;\n\tpadding: 10px 20px 10px 20px;\n}\n.user-detail{\n\tpadding: 0px 50px;\n\tborder-left: 1px solid lightgrey;\n\theight: 380px;\n}\n.user-detail label{\n\tdisplay: block;\n\tcolor: black;\n\tfont-weight: 550;\n\tfont-size: 16px;\n}\n.user-detail input{\n\tborder: 1px solid lightgrey;\n\tpadding: 6px;\n\tcolor: grey;\n\tborder-radius: 5px;\n\n}\n@media screen and (max-width: 512px){\n\t.user-profile{\n\t\tmargin-top: 2%;\n\t}\n\t.firm-logo{\n\t\tmargin-top: 5%;\n\t}\n\t.user-detail{\n\t\tpadding: 10px;\n\t\tborder-left:none;\n\t\tpadding-top:14%;\n\t}\n\t.user-detail[_ngcontent-c2] label[_ngcontent-c2] {\n\t\tdisplay: block;\n\t\tcolor: black;\n\t\tfont-weight: 550;\n\t\tfont-size: 16px;\n\t\tmargin-top: 10px;\n\t}\n\t.user-profile[_ngcontent-c2] button[_ngcontent-c2] {\n\t\n\t\tpadding: 10px 15px 10px 15px;\n\t}\n}\n@media(min-width:512px) and (max-width:769px){\n\tlabel.pro2{\n\t\theight: 60px !important;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RvcC1oZWFkZXItcGFnZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxvQ0FBb0M7QUFDckM7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osYUFBYTs7QUFFZDtBQUNBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsZ0JBQWdCO0NBQ2hCLHlCQUF5QjtBQUMxQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osV0FBVztDQUNYLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQiw0QkFBNEI7QUFDN0I7QUFFQTtDQUNDLG9CQUFvQjtDQUNwQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0FBQ2xCO0FBRUE7Q0FDQztFQUNDLGVBQWU7RUFDZixtQkFBbUI7Q0FDcEI7QUFDRDtBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7O0FBRWQ7QUFDQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQix5QkFBeUI7QUFDMUI7QUFDQTtDQUNDLFdBQVc7Q0FDWCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixpQkFBaUI7QUFDbEI7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLHlCQUF5QjtDQUN6QixtQkFBbUI7Q0FDbkIsNEJBQTRCO0FBQzdCO0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsZ0NBQWdDO0NBQ2hDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsY0FBYztDQUNkLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsMkJBQTJCO0NBQzNCLFlBQVk7Q0FDWixXQUFXO0NBQ1gsa0JBQWtCOztBQUVuQjtBQUNBO0NBQ0M7RUFDQyxjQUFjO0NBQ2Y7Q0FDQTtFQUNDLGNBQWM7Q0FDZjtDQUNBO0VBQ0MsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixlQUFlO0NBQ2hCO0NBQ0E7RUFDQyxjQUFjO0VBQ2QsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZ0JBQWdCO0NBQ2pCO0NBQ0E7O0VBRUMsNEJBQTRCO0NBQzdCO0FBQ0Q7QUFDQTtDQUNDO0VBQ0MsdUJBQXVCO0NBQ3hCO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvdG9wLWhlYWRlci1wYWdlL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keXtcblx0bWFyZ2luOjBweDtcblx0cGFkZGluZzowcHg7XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cbmJvZHkgaDEsaDIsaDMsaDQscCxhLGxpLHNwYW4saW5wdXR7XG5cdGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbn1cbi51c2VyLXByb2ZpbGV7XG5cdC8qIG1hcmdpbi10b3A6IDIyJTsgKi9cblx0cGFkZGluZy1yaWdodDogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItcHJvZmlsZSBpbWd7XG5cdHdpZHRoOiAxNTBweDtcblx0aGVpZ2h0OiAxNDBweDtcblxufVxuLnVzZXItcHJvZmlsZSBoMntcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDIycHg7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdG1hcmdpbi10b3A6IDE1cHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4udXNlci1wcm9maWxlIHB7XG5cdGNvbG9yOiBncmV5O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1NTA7XG5cdGxpbmUtaGVpZ2h0OiAxOHB4O1xuXHRtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi51c2VyLXByb2ZpbGUgaW5wdXR7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG4udXNlci1wcm9maWxlIGJ1dHRvbntcblx0Y29sb3I6IHdoaXRlO1xuXHRib3JkZXI6bm9uZTtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGJhY2tncm91bmQ6ICMwMDgwRkY7XG5cdHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XG59XG5cbi5maXJtLWxvZ297XG5cdC8qIG1hcmdpbi10b3A6IDUlOyAqL1xuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHR0ZXh0LWFsaWduOmNlbnRlcjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuZmlybS1sb2dve1xuXHRcdG1hcmdpbi10b3A6IDEwJTtcblx0XHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHR9XG59XG5cbi5maXJtLWxvZ28gaW1ne1xuXHR3aWR0aDogMTUwcHg7XG5cdGhlaWdodDogMTQwcHg7XG5cbn1cbi5maXJtLWxvZ28gaDJ7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiAyMnB4O1xuXHRmb250LXdlaWdodDogNjAwO1xuXHRtYXJnaW4tdG9wOiAxNXB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZpcm0tbG9nbyBwe1xuXHRjb2xvcjogZ3JleTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRmb250LXdlaWdodDogNTUwO1xuXHRsaW5lLWhlaWdodDogMThweDtcblx0bWFyZ2luLXRvcDogLTEwcHg7XG59XG4uZmlybS1sb2dvIGlucHV0e1xuXHRkaXNwbGF5OiBub25lO1xufVxuLmZpcm0tbG9nbyBidXR0b257XG5cdGNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyOm5vbmU7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRiYWNrZ3JvdW5kOiAjMDA4MEZGO1xuXHRwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xufVxuXG4udXNlci1kZXRhaWx7XG5cdHBhZGRpbmc6IDBweCA1MHB4O1xuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcblx0aGVpZ2h0OiAzODBweDtcbn1cbi51c2VyLWRldGFpbCBsYWJlbHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC13ZWlnaHQ6IDU1MDtcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuLnVzZXItZGV0YWlsIGlucHV0e1xuXHRib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG5cdHBhZGRpbmc6IDZweDtcblx0Y29sb3I6IGdyZXk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTEycHgpe1xuXHQudXNlci1wcm9maWxle1xuXHRcdG1hcmdpbi10b3A6IDIlO1xuXHR9XG5cdC5maXJtLWxvZ297XG5cdFx0bWFyZ2luLXRvcDogNSU7XG5cdH1cblx0LnVzZXItZGV0YWlse1xuXHRcdHBhZGRpbmc6IDEwcHg7XG5cdFx0Ym9yZGVyLWxlZnQ6bm9uZTtcblx0XHRwYWRkaW5nLXRvcDoxNCU7XG5cdH1cblx0LnVzZXItZGV0YWlsW19uZ2NvbnRlbnQtYzJdIGxhYmVsW19uZ2NvbnRlbnQtYzJdIHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRjb2xvcjogYmxhY2s7XG5cdFx0Zm9udC13ZWlnaHQ6IDU1MDtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0bWFyZ2luLXRvcDogMTBweDtcblx0fVxuXHQudXNlci1wcm9maWxlW19uZ2NvbnRlbnQtYzJdIGJ1dHRvbltfbmdjb250ZW50LWMyXSB7XG5cdFxuXHRcdHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDE1cHg7XG5cdH1cbn1cbkBtZWRpYShtaW4td2lkdGg6NTEycHgpIGFuZCAobWF4LXdpZHRoOjc2OXB4KXtcblx0bGFiZWwucHJvMntcblx0XHRoZWlnaHQ6IDYwcHggIWltcG9ydGFudDtcblx0fVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/profile/profile.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/profile/profile.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _top_header_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../top-header.service */ "./src/app/pages/dashboard/top-header-page/top-header.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_pValidators_password_validators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pValidators/password.validators */ "./src/app/pValidators/password.validators.ts");








let ProfileComponent = class ProfileComponent {
    constructor(topheaderservice, commonservice, localStorageService, formBuilder) {
        this.topheaderservice = topheaderservice;
        this.commonservice = commonservice;
        this.localStorageService = localStorageService;
        this.formBuilder = formBuilder;
        this.imageSrc = '';
        this.logoSrc = '';
        this.validatorContainer = { error_status: true, old_pass: { error: true, message: "Required**" }, new_pass: { error: true, message: "Required**" }, conf_pass: { error: true, message: "Password not matched" } };
        this.passUpdatedResponse = { status: 2, message: "Not submited" };
        this.firm_titles = ["Broker of Record", "Broker", "Sales Representative", "Assistant"];
        this.imagebtn = true;
        this.logobtn = true;
    }
    onkeyup() {
        if (this.form.controls.confirm_password.errors) {
            this.validatorContainer.conf_pass.error = !this.form.controls.confirm_password.errors.MutchPassword;
        }
        else {
            this.validatorContainer.conf_pass.error = false;
        }
        if (this.form.controls.new_password.errors) {
            this.validatorContainer.new_pass.error = this.form.controls.new_password.errors.required;
        }
        else {
            this.validatorContainer.new_pass.error = false;
        }
        if (this.form.controls.old_password.errors) {
            this.validatorContainer.old_pass.error = this.form.controls.old_password.errors.required;
        }
        else {
            this.validatorContainer.old_pass.error = false;
        }
        var dd = this.validatorContainer;
        if (dd.conf_pass.error == false && dd.new_pass.error == false && dd.old_pass.error == false) {
            this.validatorContainer.error_status = false;
        }
        else {
            this.validatorContainer.error_status = true;
        }
    }
    ngOnInit() {
        this.showloader = false;
        this.showlogoloader = false;
        // this.btnDisabled = false
        this.user = '';
        this.imageSrc = "";
        this.sessionProfileDetail();
        this.passwordmatch();
        this.formbuild();
        this.localstorage();
    }
    passwordmatch() {
        this.form = this.formBuilder.group({
            old_password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            new_password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            confirm_password: [""]
        }, {
            validator: src_app_pValidators_password_validators__WEBPACK_IMPORTED_MODULE_7__["PasswordValidation"].MatchPassword // your validation method
        });
    }
    formbuild() {
        this.userForm = this.formBuilder.group({
            name: [''],
            lname: [''],
            email: [''],
            contact: [''],
            brokerage_name: [''],
            description: ['']
        });
    }
    selectBorkerageTitle(e) {
        this.firm_title = e.target.value;
    }
    sessionProfileDetail() {
        this.topheaderservice.profileDetail().subscribe((res) => {
            if (res.code == 200) {
                this.userForm = this.formBuilder.group({
                    name: res.user.fname,
                    lname: res.user.lname,
                    email: res.user.email,
                    contact: res.user.contact,
                    brokerage_name: res.user.brokerage_name,
                    description: res.user.description
                });
                this.firm_title = res.user.firm_title;
                this.imageSrc = res.user.image;
                console.log(this.imageSrc);
                this.logoSrc = res.user.firm_logo;
            }
        });
    }
    localstorage() {
        let loclLead = JSON.parse(this.localStorageService.getItem('selectedLead'));
        this.commonservice.changeLeadFlag(loclLead);
        this.get_Leads();
    }
    get_Leads() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            this.leadDetails = res;
            //  this.agent_id=res.agent_id;
        });
    }
    updateProfile() {
        let obj = {
            fname: this.userForm.value.name,
            lname: this.userForm.value.lname,
            email: this.userForm.value.email,
            contact: this.userForm.value.contact,
            description: this.userForm.value.description,
            brokerage_name: this.userForm.value.brokerage_name,
            firm_title: this.firm_title
        };
        this.topheaderservice.editProfile(obj).subscribe((res) => {
            if (res.code == 200) {
                this.user = res.user;
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Profile',
                    text: "Profile Information Updated Successfully!",
                    type: 'success'
                });
                this.userForm.reset();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
    handleUserImageChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLoaded(e) {
        let reader = e.target;
        this.imageSrc = reader.result;
        this.imagebtn = false;
    }
    handleLogoChange(e) {
        var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
        var pattern = /image-*/;
        var reader = new FileReader();
        if (!file.type.match(pattern)) {
            alert('invalid format');
            return;
        }
        reader.onload = this._handleReaderLogoLoaded.bind(this);
        reader.readAsDataURL(file);
    }
    _handleReaderLogoLoaded(e) {
        let reader = e.target;
        this.logoSrc = reader.result;
        this.logobtn = false;
    }
    updateUserImage() {
        this.showloader = (this.imageSrc != this.user.image ? true : false);
        this.showlogoloader = (this.logoSrc != this.user.firm_logo ? true : false);
        let obj = {
            firm_logo: this.logoSrc,
            image: this.imageSrc
        };
        this.topheaderservice.editUserImage(obj).subscribe((res) => {
            if (res.code == 200) {
                this.user = res.user;
                this.showloader = false;
                this.showlogoloader = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Profile',
                    text: "Profile Information Updated Successfully!",
                    type: 'success'
                });
                this.imageSrc = res.user.image;
                this.logoSrc = res.user.firm_logo;
                this.logobtn = true;
                this.imagebtn = true;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
    onSubmit() {
        if (!this.validatorContainer.error_status) {
            var formData = this.form.value;
            let obj = {
                old_password: formData.old_password,
                new_password: formData.new_password
            };
            var response = this.topheaderservice.settingPassword(obj).subscribe((res) => {
                if (res.code == 200) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: 'Password',
                        text: "Password updated successfully!",
                        type: 'success'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                        title: 'Warning',
                        text: res.errors,
                        type: 'error'
                    });
                }
                this.form.reset();
            });
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _top_header_service__WEBPACK_IMPORTED_MODULE_2__["TopHeaderService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/dashboard/top-header-page/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/setting/setting.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/setting/setting.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".data{\n\t/* border-right: 2px solid #dad5d5; */\n\theight: 888px;\n\tpadding: 5px 20px 0px 10px;\n}\n.data h1{\n\tcolor: black;\n\tfont-size: 26px;\n\tfont-weight: 550;\n}\n.data h2{\n\tcolor: black;\n\tfont-size: 18px;\n\topacity: .7;\n\tmargin-top: -5px;\n}\n.data label{\n\tfont-size: 18px;\n\tcolor: grey;\n\tmargin-bottom: 5px;\n\tmargin-top: 20px;\n\tfont-weight: lighter;\n}\n.data input{\n\tdisplay: block;\n\twidth: 95%;\n\tborder:1px solid lightgrey;\n\tpadding: 10px;\n\tcolor: black;\n\tfont-size: 16px;\n\tborder-radius: 5px; \n}\n.data input:focus{\n\toutline: none;\n}\n.data a{\n\tfont-size: 18px;\n\tposition: relative;\n\tmargin-top: 12px;\n\tdisplay: inline-block;\n}\n.data h3{\n\tcolor: black;\n\tfont-size: 20px;\n\topacity: .9;\n\tmargin-top: 30px;\n}\n.data input[type=\"submit\"]{\n\tborder:1px solid red;\n\tpadding: 10px 30px 10px 30px;\n\tcolor: red;\n\tfont-size: 28px;\n\tbackground: transparent;\n}\n.customer{\n\tmin-height: 188px;\n\tpadding: 5px 20px 10px 20px;\n\tborder: 1px solid #dad5d5;\n\tmargin-top:4%;\n}\n.customer h1{\n\tcolor: black;\n\tfont-size: 26px;\n\tfont-weight: 550;\n}\n.customer h2{\n\tcolor: black;\n\tfont-size: 18px;\n\topacity: .7;\n\tmargin-top: -5px;\n}\n.bill{\n\tborder: 1px solid #dad5d5;\n\t/* height: 888px; */\n\tbox-sizing: border-box;\n\tmargin-top:4%;\n\t/* margin-right: 10%; */\n}\n.bill-1{\n\tpadding: 0px 20px;\n\tborder-bottom: 1px solid #dad5d5;\n}\n.bill-1 h1{\n\tfont-size: 26px;\n\tfont-weight: bold;\n\tcolor: black;\n}\n.bill-1 h2{\n\tfont-size: 18px;\n\tcolor: black;\n}\n.bill-1 label{\n\tdisplay: block;\n\tfont-size: 18px;\n\tcolor: black;\n\topacity: .8;\n\tmargin-bottom: 5px;\n\tfont-weight: normal;\n\tmargin-top: 5%;\n}\n.bill-1 input{\n\tpadding: 10px;\n\tcolor: black;\n\tfont-size: 18px;\n\tborder:1px solid grey;\n\tborder-radius: 5px;\n\twidth: 50%;\n}\n.bill-1 input[type=\"submit\"]{\n\twidth: 20%;\n\tcolor: white;\n\tfont-size: 18px;\n\theight: 47px;\n\tbackground: #0b458c;\n}\n.bill-2{\n\tpadding: 0px 20px;\n\tborder-bottom: 1px solid #dad5d5;\n}\n.bill-2 h1{\n\tfont-size: 26px;\n\tfont-weight: bold;\n\tcolor: black;\n}\n.bill-2 h2{\n\tfont-size: 18px;\n\tcolor: black;\n}\n.bill-3{\n\tpadding: 20px;\n\tborder-bottom: 1px solid #dad5d5;\n}\n.bill-3 h1{\n\tfont-size: 26px;\n\tfont-weight: bold;\n\tcolor: black;\n}\n.bill-3 h2{\n\tfont-size: 18px;\n\tcolor: black;\n}\n.card{\n\tborder: 1px solid lightgrey;\n\tpadding: 10px;\n\twidth: 100%;\n\theight: 55px;\n\tmargin-top:3%;\n}\n.new-card{\n\tfont-size: 25px;\n\tfont-weight: bold;\n\tcolor: white;\n\tbackground: #12e094;\n\tborder-radius: 8px;\n\twidth: 100%;\n\theight: 60px;\n\tborder:none;\n\tmargin-top: 10px;\n}\n.left{\n\tcolor:grey;margin-top:5px;\n\ttext-align: left;\n\n}\n.right{\n\tcolor:grey;margin-top:5px;\n\ttext-align: right;\n}\n.remove-card{\n\tfont-size: 28px;cursor: pointer;\n}\n@media screen and (max-width:512px){\n\t.left{\n\t\ttext-align: left;\n\t\n\t}\n\t.right{\n\t\ttext-align: left;\n\t}\n\t.discount{\n\t\tdisplay: block;\n\t}\n\t.remove-card{\n\t\tfont-size: 18px;cursor: pointer;\n\t}\n\t.pad{\n\t\tpadding-right: 2px;\n\t}\n}\n.data[_ngcontent-c2] a[_ngcontent-c2] {\n    font-size: 18px;\n    position: relative;\n    margin-top: 12px;\n    display: inline-block;\n    line-height: 20px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RvcC1oZWFkZXItcGFnZS9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHFDQUFxQztDQUNyQyxhQUFhO0NBQ2IsMEJBQTBCO0FBQzNCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixXQUFXO0NBQ1gsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsb0JBQW9CO0FBQ3JCO0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsVUFBVTtDQUNWLDBCQUEwQjtDQUMxQixhQUFhO0NBQ2IsWUFBWTtDQUNaLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLG9CQUFvQjtDQUNwQiw0QkFBNEI7Q0FDNUIsVUFBVTtDQUNWLGVBQWU7Q0FDZix1QkFBdUI7QUFDeEI7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQiwyQkFBMkI7Q0FDM0IseUJBQXlCO0NBQ3pCLGFBQWE7QUFDZDtBQUVBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0NBQ2YsV0FBVztDQUNYLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLG1CQUFtQjtDQUNuQixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLGdDQUFnQztBQUNqQztBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixZQUFZO0FBQ2I7QUFDQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0FBQ2I7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsWUFBWTtDQUNaLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGNBQWM7QUFDZjtBQUNBO0NBQ0MsYUFBYTtDQUNiLFlBQVk7Q0FDWixlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7QUFDQTtDQUNDLFVBQVU7Q0FDVixZQUFZO0NBQ1osZUFBZTtDQUNmLFlBQVk7Q0FDWixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixnQ0FBZ0M7QUFDakM7QUFFQTtDQUNDLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtBQUNiO0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZ0NBQWdDO0FBQ2pDO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLFlBQVk7QUFDYjtBQUNBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7QUFDYjtBQUNBO0NBQ0MsMkJBQTJCO0NBQzNCLGFBQWE7Q0FDYixXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7QUFDZDtBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsWUFBWTtDQUNaLFdBQVc7Q0FDWCxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFVBQVUsQ0FBQyxjQUFjO0NBQ3pCLGdCQUFnQjs7QUFFakI7QUFDQTtDQUNDLFVBQVUsQ0FBQyxjQUFjO0NBQ3pCLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsZUFBZSxDQUFDLGVBQWU7QUFDaEM7QUFDQTtDQUNDO0VBQ0MsZ0JBQWdCOztDQUVqQjtDQUNBO0VBQ0MsZ0JBQWdCO0NBQ2pCO0NBQ0E7RUFDQyxjQUFjO0NBQ2Y7Q0FDQTtFQUNDLGVBQWUsQ0FBQyxlQUFlO0NBQ2hDO0NBQ0E7RUFDQyxrQkFBa0I7Q0FDbkI7QUFDRDtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC90b3AtaGVhZGVyLXBhZ2Uvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0YXtcblx0LyogYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2RhZDVkNTsgKi9cblx0aGVpZ2h0OiA4ODhweDtcblx0cGFkZGluZzogNXB4IDIwcHggMHB4IDEwcHg7XG59XG4uZGF0YSBoMXtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDI2cHg7XG5cdGZvbnQtd2VpZ2h0OiA1NTA7XG59XG4uZGF0YSBoMntcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdG9wYWNpdHk6IC43O1xuXHRtYXJnaW4tdG9wOiAtNXB4O1xufVxuLmRhdGEgbGFiZWx7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Y29sb3I6IGdyZXk7XG5cdG1hcmdpbi1ib3R0b206IDVweDtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0Zm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4uZGF0YSBpbnB1dHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiA5NSU7XG5cdGJvcmRlcjoxcHggc29saWQgbGlnaHRncmV5O1xuXHRwYWRkaW5nOiAxMHB4O1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0Ym9yZGVyLXJhZGl1czogNXB4OyBcbn1cbi5kYXRhIGlucHV0OmZvY3Vze1xuXHRvdXRsaW5lOiBub25lO1xufVxuLmRhdGEgYXtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG1hcmdpbi10b3A6IDEycHg7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5kYXRhIGgze1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0b3BhY2l0eTogLjk7XG5cdG1hcmdpbi10b3A6IDMwcHg7XG59XG4uZGF0YSBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xuXHRib3JkZXI6MXB4IHNvbGlkIHJlZDtcblx0cGFkZGluZzogMTBweCAzMHB4IDEwcHggMzBweDtcblx0Y29sb3I6IHJlZDtcblx0Zm9udC1zaXplOiAyOHB4O1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cblxuLmN1c3RvbWVye1xuXHRtaW4taGVpZ2h0OiAxODhweDtcblx0cGFkZGluZzogNXB4IDIwcHggMTBweCAyMHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZGFkNWQ1O1xuXHRtYXJnaW4tdG9wOjQlO1xufVxuXG4uY3VzdG9tZXIgaDF7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiAyNnB4O1xuXHRmb250LXdlaWdodDogNTUwO1xufVxuLmN1c3RvbWVyIGgye1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0b3BhY2l0eTogLjc7XG5cdG1hcmdpbi10b3A6IC01cHg7XG59XG5cbi5iaWxse1xuXHRib3JkZXI6IDFweCBzb2xpZCAjZGFkNWQ1O1xuXHQvKiBoZWlnaHQ6IDg4OHB4OyAqL1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRtYXJnaW4tdG9wOjQlO1xuXHQvKiBtYXJnaW4tcmlnaHQ6IDEwJTsgKi9cbn1cbi5iaWxsLTF7XG5cdHBhZGRpbmc6IDBweCAyMHB4O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZDVkNTtcbn1cbi5iaWxsLTEgaDF7XG5cdGZvbnQtc2l6ZTogMjZweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGNvbG9yOiBibGFjaztcbn1cbi5iaWxsLTEgaDJ7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Y29sb3I6IGJsYWNrO1xufVxuLmJpbGwtMSBsYWJlbHtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Y29sb3I6IGJsYWNrO1xuXHRvcGFjaXR5OiAuODtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRtYXJnaW4tdG9wOiA1JTtcbn1cbi5iaWxsLTEgaW5wdXR7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRib3JkZXI6MXB4IHNvbGlkIGdyZXk7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0d2lkdGg6IDUwJTtcbn1cbi5iaWxsLTEgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXXtcblx0d2lkdGg6IDIwJTtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGhlaWdodDogNDdweDtcblx0YmFja2dyb3VuZDogIzBiNDU4Yztcbn1cbi5iaWxsLTJ7XG5cdHBhZGRpbmc6IDBweCAyMHB4O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RhZDVkNTtcbn1cblxuLmJpbGwtMiBoMXtcblx0Zm9udC1zaXplOiAyNnB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y29sb3I6IGJsYWNrO1xufVxuLmJpbGwtMiBoMntcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRjb2xvcjogYmxhY2s7XG59XG5cbi5iaWxsLTN7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGFkNWQ1O1xufVxuXG4uYmlsbC0zIGgxe1xuXHRmb250LXNpemU6IDI2cHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRjb2xvcjogYmxhY2s7XG59XG4uYmlsbC0zIGgye1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGNvbG9yOiBibGFjaztcbn1cbi5jYXJke1xuXHRib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDU1cHg7XG5cdG1hcmdpbi10b3A6MyU7XG59XG4ubmV3LWNhcmR7XG5cdGZvbnQtc2l6ZTogMjVweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZDogIzEyZTA5NDtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiA2MHB4O1xuXHRib3JkZXI6bm9uZTtcblx0bWFyZ2luLXRvcDogMTBweDtcbn1cbi5sZWZ0e1xuXHRjb2xvcjpncmV5O21hcmdpbi10b3A6NXB4O1xuXHR0ZXh0LWFsaWduOiBsZWZ0O1xuXG59XG4ucmlnaHR7XG5cdGNvbG9yOmdyZXk7bWFyZ2luLXRvcDo1cHg7XG5cdHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnJlbW92ZS1jYXJke1xuXHRmb250LXNpemU6IDI4cHg7Y3Vyc29yOiBwb2ludGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MTJweCl7XG5cdC5sZWZ0e1xuXHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cdFxuXHR9XG5cdC5yaWdodHtcblx0XHR0ZXh0LWFsaWduOiBsZWZ0O1xuXHR9XG5cdC5kaXNjb3VudHtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0fVxuXHQucmVtb3ZlLWNhcmR7XG5cdFx0Zm9udC1zaXplOiAxOHB4O2N1cnNvcjogcG9pbnRlcjtcblx0fVxuXHQucGFke1xuXHRcdHBhZGRpbmctcmlnaHQ6IDJweDtcblx0fVxufVxuLmRhdGFbX25nY29udGVudC1jMl0gYVtfbmdjb250ZW50LWMyXSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/setting/setting.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/setting/setting.component.ts ***!
  \******************************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-stripe */ "./node_modules/ngx-stripe/fesm2015/ngx-stripe.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _top_header_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../top-header.service */ "./src/app/pages/dashboard/top-header-page/top-header.service.ts");






let SettingComponent = class SettingComponent {
    constructor(stripeService, topheaderservice) {
        this.stripeService = stripeService;
        this.topheaderservice = topheaderservice;
        this.cardOptions = {
            style: {
                base: {
                    color: '#303238',
                    fontSize: '18px',
                    // lineHeight: '30px',
                    fontFamily: '"Open Sans", sans-serif',
                    fontSmoothing: 'antialiased',
                    '::placeholder': {
                        color: '#CFD7DF',
                    },
                },
                invalid: {
                    color: '#e5424d',
                    ':focus': {
                        color: '#303238',
                    },
                },
            }
        };
        this.elementsOptions = {
            locale: 'en'
        };
        this.cards = [];
    }
    ngOnInit() {
        this.getSubscribtiondDetail();
    }
    getSubscribtiondDetail() {
        this.topheaderservice.subscribtionData().subscribe((res) => {
            if (res.code == 200) {
                this.subscribe = res.subscribe;
                this.subscribebtn = this.subscribe.next_month_subscription;
                this.hst_amount = (this.subscribe.subscription_paid_amount * 13) / 100;
                this.offer_amount = (this.subscribe.subscription_paid_amount * (this.subscribe.promo_percentage)) / 100;
                this.cards = this.subscribe.cards;
            }
        });
    }
    buy() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Please wait...",
            type: 'info',
            html: "<center><img src='../../../assets/img/loading.gif' width='30%'></center>",
            showConfirmButton: false
        });
        this.stripeService.createToken(this.card.getCard(), { name }).subscribe(result => {
            console.log(result);
            if (result.token) {
                let obj = {
                    stripe_token: result.token.id
                };
                this.topheaderservice.addNewCard(obj).subscribe((res) => {
                    console.log(res);
                    if (res.code == 200) {
                        this.cards.push(res.card);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.close();
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                            title: 'Warning',
                            text: res.errors,
                            type: 'error'
                        });
                    }
                });
            }
            else if (result.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Warning',
                    text: result.error.message,
                    type: 'error'
                });
            }
        });
    }
    cancelNextSubscription() {
        let self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "Cancel Your Next Month Subscription!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, cancel Subscription!"
        }).then(function (result) {
            if (result.value) {
                self.removeSubscription();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Cancelled", "Your Subscription is safe.", "error");
            }
        });
    }
    removeSubscription() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Please wait...",
            type: 'info',
            html: "<center><img src='../../../assets/img/loading.gif' width='30%'></center>",
            showConfirmButton: false
        });
        var response = this.topheaderservice.removeNextSubscription().subscribe((res) => {
            if (res.code == 200) {
                this.subscribe = res.subscribe;
                this.subscribebtn = this.subscribe.next_month_subscription;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Warning',
                    text: "Your Subscription is removed",
                    type: 'success'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
    removeSavedCard(card_id) {
        let self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this Subscription!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Cancel it!"
        }).then(function (result) {
            if (result.value) {
                self.removePerform(card_id);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Cancelled", "Your Subscription is safe.", "error");
            }
        });
    }
    removePerform(card_id) {
        let obj = {
            card_id: card_id
        };
        this.topheaderservice.removeCard(obj).subscribe((res) => {
            if (res.code == 200) {
                const index = this.cards.findIndex(item => item.id === card_id);
                this.cards.splice(index, 1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Warning',
                    text: "Card Removed Successfully",
                    type: 'success'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
};
SettingComponent.ctorParameters = () => [
    { type: ngx_stripe__WEBPACK_IMPORTED_MODULE_3__["StripeService"] },
    { type: _top_header_service__WEBPACK_IMPORTED_MODULE_5__["TopHeaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_stripe__WEBPACK_IMPORTED_MODULE_3__["StripeCardComponent"], { static: false })
], SettingComponent.prototype, "card", void 0);
SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/setting/setting.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./setting.component.css */ "./src/app/pages/dashboard/top-header-page/setting/setting.component.css")).default]
    })
], SettingComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/top-header.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/top-header.service.ts ***!
  \***********************************************************************/
/*! exports provided: TopHeaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopHeaderService", function() { return TopHeaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config/backend-url.config */ "./src/app/config/backend-url.config.ts");






let TopHeaderService = class TopHeaderService {
    constructor(apiservice) {
        this.apiservice = apiservice;
    }
    addClient(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].addclient, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    profileDetail() {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].sessiondetailprofile, '').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    editUserImage(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].updateimageurl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    subscribtionData() {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].usersubcription, '').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    addNewCard(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].addcardurl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    removeCard(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].removecardurl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    removeNextSubscription() {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].removesubcriptionurl, '').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    settingPassword(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].resetpassword, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    editProfile(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].updateprofile, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    advertiseList(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].multiplelist, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    allMunicipalty(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].municipalitiesproperty, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    property_TypeList(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].propertytype, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    createAdvertise(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].createmultipleproprties, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    agentProperties(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].agentpropertydetail, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    removeAgentList(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].removeagentlisting, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    addFavProperty(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].removeagentlisting, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    addsList(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].avgentadvertisements, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    deleteAdd(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].agentadddeleteurl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    addNewAdd(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].agentcreateadds, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    checkExsitingEmails(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].checkemail, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    addSubscriptionPartner(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].addsubcription, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    subscriptioUsers(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].usersubcriptions, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    addProperty(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].agentaddproperty, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    agentPropertyDetail(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].agentPropertyDetails, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    editAgentProperty(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].editAgentProperty, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
    addAdvertisementFavProperty(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].addAdvertiseFavProperty, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"];
        }));
    }
};
TopHeaderService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }
];
TopHeaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TopHeaderService);



/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/your-listing/your-listing.component.css":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/your-listing/your-listing.component.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.no-property{\n    height:300px;width:300px;\n    opacity: .7;\n}\n.activeAgentPro{\n    background-color:#eee;\n}\n.label-info{\n\tborder-radius: 0;\n\tcolor: white !important;\n\tfont-size: 16px !important;\n\tpadding: 5px;\n}\n.list-show{\n    display: none;\n}\n@media(max-width: 512px){\n    img.no-property{\n        height:100px;width:100px;\n    }\n    .list-show{\n        display: inline-block;\n    }\n    .list-hide{\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3RvcC1oZWFkZXItcGFnZS95b3VyLWxpc3RpbmcveW91ci1saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZLENBQUMsV0FBVztJQUN4QixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLHVCQUF1QjtDQUN2QiwwQkFBMEI7Q0FDMUIsWUFBWTtBQUNiO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSTtRQUNJLFlBQVksQ0FBQyxXQUFXO0lBQzVCO0lBQ0E7UUFDSSxxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC90b3AtaGVhZGVyLXBhZ2UveW91ci1saXN0aW5nL3lvdXItbGlzdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLm5vLXByb3BlcnR5e1xuICAgIGhlaWdodDozMDBweDt3aWR0aDozMDBweDtcbiAgICBvcGFjaXR5OiAuNztcbn1cbi5hY3RpdmVBZ2VudFByb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG59XG5cbi5sYWJlbC1pbmZve1xuXHRib3JkZXItcmFkaXVzOiAwO1xuXHRjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcblx0Zm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDVweDtcbn1cbi5saXN0LXNob3d7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogNTEycHgpe1xuICAgIGltZy5uby1wcm9wZXJ0eXtcbiAgICAgICAgaGVpZ2h0OjEwMHB4O3dpZHRoOjEwMHB4O1xuICAgIH1cbiAgICAubGlzdC1zaG93e1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIC5saXN0LWhpZGV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/top-header-page/your-listing/your-listing.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/top-header-page/your-listing/your-listing.component.ts ***!
  \****************************************************************************************/
/*! exports provided: YourListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourListingComponent", function() { return YourListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var _top_header_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../top-header.service */ "./src/app/pages/dashboard/top-header-page/top-header.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let YourListingComponent = class YourListingComponent {
    constructor(localStorageService, commonservice, topheaderservice, router) {
        this.localStorageService = localStorageService;
        this.commonservice = commonservice;
        this.topheaderservice = topheaderservice;
        this.router = router;
        this.properties = [];
    }
    ngOnInit() {
        this.localstorage();
    }
    localstorage() {
        let loclLead = JSON.parse(this.localStorageService.getItem('selectedLead'));
        this.commonservice.changeLeadFlag(loclLead);
        this.get_Leads();
    }
    get_Leads() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            this.leadDetails = res;
            this.agent_id = res.agent_id;
            this.agentPropertyDetail();
        });
    }
    agentPropertyDetail() {
        let obj = {
            user_id: this.agent_id
        };
        this.topheaderservice.agentProperties(obj).subscribe((res) => {
            if (res.code == 200) {
                this.properties = res.properties;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
    gotoListing(property_id) {
        this.pId = property_id;
        this.router.navigate(["/agent/view/listing/" + property_id]);
    }
    removeAgentListing(property_id) {
        let self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this Listing!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!"
        }).then(function (result) {
            if (result.value) {
                self.removeListing(property_id);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire("Cancelled", "Your Listing is safe.", "error");
            }
        });
    }
    removeListing(property_id) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: "Please wait..",
            type: 'info',
            html: "<center><img src='../../../assets/img/loading.gif' width='30%'></center>",
            showConfirmButton: false
        });
        let obj = {
            property_id: property_id
        };
        this.topheaderservice.removeAgentList(obj).subscribe((res) => {
            if (res.code == 200) {
                const index = this.properties.findIndex(item => item.id === property_id);
                this.properties.splice(index, 1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Warning',
                    text: "Listing Removed Successfully",
                    type: 'success'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
    editAgentListing(listing_id) {
        this.pId = listing_id;
        this.router.navigate(["/agent/dashboard/edit/Add/listing/" + listing_id]);
    }
    addToFavourite(property_id) {
        let obj = {
            property_id: property_id
        };
        this.topheaderservice.addFavProperty(obj).subscribe((res) => {
            if (res.code == 200) {
                const index = this.properties.findIndex(item => item.id === property_id);
                this.properties[index].is_favourite = res.property.is_favourite;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
    goToAppointment() {
        this.router.navigate(["/agent/dashboard/lead/appointments"]);
    }
};
YourListingComponent.ctorParameters = () => [
    { type: src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _top_header_service__WEBPACK_IMPORTED_MODULE_4__["TopHeaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
YourListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-your-listing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./your-listing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/top-header-page/your-listing/your-listing.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./your-listing.component.css */ "./src/app/pages/dashboard/top-header-page/your-listing/your-listing.component.css")).default]
    })
], YourListingComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/appointments/appointments.component.css":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/appointments/appointments.component.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".appoinment-list\n  {\n  \tpadding: 10px;\n  \t/* height: 500px; */\n  \toverflow-x: hidden;\n  \toverflow-y: hidden;\n  }\n  .appoinment-list h2\n  {\n  \tfont-size: 20px;\n  \tfont-weight: 600;\n  \tcolor: black;\t\n  }\n  .appoinment-list h4{\n  \tfont-size: 16px;\n  \tfont-weight: 550;\n  \tcolor: black;\n  \tmargin-top: -5px;\n  }\n  .appoinment-list p{\n  \tfont-size: 16px;\n  \tfont-weight: 550;\n  \tcolor: grey;\n  \tline-height: 18px;\n  \tmargin-top: -5px;\n  \t\n  }\n  .appoinment-list span{\n  \tcolor: lightgrey;\n  \tfont-size: 25px;\n  \tcursor: pointer;\n  \tdisplay: block;\n  }\n  .appoinment-form2{\n \tpadding:0px 20px;\n \tborder-left: 1px solid lightgrey;\n \theight: 500px;\n \t}\n  .appoinment-form2 h2\n  {\n  \tfont-size: 20px;\n  \tfont-weight: 600;\n  \tcolor: black;\t\n  \t\n  \tbox-sizing: border-box;\n  }\n  .appoinment-form2 p{\n  \tfont-size: 16px;\n  \tfont-weight: 550;\n  \tcolor: grey;\n  \tline-height: 18px;\n  \tmargin-top: -5px;\n  \t\n  }\n  .appoinment-form2 input[type=submit]{\n  \tbackground: #00b8ff;\n  \tcolor: white;\n  }\n  .activeAppoint{\n\tbackground-color:#eee;\n  }\n  @media(max-width: 769px){\n\t.appoinment-form2{\n \tpadding:10px;\n \tborder-left: none;\n \theight: 400px;\n \tpadding-top: 30px;\n \t}\n\t \n  .appoinment-list\n  {\n\tpadding: 10px;  \n\theight:none !important;\n  \toverflow-x: hidden;\n  \toverflow-y: scroll;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL2FwcG9pbnRtZW50cy9hcHBvaW50bWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLGtCQUFrQjtHQUNsQixrQkFBa0I7RUFDbkI7RUFDQTs7R0FFQyxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLFlBQVk7RUFDYjtFQUNBO0dBQ0MsZUFBZTtHQUNmLGdCQUFnQjtHQUNoQixZQUFZO0dBQ1osZ0JBQWdCO0VBQ2pCO0VBQ0Q7R0FDRSxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLFdBQVc7R0FDWCxpQkFBaUI7R0FDakIsZ0JBQWdCOztFQUVqQjtFQUNEO0dBQ0UsZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixlQUFlO0dBQ2YsY0FBYztFQUNmO0VBR0Q7RUFDQyxnQkFBZ0I7RUFDaEIsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYjtFQUVBOztHQUVDLGVBQWU7R0FDZixnQkFBZ0I7R0FDaEIsWUFBWTs7R0FFWixzQkFBc0I7RUFDdkI7RUFDQTtHQUNDLGVBQWU7R0FDZixnQkFBZ0I7R0FDaEIsV0FBVztHQUNYLGlCQUFpQjtHQUNqQixnQkFBZ0I7O0VBRWpCO0VBQ0E7R0FDQyxtQkFBbUI7R0FDbkIsWUFBWTtFQUNiO0VBRUE7Q0FDRCxxQkFBcUI7RUFDcEI7RUFJRjtDQUNDO0VBQ0MsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCOztFQUVBOztDQUVELGFBQWE7Q0FDYixzQkFBc0I7R0FDcEIsa0JBQWtCO0dBQ2xCLGtCQUFrQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL2FwcG9pbnRtZW50cy9hcHBvaW50bWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBvaW5tZW50LWxpc3RcbiAge1xuICBcdHBhZGRpbmc6IDEwcHg7XG4gIFx0LyogaGVpZ2h0OiA1MDBweDsgKi9cbiAgXHRvdmVyZmxvdy14OiBoaWRkZW47XG4gIFx0b3ZlcmZsb3cteTogaGlkZGVuO1xuICB9XG4gIC5hcHBvaW5tZW50LWxpc3QgaDJcbiAge1xuICBcdGZvbnQtc2l6ZTogMjBweDtcbiAgXHRmb250LXdlaWdodDogNjAwO1xuICBcdGNvbG9yOiBibGFjaztcdFxuICB9XG4gIC5hcHBvaW5tZW50LWxpc3QgaDR7XG4gIFx0Zm9udC1zaXplOiAxNnB4O1xuICBcdGZvbnQtd2VpZ2h0OiA1NTA7XG4gIFx0Y29sb3I6IGJsYWNrO1xuICBcdG1hcmdpbi10b3A6IC01cHg7XG4gIH1cbiAuYXBwb2lubWVudC1saXN0IHB7XG4gIFx0Zm9udC1zaXplOiAxNnB4O1xuICBcdGZvbnQtd2VpZ2h0OiA1NTA7XG4gIFx0Y29sb3I6IGdyZXk7XG4gIFx0bGluZS1oZWlnaHQ6IDE4cHg7XG4gIFx0bWFyZ2luLXRvcDogLTVweDtcbiAgXHRcbiAgfVxuIC5hcHBvaW5tZW50LWxpc3Qgc3BhbntcbiAgXHRjb2xvcjogbGlnaHRncmV5O1xuICBcdGZvbnQtc2l6ZTogMjVweDtcbiAgXHRjdXJzb3I6IHBvaW50ZXI7XG4gIFx0ZGlzcGxheTogYmxvY2s7XG4gIH1cblxuXG4gLmFwcG9pbm1lbnQtZm9ybTJ7XG4gXHRwYWRkaW5nOjBweCAyMHB4O1xuIFx0Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gXHRoZWlnaHQ6IDUwMHB4O1xuIFx0fVxuXG4gXHQuYXBwb2lubWVudC1mb3JtMiBoMlxuICB7XG4gIFx0Zm9udC1zaXplOiAyMHB4O1xuICBcdGZvbnQtd2VpZ2h0OiA2MDA7XG4gIFx0Y29sb3I6IGJsYWNrO1x0XG4gIFx0XG4gIFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICAuYXBwb2lubWVudC1mb3JtMiBwe1xuICBcdGZvbnQtc2l6ZTogMTZweDtcbiAgXHRmb250LXdlaWdodDogNTUwO1xuICBcdGNvbG9yOiBncmV5O1xuICBcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBcdG1hcmdpbi10b3A6IC01cHg7XG4gIFx0XG4gIH1cbiAgLmFwcG9pbm1lbnQtZm9ybTIgaW5wdXRbdHlwZT1zdWJtaXRde1xuICBcdGJhY2tncm91bmQ6ICMwMGI4ZmY7XG4gIFx0Y29sb3I6IHdoaXRlO1xuICB9XG5cbiAgLmFjdGl2ZUFwcG9pbnR7XG5cdGJhY2tncm91bmQtY29sb3I6I2VlZTtcbiAgfVxuXG5cblxuQG1lZGlhKG1heC13aWR0aDogNzY5cHgpe1xuXHQuYXBwb2lubWVudC1mb3JtMntcbiBcdHBhZGRpbmc6MTBweDtcbiBcdGJvcmRlci1sZWZ0OiBub25lO1xuIFx0aGVpZ2h0OiA0MDBweDtcbiBcdHBhZGRpbmctdG9wOiAzMHB4O1xuIFx0fVxuXHQgXG4gIC5hcHBvaW5tZW50LWxpc3RcbiAge1xuXHRwYWRkaW5nOiAxMHB4OyAgXG5cdGhlaWdodDpub25lICFpbXBvcnRhbnQ7XG4gIFx0b3ZlcmZsb3cteDogaGlkZGVuO1xuICBcdG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/appointments/appointments.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/appointments/appointments.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AppointmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentsComponent", function() { return AppointmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var _workspace_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workspace.service */ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");







let AppointmentsComponent = class AppointmentsComponent {
    constructor(commonservice, workspacesevice, formBuilder, dateTimeAdapter) {
        this.commonservice = commonservice;
        this.workspacesevice = workspacesevice;
        this.formBuilder = formBuilder;
        this.appointments = [];
        this.accessable = false;
        this.appointment_time = new Date();
    }
    ngOnInit() {
        this.get_Leads();
        this.appoint_description = 'Type Here';
        this.appointment_id = 0;
        this.appointments = [];
        this.formBuild();
    }
    get_Leads() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            if (res.id == null || res.id == undefined) {
                this.accessable = false;
            }
            else {
                this.accessable = true;
                this.leadDetails = res;
                this.lead_id = res.id;
                this.agent_id = res.agent_id;
                this.appoinmentesLeads();
            }
        });
    }
    appoinmentesLeads() {
        let obj = {
            lead_id: this.lead_id,
            page: '1',
            per_page: '10'
        };
        this.workspacesevice.appoinments_Lead(obj).subscribe((res) => {
            console.log(res);
            this.appointments = res.appointments;
            // if( this.appointments.length>=0){
            // }else{
            //   this.appointments=[];
            // }
        });
    }
    formBuild() {
        this.appointmentForm = this.formBuilder.group({
            title: [''],
            appoint_description: [''],
            appointment_date: [''],
            appointment_time: [''],
        });
    }
    // setTime(e){
    //   this.appointment_time = e.value._d
    // }
    addAppointmentRequest() {
        if (this.appointmentForm.value.title == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Document',
                text: "Please Enter Title Your Appointment",
                type: 'warning'
            });
            return;
        }
        else if (this.appointmentForm.value.appoint_description == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Document',
                text: "Please Enter Description about meeting",
                type: 'warning'
            });
            return;
        }
        else if (this.appointmentForm.value.appointment_date == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Document',
                text: "Please Select Date of Appointment",
                type: 'warning'
            });
            return;
        }
        else if (this.appointmentForm.value.appointment_time == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Document',
                text: "Please Select TIme of  Appointment",
                type: 'warning'
            });
            return;
        }
        if (this.appointment_id == 0) {
            console.log(this.appointmentForm.value.appointment_date);
            let obj = {
                lead_id: this.lead_id,
                title: this.appointmentForm.value.title,
                description: this.appointmentForm.value.appoint_description,
                appointment_date: this.appointmentForm.value.appointment_date,
                appointment_time: new Date(this.appointmentForm.value.appointment_time + "UTC")
            };
            this.workspacesevice.addAppointment(obj).subscribe((res) => {
                if (res.code == 200) {
                    this.appointments.push(res.appointment);
                    this.appointmentForm.reset();
                    res.notify_users.forEach(ele => {
                        let fireobj = {
                            lead_id: this.lead_id,
                            notification_type: "Appointment",
                            notification_type_id: res.appointment.id,
                            // sender_user_id: suserId,
                            noti_id: ele.noti_id,
                            receiver_id: ele.user_id
                        };
                        // this.fb.newUserNotification(obj)
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Appointment Added',
                        text: "Appointment Added Successfully!",
                        type: 'success'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Warning',
                        text: res.errors,
                        type: 'error'
                    });
                }
            });
        }
        else {
            this.editAppoint(this.appointment_id);
        }
    }
    updateAppointment(appointment) {
        this.appointmentForm = this.formBuilder.group({
            title: appointment.title,
            appoint_description: appointment.description,
            appointment_date: appointment.appointment_date,
            appointment_time: new Date(appointment.appointment_time)
        });
        this.appointment_id = appointment.id;
        this.previous_appointment_time = appointment.appointment_time;
    }
    removeAppointment(appointment_id) {
        let self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this Appointment!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!"
        }).then(function (result) {
            if (result.value) {
                self.removePerform(appointment_id);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Cancelled", "Your Appointment is safe.", "error");
            }
        });
    }
    removePerform(appointment_id) {
        let obj = {
            lead_id: this.lead_id,
            appointment_id: appointment_id
        };
        this.workspacesevice.removeAppointment(obj).subscribe((res) => {
            if (res.code == 200) {
                const index = this.appointments.findIndex(item => item.id === appointment_id);
                this.appointments.splice(index, 1);
                this.appointmentForm.reset();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: "Appointment Removed Successfully",
                    type: 'success'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
    editAppoint(appointment_id) {
        this.appointment_time = this.appointment_time ? new Date(this.appointment_time + "UTC") : this.previous_appointment_time;
        let obj = {
            lead_id: this.lead_id,
            appointment_id: appointment_id,
            title: this.appointmentForm.value.title,
            description: this.appointmentForm.value.appoint_description,
            appointment_date: this.appointmentForm.value.appointment_date,
            appointment_time: new Date(this.appointment_time + "UTC")
        };
        this.workspacesevice.editAppointment(obj).subscribe((res) => {
            if (res.code == 200) {
                const index = this.appointments.findIndex(item => item.id === this.appointment_id);
                this.appointments[index] = res.appointment;
                this.appointment_id = 0;
                this.appointmentForm.reset();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Appointment',
                    text: "Appointment Informatiom Edit Successfully!",
                    type: 'success'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
    confirmAppointment(appointment_id, action_for) {
        this.performAppointmentAction(appointment_id, action_for);
    }
    performAppointmentAction(appointment_id, action_for) {
        let obj = {
            lead_id: this.lead_id,
            appointment_id: appointment_id,
            key: action_for
        };
        this.workspacesevice.appointmentAction(obj).subscribe((res) => {
            if (res.code == 200) {
                const index = this.appointments.findIndex(item => item.id === appointment_id);
                this.appointments[index] = res.appointment;
                if (action_for == 'accept') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Appointment',
                        text: "Appointment Confirmed",
                        type: 'success'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Appointment',
                        text: "Appointment Cancelled",
                        type: 'success'
                    });
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
};
AppointmentsComponent.ctorParameters = () => [
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _workspace_service__WEBPACK_IMPORTED_MODULE_3__["WorkspaceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: ng_pick_datetime__WEBPACK_IMPORTED_MODULE_6__["DateTimeAdapter"] }
];
AppointmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appointments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./appointments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/appointments/appointments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./appointments.component.css */ "./src/app/pages/dashboard/work-space-dashboard/appointments/appointments.component.css")).default]
    })
], AppointmentsComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/chats/chats.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/chats/chats.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".postChat{\n    width: 100%;\n    min-height: 60vh;\n    max-height: 60vh;\n    overflow-y: auto;\n    border-top: 1px solid #d3d3d3;\n    padding-top: 5px;\n}\n\n.postChat .person1{\n    width: auto;\n    max-width: 80%;\n    background-color: #1877F2;\n    color: #fff;\n    float: right;\n    clear: both;\n    text-align: right;\n    padding: 10px;\n    margin: 20px 35px;\n    border-radius: 20px 20px 0px 20px;\n}\n\n.postChat .person2{\n    width: auto;\n    max-width: 80%;\n    background-color: #F2F3F5;\n    color: #444950;;\n    float: left;\n    clear: both;\n    padding: 10px;\n    margin: 20px 10px 20px 70px;\n    border-radius: 0px 20px 20px 20px;\n}\n\n.postChat .person2 img{\n    margin-left: -70px;\n    margin-top: -10px;\n    width: 45px;\n    height: 45px;\n}\n\n.postChat .person2 .text {\n    margin-top: -35px;\n}\n\n.chat-box{\n    width: 100%;\n    height: 50px;\n    background-color: rgb(241, 239, 239);\n    border: 1px solid #444950;\n    border-radius: 25px;\n    border: none;\n    padding: 15px 20px;\n    font-size: 18px;\n    color: #444950;\n}\n\n.send-message{\n    width: 60%;\n}\n\n.btn-circle.btn-xl {\n    width: 70px;\n    height: 70px;\n    padding: 10px 16px;\n    border-radius: 35px;\n    font-size: 24px;\n    line-height: 1.33;\n}\n\n.btn-circle {\n    width: 50px;\n    height: 50px;\n    padding: auto;\n    border-radius: 50px;\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.42857;\n}\n\n.msg-container{\n    padding-right: 0px;\n}\n\n.message-form{\n    width: 100%;\n}\n\n.chat-container{\n    width: 100%;\n}\n\n.no-chat{\n    display: block; \n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10%;\n    width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL2NoYXRzL2NoYXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsaUNBQWlDO0FBQ3JDOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC93b3JrLXNwYWNlLWRhc2hib2FyZC9jaGF0cy9jaGF0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3RDaGF0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDYwdmg7XG4gICAgbWF4LWhlaWdodDogNjB2aDtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbi5wb3N0Q2hhdCAucGVyc29uMXtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg3N0YyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjbGVhcjogYm90aDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMjBweCAzNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwcHggMjBweDtcbn1cblxuLnBvc3RDaGF0IC5wZXJzb24ye1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1heC13aWR0aDogODAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjU7XG4gICAgY29sb3I6ICM0NDQ5NTA7O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNsZWFyOiBib3RoO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAyMHB4IDEwcHggMjBweCA3MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMjBweDtcbn1cbi5wb3N0Q2hhdCAucGVyc29uMiBpbWd7XG4gICAgbWFyZ2luLWxlZnQ6IC03MHB4O1xuICAgIG1hcmdpbi10b3A6IC0xMHB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbn1cbi5wb3N0Q2hhdCAucGVyc29uMiAudGV4dCB7XG4gICAgbWFyZ2luLXRvcDogLTM1cHg7XG59XG4uY2hhdC1ib3h7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIzOSwgMjM5KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0OTUwO1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICM0NDQ5NTA7XG59XG4uc2VuZC1tZXNzYWdle1xuICAgIHdpZHRoOiA2MCU7XG59XG4uYnRuLWNpcmNsZS5idG4teGwge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuMzM7XG59XG5cbi5idG4tY2lyY2xlIHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcGFkZGluZzogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XG59XG4ubXNnLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5tZXNzYWdlLWZvcm17XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uY2hhdC1jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5uby1jaGF0e1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHdpZHRoOiAzMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/chats/chats.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/chats/chats.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var _core_services_lead_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../core/services/lead-chat.service */ "./src/app/core/services/lead-chat.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


// import { AngularFirestore } from '@angular/fire/firestore';




let ChatsComponent = class ChatsComponent {
    constructor(leadChatService, fb, firebaseDb, commonService) {
        this.leadChatService = leadChatService;
        this.fb = fb;
        this.firebaseDb = firebaseDb;
        this.commonService = commonService;
        this.messagesList = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.getLead();
        this.buildForm();
    }
    getLead() {
        this.commonService.leadFlagData.subscribe((res) => {
            this.lead = res;
            this.leadMessages();
        });
    }
    buildForm() {
        this.form = this.fb.group({
            textMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('')
        });
    }
    leadMessages() {
        this.leadChatService.messages(this.lead.id == undefined ? null : this.lead.id).subscribe((res) => {
            console.log(res);
            this.messagesList = res.messages;
            this.readMessage().valueChanges().subscribe(msg => {
                if (msg.length > 0) {
                    var index = this.messagesList.findIndex(x => x.id == msg[0].id);
                    if (index === -1) {
                        this.messagesList.push(msg[0]);
                    }
                    else {
                        console.log("object already exists");
                    }
                }
            });
        });
    }
    sendMessage() {
        if (!this.submitted) {
            this.submitted = true;
            this.leadChatService.sendMessage(this.lead.advertiseType, this.lead.advertiseId, this.lead.customer_token, this.lead.agent_id, this.form.value.textMessage, "").subscribe((res) => {
                console.log(res);
                if (res.code == 200) {
                    this.messagesList.push(res.message);
                    this.buildForm();
                }
                this.submitted = false;
            });
        }
        return false;
    }
    readMessage() {
        let messagePath = "agent_" + this.lead.agent_id + "/" + this.lead.advertiseType + "_" + this.lead.advertiseId + "_" + this.lead.customer_token + "/customer/";
        return this.firebaseDb.list(messagePath, ref => ref);
    }
};
ChatsComponent.ctorParameters = () => [
    { type: _core_services_lead_chat_service__WEBPACK_IMPORTED_MODULE_4__["LeadChatService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] },
    { type: _core_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
ChatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chats',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/chats/chats.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chats.component.css */ "./src/app/pages/dashboard/work-space-dashboard/chats/chats.component.css")).default]
    })
], ChatsComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/details/details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/details/details.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".activestatus{\n    background-color:#337ab7;\n    color:white;\n    border-color: #337ab7;\n  }\n  @media screen and (max-width:512px){\n    .first-tab h2 {\n      font-size: 17px;\n      font-weight: 500;\n  }\n  }\n  @media screen and (max-width:769px){\n    .first-tab a {\n      display: inline-block;\n      text-align: left;\n      margin-top: -3px;\n  }\n  }\n  .oaerror {\n    width: 90%; /* Configure it fit in your design  */\n    margin: 0 auto; /* Centering Stuff */\n    background-color: #FFFFFF; /* Default background */\n    padding: 20px;\n    border: 1px solid #eee;\n    border-left-width: 5px;\n    border-radius: 3px;\n    margin: 0 auto;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 16px;\n  }\n  .info {\n    border-left-color: #5bc0de;\n    background-color: rgb(255, 255, 255);\n  }\n  .info strong {\n    color: #5bc0de;\n  }\n  .no-lead{\n    display: block; \n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 5%;\n    width: 20%;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFO01BQ0UsZUFBZTtNQUNmLGdCQUFnQjtFQUNwQjtFQUNBO0VBQ0E7SUFDRTtNQUNFLHFCQUFxQjtNQUNyQixnQkFBZ0I7TUFDaEIsZ0JBQWdCO0VBQ3BCO0VBQ0E7RUFDQTtJQUNFLFVBQVUsRUFBRSxxQ0FBcUM7SUFDakQsY0FBYyxFQUFFLG9CQUFvQjtJQUNwQyx5QkFBeUIsRUFBRSx1QkFBdUI7SUFDbEQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxvQ0FBb0M7SUFDcEMsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLG9DQUFvQztFQUN0QztFQUVBO0lBQ0UsY0FBYztFQUNoQjtFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC93b3JrLXNwYWNlLWRhc2hib2FyZC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmVzdGF0dXN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMzM3YWI3O1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGJvcmRlci1jb2xvcjogIzMzN2FiNztcbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUxMnB4KXtcbiAgICAuZmlyc3QtdGFiIGgyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjc2OXB4KXtcbiAgICAuZmlyc3QtdGFiIGEge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gIH1cbiAgfVxuICAub2FlcnJvciB7XG4gICAgd2lkdGg6IDkwJTsgLyogQ29uZmlndXJlIGl0IGZpdCBpbiB5b3VyIGRlc2lnbiAgKi9cbiAgICBtYXJnaW46IDAgYXV0bzsgLyogQ2VudGVyaW5nIFN0dWZmICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjsgLyogRGVmYXVsdCBiYWNrZ3JvdW5kICovXG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiA1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgLmluZm8ge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjNWJjMGRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgfVxuICBcbiAgLmluZm8gc3Ryb25nIHtcbiAgICBjb2xvcjogIzViYzBkZTtcbiAgfVxuXG4gIC5uby1sZWFke1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgd2lkdGg6IDIwJTtcbiAgfVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/details/details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/details/details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _modal_components_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modal-components/make-payment/make-payment.component */ "./src/app/pages/dashboard/modal-components/make-payment/make-payment.component.ts");
/* harmony import */ var _workspace_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workspace.service */ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let DetailsComponent = class DetailsComponent {
    constructor(commonservice, modalService, workspaceservice) {
        this.commonservice = commonservice;
        this.modalService = modalService;
        this.workspaceservice = workspaceservice;
        this.leadPresent = false;
        this.config = {
            animated: false,
            initialState: {}
        };
    }
    ngOnInit() {
        this.getLead();
    }
    getLead() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            if (res == undefined || res == 0) {
                this.leadPresent = false;
            }
            else {
                this.leadPresent = true;
                console.log(res);
                this.leadDetails = res;
                this.is_permanent = res.is_permanent;
            }
        });
    }
    openModalMakePayment() {
        let initialState = {
            leadDetails: this.leadDetails
        };
        this.config.initialState = initialState;
        this.modalRef = this.modalService.show(_modal_components_make_payment_make_payment_component__WEBPACK_IMPORTED_MODULE_4__["MakePaymentComponent"], this.config);
        this.modalRef.content.action.subscribe(result => {
            this.workspaceservice.makePermanentUser(result).subscribe((res) => {
                console.log(res);
                if (res) {
                    if (res.code == 200) {
                        // var urlShareToClient =  res.share_url
                        // var msg = "Just click on the link below. Enter the same email and set your password to login. You will get full access to all the listings. <br> <strong> <a style='color: white !important;' class='msgLink' href='"+urlShareToClient+"'> Your dashboard link</a></strong>"
                        // this.fb.sendMessage(msg,this.loggedInUserDetails.id,this.leadDetails.id,null,this.loggedInUserDetails.session_token,this.loggedInUserDetails.image,"simple_advertise",null,true,this.leadDetails.agent_id,this.leadDetails.title)
                        // this.loadScript("../assets/js/modal.js");
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                            title: 'Warning',
                            text: res.errors,
                            type: 'error'
                        });
                    }
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        title: 'Warning',
                        text: res.errors,
                        type: 'error'
                    });
                }
            });
        });
    }
};
DetailsComponent.ctorParameters = () => [
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] },
    { type: _workspace_service__WEBPACK_IMPORTED_MODULE_5__["WorkspaceService"] }
];
DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/details/details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.component.css */ "./src/app/pages/dashboard/work-space-dashboard/details/details.component.css")).default]
    })
], DetailsComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/documents/documents.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/documents/documents.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#document h2{\n    color: black;\n    font-weight: 600;\n    font-size: 20px;\n}\n#document p{\n    color: grey;\n    font-weight: 550;\n    font-size: 16px;\n    margin-top: -12px;\n    margin-bottom: 20px;\n}\n.doc-list{\n    /* border:1px solid lightgrey; */\n    padding: 20px;\n    /* height: 400px; */\n    box-sizing: border-box;\n    overflow-y: hidden;\n    overflow-x: hidden;\n}\n.doc-list h3{\n    font-size: 20px;\n    color: black;\n    font-weight: 600;\n}\n.doc-list p{\n    font-size: 16px;\n    color: blue;\n    font-weight: 550;\n    margin-top: -10px;\n}\n.doc-list h4{\n    font-size: 16px;\n    color: grey;\n    font-weight: 500;\n    margin-top: -5px;\n}\n.doc-list span{\n    font-size: 25px;\n    color: grey;\n    font-weight: 500;\n    text-align: center;\n}\n@media(max-width: 769px){\n    .doc-list h3{\n    font-size: 18px;\n    \n}\n.doc-list p{\n    font-size: 12px;\n    line-height: 18px;\n    \n}\n.doc-list h4{\n    font-size: 14px;\n    \n}\n.doc-list span{\n    font-size: 20px;\n    cursor: pointer;\n    \n}\n/* .doc-title{\n    margin-top: 5%;\n} */\n}\n.doc-title{\n    padding: 15px;\n    border:1px solid lightgrey;\n    height: 320px;\n    box-sizing: border-box;\n}\n.doc-title p{\n    font-size: 14px;\n    text-align: center;\n    line-height: 20px;\n    margin-bottom: 2%;\n}\n.doc-title span{\n    font-size: 65px;\n    color: lightgrey;\n}\ninput.form-doc{\n    color: white;\n    background: #00b8ff;\n    font-weight: 550;\n}\n.activeDoc{\n\tbackground-color:#eee;\n }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL2RvY3VtZW50cy9kb2N1bWVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSTtJQUNBLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksZUFBZTs7QUFFbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixlQUFlOztBQUVuQjtBQUNBOztHQUVHO0FBQ0g7QUFDQTtJQUNJLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL2RvY3VtZW50cy9kb2N1bWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNkb2N1bWVudCBoMntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG4jZG9jdW1lbnQgcHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXdlaWdodDogNTUwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmRvYy1saXN0e1xuICAgIC8qIGJvcmRlcjoxcHggc29saWQgbGlnaHRncmV5OyAqL1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLyogaGVpZ2h0OiA0MDBweDsgKi9cbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5kb2MtbGlzdCBoM3tcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uZG9jLWxpc3QgcHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgZm9udC13ZWlnaHQ6IDU1MDtcbiAgICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5kb2MtbGlzdCBoNHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xufVxuLmRvYy1saXN0IHNwYW57XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuQG1lZGlhKG1heC13aWR0aDogNzY5cHgpe1xuICAgIC5kb2MtbGlzdCBoM3tcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgXG59XG4uZG9jLWxpc3QgcHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgXG59XG4uZG9jLWxpc3QgaDR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIFxufVxuLmRvYy1saXN0IHNwYW57XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBcbn1cbi8qIC5kb2MtdGl0bGV7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59ICovXG59XG4uZG9jLXRpdGxle1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgYm9yZGVyOjFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmRvYy10aXRsZSBwe1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG59XG4uZG9jLXRpdGxlIHNwYW57XG4gICAgZm9udC1zaXplOiA2NXB4O1xuICAgIGNvbG9yOiBsaWdodGdyZXk7XG59XG5pbnB1dC5mb3JtLWRvY3tcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogIzAwYjhmZjtcbiAgICBmb250LXdlaWdodDogNTUwO1xufVxuXG4uYWN0aXZlRG9je1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gfVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/documents/documents.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/documents/documents.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DocumentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentsComponent", function() { return DocumentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var _workspace_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workspace.service */ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let DocumentsComponent = class DocumentsComponent {
    constructor(commonservice, workspaceserivce) {
        this.commonservice = commonservice;
        this.workspaceserivce = workspaceserivce;
        this.documents = [];
        this.accessable = false;
    }
    ngOnInit() {
        this.getLead();
        this.btnDisabled = false;
        this.title = '';
        this.file = '';
    }
    getLead() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            if (res.id == null || res.id == undefined) {
                this.accessable = false;
            }
            else {
                this.accessable = true;
                this.leadDetails = res;
                this.lead_id = res.id;
                this.agent_id = res.agent_id;
                this.documentsLead();
            }
        });
    }
    documentsLead() {
        let obj = {
            lead_id: this.lead_id
        };
        this.workspaceserivce.documents_Lead(obj).subscribe((res) => {
            console.log(res);
            if (res.code == 200) {
                this.documents = res.documents;
            }
            else {
                this.documents = [];
            }
        });
    }
    fileChange(event) {
        if (event.target.files[0].size < 10000000) {
            this.file = event.target.files[0];
            this.btnDisabled = false;
            this.message = '';
        }
        else {
            this.file = '';
            this.btnDisabled = true;
            this.message = "Please only upload Maximum size of file 9MB";
        }
    }
    uploaddocumentRequest() {
        if (this.title == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Document',
                text: "Please Enter Title Your Document",
                type: 'warning'
            });
            return;
        }
        else if (this.file == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Document',
                text: "Please select any Document for upload",
                type: 'warning'
            });
            return;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Please wait..",
            type: 'info',
            html: "<center><img src='../../../assets/img/loading.gif' width='30%'></center>",
            showConfirmButton: false
        });
        let formData = new FormData();
        formData.append('lead_id', this.lead_id);
        formData.append('title', this.title);
        formData.append('file', this.file);
        this.workspaceserivce.addDocument(formData).subscribe((res) => {
            if (res.code == 200) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.close();
                this.documents.push(res.document);
                this.title = '';
                this.file = '';
                res.notify_users.forEach(ele => {
                    let fireobj = {
                        lead_id: this.lead_id,
                        notification_type: "Task",
                        notification_type_id: res.task.id,
                        // sender_user_id: suserId,
                        noti_id: ele.noti_id,
                        receiver_id: ele.user_id
                    };
                    // this.fb.newUserNotification(fireobj)
                });
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Document Uploaded',
                    text: "Document Uploaded Successfully!",
                    type: 'success'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
    removeDocument(document_id) {
        let self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this Document!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!"
        }).then(function (result) {
            if (result.value) {
                self.removePerform(document_id);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Cancelled", "Your Document is safe.", "error");
            }
        });
    }
    removePerform(document_id) {
        let obj = {
            lead_id: this.lead_id,
            document_id: document_id
        };
        this.workspaceserivce.removeDocument(obj).subscribe((res) => {
            if (res.code == 200) {
                // console.log(this.documents)
                const index = this.documents.findIndex(item => item.id === document_id);
                this.documents.splice(index, 1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Message',
                    text: "Document Removed Successfully",
                    type: 'success'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
};
DocumentsComponent.ctorParameters = () => [
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _workspace_service__WEBPACK_IMPORTED_MODULE_3__["WorkspaceService"] }
];
DocumentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-documents',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./documents.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/documents/documents.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./documents.component.css */ "./src/app/pages/dashboard/work-space-dashboard/documents/documents.component.css")).default]
    })
], DocumentsComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/invite/invite.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/invite/invite.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".appoinment-list\n  {\n  \tpadding: 10px;\n  \t/* height: 500px; */\n  \toverflow-x: hidden;\n  \toverflow-y: scroll;\n  }\n  .appoinment-list h2\n  {\n  \tfont-size: 20px;\n  \tfont-weight: 600;\n  \tcolor: black;\t\n  }\n  .appoinment-list h4{\n  \tfont-size: 16px;\n  \tfont-weight: 550;\n  \tcolor: black;\n  \tmargin-top: -5px;\n  }\n  .appoinment-list p{\n  \tfont-size: 16px;\n  \tfont-weight: 550;\n  \tcolor: grey;\n  \tline-height: 18px;\n  \tmargin-top: -5px;\n  \t\n  }\n  .appoinment-list span{\n  \tcolor: lightgrey;\n  \tfont-size: 25px;\n  \tcursor: pointer;\n  \tdisplay: block;\n  }\n  .appoinment-form2{\n \tpadding:0px 20px;\n \t}\n  .appoinment-form2 h2\n  {\n  \tfont-size: 20px;\n  \tfont-weight: 600;\n  \tcolor: black;\t\n  \t\n  \tbox-sizing: border-box;\n  }\n  .appoinment-form2 p{\n  \tfont-size: 16px;\n  \tfont-weight: 550;\n  \tcolor: grey;\n  \tline-height: 18px;\n  \tmargin-top: -5px;\n  \t\n  }\n  .appoinment-form2 input[type=submit]{\n  \tbackground: #00b8ff;\n  \tcolor: white;\n  }\n  @media(max-width: 769px){\n\t.appoinment-form2{\n\t\t\n\t\tborder-left: none;\n\t\theight: 100px;\n\t\t/* padding-top: 30px; */\n \t}\n \t.appoinment-list\n  {\n  \tpadding: 10px;\n  \theight: 400px;\n  \toverflow-x: hidden;\n  \toverflow-y: scroll;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL2ludml0ZS9pbnZpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyxhQUFhO0dBQ2IsbUJBQW1CO0dBQ25CLGtCQUFrQjtHQUNsQixrQkFBa0I7RUFDbkI7RUFDQTs7R0FFQyxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLFlBQVk7RUFDYjtFQUNBO0dBQ0MsZUFBZTtHQUNmLGdCQUFnQjtHQUNoQixZQUFZO0dBQ1osZ0JBQWdCO0VBQ2pCO0VBQ0Q7R0FDRSxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLFdBQVc7R0FDWCxpQkFBaUI7R0FDakIsZ0JBQWdCOztFQUVqQjtFQUNEO0dBQ0UsZ0JBQWdCO0dBQ2hCLGVBQWU7R0FDZixlQUFlO0dBQ2YsY0FBYztFQUNmO0VBR0Q7RUFDQyxnQkFBZ0I7RUFDaEI7RUFFQTs7R0FFQyxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLFlBQVk7O0dBRVosc0JBQXNCO0VBQ3ZCO0VBQ0E7R0FDQyxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLFdBQVc7R0FDWCxpQkFBaUI7R0FDakIsZ0JBQWdCOztFQUVqQjtFQUNBO0dBQ0MsbUJBQW1CO0dBQ25CLFlBQVk7RUFDYjtFQUlGO0NBQ0M7O0VBRUMsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkI7RUFDQTs7R0FFQyxhQUFhO0dBQ2IsYUFBYTtHQUNiLGtCQUFrQjtHQUNsQixrQkFBa0I7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC93b3JrLXNwYWNlLWRhc2hib2FyZC9pbnZpdGUvaW52aXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwb2lubWVudC1saXN0XG4gIHtcbiAgXHRwYWRkaW5nOiAxMHB4O1xuICBcdC8qIGhlaWdodDogNTAwcHg7ICovXG4gIFx0b3ZlcmZsb3cteDogaGlkZGVuO1xuICBcdG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxuICAuYXBwb2lubWVudC1saXN0IGgyXG4gIHtcbiAgXHRmb250LXNpemU6IDIwcHg7XG4gIFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgXHRjb2xvcjogYmxhY2s7XHRcbiAgfVxuICAuYXBwb2lubWVudC1saXN0IGg0e1xuICBcdGZvbnQtc2l6ZTogMTZweDtcbiAgXHRmb250LXdlaWdodDogNTUwO1xuICBcdGNvbG9yOiBibGFjaztcbiAgXHRtYXJnaW4tdG9wOiAtNXB4O1xuICB9XG4gLmFwcG9pbm1lbnQtbGlzdCBwe1xuICBcdGZvbnQtc2l6ZTogMTZweDtcbiAgXHRmb250LXdlaWdodDogNTUwO1xuICBcdGNvbG9yOiBncmV5O1xuICBcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBcdG1hcmdpbi10b3A6IC01cHg7XG4gIFx0XG4gIH1cbiAuYXBwb2lubWVudC1saXN0IHNwYW57XG4gIFx0Y29sb3I6IGxpZ2h0Z3JleTtcbiAgXHRmb250LXNpemU6IDI1cHg7XG4gIFx0Y3Vyc29yOiBwb2ludGVyO1xuICBcdGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cblxuIC5hcHBvaW5tZW50LWZvcm0ye1xuIFx0cGFkZGluZzowcHggMjBweDtcbiBcdH1cblxuIFx0LmFwcG9pbm1lbnQtZm9ybTIgaDJcbiAge1xuICBcdGZvbnQtc2l6ZTogMjBweDtcbiAgXHRmb250LXdlaWdodDogNjAwO1xuICBcdGNvbG9yOiBibGFjaztcdFxuICBcdFxuICBcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgLmFwcG9pbm1lbnQtZm9ybTIgcHtcbiAgXHRmb250LXNpemU6IDE2cHg7XG4gIFx0Zm9udC13ZWlnaHQ6IDU1MDtcbiAgXHRjb2xvcjogZ3JleTtcbiAgXHRsaW5lLWhlaWdodDogMThweDtcbiAgXHRtYXJnaW4tdG9wOiAtNXB4O1xuICBcdFxuICB9XG4gIC5hcHBvaW5tZW50LWZvcm0yIGlucHV0W3R5cGU9c3VibWl0XXtcbiAgXHRiYWNrZ3JvdW5kOiAjMDBiOGZmO1xuICBcdGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG5cblxuQG1lZGlhKG1heC13aWR0aDogNzY5cHgpe1xuXHQuYXBwb2lubWVudC1mb3JtMntcblx0XHRcblx0XHRib3JkZXItbGVmdDogbm9uZTtcblx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdC8qIHBhZGRpbmctdG9wOiAzMHB4OyAqL1xuIFx0fVxuIFx0LmFwcG9pbm1lbnQtbGlzdFxuICB7XG4gIFx0cGFkZGluZzogMTBweDtcbiAgXHRoZWlnaHQ6IDQwMHB4O1xuICBcdG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgXHRvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/invite/invite.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/invite/invite.component.ts ***!
  \*********************************************************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _workspace_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workspace.service */ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");






let InviteComponent = class InviteComponent {
    constructor(formbuilder, workspaceservice, commonservice) {
        this.formbuilder = formbuilder;
        this.workspaceservice = workspaceservice;
        this.commonservice = commonservice;
        this.accessable = false;
    }
    ngOnInit() {
        this.get_Leads();
        this.buildForm();
    }
    buildForm() {
        this.inviteForm = this.formbuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        });
    }
    get_Leads() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            if (res.id == null || res.id == undefined) {
                this.accessable = false;
            }
            else {
                this.accessable = true;
                this.leadDetails = res;
                this.lead_id = res.id;
            }
        });
    }
    inviteFriendRequest() {
        if (this.inviteForm.invalid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Warning',
                text: "User Email can't be blank!",
                type: 'warning'
            });
            return;
        }
        else {
            let obj = {
                angular_root_url: location.origin,
                email: this.inviteForm.value.email,
                lead_id: this.lead_id,
                role: "agent",
            };
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: "Please Wait...",
                text: "Your Request Processing",
                imageUrl: '../../../assets/img/info.png',
                imageWidth: 50,
                imageHeight: 50,
                showConfirmButton: false
            });
            this.workspaceservice.inviteFriendforPorperty(obj).subscribe((res) => {
                if (res.code == 200) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'Invitation Sent',
                        text: "You have successfully invited your friend",
                        type: 'success'
                    });
                    this.inviteForm.reset();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                        title: 'Warning',
                        text: res.errors,
                        type: 'error'
                    });
                    this.inviteForm.reset();
                }
            });
        }
    }
};
InviteComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _workspace_service__WEBPACK_IMPORTED_MODULE_4__["WorkspaceService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
InviteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-invite',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/invite/invite.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invite.component.css */ "./src/app/pages/dashboard/work-space-dashboard/invite/invite.component.css")).default]
    })
], InviteComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/members/members.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/members/members.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("i {  vertical-align: middle; }\n.table-users tbody tr:hover {\n\tcursor: pointer;\n\tbackground-color: #eee;\n}\n.nav-user-photo {\n     vertical-align: middle;\n}\n.user_panel {\n    width: 50%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL21lbWJlcnMvbWVtYmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEtBQUssc0JBQXNCLEVBQUU7QUFDN0I7Q0FDQyxlQUFlO0NBQ2Ysc0JBQXNCO0FBQ3ZCO0FBQ0E7S0FDSyxzQkFBc0I7QUFDM0I7QUFDQTtJQUNJLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC93b3JrLXNwYWNlLWRhc2hib2FyZC9tZW1iZXJzL21lbWJlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImkgeyAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgfVxuLnRhYmxlLXVzZXJzIHRib2R5IHRyOmhvdmVyIHtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xufVxuLm5hdi11c2VyLXBob3RvIHtcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi51c2VyX3BhbmVsIHtcbiAgICB3aWR0aDogNTAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/members/members.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/members/members.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var _workspace_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workspace.service */ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts");




let MembersComponent = class MembersComponent {
    constructor(commonservice, workspaceservice) {
        this.commonservice = commonservice;
        this.workspaceservice = workspaceservice;
        this.users = [];
    }
    ngOnInit() {
        this.get_Leads();
    }
    get_Leads() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            this.leadDetails = res;
            this.lead_id = res.id;
            this.membersLead();
        });
    }
    membersLead() {
        let obj = {
            lead_id: this.lead_id
        };
        this.workspaceservice.member_Lead(obj).subscribe((res) => {
            console.log(res);
            if (res.code = 200) {
                this.users = res.users;
            }
            else {
                this.users = [];
            }
        });
    }
};
MembersComponent.ctorParameters = () => [
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _workspace_service__WEBPACK_IMPORTED_MODULE_3__["WorkspaceService"] }
];
MembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-members',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./members.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/members/members.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./members.component.css */ "./src/app/pages/dashboard/work-space-dashboard/members/members.component.css")).default]
    })
], MembersComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/properties/properties.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/properties/properties.component.css ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img.no-property{\n    height:300px;width:300px;\n    opacity: .7;\n}\n\n.listing-table span i:hover {\n    color: red;\n}\n\n.label-info{\n    border-radius: 0;\n    color: white !important;\n    font-size: 16px !important;\n    padding: 5px;\n}\n\n.remove-1{\n    display: none;\n\n}\n\n@media(max-width: 769px){\n    img.no-property{\n        height:100px;width:100px;\n    }\n    .remove-1{\n        display: inline-block;\n    }\n    .remove-2{\n        display: none;\n    \n    }\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL3Byb3BlcnRpZXMvcHJvcGVydGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWSxDQUFDLFdBQVc7SUFDeEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0k7UUFDSSxZQUFZLENBQUMsV0FBVztJQUM1QjtJQUNBO1FBQ0kscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxhQUFhOztJQUVqQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC93b3JrLXNwYWNlLWRhc2hib2FyZC9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZy5uby1wcm9wZXJ0eXtcbiAgICBoZWlnaHQ6MzAwcHg7d2lkdGg6MzAwcHg7XG4gICAgb3BhY2l0eTogLjc7XG59XG5cbi5saXN0aW5nLXRhYmxlIHNwYW4gaTpob3ZlciB7XG4gICAgY29sb3I6IHJlZDtcbn1cblxuLmxhYmVsLWluZm97XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA1cHg7XG59XG4ucmVtb3ZlLTF7XG4gICAgZGlzcGxheTogbm9uZTtcblxufVxuXG5AbWVkaWEobWF4LXdpZHRoOiA3NjlweCl7XG4gICAgaW1nLm5vLXByb3BlcnR5e1xuICAgICAgICBoZWlnaHQ6MTAwcHg7d2lkdGg6MTAwcHg7XG4gICAgfVxuICAgIC5yZW1vdmUtMXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIH1cbiAgICAucmVtb3ZlLTJ7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgXG4gICAgfVxuXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/properties/properties.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/properties/properties.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesComponent", function() { return PropertiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var _workspace_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workspace.service */ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let PropertiesComponent = class PropertiesComponent {
    constructor(commonservice, workspaceservice, router) {
        this.commonservice = commonservice;
        this.workspaceservice = workspaceservice;
        this.router = router;
        this.properties = [];
        this.accessable = false;
    }
    ngOnInit() {
        this.getLead();
    }
    getLead() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            if (res.id == null || res.id == undefined) {
                this.accessable = false;
            }
            else {
                this.accessable = true;
                this.leadDetails = res;
                this.lead_id = res.id;
                this.propertiesLead();
            }
        });
    }
    propertiesLead() {
        let obj = {
            lead_id: this.lead_id,
            page: '1',
            per_page: '10'
        };
        console.log(obj);
        this.workspaceservice.properties_details(obj).subscribe((res) => {
            console.log(res);
            this.properties = res.lead_properties;
        });
    }
    addToFavourite(property_id) {
        let obj = {
            property_id: property_id
        };
        this.workspaceservice.addFavProperty(obj).subscribe((res) => {
            if (res.code == 200) {
                const index = this.properties.findIndex(item => item.id === property_id);
                this.properties[index].is_favourite = res.property.is_favourite;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
    removeProperty(property_id) {
        let self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!"
        }).then(function (result) {
            if (result.value) {
                self.removePerform(property_id);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Cancelled", "Your Property is safe.", "error");
            }
        });
    }
    removePerform(property_id) {
        let obj = {
            lead_id: this.lead_id,
            property_id: property_id
        };
        this.workspaceservice.removeProperty(obj).subscribe((res) => {
            if (res.code == 200) {
                const index = this.properties.findIndex(item => item.id === property_id);
                this.properties.splice(index, 1);
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: "Task Removed Successfully",
                    type: 'success'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
};
PropertiesComponent.ctorParameters = () => [
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _workspace_service__WEBPACK_IMPORTED_MODULE_3__["WorkspaceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
PropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-properties',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./properties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/properties/properties.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./properties.component.css */ "./src/app/pages/dashboard/work-space-dashboard/properties/properties.component.css")).default]
    })
], PropertiesComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/property-details/property-details.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/property-details/property-details.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".advertise-header{\n\tpadding-left: 2%;\n\tmargin-top: 1%;\n}\n.advertise-body{\n\tpadding-left: 2%;\n\tmargin-top: -1%;\n}\n.advertise-body h1{\n\tcolor: black;\n\tfont-weight: 600;\n\tfont-size: 22px;\n}\n.advertise-body p{\n\tcolor: grey;\n\tfont-size: 16px;\n}\n.body-listing{\n\tmax-height: 620px;\n\toverflow-x: hidden;\n\toverflow-y: scroll;\n\twidth: 100%;\n}\n.chat-scroll{\n  \tmax-height: 610px !important;\n  \toverflow-y: scroll;\n  \toverflow-x: hidden;\n  }\n.chat-bottom{\n  \tposition: relative;\n  \tbottom: -10px !important;\n  \tbackground: #f2f2f2;\n  \tpadding: 10px 20px 10px 40px;\n  \tborder-radius: 20px;\n  \theight: 70px;\n  \tbox-sizing: border-box;\n  \tmargin-left: 2%;\n  \tmargin-right: 2%;\n  }\n.chat-panel .chat-tool {\n    max-width: 360px !important;\n    background: linear-gradient(to right, #4A00E0 , #8E2DE2);\n    color: white!important;\n    border: none !important;\n    \n}\n.chat-panel img {\n    margin-top: -121px !important;\n}\n.chat-panel p span {\n    max-width: 415px !important;\n    background: linear-gradient(to left, #f2709c , #ff9472);\n    color: white!important;\n    border: none !important;\n    \n}\n/*==============slider css start================*/\n#myCarousel{\n\t\n\tbackground: #fff;\n}\n#myCarousel .carousel-inner .item img{\n\tborder: 0px !important;\n}\n#thumbCarousel{\n\t\n\toverflow: hidden;\n\tbackground: #ffff;\n\tpadding: 10px 0;\n}\n#thumbCarousel .thumb{\n\tfloat: left;\n\tmargin-right: 10px;\n\tborder: 1px solid #ccc;\n\tbackground: #fff;\n}\n#thumbCarousel .thumb:last-child{\n\tmargin-right: 0;\n}\n.thumb:hover{\n\tcursor: pointer;\n}\n.thumb img{\n\topacity: 0.5;\n}\n.thumb img:hover{\n\topacity: 1;\n}\n.thumb.active img{\n\topacity: 1;\n  border: 1px solid #1d62b7;\n}\n/*==============slider css end================*/\n.listing-table2 span{\n\tmargin-right: 30px !important;\n}\n.discrption{\n\tpadding-bottom: 20px;\n}\n.discrption h2{\n\tcolor: black;\n\tfont-size: 20px;\n\tfont-weight: 600;\n}\n.incoming_msg_img {\n\tdisplay: inline-block;\n}\n.received_msg {\n\tdisplay: inline-block;\n\tpadding: 0 0 0 10px;\n\tvertical-align: top;\n\twidth: 80%;\n}\n.received_withd_msg p {\n\tbackground: #ebebeb none repeat scroll 0 0;\n\tborder-radius: 3px;\n\tcolor: #646464;\n\tfont-size: 14px;\n\tmargin: 0;\n\tpadding: 5px 10px 5px 12px;\n\twidth: 100%;\n}\n.time_date {\t\n\tcolor: #747474;\n\tdisplay: block;\n\tfont-size: 12px;\n\tmargin: 8px 0 0;\n\tmargin-bottom:10px;\n}\n.mesgs {\n\tfloat: left;\n\t/* padding: 30px 15px 0 25px; */\n\twidth: 100%;\n}\n.sent_msg p {\n\tbackground: #05728f none repeat scroll 0 0;\n\tborder-radius: 3px;\n\tfont-size: 14px;\n\tmargin: 0; color:#fff;\n\tpadding: 5px 10px 5px 12px;\n\twidth:100%;\n}\n.outgoing_msg{ overflow:hidden; margin:26px 0 26px;}\n.sent_msg {\n\tfloat: right;\n\t/* width: 46%; */\n}\n.input_msg_write input {\n\tbackground: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n\tborder: medium none;\n\tcolor: #4c4c4c;\n\tfont-size: 15px;\n\tmin-height: 48px;\n\twidth: 100%;\n}\n.type_msg {border-top: 1px solid #c4c4c4;position: relative;}\n.msg_send_btn {\n\tbackground: #05728f none repeat scroll 0 0;\n\tborder: medium none;\n\tborder-radius: 50%;\n\tcolor: #fff;\n\tcursor: pointer;\n\tfont-size: 17px;\n\theight: 33px;\n\tposition: absolute;\n\tright: 0;\n\ttop: 11px;\n\twidth: 33px;\n}\n.msg_history {\n\t\n height: 480px;\n overflow-y: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL3Byb3BlcnR5LWRldGFpbHMvcHJvcGVydHktZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7QUFDQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsV0FBVztDQUNYLGVBQWU7QUFDaEI7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLFdBQVc7QUFDWjtBQUNBO0dBQ0csNEJBQTRCO0dBQzVCLGtCQUFrQjtHQUNsQixrQkFBa0I7RUFDbkI7QUFFRjtHQUNHLGtCQUFrQjtHQUNsQix3QkFBd0I7R0FDeEIsbUJBQW1CO0dBQ25CLDRCQUE0QjtHQUM1QixtQkFBbUI7R0FDbkIsWUFBWTtHQUNaLHNCQUFzQjtHQUN0QixlQUFlO0dBQ2YsZ0JBQWdCO0VBQ2pCO0FBRUE7SUFDRSwyQkFBMkI7SUFDM0Isd0RBQXdEO0lBQ3hELHNCQUFzQjtJQUN0Qix1QkFBdUI7O0FBRTNCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLDJCQUEyQjtJQUMzQix1REFBdUQ7SUFDdkQsc0JBQXNCO0lBQ3RCLHVCQUF1Qjs7QUFFM0I7QUFFQSxpREFBaUQ7QUFDakQ7O0NBRUMsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxzQkFBc0I7QUFDdkI7QUFDQTs7Q0FFQyxnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLGVBQWU7QUFDaEI7QUFFQTtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsZUFBZTtBQUNoQjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBRUE7Q0FDQyxVQUFVO0FBQ1g7QUFFQTtDQUNDLFVBQVU7RUFDVCx5QkFBeUI7QUFDM0I7QUFDQSwrQ0FBK0M7QUFDOUM7Q0FDQSw2QkFBNkI7QUFDOUI7QUFDQTtDQUNDLG9CQUFvQjtBQUNyQjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLHFCQUFxQjtBQUN0QjtBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsVUFBVTtBQUNYO0FBRUE7Q0FDQywwQ0FBMEM7Q0FDMUMsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsU0FBUztDQUNULDBCQUEwQjtDQUMxQixXQUFXO0FBQ1o7QUFDQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsZUFBZTtDQUNmLGVBQWU7Q0FDZixrQkFBa0I7QUFDbkI7QUFFQTtDQUNDLFdBQVc7Q0FDWCwrQkFBK0I7Q0FDL0IsV0FBVztBQUNaO0FBRUE7Q0FDQywwQ0FBMEM7Q0FDMUMsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixTQUFTLEVBQUUsVUFBVTtDQUNyQiwwQkFBMEI7Q0FDMUIsVUFBVTtBQUNYO0FBQ0EsZUFBZSxlQUFlLEVBQUUsa0JBQWtCLENBQUM7QUFDbkQ7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxtREFBbUQ7Q0FDbkQsbUJBQW1CO0NBQ25CLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFdBQVc7QUFDWjtBQUVBLFdBQVcsNkJBQTZCLENBQUMsa0JBQWtCLENBQUM7QUFDNUQ7Q0FDQywwQ0FBMEM7Q0FDMUMsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsZUFBZTtDQUNmLGVBQWU7Q0FDZixZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLFFBQVE7Q0FDUixTQUFTO0NBQ1QsV0FBVztBQUNaO0FBRUE7O0NBRUMsYUFBYTtDQUNiLGdCQUFnQjtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC93b3JrLXNwYWNlLWRhc2hib2FyZC9wcm9wZXJ0eS1kZXRhaWxzL3Byb3BlcnR5LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZHZlcnRpc2UtaGVhZGVye1xuXHRwYWRkaW5nLWxlZnQ6IDIlO1xuXHRtYXJnaW4tdG9wOiAxJTtcbn1cbi5hZHZlcnRpc2UtYm9keXtcblx0cGFkZGluZy1sZWZ0OiAyJTtcblx0bWFyZ2luLXRvcDogLTElO1xufVxuLmFkdmVydGlzZS1ib2R5IGgxe1xuXHRjb2xvcjogYmxhY2s7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdGZvbnQtc2l6ZTogMjJweDtcbn1cbi5hZHZlcnRpc2UtYm9keSBwe1xuXHRjb2xvcjogZ3JleTtcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuLmJvZHktbGlzdGluZ3tcblx0bWF4LWhlaWdodDogNjIwcHg7XG5cdG92ZXJmbG93LXg6IGhpZGRlbjtcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuXHR3aWR0aDogMTAwJTtcbn1cbi5jaGF0LXNjcm9sbHtcbiAgXHRtYXgtaGVpZ2h0OiA2MTBweCAhaW1wb3J0YW50O1xuICBcdG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgXHRvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cblxuLmNoYXQtYm90dG9te1xuICBcdHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXHRib3R0b206IC0xMHB4ICFpbXBvcnRhbnQ7XG4gIFx0YmFja2dyb3VuZDogI2YyZjJmMjtcbiAgXHRwYWRkaW5nOiAxMHB4IDIwcHggMTBweCA0MHB4O1xuICBcdGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIFx0aGVpZ2h0OiA3MHB4O1xuICBcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIFx0bWFyZ2luLWxlZnQ6IDIlO1xuICBcdG1hcmdpbi1yaWdodDogMiU7XG4gIH1cblxuICAuY2hhdC1wYW5lbCAuY2hhdC10b29sIHtcbiAgICBtYXgtd2lkdGg6IDM2MHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNEEwMEUwICwgIzhFMkRFMik7XG4gICAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBcbn1cbi5jaGF0LXBhbmVsIGltZyB7XG4gICAgbWFyZ2luLXRvcDogLTEyMXB4ICFpbXBvcnRhbnQ7XG59XG4uY2hhdC1wYW5lbCBwIHNwYW4ge1xuICAgIG1heC13aWR0aDogNDE1cHggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2YyNzA5YyAsICNmZjk0NzIpO1xuICAgIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgXG59XG5cbi8qPT09PT09PT09PT09PT1zbGlkZXIgY3NzIHN0YXJ0PT09PT09PT09PT09PT09PSovXG4jbXlDYXJvdXNlbHtcblx0XG5cdGJhY2tncm91bmQ6ICNmZmY7XG59XG4jbXlDYXJvdXNlbCAuY2Fyb3VzZWwtaW5uZXIgLml0ZW0gaW1ne1xuXHRib3JkZXI6IDBweCAhaW1wb3J0YW50O1xufVxuI3RodW1iQ2Fyb3VzZWx7XG5cdFxuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRiYWNrZ3JvdW5kOiAjZmZmZjtcblx0cGFkZGluZzogMTBweCAwO1xufVxuXG4jdGh1bWJDYXJvdXNlbCAudGh1bWJ7XG5cdGZsb2F0OiBsZWZ0O1xuXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbiN0aHVtYkNhcm91c2VsIC50aHVtYjpsYXN0LWNoaWxke1xuXHRtYXJnaW4tcmlnaHQ6IDA7XG59XG5cbi50aHVtYjpob3Zlcntcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGh1bWIgaW1ne1xuXHRvcGFjaXR5OiAwLjU7XG59XG5cbi50aHVtYiBpbWc6aG92ZXJ7XG5cdG9wYWNpdHk6IDE7XG59XG5cbi50aHVtYi5hY3RpdmUgaW1ne1xuXHRvcGFjaXR5OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMWQ2MmI3O1xufVxuLyo9PT09PT09PT09PT09PXNsaWRlciBjc3MgZW5kPT09PT09PT09PT09PT09PSovXG4gLmxpc3RpbmctdGFibGUyIHNwYW57XG5cdG1hcmdpbi1yaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuLmRpc2NycHRpb257XG5cdHBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLmRpc2NycHRpb24gaDJ7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiAyMHB4O1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW5jb21pbmdfbXNnX2ltZyB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnJlY2VpdmVkX21zZyB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0cGFkZGluZzogMCAwIDAgMTBweDtcblx0dmVydGljYWwtYWxpZ246IHRvcDtcblx0d2lkdGg6IDgwJTtcbn1cblxuLnJlY2VpdmVkX3dpdGhkX21zZyBwIHtcblx0YmFja2dyb3VuZDogI2ViZWJlYiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGNvbG9yOiAjNjQ2NDY0O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogNXB4IDEwcHggNXB4IDEycHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuLnRpbWVfZGF0ZSB7XHRcblx0Y29sb3I6ICM3NDc0NzQ7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250LXNpemU6IDEycHg7XG5cdG1hcmdpbjogOHB4IDAgMDtcblx0bWFyZ2luLWJvdHRvbToxMHB4O1xufVxuICBcbi5tZXNncyB7XG5cdGZsb2F0OiBsZWZ0O1xuXHQvKiBwYWRkaW5nOiAzMHB4IDE1cHggMCAyNXB4OyAqL1xuXHR3aWR0aDogMTAwJTtcbn1cbiAgXG4uc2VudF9tc2cgcCB7XG5cdGJhY2tncm91bmQ6ICMwNTcyOGYgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRmb250LXNpemU6IDE0cHg7XG5cdG1hcmdpbjogMDsgY29sb3I6I2ZmZjtcblx0cGFkZGluZzogNXB4IDEwcHggNXB4IDEycHg7XG5cdHdpZHRoOjEwMCU7XG59XG4ub3V0Z29pbmdfbXNneyBvdmVyZmxvdzpoaWRkZW47IG1hcmdpbjoyNnB4IDAgMjZweDt9XG4uc2VudF9tc2cge1xuXHRmbG9hdDogcmlnaHQ7XG5cdC8qIHdpZHRoOiA0NiU7ICovXG59XG4uaW5wdXRfbXNnX3dyaXRlIGlucHV0IHtcblx0YmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuXHRib3JkZXI6IG1lZGl1bSBub25lO1xuXHRjb2xvcjogIzRjNGM0Yztcblx0Zm9udC1zaXplOiAxNXB4O1xuXHRtaW4taGVpZ2h0OiA0OHB4O1xuXHR3aWR0aDogMTAwJTtcbn1cbiAgXG4udHlwZV9tc2cge2JvcmRlci10b3A6IDFweCBzb2xpZCAjYzRjNGM0O3Bvc2l0aW9uOiByZWxhdGl2ZTt9XG4ubXNnX3NlbmRfYnRuIHtcblx0YmFja2dyb3VuZDogIzA1NzI4ZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xuXHRib3JkZXI6IG1lZGl1bSBub25lO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGNvbG9yOiAjZmZmO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMTdweDtcblx0aGVpZ2h0OiAzM3B4O1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHJpZ2h0OiAwO1xuXHR0b3A6IDExcHg7XG5cdHdpZHRoOiAzM3B4O1xufVxuICBcbi5tc2dfaGlzdG9yeSB7XG5cdFxuIGhlaWdodDogNDgwcHg7XG4gb3ZlcmZsb3cteTogYXV0bztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/property-details/property-details.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/property-details/property-details.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: PropertyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyDetailsComponent", function() { return PropertyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var _workspace_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../workspace.service */ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts");






let PropertyDetailsComponent = class PropertyDetailsComponent {
    constructor(route, formBuilder, commonservice, workspaceservice) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.commonservice = commonservice;
        this.workspaceservice = workspaceservice;
        this.imageSources = [];
        this.notes = [];
        this.route_id = this.route.snapshot.params['id'];
    }
    ngOnInit() {
        this.noteForm();
        this.get_Leads();
        this.propertyDetails();
        this.propertyNotes();
    }
    noteForm() {
        this.addNoteForm = this.formBuilder.group({
            note: '',
        });
    }
    get_Leads() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            this.leadDetails = res;
            this.lead_id = res.id;
        });
    }
    propertyDetails() {
        let obj = {
            lead_id: this.lead_id,
            property_id: this.route_id
        };
        this.workspaceservice.propertyDetail(obj).subscribe((res) => {
            if (res.code == 200) {
                this.property = res.property;
                if (this.property.property_image) {
                    this.imageSources.push(this.property.property_image);
                }
                if (this.property.images_list) {
                    this.property.images_list.forEach(element => {
                        this.imageSources.push(element);
                    });
                }
            }
            else {
            }
        });
    }
    propertyNotes() {
        let obj = {
            property_id: this.route_id
        };
        this.workspaceservice.getPropertyNotes(obj).subscribe((res) => {
            if (res.code == 200) {
                this.notes = res.notes;
            }
            else {
            }
        });
    }
    addNoteRequest() {
        let obj = {
            note: this.addNoteForm.value.note,
            property_id: this.route_id
        };
        this.workspaceservice.addPropertyNote(obj).subscribe((res) => {
            if (res.code == 200) {
                this.notes.push(res.note);
                this.addNoteForm.reset();
            }
            else {
            }
        });
    }
};
PropertyDetailsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _workspace_service__WEBPACK_IMPORTED_MODULE_5__["WorkspaceService"] }
];
PropertyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-property-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./property-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/property-details/property-details.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./property-details.component.css */ "./src/app/pages/dashboard/work-space-dashboard/property-details/property-details.component.css")).default]
    })
], PropertyDetailsComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/search-properties/search-properties.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/search-properties/search-properties.component.css ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".listing-1 select{\n    border-radius: 0px; \n  }\n  \n  .listing-1 input{\n    border-radius: 0px; \n  }\n  \n  .list-form{\n    display: inline-block;\n    width: 25% !important;\n    margin-top: 3%;\n  }\n  \n  #panel, #flip {\n    padding: 5px;\n    text-align: center;\n    /* background-color: #e5eecc; */\n    border: solid 1px #c3c3c3;\n  }\n  \n  #panel {\n    padding: 20px 10px;\n    display: none;\n    text-align:left !important;\n  }\n  \n  .filter{\n   padding:5px 0 !important;\n  \n  }\n  \n  .custom-radios div {\n    display: inline-block;\n  }\n  \n  .custom-radios input[type=\"radio\"] {\n    display: none;\n  }\n  \n  .custom-radios input[type=\"radio\"] + label {\n    color: #333;\n    font-family: Arial, sans-serif;\n    font-size: 14px;\n  }\n  \n  .custom-radios input[type=\"radio\"] + label span {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: -1px 4px 0 0;\n    vertical-align: middle;\n    cursor: pointer;\n    border-radius: 50%;\n    border: 2px solid #FFFFFF;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.33);\n    background-repeat: no-repeat;\n    background-position: center;\n    text-align: center;\n    line-height: 44px;\n  }\n  \n  .custom-radios input[type=\"radio\"] + label span img {\n    opacity: 0;\n    transition: all .3s ease;\n  }\n  \n  .custom-radios input[type=\"radio\"]#color-1 + label span {\n    background-color: #2ecc71;\n  }\n  \n  .custom-radios input[type=\"radio\"]#color-2 + label span {\n    background-color: #2ecc71;\n  }\n  \n  .custom-radios input[type=\"radio\"]#color-3 + label span {\n    background-color: #2ecc71;\n  }\n  \n  .custom-radios input[type=\"radio\"]:checked + label span {\n    opacity: 1;\n    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg) center center no-repeat;\n    width: 30px;\n    height: 30px;\n    display: inline-block;\n  \n  }\n  \n  /* .search-results {\n    height: 100rem;\n    overflow: scroll;\n  } */\n  \n  .label-info{\n    border-radius: 0;\n    color: white !important;\n    font-size: 16px !important;\n    padding: 5px;\n  }\n  \n  @media screen and (max-width: 769px){\n    .list-form{\n      display: inline-block;\n      width:100% !important;;\n      margin-top: 3%;\n    }\n    .list-btn2{\n      margin-left: 20px;\n    }\n  }\n  \n  @media screen and (max-width:512px){\n    .search-1{\n      display: flex !important;\n    flex-direction: column-reverse !important;\n    }\n    .id-input{\n      width: 65%;\n    }\n    input.sub-input {\n      width: 35%;\n      background: #2ba2f2;\n      color: white;\n      display: inline-block;\n      margin-top: 0px;\n  }\n  .list-btn1 {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    margin-top: 10px;\n  }\n  .list-btn2 {\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10px;\n    margin-bottom: 20px;\n    display: block;\n  }\n  }\n  \n  @media screen and (max-width:1025px){\n    .list-btn1 {\n      font-size: 12px;\n      width: 170px;\n  }\n  .list-btn2 {\n    font-size: 12px;\n    width: 170px;\n  }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL3NlYXJjaC1wcm9wZXJ0aWVzL3NlYXJjaC1wcm9wZXJ0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGNBQWM7RUFDaEI7O0VBR0E7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDBCQUEwQjtFQUM1Qjs7RUFFQTtHQUNDLHdCQUF3Qjs7RUFFekI7O0VBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxXQUFXO0lBQ1gsOEJBQThCO0lBQzlCLGVBQWU7RUFDakI7O0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLDJDQUEyQztJQUMzQyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCOztFQUNBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsVUFBVTtJQUNWLDBHQUEwRztJQUMxRyxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjs7RUFFdkI7O0VBRUE7OztLQUdHOztFQUVIO0lBQ0UsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsWUFBWTtFQUNkOztFQUdBO0lBQ0U7TUFDRSxxQkFBcUI7TUFDckIscUJBQXFCO01BQ3JCLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGlCQUFpQjtJQUNuQjtFQUNGOztFQUNBO0lBQ0U7TUFDRSx3QkFBd0I7SUFDMUIseUNBQXlDO0lBQ3pDO0lBQ0E7TUFDRSxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7TUFDVixtQkFBbUI7TUFDbkIsWUFBWTtNQUNaLHFCQUFxQjtNQUNyQixlQUFlO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0VBQ2hCO0VBQ0E7O0VBQ0E7SUFDRTtNQUNFLGVBQWU7TUFDZixZQUFZO0VBQ2hCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsWUFBWTtFQUNkO0VBQ0EiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvd29yay1zcGFjZS1kYXNoYm9hcmQvc2VhcmNoLXByb3BlcnRpZXMvc2VhcmNoLXByb3BlcnRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0aW5nLTEgc2VsZWN0e1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDsgXG4gIH1cbiAgXG4gIC5saXN0aW5nLTEgaW5wdXR7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4OyBcbiAgfVxuICBcbiAgLmxpc3QtZm9ybXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDI1JSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDMlO1xuICB9XG4gIFxuICBcbiAgI3BhbmVsLCAjZmxpcCB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlZWNjOyAqL1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjM2MzYzM7XG4gIH1cbiAgXG4gICNwYW5lbCB7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgdGV4dC1hbGlnbjpsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIC5maWx0ZXJ7XG4gICBwYWRkaW5nOjVweCAwICFpbXBvcnRhbnQ7XG4gIFxuICB9XG4gIFxuICAuY3VzdG9tLXJhZGlvcyBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmN1c3RvbS1yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cbiAgLmN1c3RvbS1yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdICsgbGFiZWwgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IC0xcHggNHB4IDAgMDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI0ZGRkZGRjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMzMpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgfVxuICAuY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0gKyBsYWJlbCBzcGFuIGltZyB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4gIH1cbiAgLmN1c3RvbS1yYWRpb3MgaW5wdXRbdHlwZT1cInJhZGlvXCJdI2NvbG9yLTEgKyBsYWJlbCBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmVjYzcxO1xuICB9XG4gIFxuICAuY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl0jY29sb3ItMiArIGxhYmVsIHNwYW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzE7XG4gIH1cbiAgXG4gIC5jdXN0b20tcmFkaW9zIGlucHV0W3R5cGU9XCJyYWRpb1wiXSNjb2xvci0zICsgbGFiZWwgc3BhbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJlY2M3MTtcbiAgfVxuICAuY3VzdG9tLXJhZGlvcyBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsIHNwYW4ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzI0MjUxOC9jaGVjay1pY24uc3ZnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBcbiAgfVxuICBcbiAgLyogLnNlYXJjaC1yZXN1bHRzIHtcbiAgICBoZWlnaHQ6IDEwMHJlbTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICB9ICovXG4gIFxuICAubGFiZWwtaW5mb3tcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgfVxuICBcbiAgXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OXB4KXtcbiAgICAubGlzdC1mb3Jte1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50OztcbiAgICAgIG1hcmdpbi10b3A6IDMlO1xuICAgIH1cbiAgICAubGlzdC1idG4ye1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxuICB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTEycHgpe1xuICAgIC5zZWFyY2gtMXtcbiAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmlkLWlucHV0e1xuICAgICAgd2lkdGg6IDY1JTtcbiAgICB9XG4gICAgaW5wdXQuc3ViLWlucHV0IHtcbiAgICAgIHdpZHRoOiAzNSU7XG4gICAgICBiYWNrZ3JvdW5kOiAjMmJhMmYyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICB9XG4gIC5saXN0LWJ0bjEge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICB9XG4gIC5saXN0LWJ0bjIge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgfVxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMjVweCl7XG4gICAgLmxpc3QtYnRuMSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB3aWR0aDogMTcwcHg7XG4gIH1cbiAgLmxpc3QtYnRuMiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIHdpZHRoOiAxNzBweDtcbiAgfVxuICB9Il19 */");

/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/search-properties/search-properties.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/search-properties/search-properties.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: SearchPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPropertiesComponent", function() { return SearchPropertiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _workspace_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workspace.service */ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");




let SearchPropertiesComponent = class SearchPropertiesComponent {
    constructor(workspaceservice, commonservice) {
        this.workspaceservice = workspaceservice;
        this.commonservice = commonservice;
        this.accessable = false;
    }
    ngOnInit() {
        this.getLead();
    }
    getLead() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            if (res.id == null || res.id == undefined) {
                this.accessable = false;
            }
            else {
                this.accessable = true;
                this.leadDetails = res;
                this.properties_Search_details();
            }
        });
    }
    properties_Search_details() {
        let obj = {
            area: "",
            bedroom: "",
            category: "",
            den: "",
            lower_price: "0",
            lower_size: "0",
            mls_id: "",
            municipality: "",
            page: 1,
            property_for: "",
            property_type: "Commercial",
            upper_price: "10000000",
            upper_size: "100000"
        };
        this.workspaceservice.properties_Search(obj).subscribe((res) => {
            this.properties = res.properties;
            this.page = res.page;
            this.pages = res.total_pages;
        });
    }
};
SearchPropertiesComponent.ctorParameters = () => [
    { type: _workspace_service__WEBPACK_IMPORTED_MODULE_2__["WorkspaceService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] }
];
SearchPropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-properties',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-properties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/search-properties/search-properties.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-properties.component.css */ "./src/app/pages/dashboard/work-space-dashboard/search-properties/search-properties.component.css")).default]
    })
], SearchPropertiesComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/task/task.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/task/task.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".appoinment-list\n  {\n  \tpadding: 10px;\n  \t/* height: 500px; */\n  \toverflow-x: hidden;\n  \toverflow-y: hidden;\n  }\n  .appoinment-list h2\n  {\n  \tfont-size: 20px;\n  \tfont-weight: 600;\n  \tcolor: black;\t\n  }\n  .appoinment-list h4{\n  \tfont-size: 16px;\n  \tfont-weight: 550;\n  \tcolor: black;\n  \tmargin-top: -5px;\n  }\n  .appoinment-list p{\n  \tfont-size: 16px;\n  \tfont-weight: 550;\n  \tcolor: grey;\n  \tline-height: 18px;\n  \tmargin-top: -5px;\n  \t\n  }\n  .appoinment-list span{\n  \tcolor: lightgrey;\n  \tfont-size: 25px;\n  \tcursor: pointer;\n  \tdisplay: block;\n  }\n  .appoinment-form2{\n\tpadding:0px 40px;\n\tborder-left: 1px solid lightgrey;\n\theight: 500px;\n }\n  .appoinment-form2 h2\n  {\n  \tfont-size: 20px;\n  \tfont-weight: 600;\n  \tcolor: black;\t\n  \t\n  \tbox-sizing: border-box;\n  }\n  .appoinment-form2 p{\n  \tfont-size: 16px;\n  \tfont-weight: 550;\n  \tcolor: grey;\n  \tline-height: 18px;\n  \tmargin-top: -5px;\n  \t\n  }\n  .appoinment-form2 input[type=submit]{\n  \tbackground: #00b8ff;\n  \tcolor: white;\n  \t\n  }\n  .activeTask{\n     background-color:#eee;\n  }\n  hr{\n\t  margin-top:5px !important; \n\t  margin-bottom:5px !important; \n  }\n  @media(max-width: 769px){\n\t.appoinment-form2{\n \tpadding:10px;\n \tborder-left: none;\n \theight: 400px;\n \tpadding-top: 30px;\n \t}\n \t.appoinment-list\n  {\n  \tpadding: 10px;\n  \t/* height: 400px; */\n  \toverflow-x: hidden;\n  \toverflow-y: scroll;\n  }\n}\n  .no-task{\n\tmargin-top:20px;border:1px solid #ccc;\n}\n  @media(max-width:1025px){\n\t\n\t.appoinment-form2[_ngcontent-c5] {\n\t\t/* padding: 0px 40px; */\n\t\tborder-left:none;\n\t\theight: 500px;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL3Rhc2svdGFzay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHLGFBQWE7R0FDYixtQkFBbUI7R0FDbkIsa0JBQWtCO0dBQ2xCLGtCQUFrQjtFQUNuQjtFQUNBOztHQUVDLGVBQWU7R0FDZixnQkFBZ0I7R0FDaEIsWUFBWTtFQUNiO0VBQ0E7R0FDQyxlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLFlBQVk7R0FDWixnQkFBZ0I7RUFDakI7RUFDRDtHQUNFLGVBQWU7R0FDZixnQkFBZ0I7R0FDaEIsV0FBVztHQUNYLGlCQUFpQjtHQUNqQixnQkFBZ0I7O0VBRWpCO0VBQ0Q7R0FDRSxnQkFBZ0I7R0FDaEIsZUFBZTtHQUNmLGVBQWU7R0FDZixjQUFjO0VBQ2Y7RUFHRDtDQUNBLGdCQUFnQjtDQUNoQixnQ0FBZ0M7Q0FDaEMsYUFBYTtDQUNiO0VBRUM7O0dBRUMsZUFBZTtHQUNmLGdCQUFnQjtHQUNoQixZQUFZOztHQUVaLHNCQUFzQjtFQUN2QjtFQUNBO0dBQ0MsZUFBZTtHQUNmLGdCQUFnQjtHQUNoQixXQUFXO0dBQ1gsaUJBQWlCO0dBQ2pCLGdCQUFnQjs7RUFFakI7RUFDQTtHQUNDLG1CQUFtQjtHQUNuQixZQUFZOztFQUViO0VBQ0E7S0FDRyxxQkFBcUI7RUFDeEI7RUFFQTtHQUNDLHlCQUF5QjtHQUN6Qiw0QkFBNEI7RUFDN0I7RUFFRjtDQUNDO0VBQ0MsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCO0VBQ0E7O0dBRUMsYUFBYTtHQUNiLG1CQUFtQjtHQUNuQixrQkFBa0I7R0FDbEIsa0JBQWtCO0VBQ25CO0FBQ0Y7RUFFQTtDQUNDLGVBQWUsQ0FBQyxxQkFBcUI7QUFDdEM7RUFDQTs7Q0FFQztFQUNDLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsYUFBYTtDQUNkO0FBQ0QiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvd29yay1zcGFjZS1kYXNoYm9hcmQvdGFzay90YXNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwb2lubWVudC1saXN0XG4gIHtcbiAgXHRwYWRkaW5nOiAxMHB4O1xuICBcdC8qIGhlaWdodDogNTAwcHg7ICovXG4gIFx0b3ZlcmZsb3cteDogaGlkZGVuO1xuICBcdG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgfVxuICAuYXBwb2lubWVudC1saXN0IGgyXG4gIHtcbiAgXHRmb250LXNpemU6IDIwcHg7XG4gIFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgXHRjb2xvcjogYmxhY2s7XHRcbiAgfVxuICAuYXBwb2lubWVudC1saXN0IGg0e1xuICBcdGZvbnQtc2l6ZTogMTZweDtcbiAgXHRmb250LXdlaWdodDogNTUwO1xuICBcdGNvbG9yOiBibGFjaztcbiAgXHRtYXJnaW4tdG9wOiAtNXB4O1xuICB9XG4gLmFwcG9pbm1lbnQtbGlzdCBwe1xuICBcdGZvbnQtc2l6ZTogMTZweDtcbiAgXHRmb250LXdlaWdodDogNTUwO1xuICBcdGNvbG9yOiBncmV5O1xuICBcdGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBcdG1hcmdpbi10b3A6IC01cHg7XG4gIFx0XG4gIH1cbiAuYXBwb2lubWVudC1saXN0IHNwYW57XG4gIFx0Y29sb3I6IGxpZ2h0Z3JleTtcbiAgXHRmb250LXNpemU6IDI1cHg7XG4gIFx0Y3Vyc29yOiBwb2ludGVyO1xuICBcdGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cblxuIC5hcHBvaW5tZW50LWZvcm0ye1xuXHRwYWRkaW5nOjBweCA0MHB4O1xuXHRib3JkZXItbGVmdDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcblx0aGVpZ2h0OiA1MDBweDtcbiB9XG5cbiBcdC5hcHBvaW5tZW50LWZvcm0yIGgyXG4gIHtcbiAgXHRmb250LXNpemU6IDIwcHg7XG4gIFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgXHRjb2xvcjogYmxhY2s7XHRcbiAgXHRcbiAgXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIC5hcHBvaW5tZW50LWZvcm0yIHB7XG4gIFx0Zm9udC1zaXplOiAxNnB4O1xuICBcdGZvbnQtd2VpZ2h0OiA1NTA7XG4gIFx0Y29sb3I6IGdyZXk7XG4gIFx0bGluZS1oZWlnaHQ6IDE4cHg7XG4gIFx0bWFyZ2luLXRvcDogLTVweDtcbiAgXHRcbiAgfVxuICAuYXBwb2lubWVudC1mb3JtMiBpbnB1dFt0eXBlPXN1Ym1pdF17XG4gIFx0YmFja2dyb3VuZDogIzAwYjhmZjtcbiAgXHRjb2xvcjogd2hpdGU7XG4gIFx0XG4gIH1cbiAgLmFjdGl2ZVRhc2t7XG4gICAgIGJhY2tncm91bmQtY29sb3I6I2VlZTtcbiAgfVxuXG4gIGhye1xuXHQgIG1hcmdpbi10b3A6NXB4ICFpbXBvcnRhbnQ7IFxuXHQgIG1hcmdpbi1ib3R0b206NXB4ICFpbXBvcnRhbnQ7IFxuICB9XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OXB4KXtcblx0LmFwcG9pbm1lbnQtZm9ybTJ7XG4gXHRwYWRkaW5nOjEwcHg7XG4gXHRib3JkZXItbGVmdDogbm9uZTtcbiBcdGhlaWdodDogNDAwcHg7XG4gXHRwYWRkaW5nLXRvcDogMzBweDtcbiBcdH1cbiBcdC5hcHBvaW5tZW50LWxpc3RcbiAge1xuICBcdHBhZGRpbmc6IDEwcHg7XG4gIFx0LyogaGVpZ2h0OiA0MDBweDsgKi9cbiAgXHRvdmVyZmxvdy14OiBoaWRkZW47XG4gIFx0b3ZlcmZsb3cteTogc2Nyb2xsO1xuICB9XG59XG5cbi5uby10YXNre1xuXHRtYXJnaW4tdG9wOjIwcHg7Ym9yZGVyOjFweCBzb2xpZCAjY2NjO1xufVxuQG1lZGlhKG1heC13aWR0aDoxMDI1cHgpe1xuXHRcblx0LmFwcG9pbm1lbnQtZm9ybTJbX25nY29udGVudC1jNV0ge1xuXHRcdC8qIHBhZGRpbmc6IDBweCA0MHB4OyAqL1xuXHRcdGJvcmRlci1sZWZ0Om5vbmU7XG5cdFx0aGVpZ2h0OiA1MDBweDtcblx0fVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/task/task.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/task/task.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var _workspace_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../workspace.service */ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let TaskComponent = class TaskComponent {
    constructor(commonservice, workspaceservice, formBuilder) {
        this.commonservice = commonservice;
        this.workspaceservice = workspaceservice;
        this.formBuilder = formBuilder;
        this.accessable = false;
    }
    ngOnInit() {
        this.fromBuild();
        this.get_Leads();
        this.task_id = 0;
    }
    get_Leads() {
        this.commonservice.leadFlagData.subscribe((res) => {
            console.log(res);
            if (res.id == null || res.id == undefined) {
                this.accessable = false;
            }
            else {
                this.accessable = true;
                this.leadDetails = res;
                this.lead_id = res.id;
                this.agent_id = res.agent_id;
                this.taskLead();
            }
        });
    }
    fromBuild() {
        this.taskForm = this.formBuilder.group({
            task_description: '',
            task_completion_date: '',
        });
    }
    taskLead() {
        let obj = {
            lead_id: this.lead_id,
            page: '1',
            per_page: '10'
        };
        this.workspaceservice.task_Lead(obj).subscribe((res) => {
            console.log(res);
            this.tasks = res;
            if (this.tasks.length >= 0) {
            }
            else {
                this.tasks = [];
            }
        });
    }
    submitTask() {
        if (this.taskForm.value.task_description == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Warning',
                text: "Task Description can't be blank!",
                type: 'warning'
            });
            return;
        }
        else if (this.taskForm.value.task_completion_date == '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Warning',
                text: "Task completion Date can't be blank!",
                type: 'warning'
            });
            return;
        }
        if (this.task_id == 0) {
            let obj = {
                lead_id: this.lead_id,
                task: this.taskForm.value.task_description,
                task_completion_date: this.taskForm.value.task_completion_date
            };
            this.workspaceservice.addTask(obj).subscribe((res) => {
                // console.log(data)
                if (res.code == 200) {
                    this.tasks.push(res.task);
                    this.taskForm.reset();
                    res.notify_users.forEach(ele => {
                        let fireobj = {
                            lead_id: this.lead_id,
                            notification_type: "Task",
                            notification_type_id: res.task.id,
                            // sender_user_id: suserId,
                            noti_id: ele.noti_id,
                            receiver_id: ele.user_id
                        };
                        // this.fb.newUserNotification(fireobj)
                    });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Task Added',
                        text: "Task Added Successfully!",
                        type: 'success'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Warning',
                        text: res.errors,
                        type: 'error'
                    });
                }
            });
        }
        else {
            let dataobj = {
                lead_id: this.lead_id,
                task: this.taskForm.value.task_description,
                task_completion_date: this.taskForm.value.task_completion_date,
                lead_task_id: this.task_id
            };
            this.workspaceservice.editTask(dataobj).subscribe((res) => {
                if (res.code == 200) {
                    const index = this.tasks.findIndex(item => item.id === this.task_id);
                    this.tasks[index] = res.task;
                    this.task_id = 0;
                    this.taskForm.reset();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Task Edit',
                        text: "Task Edit Successfully!",
                        type: 'success'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Warning',
                        text: res.errors,
                        type: 'error'
                    });
                }
            });
        }
    }
    updateTask(task) {
        // console.log(task)
        this.taskForm = this.formBuilder.group({
            task_description: task.task,
            task_completion_date: task.task_completion_date,
        });
        this.task_id = task.id;
    }
    removeTask(task_id) {
        let self = this;
        sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
            title: "Are you sure?",
            text: "You will not be able to recover this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "Yes, delete it!"
        }).then(function (result) {
            if (result.value) {
                self.removePerform(task_id);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Cancelled", "Your Task is safe.", "error");
            }
        });
    }
    removePerform(task_id) {
        let obj = {
            lead_id: this.lead_id,
            lead_task_id: task_id
        };
        this.workspaceservice.removeTask(obj).subscribe((res) => {
            if (res.code == 200) {
                const index = this.tasks.findIndex(item => item.id === task_id);
                this.tasks.splice(index, 1);
                this.taskForm.reset();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: "Task Removed Successfully",
                    type: 'success'
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
    performTask(task_id, action_for) {
        this.performTaskAction(task_id, action_for);
    }
    performTaskAction(task_id, action_for) {
        let obj = {
            lead_id: this.lead_id,
            task_id: task_id,
            key: action_for
        };
        this.workspaceservice.taskAction(obj).subscribe((res) => {
            if (res.code == 200) {
                const index = this.tasks.findIndex(item => item.id === task_id);
                this.tasks[index] = res.task;
                if (action_for == 'accept') {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Task',
                        text: "Task Confirmed",
                        type: 'success'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Task',
                        text: "Task Cancelled",
                        type: 'success'
                    });
                }
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
};
TaskComponent.ctorParameters = () => [
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] },
    { type: _workspace_service__WEBPACK_IMPORTED_MODULE_3__["WorkspaceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
TaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./task.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/task/task.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./task.component.css */ "./src/app/pages/dashboard/work-space-dashboard/task/task.component.css")).default]
    })
], TaskComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/work-spaces/work-spaces.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/work-spaces/work-spaces.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".leads-container {\n  padding-left: 0;\n  margin-top: 0%;\n  padding-top: 0px;\n  height: auto;\n  max-height: 600px;\n  box-sizing: border-box;\n  overflow-y: auto;\n  overflow-x: hidden;\n  white-space: nowrap;\n}\n\n.active{\n    background-color: #eee;\n    border: 1px solid rgb(209, 204, 204);\n}\n\nform.search input[type=text] {\n    padding: 3px;\n    font-size: 17px;\n    border: 1px solid #ccc;\n    float: left;\n    width: 70%;\n    border-radius: 0px;\n    height: 36px;\n}\n\nform.search button {\n    float: left;\n    width: 20%;\n    padding: 5px;\n    background: #2196F3;\n    color: white;\n    font-size: 17px;\n    border: 1px solid #2196F3;\n    border-left: none; /* Prevent double borders */\n    cursor: pointer;\n}\n\nh2.main-heading {\n  font-size: 18px;\n}\n\np.sub-heading {\n  font-size: 14px;\n}\n\nh2.link-heading {\n  font-size: 16px;\n}\n\ndiv.link-subheading {\n  font-size: 13px;\n  color: grey;\n  margin-top: -5px;\n  font-weight: 550;\n}\n\n.arrow{\n  margin-top: 9px;\n}\n\n/* Tabs Buttons CSS */\n\n.work-tab {\n    padding: 10px;\n    overflow-x: scroll;\n    white-space: nowrap;\n}\n\n@media(max-width:1415px){\n  .work-tab {\n    padding: 10px;\n  \n  }\n}\n\n@media(min-width:1200px){\n  .work-tab {\n    overflow-x: hidden;\n  }\n}\n\n.work-tab a{\n    \n    padding: 10px;\n    margin-right: 10px;\n    color: black;\n    font-size: 16px;\n    background:lightgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3dvcmstc3BhY2UtZGFzaGJvYXJkL3dvcmstc3BhY2VzL3dvcmstc3BhY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGlCQUFpQixFQUFFLDJCQUEyQjtJQUM5QyxlQUFlO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQSxxQkFBcUI7O0FBRXJCO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBQ0E7RUFDRTtJQUNFLGFBQWE7O0VBRWY7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC93b3JrLXNwYWNlLWRhc2hib2FyZC93b3JrLXNwYWNlcy93b3JrLXNwYWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlYWRzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogMCU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWF4LWhlaWdodDogNjAwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDksIDIwNCwgMjA0KTtcbn1cblxuZm9ybS5zZWFyY2ggaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA3MCU7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgIGhlaWdodDogMzZweDtcbn1cblxuZm9ybS5zZWFyY2ggYnV0dG9uIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICB3aWR0aDogMjAlO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NkYzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIxOTZGMztcbiAgICBib3JkZXItbGVmdDogbm9uZTsgLyogUHJldmVudCBkb3VibGUgYm9yZGVycyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuaDIubWFpbi1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG5wLnN1Yi1oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5oMi5saW5rLWhlYWRpbmcge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbmRpdi5saW5rLXN1YmhlYWRpbmcge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmV5O1xuICBtYXJnaW4tdG9wOiAtNXB4O1xuICBmb250LXdlaWdodDogNTUwO1xufVxuXG4uYXJyb3d7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cblxuLyogVGFicyBCdXR0b25zIENTUyAqL1xuXG4ud29yay10YWIge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWVkaWEobWF4LXdpZHRoOjE0MTVweCl7XG4gIC53b3JrLXRhYiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgXG4gIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDoxMjAwcHgpe1xuICAud29yay10YWIge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgfVxufVxuXG4ud29yay10YWIgYXtcbiAgICBcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6bGlnaHRncmV5O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/work-spaces/work-spaces.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/work-spaces/work-spaces.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: WorkSpacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkSpacesComponent", function() { return WorkSpacesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _workspace_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workspace.service */ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts");
/* harmony import */ var src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/common.service */ "./src/app/core/services/common.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/local-storage.service */ "./src/app/core/services/local-storage.service.ts");








let WorkSpacesComponent = class WorkSpacesComponent {
    constructor(router, route, formBuilder, workSpaceService, commonservice, firebaseDb, localStorageService) {
        this.router = router;
        this.route = route;
        this.formBuilder = formBuilder;
        this.workSpaceService = workSpaceService;
        this.commonservice = commonservice;
        this.firebaseDb = firebaseDb;
        this.localStorageService = localStorageService;
        this.statusValues = [{ name: "All Clients", value: "all" }, { name: "Active Clients", value: "all" }, { name: "Closing on Process", value: "all" }, { name: "Closing Deals", value: "closed" }, { name: "Clients On Hold", value: "On Hold" }];
        this.activeLeads = [];
        this.leadArray = [];
        this.agentId = 101;
        this.noLeads = false;
    }
    ngOnInit() {
        this.searchForm = this.formBuilder.group({
            lead_title: ''
        });
        this.leadservice();
        this.changePage();
    }
    leadservice() {
        this.workSpaceService.lead().subscribe((res) => {
            console.log(res);
            this.leadArray = res.leads; // Fetching Server saved leads data 
            this.selectedLead = this.leadArray[0]; // Making first lead as selected default
            console.log(this.selectedLead);
            // --------------------------------------------
            this.localStorageService.setItem('selectedLead', JSON.stringify(this.selectedLead));
            this.commonservice.changeLeadFlag(this.selectedLead);
            // --------------------------------------------
            this.onlineLeads().valueChanges().subscribe(leads => {
                console.log(leads);
                this.activeLeads = [];
                let onlineSavedLeads = [];
                if (leads.length > 0) {
                    leads.forEach(ele => {
                        var index = this.leadArray.findIndex(i => (i.advertiseType == ele.advertiseType && i.advertiseId == ele.advertiseId && i.customer_token == ele.customer_token));
                        console.log(index);
                        if (index >= 0) {
                            // Make saved lead Online if this lead is coming online
                            this.leadArray[index].online = true;
                            onlineSavedLeads.push(this.leadArray[index]); //Saving online saved leads data
                        }
                        else {
                            let alreadyExistsIndex = this.activeLeads.findIndex(a => (a.advertiseType == ele.advertiseType && a.advertiseId == ele.advertiseId && a.customer_token == ele.customer_token));
                            if (alreadyExistsIndex < 0) {
                                this.activeLeads.push(ele);
                            }
                        }
                    });
                }
                // Offline saved leads if it is not online now
                this.leadArray.forEach(sl => {
                    let isOnline = onlineSavedLeads.findIndex(l => (l.advertiseId == sl.advertiseId && l.advertiseType == sl.advertiseType && l.customer_token == sl.customer_token));
                    if (isOnline < 0) {
                        sl.online = false;
                    }
                });
                if (this.leadArray.length == 0) {
                    if (this.activeLeads.length == 0) {
                        this.noLeads = true;
                        this.selectedLead = undefined;
                        this.selectLeadData(this.selectedLead);
                    }
                    else {
                        if (this.selectedLead == undefined || this.selectedLead == null) {
                            this.selectedLead = this.activeLeads[0];
                            this.selectLeadData(this.selectedLead);
                        }
                    }
                }
            });
        });
        // Online and saved lead message count which are not active right now
        this.readAgentActivity().valueChanges().subscribe(eve => {
            let onlineIndex = this.activeLeads.findIndex(l => (l.advertiseId == eve[0].advertiseId && l.advertiseType == eve[0].advertiseType && l.customer_token == eve[0].customer_token));
            if (onlineIndex >= 0) {
                let oldMsg = (this.activeLeads[onlineIndex].msg == undefined || this.activeLeads[onlineIndex].msg == 'undefined') ? 0 : parseInt(this.activeLeads[onlineIndex].msg);
                if (this.selectedLead.advertiseId == eve[0].advertiseId && this.selectedLead.advertiseType == eve[0].advertiseType && this.selectedLead.customer_token == eve[0].customer_token) {
                    this.activeLeads[onlineIndex].msg = 0;
                }
                else {
                    this.activeLeads[onlineIndex].msg = oldMsg + 1;
                }
            }
            else {
                let savedIndex = this.leadArray.findIndex(l => (l.advertiseId == eve[0].advertiseId && l.advertiseType == eve[0].advertiseType && l.customer_token == eve[0].customer_token));
                if (savedIndex >= 0) {
                    let oldMsgSaved = (this.leadArray[savedIndex].msg == undefined || this.leadArray[savedIndex].msg == 'undefined') ? 0 : parseInt(this.leadArray[savedIndex].msg);
                    if (this.selectedLead.advertiseId == eve[0].advertiseId && this.selectedLead.advertiseType == eve[0].advertiseType && this.selectedLead.customer_token == eve[0].customer_token) {
                        this.leadArray[savedIndex].msg = 0;
                    }
                    else {
                        this.leadArray[savedIndex].msg = oldMsgSaved + 1;
                    }
                }
            }
        });
    }
    selectLeadData(lead) {
        this.selectedLead = lead;
        this.localStorageService.setItem('selectedLead', JSON.stringify(this.selectedLead));
        this.commonservice.changeLeadFlag(this.selectedLead);
        // Reset message counter of lead
        let onlineIndex = this.activeLeads.findIndex(l => (l.advertiseId == lead.advertiseId && l.advertiseType == lead.advertiseType && l.customer_token == lead.customer_token));
        if (onlineIndex >= 0) {
            this.activeLeads[onlineIndex].msg = 0;
        }
        else {
            let savedIndex = this.leadArray.findIndex(l => (l.advertiseId == lead.advertiseId && l.advertiseType == lead.advertiseType && l.customer_token == lead.customer_token));
            if (savedIndex >= 0) {
                this.leadArray[savedIndex].msg = 0;
            }
        }
    }
    isSelected(currentLead) {
        return (this.selectedLead.advertiseId == currentLead.advertiseId && this.selectedLead.advertiseType == currentLead.advertiseType && this.selectedLead.customer_token == currentLead.customer_token);
    }
    changePage() {
        var root = location.href.split("/")[location.href.split("/").length - 1];
        var root_url = root.split('?');
        if (root_url[0] == 'appointments') {
            this.router.navigate(["/agent/dashboard/lead/appointments"]);
        }
        else if (root_url[0] == "tasks") {
            this.router.navigate(["/agent/dashboard/lead/tasks"]);
        }
        else if (root_url[0] == "documents") {
            this.router.navigate(["/agent/dashboard/lead/documents"]);
        }
        else if (root_url[0] == "chats") {
            this.router.navigate(["/agent/dashboard/lead/chats"]);
        }
        else if (root_url[0] == "search") {
            this.router.navigate(["/agent/dashboard/lead/search"]);
        }
        else if (root_url[0] == "properties") {
            this.router.navigate(["/agent/dashboard/lead/properties"]);
        }
        else if (root_url[0] == "members") {
            this.router.navigate(["/agent/dashboard/lead/members"]);
        }
        else if (root_url[0] == "tasks") {
            this.router.navigate(["/invite/dashboard/lead/invite"]);
        }
        else if (root_url[0] == "tasks") {
            this.router.navigate(["/agent/dashboard/lead/tasks"]);
        }
        else if (Number(root_url[0])) {
            this.router.navigate(["/agent/dashboard/lead/property/", parseInt(root_url[0])]);
        }
        else {
            this.router.navigate(["/agent/dashboard/lead/details"]);
        }
    }
    onChangeStatus(event) {
        this.selectedStatus = event.target.value;
        this.searchRequest();
    }
    searchRequest() {
    }
    onlineLeads() {
        return this.firebaseDb.list("agent_" + this.agentId + "/onlineLeads", ref => ref);
    }
    readAgentActivity() {
        let messagePath = "agent_" + this.agentId + "/message_activity/customer/";
        return this.firebaseDb.list(messagePath, ref => ref);
    }
};
WorkSpacesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _workspace_service__WEBPACK_IMPORTED_MODULE_4__["WorkspaceService"] },
    { type: src_app_core_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"] },
    { type: src_app_core_services_local_storage_service__WEBPACK_IMPORTED_MODULE_7__["LocalStorageService"] }
];
WorkSpacesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-work-spaces',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./work-spaces.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/work-space-dashboard/work-spaces/work-spaces.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./work-spaces.component.css */ "./src/app/pages/dashboard/work-space-dashboard/work-spaces/work-spaces.component.css")).default]
    })
], WorkSpacesComponent);



/***/ }),

/***/ "./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/dashboard/work-space-dashboard/workspace.service.ts ***!
  \***************************************************************************/
/*! exports provided: WorkspaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceService", function() { return WorkspaceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api.service */ "./src/app/core/services/api.service.ts");
/* harmony import */ var src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config/backend-url.config */ "./src/app/config/backend-url.config.ts");






let WorkspaceService = class WorkspaceService {
    constructor(apiservice) {
        this.apiservice = apiservice;
    }
    lead() {
        return this.apiservice.get(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].leads).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    properties_details(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].properties, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    properties_Search(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].propertiesSearch, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    task_Lead(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].taskLead, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    documents_Lead(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].documents, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    appoinments_Lead(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].appoinments, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    member_Lead(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].member, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    inviteFriendforPorperty(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].invite, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    propertyDetail(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].propertshow, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    getPropertyNotes(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].notesProperty, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    addPropertyNote(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].addproperty, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    addFavProperty(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].favoriteproperty, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    removeProperty(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].removeleadproperty, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    addTask(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].createtasklist, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    editTask(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].edittasklist, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    removeTask(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].removetasklist, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    taskAction(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].taskactionurl, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    addDocument(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].uploaddocuments, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    removeDocument(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].removedocuments, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    addAppointment(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].createappoinments, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    removeAppointment(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].removeappoinment, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    editAppointment(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].editappoinments, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    appointmentAction(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].confirmappoinment, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
    makePermanentUser(data) {
        return this.apiservice.post(src_app_config_backend_url_config__WEBPACK_IMPORTED_MODULE_5__["BACKEND_URL_CONFIG"].makeClientPayment, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => {
            if (res) {
            }
            return res;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            return rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"];
        }));
    }
};
WorkspaceService.ctorParameters = () => [
    { type: src_app_core_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
WorkspaceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WorkspaceService);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#myBtn {\n    display: none;\n    /* Hidden by default */\n    position: fixed;\n    /* Fixed/sticky position */\n    bottom: 20px;\n    /* Place the button at the bottom of the page */\n    right: 40px;\n    /* Place the button 30px from the right */\n    z-index: 99;\n    /* Make sure it does not overlap */\n    border: none;\n    /* Remove borders */\n    outline: none;\n    /* Remove outline */\n    background-color: grey;\n    /* Set a background color */\n    color: white;\n    /* Text color */\n    cursor: pointer;\n    /* Add a mouse pointer on hover */\n    padding: 15px;\n    /* Some padding */\n    border-radius: 53px;\n    font-size: 18px;\n    width: 50px;\n    height: 50px;\n}\n\n#myBtn:hover {\n    background-color: #555;\n    /* Add a dark-grey background on hover */\n}\n\nbody {\n    padding: 0px;\n    margin: 0px;\n    overflow-x: hidden;\n    font-family: 'Roboto', sans-serif;\n}\n\n.container {\n    width: 90%;\n}\n\n.header-1 {\n    padding-left: 20px;\n    padding-right: 20px;\n    padding-top: 12px;\n}\n\n.topbar {\n    float: right;\n    height: 30px;\n}\n\n.topbar ul li {\n    margin-right: 20px;\n    display: inline-block;\n}\n\n.topbar ul li a {\n    color: grey;\n    font-size: 16px;\n    font-weight: 500;\n}\n\nli.suscribe {\n    background: red;\n    padding: 9px 20px 8px 20px;\n    border-radius: 5px;\n    font-size: 14px;\n}\n\n.suscribe a:hover {\n    text-decoration: none;\n}\n\n.navbar {\n    margin-top: 0%;\n    margin-bottom: 10px;\n}\n\n.navbar .navbar-nav li a {\n    font-size: 16px;\n    color: grey;\n    font-weight: 500;\n    text-transform: uppercase;\n}\n\n.navbar .navbar-nav li a:hover {\n    color: black;\n    background: transparent;\n}\n\n.navbar .navbar-nav li a:focus {\n    color: black;\n    background: transparent;\n}\n\n.navbar .navbar-nav li a.active {\n    color: black;\n}\n\n.navbar .navbar-nav li {\n    margin-top: 10px;\n}\n\n.navbar .navbar-brand img {\n    margin-top: -20px;\n}\n\n@media (max-width: 512px) {\n    .navbar[_ngcontent-c2] .navbar-collapse[_ngcontent-c2] {\n        margin-top: 5px;\n        width: 100%;\n        /* float: right; */\n        text-align: right;\n    }\n}\n\n@media(min-width:1025px) {\n    .one {\n        display: none;\n    }\n    .two {\n        display: none;\n    }\n}\n\n#myCarousel img.slide-img{\n\twidth: 100%;height: 680px;\n}\n\n@media(max-width: 769px){\n\t.navbar .navbar-right{\n\t\tmargin-top: 10%;\n\t}\n\t#myCarousel img.slide-img{\n\twidth: 100%;height: 380px;\n\t}\n\t.navbar .navbar-brand img{\n\t\tmargin-top: -5px;\n\t}\n}\n\n.slideshow-container[_ngcontent-c3]   .caption[_ngcontent-c3] {\n\tposition: absolute;\n\tbottom: 100px !important;\n\tpadding: 10px;\n\twidth: 100%;\n}\n\n.slider h1{\n\tfont-size: 45px;\n\tcolor: white;\n\tfont-weight: 900;\n\ttext-shadow: 3px 0px white;\n\tletter-spacing: 3px;\n\tmargin-top: -15px;\n}\n\n.slider p{\n\tfont-size: 22px;\n\tcolor: white;\n\tfont-weight: 550;\n\topacity: .7;\n}\n\n.slider img{\n\tpadding-top: 10%;\n}\n\n@media(max-width: 769px){\n\t.slider h1{\n\tfont-size: 30px;\n\tcolor: white;\n\tfont-weight: 900;\n\ttext-shadow: none;\n\tletter-spacing: 0px;\n}\n.slider p{\n\tfont-size: 14px;\n\tcolor: white;\n\tfont-weight: 550;\n}\t\n}\n\n@media(min-width: 812px) and (max-width: 1025px){\n\t.slider h1{\n\tfont-size: 35px;\n\tcolor: white;\n\tfont-weight: 900;\n\t}\n\t.slider p{\n\t\tfont-size: 14px;\n\t\tcolor: white;\n\t\tfont-weight: 600;\n\t}\n}\n\n.second-section{\n\tbackground: #1F4785;\n\tpadding-top: 30px;\n\tpadding-bottom: 30px;\n}\n\n.second-section h4{\n\tcolor: white;\n\tfont-weight: 550;\n\tfont-size: 16px;\n\ttext-transform: uppercase;\n}\n\n.second-section p{\n\tcolor: white;\n\tfont-weight: 300;\n\tfont-size: 16px;\n\tmargin-top: -10px;\n\topacity: .7;\n\ttext-transform: uppercase;\n}\n\n.second-section img{\n\twidth: 40px;\n\theight: 40px;\n\tmargin-bottom: 15px;\n}\n\n.about{\n\tpadding-top: 50px;\n\tborder-bottom: 1px solid lightgrey;\t\n\tpadding-bottom: 20px;\n}\n\n.about h2 {\n    color: #1F4785;\n    font-size: 22px;\n    font-weight: 600;\n}\n\nhr {\n    border: none;\n    width: 30px;\n    background: red;\n    height: 4px;\n    border-radius: 5px;\n    text-align: left;\n    margin-top: 0px;\n}\n\n.about h4 {\n    color: #575555;\n    font-size: 26px;\n    font-weight: 100;\n}\n\n.about h1 {\n    color: black;\n    font-size: 35px;\n    font-weight: 900;\n    text-transform: uppercase;\n    margin-top: -10px;\n    /* text-shadow: 2px 1px black; */\n}\n\n.about p {\n    color: #979797;\n    line-height: 29px;\n    font-size: 20px;\n    margin-top: 27px;\n}\n\n.about-row{\n\tpadding-right: 50px;\n\tpadding-top: 30px;\n}\n\n@media(max-width:769px){\n\t.about h4 {\n\t\tfont-size: 24px;\n\t}\n\t.about-row{\n\t\tpadding-right: 50px;\n\t\tpadding-top: 10px;\n\t}\n\t.about h1 {\n\t\tcolor: black;\n\t\tfont-size: 22px;\n\t}\n}\n\n.why{\n\tpadding-top: 50px;\n\tpadding-bottom: 20px;\n}\n\n.why h2{\n\tcolor: #1F4785;\n\tfont-size: 22px;\n\tfont-weight: 600;\n}\n\n.why h4 {\n    color: #575555;\n    font-size: 26px;\n    font-weight: 200;\n}\n\n.why h1 {\n    color: black;\n    font-size: 35px;\n    font-weight: 600;\n    text-transform: uppercase;\n    margin-top: -4px;\n    /* text-shadow: 2px 1px black; */\n}\n\n.why p {\n    color: #979797;\n    line-height: 31px;\n    font-size: 20px;\n\tmargin-top: 27px;\n\tmargin-bottom: 20px;\n}\n\nF\n\n.why ul{\n\tmargin-top: 40px;\n\tpadding-left: 0px;\n}\n\n.why ul li {\n    font-size: 16px;\n    color: grey;\n    margin-top: 12px;\n\tlist-style: none;\n\tmargin-left: -39px;\n\tfont-weight: 300;\n}\n\n.why ul li:before {\n    /* Unicode bullet symbol */\n    content: '\\2022 ';\n    /* Bullet color */\n    color: red;\n    padding-right: 1.3em;\n}\n\n.why h3 {\n    color: black;\n    font-size: 35px;\n    font-weight: bold;\n    margin-bottom: 20px;\n}\n\n@media(max-width:769px){\n\t.why h3 {\n\t\tcolor: black;\n\t\tfont-size: 30px;\n\t\tfont-weight: bold;\n\t\tmargin-bottom: 10px;\n\t}\n\t.why h4 {\n\t\tcolor: #575555;\n\t\tfont-size: 18px;\n\t\tfont-weight: 200;\n\t}\n\t.why h1 {\n\t\tcolor: black;\n\t\tfont-size: 22px;\n\t\tfont-weight: 600;\n\t\ttext-transform: uppercase;\n\t\tmargin-top: -4px;\n\t}\n}\n\n.observe{\n\tmargin-top: 5%;\n\tborder-bottom: 1px solid lightgrey;\t\n\tpadding-bottom: 50px;\n}\n\n.first{\n\tpadding: 20px;\n\t/* box-shadow: 0px 5px 10px 0px lightgrey; */\n\tbox-shadow: 1px 12px 59px -24px rgba(0,0,0,0.43);\n}\n\n.first h4 {\n    color: #1F4785;\n    font-size: 29px;\n    font-weight: bold;\n    text-shadow: 1px 0px #1F4785;\n    letter-spacing: 2px;\n    margin-top: 13px;\n}\n\n.first h3 {\n    font-size: 22px;\n    color: grey;\n    margin-top: 21px;\n}\n\n.first h2 {\n    color: black;\n    font-size: 24px;\n    font-weight: bold;\n    margin-top: -8px;\n    /* text-shadow: 1px 0px black; */\n    letter-spacing: 2px;\n}\n\n.first p {\n    color: grey;\n    font-size: 17px;\n    line-height: 23px;\n    margin-top: 20px;\n}\n\n.first ul{\n\tmargin-top: 20px;\n\tpadding-left: 0px;\n}\n\n.first ul li {\n    /* font-size: 22px;\n    color: grey;\n    margin-top: 8px;\n\tlist-style: none; */\n\t\n\tfont-size: 16px;\n    color: grey;\n    margin-top: 12px;\n\tlist-style: none;\n\t/* margin-left: -39px; */\n\tfont-weight: 300;\n}\n\n.first ul li:before {\n    /* Unicode bullet symbol */\n    content: '\\2022 ';\n    /* Bullet color */\n    color: red;\n    padding-right: 1.3em;\n}\n\n.second {\n    /* background: #F7F7F7; */\n    padding: 20px;\n    /* padding-bottom: 49px; */\n    /* padding-top: 30px; */\n\t/* box-shadow: 0px 5px 10px 0px lightgrey; */\n\tbox-shadow: 1px 12px 59px -24px rgba(0,0,0,0.43);\n}\n\n.second h4{\n\tcolor: grey;\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n\n.second h3 {\n    font-size: 22px;\n    color: grey;\n}\n\n.second h2 {\n    color: black;\n    font-size: 24px;\n    font-weight: bold;\n    margin-top: -8px;\n    /* text-shadow: 1px 0px black; */\n    letter-spacing: 2px;\n}\n\n.second p {\n    color: grey;\n\tfont-size: 17px;\n\tmargin-top: 20px;\n}\n\n.second ul{\n\tmargin-top: 20px;\n\tpadding-left: 0px;\n}\n\n.second ul li {\n\tfont-size: 16px;\n    color: grey;\n    margin-top: 12px;\n\tlist-style: none;\n\t/* margin-left: -39px; */\n\tfont-weight: 300;\n}\n\n.second ul li:before {\n    /* Unicode bullet symbol */\n    content: '\\2022 ';\n    /* Bullet color */\n    color: red;\n    padding-right: 1.3em;\n}\n\n.price{\n\tpadding-top: 1%;\n}\n\n.price-1 {\n    padding-top: 28%;\n}\n\n.price-1 h2 {\n    color: #1F4785;\n    font-size: 22px;\n    font-weight: 600;\n}\n\n.price-1 h4 {\n    color: grey;\n    font-size: 16px;\n    font-weight: 500;\n    margin-top: -1px;\n}\n\n.price-1 a{\n\tcolor: white;\n\ttext-transform: uppercase;\n\tfont-size: 18px;\n\tmargin-top: 20px;\n\tpadding:10px 20px 10px 20px;\n\tbackground: red;\n\tborder:none;\n\tborder-radius: 5px;\n}\n\n.price-1 a:hover{\n\ttext-decoration: none;\n}\n\n.price-2{\n\tbackground: #4CB992;\n\tpadding: 20px;\n\tborder-radius: 15px;\n\theight: 430px;\n\tbox-sizing: border-box;\n}\n\n.price-2 h1,h2,h3,h4,p,a{\n\tcolor: white;\n}\n\n.price-2 a{\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n\n.price-2 a:hover{\n\tcolor: white;\n}\n\n.price-3{\n\tbackground: #3499E1;\n\tpadding: 20px;\n\tborder-radius: 15px;\n\tbox-sizing: border-box;\n\theight: 430px;\n}\n\n.price-3 h1,h2,h3,h4,p,a{\n\tcolor: white;\n}\n\n.price-3 a{\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n\n.price-3 a:hover{\n\tcolor: white;\n}\n\n.clients{\n\tbackground-image: url('middle_image.png');\n\tbackground-position: top;\n\tbackground-repeat: no-repeat;\n\tbackground-size: cover;\n\tpadding-top: 5%;\n\tpadding-bottom: 5%;\n\tmargin-top: 5%;\n}\n\n.clients img {\n    width: 196px;\n    height: 200px;\n}\n\n.clients h2 {\n    font-size: 29px;\n    font-weight: bold;\n}\n\n.client-2 h1{\n\tcolor: white;\n\tfont-size: 43px;\n\tfont-weight: bold;\n\tmargin-top: 0px;\n}\n\n.client-2 h3 {\n    font-size: 29px;\n    color: white;\n    margin-bottom: 0px;\n    margin-top: 50px;\n    font-weight: lighter;\n    opacity: 0.9;\n}\n\n.client-2 p {\n    font-size: 16px;\n    color: white;\n    line-height: 25px;\n    margin-top: 25px;\n}\n\n@media(max-width:769px){\n\t.clients h2 {\n\t\tfont-size: 25px;\n\t\tfont-weight: bold;\n\t}\n\t.client-2 p {\n\t\ttext-align: left;\n\t}\n}\n\n.footer{\n\tpadding-top: 5%;\n\tpadding-bottom: 5%;\n}\n\n.footer h1 {\n    font-size: 26px;\n    font-weight: bold;\n        margin-top: 32px;\n    color: white;\n    text-transform: uppercase;\n}\n\n.footer p {\n    font-size: 22px;\n    line-height: 20px;\n    color: white;\n    opacity: .9;\n}\n\n.contact{\n\tpadding-top: 60px;\n}\n\n.contact h2 {\n    color: white;\n    font-size: 25px;\n    font-weight: bold;\n}\n\n.contact h4{\n\tcolor: white;\n\tfont-size: 19px;\n\tmargin-top: 10px;\n\t\n}\n\n.contact span{\n\tcolor: white;\n\tfont-size: 20px;\n\tdisplay: block;\n}\n\n.foot-link a{\n\tfont-size: 19px;\n\tmargin-right: 50px;\n\tfont-weight: bold;\n}\n\n.foot-link a:hover{\n\tcolor: white;\n}\n\n.icon span{\n\tcolor: white;\n\tdisplay:block;\n\tfont-size: 25px;\n\tmargin-bottom: 30px;\n}\n\n@media(max-width:512px){\n.footer[_ngcontent-c2] h1[_ngcontent-c2] {\n    font-size: 18px;\n    font-weight: bold;\n    margin-top: 32px;\n    color: white;\n    text-transform: uppercase;\n}\n.footer[_ngcontent-c2] p[_ngcontent-c2] {\n    font-size: 16px;\n\tline-height: 16px;\n}\n.contact[_ngcontent-c2] {\n    padding-top: 6px;\n}\n.contact[_ngcontent-c2] h4[_ngcontent-c2] {\n    display: inline-block;\n    margin-left: 12px;\n    top: -2px;\n    position: absolute;\n}\n.contact span{\n\tdisplay: inline-block;\n\tmargin-top: 5px;\n}\n}\n\n@media screen and (max-width:512px){\n\n    #myBtn[_ngcontent-c2] {\n        display: none;\n        position: fixed;\n        bottom: 20px;\n        right: 11px;\n        z-index: 99;\n        border: none;\n        outline: none;\n        background-color: grey;\n        color: white;\n        cursor: pointer;\n        padding: 15px;\n        border-radius: 53px;\n        font-size: 18px;\n        width: 50px;\n        height: 50px;\n    }\n\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLCtDQUErQztJQUMvQyxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3Q0FBd0M7QUFDNUM7O0FBSUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtRQUNJLGVBQWU7UUFDZixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGlCQUFpQjtJQUNyQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7O0FBSUE7Q0FDQyxXQUFXLENBQUMsYUFBYTtBQUMxQjs7QUFDQTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0NBQ0EsV0FBVyxDQUFDLGFBQWE7Q0FDekI7Q0FDQTtFQUNDLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixhQUFhO0NBQ2IsV0FBVztBQUNaOztBQUVBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsMEJBQTBCO0NBQzFCLG1CQUFtQjtDQUNuQixpQkFBaUI7QUFDbEI7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7O0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQztDQUNBLGVBQWU7Q0FDZixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGlCQUFpQjtDQUNqQixtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBQ0E7O0FBRUE7Q0FDQztDQUNBLGVBQWU7Q0FDZixZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCO0NBQ0E7RUFDQyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjtBQUNEOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZix5QkFBeUI7QUFDMUI7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osZ0JBQWdCO0NBQ2hCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsV0FBVztDQUNYLHlCQUF5QjtBQUMxQjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxZQUFZO0NBQ1osbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGtDQUFrQztDQUNsQyxvQkFBb0I7QUFDckI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFHQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZ0NBQWdDO0FBQ3BDOztBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBO0NBQ0MsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDO0VBQ0MsZUFBZTtDQUNoQjtDQUNBO0VBQ0MsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsWUFBWTtFQUNaLGVBQWU7Q0FDaEI7QUFDRDs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixvQkFBb0I7QUFDckI7O0FBQ0E7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixnQ0FBZ0M7QUFDcEM7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7Q0FDbEIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtBQUNwQjs7QUFBQzs7O0NBR0EsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFHQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25CLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFDQTtDQUNDO0VBQ0MsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCO0NBQ0E7RUFDQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtDQUNqQjtDQUNBO0VBQ0MsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtDQUNqQjtBQUNEOztBQUNBO0NBQ0MsY0FBYztDQUNkLGtDQUFrQztDQUNsQyxvQkFBb0I7QUFDckI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsNENBQTRDO0NBRzVDLGdEQUFnRDtBQUNqRDs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFHQTtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7QUFDbEI7O0FBRUE7SUFDSTs7O29CQUdnQjs7Q0FFbkIsZUFBZTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7Q0FDbkIsZ0JBQWdCO0NBQ2hCLHdCQUF3QjtDQUN4QixnQkFBZ0I7QUFDakI7O0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiwwQkFBMEI7SUFDMUIsdUJBQXVCO0NBQzFCLDRDQUE0QztDQUc1QyxnREFBZ0Q7QUFDakQ7O0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0NBQWdDO0lBQ2hDLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFdBQVc7Q0FDZCxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGVBQWU7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25CLGdCQUFnQjtDQUNoQix3QkFBd0I7Q0FDeEIsZ0JBQWdCO0FBQ2pCOztBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLG9CQUFvQjtBQUN4Qjs7QUFDQTtDQUNDLGVBQWU7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFDQTtDQUNDLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQiwyQkFBMkI7Q0FDM0IsZUFBZTtDQUNmLFdBQVc7Q0FDWCxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBR0E7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2Isc0JBQXNCO0FBQ3ZCOztBQUNBO0NBQ0MsWUFBWTtBQUNiOztBQUNBO0NBQ0MsZUFBZTtDQUNmLGlCQUFpQjtBQUNsQjs7QUFDQTtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLG1CQUFtQjtDQUNuQixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixhQUFhO0FBQ2Q7O0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsWUFBWTtBQUNiOztBQUVBO0NBQ0MseUNBQWtFO0NBQ2xFLHdCQUF3QjtDQUN4Qiw0QkFBNEI7Q0FDNUIsc0JBQXNCO0NBQ3RCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsY0FBYztBQUNmOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUNBO0NBQ0MsWUFBWTtDQUNaLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsZUFBZTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFDQTtDQUNDO0VBQ0MsZUFBZTtFQUNmLGlCQUFpQjtDQUNsQjtDQUNBO0VBQ0MsZ0JBQWdCO0NBQ2pCO0FBQ0Q7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtRQUNiLGdCQUFnQjtJQUNwQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBQ0E7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLGdCQUFnQjs7QUFFakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osZUFBZTtDQUNmLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsaUJBQWlCO0FBQ2xCOztBQUNBO0NBQ0MsWUFBWTtBQUNiOztBQUNBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixlQUFlO0NBQ2YsbUJBQW1CO0FBQ3BCOztBQUNBO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxlQUFlO0NBQ2xCLGlCQUFpQjtBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFDQTtDQUNDLHFCQUFxQjtDQUNyQixlQUFlO0FBQ2hCO0FBQ0E7O0FBR0E7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsZUFBZTtRQUNmLFlBQVk7UUFDWixXQUFXO1FBQ1gsV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixlQUFlO1FBQ2YsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0NBRUgiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNteUJ0biB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAvKiBGaXhlZC9zdGlja3kgcG9zaXRpb24gKi9cbiAgICBib3R0b206IDIwcHg7XG4gICAgLyogUGxhY2UgdGhlIGJ1dHRvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBwYWdlICovXG4gICAgcmlnaHQ6IDQwcHg7XG4gICAgLyogUGxhY2UgdGhlIGJ1dHRvbiAzMHB4IGZyb20gdGhlIHJpZ2h0ICovXG4gICAgei1pbmRleDogOTk7XG4gICAgLyogTWFrZSBzdXJlIGl0IGRvZXMgbm90IG92ZXJsYXAgKi9cbiAgICBib3JkZXI6IG5vbmU7XG4gICAgLyogUmVtb3ZlIGJvcmRlcnMgKi9cbiAgICBvdXRsaW5lOiBub25lO1xuICAgIC8qIFJlbW92ZSBvdXRsaW5lICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAvKiBTZXQgYSBiYWNrZ3JvdW5kIGNvbG9yICovXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qIFRleHQgY29sb3IgKi9cbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLyogQWRkIGEgbW91c2UgcG9pbnRlciBvbiBob3ZlciAqL1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgLyogU29tZSBwYWRkaW5nICovXG4gICAgYm9yZGVyLXJhZGl1czogNTNweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4jbXlCdG46aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTU7XG4gICAgLyogQWRkIGEgZGFyay1ncmV5IGJhY2tncm91bmQgb24gaG92ZXIgKi9cbn1cblxuXG5cbmJvZHkge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTAlO1xufVxuXG4uaGVhZGVyLTEge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xufVxuXG4udG9wYmFyIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4udG9wYmFyIHVsIGxpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9wYmFyIHVsIGxpIGEge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG5saS5zdXNjcmliZSB7XG4gICAgYmFja2dyb3VuZDogcmVkO1xuICAgIHBhZGRpbmc6IDlweCAyMHB4IDhweCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zdXNjcmliZSBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5uYXZiYXIge1xuICAgIG1hcmdpbi10b3A6IDAlO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1uYXYgbGkgYSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm5hdmJhciAubmF2YmFyLW5hdiBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1uYXYgbGkgYTpmb2N1cyB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4ubmF2YmFyIC5uYXZiYXItbmF2IGxpIGEuYWN0aXZlIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1uYXYgbGkge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWcge1xuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTEycHgpIHtcbiAgICAubmF2YmFyW19uZ2NvbnRlbnQtYzJdIC5uYXZiYXItY29sbGFwc2VbX25nY29udGVudC1jMl0ge1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBmbG9hdDogcmlnaHQ7ICovXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDoxMDI1cHgpIHtcbiAgICAub25lIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnR3byB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG5cblxuI215Q2Fyb3VzZWwgaW1nLnNsaWRlLWltZ3tcblx0d2lkdGg6IDEwMCU7aGVpZ2h0OiA2ODBweDtcbn1cbkBtZWRpYShtYXgtd2lkdGg6IDc2OXB4KXtcblx0Lm5hdmJhciAubmF2YmFyLXJpZ2h0e1xuXHRcdG1hcmdpbi10b3A6IDEwJTtcblx0fVxuXHQjbXlDYXJvdXNlbCBpbWcuc2xpZGUtaW1ne1xuXHR3aWR0aDogMTAwJTtoZWlnaHQ6IDM4MHB4O1xuXHR9XG5cdC5uYXZiYXIgLm5hdmJhci1icmFuZCBpbWd7XG5cdFx0bWFyZ2luLXRvcDogLTVweDtcblx0fVxufVxuXG4uc2xpZGVzaG93LWNvbnRhaW5lcltfbmdjb250ZW50LWMzXSAgIC5jYXB0aW9uW19uZ2NvbnRlbnQtYzNdIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDEwMHB4ICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uc2xpZGVyIGgxe1xuXHRmb250LXNpemU6IDQ1cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0dGV4dC1zaGFkb3c6IDNweCAwcHggd2hpdGU7XG5cdGxldHRlci1zcGFjaW5nOiAzcHg7XG5cdG1hcmdpbi10b3A6IC0xNXB4O1xufVxuLnNsaWRlciBwe1xuXHRmb250LXNpemU6IDIycHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC13ZWlnaHQ6IDU1MDtcblx0b3BhY2l0eTogLjc7XG59XG4uc2xpZGVyIGltZ3tcblx0cGFkZGluZy10b3A6IDEwJTtcbn1cblxuQG1lZGlhKG1heC13aWR0aDogNzY5cHgpe1xuXHQuc2xpZGVyIGgxe1xuXHRmb250LXNpemU6IDMwcHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0dGV4dC1zaGFkb3c6IG5vbmU7XG5cdGxldHRlci1zcGFjaW5nOiAwcHg7XG59XG4uc2xpZGVyIHB7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXdlaWdodDogNTUwO1xufVx0XG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDgxMnB4KSBhbmQgKG1heC13aWR0aDogMTAyNXB4KXtcblx0LnNsaWRlciBoMXtcblx0Zm9udC1zaXplOiAzNXB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdH1cblx0LnNsaWRlciBwe1xuXHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0fVxufVxuXG4uc2Vjb25kLXNlY3Rpb257XG5cdGJhY2tncm91bmQ6ICMxRjQ3ODU7XG5cdHBhZGRpbmctdG9wOiAzMHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnNlY29uZC1zZWN0aW9uIGg0e1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiA1NTA7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5zZWNvbmQtc2VjdGlvbiBwe1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGZvbnQtc2l6ZTogMTZweDtcblx0bWFyZ2luLXRvcDogLTEwcHg7XG5cdG9wYWNpdHk6IC43O1xuXHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnNlY29uZC1zZWN0aW9uIGltZ3tcblx0d2lkdGg6IDQwcHg7XG5cdGhlaWdodDogNDBweDtcblx0bWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmFib3V0e1xuXHRwYWRkaW5nLXRvcDogNTBweDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcdFxuXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5hYm91dCBoMiB7XG4gICAgY29sb3I6ICMxRjQ3ODU7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cblxuaHIge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG4gICAgaGVpZ2h0OiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4uYWJvdXQgaDQge1xuICAgIGNvbG9yOiAjNTc1NTU1O1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG5cbi5hYm91dCBoMSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgLyogdGV4dC1zaGFkb3c6IDJweCAxcHggYmxhY2s7ICovXG59XG4uYWJvdXQgcCB7XG4gICAgY29sb3I6ICM5Nzk3OTc7XG4gICAgbGluZS1oZWlnaHQ6IDI5cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDI3cHg7XG59XG4uYWJvdXQtcm93e1xuXHRwYWRkaW5nLXJpZ2h0OiA1MHB4O1xuXHRwYWRkaW5nLXRvcDogMzBweDtcbn1cbkBtZWRpYShtYXgtd2lkdGg6NzY5cHgpe1xuXHQuYWJvdXQgaDQge1xuXHRcdGZvbnQtc2l6ZTogMjRweDtcblx0fVxuXHQuYWJvdXQtcm93e1xuXHRcdHBhZGRpbmctcmlnaHQ6IDUwcHg7XG5cdFx0cGFkZGluZy10b3A6IDEwcHg7XG5cdH1cblx0LmFib3V0IGgxIHtcblx0XHRjb2xvcjogYmxhY2s7XG5cdFx0Zm9udC1zaXplOiAyMnB4O1xuXHR9XG59XG5cbi53aHl7XG5cdHBhZGRpbmctdG9wOiA1MHB4O1xuXHRwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi53aHkgaDJ7XG5cdGNvbG9yOiAjMUY0Nzg1O1xuXHRmb250LXNpemU6IDIycHg7XG5cdGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4ud2h5IGg0IHtcbiAgICBjb2xvcjogIzU3NTU1NTtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cbi53aHkgaDEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIG1hcmdpbi10b3A6IC00cHg7XG4gICAgLyogdGV4dC1zaGFkb3c6IDJweCAxcHggYmxhY2s7ICovXG59XG4ud2h5IHAge1xuICAgIGNvbG9yOiAjOTc5Nzk3O1xuICAgIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcblx0bWFyZ2luLXRvcDogMjdweDtcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcbn1GXG5cbi53aHkgdWx7XG5cdG1hcmdpbi10b3A6IDQwcHg7XG5cdHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG5cbi53aHkgdWwgbGkge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHRtYXJnaW4tbGVmdDogLTM5cHg7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ud2h5IHVsIGxpOmJlZm9yZSB7XG4gICAgLyogVW5pY29kZSBidWxsZXQgc3ltYm9sICovXG4gICAgY29udGVudDogJ1xcMjAyMiAnO1xuICAgIC8qIEJ1bGxldCBjb2xvciAqL1xuICAgIGNvbG9yOiByZWQ7XG4gICAgcGFkZGluZy1yaWdodDogMS4zZW07XG59XG4ud2h5IGgzIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5AbWVkaWEobWF4LXdpZHRoOjc2OXB4KXtcblx0LndoeSBoMyB7XG5cdFx0Y29sb3I6IGJsYWNrO1xuXHRcdGZvbnQtc2l6ZTogMzBweDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG5cdC53aHkgaDQge1xuXHRcdGNvbG9yOiAjNTc1NTU1O1xuXHRcdGZvbnQtc2l6ZTogMThweDtcblx0XHRmb250LXdlaWdodDogMjAwO1xuXHR9XG5cdC53aHkgaDEge1xuXHRcdGNvbG9yOiBibGFjaztcblx0XHRmb250LXNpemU6IDIycHg7XG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdG1hcmdpbi10b3A6IC00cHg7XG5cdH1cbn1cbi5vYnNlcnZle1xuXHRtYXJnaW4tdG9wOiA1JTtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcdFxuXHRwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5maXJzdHtcblx0cGFkZGluZzogMjBweDtcblx0LyogYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDBweCBsaWdodGdyZXk7ICovXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDEycHggNTlweCAtMjRweCByZ2JhKDAsMCwwLDAuNDMpO1xuXHQtbW96LWJveC1zaGFkb3c6IDFweCAxMnB4IDU5cHggLTI0cHggcmdiYSgwLDAsMCwwLjQzKTtcblx0Ym94LXNoYWRvdzogMXB4IDEycHggNTlweCAtMjRweCByZ2JhKDAsMCwwLDAuNDMpO1xufVxuLmZpcnN0IGg0IHtcbiAgICBjb2xvcjogIzFGNDc4NTtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC1zaGFkb3c6IDFweCAwcHggIzFGNDc4NTtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIG1hcmdpbi10b3A6IDEzcHg7XG59XG4uZmlyc3QgaDMge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBtYXJnaW4tdG9wOiAyMXB4O1xufVxuLmZpcnN0IGgyIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgLyogdGV4dC1zaGFkb3c6IDFweCAwcHggYmxhY2s7ICovXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cbi5maXJzdCBwIHtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuXG4uZmlyc3QgdWx7XG5cdG1hcmdpbi10b3A6IDIwcHg7XG5cdHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4uZmlyc3QgdWwgbGkge1xuICAgIC8qIGZvbnQtc2l6ZTogMjJweDtcbiAgICBjb2xvcjogZ3JleTtcbiAgICBtYXJnaW4tdG9wOiA4cHg7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7ICovXG5cdFxuXHRmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0LyogbWFyZ2luLWxlZnQ6IC0zOXB4OyAqL1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuLmZpcnN0IHVsIGxpOmJlZm9yZSB7XG4gICAgLyogVW5pY29kZSBidWxsZXQgc3ltYm9sICovXG4gICAgY29udGVudDogJ1xcMjAyMiAnO1xuICAgIC8qIEJ1bGxldCBjb2xvciAqL1xuICAgIGNvbG9yOiByZWQ7XG4gICAgcGFkZGluZy1yaWdodDogMS4zZW07XG59XG5cbi5zZWNvbmQge1xuICAgIC8qIGJhY2tncm91bmQ6ICNGN0Y3Rjc7ICovXG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogNDlweDsgKi9cbiAgICAvKiBwYWRkaW5nLXRvcDogMzBweDsgKi9cblx0LyogYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IDBweCBsaWdodGdyZXk7ICovXG5cdC13ZWJraXQtYm94LXNoYWRvdzogMXB4IDEycHggNTlweCAtMjRweCByZ2JhKDAsMCwwLDAuNDMpO1xuXHQtbW96LWJveC1zaGFkb3c6IDFweCAxMnB4IDU5cHggLTI0cHggcmdiYSgwLDAsMCwwLjQzKTtcblx0Ym94LXNoYWRvdzogMXB4IDEycHggNTlweCAtMjRweCByZ2JhKDAsMCwwLDAuNDMpO1xufVxuLnNlY29uZCBoNHtcblx0Y29sb3I6IGdyZXk7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc2Vjb25kIGgzIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgY29sb3I6IGdyZXk7XG59XG5cbi5zZWNvbmQgaDIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAvKiB0ZXh0LXNoYWRvdzogMXB4IDBweCBibGFjazsgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuLnNlY29uZCBwIHtcbiAgICBjb2xvcjogZ3JleTtcblx0Zm9udC1zaXplOiAxN3B4O1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xufVxuLnNlY29uZCB1bHtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0cGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5zZWNvbmQgdWwgbGkge1xuXHRmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IGdyZXk7XG4gICAgbWFyZ2luLXRvcDogMTJweDtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0LyogbWFyZ2luLWxlZnQ6IC0zOXB4OyAqL1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuLnNlY29uZCB1bCBsaTpiZWZvcmUge1xuICAgIC8qIFVuaWNvZGUgYnVsbGV0IHN5bWJvbCAqL1xuICAgIGNvbnRlbnQ6ICdcXDIwMjIgJztcbiAgICAvKiBCdWxsZXQgY29sb3IgKi9cbiAgICBjb2xvcjogcmVkO1xuICAgIHBhZGRpbmctcmlnaHQ6IDEuM2VtO1xufVxuLnByaWNle1xuXHRwYWRkaW5nLXRvcDogMSU7XG59XG5cbi5wcmljZS0xIHtcbiAgICBwYWRkaW5nLXRvcDogMjglO1xufVxuLnByaWNlLTEgaDIge1xuICAgIGNvbG9yOiAjMUY0Nzg1O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuLnByaWNlLTEgaDQge1xuICAgIGNvbG9yOiBncmV5O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG59XG4ucHJpY2UtMSBhe1xuXHRjb2xvcjogd2hpdGU7XG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0bWFyZ2luLXRvcDogMjBweDtcblx0cGFkZGluZzoxMHB4IDIwcHggMTBweCAyMHB4O1xuXHRiYWNrZ3JvdW5kOiByZWQ7XG5cdGJvcmRlcjpub25lO1xuXHRib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucHJpY2UtMSBhOmhvdmVye1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuLnByaWNlLTJ7XG5cdGJhY2tncm91bmQ6ICM0Q0I5OTI7XG5cdHBhZGRpbmc6IDIwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDE1cHg7XG5cdGhlaWdodDogNDMwcHg7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ucHJpY2UtMiBoMSxoMixoMyxoNCxwLGF7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cbi5wcmljZS0yIGF7XG5cdGZvbnQtc2l6ZTogMjBweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJpY2UtMiBhOmhvdmVye1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5wcmljZS0ze1xuXHRiYWNrZ3JvdW5kOiAjMzQ5OUUxO1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRoZWlnaHQ6IDQzMHB4O1xufVxuLnByaWNlLTMgaDEsaDIsaDMsaDQscCxhe1xuXHRjb2xvcjogd2hpdGU7XG59XG4ucHJpY2UtMyBhe1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByaWNlLTMgYTpob3Zlcntcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4uY2xpZW50c3tcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2hvbWUvbWlkZGxlX2ltYWdlLnBuZycpO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdHBhZGRpbmctdG9wOiA1JTtcblx0cGFkZGluZy1ib3R0b206IDUlO1xuXHRtYXJnaW4tdG9wOiA1JTtcbn1cbi5jbGllbnRzIGltZyB7XG4gICAgd2lkdGg6IDE5NnB4O1xuICAgIGhlaWdodDogMjAwcHg7XG59XG4uY2xpZW50cyBoMiB7XG4gICAgZm9udC1zaXplOiAyOXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNsaWVudC0yIGgxe1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtc2l6ZTogNDNweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmNsaWVudC0yIGgzIHtcbiAgICBmb250LXNpemU6IDI5cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIG9wYWNpdHk6IDAuOTtcbn1cbi5jbGllbnQtMiBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG59XG5AbWVkaWEobWF4LXdpZHRoOjc2OXB4KXtcblx0LmNsaWVudHMgaDIge1xuXHRcdGZvbnQtc2l6ZTogMjVweDtcblx0XHRmb250LXdlaWdodDogYm9sZDtcblx0fVxuXHQuY2xpZW50LTIgcCB7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0fVxufVxuLmZvb3Rlcntcblx0cGFkZGluZy10b3A6IDUlO1xuXHRwYWRkaW5nLWJvdHRvbTogNSU7XG59XG4uZm9vdGVyIGgxIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5mb290ZXIgcCB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAuOTtcbn1cbi5jb250YWN0e1xuXHRwYWRkaW5nLXRvcDogNjBweDtcbn1cbi5jb250YWN0IGgyIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRhY3QgaDR7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC1zaXplOiAxOXB4O1xuXHRtYXJnaW4tdG9wOiAxMHB4O1xuXHRcbn1cblxuLmNvbnRhY3Qgc3Bhbntcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZm9vdC1saW5rIGF7XG5cdGZvbnQtc2l6ZTogMTlweDtcblx0bWFyZ2luLXJpZ2h0OiA1MHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbi5mb290LWxpbmsgYTpob3Zlcntcblx0Y29sb3I6IHdoaXRlO1xufVxuLmljb24gc3Bhbntcblx0Y29sb3I6IHdoaXRlO1xuXHRkaXNwbGF5OmJsb2NrO1xuXHRmb250LXNpemU6IDI1cHg7XG5cdG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5AbWVkaWEobWF4LXdpZHRoOjUxMnB4KXtcbi5mb290ZXJbX25nY29udGVudC1jMl0gaDFbX25nY29udGVudC1jMl0ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmZvb3Rlcltfbmdjb250ZW50LWMyXSBwW19uZ2NvbnRlbnQtYzJdIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG5cdGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuLmNvbnRhY3RbX25nY29udGVudC1jMl0ge1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG59XG4uY29udGFjdFtfbmdjb250ZW50LWMyXSBoNFtfbmdjb250ZW50LWMyXSB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIHRvcDogLTJweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uY29udGFjdCBzcGFue1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdG1hcmdpbi10b3A6IDVweDtcbn1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjUxMnB4KXtcblxuICAgICNteUJ0bltfbmdjb250ZW50LWMyXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICByaWdodDogMTFweDtcbiAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUzcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG5cbiB9Il19 */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/home.service */ "./src/app/core/services/home.service.ts");



let HomeComponent = class HomeComponent {
    constructor(homeservice) {
        this.homeservice = homeservice;
        this.plans = [];
        this.clientToken = null;
    }
    ngOnInit() {
        this.tempTokenAPI();
        this.homeDataAPI();
    }
    homeDataAPI() {
        this.homeservice.homedata('').subscribe((res) => {
            this.plans = res.plans;
        });
    }
    tempTokenAPI() {
        this.clientToken = this.homeservice.getTempClientToken();
        this.homeservice.tempToken(this.clientToken).subscribe(res => {
            this.clientToken = res.token;
            this.homeservice.setTempClientToken(res.token);
        });
    }
    scroll(el) {
        el.scrollIntoView();
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_core_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/links/advertise-link/advertise-link.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/links/advertise-link/advertise-link.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".properties{\n    margin-top: 5%;\n}\n\n/* .navbar-inverse {\n    background-color: #3578E5; \n    border-color: #3578E5;\n} */\n\n.sidebar-2{\n    border: 1px solid #d3d3d3;\n    position: fixed;\n    left: 200px;\n    width: 250px;\n    padding: 10px;\n    background-color: #fff;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    border: 1px solid #d3d3d3;\n}\n\n.heading{\n    margin-left: 5px;\n}\n\n.head{\n    padding: 0px 10px 5px;\n}\n\n.head img{\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n}\n\n.head h5{\n    margin-bottom: 5px;\n    margin-top: 10px;\n    font-weight: 700;\n    color: #6564c1;\n    font-size: 15px;\n}\n\n.head p{\n    margin-bottom: 0px;\n}\n\n.head i{\n    margin-top: 20px;\n}\n\n.criteria-perpose, .criteria-method{\n    margin-top: 0px;\n    padding-left: 15px;\n    padding-bottom: 10px;\n    margin-left: -11px;\n    margin-right: -10px;\n    border-top: 1px solid #d3d3d3;\n}\n\n.criteria-method{\n    border-bottom: 1px solid #d3d3d3;\n    padding: 8px 0px 8px 15px;\n}\n\n.criteria-perpose h3{\n    font-size: 16px;\n    font-weight: 500;\n    margin-top: 5px;\n}\n\n.msg{\n    padding: 5px 8px;\n}\n\n.msg span{\n    color: #333;\n    font-family: Arial,sans-serif;\n    font-size: 13px;\n    margin-left: 1rem;\n}\n\n.msg input[type= radio]{\n    display: none;\n}\n\ninput[type=radio]+ label {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: -7px 4px 0 -10px;\n    vertical-align: middle;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #808080;\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,.33);\n    background-repeat: no-repeat;\n    background-position: center;\n    text-align: center;\n    line-height: 44px;\n}\n\ninput[type=radio]:checked + label{\n    display: inline-block;\n    background: url('check-icn.svg');\n    width: 30px;\n    height: 30px;\n    margin: -7px 4px 0 -10px;\n    vertical-align: middle;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #808080;\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,.33);\n    background-repeat: no-repeat;\n    background-position: center;\n    text-align: center;\n    line-height: 44px;\n}\n\nspan\n    {\n        font-size: 14px;\n        color: #5c6d7a;\n    }\n\ninput[type=radio],input[type=checkbox]\n     {\n            display:none;\n    }\n\n.msg\n    {\n        font-size: 20px;\n        \n    }\n\nlabel{\n            margin-bottom: -8px !important;\n    }\n\n.select-area{\n        padding: 10px;\n    }\n\n.multiselect-dropdown{\n        margin-bottom: 6px !important;\n    }\n\n.multiselect-dropdown .dropdown-btn{\n        display: inline-block;\n        border: 1px solid #adadad;\n        width: 100%;\n        padding: 6px 12px;\n        margin-bottom: 8px;\n        font-weight: 400;\n        line-height: 1.52857143;\n        text-align: left;\n        vertical-align: middle;\n        cursor: pointer;\n        background-image: none;\n        border-radius: 4px;\n      }\n\n.form-control{\n          margin-bottom: 10px;\n      }\n\n.feeds{\n        border: 1px solid #d3d3d3;\n        padding: 8px;\n        margin-bottom: 2%;\n        border-radius: 5px;\n        z-index: 999;\n    }\n\n.feeds .profile-details{\n        padding: 3px;\n    }\n\n.feeds .profile-details p{\n        margin-bottom: -2px;\n        font-weight: 700;\n        color: #6564c1;\n        font-size: 15px;\n    }\n\n.feeds .profile-details span{\n        color: #bebbb9;\n    }\n\n.post{\n        padding: 20px;\n    }\n\n.description{\n        padding: 10px 0px;\n    }\n\n.description p{\n        font-size: 16px;\n        font-weight: 600;\n    }\n\n.description p img{\n        width: 20px;\n        top: 0px;\n        float: right;\n        clear: both;\n    }\n\n.post .image img{\n        width: 100%;\n        height: 400px;\n    }\n\n.post .afterText{\n        padding-top: 20px;\n    }\n\n.postChat{\n        width: 250px;\n        min-height: 80vh;\n        max-height: 80vh;\n        border-top: 1px solid #d3d3d3;\n        padding-top: 5px;\n        overflow-y: auto;\n        position: fixed;\n        right: 200px;\n    }\n\n.postChat .person1{\n        width: auto;\n        max-width: 80%;\n        background-color: #1877F2;\n        color: #fff;\n        float: right;\n        clear: both;\n        text-align: right;\n        padding: 10px;\n        margin: 20px 10px;\n        border-radius: 20px 0px 20px 20px;\n        position: relative;\n        word-break: break-all;\n    }\n\n.postChat .person2{\n        width: auto;\n        max-width: 80%;\n        background-color: #F2F3F5;\n        color: #444950;;\n        float: left;\n        clear: both;\n        padding: 10px;\n        margin: 20px 10px 20px 70px;\n        border-radius: 0px 20px 20px 20px;\n        position: relative;\n        word-break: break-all;\n    }\n\n.postChat .person2 img{\n        margin-left: -70px;\n        margin-top: -10px;\n        width: 45px;\n        height: 45px;\n    }\n\n.postChat .person2 .text {\n        margin-top: -35px;\n    }\n\n.chat-box{\n        width: 100%;\n        height: 50px;\n        background-color: rgb(241, 239, 239);\n        border: 1px solid #444950;\n        border-radius: 25px;\n        border: none;\n        padding: 15px 20px;\n        font-size: 18px;\n        color: #444950;\n    }\n\n.send-message{\n        width: 60%;\n    }\n\n.btn-circle.btn-xl {\n        width: 70px;\n        height: 70px;\n        padding: 10px 16px;\n        border-radius: 35px;\n        font-size: 24px;\n        line-height: 1.33;\n    }\n\n.btn-circle {\n        width: 50px;\n        height: 50px;\n        padding: auto;\n        border-radius: 50px;\n        text-align: center;\n        font-size: 12px;\n        line-height: 1.42857;\n    }\n\n.msg-container{\n        padding-right: 0px;\n    }\n\n.no-feeds{\n    margin-left: auto;\n    margin-right: auto;\n    text-align:  center;\n}\n\nimg.no-property{\n    height:400px;width:500px;\n    opacity: .7;\n}\n\n@media(max-width: 769px){\n    img.no-property{\n        height:200px;width:300px;\n    }\n\n}\n\n.no-chat{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlua3MvYWR2ZXJ0aXNlLWxpbmsvYWR2ZXJ0aXNlLWxpbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7OztHQUdHOztBQUNIO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0FBQ25COztBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw2QkFBNkI7QUFDakM7O0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksV0FBVztJQUNYLDZCQUE2QjtJQUM3QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsdUNBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFDQztJQUNHLHFCQUFxQjtJQUNyQixnQ0FBMEQ7SUFDMUQsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHVDQUF1QztJQUN2Qyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBQ0E7O1FBRVEsZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0FBQ0E7O1lBRVEsWUFBWTtJQUNwQjs7QUFFQTs7UUFFSSxlQUFlOztJQUVuQjs7QUFDQTtZQUNRLDhCQUE4QjtJQUN0Qzs7QUFDQTtRQUNJLGFBQWE7SUFDakI7O0FBQ0E7UUFDSSw2QkFBNkI7SUFDakM7O0FBQ0E7UUFDSSxxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLHNCQUFzQjtRQUN0QixlQUFlO1FBQ2Ysc0JBQXNCO1FBQ3RCLGtCQUFrQjtNQUNwQjs7QUFDQTtVQUNJLG1CQUFtQjtNQUN2Qjs7QUFFRjtRQUNJLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixZQUFZO0lBQ2hCOztBQUNBO1FBQ0ksWUFBWTtJQUNoQjs7QUFDQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsY0FBYztRQUNkLGVBQWU7SUFDbkI7O0FBQ0E7UUFDSSxjQUFjO0lBQ2xCOztBQUNBO1FBQ0ksYUFBYTtJQUNqQjs7QUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7SUFDcEI7O0FBQ0E7UUFDSSxXQUFXO1FBQ1gsUUFBUTtRQUNSLFlBQVk7UUFDWixXQUFXO0lBQ2Y7O0FBQ0E7UUFDSSxXQUFXO1FBQ1gsYUFBYTtJQUNqQjs7QUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFDQTtRQUNJLFlBQVk7UUFDWixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLDZCQUE2QjtRQUM3QixnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztBQUNBO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsV0FBVztRQUNYLFlBQVk7UUFDWixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixpQkFBaUI7UUFDakIsaUNBQWlDO1FBQ2pDLGtCQUFrQjtRQUNsQixxQkFBcUI7SUFDekI7O0FBRUE7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2QsV0FBVztRQUNYLFdBQVc7UUFDWCxhQUFhO1FBQ2IsMkJBQTJCO1FBQzNCLGlDQUFpQztRQUNqQyxrQkFBa0I7UUFDbEIscUJBQXFCO0lBQ3pCOztBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7QUFDQTtRQUNJLGlCQUFpQjtJQUNyQjs7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osb0NBQW9DO1FBQ3BDLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsY0FBYztJQUNsQjs7QUFDQTtRQUNJLFVBQVU7SUFDZDs7QUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCOztBQUVBO1FBQ0ksV0FBVztRQUNYLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2Ysb0JBQW9CO0lBQ3hCOztBQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCOztBQUdKO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZLENBQUMsV0FBVztJQUN4QixXQUFXO0FBQ2Y7O0FBR0E7SUFDSTtRQUNJLFlBQVksQ0FBQyxXQUFXO0lBQzVCOztBQUVKOztBQUVBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGlua3MvYWR2ZXJ0aXNlLWxpbmsvYWR2ZXJ0aXNlLWxpbmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9wZXJ0aWVze1xuICAgIG1hcmdpbi10b3A6IDUlO1xufVxuXG4vKiAubmF2YmFyLWludmVyc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNTc4RTU7IFxuICAgIGJvcmRlci1jb2xvcjogIzM1NzhFNTtcbn0gKi9cbi5zaWRlYmFyLTJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMjAwcHg7XG4gICAgd2lkdGg6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xufVxuLmhlYWRpbmd7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5oZWFke1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDVweDtcbn1cbi5oZWFkIGltZ3tcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLmhlYWQgaDV7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzY1NjRjMTtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG4uaGVhZCBwe1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5oZWFkIGl7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5jcml0ZXJpYS1wZXJwb3NlLCAuY3JpdGVyaWEtbWV0aG9ke1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMXB4O1xuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkM2QzZDM7XG59XG4uY3JpdGVyaWEtbWV0aG9ke1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgIHBhZGRpbmc6IDhweCAwcHggOHB4IDE1cHg7XG59XG4uY3JpdGVyaWEtcGVycG9zZSBoM3tcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ubXNne1xuICAgIHBhZGRpbmc6IDVweCA4cHg7XG59XG4ubXNnIHNwYW57XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xufVxuXG4ubXNnIGlucHV0W3R5cGU9IHJhZGlvXXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuaW5wdXRbdHlwZT1yYWRpb10rIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogLTdweCA0cHggMCAtMTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzgwODA4MDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsMCwwLC4zMyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xufVxuIGlucHV0W3R5cGU9cmFkaW9dOmNoZWNrZWQgKyBsYWJlbHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvaG9tZS9jaGVjay1pY24uc3ZnKTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiAtN3B4IDRweCAwIC0xMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjMzKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG5zcGFuXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNWM2ZDdhO1xuICAgIH1cbiAgICBpbnB1dFt0eXBlPXJhZGlvXSxpbnB1dFt0eXBlPWNoZWNrYm94XVxuICAgICB7XG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XG4gICAgfVxuXG4gICAgLm1zZ1xuICAgIHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBcbiAgICB9XG4gICAgbGFiZWx7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtOHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5zZWxlY3QtYXJlYXtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG4gICAgLm11bHRpc2VsZWN0LWRyb3Bkb3due1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLm11bHRpc2VsZWN0LWRyb3Bkb3duIC5kcm9wZG93bi1idG57XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2FkYWRhZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjUyODU3MTQzO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIH1cbiAgICAgIC5mb3JtLWNvbnRyb2x7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgIC5mZWVkc3tcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxuICAgIC5mZWVkcyAucHJvZmlsZS1kZXRhaWxze1xuICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgfVxuICAgIC5mZWVkcyAucHJvZmlsZS1kZXRhaWxzIHB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGNvbG9yOiAjNjU2NGMxO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuICAgIC5mZWVkcyAucHJvZmlsZS1kZXRhaWxzIHNwYW57XG4gICAgICAgIGNvbG9yOiAjYmViYmI5O1xuICAgIH1cbiAgICAucG9zdHtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9ue1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uIHB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG4gICAgLmRlc2NyaXB0aW9uIHAgaW1ne1xuICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgfVxuICAgIC5wb3N0IC5pbWFnZSBpbWd7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIH1cbiAgICAucG9zdCAuYWZ0ZXJUZXh0e1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG4gICAgLnBvc3RDaGF0e1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwdmg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDgwdmg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHJpZ2h0OiAyMDBweDtcbiAgICB9XG4gICAgLnBvc3RDaGF0IC5wZXJzb24xe1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxODc3RjI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDIwcHggMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxuXG4gICAgLnBvc3RDaGF0IC5wZXJzb24ye1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA4MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMkYzRjU7XG4gICAgICAgIGNvbG9yOiAjNDQ0OTUwOztcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDIwcHggMTBweCAyMHB4IDcwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAyMHB4IDIwcHggMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgfVxuICAgIC5wb3N0Q2hhdCAucGVyc29uMiBpbWd7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgfVxuICAgIC5wb3N0Q2hhdCAucGVyc29uMiAudGV4dCB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0zNXB4O1xuICAgIH1cbiAgICAuY2hhdC1ib3h7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIzOSwgMjM5KTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzQ0NDk1MDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgY29sb3I6ICM0NDQ5NTA7XG4gICAgfVxuICAgIC5zZW5kLW1lc3NhZ2V7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuICAgIC5idG4tY2lyY2xlLmJ0bi14bCB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMTZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zMztcbiAgICB9XG4gICAgXG4gICAgLmJ0bi1jaXJjbGUge1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBwYWRkaW5nOiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDI4NTc7XG4gICAgfVxuICAgIC5tc2ctY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgfVxuXG5cbi5uby1mZWVkc3tcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgdGV4dC1hbGlnbjogIGNlbnRlcjtcbn1cblxuaW1nLm5vLXByb3BlcnR5e1xuICAgIGhlaWdodDo0MDBweDt3aWR0aDo1MDBweDtcbiAgICBvcGFjaXR5OiAuNztcbn1cblxuXG5AbWVkaWEobWF4LXdpZHRoOiA3NjlweCl7XG4gICAgaW1nLm5vLXByb3BlcnR5e1xuICAgICAgICBoZWlnaHQ6MjAwcHg7d2lkdGg6MzAwcHg7XG4gICAgfVxuXG59XG5cbi5uby1jaGF0e1xuICAgIHdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/links/advertise-link/advertise-link.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/links/advertise-link/advertise-link.component.ts ***!
  \************************************************************************/
/*! exports provided: AdvertiseLinkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvertiseLinkComponent", function() { return AdvertiseLinkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_services_lead_advertise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/lead-advertise.service */ "./src/app/core/services/lead-advertise.service.ts");
/* harmony import */ var _core_services_lead_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/lead-chat.service */ "./src/app/core/services/lead-chat.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let AdvertiseLinkComponent = class AdvertiseLinkComponent {
    constructor(advertiseService, leadChatService, fb, firebaseDb, route) {
        this.advertiseService = advertiseService;
        this.leadChatService = leadChatService;
        this.fb = fb;
        this.firebaseDb = firebaseDb;
        this.route = route;
        this.leadId = null;
        this.advertiseType = "single";
        this.propertiesList = [];
        this.messagesList = [];
        this.submitted = false;
    }
    ngOnInit() {
        this.buildForm();
        this.customerToken = this.advertiseService.getCustomerToken();
        this.route.params.subscribe(param => {
            this.advertiseId = param.id;
        }); // advertise Id would get from URL
        this.advertiseProperties();
    }
    advertiseProperties() {
        this.advertiseService.mlsAdvertise(this.advertiseId, this.customerToken).subscribe((res) => {
            console.log(res);
            if (res.code == 200) {
                console.log(res.add.linked_properties);
                this.agent = res.add.agent;
                this.propertiesList = res.add.linked_properties;
                this.leadId = res.lead ? res.lead.id : null;
                this.customerToken = res.customer_token;
                this.agentId = res.add.user_id;
                this.advertise = res.add;
                this.advertiseService.setCustomerToken(this.customerToken);
                this.updateOnConnect();
                this.leadMessages();
            }
        });
    }
    leadMessages() {
        this.leadChatService.messages(this.leadId).subscribe((res) => {
            this.messagesList = res.messages;
            this.readMessage().valueChanges().subscribe(msg => {
                if (msg.length > 0) {
                    var index = this.messagesList.findIndex(x => x.id == msg[msg.length - 1].id);
                    if (index === -1) {
                        this.messagesList.push(msg[msg.length - 1]);
                    }
                    else
                        console.log("object already exists");
                }
            });
        });
    }
    buildForm() {
        this.form = this.fb.group({
            textMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    sendMessage(mlsNumber) {
        if (!this.submitted) {
            this.submitted = true;
            this.leadChatService.sendMessage(this.advertiseType, this.advertiseId, this.customerToken, null, this.form.value.textMessage, mlsNumber).subscribe((res) => {
                console.log(res);
                if (res.code == 200) {
                    this.messagesList.push(res.message);
                    this.buildForm();
                    let activity = {
                        messageId: res.message.id,
                        advertiseType: this.advertiseType,
                        advertiseId: parseInt(this.advertiseId),
                        customer_token: this.customerToken
                    };
                    this.firebaseDb.object("agent_" + this.agentId + "/message_activity/customer/message/").update(activity);
                }
                this.submitted = false;
            });
        }
        return false;
    }
    readMessage() {
        let messagePath = "agent_" + this.agentId + "/" + this.advertiseType + "_" + this.advertiseId + "_" + this.customerToken + "/agent/";
        return this.firebaseDb.list(messagePath, ref => ref);
    }
    updateOnConnect() {
        this.firebaseDb.object('.info/connected').valueChanges().subscribe(data => {
            let status = data ? true : false;
            if (!(this.agentId == "undefined" || this.agentId == undefined)) {
                this.updateStatus(status);
            }
            this.updateOnDisconnect();
        });
    }
    updateStatus(status) {
        if (status) {
            // Firebase Lead json
            let lead = {
                agent_id: this.agentId,
                advertiseType: this.advertiseType,
                advertiseId: this.advertiseId,
                customer_token: this.customerToken,
                title: "New Client S" + this.advertiseId + "" + this.customerToken.substr(this.customerToken.length - 3),
                status: "Temporary Client",
                id: this.leadId,
            };
            this.firebaseDb.object(this.clientOnlinePath()).update(lead);
        }
        else {
            this.firebaseDb.object(this.clientOnlinePath()).remove();
        }
    }
    updateOnDisconnect() {
        this.firebaseDb.database.ref().child(this.clientOnlinePath()).onDisconnect().remove();
    }
    clientOnlinePath() {
        return "agent_" + this.agentId + "/onlineLeads/" + this.advertiseType + "_" + this.advertiseId + "_" + this.customerToken;
    }
};
AdvertiseLinkComponent.ctorParameters = () => [
    { type: _core_services_lead_advertise_service__WEBPACK_IMPORTED_MODULE_3__["LeadAdvertiseService"] },
    { type: _core_services_lead_chat_service__WEBPACK_IMPORTED_MODULE_4__["LeadChatService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }
];
AdvertiseLinkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-advertise-link',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./advertise-link.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/advertise-link/advertise-link.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./advertise-link.component.css */ "./src/app/pages/links/advertise-link/advertise-link.component.css")).default]
    })
], AdvertiseLinkComponent);



/***/ }),

/***/ "./src/app/pages/links/agent-multiple-properties/agent-multiple-properties.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/links/agent-multiple-properties/agent-multiple-properties.component.css ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".search-results{\n    margin-top: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlua3MvYWdlbnQtbXVsdGlwbGUtcHJvcGVydGllcy9hZ2VudC1tdWx0aXBsZS1wcm9wZXJ0aWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9saW5rcy9hZ2VudC1tdWx0aXBsZS1wcm9wZXJ0aWVzL2FnZW50LW11bHRpcGxlLXByb3BlcnRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtcmVzdWx0c3tcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/links/agent-multiple-properties/agent-multiple-properties.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/links/agent-multiple-properties/agent-multiple-properties.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AgentMultiplePropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgentMultiplePropertiesComponent", function() { return AgentMultiplePropertiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AgentMultiplePropertiesComponent = class AgentMultiplePropertiesComponent {
    constructor() { }
    ngOnInit() {
    }
};
AgentMultiplePropertiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agent-multiple-properties',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./agent-multiple-properties.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/agent-multiple-properties/agent-multiple-properties.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./agent-multiple-properties.component.css */ "./src/app/pages/links/agent-multiple-properties/agent-multiple-properties.component.css")).default]
    })
], AgentMultiplePropertiesComponent);



/***/ }),

/***/ "./src/app/pages/links/link-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/links/link-routing.module.ts ***!
  \****************************************************/
/*! exports provided: LinkRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkRoutingModule", function() { return LinkRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _properties_listings_properties_listings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./properties-listings/properties-listings.component */ "./src/app/pages/links/properties-listings/properties-listings.component.ts");
/* harmony import */ var _agent_multiple_properties_agent_multiple_properties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agent-multiple-properties/agent-multiple-properties.component */ "./src/app/pages/links/agent-multiple-properties/agent-multiple-properties.component.ts");
/* harmony import */ var _advertise_link_advertise_link_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./advertise-link/advertise-link.component */ "./src/app/pages/links/advertise-link/advertise-link.component.ts");






const routes = [
    { path: 'properties/:id', component: _properties_listings_properties_listings_component__WEBPACK_IMPORTED_MODULE_3__["PropertiesListingsComponent"] },
    { path: 'advertisement/:id', component: _advertise_link_advertise_link_component__WEBPACK_IMPORTED_MODULE_5__["AdvertiseLinkComponent"] },
    { path: 'agent-properties', component: _agent_multiple_properties_agent_multiple_properties_component__WEBPACK_IMPORTED_MODULE_4__["AgentMultiplePropertiesComponent"] }
];
let LinkRoutingModule = class LinkRoutingModule {
};
LinkRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LinkRoutingModule);



/***/ }),

/***/ "./src/app/pages/links/link.module.ts":
/*!********************************************!*\
  !*** ./src/app/pages/links/link.module.ts ***!
  \********************************************/
/*! exports provided: LinkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkModule", function() { return LinkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
/* harmony import */ var ng_multiselect_dropdown_angular7__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-multiselect-dropdown-angular7 */ "./node_modules/ng-multiselect-dropdown-angular7/fesm2015/ng-multiselect-dropdown-angular7.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _link_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./link-routing.module */ "./src/app/pages/links/link-routing.module.ts");
/* harmony import */ var _properties_listings_properties_listings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./properties-listings/properties-listings.component */ "./src/app/pages/links/properties-listings/properties-listings.component.ts");
/* harmony import */ var _agent_multiple_properties_agent_multiple_properties_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./agent-multiple-properties/agent-multiple-properties.component */ "./src/app/pages/links/agent-multiple-properties/agent-multiple-properties.component.ts");
/* harmony import */ var _advertise_link_advertise_link_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./advertise-link/advertise-link.component */ "./src/app/pages/links/advertise-link/advertise-link.component.ts");












let LinkModule = class LinkModule {
};
LinkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_properties_listings_properties_listings_component__WEBPACK_IMPORTED_MODULE_9__["PropertiesListingsComponent"], _agent_multiple_properties_agent_multiple_properties_component__WEBPACK_IMPORTED_MODULE_10__["AgentMultiplePropertiesComponent"], _advertise_link_advertise_link_component__WEBPACK_IMPORTED_MODULE_11__["AdvertiseLinkComponent"]],
        imports: [
            ng_multiselect_dropdown_angular7__WEBPACK_IMPORTED_MODULE_4__["NgMultiSelectDropDownModule"].forRoot(),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _link_routing_module__WEBPACK_IMPORTED_MODULE_8__["LinkRoutingModule"],
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].firebase)
        ]
    })
], LinkModule);



/***/ }),

/***/ "./src/app/pages/links/properties-listings/properties-listings.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/links/properties-listings/properties-listings.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".properties{\n    margin-top: 5%;\n}\n\n/* .navbar-inverse {\n    background-color: #3578E5; \n    border-color: #3578E5;\n} */\n\n.sidebar-2{\n    border: 1px solid #d3d3d3;\n    position: fixed;\n    left: 200px;\n    width: 250px;\n    padding: 10px;\n    background-color: #fff;\n    border-radius: 5px;\n    margin-bottom: 20px;\n    border: 1px solid #d3d3d3;\n}\n\n.heading{\n    margin-left: 5px;\n}\n\n.head{\n    padding: 0px 10px 5px;\n}\n\n.head img{\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n}\n\n.head h5{\n    margin-bottom: 5px;\n    margin-top: 10px;\n    font-weight: 700;\n    color: #6564c1;\n    font-size: 15px;\n}\n\n.head p{\n    margin-bottom: 0px;\n}\n\n.head i{\n    margin-top: 20px;\n}\n\n.criteria-perpose, .criteria-method{\n    margin-top: 0px;\n    padding-left: 15px;\n    padding-bottom: 10px;\n    margin-left: -11px;\n    margin-right: -10px;\n    border-top: 1px solid #d3d3d3;\n}\n\n.criteria-method{\n    border-bottom: 1px solid #d3d3d3;\n    padding: 8px 0px 8px 15px;\n}\n\n.criteria-perpose h3{\n    font-size: 16px;\n    font-weight: 500;\n    margin-top: 5px;\n}\n\n.msg{\n    padding: 5px 8px;\n}\n\n.msg span{\n    color: #333;\n    font-family: Arial,sans-serif;\n    font-size: 13px;\n    margin-left: 1rem;\n}\n\n.msg input[type= radio]{\n    display: none;\n}\n\ninput[type=radio]+ label {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: -7px 4px 0 -10px;\n    vertical-align: middle;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #808080;\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,.33);\n    background-repeat: no-repeat;\n    background-position: center;\n    text-align: center;\n    line-height: 44px;\n}\n\ninput[type=radio]:checked + label{\n    display: inline-block;\n    background: url('check-icn.svg');\n    width: 30px;\n    height: 30px;\n    margin: -7px 4px 0 -10px;\n    vertical-align: middle;\n    cursor: pointer;\n    border-radius: 50%;\n    background-color: #808080;\n    box-shadow: 0 1px 3px 0 rgba(0,0,0,.33);\n    background-repeat: no-repeat;\n    background-position: center;\n    text-align: center;\n    line-height: 44px;\n}\n\nspan\n    {\n        font-size: 14px;\n        color: #5c6d7a;\n    }\n\ninput[type=radio],input[type=checkbox]\n     {\n            display:none;\n    }\n\n.msg\n    {\n        font-size: 20px;\n        \n    }\n\nlabel{\n            margin-bottom: -8px !important;\n    }\n\n.select-area{\n        padding: 10px;\n    }\n\n.multiselect-dropdown{\n        margin-bottom: 6px !important;\n    }\n\n.multiselect-dropdown .dropdown-btn{\n        display: inline-block;\n        border: 1px solid #adadad;\n        width: 100%;\n        padding: 6px 12px;\n        margin-bottom: 8px;\n        font-weight: 400;\n        line-height: 1.52857143;\n        text-align: left;\n        vertical-align: middle;\n        cursor: pointer;\n        background-image: none;\n        border-radius: 4px;\n      }\n\n.form-control{\n          margin-bottom: 10px;\n      }\n\n.feeds{\n        border: 1px solid #d3d3d3;\n        padding: 8px;\n        margin-bottom: 2%;\n        border-radius: 5px;\n        z-index: 999;\n    }\n\n.feeds .profile-details{\n        padding: 3px;\n    }\n\n.feeds .profile-details p{\n        margin-bottom: -2px;\n        font-weight: 700;\n        color: #6564c1;\n        font-size: 15px;\n    }\n\n.feeds .profile-details span{\n        color: #bebbb9;\n    }\n\n.post{\n        padding: 20px;\n    }\n\n.description{\n        padding: 10px 0px;\n    }\n\n.description p{\n        font-size: 16px;\n        font-weight: 600;\n    }\n\n.description p img{\n        width: 20px;\n        top: 0px;\n        float: right;\n        clear: both;\n    }\n\n.post .image img{\n        width: 100%;\n        height: 400px;\n    }\n\n.post .afterText{\n        padding-top: 20px;\n    }\n\n.postChat{\n        width: 250px;\n        min-height: 80vh;\n        max-height: 80vh;\n        border-top: 1px solid #d3d3d3;\n        padding-top: 5px;\n        overflow-y: auto;\n        position: fixed;\n        right: 200px;\n    }\n\n.postChat .person1{\n        width: auto;\n        max-width: 80%;\n        background-color: #1877F2;\n        color: #fff;\n        float: right;\n        clear: both;\n        text-align: right;\n        padding: 10px;\n        margin: 20px 10px;\n        border-radius: 20px 0px 20px 20px;\n        position: relative;\n        word-break: break-all;\n    }\n\n.postChat .person2{\n        width: auto;\n        max-width: 80%;\n        background-color: #F2F3F5;\n        color: #444950;;\n        float: left;\n        clear: both;\n        padding: 10px;\n        margin: 20px 10px 20px 70px;\n        border-radius: 0px 20px 20px 20px;\n        position: relative;\n        word-break: break-all;\n    }\n\n.postChat .person2 img{\n        margin-left: -70px;\n        margin-top: -10px;\n        width: 45px;\n        height: 45px;\n    }\n\n.postChat .person2 .text {\n        margin-top: -35px;\n    }\n\n.chat-box{\n        width: 100%;\n        height: 50px;\n        background-color: rgb(241, 239, 239);\n        border: 1px solid #444950;\n        border-radius: 25px;\n        border: none;\n        padding: 15px 20px;\n        font-size: 18px;\n        color: #444950;\n    }\n\n.send-message{\n        width: 60%;\n    }\n\n.btn-circle.btn-xl {\n        width: 70px;\n        height: 70px;\n        padding: 10px 16px;\n        border-radius: 35px;\n        font-size: 24px;\n        line-height: 1.33;\n    }\n\n.btn-circle {\n        width: 50px;\n        height: 50px;\n        padding: auto;\n        border-radius: 50px;\n        text-align: center;\n        font-size: 12px;\n        line-height: 1.42857;\n    }\n\n.msg-container{\n        padding-right: 0px;\n    }\n\n.no-feeds{\n    margin-left: auto;\n    margin-right: auto;\n    text-align:  center;\n}\n\nimg.no-property{\n    height:400px;width:500px;\n    opacity: .7;\n}\n\n@media(max-width: 769px){\n    img.no-property{\n        height:200px;width:300px;\n    }\n\n}\n\n.no-chat{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlua3MvcHJvcGVydGllcy1saXN0aW5ncy9wcm9wZXJ0aWVzLWxpc3RpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBOzs7R0FHRzs7QUFDSDtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsNkJBQTZCO0FBQ2pDOztBQUNBO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHVDQUF1QztJQUN2Qyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBQ0M7SUFDRyxxQkFBcUI7SUFDckIsZ0NBQTBEO0lBQzFELFdBQVc7SUFDWCxZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix1Q0FBdUM7SUFDdkMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUNBOztRQUVRLGVBQWU7UUFDZixjQUFjO0lBQ2xCOztBQUNBOztZQUVRLFlBQVk7SUFDcEI7O0FBRUE7O1FBRUksZUFBZTs7SUFFbkI7O0FBQ0E7WUFDUSw4QkFBOEI7SUFDdEM7O0FBQ0E7UUFDSSxhQUFhO0lBQ2pCOztBQUNBO1FBQ0ksNkJBQTZCO0lBQ2pDOztBQUNBO1FBQ0kscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLHNCQUFzQjtRQUN0QixrQkFBa0I7TUFDcEI7O0FBQ0E7VUFDSSxtQkFBbUI7TUFDdkI7O0FBRUY7UUFDSSx5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjs7QUFDQTtRQUNJLFlBQVk7SUFDaEI7O0FBQ0E7UUFDSSxtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxlQUFlO0lBQ25COztBQUNBO1FBQ0ksY0FBYztJQUNsQjs7QUFDQTtRQUNJLGFBQWE7SUFDakI7O0FBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCOztBQUNBO1FBQ0ksV0FBVztRQUNYLFFBQVE7UUFDUixZQUFZO1FBQ1osV0FBVztJQUNmOztBQUNBO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7O0FBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBQ0E7UUFDSSxZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQiw2QkFBNkI7UUFDN0IsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7QUFDQTtRQUNJLFdBQVc7UUFDWCxjQUFjO1FBQ2QseUJBQXlCO1FBQ3pCLFdBQVc7UUFDWCxZQUFZO1FBQ1osV0FBVztRQUNYLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2IsaUJBQWlCO1FBQ2pCLGlDQUFpQztRQUNqQyxrQkFBa0I7UUFDbEIscUJBQXFCO0lBQ3pCOztBQUVBO1FBQ0ksV0FBVztRQUNYLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsY0FBYztRQUNkLFdBQVc7UUFDWCxXQUFXO1FBQ1gsYUFBYTtRQUNiLDJCQUEyQjtRQUMzQixpQ0FBaUM7UUFDakMsa0JBQWtCO1FBQ2xCLHFCQUFxQjtJQUN6Qjs7QUFDQTtRQUNJLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsV0FBVztRQUNYLFlBQVk7SUFDaEI7O0FBQ0E7UUFDSSxpQkFBaUI7SUFDckI7O0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG9DQUFvQztRQUNwQyx5QkFBeUI7UUFDekIsbUJBQW1CO1FBQ25CLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLGNBQWM7SUFDbEI7O0FBQ0E7UUFDSSxVQUFVO0lBQ2Q7O0FBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLGlCQUFpQjtJQUNyQjs7QUFFQTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLG9CQUFvQjtJQUN4Qjs7QUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFHSjtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWSxDQUFDLFdBQVc7SUFDeEIsV0FBVztBQUNmOztBQUdBO0lBQ0k7UUFDSSxZQUFZLENBQUMsV0FBVztJQUM1Qjs7QUFFSjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpbmtzL3Byb3BlcnRpZXMtbGlzdGluZ3MvcHJvcGVydGllcy1saXN0aW5ncy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb3BlcnRpZXN7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi8qIC5uYXZiYXItaW52ZXJzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1NzhFNTsgXG4gICAgYm9yZGVyLWNvbG9yOiAjMzU3OEU1O1xufSAqL1xuLnNpZGViYXItMntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAyMDBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XG59XG4uaGVhZGluZ3tcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuLmhlYWR7XG4gICAgcGFkZGluZzogMHB4IDEwcHggNXB4O1xufVxuLmhlYWQgaW1ne1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uaGVhZCBoNXtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjNjU2NGMxO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5oZWFkIHB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLmhlYWQgaXtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNyaXRlcmlhLXBlcnBvc2UsIC5jcml0ZXJpYS1tZXRob2R7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogLTExcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2QzZDNkMztcbn1cbi5jcml0ZXJpYS1tZXRob2R7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkM2QzZDM7XG4gICAgcGFkZGluZzogOHB4IDBweCA4cHggMTVweDtcbn1cbi5jcml0ZXJpYS1wZXJwb3NlIGgze1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5tc2d7XG4gICAgcGFkZGluZzogNXB4IDhweDtcbn1cbi5tc2cgc3BhbntcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LWZhbWlseTogQXJpYWwsc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XG59XG5cbi5tc2cgaW5wdXRbdHlwZT0gcmFkaW9de1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5pbnB1dFt0eXBlPXJhZGlvXSsgbGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgbWFyZ2luOiAtN3B4IDRweCAwIC0xMHB4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwwLDAsLjMzKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG59XG4gaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIGxhYmVse1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9ob21lL2NoZWNrLWljbi5zdmcpO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW46IC03cHggNHB4IDAgLTEwcHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLDAsMCwuMzMpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBsaW5lLWhlaWdodDogNDRweDtcbn1cbnNwYW5cbiAgICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM1YzZkN2E7XG4gICAgfVxuICAgIGlucHV0W3R5cGU9cmFkaW9dLGlucHV0W3R5cGU9Y2hlY2tib3hdXG4gICAgIHtcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcbiAgICB9XG5cbiAgICAubXNnXG4gICAge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIFxuICAgIH1cbiAgICBsYWJlbHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC04cHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnNlbGVjdC1hcmVhe1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cbiAgICAubXVsdGlzZWxlY3QtZHJvcGRvd257XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0bntcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYWRhZGFkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTI4NTcxNDM7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuICAgICAgLmZvcm0tY29udHJvbHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgLmZlZWRze1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDNkM2QzO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICB9XG4gICAgLmZlZWRzIC5wcm9maWxlLWRldGFpbHN7XG4gICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICB9XG4gICAgLmZlZWRzIC5wcm9maWxlLWRldGFpbHMgcHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICM2NTY0YzE7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG4gICAgLmZlZWRzIC5wcm9maWxlLWRldGFpbHMgc3BhbntcbiAgICAgICAgY29sb3I6ICNiZWJiYjk7XG4gICAgfVxuICAgIC5wb3N0e1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb257XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24gcHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICAuZGVzY3JpcHRpb24gcCBpbWd7XG4gICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBjbGVhcjogYm90aDtcbiAgICB9XG4gICAgLnBvc3QgLmltYWdlIGltZ3tcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgfVxuICAgIC5wb3N0IC5hZnRlclRleHR7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cbiAgICAucG9zdENoYXR7XG4gICAgICAgIHdpZHRoOiAyNTBweDtcbiAgICAgICAgbWluLWhlaWdodDogODB2aDtcbiAgICAgICAgbWF4LWhlaWdodDogODB2aDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkM2QzZDM7XG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcmlnaHQ6IDIwMHB4O1xuICAgIH1cbiAgICAucG9zdENoYXQgLnBlcnNvbjF7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NzdGMjtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweCAwcHggMjBweCAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB9XG5cbiAgICAucG9zdENoYXQgLnBlcnNvbjJ7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDgwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YyRjNGNTtcbiAgICAgICAgY29sb3I6ICM0NDQ5NTA7O1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogMjBweCAxMHB4IDIwcHggNzBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB9XG4gICAgLnBvc3RDaGF0IC5wZXJzb24yIGltZ3tcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC03MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgICAgIGhlaWdodDogNDVweDtcbiAgICB9XG4gICAgLnBvc3RDaGF0IC5wZXJzb24yIC50ZXh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogLTM1cHg7XG4gICAgfVxuICAgIC5jaGF0LWJveHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjM5LCAyMzkpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjNDQ0OTUwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBjb2xvcjogIzQ0NDk1MDtcbiAgICB9XG4gICAgLnNlbmQtbWVzc2FnZXtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG4gICAgLmJ0bi1jaXJjbGUuYnRuLXhsIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGhlaWdodDogNzBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMzO1xuICAgIH1cbiAgICBcbiAgICAuYnRuLWNpcmNsZSB7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIHBhZGRpbmc6IGF1dG87XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS40Mjg1NztcbiAgICB9XG4gICAgLm1zZy1jb250YWluZXJ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICB9XG5cblxuLm5vLWZlZWRze1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiAgY2VudGVyO1xufVxuXG5pbWcubm8tcHJvcGVydHl7XG4gICAgaGVpZ2h0OjQwMHB4O3dpZHRoOjUwMHB4O1xuICAgIG9wYWNpdHk6IC43O1xufVxuXG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OXB4KXtcbiAgICBpbWcubm8tcHJvcGVydHl7XG4gICAgICAgIGhlaWdodDoyMDBweDt3aWR0aDozMDBweDtcbiAgICB9XG5cbn1cblxuLm5vLWNoYXR7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/links/properties-listings/properties-listings.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/links/properties-listings/properties-listings.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PropertiesListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertiesListingsComponent", function() { return PropertiesListingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_services_lead_advertise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/lead-advertise.service */ "./src/app/core/services/lead-advertise.service.ts");
/* harmony import */ var _core_services_lead_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/lead-chat.service */ "./src/app/core/services/lead-chat.service.ts");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_top_header_page_top_header_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dashboard/top-header-page/top-header.service */ "./src/app/pages/dashboard/top-header-page/top-header.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let PropertiesListingsComponent = class PropertiesListingsComponent {
    constructor(advertiseService, leadChatService, fb, firebaseDb, route, topheaderservice, router) {
        this.advertiseService = advertiseService;
        this.leadChatService = leadChatService;
        this.fb = fb;
        this.firebaseDb = firebaseDb;
        this.route = route;
        this.topheaderservice = topheaderservice;
        this.router = router;
        this.leadId = null;
        this.advertiseType = "multiple";
        this.propertiesList = [];
        this.messagesList = [];
        this.properties = [];
        this.selected_area = [];
        this.municipalities = [];
        this.selected_municipalities = [];
        this.property_types = [];
        this.selected_categories = [];
        this.areas = [];
        this.submitted = false;
        this.bedrooms = ["Any", "1", "1+", "2", "2+", "3", "3+", "4", "4+", "5", "5+"];
        this.dens = ["0", "1"];
        this.dropdownSettings = {};
    }
    ngOnInit() {
        this.buildForm();
        this.customerToken = this.advertiseService.getCustomerToken();
        this.route.params.subscribe(param => {
            this.advertiseId = param.id;
        }); // advertise Id would get from URL
        this.advertiseProperties1();
        this.page = 1;
    }
    SelectPropertyType(e) {
        this.getMunicipality();
        this.setpropertyType(e.target.value);
        if (this.property_for == 'SALE') {
            this.show_sale_price = true;
            this.show_lease_price = false;
            this.selected_lower_price = 0;
            this.selected_upper_price = 10000000;
            this.low_price = 0;
            this.upp_price = 0;
        }
        else {
            this.selected_lower_price = 0;
            this.selected_upper_price = 100000;
            this.low_price = 0;
            this.upp_price = 0;
            this.show_sale_price = false;
            this.show_lease_price = true;
        }
    }
    advertiseProperties1() {
        this.advertiseService.properties(this.advertiseId, this.customerToken).subscribe((res) => {
            if (res.code == 200) {
                this.agent = res.add.agent;
                this.propertiesList = res.properties;
                this.leadId = res.leadId;
                this.customerToken = res.customer_token;
                this.agentId = res.add.user_id;
                this.temp_client_name = res.temp_name;
                this.advertise = res.add;
                this.advertiseService.setCustomerToken(this.customerToken);
                this.updateOnConnect();
                this.leadMessages();
            }
        });
        this.advertiseProperties(this.customerToken, this.advertiseId, this.page, '', this.temp_client_name);
    }
    leadMessages() {
        this.leadChatService.messages(this.leadId).subscribe((res) => {
            this.messagesList = res.messages;
            this.readMessage().valueChanges().subscribe(msg => {
                if (msg.length > 0) {
                    var index = this.messagesList.findIndex(x => x.id == msg[msg.length - 1].id);
                    if (index === -1) {
                        this.messagesList.push(msg[msg.length - 1]);
                    }
                    else
                        console.log("object already exists");
                }
            });
        });
        console.log(this.messagesList);
    }
    buildForm() {
        this.form = this.fb.group({
            textMessage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
    }
    sendMessage(mlsNumber) {
        if (!this.submitted) {
            this.submitted = true;
            this.leadChatService.sendMessage(this.advertiseType, this.advertiseId, this.customerToken, null, this.form.value.textMessage, mlsNumber).subscribe((res) => {
                console.log(res);
                if (res.code == 200) {
                    this.messagesList.push(res.message);
                    this.buildForm();
                    let activity = {
                        messageId: res.message.id,
                        advertiseType: this.advertiseType,
                        advertiseId: parseInt(this.advertiseId),
                        customer_token: this.customerToken
                    };
                    this.firebaseDb.object("agent_" + this.agentId + "/message_activity/customer/message/").update(activity);
                }
                this.submitted = false;
            });
        }
        return false;
    }
    readMessage() {
        let messagePath = "agent_" + this.agentId + "/" + this.advertiseType + "_" + this.advertiseId + "_" + this.customerToken + "/agent/";
        return this.firebaseDb.list(messagePath, ref => ref);
    }
    updateOnConnect() {
        this.firebaseDb.object('.info/connected').valueChanges().subscribe(data => {
            let status = data ? true : false;
            if (!(this.agentId == "undefined" || this.agentId == undefined)) {
                this.updateStatus(status);
            }
            this.updateOnDisconnect();
        });
    }
    updateStatus(status) {
        if (status) {
            // Firebase Lead json
            let lead = {
                agent_id: this.agentId,
                advertiseType: this.advertiseType,
                advertiseId: this.advertiseId,
                customer_token: this.customerToken,
                title: "New Client M" + this.advertiseId + "" + this.customerToken.substr(this.customerToken.length - 3),
                status: "Temporary Client",
                id: this.leadId,
            };
            this.firebaseDb.object(this.clientOnlinePath()).update(lead);
        }
        else {
            this.firebaseDb.object(this.clientOnlinePath()).remove();
        }
    }
    updateOnDisconnect() {
        this.firebaseDb.database.ref().child(this.clientOnlinePath()).onDisconnect().remove();
    }
    clientOnlinePath() {
        return "agent_" + this.agentId + "/onlineLeads/" + this.advertiseType + "_" + this.advertiseId + "_" + this.customerToken;
    }
    setpropertyType(property_type) {
        this.property_type = property_type;
        if (this.property_type == 'RESIDENTIAL') {
            this.getPropertyList();
            $("#color-6").attr("checked", false);
            $("#color-5").attr("checked", false);
            $("#color-7").attr("checked", true);
            this.lower_selected_size = "";
            this.upper_selected_size = "";
            this.selected_area = [];
            this.selected_categories = [];
            this.selected_municipalities = [];
            this.show_size = false;
            this.show_bedrooms = true;
            this.show_dens = false;
        }
        else if (this.property_type == 'CONDO') {
            this.getPropertyList();
            $("#color-7").attr("checked", false);
            $("#color-5").attr("checked", false);
            $("#color-6").attr("checked", true);
            this.lower_selected_size = "";
            this.upper_selected_size = "";
            this.selected_area = [];
            this.selected_categories = [];
            this.selected_municipalities = [];
            this.show_size = false;
            this.show_bedrooms = true;
            this.show_dens = true;
        }
        else if (this.property_type == 'COMMERCIAL') {
            this.getPropertyList();
            $("#color-6").attr("checked", false);
            $("#color-7").attr("checked", false);
            $("#color-5").attr("checked", true);
            this.lower_selected_size = "0";
            this.selected_bedroom = "";
            this.selected_area = [];
            this.selected_categories = [];
            this.selected_municipalities = [];
            this.show_size = true;
            this.show_bedrooms = false;
            this.show_dens = false;
        }
    }
    onChangePropertyFor(property_for, advertise) {
        this.property_for = property_for;
        this.selected_municipalities = (advertise ? advertise.municipality : '');
        this.selected_area = (advertise ? advertise.area : '');
        this.selected_bedroom = (advertise ? advertise.bedroom : '');
        this.property_type = (advertise ? advertise.property_type : '');
        this.selected_categories = (advertise ? advertise.category : '');
        if (this.property_for == 'SALE') {
            $("#color-1").attr("checked", true);
            this.show_sale_price = true;
            this.show_lease_price = false;
            this.selected_lower_price = advertise ? advertise.lower_price ? advertise.lower_price : "0" : "0";
            this.selected_upper_price = advertise ? advertise.upper_price ? advertise.upper_price : "10000000" : "10000000";
            this.low_price = this.selected_lower_price;
            this.upp_price = this.selected_upper_price;
        }
        else {
            $("#color-2").attr("checked", true);
            this.selected_lower_price = advertise ? advertise.lower_price ? advertise.lower_price : "0" : "0";
            this.selected_upper_price = advertise ? advertise.upper_price ? advertise.upper_price : "100000" : "100000";
            this.low_price = this.selected_lower_price;
            this.upp_price = this.selected_upper_price;
            this.show_sale_price = false;
            this.show_lease_price = true;
        }
        this.getMunicipality();
        this.getPropertyList();
    }
    getMunicipality() {
        let obj = {
            search: this.selected_area,
            property_for: this.property_for,
            property_type: this.property_type
        };
        this.topheaderservice.allMunicipalty(obj).subscribe((res) => {
            this.municipalities = res.municipalities;
        });
    }
    getPropertyList() {
        let obj = {
            property_key: this.property_type
        };
        this.topheaderservice.property_TypeList(obj).subscribe((res) => {
            this.property_types = res.propertytypes;
            this.upper_selected_size = res.upper_size_limit;
            this.areas = res.areas;
            console.log(this.areas);
        });
    }
    onAreaSelect(item) {
        this.getMunicipality();
    }
    onSelectAllArea(areaitems) {
        this.getMunicipality();
    }
    onAreaDeSelect(item) {
        this.getMunicipality();
    }
    onAreaDeSelectAll(areaitems) {
        this.getMunicipality();
    }
    onItemSelect(item) {
    }
    onSelectAllItem(items) { }
    onItemDeSelect(item) {
    }
    onItemDeSelectAll(items) { }
    onChangeLowerPrice($event) {
        this.selected_lower_price = $event.target.value;
    }
    onChangeUpperPrice($event) {
        this.selected_upper_price = $event.target.value;
    }
    onChangeBedroom($event) {
        this.selected_bedroom = $event.target.value;
    }
    onChangeDen($event) {
        this.selected_den = $event.target.value;
    }
    onChangeLowerSize($event) {
        this.lower_selected_size = $event.target.value;
    }
    onChangeUpperSize($event) {
        this.upper_selected_size = $event.target.value;
    }
    showSelectedPropertyType(pr_type) {
        this.setpropertyType(pr_type);
    }
    searchResult() {
        this.page = 1;
        this.search = "new_search";
        this.properties = [];
        this.advertiseProperties(this.customerToken, this.advertiseId, this.page, this.search, this.temp_client_name);
    }
    advertiseProperties(clientToken, advertise_id, page, new_search, tempclient_name) {
        // Sending customerToken to the server (if first time then it will send '' otherwise it will send already saved customerToken from localstorage)
        this.advertise.getAdvertiseProperties(advertise_id, this.property_for, this.property_type, this.selected_area, this.selected_municipalities, this.selected_lower_price, this.selected_upper_price, this.selected_categories, this.lower_selected_size, this.upper_selected_size, this.selected_bedroom, this.selected_den, page, new_search, clientToken, tempclient_name).then(data => {
            if (data.code == 200) {
                this.multi_advertise = data.add;
                if (data.properties) {
                    for (let obj of data.properties) {
                        this.properties.push(obj);
                    }
                }
                this.pages = data.total_pages;
                this.page = data.page;
                this.lower_selected_size = this.multi_advertise.lower_size ? this.multi_advertise.lower_size : "0";
                this.upper_selected_size = this.multi_advertise.upper_size ? this.multi_advertise.upper_size : "0";
                this.low_size = this.lower_selected_size;
                this.upp_size = this.upper_selected_size;
                this.onChangePropertyFor(this.multi_advertise.property_for, this.multi_advertise);
                this.showSelectedPropertyType(this.multi_advertise.property_type);
                this.selected_municipalities = JSON.parse(this.multi_advertise.municipality);
                this.selected_area = JSON.parse(this.multi_advertise.area);
                this.selected_categories = JSON.parse(this.multi_advertise.category);
                this.agentId = this.multi_advertise.agent.id;
                // Update customerToken from backend response
                // this.customerToken = data.customer_token
                // localStorage.setItem('customertoken',  this.customerToken);
                // if(data.lead){
                //   this.temp_client_name = (data.lead.title ? data.lead.title : data.temp_name)
                //   // this.chat.changeLeadData(data.lead)  
                // }
                // else{
                //   this.temp_client_name = (this.lead.title ? this.lead.title : data.temp_name)
                // }
                // console.log(this.temp_client_name)
                // localStorage.setItem('temp_client_name', this.temp_client_name);
                // this.customer_image = data.lead.client_image
                // this.chat.onlineTempClient(this.multi_advertise.agent,this.customerToken,this.multi_advertise.agent.id,this.lead.id,this.lead.status,this.temp_client_name,this.customer_image,this.lead.is_permanent)
                // setInterval(() => { 
                //   this.chat.updateTempClientCreatedAt(this.multi_advertise.agent.id,this.customerToken)
                // }, 10000 );
                // this.getChats()
            }
            else {
                this.router.navigate(["**"]);
            }
        });
    }
    addToFavourite(property_id) {
        let obj = {
            advertise_id: this.advertiseId,
            property_id: property_id,
            client_token: this.customerToken
        };
        this.topheaderservice.addAdvertisementFavProperty(obj).subscribe((res) => {
            if (res.code == 200) {
                const index = this.properties.findIndex(item => item.id === property_id);
                this.properties[index].is_advertise_favourite = res.property.is_advertise_favourite;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    title: 'Warning',
                    text: res.errors,
                    type: 'error'
                });
            }
        });
    }
};
PropertiesListingsComponent.ctorParameters = () => [
    { type: _core_services_lead_advertise_service__WEBPACK_IMPORTED_MODULE_3__["LeadAdvertiseService"] },
    { type: _core_services_lead_chat_service__WEBPACK_IMPORTED_MODULE_4__["LeadChatService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _dashboard_top_header_page_top_header_service__WEBPACK_IMPORTED_MODULE_7__["TopHeaderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
PropertiesListingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-properties-listings',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./properties-listings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/links/properties-listings/properties-listings.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./properties-listings.component.css */ "./src/app/pages/links/properties-listings/properties-listings.component.css")).default]
    })
], PropertiesListingsComponent);



/***/ }),

/***/ "./src/app/shared/components/chat/chat.component.css":
/*!***********************************************************!*\
  !*** ./src/app/shared/components/chat/chat.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* =============chat css=================== */\n\n.chat-home {\n   width: 450px;\n   height: 510px;\n   position: fixed;\n   z-index: 99;\n   top: 25%;\n   right: 3%;\n   background: #F6F7F9;\n   box-sizing: border-box;\n   box-shadow: 0px 5px 15px 0px solid lightgrey;\n}\n\n.chat-home .chat-user {\n   width: 100%;\n   height: 80px;\n   background: #2B2B2B;\n   padding: 15px;\n}\n\n.chat-home .chat-user img {\n   width: 50px;\n   height: 50px;\n   border-radius: 100%;\n   background: white;\n}\n\n.chat-home .chat-user h4 {\n   margin-top: 15px;\n}\n\n.chat-home .chat-body {\n   width: 100%;\n   height: 70%;\n   overflow-x: hidden;\n   overflow-y: scroll;\n}\n\n.chat-home .chat-footer {\n   padding: 10px;\n}\n\n.chat-home .chat-footer .chat-form {\n   border-radius: 5px;\n   padding: 12px 8px 8px 8px;\n   background: white;\n   box-shadow: 0px 5px 15px 0px lightgrey;\n}\n\n.chat-home .chat-footer .chat-form input {\n   border: none;\n   background: none;\n   color: black;\n   font-size: 16px;\n   width: 90%;\n   padding-left: 20px;\n}\n\n.chat-home .chat-footer .chat-form label {\n   cursor: pointer;\n   font-size: 20px;\n   text-align: right;\n}\n\n.chat-home .chat-footer .chat-form input:focus {\n   outline: none;\n}\n\n.user-mssg {\n   padding: 5px 10px 5px 10px;\n}\n\n.user-photo img {\n   width: 40px;\n   height: 40px;\n   border-radius: 100%;\n   background: white;\n   margin-top: 20px;\n}\n\n.mssg p {\n   font-size: 12px;\n   color: black;\n   opacity: .7;\n   margin-bottom: 1px;\n   margin-top: 1px;\n}\n\n.mssg h4 {\n   font-size: 16px;\n   color: black;\n   padding: 10px;\n   background: white;\n   box-shadow: 0px 5px 15px 0px lightgrey;\n   /* background: #ABD9E8; */\n   word-break: break-all;\n   display: inline-block;\n   margin-top: 1px;\n   margin-bottom: 1px;\n   border-radius: 20px;\n}\n\n.team-mssg {\n   padding: 5px 10px 5px 10px;\n}\n\n.chat-mob {\n   position: fixed;\n   z-index: 2;\n   right: 3%;\n   bottom: 15%;\n}\n\n.chat-mob span {\n   background: blue;\n   color: white;\n   font-size: 22px;\n   padding: 15px;\n   border-radius: 100%;\n}\n\n@media screen and (max-width:512px) {\n   .chat-home {\n       display: none;\n       width: 332px;\n       top: 6%;\n   }\n   .chat-mob {\n       display: inline-block;\n   }\n   #myBtn[_ngcontent-c2] {\n       display: none;\n       position: fixed;\n       bottom: 20px;\n       right: 11px;\n       z-index: 99;\n       border: none;\n       outline: none;\n       background-color: grey;\n       color: white;\n       cursor: pointer;\n       padding: 15px;\n       border-radius: 53px;\n       font-size: 18px;\n       width: 50px;\n       height: 50px;\n   }\n   #legend {\n       display: block;\n   }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDOztBQUU3QztHQUNHLFlBQVk7R0FDWixhQUFhO0dBQ2IsZUFBZTtHQUNmLFdBQVc7R0FDWCxRQUFRO0dBQ1IsU0FBUztHQUNULG1CQUFtQjtHQUNuQixzQkFBc0I7R0FDdEIsNENBQTRDO0FBQy9DOztBQUVBO0dBQ0csV0FBVztHQUNYLFlBQVk7R0FDWixtQkFBbUI7R0FDbkIsYUFBYTtBQUNoQjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osbUJBQW1CO0dBQ25CLGlCQUFpQjtBQUNwQjs7QUFFQTtHQUNHLGdCQUFnQjtBQUNuQjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLGtCQUFrQjtBQUNyQjs7QUFFQTtHQUNHLGFBQWE7QUFDaEI7O0FBRUE7R0FDRyxrQkFBa0I7R0FDbEIseUJBQXlCO0dBQ3pCLGlCQUFpQjtHQUNqQixzQ0FBc0M7QUFDekM7O0FBRUE7R0FDRyxZQUFZO0dBQ1osZ0JBQWdCO0dBQ2hCLFlBQVk7R0FDWixlQUFlO0dBQ2YsVUFBVTtHQUNWLGtCQUFrQjtBQUNyQjs7QUFFQTtHQUNHLGVBQWU7R0FDZixlQUFlO0dBQ2YsaUJBQWlCO0FBQ3BCOztBQUVBO0dBQ0csYUFBYTtBQUNoQjs7QUFFQTtHQUNHLDBCQUEwQjtBQUM3Qjs7QUFFQTtHQUNHLFdBQVc7R0FDWCxZQUFZO0dBQ1osbUJBQW1CO0dBQ25CLGlCQUFpQjtHQUNqQixnQkFBZ0I7QUFDbkI7O0FBRUE7R0FDRyxlQUFlO0dBQ2YsWUFBWTtHQUNaLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsZUFBZTtBQUNsQjs7QUFFQTtHQUNHLGVBQWU7R0FDZixZQUFZO0dBQ1osYUFBYTtHQUNiLGlCQUFpQjtHQUNqQixzQ0FBc0M7R0FDdEMseUJBQXlCO0dBQ3pCLHFCQUFxQjtHQUNyQixxQkFBcUI7R0FDckIsZUFBZTtHQUNmLGtCQUFrQjtHQUNsQixtQkFBbUI7QUFDdEI7O0FBRUE7R0FDRywwQkFBMEI7QUFDN0I7O0FBRUE7R0FDRyxlQUFlO0dBQ2YsVUFBVTtHQUNWLFNBQVM7R0FDVCxXQUFXO0FBQ2Q7O0FBRUE7R0FDRyxnQkFBZ0I7R0FDaEIsWUFBWTtHQUNaLGVBQWU7R0FDZixhQUFhO0dBQ2IsbUJBQW1CO0FBQ3RCOztBQUdBO0dBQ0c7T0FDSSxhQUFhO09BQ2IsWUFBWTtPQUNaLE9BQU87R0FDWDtHQUNBO09BQ0kscUJBQXFCO0dBQ3pCO0dBQ0E7T0FDSSxhQUFhO09BQ2IsZUFBZTtPQUNmLFlBQVk7T0FDWixXQUFXO09BQ1gsV0FBVztPQUNYLFlBQVk7T0FDWixhQUFhO09BQ2Isc0JBQXNCO09BQ3RCLFlBQVk7T0FDWixlQUFlO09BQ2YsYUFBYTtPQUNiLG1CQUFtQjtPQUNuQixlQUFlO09BQ2YsV0FBVztPQUNYLFlBQVk7R0FDaEI7R0FDQTtPQUNJLGNBQWM7R0FDbEI7QUFDSCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PWNoYXQgY3NzPT09PT09PT09PT09PT09PT09PSAqL1xuXG4uY2hhdC1ob21lIHtcbiAgIHdpZHRoOiA0NTBweDtcbiAgIGhlaWdodDogNTEwcHg7XG4gICBwb3NpdGlvbjogZml4ZWQ7XG4gICB6LWluZGV4OiA5OTtcbiAgIHRvcDogMjUlO1xuICAgcmlnaHQ6IDMlO1xuICAgYmFja2dyb3VuZDogI0Y2RjdGOTtcbiAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggMHB4IHNvbGlkIGxpZ2h0Z3JleTtcbn1cblxuLmNoYXQtaG9tZSAuY2hhdC11c2VyIHtcbiAgIHdpZHRoOiAxMDAlO1xuICAgaGVpZ2h0OiA4MHB4O1xuICAgYmFja2dyb3VuZDogIzJCMkIyQjtcbiAgIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5jaGF0LWhvbWUgLmNoYXQtdXNlciBpbWcge1xuICAgd2lkdGg6IDUwcHg7XG4gICBoZWlnaHQ6IDUwcHg7XG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5jaGF0LWhvbWUgLmNoYXQtdXNlciBoNCB7XG4gICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uY2hhdC1ob21lIC5jaGF0LWJvZHkge1xuICAgd2lkdGg6IDEwMCU7XG4gICBoZWlnaHQ6IDcwJTtcbiAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmNoYXQtaG9tZSAuY2hhdC1mb290ZXIge1xuICAgcGFkZGluZzogMTBweDtcbn1cblxuLmNoYXQtaG9tZSAuY2hhdC1mb290ZXIgLmNoYXQtZm9ybSB7XG4gICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICBwYWRkaW5nOiAxMnB4IDhweCA4cHggOHB4O1xuICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggMHB4IGxpZ2h0Z3JleTtcbn1cblxuLmNoYXQtaG9tZSAuY2hhdC1mb290ZXIgLmNoYXQtZm9ybSBpbnB1dCB7XG4gICBib3JkZXI6IG5vbmU7XG4gICBiYWNrZ3JvdW5kOiBub25lO1xuICAgY29sb3I6IGJsYWNrO1xuICAgZm9udC1zaXplOiAxNnB4O1xuICAgd2lkdGg6IDkwJTtcbiAgIHBhZGRpbmctbGVmdDogMjBweDtcbn1cblxuLmNoYXQtaG9tZSAuY2hhdC1mb290ZXIgLmNoYXQtZm9ybSBsYWJlbCB7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG4gICBmb250LXNpemU6IDIwcHg7XG4gICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmNoYXQtaG9tZSAuY2hhdC1mb290ZXIgLmNoYXQtZm9ybSBpbnB1dDpmb2N1cyB7XG4gICBvdXRsaW5lOiBub25lO1xufVxuXG4udXNlci1tc3NnIHtcbiAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xufVxuXG4udXNlci1waG90byBpbWcge1xuICAgd2lkdGg6IDQwcHg7XG4gICBoZWlnaHQ6IDQwcHg7XG4gICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubXNzZyBwIHtcbiAgIGZvbnQtc2l6ZTogMTJweDtcbiAgIGNvbG9yOiBibGFjaztcbiAgIG9wYWNpdHk6IC43O1xuICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4ubXNzZyBoNCB7XG4gICBmb250LXNpemU6IDE2cHg7XG4gICBjb2xvcjogYmxhY2s7XG4gICBwYWRkaW5nOiAxMHB4O1xuICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICBib3gtc2hhZG93OiAwcHggNXB4IDE1cHggMHB4IGxpZ2h0Z3JleTtcbiAgIC8qIGJhY2tncm91bmQ6ICNBQkQ5RTg7ICovXG4gICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICBtYXJnaW4tdG9wOiAxcHg7XG4gICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4udGVhbS1tc3NnIHtcbiAgIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xufVxuXG4uY2hhdC1tb2Ige1xuICAgcG9zaXRpb246IGZpeGVkO1xuICAgei1pbmRleDogMjtcbiAgIHJpZ2h0OiAzJTtcbiAgIGJvdHRvbTogMTUlO1xufVxuXG4uY2hhdC1tb2Igc3BhbiB7XG4gICBiYWNrZ3JvdW5kOiBibHVlO1xuICAgY29sb3I6IHdoaXRlO1xuICAgZm9udC1zaXplOiAyMnB4O1xuICAgcGFkZGluZzogMTVweDtcbiAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG5cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1MTJweCkge1xuICAgLmNoYXQtaG9tZSB7XG4gICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICB3aWR0aDogMzMycHg7XG4gICAgICAgdG9wOiA2JTtcbiAgIH1cbiAgIC5jaGF0LW1vYiB7XG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgfVxuICAgI215QnRuW19uZ2NvbnRlbnQtYzJdIHtcbiAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgcmlnaHQ6IDExcHg7XG4gICAgICAgei1pbmRleDogOTk7XG4gICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNTNweDtcbiAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgfVxuICAgI2xlZ2VuZCB7XG4gICAgICAgZGlzcGxheTogYmxvY2s7XG4gICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/shared/components/chat/chat.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/chat/chat.component.ts ***!
  \**********************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ChatComponent = class ChatComponent {
    constructor() {
        this.windowState = 'open';
    }
    ngOnInit() {
    }
    closeChatWindow(state) {
        this.windowState = state;
    }
};
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/chat/chat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.css */ "./src/app/shared/components/chat/chat.component.css")).default]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/shared/components/lead-messages/lead-messages.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/lead-messages/lead-messages.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xlYWQtbWVzc2FnZXMvbGVhZC1tZXNzYWdlcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/lead-messages/lead-messages.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/lead-messages/lead-messages.component.ts ***!
  \****************************************************************************/
/*! exports provided: LeadMessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadMessagesComponent", function() { return LeadMessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_services_lead_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/lead-chat.service */ "./src/app/core/services/lead-chat.service.ts");



let LeadMessagesComponent = class LeadMessagesComponent {
    constructor(leadChatService) {
        this.leadChatService = leadChatService;
        this.messagesList = [];
    }
    ngOnInit() {
        this.customerToken = "123456";
        this.leadId = 143,
            this.leadMessages();
    }
    leadMessages() {
        this.leadChatService.messages(this.leadId).subscribe((res) => {
            console.log(res);
            this.messagesList = res.messages;
        });
    }
};
LeadMessagesComponent.ctorParameters = () => [
    { type: _core_services_lead_chat_service__WEBPACK_IMPORTED_MODULE_2__["LeadChatService"] }
];
LeadMessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lead-messages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./lead-messages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/lead-messages/lead-messages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./lead-messages.component.css */ "./src/app/shared/components/lead-messages/lead-messages.component.css")).default]
    })
], LeadMessagesComponent);



/***/ }),

/***/ "./src/app/shared/components/slider/slider.component.css":
/*!***************************************************************!*\
  !*** ./src/app/shared/components/slider/slider.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.navbar-header img{\n\tmargin-top: -20px;\n}\n#mob-carousel{\n\tdisplay:none;\n}\n@media(max-width: 769px){\n\t.header-1{\n\t\tdisplay: none;\n\t}\n\t.navbar-header img{\n\tmargin-top: -10px;\n}\n#myCarousel{\n\tdisplay: none;\n}\n#mob-carousel{\n\tdisplay:block;\n}\n}\n@media (min-width:766px) and (max-width: 992px) {\n\n    .navbar .navbar-header {\n        float: none !important;\n    }\n    .navbar .navbar-right {\n        float: none !important;\n    }\n    .navbar .navbar-header .navbar-toggle {\n        display: inline-block !important;\n    }\n    .navbar .navbar-collapse {\n        border-top: 1px solid transparent;\n        box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);\n    }\n    /*.navbar-fixed-top {\n\t\ttop: 0;\n\t\tborder-width: 0 0 1px;\n\t}*/\n    .navbar-collapse.collapse {\n        display: none !important;\n    }\n    .navbar .navbar-collapse .navbar-nav {\n        float: none !important;\n\t\tmargin-top: 7.5px;\n\t}\n\t.navbar .navbar-collapse .navbar-nav>li {\n        float: none;\n    }\n    .navbar .navbar-collapse .navbar-nav>li>a {\n        padding-top: 10px;\n        padding-bottom: 10px;\n    }\n    .navbar .navbar-collapse{\n  \t\t/*display:none !important;*/\n  \t\tz-index: 20000 !important;\n  \t\tmargin-top: 5px;\n\t}\n}\n@media (min-width: 767px) and (max-width: 769px){\n\t.navbar-collapse.collapse {\n\t    display: none!important;\n\t}\n\t.collapse.in {\n\t    display: inline-block !important;\n\t}\n}\n@media(max-width: 512px){\n\t.navbar .navbar-collapse{\n  \t\tmargin-top: 5px;\n\t}\n}\n.about img {\n    width: 420px;\n}\n@media(max-width: 512px){\n\t.about img{\n\twidth: 250px;\n}\n.why img{\n\twidth: 292px;\n    height: 316px;\n\tmargin-top: 10px;\n}\n.clients img {\n    margin-bottom: 20px;\n}\n}\np#small-end{\n\tdisplay: none;\n}\n@media(max-width: 769px){\n\t.second {\n    \n    margin-top: 9%;\n\t}\n\t.price-1 {\n    padding-top: 0%;\n}\n.price-2 {\t\n    margin-top: 14%;\n}\n.price-3 {\t\n    margin-top: 14%;\n}\n.foot-link a {\n    font-size: 12px;\n    margin-right: 7px;\n    font-weight: bold;\n}\n.icon span {\n    color: white;\n    display: inline-block;\n    font-size: 25px;\n    margin-bottom: 0px;\n    margin-right: 30px;\n    margin-top: 20px;\n}\np#big-end{\n\tdisplay: none;\n}\np#small-end{\n\tdisplay: inline-block;\n}\n}\n.price-block{\n\tborder:1px solid #EAEAEA;\n\theight: 290px;\n\tbox-sizing:border-box;\n\t/* width: 80%; */\n}\n.price-block h2{\n\tfont-size: 18px;\n\tcolor: black;font-weight: 550;\n\tbackground: #EAEAEA;\n\tmargin-top: 0px;\n\tpadding-top: 15px;\n\tpadding-bottom: 14px;\n}\n.price-block h3{\n\tfont-size: 35px;\n\tcolor: black;\n\tfont-weight: 500;\n}\n.price-block h4{\n\tfont-size: 20px;\n\tcolor: grey;\n\tfont-weight: 500;\n\tmargin-top: -5px;\n}\n.price-block p{\n\tcolor: black;\n\tfont-size: 16px;\n}\n.price-block button{\n\twidth: 95%;\n\tfont-weight: 550;\n}\n/* Slider Css */\n.slideshow-container[_ngcontent-niu-c4]   .caption[_ngcontent-niu-c4] {\n\tposition: absolute;\n\tbottom: 100px !important;\n\tpadding: 10px;\n\twidth: 100%;\n}\n.slider h1{\n\tfont-size: 45px;\n\tcolor: white;\n\tfont-weight: 900;\n\ttext-shadow: 3px 0px white;\n\tletter-spacing: 3px;\n\tmargin-top: -15px;\n}\n.slider p{\n\tfont-size: 22px;\n\tcolor: white;\n\tfont-weight: 550;\n\topacity: .7;\n}\n.slider img{\n\tpadding-top: 10%;\n}\n@media(max-width: 769px){\n\t.slider h1{\n\tfont-size: 30px;\n\tcolor: white;\n\tfont-weight: 900;\n\ttext-shadow: none;\n\tletter-spacing: 0px;\n}\n.slider p{\n\tfont-size: 14px;\n\tcolor: white;\n\tfont-weight: 550;\n}\t\n}\n@media(min-width: 812px) and (max-width: 1025px){\n\t.slider h1{\n\tfont-size: 35px;\n\tcolor: white;\n\tfont-weight: 900;\n\t}\n\t.slider p{\n\t\tfont-size: 14px;\n\t\tcolor: white;\n\t\tfont-weight: 600;\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7Q0FDQztFQUNDLGFBQWE7Q0FDZDtDQUNBO0NBQ0EsaUJBQWlCO0FBQ2xCO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0FBQ0E7O0lBRUk7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZ0NBQWdDO0lBQ3BDO0lBQ0E7UUFDSSxpQ0FBaUM7UUFDakMsK0NBQStDO0lBQ25EO0lBQ0E7OztHQUdEO0lBQ0M7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHNCQUFzQjtFQUM1QixpQkFBaUI7Q0FDbEI7Q0FDQTtRQUNPLFdBQVc7SUFDZjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtJQUN4QjtJQUNBO0lBQ0EsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixlQUFlO0NBQ2xCO0FBQ0Q7QUFDQTtDQUNDO0tBQ0ksdUJBQXVCO0NBQzNCO0NBQ0E7S0FDSSxnQ0FBZ0M7Q0FDcEM7QUFDRDtBQUNBO0NBQ0M7SUFDRyxlQUFlO0NBQ2xCO0FBQ0Q7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtDQUNDO0NBQ0EsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxZQUFZO0lBQ1QsYUFBYTtDQUNoQixnQkFBZ0I7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0FBQ0E7Q0FDQyxhQUFhO0FBQ2Q7QUFDQTtDQUNDOztJQUVHLGNBQWM7Q0FDakI7Q0FDQTtJQUNHLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTtBQUdBO0NBQ0Msd0JBQXdCO0NBQ3hCLGFBQWE7Q0FDYixxQkFBcUI7Q0FDckIsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsWUFBWSxDQUFDLGdCQUFnQjtDQUM3QixtQkFBbUI7Q0FDbkIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixvQkFBb0I7QUFDckI7QUFFQTtDQUNDLGVBQWU7Q0FDZixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7Q0FDWixlQUFlO0FBQ2hCO0FBRUE7Q0FDQyxVQUFVO0NBQ1YsZ0JBQWdCO0FBQ2pCO0FBR0MsZUFBZTtBQUNmO0NBQ0Esa0JBQWtCO0NBQ2xCLHdCQUF3QjtDQUN4QixhQUFhO0NBQ2IsV0FBVztBQUNaO0FBRUE7Q0FDQyxlQUFlO0NBQ2YsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQiwwQkFBMEI7Q0FDMUIsbUJBQW1CO0NBQ25CLGlCQUFpQjtBQUNsQjtBQUVBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaO0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7QUFFQTtDQUNDO0NBQ0EsZUFBZTtDQUNmLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsaUJBQWlCO0NBQ2pCLG1CQUFtQjtBQUNwQjtBQUNBO0NBQ0MsZUFBZTtDQUNmLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7QUFDQTtBQUVBO0NBQ0M7Q0FDQSxlQUFlO0NBQ2YsWUFBWTtDQUNaLGdCQUFnQjtDQUNoQjtDQUNBO0VBQ0MsZUFBZTtFQUNmLFlBQVk7RUFDWixnQkFBZ0I7Q0FDakI7QUFDRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NsaWRlci9zbGlkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm5hdmJhci1oZWFkZXIgaW1ne1xuXHRtYXJnaW4tdG9wOiAtMjBweDtcbn1cbiNtb2ItY2Fyb3VzZWx7XG5cdGRpc3BsYXk6bm9uZTtcbn1cbkBtZWRpYShtYXgtd2lkdGg6IDc2OXB4KXtcblx0LmhlYWRlci0xe1xuXHRcdGRpc3BsYXk6IG5vbmU7XG5cdH1cblx0Lm5hdmJhci1oZWFkZXIgaW1ne1xuXHRtYXJnaW4tdG9wOiAtMTBweDtcbn1cbiNteUNhcm91c2Vse1xuXHRkaXNwbGF5OiBub25lO1xufVxuI21vYi1jYXJvdXNlbHtcblx0ZGlzcGxheTpibG9jaztcbn1cbn1cbkBtZWRpYSAobWluLXdpZHRoOjc2NnB4KSBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcblxuICAgIC5uYXZiYXIgLm5hdmJhci1oZWFkZXIge1xuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubmF2YmFyIC5uYXZiYXItcmlnaHQge1xuICAgICAgICBmbG9hdDogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAubmF2YmFyIC5uYXZiYXItaGVhZGVyIC5uYXZiYXItdG9nZ2xlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwyNTUsMjU1LDAuMSk7XG4gICAgfVxuICAgIC8qLm5hdmJhci1maXhlZC10b3Age1xuXHRcdHRvcDogMDtcblx0XHRib3JkZXItd2lkdGg6IDAgMCAxcHg7XG5cdH0qL1xuICAgIC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdiB7XG4gICAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG5cdFx0bWFyZ2luLXRvcDogNy41cHg7XG5cdH1cblx0Lm5hdmJhciAubmF2YmFyLWNvbGxhcHNlIC5uYXZiYXItbmF2PmxpIHtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgfVxuICAgIC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZSAubmF2YmFyLW5hdj5saT5hIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAubmF2YmFyIC5uYXZiYXItY29sbGFwc2V7XG4gIFx0XHQvKmRpc3BsYXk6bm9uZSAhaW1wb3J0YW50OyovXG4gIFx0XHR6LWluZGV4OiAyMDAwMCAhaW1wb3J0YW50O1xuICBcdFx0bWFyZ2luLXRvcDogNXB4O1xuXHR9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCl7XG5cdC5uYXZiYXItY29sbGFwc2UuY29sbGFwc2Uge1xuXHQgICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XG5cdH1cblx0LmNvbGxhcHNlLmluIHtcblx0ICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuXHR9XG59XG5AbWVkaWEobWF4LXdpZHRoOiA1MTJweCl7XG5cdC5uYXZiYXIgLm5hdmJhci1jb2xsYXBzZXtcbiAgXHRcdG1hcmdpbi10b3A6IDVweDtcblx0fVxufVxuXG4uYWJvdXQgaW1nIHtcbiAgICB3aWR0aDogNDIwcHg7XG59XG5AbWVkaWEobWF4LXdpZHRoOiA1MTJweCl7XG5cdC5hYm91dCBpbWd7XG5cdHdpZHRoOiAyNTBweDtcbn1cbi53aHkgaW1ne1xuXHR3aWR0aDogMjkycHg7XG4gICAgaGVpZ2h0OiAzMTZweDtcblx0bWFyZ2luLXRvcDogMTBweDtcbn1cbi5jbGllbnRzIGltZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbn1cbnAjc21hbGwtZW5ke1xuXHRkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhKG1heC13aWR0aDogNzY5cHgpe1xuXHQuc2Vjb25kIHtcbiAgICBcbiAgICBtYXJnaW4tdG9wOiA5JTtcblx0fVxuXHQucHJpY2UtMSB7XG4gICAgcGFkZGluZy10b3A6IDAlO1xufVxuLnByaWNlLTIge1x0XG4gICAgbWFyZ2luLXRvcDogMTQlO1xufVxuLnByaWNlLTMge1x0XG4gICAgbWFyZ2luLXRvcDogMTQlO1xufVxuLmZvb3QtbGluayBhIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaWNvbiBzcGFuIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5wI2JpZy1lbmR7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5wI3NtYWxsLWVuZHtcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxufVxuXG5cbi5wcmljZS1ibG9ja3tcblx0Ym9yZGVyOjFweCBzb2xpZCAjRUFFQUVBO1xuXHRoZWlnaHQ6IDI5MHB4O1xuXHRib3gtc2l6aW5nOmJvcmRlci1ib3g7XG5cdC8qIHdpZHRoOiA4MCU7ICovXG59XG4ucHJpY2UtYmxvY2sgaDJ7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0Y29sb3I6IGJsYWNrO2ZvbnQtd2VpZ2h0OiA1NTA7XG5cdGJhY2tncm91bmQ6ICNFQUVBRUE7XG5cdG1hcmdpbi10b3A6IDBweDtcblx0cGFkZGluZy10b3A6IDE1cHg7XG5cdHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuXG4ucHJpY2UtYmxvY2sgaDN7XG5cdGZvbnQtc2l6ZTogMzVweDtcblx0Y29sb3I6IGJsYWNrO1xuXHRmb250LXdlaWdodDogNTAwO1xufVxuLnByaWNlLWJsb2NrIGg0e1xuXHRmb250LXNpemU6IDIwcHg7XG5cdGNvbG9yOiBncmV5O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHRtYXJnaW4tdG9wOiAtNXB4O1xufVxuLnByaWNlLWJsb2NrIHB7XG5cdGNvbG9yOiBibGFjaztcblx0Zm9udC1zaXplOiAxNnB4O1xufVxuXG4ucHJpY2UtYmxvY2sgYnV0dG9ue1xuXHR3aWR0aDogOTUlO1xuXHRmb250LXdlaWdodDogNTUwO1xufVxuXG5cbiAvKiBTbGlkZXIgQ3NzICovXG4gLnNsaWRlc2hvdy1jb250YWluZXJbX25nY29udGVudC1uaXUtYzRdICAgLmNhcHRpb25bX25nY29udGVudC1uaXUtYzRdIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRib3R0b206IDEwMHB4ICFpbXBvcnRhbnQ7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4uc2xpZGVyIGgxe1xuXHRmb250LXNpemU6IDQ1cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0dGV4dC1zaGFkb3c6IDNweCAwcHggd2hpdGU7XG5cdGxldHRlci1zcGFjaW5nOiAzcHg7XG5cdG1hcmdpbi10b3A6IC0xNXB4O1xufVxuXG4uc2xpZGVyIHB7XG5cdGZvbnQtc2l6ZTogMjJweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXdlaWdodDogNTUwO1xuXHRvcGFjaXR5OiAuNztcbn1cblxuLnNsaWRlciBpbWd7XG5cdHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbkBtZWRpYShtYXgtd2lkdGg6IDc2OXB4KXtcblx0LnNsaWRlciBoMXtcblx0Zm9udC1zaXplOiAzMHB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdGZvbnQtd2VpZ2h0OiA5MDA7XG5cdHRleHQtc2hhZG93OiBub25lO1xuXHRsZXR0ZXItc3BhY2luZzogMHB4O1xufVxuLnNsaWRlciBwe1xuXHRmb250LXNpemU6IDE0cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0Zm9udC13ZWlnaHQ6IDU1MDtcbn1cdFxufVxuXG5AbWVkaWEobWluLXdpZHRoOiA4MTJweCkgYW5kIChtYXgtd2lkdGg6IDEwMjVweCl7XG5cdC5zbGlkZXIgaDF7XG5cdGZvbnQtc2l6ZTogMzVweDtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXdlaWdodDogOTAwO1xuXHR9XG5cdC5zbGlkZXIgcHtcblx0XHRmb250LXNpemU6IDE0cHg7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/slider/slider.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/slider/slider.component.ts ***!
  \**************************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SliderComponent = class SliderComponent {
    constructor() {
        this.imageSources = [];
        var captions = [
            // `<span class="caption1">SYNERGii helps you close more deals in today's market</span> <br> <span class="caption2">ENGAGEMENT PLATFORM</span> <p class="caption3">Syenery Helps you Close More Details in Today's Market</p>`, 
            `SYNERGii helps you close more deals<p class="caption2">IN TODAY'S MARKET</p>`,
            `The Premiere Client-Agent <p class="caption2">ENGAGEMENT PLATFORM</p>`,
            `SYNERGii engages you with more clients <p class="caption2">TO CLOSE MORE DEALS</p>`
        ];
        var imgs = [
            "https://res.cloudinary.com/dplzldsrw/image/upload/v1536830631/Landing%20Page%20Slider/Simplicity_Interior_large.jpg",
            "https://res.cloudinary.com/dplzldsrw/image/upload/v1536830666/Landing%20Page%20Slider/Exclusive-Home-Furniture-Dubai-H59-About-Small-Home-Decor-Inspiration-with-Home-Furniture-Dubai.jpg",
            "https://res.cloudinary.com/dplzldsrw/image/upload/v1536830711/Landing%20Page%20Slider/home-banner01.jpg",
        ];
        for (var i = 0; i < 3; i++) {
            var slImg = {
                url: imgs[i],
                caption: captions[i],
            };
            this.imageSources.push(slImg);
        }
    }
    ngOnInit() {
    }
};
SliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-slider',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./slider.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/slider/slider.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./slider.component.css */ "./src/app/shared/components/slider/slider.component.css")).default]
    })
], SliderComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    // apiUrl: 'http://www.synergii.ca:3000/api/',
    apiUrl: 'https://www.synergii.ca:5555/api/',
    // apiUrl:'http://localhost:3000/api/',
    firebase: {
        // apiKey: "AIzaSyCp7lIuvKrCY2hbpXxfxfVm4A-iZMW9ATo",
        // authDomain: "synergiidev.firebaseapp.com",
        // databaseURL: "https://synergiidev.firebaseio.com",
        // projectId: "synergiidev",
        // storageBucket: 'synergiidev.appspot.com',
        // messagingSenderId: '460897152919'
        apiKey: "AIzaSyAlKdXhrOtadj30ZDbATA4tyRTQ4nI9JhU",
        authDomain: "testsynergii.firebaseapp.com",
        databaseURL: "https://testsynergii.firebaseio.com",
        projectId: "testsynergii",
        storageBucket: "testsynergii.appspot.com",
        messagingSenderId: "88519936875",
        appId: "1:88519936875:web:454c27fb2ac54564"
    },
    stripeKey: "pk_test_cf4nrPF4CseFRXeJgC3U9zQn"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tecorb/Desktop/jai/projects/synergii-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
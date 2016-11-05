webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _svg4everybody = __webpack_require__(1);
	
	var _svg4everybody2 = _interopRequireDefault(_svg4everybody);
	
	var _jquery = __webpack_require__(2);
	
	var _jquery2 = _interopRequireDefault(_jquery);
	
	__webpack_require__(6);
	
	__webpack_require__(5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _jquery2.default)(function () {
		(0, _svg4everybody2.default)();
	});

/***/ },

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	$(document).on('ready', function () {
		$('#slider').slider({
			value: 230,
			min: 0,
			max: 800,
			step: 5
		});
	});

/***/ }

})
//# sourceMappingURL=0.92e32f623890f548196a.hot-update.js.map
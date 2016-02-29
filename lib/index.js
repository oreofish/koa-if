'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (middleware) {
  var _this2 = this;

  var condition = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

  return function () {
    var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!((0, _lodash2.default)(condition) && condition(ctx))) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return middleware(ctx, next);

            case 3:
              _context.next = 12;
              break;

            case 5:
              if (!((0, _lodash4.default)(condition) && condition)) {
                _context.next = 10;
                break;
              }

              _context.next = 8;
              return middleware(ctx, next);

            case 8:
              _context.next = 12;
              break;

            case 10:
              _context.next = 12;
              return next();

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })),
        _this = _this2;

    return function (_x2, _x3) {
      return ref.apply(_this, arguments);
    };
  }();
};

var _lodash = require('lodash.isFunction');

var _lodash2 = _interopRequireDefault(_lodash);

var _lodash3 = require('lodash.isboolean');

var _lodash4 = _interopRequireDefault(_lodash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
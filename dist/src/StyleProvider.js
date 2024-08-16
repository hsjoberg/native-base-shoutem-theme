Object.defineProperty(exports,"__esModule",{value:true});var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _Theme=require('./Theme');var _Theme2=_interopRequireDefault(_Theme);
var _normalizeStyle=require('./StyleNormalizer/normalizeStyle');var _normalizeStyle2=_interopRequireDefault(_normalizeStyle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



















































var NativeBaseContext=_react2.default.createContext();exports.default=
{
Context:NativeBaseContext,
fixTheme:function fixTheme(theme){
return new _Theme2.default(theme);
}};
//# sourceMappingURL=StyleProvider.js.map
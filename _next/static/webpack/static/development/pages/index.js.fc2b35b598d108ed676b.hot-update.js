webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/form/form.tsx":
/*!**********************************!*\
  !*** ./components/form/form.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant */ "./constant.ts");
var _jsxFileName = "/Users/netdb-eb03/Desktop/wiaspace/digital-certificate-ncku/components/form/form.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var fakedata = {
  name: 'AAA',
  birth: 'BBB',
  major: 'CCC',
  other: 'DDD',
  apply: 'EEE'
};

var Form = function Form(props) {
  var alertMessage = '學生資料錯誤，請重新輸入';

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      eng = _useState[0],
      setEng = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      alert = _useState2[0],
      setAlert = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      inputText = _useState3[0],
      setInputText = _useState3[1];

  var handleSubmit = function handleSubmit(event) {
    event.preventDefault(); // tslint:disable
    // QueryState handler

    if (props.status === _constant__WEBPACK_IMPORTED_MODULE_2__["QueryState"].INPUT) {
      // test trigger API
      var testReturn = true;
      var testPayload = false;

      if (testReturn) {
        if (testPayload) {
          props.dispatch(_constant__WEBPACK_IMPORTED_MODULE_2__["QueryState"].SUCCESS);
        } else {
          props.dispatch(_constant__WEBPACK_IMPORTED_MODULE_2__["QueryState"].FAILURE);
        }
      } else {
        setAlert(!alert);
      }
    } // IndexState handler
    else if (props.status === _constant__WEBPACK_IMPORTED_MODULE_2__["IndexState"].INPUT) {
        if (props.status === _constant__WEBPACK_IMPORTED_MODULE_2__["IndexState"].INPUT) {
          var _testReturn = true;

          if (_testReturn) {
            props.dispatch(_constant__WEBPACK_IMPORTED_MODULE_2__["IndexState"].READY);
            props.setUser(fakedata);
          } else {
            props.dispatch(_constant__WEBPACK_IMPORTED_MODULE_2__["IndexState"].FAILURE);
          }
        } else {
          props.dispatch(_constant__WEBPACK_IMPORTED_MODULE_2__["IndexState"].FAILURE);
        }
      } // ReissueState
      else if (props.status === _constant__WEBPACK_IMPORTED_MODULE_2__["ReissueState"].INPUT) {
          console.log("fefe");

          if (props.status === _constant__WEBPACK_IMPORTED_MODULE_2__["ReissueState"].INPUT) {
            var _testReturn2 = true;

            if (_testReturn2) {
              props.dispatch(_constant__WEBPACK_IMPORTED_MODULE_2__["IndexState"].READY);
              props.setUser(fakedata);
            } else {
              props.dispatch(_constant__WEBPACK_IMPORTED_MODULE_2__["IndexState"].FAILURE);
            }
          } else {
            props.dispatch(_constant__WEBPACK_IMPORTED_MODULE_2__["IndexState"].FAILURE);
          }
        } // tslint:enable

  };

  var handleChange = function handleChange(event) {
    event.preventDefault();
    setInputText(event.currentTarget.value);
  };

  return __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("label", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3522642959" + " " + "selector",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("a", {
    onClick: function onClick() {
      return setEng(!eng);
    },
    className: "jsx-3522642959" + " " + ((eng ? 'selected' : 'default') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "\u4E2D\u6587"), __jsx("a", {
    onClick: function onClick() {
      return setEng(!eng);
    },
    className: "jsx-3522642959" + " " + ((!eng ? 'selected' : 'default') || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "\u82F1\u6587")), __jsx("div", {
    className: "jsx-3522642959" + " " + "alert",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, alert ? alertMessage : '')), __jsx("label", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx("input", {
    onChange: handleChange,
    type: "text",
    placeholder: "\u5B78\u751F\u8B49\u865F\u78BC",
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx("div", {
    style: {
      height: '80px',
      width: '100%'
    },
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })), __jsx("label", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("button", {
    type: "submit",
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "\u78BA\u8A8D CONFIRM"), __jsx("div", {
    className: "jsx-3522642959",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("div", {
    style: !eng ? {
      backgroundColor: '#707070'
    } : {},
    className: "jsx-3522642959" + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), __jsx("div", {
    style: eng ? {
      backgroundColor: '#707070'
    } : {},
    className: "jsx-3522642959" + " " + "circle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3522642959",
    __self: this
  }, "form.jsx-3522642959{width:100%;height:75%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:20px 0px 20px 0px;border-radius:0px 0px 20px 20px;}label.jsx-3522642959{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}input.jsx-3522642959{border-top:0px;border-left:0px;border-right:0px;border-bottom:2px solid rgba(186,184,184,0.66);background-color:transparent;width:70%;font-size:25px;line-height:1.2;color:#707070;}input.jsx-3522642959::-webkit-input-placeholder{font-size:25px;color:rgba(186,184,184,0.66);}input.jsx-3522642959::-moz-placeholder{font-size:25px;color:rgba(186,184,184,0.66);}input.jsx-3522642959:-ms-input-placeholder{font-size:25px;color:rgba(186,184,184,0.66);}input.jsx-3522642959::placeholder{font-size:25px;color:rgba(186,184,184,0.66);}button.jsx-3522642959{width:70%;font-size:23px;border-radius:31px;background-color:#4781e6;line-height:1.22;-webkit-letter-spacing:0.05px;-moz-letter-spacing:0.05px;-ms-letter-spacing:0.05px;letter-spacing:0.05px;text-align:center;color:rgba(247,247,247,0.92);padding:8px 0px 8px 0px;border:0px;}.circle.jsx-3522642959{width:15px;height:15px;border-radius:50%;border:1px solid #707070;display:inline-block;margin:20px 12px 20px 12px;}.alert.jsx-3522642959{color:rgba(236,35,35,0.92);font-family:EdwardianScriptITC;font-size:25px;height:36px;}.selector.jsx-3522642959{font-size:33px;-webkit-text-stroke:1px #676464;font-family:SegoeUI;color:#676464;text-align:center;margin-top:25px;}.selector.jsx-3522642959>a.jsx-3522642959{margin:0px 15px 0px 15px;}.selected.jsx-3522642959{opacity:0.35;}.default.jsx-3522642959{opacity:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXRkYi1lYjAzL0Rlc2t0b3Avd2lhc3BhY2UvZGlnaXRhbC1jZXJ0aWZpY2F0ZS1uY2t1L2NvbXBvbmVudHMvZm9ybS9mb3JtLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SGtCLEFBR3NCLEFBVUEsQUFPSSxBQVdBLEFBSUwsQUFZQyxBQVFtQixBQU1mLEFBUVUsQUFHWixBQUdILFVBdkNLLEFBd0NqQixDQXhFYSxBQVVFLEFBa0NELEVBeUJkLEVBcERrQixBQVdnQixBQThCQSxPQXpEbkIsQ0E0Q0ssRUFaQyxBQWlDckIsRUFkaUMsSUFsQ2QsVUE0QlEsR0FqQjNCLEFBSzJCLEdBeUJMLENBeEM4QixVQWtDbkMsUUFOTSxDQWFQLEVBekJHLElBbUJMLFFBT00sSUFsREssQUE0Q3pCLENBbkJ3QixDQVlLLFFBNUJFLENBbEJDLEdBNERkLGVBYmxCLENBY0EsU0ExQ1ksVUFDSyxlQUNDLGdCQUNGLGNBQ2hCLEtBYnFCLE9BeUJELGtCQUNjLEVBbkNiLDJCQW9DSyx3QkFDYixXQUNiLElBNUJ3QiwyQkFUQSxtREFVeEIsMkJBVDRCLDBCQUNNLGdDQUNsQyIsImZpbGUiOiIvVXNlcnMvbmV0ZGItZWIwMy9EZXNrdG9wL3dpYXNwYWNlL2RpZ2l0YWwtY2VydGlmaWNhdGUtbmNrdS9jb21wb25lbnRzL2Zvcm0vZm9ybS50c3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBJbmRleFN0YXRlLCBRdWVyeVN0YXRlLCBJU3R1ZGVudCwgUmVpc3N1ZVN0YXRlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnQnO1xuXG5jb25zdCBmYWtlZGF0YTogSVN0dWRlbnQgPSB7XG4gIG5hbWU6ICdBQUEnLFxuICBiaXJ0aDogJ0JCQicsXG4gIG1ham9yOiAnQ0NDJyxcbiAgb3RoZXI6ICdEREQnLFxuICBhcHBseTogJ0VFRScsXG59O1xuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgc3RhdHVzOiBRdWVyeVN0YXRlIHwgSW5kZXhTdGF0ZSB8IFJlaXNzdWVTdGF0ZTtcbiAgZGlzcGF0Y2g6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPEluZGV4U3RhdGUgfCBRdWVyeVN0YXRlIHwgUmVpc3N1ZVN0YXRlPj47XG4gIHNldFVzZXI/OiBSZWFjdC5EaXNwYXRjaDxSZWFjdC5TZXRTdGF0ZUFjdGlvbjxJU3R1ZGVudD4+O1xufVxuXG5jb25zdCBGb3JtOiBSZWFjdC5GQzxJUHJvcHM+ID0gKHByb3BzOiBJUHJvcHMpID0+IHtcbiAgY29uc3QgYWxlcnRNZXNzYWdlID0gJ+WtuOeUn+izh+aWmemMr+iqpO+8jOiri+mHjeaWsOi8uOWFpSc7XG4gIGNvbnN0IFtlbmcsIHNldEVuZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFthbGVydCwgc2V0QWxlcnRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlXG4gICAgLy8gUXVlcnlTdGF0ZSBoYW5kbGVyXG4gICAgaWYgKFxuICAgICAgcHJvcHMuc3RhdHVzID09PSBRdWVyeVN0YXRlLklOUFVUXG4gICAgKSB7XG4gICAgICAvLyB0ZXN0IHRyaWdnZXIgQVBJXG4gICAgICBjb25zdCB0ZXN0UmV0dXJuID0gdHJ1ZTtcbiAgICAgIGNvbnN0IHRlc3RQYXlsb2FkID0gZmFsc2U7XG4gICAgICBpZiAodGVzdFJldHVybikge1xuICAgICAgICBpZiAodGVzdFBheWxvYWQpIHtcbiAgICAgICAgICBwcm9wcy5kaXNwYXRjaChRdWVyeVN0YXRlLlNVQ0NFU1MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzLmRpc3BhdGNoKFF1ZXJ5U3RhdGUuRkFJTFVSRSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEFsZXJ0KCFhbGVydCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEluZGV4U3RhdGUgaGFuZGxlclxuICAgIGVsc2UgaWYgKFxuICAgICAgcHJvcHMuc3RhdHVzID09PSBJbmRleFN0YXRlLklOUFVUXG4gICAgKSB7XG4gICAgICBpZihwcm9wcy5zdGF0dXMgPT09IEluZGV4U3RhdGUuSU5QVVQpIHtcbiAgICAgICAgY29uc3QgdGVzdFJldHVybiA9IHRydWU7XG4gICAgICAgIGlmKHRlc3RSZXR1cm4pIHtcbiAgICAgICAgICBwcm9wcy5kaXNwYXRjaChJbmRleFN0YXRlLlJFQURZKTtcbiAgICAgICAgICBwcm9wcy5zZXRVc2VyKGZha2VkYXRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wcy5kaXNwYXRjaChJbmRleFN0YXRlLkZBSUxVUkUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByb3BzLmRpc3BhdGNoKEluZGV4U3RhdGUuRkFJTFVSRSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFJlaXNzdWVTdGF0ZVxuICAgIGVsc2UgaWYgKFxuICAgICAgcHJvcHMuc3RhdHVzID09PSBSZWlzc3VlU3RhdGUuSU5QVVRcbiAgICApIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmVmZVwiKTtcbiAgICAgIGlmKHByb3BzLnN0YXR1cyA9PT0gUmVpc3N1ZVN0YXRlLklOUFVUKSB7XG4gICAgICAgIGNvbnN0IHRlc3RSZXR1cm4gPSB0cnVlO1xuICAgICAgICBpZih0ZXN0UmV0dXJuKSB7XG4gICAgICAgICAgcHJvcHMuZGlzcGF0Y2goSW5kZXhTdGF0ZS5SRUFEWSk7XG4gICAgICAgICAgcHJvcHMuc2V0VXNlcihmYWtlZGF0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHMuZGlzcGF0Y2goSW5kZXhTdGF0ZS5GQUlMVVJFKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9wcy5kaXNwYXRjaChJbmRleFN0YXRlLkZBSUxVUkUpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyB0c2xpbnQ6ZW5hYmxlXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElucHV0VGV4dChldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxmb3JtXG4gICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxuXG4gICAgPlxuICAgICAgPGxhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdG9yXCI+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17ZW5nID8gJ3NlbGVjdGVkJyA6ICdkZWZhdWx0J31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEVuZyghZW5nKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDkuK3mlodcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17IWVuZyA/ICdzZWxlY3RlZCcgOiAnZGVmYXVsdCd9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFbmcoIWVuZyl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAg6Iux5paHXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydFwiPnthbGVydCA/IGFsZXJ0TWVzc2FnZSA6ICcnfTwvZGl2PlxuICAgICAgPC9sYWJlbD5cblxuICAgICAgPGxhYmVsPlxuICAgICAgICA8aW5wdXQgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuWtuOeUn+itieiZn+eivFwiIC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnODBweCcsIHdpZHRoOiAnMTAwJScgfX0gLz5cbiAgICAgIDwvbGFiZWw+XG5cbiAgICAgIDxsYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+56K66KqNIENPTkZJUk08L2J1dHRvbj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjaXJjbGVcIlxuICAgICAgICAgICAgc3R5bGU9eyFlbmcgPyB7IGJhY2tncm91bmRDb2xvcjogJyM3MDcwNzAnIH0gOiB7fX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNpcmNsZVwiXG4gICAgICAgICAgICBzdHlsZT17ZW5nID8geyBiYWNrZ3JvdW5kQ29sb3I6ICcjNzA3MDcwJyB9IDoge319XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2xhYmVsPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGZvcm0ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDIwcHggMjBweDtcbiAgICAgICAgfVxuICAgICAgICBsYWJlbCB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIGJvcmRlci10b3A6IDBweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMHB4O1xuICAgICAgICAgIGJvcmRlci1yaWdodDogMHB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCByZ2JhKDE4NiwgMTg0LCAxODQsIDAuNjYpO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMTg2LCAxODQsIDE4NCwgMC42Nik7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzgxZTY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjI7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjQ3LCAyNDcsIDI0NywgMC45Mik7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDBweCA4cHggMHB4O1xuICAgICAgICAgIGJvcmRlcjogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jaXJjbGUge1xuICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDEycHggMjBweCAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5hbGVydCB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMjM2LCAzNSwgMzUsIDAuOTIpO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBFZHdhcmRpYW5TY3JpcHRJVEM7XG4gICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VsZWN0b3Ige1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzNweDtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggIzY3NjQ2NDtcbiAgICAgICAgICBmb250LWZhbWlseTogU2Vnb2VVSTtcbiAgICAgICAgICBjb2xvcjogIzY3NjQ2NDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgfVxuICAgICAgICAuc2VsZWN0b3IgPiBhIHtcbiAgICAgICAgICBtYXJnaW46IDBweCAxNXB4IDBweCAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWxlY3RlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMC4zNTtcbiAgICAgICAgfVxuICAgICAgICAuZGVmYXVsdCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXX0= */\n/*@ sourceURL=/Users/netdb-eb03/Desktop/wiaspace/digital-certificate-ncku/components/form/form.tsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.fc2b35b598d108ed676b.hot-update.js.map
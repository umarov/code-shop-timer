webpackHotUpdate(0,[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_assets_img_favicon_ico__ = __webpack_require__(1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_assets_img_favicon_ico___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_assets_img_favicon_ico__);\n\n\nlet intervalId = 0;\nlet timerValue = 0;\nlet notification;\n\nconst doubleDigitChecker = (value) => { return value.length === 1 ? `0${value}` : value; };\n\nconst calculateSeconds = milliseconds => doubleDigitChecker(`${(milliseconds / 100) % 60}`.split('.')[0]);\n\nconst calculateMinutes = milliseconds => doubleDigitChecker(`${milliseconds / 6000}`.split('.')[0]);\nconst notificationBroadcastChannel = new BroadcastChannel('timerNotification');\nconst restartBroadcastChannel = new BroadcastChannel('timerRestart');\n\n\n\nfunction startTimer(timerAmount, notificationAllowed) {\n  timerValue = timerAmount;\n\n  if (notification) {\n    notification.close();\n  }\n\n  return setInterval(() => {\n    if (timerValue === 0) {\n\n      if (Notification.permission === 'granted' && notificationAllowed) {\n        notificationBroadcastChannel.postMessage(timerValue);\n      }\n\n      postMessage({\n        timerValue,\n        milliseconds: doubleDigitChecker(`${timerValue % 100}`),\n        seconds: calculateSeconds(timerValue),\n        minutes: calculateMinutes(timerValue),\n      });\n      clearInterval(intervalId);\n    } else {\n      timerValue -= 1;\n\n      postMessage({\n        timerValue,\n        milliseconds: doubleDigitChecker(`${timerValue % 100}`),\n        seconds: calculateSeconds(timerValue),\n        minutes: calculateMinutes(timerValue),\n      });\n    }\n  }, 10);\n}\n\nrestartBroadcastChannel.onmessage = () => {\n  clearInterval(intervalId);\n\n  startTimer(timerValue, true);\n}\n\nself.addEventListener('timerstart', (event) => {\n  const { timerAmount, notificationAllowed } = event.detail;\n  clearInterval(intervalId);\n\n  intervalId = startTimer(timerAmount, notificationAllowed);\n});\n\nself.onmessage = (event) => {\n  const { data } = event;\n\n  if (data.startTimer) {\n    dispatchEvent(new CustomEvent('timerstart', {\n      detail: {\n        timerAmount: event.data.timerAmount,\n        notificationAllowed: event.data.notificationAllowed,\n      },\n    }));\n  } else if (data.resetTimer) {\n    timerValue = event.data.timerAmount;\n\n    postMessage({\n      timerValue,\n      milliseconds: doubleDigitChecker(`${timerValue % 100}`),\n      seconds: calculateSeconds(timerValue),\n      minutes: calculateMinutes(timerValue),\n    });\n    clearInterval(intervalId);\n  } else {\n    clearInterval(intervalId);\n  }\n};\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3dvcmtlcnMvdGltZXIud29ya2VyLmpzPzcwZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRpbWVySWNvbiBmcm9tICcuLi9zcmMvYXNzZXRzL2ltZy9mYXZpY29uLmljbyc7XG5cbmxldCBpbnRlcnZhbElkID0gMDtcbmxldCB0aW1lclZhbHVlID0gMDtcbmxldCBub3RpZmljYXRpb247XG5cbmNvbnN0IGRvdWJsZURpZ2l0Q2hlY2tlciA9ICh2YWx1ZSkgPT4geyByZXR1cm4gdmFsdWUubGVuZ3RoID09PSAxID8gYDAke3ZhbHVlfWAgOiB2YWx1ZTsgfTtcblxuY29uc3QgY2FsY3VsYXRlU2Vjb25kcyA9IG1pbGxpc2Vjb25kcyA9PiBkb3VibGVEaWdpdENoZWNrZXIoYCR7KG1pbGxpc2Vjb25kcyAvIDEwMCkgJSA2MH1gLnNwbGl0KCcuJylbMF0pO1xuXG5jb25zdCBjYWxjdWxhdGVNaW51dGVzID0gbWlsbGlzZWNvbmRzID0+IGRvdWJsZURpZ2l0Q2hlY2tlcihgJHttaWxsaXNlY29uZHMgLyA2MDAwfWAuc3BsaXQoJy4nKVswXSk7XG5jb25zdCBub3RpZmljYXRpb25Ccm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ3RpbWVyTm90aWZpY2F0aW9uJyk7XG5jb25zdCByZXN0YXJ0QnJvYWRjYXN0Q2hhbm5lbCA9IG5ldyBCcm9hZGNhc3RDaGFubmVsKCd0aW1lclJlc3RhcnQnKTtcblxuXG5cbmZ1bmN0aW9uIHN0YXJ0VGltZXIodGltZXJBbW91bnQsIG5vdGlmaWNhdGlvbkFsbG93ZWQpIHtcbiAgdGltZXJWYWx1ZSA9IHRpbWVyQW1vdW50O1xuXG4gIGlmIChub3RpZmljYXRpb24pIHtcbiAgICBub3RpZmljYXRpb24uY2xvc2UoKTtcbiAgfVxuXG4gIHJldHVybiBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKHRpbWVyVmFsdWUgPT09IDApIHtcblxuICAgICAgaWYgKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uID09PSAnZ3JhbnRlZCcgJiYgbm90aWZpY2F0aW9uQWxsb3dlZCkge1xuICAgICAgICBub3RpZmljYXRpb25Ccm9hZGNhc3RDaGFubmVsLnBvc3RNZXNzYWdlKHRpbWVyVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBwb3N0TWVzc2FnZSh7XG4gICAgICAgIHRpbWVyVmFsdWUsXG4gICAgICAgIG1pbGxpc2Vjb25kczogZG91YmxlRGlnaXRDaGVja2VyKGAke3RpbWVyVmFsdWUgJSAxMDB9YCksXG4gICAgICAgIHNlY29uZHM6IGNhbGN1bGF0ZVNlY29uZHModGltZXJWYWx1ZSksXG4gICAgICAgIG1pbnV0ZXM6IGNhbGN1bGF0ZU1pbnV0ZXModGltZXJWYWx1ZSksXG4gICAgICB9KTtcbiAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpbWVyVmFsdWUgLT0gMTtcblxuICAgICAgcG9zdE1lc3NhZ2Uoe1xuICAgICAgICB0aW1lclZhbHVlLFxuICAgICAgICBtaWxsaXNlY29uZHM6IGRvdWJsZURpZ2l0Q2hlY2tlcihgJHt0aW1lclZhbHVlICUgMTAwfWApLFxuICAgICAgICBzZWNvbmRzOiBjYWxjdWxhdGVTZWNvbmRzKHRpbWVyVmFsdWUpLFxuICAgICAgICBtaW51dGVzOiBjYWxjdWxhdGVNaW51dGVzKHRpbWVyVmFsdWUpLFxuICAgICAgfSk7XG4gICAgfVxuICB9LCAxMCk7XG59XG5cbnJlc3RhcnRCcm9hZGNhc3RDaGFubmVsLm9ubWVzc2FnZSA9ICgpID0+IHtcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcblxuICBzdGFydFRpbWVyKHRpbWVyVmFsdWUsIHRydWUpO1xufVxuXG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWVyc3RhcnQnLCAoZXZlbnQpID0+IHtcbiAgY29uc3QgeyB0aW1lckFtb3VudCwgbm90aWZpY2F0aW9uQWxsb3dlZCB9ID0gZXZlbnQuZGV0YWlsO1xuICBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuXG4gIGludGVydmFsSWQgPSBzdGFydFRpbWVyKHRpbWVyQW1vdW50LCBub3RpZmljYXRpb25BbGxvd2VkKTtcbn0pO1xuXG5zZWxmLm9ubWVzc2FnZSA9IChldmVudCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IGV2ZW50O1xuXG4gIGlmIChkYXRhLnN0YXJ0VGltZXIpIHtcbiAgICBkaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndGltZXJzdGFydCcsIHtcbiAgICAgIGRldGFpbDoge1xuICAgICAgICB0aW1lckFtb3VudDogZXZlbnQuZGF0YS50aW1lckFtb3VudCxcbiAgICAgICAgbm90aWZpY2F0aW9uQWxsb3dlZDogZXZlbnQuZGF0YS5ub3RpZmljYXRpb25BbGxvd2VkLFxuICAgICAgfSxcbiAgICB9KSk7XG4gIH0gZWxzZSBpZiAoZGF0YS5yZXNldFRpbWVyKSB7XG4gICAgdGltZXJWYWx1ZSA9IGV2ZW50LmRhdGEudGltZXJBbW91bnQ7XG5cbiAgICBwb3N0TWVzc2FnZSh7XG4gICAgICB0aW1lclZhbHVlLFxuICAgICAgbWlsbGlzZWNvbmRzOiBkb3VibGVEaWdpdENoZWNrZXIoYCR7dGltZXJWYWx1ZSAlIDEwMH1gKSxcbiAgICAgIHNlY29uZHM6IGNhbGN1bGF0ZVNlY29uZHModGltZXJWYWx1ZSksXG4gICAgICBtaW51dGVzOiBjYWxjdWxhdGVNaW51dGVzKHRpbWVyVmFsdWUpLFxuICAgIH0pO1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gIH0gZWxzZSB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vd29ya2Vycy90aW1lci53b3JrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ })
])
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/hiring/fieldAdvisor/page",{

/***/ "(app-pages-browser)/./src/app/components/HiringSubmitButton.tsx":
/*!***************************************************!*\
  !*** ./src/app/components/HiringSubmitButton.tsx ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst HiringSubmitButton = (param)=>{\n    let { formData, jobTitle } = param;\n    const handleSubmit = async ()=>{\n        try {\n            if (!formData.resume) {\n                alert(\"Please upload your resume before submitting.\");\n                return;\n            }\n            // Format phone number if needed\n            const formatPhoneNumber = (phoneNumber)=>{\n                const cleaned = phoneNumber.replace(/\\D/g, \"\");\n                if (cleaned.length === 10) {\n                    return \"+1\".concat(cleaned);\n                }\n                if (cleaned.length === 11 && cleaned.startsWith(\"1\")) {\n                    return \"+\".concat(cleaned);\n                }\n                return cleaned;\n            };\n            const formattedPhone = formatPhoneNumber(formData.phoneNumber);\n            // First, get base64 data for the resume\n            const formDataToSend = new FormData();\n            formDataToSend.append('resume', formData.resume, formData.resume.name);\n            formDataToSend.append('jobTitle', jobTitle);\n            const fileUploadResponse = await fetch(\"/api/uploadResume\", {\n                method: \"POST\",\n                body: formDataToSend\n            });\n            if (!fileUploadResponse.ok) {\n                const errorText = await fileUploadResponse.text();\n                console.error(\"File upload failed:\", errorText);\n                throw new Error(\"Failed to process resume: \".concat(errorText));\n            }\n            const fileData = await fileUploadResponse.json();\n            // Then send the application data with the resume data\n            const adminEmailResponse = await fetch(\"/api/sendEmail\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    to: \"inquiries@prmntpro.com\",\n                    name: \"\".concat(formData.firstName, \" \").concat(formData.lastName),\n                    company: \"\",\n                    email: formData.email,\n                    phone: formattedPhone,\n                    message: formData.about,\n                    subject: \"New Job Application for \".concat(jobTitle, \" Position\"),\n                    content: \"\\nName: \".concat(formData.firstName, \" \").concat(formData.lastName, \"\\nEmail: \").concat(formData.email, \"\\nPhone: \").concat(formattedPhone, \"\\nLinkedIn: \").concat(formData.linkedIn, \"\\nAbout: \").concat(formData.about, \"\\n          \"),\n                    isClientEmail: false,\n                    option: \"careers\",\n                    resumeData: {\n                        fileName: fileData.fileName,\n                        fileType: fileData.fileType,\n                        fileSize: fileData.fileSize,\n                        fileData: fileData.fileData\n                    }\n                })\n            });\n            // Send applicant confirmation\n            const clientEmailResponse = await fetch(\"/api/sendEmail\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    to: formData.email,\n                    name: \"\".concat(formData.firstName, \" \").concat(formData.lastName),\n                    company: \"\",\n                    email: formData.email,\n                    phone: formattedPhone,\n                    message: \"\",\n                    subject: \"Thank you for your application\",\n                    content: \"\",\n                    isClientEmail: true,\n                    option: \"careers\"\n                })\n            });\n            if (adminEmailResponse.ok && clientEmailResponse.ok) {\n                window.alert(\"Thank you for your application. We will get back to you shortly.\");\n            } else {\n                throw new Error(\"Failed to send emails\");\n            }\n        } catch (error) {\n            console.error(\"Failed to submit application:\", error);\n            alert(\"Something went wrong. Please try again.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleSubmit,\n        type: \"button\",\n        className: \"global-btn max-w-[180px] !text-white !bg-[#3574d6]\",\n        children: \"Submit Application\"\n    }, void 0, false, {\n        fileName: \"/Users/sydneysanders/Desktop/PMSite/my-app/src/app/components/HiringSubmitButton.tsx\",\n        lineNumber: 120,\n        columnNumber: 5\n    }, undefined);\n};\n_c = HiringSubmitButton;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HiringSubmitButton);\nvar _c;\n$RefreshReg$(_c, \"HiringSubmitButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9IaXJpbmdTdWJtaXRCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBZTFCLE1BQU1DLHFCQUF3RDtRQUFDLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFO0lBQ25GLE1BQU1DLGVBQWU7UUFDbkIsSUFBSTtZQUNGLElBQUksQ0FBQ0YsU0FBU0csTUFBTSxFQUFFO2dCQUNwQkMsTUFBTTtnQkFDTjtZQUNGO1lBRUEsZ0NBQWdDO1lBQ2hDLE1BQU1DLG9CQUFvQixDQUFDQztnQkFDekIsTUFBTUMsVUFBVUQsWUFBWUUsT0FBTyxDQUFDLE9BQU87Z0JBQzNDLElBQUlELFFBQVFFLE1BQU0sS0FBSyxJQUFJO29CQUN6QixPQUFPLEtBQWEsT0FBUkY7Z0JBQ2Q7Z0JBQ0EsSUFBSUEsUUFBUUUsTUFBTSxLQUFLLE1BQU1GLFFBQVFHLFVBQVUsQ0FBQyxNQUFNO29CQUNwRCxPQUFPLElBQVksT0FBUkg7Z0JBQ2I7Z0JBQ0EsT0FBT0E7WUFDVDtZQUVBLE1BQU1JLGlCQUFpQk4sa0JBQWtCTCxTQUFTTSxXQUFXO1lBRTdELHdDQUF3QztZQUN4QyxNQUFNTSxpQkFBaUIsSUFBSUM7WUFDM0JELGVBQWVFLE1BQU0sQ0FBQyxVQUFVZCxTQUFTRyxNQUFNLEVBQUVILFNBQVNHLE1BQU0sQ0FBQ1ksSUFBSTtZQUNyRUgsZUFBZUUsTUFBTSxDQUFDLFlBQVliO1lBRWxDLE1BQU1lLHFCQUFxQixNQUFNQyxNQUFNLHFCQUFxQjtnQkFDMURDLFFBQVE7Z0JBQ1JDLE1BQU1QO1lBQ1I7WUFFQSxJQUFJLENBQUNJLG1CQUFtQkksRUFBRSxFQUFFO2dCQUMxQixNQUFNQyxZQUFZLE1BQU1MLG1CQUFtQk0sSUFBSTtnQkFDL0NDLFFBQVFDLEtBQUssQ0FBQyx1QkFBdUJIO2dCQUNyQyxNQUFNLElBQUlJLE1BQU0sNkJBQXVDLE9BQVZKO1lBQy9DO1lBRUEsTUFBTUssV0FBVyxNQUFNVixtQkFBbUJXLElBQUk7WUFFOUMsc0RBQXNEO1lBQ3RELE1BQU1DLHFCQUFxQixNQUFNWCxNQUFNLGtCQUFrQjtnQkFDdkRDLFFBQVE7Z0JBQ1JXLFNBQVM7b0JBQ1AsZ0JBQWdCO2dCQUNsQjtnQkFDQVYsTUFBTVcsS0FBS0MsU0FBUyxDQUFDO29CQUNuQkMsSUFBSTtvQkFDSmpCLE1BQU0sR0FBeUJmLE9BQXRCQSxTQUFTaUMsU0FBUyxFQUFDLEtBQXFCLE9BQWxCakMsU0FBU2tDLFFBQVE7b0JBQ2hEQyxTQUFTO29CQUNUQyxPQUFPcEMsU0FBU29DLEtBQUs7b0JBQ3JCQyxPQUFPMUI7b0JBQ1AyQixTQUFTdEMsU0FBU3VDLEtBQUs7b0JBQ3ZCQyxTQUFTLDJCQUFvQyxPQUFUdkMsVUFBUztvQkFDN0N3QyxTQUFTLFdBQ1d6QyxPQUF0QkEsU0FBU2lDLFNBQVMsRUFBQyxLQUNsQmpDLE9BRHFCQSxTQUFTa0MsUUFBUSxFQUFDLGFBRXZDdkIsT0FEQVgsU0FBU29DLEtBQUssRUFBQyxhQUVacEMsT0FESFcsZ0JBQWUsZ0JBRWZYLE9BREdBLFNBQVMwQyxRQUFRLEVBQUMsYUFDTixPQUFmMUMsU0FBU3VDLEtBQUssRUFBQztvQkFFZEksZUFBZTtvQkFDZkMsUUFBUTtvQkFDUkMsWUFBWTt3QkFDVkMsVUFBVXBCLFNBQVNvQixRQUFRO3dCQUMzQkMsVUFBVXJCLFNBQVNxQixRQUFRO3dCQUMzQkMsVUFBVXRCLFNBQVNzQixRQUFRO3dCQUMzQnRCLFVBQVVBLFNBQVNBLFFBQVE7b0JBQzdCO2dCQUNGO1lBQ0Y7WUFFQSw4QkFBOEI7WUFDOUIsTUFBTXVCLHNCQUFzQixNQUFNaEMsTUFBTSxrQkFBa0I7Z0JBQ3hEQyxRQUFRO2dCQUNSVyxTQUFTO29CQUNQLGdCQUFnQjtnQkFDbEI7Z0JBQ0FWLE1BQU1XLEtBQUtDLFNBQVMsQ0FBQztvQkFDbkJDLElBQUloQyxTQUFTb0MsS0FBSztvQkFDbEJyQixNQUFNLEdBQXlCZixPQUF0QkEsU0FBU2lDLFNBQVMsRUFBQyxLQUFxQixPQUFsQmpDLFNBQVNrQyxRQUFRO29CQUNoREMsU0FBUztvQkFDVEMsT0FBT3BDLFNBQVNvQyxLQUFLO29CQUNyQkMsT0FBTzFCO29CQUNQMkIsU0FBUztvQkFDVEUsU0FBUztvQkFDVEMsU0FBUztvQkFDVEUsZUFBZTtvQkFDZkMsUUFBUTtnQkFDVjtZQUNGO1lBRUEsSUFBSWhCLG1CQUFtQlIsRUFBRSxJQUFJNkIsb0JBQW9CN0IsRUFBRSxFQUFFO2dCQUNuRDhCLE9BQU85QyxLQUFLLENBQUM7WUFDZixPQUFPO2dCQUNMLE1BQU0sSUFBSXFCLE1BQU07WUFDbEI7UUFDRixFQUFFLE9BQU9ELE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLGlDQUFpQ0E7WUFDL0NwQixNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDK0M7UUFDQ0MsU0FBU2xEO1FBQ1RtRCxNQUFLO1FBQ0xDLFdBQVU7a0JBQ1g7Ozs7OztBQUlMO0tBaEhNdkQ7QUFrSE4saUVBQWVBLGtCQUFrQkEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3N5ZG5leXNhbmRlcnMvRGVza3RvcC9QTVNpdGUvbXktYXBwL3NyYy9hcHAvY29tcG9uZW50cy9IaXJpbmdTdWJtaXRCdXR0b24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBIaXJpbmdTdWJtaXRCdXR0b25Qcm9wcyB7XG4gIGZvcm1EYXRhOiB7XG4gICAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gICAgbGFzdE5hbWU6IHN0cmluZztcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBob25lTnVtYmVyOiBzdHJpbmc7XG4gICAgcmVzdW1lOiBGaWxlIHwgbnVsbDtcbiAgICBsaW5rZWRJbjogc3RyaW5nO1xuICAgIGFib3V0OiBzdHJpbmc7XG4gIH07XG4gIGpvYlRpdGxlOiBzdHJpbmc7XG59XG5cbmNvbnN0IEhpcmluZ1N1Ym1pdEJ1dHRvbjogUmVhY3QuRkM8SGlyaW5nU3VibWl0QnV0dG9uUHJvcHM+ID0gKHsgZm9ybURhdGEsIGpvYlRpdGxlIH0pID0+IHtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIWZvcm1EYXRhLnJlc3VtZSkge1xuICAgICAgICBhbGVydChcIlBsZWFzZSB1cGxvYWQgeW91ciByZXN1bWUgYmVmb3JlIHN1Ym1pdHRpbmcuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEZvcm1hdCBwaG9uZSBudW1iZXIgaWYgbmVlZGVkXG4gICAgICBjb25zdCBmb3JtYXRQaG9uZU51bWJlciA9IChwaG9uZU51bWJlcjogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgY29uc3QgY2xlYW5lZCA9IHBob25lTnVtYmVyLnJlcGxhY2UoL1xcRC9nLCBcIlwiKTtcbiAgICAgICAgaWYgKGNsZWFuZWQubGVuZ3RoID09PSAxMCkge1xuICAgICAgICAgIHJldHVybiBgKzEke2NsZWFuZWR9YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xlYW5lZC5sZW5ndGggPT09IDExICYmIGNsZWFuZWQuc3RhcnRzV2l0aChcIjFcIikpIHtcbiAgICAgICAgICByZXR1cm4gYCske2NsZWFuZWR9YDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xlYW5lZDtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGZvcm1hdHRlZFBob25lID0gZm9ybWF0UGhvbmVOdW1iZXIoZm9ybURhdGEucGhvbmVOdW1iZXIpO1xuXG4gICAgICAvLyBGaXJzdCwgZ2V0IGJhc2U2NCBkYXRhIGZvciB0aGUgcmVzdW1lXG4gICAgICBjb25zdCBmb3JtRGF0YVRvU2VuZCA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgZm9ybURhdGFUb1NlbmQuYXBwZW5kKCdyZXN1bWUnLCBmb3JtRGF0YS5yZXN1bWUsIGZvcm1EYXRhLnJlc3VtZS5uYW1lKTtcbiAgICAgIGZvcm1EYXRhVG9TZW5kLmFwcGVuZCgnam9iVGl0bGUnLCBqb2JUaXRsZSk7XG5cbiAgICAgIGNvbnN0IGZpbGVVcGxvYWRSZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS91cGxvYWRSZXN1bWVcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBmb3JtRGF0YVRvU2VuZCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIWZpbGVVcGxvYWRSZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBlcnJvclRleHQgPSBhd2FpdCBmaWxlVXBsb2FkUmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmlsZSB1cGxvYWQgZmFpbGVkOlwiLCBlcnJvclRleHQpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwcm9jZXNzIHJlc3VtZTogJHtlcnJvclRleHR9YCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbGVEYXRhID0gYXdhaXQgZmlsZVVwbG9hZFJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgLy8gVGhlbiBzZW5kIHRoZSBhcHBsaWNhdGlvbiBkYXRhIHdpdGggdGhlIHJlc3VtZSBkYXRhXG4gICAgICBjb25zdCBhZG1pbkVtYWlsUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvc2VuZEVtYWlsXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdG86IFwiaW5xdWlyaWVzQHBybW50cHJvLmNvbVwiLFxuICAgICAgICAgIG5hbWU6IGAke2Zvcm1EYXRhLmZpcnN0TmFtZX0gJHtmb3JtRGF0YS5sYXN0TmFtZX1gLFxuICAgICAgICAgIGNvbXBhbnk6IFwiXCIsXG4gICAgICAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxuICAgICAgICAgIHBob25lOiBmb3JtYXR0ZWRQaG9uZSxcbiAgICAgICAgICBtZXNzYWdlOiBmb3JtRGF0YS5hYm91dCxcbiAgICAgICAgICBzdWJqZWN0OiBgTmV3IEpvYiBBcHBsaWNhdGlvbiBmb3IgJHtqb2JUaXRsZX0gUG9zaXRpb25gLFxuICAgICAgICAgIGNvbnRlbnQ6IGBcbk5hbWU6ICR7Zm9ybURhdGEuZmlyc3ROYW1lfSAke2Zvcm1EYXRhLmxhc3ROYW1lfVxuRW1haWw6ICR7Zm9ybURhdGEuZW1haWx9XG5QaG9uZTogJHtmb3JtYXR0ZWRQaG9uZX1cbkxpbmtlZEluOiAke2Zvcm1EYXRhLmxpbmtlZElufVxuQWJvdXQ6ICR7Zm9ybURhdGEuYWJvdXR9XG4gICAgICAgICAgYCxcbiAgICAgICAgICBpc0NsaWVudEVtYWlsOiBmYWxzZSxcbiAgICAgICAgICBvcHRpb246IFwiY2FyZWVyc1wiLFxuICAgICAgICAgIHJlc3VtZURhdGE6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBmaWxlRGF0YS5maWxlTmFtZSxcbiAgICAgICAgICAgIGZpbGVUeXBlOiBmaWxlRGF0YS5maWxlVHlwZSxcbiAgICAgICAgICAgIGZpbGVTaXplOiBmaWxlRGF0YS5maWxlU2l6ZSxcbiAgICAgICAgICAgIGZpbGVEYXRhOiBmaWxlRGF0YS5maWxlRGF0YVxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgICAgLy8gU2VuZCBhcHBsaWNhbnQgY29uZmlybWF0aW9uXG4gICAgICBjb25zdCBjbGllbnRFbWFpbFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL3NlbmRFbWFpbFwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHRvOiBmb3JtRGF0YS5lbWFpbCxcbiAgICAgICAgICBuYW1lOiBgJHtmb3JtRGF0YS5maXJzdE5hbWV9ICR7Zm9ybURhdGEubGFzdE5hbWV9YCxcbiAgICAgICAgICBjb21wYW55OiBcIlwiLFxuICAgICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcbiAgICAgICAgICBwaG9uZTogZm9ybWF0dGVkUGhvbmUsXG4gICAgICAgICAgbWVzc2FnZTogXCJcIixcbiAgICAgICAgICBzdWJqZWN0OiBcIlRoYW5rIHlvdSBmb3IgeW91ciBhcHBsaWNhdGlvblwiLFxuICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgaXNDbGllbnRFbWFpbDogdHJ1ZSxcbiAgICAgICAgICBvcHRpb246IFwiY2FyZWVyc1wiXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChhZG1pbkVtYWlsUmVzcG9uc2Uub2sgJiYgY2xpZW50RW1haWxSZXNwb25zZS5vaykge1xuICAgICAgICB3aW5kb3cuYWxlcnQoXCJUaGFuayB5b3UgZm9yIHlvdXIgYXBwbGljYXRpb24uIFdlIHdpbGwgZ2V0IGJhY2sgdG8geW91IHNob3J0bHkuXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHNlbmQgZW1haWxzXCIpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIHN1Ym1pdCBhcHBsaWNhdGlvbjpcIiwgZXJyb3IpO1xuICAgICAgYWxlcnQoXCJTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgb25DbGljaz17aGFuZGxlU3VibWl0fVxuICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICBjbGFzc05hbWU9XCJnbG9iYWwtYnRuIG1heC13LVsxODBweF0gIXRleHQtd2hpdGUgIWJnLVsjMzU3NGQ2XVwiXG4gICAgPlxuICAgICAgU3VibWl0IEFwcGxpY2F0aW9uXG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaXJpbmdTdWJtaXRCdXR0b247ICJdLCJuYW1lcyI6WyJSZWFjdCIsIkhpcmluZ1N1Ym1pdEJ1dHRvbiIsImZvcm1EYXRhIiwiam9iVGl0bGUiLCJoYW5kbGVTdWJtaXQiLCJyZXN1bWUiLCJhbGVydCIsImZvcm1hdFBob25lTnVtYmVyIiwicGhvbmVOdW1iZXIiLCJjbGVhbmVkIiwicmVwbGFjZSIsImxlbmd0aCIsInN0YXJ0c1dpdGgiLCJmb3JtYXR0ZWRQaG9uZSIsImZvcm1EYXRhVG9TZW5kIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJuYW1lIiwiZmlsZVVwbG9hZFJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5Iiwib2siLCJlcnJvclRleHQiLCJ0ZXh0IiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJmaWxlRGF0YSIsImpzb24iLCJhZG1pbkVtYWlsUmVzcG9uc2UiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInRvIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJjb21wYW55IiwiZW1haWwiLCJwaG9uZSIsIm1lc3NhZ2UiLCJhYm91dCIsInN1YmplY3QiLCJjb250ZW50IiwibGlua2VkSW4iLCJpc0NsaWVudEVtYWlsIiwib3B0aW9uIiwicmVzdW1lRGF0YSIsImZpbGVOYW1lIiwiZmlsZVR5cGUiLCJmaWxlU2l6ZSIsImNsaWVudEVtYWlsUmVzcG9uc2UiLCJ3aW5kb3ciLCJidXR0b24iLCJvbkNsaWNrIiwidHlwZSIsImNsYXNzTmFtZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/HiringSubmitButton.tsx\n"));

/***/ })

});
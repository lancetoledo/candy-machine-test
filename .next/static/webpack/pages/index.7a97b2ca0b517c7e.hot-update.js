"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Main.js":
/*!***********************!*\
  !*** ./pages/Main.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @metaplex-foundation/js */ \"./node_modules/@metaplex-foundation/js/dist/esm/index.mjs\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n/* harmony import */ var _components_NFT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NFT */ \"./components/NFT.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Main() {\n    var ref, ref1;\n    _s();\n    const [metaplex, setMetaplex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [candyState, setCandyState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [candyStateError, setCandyStateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [candyStateLoading, setCandyStateLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [txError, setTxError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [txLoading, setTxLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //Lance's code\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useConnection)();\n    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useAnchorWallet)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMetaplex(_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_7__.Metaplex.make(connection).use(wallet ? (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_7__.walletAdapterIdentity)(wallet) : (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_7__.guestIdentity)()));\n    }, [\n        connection,\n        wallet\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!metaplex) return;\n        const updateState = async ()=>{\n            try {\n                console.log(metaplex.nfts().f, \"WOOOOOOOW\");\n                const state = await metaplex.candyMachines().findByAddress({\n                    address: _utils__WEBPACK_IMPORTED_MODULE_3__.CANDY_MACHINE_ID\n                });\n                console.log(state);\n                setCandyState(state);\n                setNfts(state.items);\n                setCandyStateError(null);\n            } catch (e) {\n                console.log(e);\n                setCandyStateError(e.message);\n            } finally{\n                setCandyStateLoading(false);\n            }\n        };\n        updateState();\n        // Refresh the state every 30s\n        const intervalId = setInterval(()=>updateState(), 30000);\n        return ()=>clearInterval(intervalId);\n    }, [\n        metaplex\n    ]);\n    const mint = async ()=>{\n        if (!metaplex) return;\n        setTxLoading(true);\n        setTxError(null);\n        try {\n            const mintResult = await metaplex.candyMachines().mint({\n                candyMachine: {\n                    address: candyState.address,\n                    collectionMintAddress: candyState.collectionMintAddress,\n                    candyGuard: candyState.candyGuard\n                },\n                collectionUpdateAuthority: candyState.authorityAddress,\n                group: null\n            });\n            console.log({\n                mintResult\n            });\n        } catch (e) {\n            console.log(e);\n            setTxError(e.message);\n        } finally{\n            setTxLoading(false);\n        }\n    };\n    const soldOut = candyState === null || candyState === void 0 ? void 0 : candyState.itemsRemaining.eqn(0);\n    const solAmount = (candyState === null || candyState === void 0 ? void 0 : (ref = candyState.candyGuard) === null || ref === void 0 ? void 0 : (ref1 = ref.guards) === null || ref1 === void 0 ? void 0 : ref1.solPayment) ? candyState.candyGuard.guards.solPayment.lamports.toNumber() / _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL : null;\n    // STYLE MOVE LATER\n    const styles = {\n        wrapper: \"flex h-[100vh] w-[100vw] bg-[#1d1d1d] text-gray-200\",\n        container: \"flex flex-col lg:flex-row flex-1 p-5 pb-20 lg:p-10 space-y-10 lg:space-y-0\",\n        infoSection: \"lg:w-2/3 px-10\",\n        mobileDisplaySection: \"h-[300px] flex w-full lg:hidden lg:w-1/3 mt-4\",\n        desktopDisplaySection: \"hidden lg:flex flex-1 lg:w-1/3\"\n    };\n    //NEW UI\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Head, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home | Moonbirds NFT\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styles.container,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: styles.infoSection,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Header, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                lineNumber: 119,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.mobileDisplaySection,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.NFTDisplay, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                    lineNumber: 121,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                lineNumber: 120,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Hero, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: styles.desktopDisplaySection,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.NFTDisplay, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                            lineNumber: 128,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                        lineNumber: 127,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, this);\n// return (\n//   <div>\n//     <WalletMultiButton />\n//     {candyStateLoading ? (\n//       <div>Loading...</div>\n//     ) : candyStateError ? (\n//       <div>{candyStateError}</div>\n//     ) : (\n//       candyState && (\n//         <div>\n//           <div>Total items: {candyState.itemsAvailable.toString()}</div>\n//           <div>Minted items: {candyState.itemsMinted.toString()}</div>\n//           <div>Remaining items: {candyState.itemsRemaining.toString()}</div>\n//           {solAmount && <div>Cost: ◎ {solAmount}</div>}\n//           {txError && <div>{txError}</div>}\n//           <button onClick={mint} disabled={!wallet || txLoading || soldOut}>\n//             {soldOut ? \"SOLD OUT\" : txLoading ? \"LOADING...\" : \"MINT\"}\n//           </button>\n//         </div>\n//       )\n//     )}\n//     {nfts.map((nft) => {\n//       // console.log(nft)\n//       // return <NFT uri={nft.uri} />\n//     })}\n//   </div>\n// );\n}\n_s(Main, \"bkLLgXul7FwGriP2VlPE2bzC2OY=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_6__.useAnchorWallet\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVM7QUFDVCwyQkFBMkI7QUFDM0IsNEJBQTRCO0FBQzVCLHdDQUF3QztBQUN4QyxVQUFVO0FBQ1YsV0FBVztBQUNYLEtBQUs7QUFDUCxDQUFDO0dBbEp1Qkc7O1FBV0NSLHVFQUFhQTtRQUNyQkQseUVBQWVBOzs7S0FaUlMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvTWFpbi5qcz8wOTdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIGd1ZXN0SWRlbnRpdHksXG4gIE1ldGFwbGV4LFxuICB3YWxsZXRBZGFwdGVySWRlbnRpdHksXG59IGZyb20gXCJAbWV0YXBsZXgtZm91bmRhdGlvbi9qc1wiO1xuaW1wb3J0IHsgTEFNUE9SVFNfUEVSX1NPTCB9IGZyb20gXCJAc29sYW5hL3dlYjMuanNcIjtcbmltcG9ydCB7IHVzZUFuY2hvcldhbGxldCwgdXNlQ29ubmVjdGlvbiB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0XCI7XG5pbXBvcnQgeyBXYWxsZXRNdWx0aUJ1dHRvbiB9IGZyb20gXCJAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpXCI7XG5cbmltcG9ydCB7IENBTkRZX01BQ0hJTkVfSUQgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCBORlQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTkZUXCI7XG5pbXBvcnQgeyBIZWFkZXIsIE5GVERpc3BsYXksIEhlcm8sIExvZ2luIH0gZnJvbSAnLi4vY29tcG9uZW50cydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgW21ldGFwbGV4LCBzZXRNZXRhcGxleF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY2FuZHlTdGF0ZSwgc2V0Q2FuZHlTdGF0ZV0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY2FuZHlTdGF0ZUVycm9yLCBzZXRDYW5keVN0YXRlRXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2NhbmR5U3RhdGVMb2FkaW5nLCBzZXRDYW5keVN0YXRlTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3R4RXJyb3IsIHNldFR4RXJyb3JdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW3R4TG9hZGluZywgc2V0VHhMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAvL0xhbmNlJ3MgY29kZVxuICBjb25zdCBbbmZ0cywgc2V0TmZ0c10gPSB1c2VTdGF0ZShbXSlcblxuICBjb25zdCB7IGNvbm5lY3Rpb24gfSA9IHVzZUNvbm5lY3Rpb24oKTtcbiAgY29uc3Qgd2FsbGV0ID0gdXNlQW5jaG9yV2FsbGV0KCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRNZXRhcGxleChcbiAgICAgIE1ldGFwbGV4Lm1ha2UoY29ubmVjdGlvbikudXNlKFxuICAgICAgICB3YWxsZXQgPyB3YWxsZXRBZGFwdGVySWRlbnRpdHkod2FsbGV0KSA6IGd1ZXN0SWRlbnRpdHkoKVxuICAgICAgKVxuICAgICk7XG4gIH0sIFtjb25uZWN0aW9uLCB3YWxsZXRdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbWV0YXBsZXgpIHJldHVybjtcblxuICAgIGNvbnN0IHVwZGF0ZVN0YXRlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc29sZS5sb2cobWV0YXBsZXgubmZ0cygpLmYsIFwiV09PT09PT09XXCIpXG4gICAgICAgIGNvbnN0IHN0YXRlID0gYXdhaXQgbWV0YXBsZXhcbiAgICAgICAgICAuY2FuZHlNYWNoaW5lcygpXG4gICAgICAgICAgLmZpbmRCeUFkZHJlc3MoeyBhZGRyZXNzOiBDQU5EWV9NQUNISU5FX0lEIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSk7XG4gICAgICAgIHNldENhbmR5U3RhdGUoc3RhdGUpO1xuICAgICAgICBzZXROZnRzKHN0YXRlLml0ZW1zKVxuICAgICAgICBzZXRDYW5keVN0YXRlRXJyb3IobnVsbCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICBzZXRDYW5keVN0YXRlRXJyb3IoZS5tZXNzYWdlKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIHNldENhbmR5U3RhdGVMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG5cbiAgICB1cGRhdGVTdGF0ZSgpO1xuXG5cbiAgICAvLyBSZWZyZXNoIHRoZSBzdGF0ZSBldmVyeSAzMHNcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gdXBkYXRlU3RhdGUoKSwgMzBfMDAwKTtcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsSWQpO1xuICB9LCBbbWV0YXBsZXhdKTtcblxuICBjb25zdCBtaW50ID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghbWV0YXBsZXgpIHJldHVybjtcblxuICAgIHNldFR4TG9hZGluZyh0cnVlKTtcbiAgICBzZXRUeEVycm9yKG51bGwpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG1pbnRSZXN1bHQgPSBhd2FpdCBtZXRhcGxleC5jYW5keU1hY2hpbmVzKCkubWludCh7XG4gICAgICAgIGNhbmR5TWFjaGluZToge1xuICAgICAgICAgIGFkZHJlc3M6IGNhbmR5U3RhdGUuYWRkcmVzcyxcbiAgICAgICAgICBjb2xsZWN0aW9uTWludEFkZHJlc3M6IGNhbmR5U3RhdGUuY29sbGVjdGlvbk1pbnRBZGRyZXNzLFxuICAgICAgICAgIGNhbmR5R3VhcmQ6IGNhbmR5U3RhdGUuY2FuZHlHdWFyZCxcbiAgICAgICAgfSxcbiAgICAgICAgY29sbGVjdGlvblVwZGF0ZUF1dGhvcml0eTogY2FuZHlTdGF0ZS5hdXRob3JpdHlBZGRyZXNzLFxuICAgICAgICBncm91cDogbnVsbCxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyh7IG1pbnRSZXN1bHQgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICBzZXRUeEVycm9yKGUubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFR4TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNvbGRPdXQgPSBjYW5keVN0YXRlPy5pdGVtc1JlbWFpbmluZy5lcW4oMCk7XG4gIGNvbnN0IHNvbEFtb3VudCA9IGNhbmR5U3RhdGU/LmNhbmR5R3VhcmQ/Lmd1YXJkcz8uc29sUGF5bWVudFxuICAgID8gY2FuZHlTdGF0ZS5jYW5keUd1YXJkLmd1YXJkcy5zb2xQYXltZW50LmxhbXBvcnRzLnRvTnVtYmVyKCkgL1xuICAgIExBTVBPUlRTX1BFUl9TT0xcbiAgICA6IG51bGw7XG5cbiAgLy8gU1RZTEUgTU9WRSBMQVRFUlxuICBjb25zdCBzdHlsZXMgPSB7XG4gICAgd3JhcHBlcjogJ2ZsZXggaC1bMTAwdmhdIHctWzEwMHZ3XSBiZy1bIzFkMWQxZF0gdGV4dC1ncmF5LTIwMCcsXG4gICAgY29udGFpbmVyOlxuICAgICAgJ2ZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZmxleC0xIHAtNSBwYi0yMCBsZzpwLTEwIHNwYWNlLXktMTAgbGc6c3BhY2UteS0wJyxcbiAgICBpbmZvU2VjdGlvbjogJ2xnOnctMi8zIHB4LTEwJyxcbiAgICBtb2JpbGVEaXNwbGF5U2VjdGlvbjogJ2gtWzMwMHB4XSBmbGV4IHctZnVsbCBsZzpoaWRkZW4gbGc6dy0xLzMgbXQtNCcsXG4gICAgZGVza3RvcERpc3BsYXlTZWN0aW9uOiAnaGlkZGVuIGxnOmZsZXggZmxleC0xIGxnOnctMS8zJyxcbiAgfVxuXG4gIC8vTkVXIFVJXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SG9tZSB8IE1vb25iaXJkcyBORlQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmluZm9TZWN0aW9ufT5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVEaXNwbGF5U2VjdGlvbn0+XG4gICAgICAgICAgICA8TkZURGlzcGxheSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmRlc2t0b3BEaXNwbGF5U2VjdGlvbn0+XG4gICAgICAgICAgPE5GVERpc3BsYXkgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcblxuICAvLyByZXR1cm4gKFxuICAvLyAgIDxkaXY+XG4gIC8vICAgICA8V2FsbGV0TXVsdGlCdXR0b24gLz5cbiAgLy8gICAgIHtjYW5keVN0YXRlTG9hZGluZyA/IChcbiAgLy8gICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gIC8vICAgICApIDogY2FuZHlTdGF0ZUVycm9yID8gKFxuICAvLyAgICAgICA8ZGl2PntjYW5keVN0YXRlRXJyb3J9PC9kaXY+XG4gIC8vICAgICApIDogKFxuICAvLyAgICAgICBjYW5keVN0YXRlICYmIChcbiAgLy8gICAgICAgICA8ZGl2PlxuICAvLyAgICAgICAgICAgPGRpdj5Ub3RhbCBpdGVtczoge2NhbmR5U3RhdGUuaXRlbXNBdmFpbGFibGUudG9TdHJpbmcoKX08L2Rpdj5cbiAgLy8gICAgICAgICAgIDxkaXY+TWludGVkIGl0ZW1zOiB7Y2FuZHlTdGF0ZS5pdGVtc01pbnRlZC50b1N0cmluZygpfTwvZGl2PlxuICAvLyAgICAgICAgICAgPGRpdj5SZW1haW5pbmcgaXRlbXM6IHtjYW5keVN0YXRlLml0ZW1zUmVtYWluaW5nLnRvU3RyaW5nKCl9PC9kaXY+XG4gIC8vICAgICAgICAgICB7c29sQW1vdW50ICYmIDxkaXY+Q29zdDog4peOIHtzb2xBbW91bnR9PC9kaXY+fVxuICAvLyAgICAgICAgICAge3R4RXJyb3IgJiYgPGRpdj57dHhFcnJvcn08L2Rpdj59XG4gIC8vICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e21pbnR9IGRpc2FibGVkPXshd2FsbGV0IHx8IHR4TG9hZGluZyB8fCBzb2xkT3V0fT5cbiAgLy8gICAgICAgICAgICAge3NvbGRPdXQgPyBcIlNPTEQgT1VUXCIgOiB0eExvYWRpbmcgPyBcIkxPQURJTkcuLi5cIiA6IFwiTUlOVFwifVxuICAvLyAgICAgICAgICAgPC9idXR0b24+XG4gIC8vICAgICAgICAgPC9kaXY+XG4gIC8vICAgICAgIClcbiAgLy8gICAgICl9XG4gIC8vICAgICB7bmZ0cy5tYXAoKG5mdCkgPT4ge1xuICAvLyAgICAgICAvLyBjb25zb2xlLmxvZyhuZnQpXG4gIC8vICAgICAgIC8vIHJldHVybiA8TkZUIHVyaT17bmZ0LnVyaX0gLz5cbiAgLy8gICAgIH0pfVxuICAvLyAgIDwvZGl2PlxuICAvLyApO1xufVxuXG5cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImd1ZXN0SWRlbnRpdHkiLCJNZXRhcGxleCIsIndhbGxldEFkYXB0ZXJJZGVudGl0eSIsIkxBTVBPUlRTX1BFUl9TT0wiLCJ1c2VBbmNob3JXYWxsZXQiLCJ1c2VDb25uZWN0aW9uIiwiV2FsbGV0TXVsdGlCdXR0b24iLCJDQU5EWV9NQUNISU5FX0lEIiwiTkZUIiwiSGVhZGVyIiwiTkZURGlzcGxheSIsIkhlcm8iLCJMb2dpbiIsIk1haW4iLCJjYW5keVN0YXRlIiwibWV0YXBsZXgiLCJzZXRNZXRhcGxleCIsInNldENhbmR5U3RhdGUiLCJjYW5keVN0YXRlRXJyb3IiLCJzZXRDYW5keVN0YXRlRXJyb3IiLCJjYW5keVN0YXRlTG9hZGluZyIsInNldENhbmR5U3RhdGVMb2FkaW5nIiwidHhFcnJvciIsInNldFR4RXJyb3IiLCJ0eExvYWRpbmciLCJzZXRUeExvYWRpbmciLCJuZnRzIiwic2V0TmZ0cyIsImNvbm5lY3Rpb24iLCJ3YWxsZXQiLCJtYWtlIiwidXNlIiwidXBkYXRlU3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZiIsInN0YXRlIiwiY2FuZHlNYWNoaW5lcyIsImZpbmRCeUFkZHJlc3MiLCJhZGRyZXNzIiwiaXRlbXMiLCJlIiwibWVzc2FnZSIsImludGVydmFsSWQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJtaW50IiwibWludFJlc3VsdCIsImNhbmR5TWFjaGluZSIsImNvbGxlY3Rpb25NaW50QWRkcmVzcyIsImNhbmR5R3VhcmQiLCJjb2xsZWN0aW9uVXBkYXRlQXV0aG9yaXR5IiwiYXV0aG9yaXR5QWRkcmVzcyIsImdyb3VwIiwic29sZE91dCIsIml0ZW1zUmVtYWluaW5nIiwiZXFuIiwic29sQW1vdW50IiwiZ3VhcmRzIiwic29sUGF5bWVudCIsImxhbXBvcnRzIiwidG9OdW1iZXIiLCJzdHlsZXMiLCJ3cmFwcGVyIiwiY29udGFpbmVyIiwiaW5mb1NlY3Rpb24iLCJtb2JpbGVEaXNwbGF5U2VjdGlvbiIsImRlc2t0b3BEaXNwbGF5U2VjdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsIkhlYWQiLCJ0aXRsZSIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Main.js\n"));

/***/ })

});
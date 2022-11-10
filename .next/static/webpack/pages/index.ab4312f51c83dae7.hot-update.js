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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @metaplex-foundation/js */ \"./node_modules/@metaplex-foundation/js/dist/esm/index.mjs\");\n/* harmony import */ var _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/web3.js */ \"./node_modules/@solana/web3.js/lib/index.browser.esm.js\");\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"./node_modules/@solana/wallet-adapter-react/lib/esm/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ \"./utils/index.js\");\n/* harmony import */ var _components_NFT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NFT */ \"./components/NFT.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    var ref, ref1;\n    _s();\n    const [metaplex, setMetaplex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [candyState, setCandyState] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [candyStateError, setCandyStateError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [candyStateLoading, setCandyStateLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [txError, setTxError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [txLoading, setTxLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //Lance's code\n    const [nfts, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { connection  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useConnection)();\n    const wallet = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useAnchorWallet)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMetaplex(_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_8__.Metaplex.make(connection).use(wallet ? (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_8__.walletAdapterIdentity)(wallet) : (0,_metaplex_foundation_js__WEBPACK_IMPORTED_MODULE_8__.guestIdentity)()));\n    }, [\n        connection,\n        wallet\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!metaplex) return;\n        const updateState = async ()=>{\n            try {\n                console.log(metaplex.nfts().f, \"WOOOOOOOW\");\n                const state = await metaplex.candyMachines().findByAddress({\n                    address: _utils__WEBPACK_IMPORTED_MODULE_3__.CANDY_MACHINE_ID\n                });\n                console.log(state);\n                setCandyState(state);\n                setNfts(state.items);\n                setCandyStateError(null);\n            } catch (e) {\n                console.log(e);\n                setCandyStateError(e.message);\n            } finally{\n                setCandyStateLoading(false);\n            }\n        };\n        updateState();\n        // Refresh the state every 30s\n        const intervalId = setInterval(()=>updateState(), 30000);\n        return ()=>clearInterval(intervalId);\n    }, [\n        metaplex\n    ]);\n    const mint = async ()=>{\n        if (!metaplex) return;\n        setTxLoading(true);\n        setTxError(null);\n        try {\n            const mintResult = await metaplex.candyMachines().mint({\n                candyMachine: {\n                    address: candyState.address,\n                    collectionMintAddress: candyState.collectionMintAddress,\n                    candyGuard: candyState.candyGuard\n                },\n                collectionUpdateAuthority: candyState.authorityAddress,\n                group: null\n            });\n            console.log({\n                mintResult\n            });\n        } catch (e) {\n            console.log(e);\n            setTxError(e.message);\n        } finally{\n            setTxLoading(false);\n        }\n    };\n    const soldOut = candyState === null || candyState === void 0 ? void 0 : candyState.itemsRemaining.eqn(0);\n    const solAmount = (candyState === null || candyState === void 0 ? void 0 : (ref = candyState.candyGuard) === null || ref === void 0 ? void 0 : (ref1 = ref.guards) === null || ref1 === void 0 ? void 0 : ref1.solPayment) ? candyState.candyGuard.guards.solPayment.lamports.toNumber() / _solana_web3_js__WEBPACK_IMPORTED_MODULE_2__.LAMPORTS_PER_SOL : null;\n    // STYLE MOVE LATER\n    const styles = {\n        wrapper: \"flex h-[100vh] w-[100vw] bg-[#1d1d1d] text-gray-200\",\n        container: \"flex flex-col lg:flex-row flex-1 p-5 pb-20 lg:p-10 space-y-10 lg:space-y-0\",\n        infoSection: \"lg:w-2/3 px-10\",\n        mobileDisplaySection: \"h-[300px] flex w-full lg:hidden lg:w-1/3 mt-4\",\n        desktopDisplaySection: \"hidden lg:flex flex-1 lg:w-1/3\",\n        mintButton: \"rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]\"\n    };\n    //NEW UI\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: styles.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Home | Solana Monkey Business NFT\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                    lineNumber: 117,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: styles.container,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: styles.infoSection,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_6__.Header, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                lineNumber: 122,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: styles.mobileDisplaySection,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_6__.NFTDisplay, {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                    lineNumber: 124,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                lineNumber: 123,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_6__.Hero, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: candyStateLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: \"Loading...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                    lineNumber: 130,\n                                    columnNumber: 15\n                                }, this) : candyStateError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: candyStateError\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                    lineNumber: 132,\n                                    columnNumber: 15\n                                }, this) : candyState && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"Total items: \",\n                                                candyState.itemsAvailable.toString()\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                            lineNumber: 136,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"Minted items: \",\n                                                candyState.itemsMinted.toString()\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                            lineNumber: 137,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"Remaining items: \",\n                                                candyState.itemsRemaining.toString()\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                            lineNumber: 138,\n                                            columnNumber: 19\n                                        }, this),\n                                        solAmount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: [\n                                                \"Cost: ◎ \",\n                                                solAmount\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                            lineNumber: 139,\n                                            columnNumber: 33\n                                        }, this),\n                                        txError && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: txError\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                            lineNumber: 140,\n                                            columnNumber: 31\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: styles.mintButton,\n                                            onClick: mint,\n                                            disabled: !wallet || txLoading || soldOut,\n                                            children: soldOut ? \"SOLD OUT\" : txLoading ? \"LOADING...\" : \"MINT\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                            lineNumber: 141,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                    lineNumber: 135,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: styles.desktopDisplaySection,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_6__.NFTDisplay, {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                            lineNumber: 151,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                        lineNumber: 150,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\lance\\\\Desktop\\\\Projects\\\\Sandbox\\\\candy-ui-v3\\\\pages\\\\Main.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n// return (\n//   <div>\n//     {candyStateLoading ? (\n//       <div>Loading...</div>\n//     ) : candyStateError ? (\n//       <div>{candyStateError}</div>\n//     ) : (\n//       candyState && (\n//         <div>\n//           <div>Total items: {candyState.itemsAvailable.toString()}</div>\n//           <div>Minted items: {candyState.itemsMinted.toString()}</div>\n//           <div>Remaining items: {candyState.itemsRemaining.toString()}</div>\n//           {solAmount && <div>Cost: ◎ {solAmount}</div>}\n//           {txError && <div>{txError}</div>}\n//           <button onClick={mint} disabled={!wallet || txLoading || soldOut}>\n//             {soldOut ? \"SOLD OUT\" : txLoading ? \"LOADING...\" : \"MINT\"}\n//           </button>\n//         </div>\n//       )\n//     )}\n//     {nfts.map((nft) => {\n//       // console.log(nft)\n//       // return <NFT uri={nft.uri} />\n//     })}\n//   </div>\n// );\n}\n_s(Main, \"bkLLgXul7FwGriP2VlPE2bzC2OY=\", false, function() {\n    return [\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useConnection,\n        _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_7__.useAnchorWallet\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9NYWluLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFLWDtBQUNrQjtBQUMyQjtBQUNWO0FBRXhCO0FBQ1I7QUFDUDtBQUNrQztBQUVoRCxTQUFTZ0IsT0FBTztRQWdGWEM7O0lBL0VsQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR2xCLCtDQUFRQTtJQUN4QyxNQUFNLENBQUNnQixZQUFZRyxjQUFjLEdBQUduQiwrQ0FBUUE7SUFDNUMsTUFBTSxDQUFDb0IsaUJBQWlCQyxtQkFBbUIsR0FBR3JCLCtDQUFRQTtJQUN0RCxNQUFNLENBQUNzQixtQkFBbUJDLHFCQUFxQixHQUFHdkIsK0NBQVFBLENBQUMsSUFBSTtJQUMvRCxNQUFNLENBQUN3QixTQUFTQyxXQUFXLEdBQUd6QiwrQ0FBUUE7SUFDdEMsTUFBTSxDQUFDMEIsV0FBV0MsYUFBYSxHQUFHM0IsK0NBQVFBLENBQUMsS0FBSztJQUVoRCxjQUFjO0lBQ2QsTUFBTSxDQUFDNEIsTUFBTUMsUUFBUSxHQUFHN0IsK0NBQVFBLENBQUMsRUFBRTtJQUVuQyxNQUFNLEVBQUU4QixXQUFVLEVBQUUsR0FBR3hCLDJFQUFhQTtJQUNwQyxNQUFNeUIsU0FBUzFCLDZFQUFlQTtJQUU5Qk4sZ0RBQVNBLENBQUMsSUFBTTtRQUNkbUIsWUFDRWhCLGtFQUFhLENBQUM0QixZQUFZRyxHQUFHLENBQzNCRixTQUFTNUIsOEVBQXFCQSxDQUFDNEIsVUFBVTlCLHNFQUFhQSxFQUFFO0lBRzlELEdBQUc7UUFBQzZCO1FBQVlDO0tBQU87SUFFdkJoQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsSUFBSSxDQUFDa0IsVUFBVTtRQUVmLE1BQU1pQixjQUFjLFVBQVk7WUFDOUIsSUFBSTtnQkFDRkMsUUFBUUMsR0FBRyxDQUFDbkIsU0FBU1csSUFBSSxHQUFHUyxDQUFDLEVBQUU7Z0JBQy9CLE1BQU1DLFFBQVEsTUFBTXJCLFNBQ2pCc0IsYUFBYSxHQUNiQyxhQUFhLENBQUM7b0JBQUVDLFNBQVNqQyxvREFBZ0JBO2dCQUFDO2dCQUM3QzJCLFFBQVFDLEdBQUcsQ0FBQ0U7Z0JBQ1puQixjQUFjbUI7Z0JBQ2RULFFBQVFTLE1BQU1JLEtBQUs7Z0JBQ25CckIsbUJBQW1CLElBQUk7WUFDekIsRUFBRSxPQUFPc0IsR0FBRztnQkFDVlIsUUFBUUMsR0FBRyxDQUFDTztnQkFDWnRCLG1CQUFtQnNCLEVBQUVDLE9BQU87WUFDOUIsU0FBVTtnQkFDUnJCLHFCQUFxQixLQUFLO1lBQzVCO1FBQ0Y7UUFHQVc7UUFHQSw4QkFBOEI7UUFDOUIsTUFBTVcsYUFBYUMsWUFBWSxJQUFNWixlQUFlO1FBRXBELE9BQU8sSUFBTWEsY0FBY0Y7SUFDN0IsR0FBRztRQUFDNUI7S0FBUztJQUViLE1BQU0rQixPQUFPLFVBQVk7UUFDdkIsSUFBSSxDQUFDL0IsVUFBVTtRQUVmVSxhQUFhLElBQUk7UUFDakJGLFdBQVcsSUFBSTtRQUVmLElBQUk7WUFDRixNQUFNd0IsYUFBYSxNQUFNaEMsU0FBU3NCLGFBQWEsR0FBR1MsSUFBSSxDQUFDO2dCQUNyREUsY0FBYztvQkFDWlQsU0FBU3pCLFdBQVd5QixPQUFPO29CQUMzQlUsdUJBQXVCbkMsV0FBV21DLHFCQUFxQjtvQkFDdkRDLFlBQVlwQyxXQUFXb0MsVUFBVTtnQkFDbkM7Z0JBQ0FDLDJCQUEyQnJDLFdBQVdzQyxnQkFBZ0I7Z0JBQ3REQyxPQUFPLElBQUk7WUFDYjtZQUVBcEIsUUFBUUMsR0FBRyxDQUFDO2dCQUFFYTtZQUFXO1FBQzNCLEVBQUUsT0FBT04sR0FBRztZQUNWUixRQUFRQyxHQUFHLENBQUNPO1lBQ1psQixXQUFXa0IsRUFBRUMsT0FBTztRQUN0QixTQUFVO1lBQ1JqQixhQUFhLEtBQUs7UUFDcEI7SUFDRjtJQUVBLE1BQU02QixVQUFVeEMsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFZeUMsY0FBYyxDQUFDQyxHQUFHLENBQUMsRUFBRTtJQUNqRCxNQUFNQyxZQUFZM0MsQ0FBQUEsdUJBQUFBLHdCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxNQUFBQSxXQUFZb0MsVUFBVSxjQUF0QnBDLGlCQUFBQSxLQUFBQSxJQUFBQSxRQUFBQSxJQUF3QjRDLHNDQUF4QjVDLEtBQUFBLFNBQWdDNkMsVUFBVixJQUNwQzdDLFdBQVdvQyxVQUFVLENBQUNRLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDQyxRQUFRLENBQUNDLFFBQVEsS0FDM0QzRCw2REFBZ0JBLEdBQ2QsSUFBSTtJQUVSLG1CQUFtQjtJQUNuQixNQUFNNEQsU0FBUztRQUNiQyxTQUFTO1FBQ1RDLFdBQ0U7UUFDRkMsYUFBYTtRQUNiQyxzQkFBc0I7UUFDdEJDLHVCQUF1QjtRQUN2QkMsWUFDRTtJQUNKO0lBRUEsUUFBUTtJQUNSLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXUixPQUFPQyxPQUFPOzswQkFDNUIsOERBQUN2RCxrREFBSUE7MEJBQ0gsNEVBQUMrRDs4QkFBTTs7Ozs7Ozs7Ozs7MEJBR1QsOERBQUNGO2dCQUFJQyxXQUFXUixPQUFPRSxTQUFTOztrQ0FDOUIsOERBQUNRO3dCQUFRRixXQUFXUixPQUFPRyxXQUFXOzswQ0FDcEMsOERBQUN4RCwrQ0FBTUE7Ozs7OzBDQUNQLDhEQUFDNEQ7Z0NBQUlDLFdBQVdSLE9BQU9JLG9CQUFvQjswQ0FDekMsNEVBQUN4RCxtREFBVUE7Ozs7Ozs7Ozs7MENBR2IsOERBQUNDLDZDQUFJQTs7Ozs7MENBQ0wsOERBQUMwRDswQ0FDRWpELGtDQUNDLDhEQUFDaUQ7OENBQUk7Ozs7OzJDQUNIbkQsZ0NBQ0YsOERBQUNtRDs4Q0FBS25EOzs7OzsyQ0FFTkosNEJBQ0UsOERBQUN1RDs7c0RBQ0MsOERBQUNBOztnREFBSTtnREFBY3ZELFdBQVcyRCxjQUFjLENBQUNDLFFBQVE7Ozs7Ozs7c0RBQ3JELDhEQUFDTDs7Z0RBQUk7Z0RBQWV2RCxXQUFXNkQsV0FBVyxDQUFDRCxRQUFROzs7Ozs7O3NEQUNuRCw4REFBQ0w7O2dEQUFJO2dEQUFrQnZELFdBQVd5QyxjQUFjLENBQUNtQixRQUFROzs7Ozs7O3dDQUN4RGpCLDJCQUFhLDhEQUFDWTs7Z0RBQUk7Z0RBQVNaOzs7Ozs7O3dDQUMzQm5DLHlCQUFXLDhEQUFDK0M7c0RBQUsvQzs7Ozs7O3NEQUNsQiw4REFBQ3NEOzRDQUFPTixXQUFXUixPQUFPTSxVQUFVOzRDQUFFUyxTQUFTL0I7NENBQU1nQyxVQUFVLENBQUNqRCxVQUFVTCxhQUFhOEI7c0RBQ3BGQSxVQUFVLGFBQWE5QixZQUFZLGVBQWUsTUFBTTs7Ozs7Ozs7Ozs7d0NBSWhFOzs7Ozs7Ozs7Ozs7a0NBSUwsOERBQUNnRDt3QkFBUUYsV0FBV1IsT0FBT0sscUJBQXFCO2tDQUM5Qyw0RUFBQ3pELG1EQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1uQixXQUFXO0FBQ1gsVUFBVTtBQUNWLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLHFDQUFxQztBQUNyQyxZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCLGdCQUFnQjtBQUNoQiwyRUFBMkU7QUFDM0UseUVBQXlFO0FBQ3pFLCtFQUErRTtBQUMvRSwwREFBMEQ7QUFDMUQsOENBQThDO0FBQzlDLCtFQUErRTtBQUMvRSx5RUFBeUU7QUFDekUsc0JBQXNCO0FBQ3RCLGlCQUFpQjtBQUNqQixVQUFVO0FBQ1YsU0FBUztBQUNULDJCQUEyQjtBQUMzQiw0QkFBNEI7QUFDNUIsd0NBQXdDO0FBQ3hDLFVBQVU7QUFDVixXQUFXO0FBQ1gsS0FBSztBQUNQLENBQUM7R0F2S3VCRzs7UUFXQ1QsdUVBQWFBO1FBQ3JCRCx5RUFBZUE7OztLQVpSVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9NYWluLmpzPzA5N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgZ3Vlc3RJZGVudGl0eSxcbiAgTWV0YXBsZXgsXG4gIHdhbGxldEFkYXB0ZXJJZGVudGl0eSxcbn0gZnJvbSBcIkBtZXRhcGxleC1mb3VuZGF0aW9uL2pzXCI7XG5pbXBvcnQgeyBMQU1QT1JUU19QRVJfU09MIH0gZnJvbSBcIkBzb2xhbmEvd2ViMy5qc1wiO1xuaW1wb3J0IHsgdXNlQW5jaG9yV2FsbGV0LCB1c2VDb25uZWN0aW9uIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3RcIjtcbmltcG9ydCB7IFdhbGxldE11bHRpQnV0dG9uIH0gZnJvbSBcIkBzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QtdWlcIjtcblxuaW1wb3J0IHsgQ0FORFlfTUFDSElORV9JRCB9IGZyb20gXCIuLi91dGlsc1wiO1xuaW1wb3J0IE5GVCBmcm9tIFwiLi4vY29tcG9uZW50cy9ORlRcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEhlYWRlciwgTkZURGlzcGxheSwgSGVybywgTG9naW4gfSBmcm9tICcuLi9jb21wb25lbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xuICBjb25zdCBbbWV0YXBsZXgsIHNldE1ldGFwbGV4XSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjYW5keVN0YXRlLCBzZXRDYW5keVN0YXRlXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtjYW5keVN0YXRlRXJyb3IsIHNldENhbmR5U3RhdGVFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY2FuZHlTdGF0ZUxvYWRpbmcsIHNldENhbmR5U3RhdGVMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdHhFcnJvciwgc2V0VHhFcnJvcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbdHhMb2FkaW5nLCBzZXRUeExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIC8vTGFuY2UncyBjb2RlXG4gIGNvbnN0IFtuZnRzLCBzZXROZnRzXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IHsgY29ubmVjdGlvbiB9ID0gdXNlQ29ubmVjdGlvbigpO1xuICBjb25zdCB3YWxsZXQgPSB1c2VBbmNob3JXYWxsZXQoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldE1ldGFwbGV4KFxuICAgICAgTWV0YXBsZXgubWFrZShjb25uZWN0aW9uKS51c2UoXG4gICAgICAgIHdhbGxldCA/IHdhbGxldEFkYXB0ZXJJZGVudGl0eSh3YWxsZXQpIDogZ3Vlc3RJZGVudGl0eSgpXG4gICAgICApXG4gICAgKTtcbiAgfSwgW2Nvbm5lY3Rpb24sIHdhbGxldF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFtZXRhcGxleCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdXBkYXRlU3RhdGUgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhtZXRhcGxleC5uZnRzKCkuZiwgXCJXT09PT09PT1dcIilcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBhd2FpdCBtZXRhcGxleFxuICAgICAgICAgIC5jYW5keU1hY2hpbmVzKClcbiAgICAgICAgICAuZmluZEJ5QWRkcmVzcyh7IGFkZHJlc3M6IENBTkRZX01BQ0hJTkVfSUQgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcbiAgICAgICAgc2V0Q2FuZHlTdGF0ZShzdGF0ZSk7XG4gICAgICAgIHNldE5mdHMoc3RhdGUuaXRlbXMpXG4gICAgICAgIHNldENhbmR5U3RhdGVFcnJvcihudWxsKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgIHNldENhbmR5U3RhdGVFcnJvcihlLm1lc3NhZ2UpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgc2V0Q2FuZHlTdGF0ZUxvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH07XG5cblxuICAgIHVwZGF0ZVN0YXRlKCk7XG5cblxuICAgIC8vIFJlZnJlc2ggdGhlIHN0YXRlIGV2ZXJ5IDMwc1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB1cGRhdGVTdGF0ZSgpLCAzMF8wMDApO1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gIH0sIFttZXRhcGxleF0pO1xuXG4gIGNvbnN0IG1pbnQgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFtZXRhcGxleCkgcmV0dXJuO1xuXG4gICAgc2V0VHhMb2FkaW5nKHRydWUpO1xuICAgIHNldFR4RXJyb3IobnVsbCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgbWludFJlc3VsdCA9IGF3YWl0IG1ldGFwbGV4LmNhbmR5TWFjaGluZXMoKS5taW50KHtcbiAgICAgICAgY2FuZHlNYWNoaW5lOiB7XG4gICAgICAgICAgYWRkcmVzczogY2FuZHlTdGF0ZS5hZGRyZXNzLFxuICAgICAgICAgIGNvbGxlY3Rpb25NaW50QWRkcmVzczogY2FuZHlTdGF0ZS5jb2xsZWN0aW9uTWludEFkZHJlc3MsXG4gICAgICAgICAgY2FuZHlHdWFyZDogY2FuZHlTdGF0ZS5jYW5keUd1YXJkLFxuICAgICAgICB9LFxuICAgICAgICBjb2xsZWN0aW9uVXBkYXRlQXV0aG9yaXR5OiBjYW5keVN0YXRlLmF1dGhvcml0eUFkZHJlc3MsXG4gICAgICAgIGdyb3VwOiBudWxsLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKHsgbWludFJlc3VsdCB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgIHNldFR4RXJyb3IoZS5tZXNzYWdlKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0VHhMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc29sZE91dCA9IGNhbmR5U3RhdGU/Lml0ZW1zUmVtYWluaW5nLmVxbigwKTtcbiAgY29uc3Qgc29sQW1vdW50ID0gY2FuZHlTdGF0ZT8uY2FuZHlHdWFyZD8uZ3VhcmRzPy5zb2xQYXltZW50XG4gICAgPyBjYW5keVN0YXRlLmNhbmR5R3VhcmQuZ3VhcmRzLnNvbFBheW1lbnQubGFtcG9ydHMudG9OdW1iZXIoKSAvXG4gICAgTEFNUE9SVFNfUEVSX1NPTFxuICAgIDogbnVsbDtcblxuICAvLyBTVFlMRSBNT1ZFIExBVEVSXG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICB3cmFwcGVyOiAnZmxleCBoLVsxMDB2aF0gdy1bMTAwdnddIGJnLVsjMWQxZDFkXSB0ZXh0LWdyYXktMjAwJyxcbiAgICBjb250YWluZXI6XG4gICAgICAnZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBmbGV4LTEgcC01IHBiLTIwIGxnOnAtMTAgc3BhY2UteS0xMCBsZzpzcGFjZS15LTAnLFxuICAgIGluZm9TZWN0aW9uOiAnbGc6dy0yLzMgcHgtMTAnLFxuICAgIG1vYmlsZURpc3BsYXlTZWN0aW9uOiAnaC1bMzAwcHhdIGZsZXggdy1mdWxsIGxnOmhpZGRlbiBsZzp3LTEvMyBtdC00JyxcbiAgICBkZXNrdG9wRGlzcGxheVNlY3Rpb246ICdoaWRkZW4gbGc6ZmxleCBmbGV4LTEgbGc6dy0xLzMnLFxuICAgIG1pbnRCdXR0b246XG4gICAgICAncm91bmRlZC14bCBib3JkZXIgYm9yZGVyLWdyYXktMTAwIGJnLXRyYW5zcGFyZW50IHB4LTggcHktNCBmb250LXNlbWlib2xkIHRleHQtZ3JheS0xMDAgdHJhbnNpdGlvbi1hbGwgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1bIzFkMWQxZF0nLFxuICB9XG5cbiAgLy9ORVcgVUlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIHwgU29sYW5hIE1vbmtleSBCdXNpbmVzcyBORlQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmluZm9TZWN0aW9ufT5cbiAgICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2JpbGVEaXNwbGF5U2VjdGlvbn0+XG4gICAgICAgICAgICA8TkZURGlzcGxheSAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPEhlcm8gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge2NhbmR5U3RhdGVMb2FkaW5nID8gKFxuICAgICAgICAgICAgICA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgICkgOiBjYW5keVN0YXRlRXJyb3IgPyAoXG4gICAgICAgICAgICAgIDxkaXY+e2NhbmR5U3RhdGVFcnJvcn08L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIGNhbmR5U3RhdGUgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlRvdGFsIGl0ZW1zOiB7Y2FuZHlTdGF0ZS5pdGVtc0F2YWlsYWJsZS50b1N0cmluZygpfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdj5NaW50ZWQgaXRlbXM6IHtjYW5keVN0YXRlLml0ZW1zTWludGVkLnRvU3RyaW5nKCl9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlJlbWFpbmluZyBpdGVtczoge2NhbmR5U3RhdGUuaXRlbXNSZW1haW5pbmcudG9TdHJpbmcoKX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIHtzb2xBbW91bnQgJiYgPGRpdj5Db3N0OiDil44ge3NvbEFtb3VudH08L2Rpdj59XG4gICAgICAgICAgICAgICAgICB7dHhFcnJvciAmJiA8ZGl2Pnt0eEVycm9yfTwvZGl2Pn1cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubWludEJ1dHRvbn0gb25DbGljaz17bWludH0gZGlzYWJsZWQ9eyF3YWxsZXQgfHwgdHhMb2FkaW5nIHx8IHNvbGRPdXR9PlxuICAgICAgICAgICAgICAgICAgICB7c29sZE91dCA/IFwiU09MRCBPVVRcIiA6IHR4TG9hZGluZyA/IFwiTE9BRElORy4uLlwiIDogXCJNSU5UXCJ9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmRlc2t0b3BEaXNwbGF5U2VjdGlvbn0+XG4gICAgICAgICAgPE5GVERpc3BsYXkgLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcblxuICAvLyByZXR1cm4gKFxuICAvLyAgIDxkaXY+XG4gIC8vICAgICB7Y2FuZHlTdGF0ZUxvYWRpbmcgPyAoXG4gIC8vICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuICAvLyAgICAgKSA6IGNhbmR5U3RhdGVFcnJvciA/IChcbiAgLy8gICAgICAgPGRpdj57Y2FuZHlTdGF0ZUVycm9yfTwvZGl2PlxuICAvLyAgICAgKSA6IChcbiAgLy8gICAgICAgY2FuZHlTdGF0ZSAmJiAoXG4gIC8vICAgICAgICAgPGRpdj5cbiAgLy8gICAgICAgICAgIDxkaXY+VG90YWwgaXRlbXM6IHtjYW5keVN0YXRlLml0ZW1zQXZhaWxhYmxlLnRvU3RyaW5nKCl9PC9kaXY+XG4gIC8vICAgICAgICAgICA8ZGl2Pk1pbnRlZCBpdGVtczoge2NhbmR5U3RhdGUuaXRlbXNNaW50ZWQudG9TdHJpbmcoKX08L2Rpdj5cbiAgLy8gICAgICAgICAgIDxkaXY+UmVtYWluaW5nIGl0ZW1zOiB7Y2FuZHlTdGF0ZS5pdGVtc1JlbWFpbmluZy50b1N0cmluZygpfTwvZGl2PlxuICAvLyAgICAgICAgICAge3NvbEFtb3VudCAmJiA8ZGl2PkNvc3Q6IOKXjiB7c29sQW1vdW50fTwvZGl2Pn1cbiAgLy8gICAgICAgICAgIHt0eEVycm9yICYmIDxkaXY+e3R4RXJyb3J9PC9kaXY+fVxuICAvLyAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXttaW50fSBkaXNhYmxlZD17IXdhbGxldCB8fCB0eExvYWRpbmcgfHwgc29sZE91dH0+XG4gIC8vICAgICAgICAgICAgIHtzb2xkT3V0ID8gXCJTT0xEIE9VVFwiIDogdHhMb2FkaW5nID8gXCJMT0FESU5HLi4uXCIgOiBcIk1JTlRcIn1cbiAgLy8gICAgICAgICAgIDwvYnV0dG9uPlxuICAvLyAgICAgICAgIDwvZGl2PlxuICAvLyAgICAgICApXG4gIC8vICAgICApfVxuICAvLyAgICAge25mdHMubWFwKChuZnQpID0+IHtcbiAgLy8gICAgICAgLy8gY29uc29sZS5sb2cobmZ0KVxuICAvLyAgICAgICAvLyByZXR1cm4gPE5GVCB1cmk9e25mdC51cml9IC8+XG4gIC8vICAgICB9KX1cbiAgLy8gICA8L2Rpdj5cbiAgLy8gKTtcbn1cblxuXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJndWVzdElkZW50aXR5IiwiTWV0YXBsZXgiLCJ3YWxsZXRBZGFwdGVySWRlbnRpdHkiLCJMQU1QT1JUU19QRVJfU09MIiwidXNlQW5jaG9yV2FsbGV0IiwidXNlQ29ubmVjdGlvbiIsIldhbGxldE11bHRpQnV0dG9uIiwiQ0FORFlfTUFDSElORV9JRCIsIk5GVCIsIkhlYWQiLCJIZWFkZXIiLCJORlREaXNwbGF5IiwiSGVybyIsIkxvZ2luIiwiTWFpbiIsImNhbmR5U3RhdGUiLCJtZXRhcGxleCIsInNldE1ldGFwbGV4Iiwic2V0Q2FuZHlTdGF0ZSIsImNhbmR5U3RhdGVFcnJvciIsInNldENhbmR5U3RhdGVFcnJvciIsImNhbmR5U3RhdGVMb2FkaW5nIiwic2V0Q2FuZHlTdGF0ZUxvYWRpbmciLCJ0eEVycm9yIiwic2V0VHhFcnJvciIsInR4TG9hZGluZyIsInNldFR4TG9hZGluZyIsIm5mdHMiLCJzZXROZnRzIiwiY29ubmVjdGlvbiIsIndhbGxldCIsIm1ha2UiLCJ1c2UiLCJ1cGRhdGVTdGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJmIiwic3RhdGUiLCJjYW5keU1hY2hpbmVzIiwiZmluZEJ5QWRkcmVzcyIsImFkZHJlc3MiLCJpdGVtcyIsImUiLCJtZXNzYWdlIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm1pbnQiLCJtaW50UmVzdWx0IiwiY2FuZHlNYWNoaW5lIiwiY29sbGVjdGlvbk1pbnRBZGRyZXNzIiwiY2FuZHlHdWFyZCIsImNvbGxlY3Rpb25VcGRhdGVBdXRob3JpdHkiLCJhdXRob3JpdHlBZGRyZXNzIiwiZ3JvdXAiLCJzb2xkT3V0IiwiaXRlbXNSZW1haW5pbmciLCJlcW4iLCJzb2xBbW91bnQiLCJndWFyZHMiLCJzb2xQYXltZW50IiwibGFtcG9ydHMiLCJ0b051bWJlciIsInN0eWxlcyIsIndyYXBwZXIiLCJjb250YWluZXIiLCJpbmZvU2VjdGlvbiIsIm1vYmlsZURpc3BsYXlTZWN0aW9uIiwiZGVza3RvcERpc3BsYXlTZWN0aW9uIiwibWludEJ1dHRvbiIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwic2VjdGlvbiIsIml0ZW1zQXZhaWxhYmxlIiwidG9TdHJpbmciLCJpdGVtc01pbnRlZCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Main.js\n"));

/***/ })

});
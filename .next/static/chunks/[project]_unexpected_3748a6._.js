(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]_unexpected_3748a6._.js", {

"[project]/unexpected/components/toaster.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "MyToastContent": ()=>MyToastContent,
    "Toaster": ()=>Toaster
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next-themes/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/react-toastify/dist/react-toastify.esm.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const contextClass = {
    success: "bg-gradient-to-r from-success/25 to-default/40",
    error: "bg-gradient-to-r from-danger/25 to-default/40",
    info: "bg-default-50",
    warning: "bg-gradient-to-r from-warning/25 to-default/40",
    default: "bg-gradient-to-r from-default/25 to-default/40",
    dark: "bg-gray-600"
};
function MyToastContent({ title, message }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-start justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                className: "text-sm text-foreground-900 font-semibold",
                children: title
            }, void 0, false, {
                fileName: "[project]/unexpected/components/toaster.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-foreground-900",
                children: message
            }, void 0, false, {
                fileName: "[project]/unexpected/components/toaster.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/unexpected/components/toaster.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
_c = MyToastContent;
function Toaster() {
    _s();
    const { theme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {
        theme: theme === 'dark' ? 'dark' : 'light',
        toastClassName: (context)=>contextClass[context?.type || "default"] + (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative flex p-4 rounded-2xl justify-between items-center overflow-hidden cursor-pointer", "backdrop-blur-lg"),
        newestOnTop: true,
        stacked: true
    }, void 0, false, {
        fileName: "[project]/unexpected/components/toaster.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
_s(Toaster, "JkSxfi8+JQlqgIgDOc3wQN+nVIw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c1 = Toaster;
var _c, _c1;
__turbopack_refresh__.register(_c, "MyToastContent");
__turbopack_refresh__.register(_c1, "Toaster");

})()),
"[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ProfileAccorditionCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@aptos-labs/wallet-adapter-react/dist/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@aptos-labs/wallet-adapter-react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@aptos-labs/wallet-adapter-react/node_modules/@aptos-labs/wallet-adapter-core/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$skeleton$2f$dist$2f$chunk$2d$SO5PHFDL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__skeleton_default__as__Skeleton$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/skeleton/dist/chunk-SO5PHFDL.mjs [app-client] (ecmascript) <export skeleton_default as Skeleton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$avatar$2f$dist$2f$chunk$2d$QXREVWCS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__avatar_default__as__Avatar$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/avatar/dist/chunk-QXREVWCS.mjs [app-client] (ecmascript) <export avatar_default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$logout_circle_02_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutCircle02Icon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/logout_circle_02_icon.js [app-client] (ecmascript) <export default as LogoutCircle02Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/react-toastify/dist/react-toastify.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$components$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/components/toaster.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
;
;
;
;
;
;
;
;
const DynamicWalletSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_require__("[project]/unexpected/app/(dashboard)/components/wallet/WalletSelector.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx -> " + "../wallet/WalletSelector"
        ]
    },
    ssr: false
});
_c = DynamicWalletSelector;
function ProfileAccorditionCard() {
    _s();
    const { connected, account, wallet, disconnect, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWallet"])();
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$skeleton$2f$dist$2f$chunk$2d$SO5PHFDL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__skeleton_default__as__Skeleton$3e$__["Skeleton"], {
        className: "w-full h-16 rounded-lg"
    }, void 0, false, {
        fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
        lineNumber: 15,
        columnNumber: 27
    }, this);
    if (!connected) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicWalletSelector, {}, void 0, false, {
        fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
        lineNumber: 16,
        columnNumber: 28
    }, this);
    const handleDisconnet = __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback(()=>{
        try {
            disconnect();
            __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success('Disconnected successfully');
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$react$2d$toastify$2f$dist$2f$react$2d$toastify$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$components$2f$toaster$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MyToastContent"], {
                title: "Error",
                message: "Failed to disconnect"
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                lineNumber: 23,
                columnNumber: 25
            }, this));
        }
    }, [
        disconnect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row gap-2 items-end w-full rounded-[32px] bg-foreground-50 border-t-1 border-default/50 py-4 px-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$avatar$2f$dist$2f$chunk$2d$QXREVWCS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__avatar_default__as__Avatar$3e$__["Avatar"], {
                                src: wallet?.icon,
                                size: "sm",
                                alt: wallet?.name,
                                radius: "full",
                                classNames: {
                                    base: 'h-full aspect-square bg-transparent'
                                }
                            }, void 0, false, {
                                fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                                lineNumber: 31,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-sm font-semibold w-full break-words text-foreground-900",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["truncateAddress"])(account?.address)
                            }, void 0, false, {
                                fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
                                className: "text-xs text-foreground-500",
                                children: "Balance"
                            }, void 0, false, {
                                fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                                lineNumber: 45,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-4xl font-semibold text-foreground-900",
                                children: [
                                    "3000 ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-normal",
                                        children: "Aptos"
                                    }, void 0, false, {
                                        fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                                        lineNumber: 47,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                                lineNumber: 46,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                    size: "sm",
                    variant: "solid",
                    className: "bg-foreground-900 text-foreground-50",
                    radius: "md",
                    onClick: handleDisconnet,
                    endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$logout_circle_02_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogoutCircle02Icon$3e$__["LogoutCircle02Icon"], {
                        size: 16,
                        className: "text-foreground-500"
                    }, void 0, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                        lineNumber: 59,
                        columnNumber: 25
                    }, void 0),
                    children: "Disconnect"
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
                lineNumber: 51,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/unexpected/app/(dashboard)/components/top-navbar/ProfileAccorditionCard.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
_s(ProfileAccorditionCard, "29ANXhNRm6HOkt1HSNA3WPOBLdA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$aptos$2d$labs$2f$wallet$2d$adapter$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useWallet"]
    ];
});
_c1 = ProfileAccorditionCard;
var _c, _c1;
__turbopack_refresh__.register(_c, "DynamicWalletSelector");
__turbopack_refresh__.register(_c1, "ProfileAccorditionCard");

})()),
}]);

//# sourceMappingURL=%5Bproject%5D_unexpected_3748a6._.js.map
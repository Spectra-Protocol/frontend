(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_(dashboard)_be54bd._.js", {

"[project]/unexpected/app/(dashboard)/components/area/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Area": ()=>Area,
    "AreaContext": ()=>AreaContext,
    "AreaHeader": ()=>AreaHeader,
    "AreaMain": ()=>AreaMain,
    "AreaWrapper": ()=>AreaWrapper,
    "useArea": ()=>useArea
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
const AreaWrapper = ({ className, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex flex-col gap-4 rounded-[32px] items-start", className),
        ...props,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/unexpected/app/(dashboard)/components/area/index.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
};
_c = AreaWrapper;
const AreaHeader = ({ title, subtitle, icon, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row items-center gap-4 justify-center w-full",
        ...props,
        children: [
            icon,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full justify-start flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-lg font-semibold text-foreground-900",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/components/area/index.tsx",
                        lineNumber: 29,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-default-500",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/components/area/index.tsx",
                        lineNumber: 30,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/unexpected/app/(dashboard)/components/area/index.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/unexpected/app/(dashboard)/components/area/index.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
};
_c1 = AreaHeader;
const AreaMain = ({ ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        ...props,
        children: props.children
    }, void 0, false, {
        fileName: "[project]/unexpected/app/(dashboard)/components/area/index.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
};
_c2 = AreaMain;
const AreaContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    labelPlacement: "inside",
    showLabel: true
});
const useArea = ()=>{
    _s();
    return __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(AreaContext);
};
_s(useArea, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
const Area = ({ labelPlacement = "inside", showLabel = true, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AreaContext.Provider, {
        value: {
            labelPlacement,
            showLabel
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AreaWrapper, {
            className: props.classNames?.wrapper,
            children: props.children
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/area/index.tsx",
            lineNumber: 63,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/unexpected/app/(dashboard)/components/area/index.tsx",
        lineNumber: 62,
        columnNumber: 9
    }, this);
};
_c3 = Area;
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "AreaWrapper");
__turbopack_refresh__.register(_c1, "AreaHeader");
__turbopack_refresh__.register(_c2, "AreaMain");
__turbopack_refresh__.register(_c3, "Area");

})()),
"[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>PortfolioArea
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f$components$2f$area$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/app/(dashboard)/components/area/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$bitcoin_mail_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BitcoinMailIcon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/bitcoin_mail_icon.js [app-client] (ecmascript) <export default as BitcoinMailIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
const DynamicPortfolioTable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_require__("[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/index.tsx -> " + "./PortfolioTable"
        ]
    },
    ssr: false
});
_c = DynamicPortfolioTable;
function PortfolioArea() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f$components$2f$area$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Area"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f$components$2f$area$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaHeader"], {
                title: "Portfolio",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$bitcoin_mail_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BitcoinMailIcon$3e$__["BitcoinMailIcon"], {
                    size: 32
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/index.tsx",
                    lineNumber: 10,
                    columnNumber: 49
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/index.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f$components$2f$area$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AreaMain"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicPortfolioTable, {}, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/index.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/index.tsx",
                lineNumber: 11,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/index.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c1 = PortfolioArea;
var _c, _c1;
__turbopack_refresh__.register(_c, "DynamicPortfolioTable");
__turbopack_refresh__.register(_c1, "PortfolioArea");

})()),
}]);

//# sourceMappingURL=app_%28dashboard%29_be54bd._.js.map
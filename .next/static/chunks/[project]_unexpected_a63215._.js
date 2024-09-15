(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]_unexpected_a63215._.js", {

"[project]/unexpected/components/theme-switch.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ThemeSwitch": ()=>ThemeSwitch
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$switch$2f$dist$2f$chunk$2d$JYO7OWIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/switch/dist/chunk-JYO7OWIA.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$switch$2f$dist$2f$chunk$2d$VMWQTXAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__switch_default__as__Switch$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/switch/dist/chunk-VMWQTXAV.mjs [app-client] (ecmascript) <export switch_default as Switch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next-themes/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/@react-aria/ssr/dist/SSRProvider.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$moon_01_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon01Icon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/moon_01_icon.js [app-client] (ecmascript) <export default as Moon01Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$sun_01_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun01Icon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/sun_01_icon.js [app-client] (ecmascript) <export default as Sun01Icon>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
const ThemeSwitch = ({ className, classNames })=>{
    _s();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const isSSR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsSSR"])();
    const onChange = ()=>{
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    const {} = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$switch$2f$dist$2f$chunk$2d$JYO7OWIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitch"])({
        isSelected: theme === "light" || isSSR,
        "aria-label": `Switch to ${theme === "light" || isSSR ? "dark" : "light"} mode`,
        onChange
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$switch$2f$dist$2f$chunk$2d$VMWQTXAV$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__switch_default__as__Switch$3e$__["Switch"], {
        defaultChecked: theme === "dark",
        isSelected: theme === "dark",
        color: "primary",
        thumbIcon: theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$moon_01_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon01Icon$3e$__["Moon01Icon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/unexpected/components/theme-switch.tsx",
            lineNumber: 38,
            columnNumber: 37
        }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$sun_01_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun01Icon$3e$__["Sun01Icon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/unexpected/components/theme-switch.tsx",
            lineNumber: 38,
            columnNumber: 64
        }, void 0),
        onChange: onChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {}, void 0, false, {
            fileName: "[project]/unexpected/components/theme-switch.tsx",
            lineNumber: 41,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/unexpected/components/theme-switch.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
_s(ThemeSwitch, "ng4R4pXAJ8q7HzDUmuvN0H7mvtY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"],
        __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$react$2d$aria$2f$ssr$2f$dist$2f$SSRProvider$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useIsSSR"],
        __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$switch$2f$dist$2f$chunk$2d$JYO7OWIA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSwitch"]
    ];
});
_c = ThemeSwitch;
var _c;
__turbopack_refresh__.register(_c, "ThemeSwitch");

})()),
"[project]/unexpected/components/icons.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Favicon": ()=>Favicon,
    "Logo": ()=>Logo,
    "SearchIcon": ()=>SearchIcon
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const Logo = ({ size = 36, width, height, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "none",
        height: size || height,
        viewBox: "0 0 32 32",
        width: size || width,
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 10V23M16 23L8 19M16 23L24 19",
                    stroke: "#006FEE",
                    strokeWidth: "5.33333",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, void 0, false, {
                    fileName: "[project]/unexpected/components/icons.tsx",
                    lineNumber: 19,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M16 23V15M16 15L8 11M16 15L24 11",
                    strokeWidth: "5.33333",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "stroke-primary dark:stroke-white"
                }, void 0, false, {
                    fileName: "[project]/unexpected/components/icons.tsx",
                    lineNumber: 20,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/unexpected/components/icons.tsx",
            lineNumber: 18,
            columnNumber: 5
        }, this)
    }, void 0, false, {
        fileName: "[project]/unexpected/components/icons.tsx",
        lineNumber: 11,
        columnNumber: 3
    }, this);
_c = Logo;
const Favicon = ({ size = 36, width, height, ...props })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "none",
        height: size || height,
        viewBox: "0 0 32 32",
        width: size || width,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z",
                fill: "#006FEE"
            }, void 0, false, {
                fileName: "[project]/unexpected/components/icons.tsx",
                lineNumber: 38,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                filter: "url(#filter0_d_4421_305)",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 24V16M16 16L8 12M16 16L24 12",
                        stroke: "#99C7FB",
                        strokeWidth: "5.33333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/unexpected/components/icons.tsx",
                        lineNumber: 40,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 11V24M16 24L8 20M16 24L24 20",
                        stroke: "#99C7FB",
                        strokeWidth: "5.33333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/unexpected/components/icons.tsx",
                        lineNumber: 41,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 23V15M16 15L8 11M16 15L24 11",
                        stroke: "#E6F1FE",
                        strokeWidth: "5.33333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/unexpected/components/icons.tsx",
                        lineNumber: 42,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 10V23M16 23L8 19M16 23L24 19",
                        stroke: "#E6F1FE",
                        strokeWidth: "5.33333",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, void 0, false, {
                        fileName: "[project]/unexpected/components/icons.tsx",
                        lineNumber: 43,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/unexpected/components/icons.tsx",
                lineNumber: 39,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("filter", {
                    id: "filter0_d_4421_305",
                    x: "3.33276",
                    y: "7.33331",
                    width: "25.3345",
                    height: "23.3334",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix"
                        }, void 0, false, {
                            fileName: "[project]/unexpected/components/icons.tsx",
                            lineNumber: 47,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha"
                        }, void 0, false, {
                            fileName: "[project]/unexpected/components/icons.tsx",
                            lineNumber: 48,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feOffset", {
                            dy: "2"
                        }, void 0, false, {
                            fileName: "[project]/unexpected/components/icons.tsx",
                            lineNumber: 49,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feGaussianBlur", {
                            stdDeviation: "1"
                        }, void 0, false, {
                            fileName: "[project]/unexpected/components/icons.tsx",
                            lineNumber: 50,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feComposite", {
                            in2: "hardAlpha",
                            operator: "out"
                        }, void 0, false, {
                            fileName: "[project]/unexpected/components/icons.tsx",
                            lineNumber: 51,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feColorMatrix", {
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0.292843 0 0 0 0 0.627897 0 0 0 0.75 0"
                        }, void 0, false, {
                            fileName: "[project]/unexpected/components/icons.tsx",
                            lineNumber: 52,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_4421_305"
                        }, void 0, false, {
                            fileName: "[project]/unexpected/components/icons.tsx",
                            lineNumber: 53,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_4421_305",
                            result: "shape"
                        }, void 0, false, {
                            fileName: "[project]/unexpected/components/icons.tsx",
                            lineNumber: 54,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/unexpected/components/icons.tsx",
                    lineNumber: 46,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/unexpected/components/icons.tsx",
                lineNumber: 45,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/unexpected/components/icons.tsx",
        lineNumber: 31,
        columnNumber: 3
    }, this);
_c1 = Favicon;
const SearchIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        "aria-hidden": "true",
        fill: "none",
        focusable: "false",
        height: "1em",
        role: "presentation",
        viewBox: "0 0 24 24",
        width: "1em",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/unexpected/components/icons.tsx",
                lineNumber: 71,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M22 22L20 20",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2"
            }, void 0, false, {
                fileName: "[project]/unexpected/components/icons.tsx",
                lineNumber: 78,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/unexpected/components/icons.tsx",
        lineNumber: 61,
        columnNumber: 3
    }, this);
_c2 = SearchIcon;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "Logo");
__turbopack_refresh__.register(_c1, "Favicon");
__turbopack_refresh__.register(_c2, "SearchIcon");

})()),
"[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Sidebar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/input/dist/chunk-GQQM5TNQ.mjs [app-client] (ecmascript) <export input_default as Input>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$listbox$2f$dist$2f$chunk$2d$CEGPMSXT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_default__as__Listbox$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/listbox/dist/chunk-CEGPMSXT.mjs [app-client] (ecmascript) <export listbox_default as Listbox>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$listbox$2f$dist$2f$chunk$2d$VHPYXGWP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__ListboxItem$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/listbox/dist/chunk-VHPYXGWP.mjs [app-client] (ecmascript) <export listbox_item_base_default as ListboxItem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$components$2f$theme$2d$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/components/theme-switch.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript) <export chip_default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$saturn_02_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Saturn02Icon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/saturn_02_icon.js [app-client] (ecmascript) <export default as Saturn02Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyboardIcon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/keyboard_icon.js [app-client] (ecmascript) <export default as KeyboardIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$notification_01_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Notification01Icon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/notification_01_icon.js [app-client] (ecmascript) <export default as Notification01Icon>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
;
;
;
;
const DynamicProfileAccordition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_require__("[project]/unexpected/app/(dashboard)/components/sidebar/ProfileAccordition.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "unexpected/app/(dashboard)/components/sidebar/sidebar.tsx -> " + "./ProfileAccordition"
        ]
    }
});
_c = DynamicProfileAccordition;
const DynamicExtraCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_require__("[project]/unexpected/app/(dashboard)/components/sidebar/ExtraCard.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "unexpected/app/(dashboard)/components/sidebar/sidebar.tsx -> " + "./ExtraCard"
        ]
    }
});
_c1 = DynamicExtraCard;
const DynamicCopyRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_require__("[project]/unexpected/app/(dashboard)/components/sidebar/Copyright.tsx [app-client] (ecmascript, async loader)")(__turbopack_import__), {
    loadableGenerated: {
        modules: [
            "unexpected/app/(dashboard)/components/sidebar/sidebar.tsx -> " + "./Copyright"
        ]
    }
});
_c2 = DynamicCopyRight;
const navItems = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$saturn_02_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Saturn02Icon$3e$__["Saturn02Icon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
            lineNumber: 23,
            columnNumber: 15
        }, this)
    },
    {
        label: "Interface",
        href: "/interface",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyboardIcon$3e$__["KeyboardIcon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
            lineNumber: 28,
            columnNumber: 15
        }, this)
    },
    {
        label: "Notifications",
        href: "/notifications",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$notification_01_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Notification01Icon$3e$__["Notification01Icon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
            lineNumber: 33,
            columnNumber: 15
        }, this),
        endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
            color: "secondary",
            radius: "full",
            size: "sm",
            children: "+ 3"
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
            lineNumber: 34,
            columnNumber: 21
        }, this)
    }
];
function Sidebar({ className, ...props }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const Search = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$input$2f$dist$2f$chunk$2d$GQQM5TNQ$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__input_default__as__Input$3e$__["Input"], {
            placeholder: "Search...",
            fullWidth: true
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
            lineNumber: 44,
            columnNumber: 13
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("relative flex h-full w-72 flex-1 flex-col p-6 gap-8 items-center max-w-64", "ftransition-transform -translate-x-full sm:translate-x-0", className),
        "aria-label": "Sidebar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2 px-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Favicon"], {
                        size: 32
                    }, void 0, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-semibold text-foreground-900 w-full",
                        children: "Unexpected"
                    }, void 0, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Search, {}, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                    lineNumber: 61,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                lineNumber: 60,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$listbox$2f$dist$2f$chunk$2d$CEGPMSXT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_default__as__Listbox$3e$__["Listbox"], {
                className: "h-full w-full",
                children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$listbox$2f$dist$2f$chunk$2d$VHPYXGWP$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__listbox_item_base_default__as__ListboxItem$3e$__["ListboxItem"], {
                        href: item.href,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("px-4 py-3 text-sm rounded-large text-default-500 hover:bg-foreground-100 data-[hover=true]:bg-foreground-100 data-[hover=true]:text-foreground-900 data-[hover=true]:font-bold data-[hover=true]:border border-default/5", pathname === item.href ? "bg-foreground-100 text-foreground-900 font-bold border border-default/5" : ""),
                        startContent: item.icon,
                        endContent: item.endContent,
                        children: item.label
                    }, item.href, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                        lineNumber: 66,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                lineNumber: 63,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicExtraCard, {}, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                    lineNumber: 82,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row gap-4 justify-between w-full h-fit items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-default-500",
                        children: "Dark Mode"
                    }, void 0, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$components$2f$theme$2d$switch$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeSwitch"], {}, void 0, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicProfileAccordition, {}, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                    lineNumber: 89,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                lineNumber: 88,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DynamicCopyRight, {}, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/unexpected/app/(dashboard)/components/sidebar/sidebar.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c3 = Sidebar;
var _c, _c1, _c2, _c3;
__turbopack_refresh__.register(_c, "DynamicProfileAccordition");
__turbopack_refresh__.register(_c1, "DynamicExtraCard");
__turbopack_refresh__.register(_c2, "DynamicCopyRight");
__turbopack_refresh__.register(_c3, "Sidebar");

})()),
}]);

//# sourceMappingURL=%5Bproject%5D_unexpected_a63215._.js.map
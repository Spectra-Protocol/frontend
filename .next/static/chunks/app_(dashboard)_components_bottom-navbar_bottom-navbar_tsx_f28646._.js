(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_(dashboard)_components_bottom-navbar_bottom-navbar_tsx_f28646._.js", {

"[project]/unexpected/app/(dashboard)/components/bottom-navbar/bottom-navbar.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>BottomNavbar
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/button/dist/chunk-DBLREEYE.mjs [app-client] (ecmascript) <export button_default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript) <export chip_default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$saturn_02_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Saturn02Icon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/saturn_02_icon.js [app-client] (ecmascript) <export default as Saturn02Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyboardIcon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/keyboard_icon.js [app-client] (ecmascript) <export default as KeyboardIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$notification_01_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Notification01Icon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/notification_01_icon.js [app-client] (ecmascript) <export default as Notification01Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet_01_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet01Icon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/wallet_01_icon.js [app-client] (ecmascript) <export default as Wallet01Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/navigation.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
;
;
const navItems = [
    {
        label: "Wallet",
        href: "/wallet",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet_01_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet01Icon$3e$__["Wallet01Icon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/bottom-navbar/bottom-navbar.tsx",
            lineNumber: 14,
            columnNumber: 15
        }, this)
    },
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$saturn_02_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Saturn02Icon$3e$__["Saturn02Icon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/bottom-navbar/bottom-navbar.tsx",
            lineNumber: 19,
            columnNumber: 15
        }, this)
    },
    {
        label: "Interface",
        href: "/interface",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$keyboard_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyboardIcon$3e$__["KeyboardIcon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/bottom-navbar/bottom-navbar.tsx",
            lineNumber: 24,
            columnNumber: 15
        }, this)
    },
    {
        label: "Notifications",
        href: "/notifications",
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$notification_01_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Notification01Icon$3e$__["Notification01Icon"], {
            size: 20
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/bottom-navbar/bottom-navbar.tsx",
            lineNumber: 29,
            columnNumber: 15
        }, this),
        endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
            color: "secondary",
            radius: "full",
            size: "sm",
            children: "+ 3"
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/bottom-navbar/bottom-navbar.tsx",
            lineNumber: 30,
            columnNumber: 21
        }, this)
    }
];
function BottomNavbarWrapper({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("fixed bottom-0 left-0 right-0 z-50 h-fit w-[80vw] mx-auto", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/unexpected/app/(dashboard)/components/bottom-navbar/bottom-navbar.tsx",
        lineNumber: 39,
        columnNumber: 9
    }, this);
}
_c = BottomNavbarWrapper;
function BottomNavbar({ className, ...props }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BottomNavbarWrapper, {
        className: className,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex justify-center bg-foreground-300 backdrop-blur-lg py-2 px-4 w-fit h-fit gap-2 rounded-[16px] mx-auto mb-6"),
            children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$button$2f$dist$2f$chunk$2d$DBLREEYE$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__button_default__as__Button$3e$__["Button"], {
                    as: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
                    variant: "light",
                    href: item.href,
                    radius: "md",
                    size: "md",
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("flex flex-row items-center gap-1 font-normal p-2 min-w-fit", pathname === item.href ? "text-foreground-50 bg-foreground-800 font-medium data-[hover=true]:bg-foreground-800 data-[hover=true]:text-foreground-50" : "text-default-500 data-[hover=true]:text-foreground-700"),
                    startContent: item.icon,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("hidden sm:block", pathname === item.href && "!block"),
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/components/bottom-navbar/bottom-navbar.tsx",
                        lineNumber: 73,
                        columnNumber: 29
                    }, this)
                }, item.href, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/components/bottom-navbar/bottom-navbar.tsx",
                    lineNumber: 58,
                    columnNumber: 25
                }, this))
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/components/bottom-navbar/bottom-navbar.tsx",
            lineNumber: 53,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/unexpected/app/(dashboard)/components/bottom-navbar/bottom-navbar.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
_s(BottomNavbar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c1 = BottomNavbar;
var _c, _c1;
__turbopack_refresh__.register(_c, "BottomNavbarWrapper");
__turbopack_refresh__.register(_c1, "BottomNavbar");

})()),
}]);

//# sourceMappingURL=app_%28dashboard%29_components_bottom-navbar_bottom-navbar_tsx_f28646._.js.map
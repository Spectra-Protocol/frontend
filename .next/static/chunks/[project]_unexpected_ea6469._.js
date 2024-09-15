(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[project]_unexpected_ea6469._.js", {

"[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/context.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ProfilerContext": ()=>ProfilerContext,
    "ProfilerProvider": ()=>ProfilerProvider,
    "useProfiler": ()=>useProfiler
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
var _s = __turbopack_refresh__.signature();
;
const ProfilerContext = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({});
const ProfilerProvider = ProfilerContext.Provider;
const useProfiler = ()=>{
    _s();
    return __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ProfilerContext);
};
_s(useProfiler, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

})()),
"[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/providers.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>Providers
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f28$profier$292f$profiers$2f5b$id$5d2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/context.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
function Providers({ children, Profiler }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f28$profier$292f$profiers$2f5b$id$5d2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfilerProvider"], {
        value: Profiler,
        children: children
    }, void 0, false, {
        fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/providers.tsx",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = Providers;
var _c;
__turbopack_refresh__.register(_c, "Providers");

})()),
"[project]/unexpected/types/index.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "ProfilerTagType": ()=>ProfilerTagType,
    "TransactionTagType": ()=>TransactionTagType
});
let TransactionTagType;
(function(TransactionTagType) {
    TransactionTagType["Buy"] = "Buy";
    TransactionTagType["Sell"] = "Sell";
    TransactionTagType["Transfer"] = "Transfer";
    TransactionTagType["Deposit"] = "Deposit";
    TransactionTagType["Withdraw"] = "Withdraw";
    TransactionTagType["Swap"] = "Swap";
    TransactionTagType["Other"] = "Other";
})(TransactionTagType || (TransactionTagType = {}));
let ProfilerTagType;
(function(ProfilerTagType) {
    ProfilerTagType["Whale"] = "Whale";
    ProfilerTagType["Fund"] = "Fund";
    ProfilerTagType["Anonymous"] = "Anonymous";
})(ProfilerTagType || (ProfilerTagType = {}));

})()),
"[project]/unexpected/components/dashboard/tag/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TagCard
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript) <export chip_default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$anonymous_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AnonymousIcon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/anonymous_icon.js [app-client] (ecmascript) <export default as AnonymousIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$building_06_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building06Icon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/building_06_icon.js [app-client] (ecmascript) <export default as Building06Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$group_layers_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GroupLayersIcon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/group_layers_icon.js [app-client] (ecmascript) <export default as GroupLayersIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/react-icons/gi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/types/index.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
;
const getTagStyle = (tag)=>{
    switch(tag){
        case "dex-aggregator":
            return {
                color: "#936316",
                backgroundColor: "#F5A524",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$group_layers_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GroupLayersIcon$3e$__["GroupLayersIcon"], {
                    size: 16,
                    color: "#312107"
                }, void 0, false, {
                    fileName: "[project]/unexpected/components/dashboard/tag/index.tsx",
                    lineNumber: 22,
                    columnNumber: 23
                }, this)
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfilerTagType"].Whale.toString():
            return {
                color: "#0A0A0A",
                backgroundColor: "#0C7DFF",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$react$2d$icons$2f$gi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GiWhaleTail"], {
                    color: "0057BC",
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/unexpected/components/dashboard/tag/index.tsx",
                    lineNumber: 28,
                    columnNumber: 23
                }, this)
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfilerTagType"].Fund.toString():
            return {
                color: "#0E793C",
                backgroundColor: "#17C964",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$building_06_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building06Icon$3e$__["Building06Icon"], {
                    color: "18974F",
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/unexpected/components/dashboard/tag/index.tsx",
                    lineNumber: 34,
                    columnNumber: 23
                }, this)
            };
        case __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfilerTagType"].Anonymous.toString():
            return {
                color: "#F4F4F5",
                backgroundColor: "#18181B",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$anonymous_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AnonymousIcon$3e$__["AnonymousIcon"], {
                    color: "A4A4A4",
                    size: 16
                }, void 0, false, {
                    fileName: "[project]/unexpected/components/dashboard/tag/index.tsx",
                    lineNumber: 40,
                    columnNumber: 23
                }, this)
            };
        default:
            return null;
    }
};
function TagCard({ tag }) {
    const tagStyle = getTagStyle(tag);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
        radius: "sm",
        className: "shadow-sm font-medium",
        style: {
            color: tagStyle?.color,
            backgroundColor: tagStyle?.backgroundColor
        },
        startContent: tagStyle?.icon,
        children: tag
    }, void 0, false, {
        fileName: "[project]/unexpected/components/dashboard/tag/index.tsx",
        lineNumber: 50,
        columnNumber: 9
    }, this);
}
_c = TagCard;
var _c;
__turbopack_refresh__.register(_c, "TagCard");

})()),
"[project]/unexpected/components/dashboard/profile/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "Profile": ()=>Profile
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$avatar$2f$dist$2f$chunk$2d$QXREVWCS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__avatar_default__as__Avatar$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/avatar/dist/chunk-QXREVWCS.mjs [app-client] (ecmascript) <export avatar_default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript) <export chip_default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$copy_02_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy02Icon$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/hugeicons-react/dist/esm/icons/copy_02_icon.js [app-client] (ecmascript) <export default as Copy02Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$components$2f$dashboard$2f$tag$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/components/dashboard/tag/index.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
'use client';
;
;
;
;
const Profile = (props)=>{
    const { name, avatar, address, tags } = props;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex flex-row items-center gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-full aspect-square max-h-16",
                children: typeof avatar === "string" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$avatar$2f$dist$2f$chunk$2d$QXREVWCS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__avatar_default__as__Avatar$3e$__["Avatar"], {
                    src: avatar,
                    alt: name,
                    color: "primary",
                    className: "rounded-[12px] md:rounded-[16px] w-full h-full object-cover shadow",
                    showFallback: true
                }, void 0, false, {
                    fileName: "[project]/unexpected/components/dashboard/profile/index.tsx",
                    lineNumber: 25,
                    columnNumber: 21
                }, this) : avatar
            }, void 0, false, {
                fileName: "[project]/unexpected/components/dashboard/profile/index.tsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-fit flex flex-col gap-2 justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "w-full text-lg lg:text-3xl font-semibold text-foreground",
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/unexpected/components/dashboard/profile/index.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row gap-2 flex-wrap items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                                radius: "sm",
                                className: "bg-foreground-50 text-foreground-500 font-medium shadow-sm",
                                endContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$hugeicons$2d$react$2f$dist$2f$esm$2f$icons$2f$copy_02_icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy02Icon$3e$__["Copy02Icon"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/unexpected/components/dashboard/profile/index.tsx",
                                    lineNumber: 43,
                                    columnNumber: 37
                                }, void 0),
                                children: address?.slice(0, 5) || "-"
                            }, void 0, false, {
                                fileName: "[project]/unexpected/components/dashboard/profile/index.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            tags && tags.map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$components$2f$dashboard$2f$tag$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    tag: tag
                                }, void 0, false, {
                                    fileName: "[project]/unexpected/components/dashboard/profile/index.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/unexpected/components/dashboard/profile/index.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/unexpected/components/dashboard/profile/index.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/unexpected/components/dashboard/profile/index.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
};
_c = Profile;
var _c;
__turbopack_refresh__.register(_c, "Profile");

})()),
"[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/Profile/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ProfileHeader
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$components$2f$dashboard$2f$profile$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/components/dashboard/profile/index.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f28$profier$292f$profiers$2f5b$id$5d2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/context.tsx [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
function ProfileHeader() {
    _s();
    const profiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f28$profier$292f$profiers$2f5b$id$5d2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiler"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full flex flex-col md:flex-row gap-4 my-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$components$2f$dashboard$2f$profile$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Profile"], {
            name: profiler.name,
            avatar: profiler.avatar,
            address: profiler.address,
            tags: [
                profiler.tag
            ]
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/Profile/index.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/Profile/index.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_s(ProfileHeader, "oB+e9hspIX7d3CzV1hv5r6qD7Ng=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f28$profier$292f$profiers$2f5b$id$5d2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiler"]
    ];
});
_c = ProfileHeader;
var _c;
__turbopack_refresh__.register(_c, "ProfileHeader");

})()),
"[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/data.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "columns": ()=>columns
});
const columns = [
    {
        name: "Asset",
        uid: "asset",
        sortable: false
    },
    {
        name: "Price",
        uid: "price",
        sortable: true
    },
    {
        name: "Holding",
        uid: "holding",
        sortable: true
    },
    {
        name: "Value",
        uid: "value",
        sortable: true
    }
];

})()),
"[project]/unexpected/mock/index.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "mockProfiler": ()=>mockProfiler,
    "mockProject": ()=>mockProject,
    "mockProjectDex": ()=>mockProjectDex,
    "mockProjectsTransactions": ()=>mockProjectsTransactions
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/types/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@faker-js/faker/dist/esm/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@faker-js/faker/dist/esm/chunk-3LPAMF3R.mjs [app-client] (ecmascript) <export a as faker>");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const mockProject = {
    name: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].company.name(),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.ethereumAddress(),
    floorPrice: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.amount({
        symbol: "$",
        autoFormat: true
    }),
    avatar: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].image.avatar(),
    tvl: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.amount({
        symbol: "ETH"
    })
};
const mockProjectsTransactions = Array.from({
    length: 10
}, ()=>({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].string.uuid(),
        time: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].date.recent(),
        from: {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].person.suffix(),
            address: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.ethereumAddress(),
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].image.avatar()
        },
        to: {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].person.suffix(),
            address: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.ethereumAddress(),
            avatar: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].image.avatar()
        },
        value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.amount({
            symbol: "ETH"
        }),
        token: {
            name: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.currencyName(),
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.currencySymbol(),
            address: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.ethereumAddress(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].image.url()
        },
        tags: [
            Math.random() > 0.5 ? __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionTagType"].Buy : __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TransactionTagType"].Sell
        ]
    }));
const mockProjectDex = {
    categories: [
        {
            id: "1",
            name: "Market Cap (30d)",
            metrics: [
                {
                    id: "1",
                    name: "Total Value Locked",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.amount(),
                    unit: "ETH"
                },
                {
                    id: "2",
                    name: "Daily Active Users",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].number.float(),
                    unit: "Users"
                },
                {
                    id: "3",
                    name: "Transaction Volume",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.amount(),
                    unit: "ETH"
                },
                {
                    id: "4",
                    name: "New Wallets Created",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].number.float(),
                    unit: "Wallets"
                },
                {
                    id: "5",
                    name: "Exchange Volume",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.amount(),
                    unit: "ETH"
                },
                {
                    id: "6",
                    name: "Total Market Cap",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.amount(),
                    unit: "ETH"
                }
            ]
        },
        {
            id: "2",
            name: "User Engagement",
            metrics: [
                {
                    id: "1",
                    name: "Daily Active Users",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].number.int({
                        min: 0,
                        max: 100
                    }),
                    unit: "Users"
                },
                {
                    id: "2",
                    name: "Monthly Active Users",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].number.float({
                        min: 0,
                        max: 100
                    }),
                    unit: "Users"
                },
                {
                    id: "3",
                    name: "Average Session Duration",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].number.float({
                        min: 0,
                        max: 100
                    }),
                    unit: "Minutes"
                },
                {
                    id: "4",
                    name: "Bounce Rate",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].number.float({
                        min: 0,
                        max: 100
                    }),
                    unit: "%"
                },
                {
                    id: "5",
                    name: "Session per User",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].number.float({
                        min: 0,
                        max: 100
                    }),
                    unit: "Sessions"
                },
                {
                    id: "6",
                    name: "Retention Rate",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].number.float({
                        min: 0,
                        max: 100
                    }),
                    unit: "%"
                }
            ]
        },
        {
            id: "3",
            name: "Financial Metrics",
            metrics: [
                {
                    id: "1",
                    name: "Revenue",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.amount(),
                    unit: "USD"
                },
                {
                    id: "2",
                    name: "Profit",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.amount(),
                    unit: "USD"
                },
                {
                    id: "3",
                    name: "Expenses",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.amount(),
                    unit: "USD"
                },
                {
                    id: "4",
                    name: "Net Income",
                    value: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.amount(),
                    unit: "USD"
                }
            ]
        }
    ]
};
const mockProfiler = {
    name: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].person.fullName(),
    address: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.ethereumAddress(),
    avatar: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].image.avatar(),
    tag: Math.random() > 0.2 ? __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfilerTagType"].Whale : Math.random() > 0.2 ? __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfilerTagType"].Fund : __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$types$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ProfilerTagType"].Anonymous,
    portifolio: Array.from({
        length: 28
    }, ()=>({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.currencyName(),
            symbol: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.currencySymbol(),
            address: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].finance.ethereumAddress(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$faker$2d$js$2f$faker$2f$dist$2f$esm$2f$chunk$2d$3LPAMF3R$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__a__as__faker$3e$__["faker"].image.url()
        }))
};

})()),
"[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TransactionsTable
});
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$HAXD4P37$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/table/dist/chunk-HAXD4P37.mjs [app-client] (ecmascript) <export table_default as Table>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/table/dist/chunk-YRZGWF2W.mjs [app-client] (ecmascript) <export table_header_default as TableHeader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/table/dist/chunk-TSPNSPCL.mjs [app-client] (ecmascript) <export table_column_default as TableColumn>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/table/dist/chunk-FKPXBCGS.mjs [app-client] (ecmascript) <export table_body_default as TableBody>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/table/dist/chunk-CIL4Y7FA.mjs [app-client] (ecmascript) <export table_row_default as TableRow>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/table/dist/chunk-F3UDT23P.mjs [app-client] (ecmascript) <export table_cell_default as TableCell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/spinner/dist/chunk-TDOFO53L.mjs [app-client] (ecmascript) <export spinner_default as Spinner>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$KARN4QIT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/shared-utils/dist/chunk-KARN4QIT.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/chip/dist/chunk-4WFLSIHH.mjs [app-client] (ecmascript) <export chip_default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$avatar$2f$dist$2f$chunk$2d$QXREVWCS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__avatar_default__as__Avatar$3e$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/avatar/dist/chunk-QXREVWCS.mjs [app-client] (ecmascript) <export avatar_default as Avatar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$use$2d$infinite$2d$scroll$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/@nextui-org/use-infinite-scroll/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$react$2d$stately$2f$data$2f$dist$2f$useAsyncList$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/node_modules/@react-stately/data/dist/useAsyncList.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f28$profier$292f$profiers$2f5b$id$5d2f$components$2f$PortfolioArea$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f28$profier$292f$profiers$2f5b$id$5d2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/context.tsx [app-client] (ecmascript)");
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
function TransactionsTable() {
    _s();
    const profiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f28$profier$292f$profiers$2f5b$id$5d2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiler"])();
    const [isLoading, setIsLoading] = __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [hasMore, setHasMore] = __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    let list = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$react$2d$stately$2f$data$2f$dist$2f$useAsyncList$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncList"])({
        async load ({ signal, cursor }) {
            if (cursor) {
                setIsLoading(false);
            }
            return {
                items: profiler.portifolio
            };
        }
    });
    const [loaderRef, scrollerRef] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$use$2d$infinite$2d$scroll$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteScroll"])({
        hasMore,
        onLoadMore: list.loadMore
    });
    const renderCell = __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useCallback((item, columnKey)=>{
        const cellValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$shared$2d$utils$2f$dist$2f$chunk$2d$KARN4QIT$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getKeyValue"])(item, columnKey.toString());
        switch(columnKey){
            case "asset":
                const convertedToken = cellValue;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$chip$2f$dist$2f$chunk$2d$4WFLSIHH$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__chip_default__as__Chip$3e$__["Chip"], {
                    variant: "light",
                    size: "lg",
                    startContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$avatar$2f$dist$2f$chunk$2d$QXREVWCS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__avatar_default__as__Avatar$3e$__["Avatar"], {
                        src: convertedToken.icon,
                        alt: convertedToken.name,
                        color: "primary",
                        size: "sm",
                        className: "w-4 h-4",
                        radius: "full",
                        showFallback: true
                    }, void 0, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                        lineNumber: 45,
                        columnNumber: 29
                    }, void 0),
                    children: convertedToken.symbol
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                    lineNumber: 41,
                    columnNumber: 21
                }, this);
            case "price":
                const convertedPrice = cellValue;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "w-full overflow-clip",
                    children: cellValue.toString()
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                    lineNumber: 63,
                    columnNumber: 21
                }, this);
            case "holding":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "w-full overflow-clip",
                    children: cellValue.toString()
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                    lineNumber: 67,
                    columnNumber: 21
                }, this);
            case "value":
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "w-full overflow-clip",
                    children: cellValue.toString()
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                    lineNumber: 71,
                    columnNumber: 21
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "w-full overflow-clip",
                    children: cellValue.toString()
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                    lineNumber: 74,
                    columnNumber: 24
                }, this);
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$HAXD4P37$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_default__as__Table$3e$__["Table"], {
        isHeaderSticky: true,
        "aria-label": "Example table with infinite pagination",
        baseRef: scrollerRef,
        fullWidth: true,
        bottomContent: hasMore ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-full justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                ref: loaderRef,
                color: "primary"
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                lineNumber: 87,
                columnNumber: 25
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
            lineNumber: 86,
            columnNumber: 21
        }, void 0) : null,
        classNames: {
            base: "max-h-[520px] overflow-scroll bg-transparent",
            table: "min-h-[400px]",
            wrapper: "w-full bg-foreground-50"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$YRZGWF2W$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_header_default__as__TableHeader$3e$__["TableHeader"], {
                columns: __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f28$profier$292f$profiers$2f5b$id$5d2f$components$2f$PortfolioArea$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columns"],
                children: (column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$TSPNSPCL$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_column_default__as__TableColumn$3e$__["TableColumn"], {
                        allowsSorting: column.sortable,
                        children: column.name
                    }, column.uid, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                        lineNumber: 99,
                        columnNumber: 21
                    }, this)
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                lineNumber: 97,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                isLoading: isLoading,
                items: list.items,
                loadingContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                    color: "white"
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                    lineNumber: 110,
                    columnNumber: 33
                }, void 0),
                emptyContent: "No data found",
                children: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                        className: "w-full",
                        children: (columnKey)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                children: renderCell(item, columnKey)
                            }, void 0, false, {
                                fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                                lineNumber: 116,
                                columnNumber: 29
                            }, this)
                    }, item.id, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                        lineNumber: 114,
                        columnNumber: 21
                    }, this)
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                lineNumber: 107,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, this);
}
_s(TransactionsTable, "45DCdtiDg1mWQf4HOtGk0iW5igs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$app$2f28$dashboard$292f28$profier$292f$profiers$2f5b$id$5d2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useProfiler"],
        __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$react$2d$stately$2f$data$2f$dist$2f$useAsyncList$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAsyncList"],
        __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$use$2d$infinite$2d$scroll$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInfiniteScroll"]
    ];
});
_c = TransactionsTable;
var _c;
__turbopack_refresh__.register(_c, "TransactionsTable");

})()),
"[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=%5Bproject%5D_unexpected_ea6469._.js.map
(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_(dashboard)_(profier)_profiers_[id]_2f3423._.js", {

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
            if (!profiler.portifolio) return {
                items: []
            };
            setIsLoading(true);
            const start = cursor ? parseInt(cursor, 10) : 0;
            const itemsPerPage = 10;
            const end = start + itemsPerPage;
            const items = profiler.portifolio.slice(start, end);
            const hasMore = end < profiler.portifolio.length;
            setHasMore(hasMore);
            setIsLoading(false);
            return {
                items: items,
                cursor: end.toString()
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
                    classNames: {
                        content: "text-foreground"
                    },
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
                        lineNumber: 58,
                        columnNumber: 29
                    }, void 0),
                    children: convertedToken.symbol
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                    lineNumber: 51,
                    columnNumber: 21
                }, this);
            case "price":
                const convertedPrice = cellValue;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "w-full overflow-clip",
                    children: convertedPrice.toString()
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                    lineNumber: 76,
                    columnNumber: 21
                }, this);
            case "holding":
                const convertedHolding = cellValue;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "w-full overflow-clip",
                    children: convertedHolding.toString()
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                    lineNumber: 82,
                    columnNumber: 21
                }, this);
            case "value":
                const convertedValue = cellValue;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "w-full overflow-clip",
                    children: convertedValue.toString()
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                    lineNumber: 88,
                    columnNumber: 21
                }, this);
            default:
                return null;
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
                lineNumber: 104,
                columnNumber: 25
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
            lineNumber: 103,
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
                        lineNumber: 116,
                        columnNumber: 21
                    }, this)
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                lineNumber: 114,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$FKPXBCGS$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_body_default__as__TableBody$3e$__["TableBody"], {
                isLoading: isLoading,
                items: list.items,
                loadingContent: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$spinner$2f$dist$2f$chunk$2d$TDOFO53L$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__spinner_default__as__Spinner$3e$__["Spinner"], {
                    color: "white"
                }, void 0, false, {
                    fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                    lineNumber: 127,
                    columnNumber: 33
                }, void 0),
                emptyContent: "No data found",
                children: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$CIL4Y7FA$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_row_default__as__TableRow$3e$__["TableRow"], {
                        className: "w-full hover:bg-foreground-100",
                        children: (columnKey)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$unexpected$2f$node_modules$2f40$nextui$2d$org$2f$table$2f$dist$2f$chunk$2d$F3UDT23P$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__table_cell_default__as__TableCell$3e$__["TableCell"], {
                                children: renderCell(item, columnKey)
                            }, void 0, false, {
                                fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                                lineNumber: 133,
                                columnNumber: 29
                            }, this)
                    }, item.id, false, {
                        fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                        lineNumber: 131,
                        columnNumber: 21
                    }, this)
            }, void 0, false, {
                fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
                lineNumber: 124,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/unexpected/app/(dashboard)/(profier)/profiers/[id]/components/PortfolioArea/PortfolioTable.tsx",
        lineNumber: 96,
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
}]);

//# sourceMappingURL=app_%28dashboard%29_%28profier%29_profiers_%5Bid%5D_2f3423._.js.map
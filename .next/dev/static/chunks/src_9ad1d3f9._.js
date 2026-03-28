(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://hguwpykhghwwigjagqrk.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhndXdweWtoZ2h3d2lnamFncXJrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjY1MTcyOSwiZXhwIjoyMDg4MjI3NzI5fQ.gznbM-EoqHbTm-84yp162N4y_1hfwusr0ZNCsKXvW84");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "48072be32b4c900a17e9a8d4d46e6cc6bdc9ea02f4b530b6a0124d1c1d51011c") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "48072be32b4c900a17e9a8d4d46e6cc6bdc9ea02f4b530b6a0124d1c1d51011c";
    }
    const [gpName, setGpName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Loading...");
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Header[useEffect()]": ()=>{
                const fetchGP = async function fetchGP() {
                    const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
                    if (!userData?.user) {
                        setGpName("Unknown User");
                        return;
                    }
                    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("Staff").select("title, given_name, family_name").eq("user_id", userData.user.id).single();
                    if (error || !data) {
                        setGpName("Unknown User");
                        return;
                    }
                    const gp = data;
                    const formatted = `${gp.title} ${gp.given_name[0]}. ${gp.family_name}`;
                    setGpName(formatted);
                };
                fetchGP();
            }
        })["Header[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            backgroundColor: "#33476D",
            color: "#FFFFFF",
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
        };
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: "28px",
                        fontWeight: 700,
                        marginBottom: "4px"
                    },
                    children: "Health New Zealand"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 70,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#1FC2D5"
                    },
                    children: "Te Whatu Ora"
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 74,
                    columnNumber: 34
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        t4 = {
            display: "flex",
            alignItems: "center",
            gap: "14px"
        };
        t5 = {
            fontSize: "18px",
            fontWeight: 400,
            color: "#AEB9D3"
        };
        $[3] = t2;
        $[4] = t3;
        $[5] = t4;
        $[6] = t5;
    } else {
        t2 = $[3];
        t3 = $[4];
        t4 = $[5];
        t5 = $[6];
    }
    let t6;
    if ($[7] !== gpName) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            style: t5,
            children: gpName
        }, void 0, false, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[7] = gpName;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                width: "58px",
                height: "58px",
                borderRadius: "50%",
                border: "4px solid #7E90BA",
                position: "relative"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        backgroundColor: "#7E90BA",
                        position: "absolute",
                        top: "10px",
                        left: "50%",
                        transform: "translateX(-50%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 115,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "28px",
                        height: "14px",
                        borderRadius: "14px 14px 10px 10px",
                        backgroundColor: "#7E90BA",
                        position: "absolute",
                        bottom: "10px",
                        left: "50%",
                        transform: "translateX(-50%)"
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 124,
                    columnNumber: 12
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 109,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== t6) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            style: t2,
            children: [
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t4,
                    children: [
                        t6,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/Header.tsx",
                    lineNumber: 140,
                    columnNumber: 33
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/Header.tsx",
            lineNumber: 140,
            columnNumber: 10
        }, this);
        $[10] = t6;
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    return t8;
}
_s(Header, "ZejtZthNteuVfew5HFP2blgX3NM=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/landing/recentAssessments.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentAssessments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function formatDate(dateString) {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) {
        return dateString;
    }
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
function getStatusColor(status) {
    switch(status.toUpperCase()){
        case "DRAFT":
            return "#C96A2B";
        case "FINALISED":
            return "#3E8E41";
        case "IN PROGRESS":
            return "#2F66C8";
        default:
            return "#15284C";
    }
}
function RecentAssessments() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "15ed4784153d5c65cbd2302055b25d732c971a9f8c8a3330ec81d7df787367b2") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "15ed4784153d5c65cbd2302055b25d732c971a9f8c8a3330ec81d7df787367b2";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "RecentAssessments[useEffect()]": ()=>{
                const fetchRecentAssessments = async function fetchRecentAssessments() {
                    setLoading(true);
                    setError(null);
                    const { data: assessmentData, error: assessmentError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("Assessment").select("assessment_id, assessment_date, status, current_version, PATIENTpatient_id").order("assessment_date", {
                        ascending: false
                    }).limit(50);
                    if (assessmentError) {
                        setError(`Assessment query failed: ${assessmentError.message}`);
                        setLoading(false);
                        return;
                    }
                    const assessments = assessmentData ?? [];
                    if (assessments.length === 0) {
                        setRows([]);
                        setLoading(false);
                        return;
                    }
                    const patientIds = [
                        ...new Set(assessments.map(_RecentAssessmentsUseEffectFetchRecentAssessmentsAssessmentsMap))
                    ];
                    const { data: patientData, error: patientError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("Patient").select("patient_id, nhi_number").in("patient_id", patientIds);
                    if (patientError) {
                        setError(`Patient query failed: ${patientError.message}`);
                        setLoading(false);
                        return;
                    }
                    const { data: patientNameData, error: patientNameError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("Patient Name").select("PATIENTpatient_id, given_name, family_name").in("PATIENTpatient_id", patientIds);
                    if (patientNameError) {
                        setError(`Patient Name query failed: ${patientNameError.message}`);
                        setLoading(false);
                        return;
                    }
                    const patients = patientData ?? [];
                    const patientNames = patientNameData ?? [];
                    const patientMap = new Map();
                    patients.forEach({
                        "RecentAssessments[useEffect() > fetchRecentAssessments > patients.forEach()]": (p)=>patientMap.set(p.patient_id, p)
                    }["RecentAssessments[useEffect() > fetchRecentAssessments > patients.forEach()]"]);
                    const nameMap = new Map();
                    patientNames.forEach({
                        "RecentAssessments[useEffect() > fetchRecentAssessments > patientNames.forEach()]": (n)=>nameMap.set(n.PATIENTpatient_id, n)
                    }["RecentAssessments[useEffect() > fetchRecentAssessments > patientNames.forEach()]"]);
                    const mappedRows = assessments.map({
                        "RecentAssessments[useEffect() > fetchRecentAssessments > assessments.map()]": (a_0)=>{
                            const patient = patientMap.get(a_0.PATIENTpatient_id);
                            const name = nameMap.get(a_0.PATIENTpatient_id);
                            return {
                                id: a_0.assessment_id,
                                patientId: a_0.PATIENTpatient_id,
                                nhiNumber: patient?.nhi_number ?? "N/A",
                                patientName: name ? `${name.given_name} ${name.family_name}` : `Patient #${a_0.PATIENTpatient_id}`,
                                date: formatDate(a_0.assessment_date),
                                versionNumber: `v${a_0.current_version}`,
                                status: a_0.status
                            };
                        }
                    }["RecentAssessments[useEffect() > fetchRecentAssessments > assessments.map()]"]);
                    setRows(mappedRows);
                    setLoading(false);
                };
                fetchRecentAssessments();
            }
        })["RecentAssessments[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            padding: "14px 12px",
            minHeight: "48px",
            fontWeight: 600,
            position: "sticky",
            top: 0,
            backgroundColor: "#FFFFFF",
            zIndex: 2,
            textAlign: "left",
            borderBottom: "1px solid #D6D6D6"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const headerCellStyle = t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== error || $[6] !== loading || $[7] !== router || $[8] !== rows) {
        const bodyCellStyle = {
            padding: "14px 12px",
            minHeight: "48px",
            verticalAlign: "middle"
        };
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t8 = {
                backgroundColor: "#FFFFFF",
                border: "1px solid #D6D6D6",
                padding: "18px",
                color: "#15284C",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                minHeight: 0
            };
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: "20px",
                    fontWeight: 600,
                    margin: "0 0 14px 0",
                    flexShrink: 0
                },
                children: "Recent Assessments"
            }, void 0, false, {
                fileName: "[project]/src/components/landing/recentAssessments.tsx",
                lineNumber: 198,
                columnNumber: 12
            }, this);
            t7 = {
                flex: 1,
                minHeight: 0,
                overflowY: "auto",
                overflowX: "auto"
            };
            t5 = {
                width: "100%",
                borderCollapse: "separate",
                borderSpacing: 0,
                fontSize: "14px",
                color: "#15284C"
            };
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            style: headerCellStyle,
                            children: "NHI Number"
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/recentAssessments.tsx",
                            lineNumber: 217,
                            columnNumber: 23
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            style: headerCellStyle,
                            children: "Patient Name"
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/recentAssessments.tsx",
                            lineNumber: 217,
                            columnNumber: 66
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            style: headerCellStyle,
                            children: "Date"
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/recentAssessments.tsx",
                            lineNumber: 217,
                            columnNumber: 111
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            style: headerCellStyle,
                            children: "Version Number"
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/recentAssessments.tsx",
                            lineNumber: 217,
                            columnNumber: 148
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                            style: headerCellStyle,
                            children: "Status"
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/recentAssessments.tsx",
                            lineNumber: 217,
                            columnNumber: 195
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/landing/recentAssessments.tsx",
                    lineNumber: 217,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/landing/recentAssessments.tsx",
                lineNumber: 217,
                columnNumber: 12
            }, this);
            $[15] = t5;
            $[16] = t6;
            $[17] = t7;
            $[18] = t8;
            $[19] = t9;
        } else {
            t5 = $[15];
            t6 = $[16];
            t7 = $[17];
            t8 = $[18];
            t9 = $[19];
        }
        t4 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 5,
                style: {
                    padding: "24px",
                    textAlign: "center",
                    color: "#6B7280"
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/components/landing/recentAssessments.tsx",
                lineNumber: 230,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/recentAssessments.tsx",
            lineNumber: 230,
            columnNumber: 20
        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 5,
                style: {
                    padding: "24px",
                    textAlign: "center",
                    color: "red"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/landing/recentAssessments.tsx",
                lineNumber: 234,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/recentAssessments.tsx",
            lineNumber: 234,
            columnNumber: 41
        }, this) : rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 5,
                style: {
                    padding: "24px",
                    textAlign: "center",
                    color: "#6B7280"
                },
                children: "No recent assessments to display."
            }, void 0, false, {
                fileName: "[project]/src/components/landing/recentAssessments.tsx",
                lineNumber: 238,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/recentAssessments.tsx",
            lineNumber: 238,
            columnNumber: 50
        }, this) : rows.map({
            "RecentAssessments[rows.map()]": (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    onClick: {
                        "RecentAssessments[rows.map() > <tr>.onClick]": ()=>router.push(`/history/${row.patientId}`)
                    }["RecentAssessments[rows.map() > <tr>.onClick]"],
                    onMouseEnter: _RecentAssessmentsRowsMapTrOnMouseEnter,
                    onMouseLeave: _RecentAssessmentsRowsMapTrOnMouseLeave,
                    style: {
                        cursor: "pointer"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: {
                                ...bodyCellStyle,
                                borderBottom: "1px solid #E5E7EB"
                            },
                            children: row.nhiNumber
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/recentAssessments.tsx",
                            lineNumber: 247,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: {
                                ...bodyCellStyle,
                                borderBottom: "1px solid #E5E7EB"
                            },
                            children: row.patientName
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/recentAssessments.tsx",
                            lineNumber: 250,
                            columnNumber: 32
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: {
                                ...bodyCellStyle,
                                borderBottom: "1px solid #E5E7EB"
                            },
                            children: row.date
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/recentAssessments.tsx",
                            lineNumber: 253,
                            columnNumber: 34
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: {
                                ...bodyCellStyle,
                                borderBottom: "1px solid #E5E7EB"
                            },
                            children: row.versionNumber
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/recentAssessments.tsx",
                            lineNumber: 256,
                            columnNumber: 27
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: {
                                ...bodyCellStyle,
                                borderBottom: "1px solid #E5E7EB",
                                color: getStatusColor(row.status)
                            },
                            children: row.status
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/recentAssessments.tsx",
                            lineNumber: 259,
                            columnNumber: 36
                        }, this)
                    ]
                }, row.id, true, {
                    fileName: "[project]/src/components/landing/recentAssessments.tsx",
                    lineNumber: 243,
                    columnNumber: 47
                }, this)
        }["RecentAssessments[rows.map()]"]);
        $[5] = error;
        $[6] = loading;
        $[7] = router;
        $[8] = rows;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
        t9 = $[14];
    }
    let t10;
    if ($[20] !== t4) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/landing/recentAssessments.tsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[20] = t4;
        $[21] = t10;
    } else {
        t10 = $[21];
    }
    let t11;
    if ($[22] !== t10 || $[23] !== t5 || $[24] !== t6) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            style: t5,
            children: [
                t6,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/recentAssessments.tsx",
            lineNumber: 293,
            columnNumber: 11
        }, this);
        $[22] = t10;
        $[23] = t5;
        $[24] = t6;
        $[25] = t11;
    } else {
        t11 = $[25];
    }
    let t12;
    if ($[26] !== t11 || $[27] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t7,
            children: t11
        }, void 0, false, {
            fileName: "[project]/src/components/landing/recentAssessments.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[26] = t11;
        $[27] = t7;
        $[28] = t12;
    } else {
        t12 = $[28];
    }
    let t13;
    if ($[29] !== t12 || $[30] !== t8 || $[31] !== t9) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t8,
            children: [
                t9,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/recentAssessments.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[29] = t12;
        $[30] = t8;
        $[31] = t9;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    return t13;
}
_s(RecentAssessments, "4tC+Quxr/AlKD6gLKe2Hl1dIvoI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RecentAssessments;
function _RecentAssessmentsRowsMapTrOnMouseLeave(e_0) {
    e_0.currentTarget.style.backgroundColor = "transparent";
}
function _RecentAssessmentsRowsMapTrOnMouseEnter(e) {
    e.currentTarget.style.backgroundColor = "#F8FAFC";
}
function _RecentAssessmentsUseEffectFetchRecentAssessmentsAssessmentsMap(a) {
    return a.PATIENTpatient_id;
}
var _c;
__turbopack_context__.k.register(_c, "RecentAssessments");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/landing/upcoming.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UpcomingReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function formatReviewDate(dateString) {
    const reviewDate = new Date(dateString);
    const today = new Date();
    const reviewOnly = new Date(reviewDate.getFullYear(), reviewDate.getMonth(), reviewDate.getDate());
    const todayOnly = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const isToday = reviewOnly.getTime() === todayOnly.getTime();
    if (isToday) {
        return {
            formatted: "Today",
            isToday: true
        };
    }
    const day = String(reviewDate.getDate()).padStart(2, "0");
    const month = String(reviewDate.getMonth() + 1).padStart(2, "0");
    const year = reviewDate.getFullYear();
    return {
        formatted: `${day}/${month}/${year}`,
        isToday: false
    };
}
function UpcomingReviews() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "a92f4da3ac8358bd43d560ba7cb60684b84de5b7fa4a44faf7ca73eb3ef86a5a") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a92f4da3ac8358bd43d560ba7cb60684b84de5b7fa4a44faf7ca73eb3ef86a5a";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "UpcomingReviews[useEffect()]": ()=>{
                const fetchUpcomingReviews = async function fetchUpcomingReviews() {
                    setLoading(true);
                    setError(null);
                    const today = new Date();
                    const yyyy = today.getFullYear();
                    const mm = String(today.getMonth() + 1).padStart(2, "0");
                    const dd = String(today.getDate()).padStart(2, "0");
                    const todayString = `${yyyy}-${mm}-${dd}`;
                    const { data: assessmentData, error: assessmentError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("Assessment").select("assessment_id, PATIENTpatient_id, review_date").gte("review_date", todayString).order("review_date", {
                        ascending: true
                    }).limit(50);
                    if (assessmentError) {
                        setError(`Upcoming reviews query failed: ${assessmentError.message}`);
                        setLoading(false);
                        return;
                    }
                    const assessments = assessmentData ?? [];
                    if (assessments.length === 0) {
                        setRows([]);
                        setLoading(false);
                        return;
                    }
                    const patientIds = [
                        ...new Set(assessments.map(_UpcomingReviewsUseEffectFetchUpcomingReviewsAssessmentsMap))
                    ];
                    const { data: patientData, error: patientError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("Patient").select("patient_id, nhi_number").in("patient_id", patientIds);
                    if (patientError) {
                        setError(`Patient query failed: ${patientError.message}`);
                        setLoading(false);
                        return;
                    }
                    const { data: patientNameData, error: patientNameError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("Patient Name").select("PATIENTpatient_id, given_name, family_name").in("PATIENTpatient_id", patientIds);
                    if (patientNameError) {
                        setError(`Patient Name query failed: ${patientNameError.message}`);
                        setLoading(false);
                        return;
                    }
                    const patients = patientData ?? [];
                    const patientNames = patientNameData ?? [];
                    const patientMap = new Map();
                    patients.forEach({
                        "UpcomingReviews[useEffect() > fetchUpcomingReviews > patients.forEach()]": (p)=>patientMap.set(p.patient_id, p)
                    }["UpcomingReviews[useEffect() > fetchUpcomingReviews > patients.forEach()]"]);
                    const nameMap = new Map();
                    patientNames.forEach({
                        "UpcomingReviews[useEffect() > fetchUpcomingReviews > patientNames.forEach()]": (n)=>nameMap.set(n.PATIENTpatient_id, n)
                    }["UpcomingReviews[useEffect() > fetchUpcomingReviews > patientNames.forEach()]"]);
                    const mappedRows = assessments.map({
                        "UpcomingReviews[useEffect() > fetchUpcomingReviews > assessments.map()]": (assessment)=>{
                            const patient = patientMap.get(assessment.PATIENTpatient_id);
                            const name = nameMap.get(assessment.PATIENTpatient_id);
                            const reviewDate = formatReviewDate(assessment.review_date);
                            return {
                                id: assessment.assessment_id,
                                patientId: assessment.PATIENTpatient_id,
                                nhi: patient?.nhi_number ?? "N/A",
                                patientName: name ? `${name.given_name} ${name.family_name}` : `Patient #${assessment.PATIENTpatient_id}`,
                                date: reviewDate.formatted,
                                isToday: reviewDate.isToday
                            };
                        }
                    }["UpcomingReviews[useEffect() > fetchUpcomingReviews > assessments.map()]"]);
                    setRows(mappedRows);
                    setLoading(false);
                };
                fetchUpcomingReviews();
            }
        })["UpcomingReviews[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            padding: "14px 12px",
            minHeight: "48px",
            fontWeight: 600,
            position: "sticky",
            top: 0,
            backgroundColor: "#FFFFFF",
            zIndex: 2,
            textAlign: "left",
            borderBottom: "1px solid #D6D6D6"
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const headerCellStyle = t3;
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            padding: "14px 12px",
            minHeight: "48px",
            verticalAlign: "middle",
            borderBottom: "1px solid #E5E7EB"
        };
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    const bodyCellStyle = t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            backgroundColor: "#FFFFFF",
            border: "1px solid #D6D6D6",
            padding: "18px",
            width: "100%",
            color: "#15284C",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            minHeight: 0
        };
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            style: {
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "14px",
                flexShrink: 0
            },
            children: "Upcoming Reviews"
        }, void 0, false, {
            fileName: "[project]/src/components/landing/upcoming.tsx",
            lineNumber: 205,
            columnNumber: 10
        }, this);
        t7 = {
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            overflowX: "auto"
        };
        t8 = {
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            fontSize: "14px"
        };
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        style: headerCellStyle,
                        children: "NHI"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/upcoming.tsx",
                        lineNumber: 223,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        style: headerCellStyle,
                        children: "Patient Name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/upcoming.tsx",
                        lineNumber: 223,
                        columnNumber: 57
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        style: headerCellStyle,
                        children: "Date"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/upcoming.tsx",
                        lineNumber: 223,
                        columnNumber: 102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing/upcoming.tsx",
                lineNumber: 223,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/upcoming.tsx",
            lineNumber: 223,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
        $[8] = t7;
        $[9] = t8;
        $[10] = t9;
    } else {
        t5 = $[6];
        t6 = $[7];
        t7 = $[8];
        t8 = $[9];
        t9 = $[10];
    }
    let t10;
    if ($[11] !== error || $[12] !== loading || $[13] !== router || $[14] !== rows) {
        t10 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 3,
                style: {
                    padding: "24px",
                    textAlign: "center",
                    color: "#6B7280"
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/components/landing/upcoming.tsx",
                lineNumber: 238,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/upcoming.tsx",
            lineNumber: 238,
            columnNumber: 21
        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 3,
                style: {
                    padding: "24px",
                    textAlign: "center",
                    color: "red"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/landing/upcoming.tsx",
                lineNumber: 242,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/upcoming.tsx",
            lineNumber: 242,
            columnNumber: 41
        }, this) : rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 3,
                style: {
                    padding: "24px",
                    textAlign: "center",
                    color: "#6B7280"
                },
                children: "No upcoming reviews"
            }, void 0, false, {
                fileName: "[project]/src/components/landing/upcoming.tsx",
                lineNumber: 246,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/upcoming.tsx",
            lineNumber: 246,
            columnNumber: 50
        }, this) : rows.map({
            "UpcomingReviews[rows.map()]": (row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    onClick: {
                        "UpcomingReviews[rows.map() > <tr>.onClick]": ()=>router.push(`/history/${row.patientId}`)
                    }["UpcomingReviews[rows.map() > <tr>.onClick]"],
                    onMouseEnter: _UpcomingReviewsRowsMapTrOnMouseEnter,
                    onMouseLeave: _UpcomingReviewsRowsMapTrOnMouseLeave,
                    style: {
                        cursor: "pointer"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: bodyCellStyle,
                            children: row.nhi
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/upcoming.tsx",
                            lineNumber: 255,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: bodyCellStyle,
                            children: row.patientName
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/upcoming.tsx",
                            lineNumber: 255,
                            columnNumber: 50
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: {
                                ...bodyCellStyle,
                                color: row.isToday ? "#C0392B" : "#15284C"
                            },
                            children: row.date
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/upcoming.tsx",
                            lineNumber: 255,
                            columnNumber: 98
                        }, this)
                    ]
                }, row.id, true, {
                    fileName: "[project]/src/components/landing/upcoming.tsx",
                    lineNumber: 251,
                    columnNumber: 45
                }, this)
        }["UpcomingReviews[rows.map()]"]);
        $[11] = error;
        $[12] = loading;
        $[13] = router;
        $[14] = rows;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t5,
            children: [
                t6,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t7,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        style: t8,
                        children: [
                            t9,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: t10
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/upcoming.tsx",
                                lineNumber: 270,
                                columnNumber: 69
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing/upcoming.tsx",
                        lineNumber: 270,
                        columnNumber: 47
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/landing/upcoming.tsx",
                    lineNumber: 270,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/upcoming.tsx",
            lineNumber: 270,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t11;
    } else {
        t11 = $[17];
    }
    return t11;
}
_s(UpcomingReviews, "4tC+Quxr/AlKD6gLKe2Hl1dIvoI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UpcomingReviews;
function _UpcomingReviewsRowsMapTrOnMouseLeave(e_0) {
    e_0.currentTarget.style.backgroundColor = "transparent";
}
function _UpcomingReviewsRowsMapTrOnMouseEnter(e) {
    e.currentTarget.style.backgroundColor = "#F8FAFC";
}
function _UpcomingReviewsUseEffectFetchUpcomingReviewsAssessmentsMap(a) {
    return a.PATIENTpatient_id;
}
var _c;
__turbopack_context__.k.register(_c, "UpcomingReviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/landing/drafts.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Drafts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabaseClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function formatDate(iso) {
    return new Intl.DateTimeFormat("en-NZ").format(new Date(iso));
}
function normalizeStatus(status) {
    const upper = status.toUpperCase();
    if (upper === "OPEN") return "OPEN";
    if (upper === "FINALIZED" || upper === "FINALISED") return "FINALIZED";
    return "DRAFT";
}
function labelStatus(status) {
    switch(status){
        case "OPEN":
            return "Open";
        case "FINALIZED":
            return "Finalized";
        case "DRAFT":
        default:
            return "Draft";
    }
}
function Drafts() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(22);
    if ($[0] !== "a87f6af7d3a4e8f95fe4973d8a5967681c4dfb8f41eb5bcacbcd487b53ecc047") {
        for(let $i = 0; $i < 22; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a87f6af7d3a4e8f95fe4973d8a5967681c4dfb8f41eb5bcacbcd487b53ecc047";
    }
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [drafts, setDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Drafts[useEffect()]": ()=>{
                const fetchDrafts = async function fetchDrafts() {
                    setLoading(true);
                    setError(null);
                    const { data: draftData, error: draftError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("Draft Assessment").select("draft_id, ASSESSMENTassessment_id, last_saved_at, is_current_draft").eq("is_current_draft", "true");
                    if (draftError) {
                        setError(`Draft query failed: ${draftError.message}`);
                        setLoading(false);
                        return;
                    }
                    const draftRows = draftData ?? [];
                    if (draftRows.length === 0) {
                        setDrafts([]);
                        setLoading(false);
                        return;
                    }
                    const assessmentIds = [
                        ...new Set(draftRows.map(_DraftsUseEffectFetchDraftsDraftRowsMap))
                    ];
                    const { data: assessmentData, error: assessmentError } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("Assessment").select("assessment_id, PATIENTpatient_id, current_version, status").in("assessment_id", assessmentIds);
                    if (assessmentError) {
                        setError(`Assessment query failed: ${assessmentError.message}`);
                        setLoading(false);
                        return;
                    }
                    const assessments = assessmentData ?? [];
                    const patientIds = [
                        ...new Set(assessments.map(_DraftsUseEffectFetchDraftsAssessmentsMap))
                    ];
                    const { data: patientData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("Patient").select("patient_id, nhi_number").in("patient_id", patientIds);
                    const { data: patientNameData } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["supabase"].from("Patient Name").select("PATIENTpatient_id, given_name, family_name").in("PATIENTpatient_id", patientIds);
                    const patientMap = new Map();
                    (patientData ?? []).forEach({
                        "Drafts[useEffect() > fetchDrafts > (anonymous)()]": (p)=>{
                            patientMap.set(p.patient_id, p);
                        }
                    }["Drafts[useEffect() > fetchDrafts > (anonymous)()]"]);
                    const nameMap = new Map();
                    (patientNameData ?? []).forEach({
                        "Drafts[useEffect() > fetchDrafts > (anonymous)()]": (n)=>{
                            nameMap.set(n.PATIENTpatient_id, n);
                        }
                    }["Drafts[useEffect() > fetchDrafts > (anonymous)()]"]);
                    const mappedDrafts = draftRows.map({
                        "Drafts[useEffect() > fetchDrafts > draftRows.map()]": (draft_0)=>{
                            const assessment_0 = assessments.find({
                                "Drafts[useEffect() > fetchDrafts > draftRows.map() > assessments.find()]": (a)=>a.assessment_id === draft_0.ASSESSMENTassessment_id
                            }["Drafts[useEffect() > fetchDrafts > draftRows.map() > assessments.find()]"]);
                            if (!assessment_0) {
                                return null;
                            }
                            const patient = patientMap.get(assessment_0.PATIENTpatient_id);
                            const name = nameMap.get(assessment_0.PATIENTpatient_id);
                            return {
                                id: String(draft_0.draft_id),
                                assessmentId: assessment_0.assessment_id,
                                patientId: assessment_0.PATIENTpatient_id,
                                nhi: patient?.nhi_number ?? "N/A",
                                patientName: name ? `${name.given_name} ${name.family_name}` : `Patient #${assessment_0.PATIENTpatient_id}`,
                                dateLastEditedISO: draft_0.last_saved_at ?? new Date().toISOString(),
                                versionNumber: assessment_0.current_version ?? 1,
                                status: normalizeStatus(assessment_0.status ?? "DRAFT")
                            };
                        }
                    }["Drafts[useEffect() > fetchDrafts > draftRows.map()]"]).filter(_DraftsUseEffectFetchDraftsAnonymous);
                    setDrafts(mappedDrafts);
                    setLoading(false);
                };
                fetchDrafts();
            }
        })["Drafts[useEffect()]"];
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] !== drafts) {
        t3 = [
            ...drafts
        ].sort(_DraftsAnonymous);
        $[4] = drafts;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const sortedDrafts = t3;
    let t4;
    if ($[6] !== router) {
        t4 = function openDraft(patientId) {
            router.push(`/history/${patientId}`);
        };
        $[6] = router;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const openDraft = t4;
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            padding: "14px 12px",
            minHeight: "48px",
            textAlign: "left",
            fontWeight: 600,
            position: "sticky",
            top: 0,
            backgroundColor: "#FFFFFF",
            zIndex: 2,
            borderBottom: "1px solid #D6D6D6"
        };
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const headerCellStyle = t5;
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            padding: "14px 12px",
            minHeight: "48px",
            verticalAlign: "middle",
            borderBottom: "1px solid #E5E7EB"
        };
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const bodyCellStyle = t6;
    let t10;
    let t11;
    let t7;
    let t8;
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = {
            backgroundColor: "#FFFFFF",
            border: "1px solid #D6D6D6",
            padding: "18px",
            width: "100%",
            color: "#15284C",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            minHeight: 0
        };
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            style: {
                fontSize: "20px",
                fontWeight: 600,
                marginBottom: "14px",
                flexShrink: 0
            },
            children: "Pending Drafts"
        }, void 0, false, {
            fileName: "[project]/src/components/landing/drafts.tsx",
            lineNumber: 236,
            columnNumber: 10
        }, this);
        t9 = {
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            overflowX: "auto"
        };
        t10 = {
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            fontSize: "14px"
        };
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        style: headerCellStyle,
                        children: "NHI"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/drafts.tsx",
                        lineNumber: 254,
                        columnNumber: 22
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        style: headerCellStyle,
                        children: "Patient Name"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/drafts.tsx",
                        lineNumber: 254,
                        columnNumber: 58
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        style: headerCellStyle,
                        children: "Date"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/drafts.tsx",
                        lineNumber: 254,
                        columnNumber: 103
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        style: headerCellStyle,
                        children: "Version"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/drafts.tsx",
                        lineNumber: 254,
                        columnNumber: 140
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        style: headerCellStyle,
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/src/components/landing/drafts.tsx",
                        lineNumber: 254,
                        columnNumber: 180
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/landing/drafts.tsx",
                lineNumber: 254,
                columnNumber: 18
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/drafts.tsx",
            lineNumber: 254,
            columnNumber: 11
        }, this);
        $[10] = t10;
        $[11] = t11;
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        t10 = $[10];
        t11 = $[11];
        t7 = $[12];
        t8 = $[13];
        t9 = $[14];
    }
    let t12;
    if ($[15] !== error || $[16] !== loading || $[17] !== openDraft || $[18] !== sortedDrafts) {
        t12 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 5,
                style: {
                    padding: "24px",
                    textAlign: "center"
                },
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/components/landing/drafts.tsx",
                lineNumber: 269,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/drafts.tsx",
            lineNumber: 269,
            columnNumber: 21
        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 5,
                style: {
                    padding: "24px",
                    textAlign: "center",
                    color: "red"
                },
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/landing/drafts.tsx",
                lineNumber: 272,
                columnNumber: 45
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/drafts.tsx",
            lineNumber: 272,
            columnNumber: 41
        }, this) : sortedDrafts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                colSpan: 5,
                style: {
                    padding: "24px",
                    textAlign: "center"
                },
                children: "No drafts yet"
            }, void 0, false, {
                fileName: "[project]/src/components/landing/drafts.tsx",
                lineNumber: 276,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/landing/drafts.tsx",
            lineNumber: 276,
            columnNumber: 58
        }, this) : sortedDrafts.map({
            "Drafts[sortedDrafts.map()]": (draft_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    onClick: {
                        "Drafts[sortedDrafts.map() > <tr>.onClick]": ()=>openDraft(draft_2.patientId)
                    }["Drafts[sortedDrafts.map() > <tr>.onClick]"],
                    onMouseEnter: _DraftsSortedDraftsMapTrOnMouseEnter,
                    onMouseLeave: _DraftsSortedDraftsMapTrOnMouseLeave,
                    style: {
                        cursor: "pointer"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: bodyCellStyle,
                            children: draft_2.nhi
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/drafts.tsx",
                            lineNumber: 284,
                            columnNumber: 10
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: bodyCellStyle,
                            children: draft_2.patientName
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/drafts.tsx",
                            lineNumber: 284,
                            columnNumber: 54
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: bodyCellStyle,
                            children: formatDate(draft_2.dateLastEditedISO)
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/drafts.tsx",
                            lineNumber: 284,
                            columnNumber: 106
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: bodyCellStyle,
                            children: [
                                "v",
                                draft_2.versionNumber
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/landing/drafts.tsx",
                            lineNumber: 284,
                            columnNumber: 176
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            style: bodyCellStyle,
                            children: labelStatus(draft_2.status)
                        }, void 0, false, {
                            fileName: "[project]/src/components/landing/drafts.tsx",
                            lineNumber: 284,
                            columnNumber: 231
                        }, this)
                    ]
                }, draft_2.id, true, {
                    fileName: "[project]/src/components/landing/drafts.tsx",
                    lineNumber: 280,
                    columnNumber: 48
                }, this)
        }["Drafts[sortedDrafts.map()]"]);
        $[15] = error;
        $[16] = loading;
        $[17] = openDraft;
        $[18] = sortedDrafts;
        $[19] = t12;
    } else {
        t12 = $[19];
    }
    let t13;
    if ($[20] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: t7,
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: t9,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        style: t10,
                        children: [
                            t11,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: t12
                            }, void 0, false, {
                                fileName: "[project]/src/components/landing/drafts.tsx",
                                lineNumber: 296,
                                columnNumber: 71
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/landing/drafts.tsx",
                        lineNumber: 296,
                        columnNumber: 47
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/landing/drafts.tsx",
                    lineNumber: 296,
                    columnNumber: 31
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/landing/drafts.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[20] = t12;
        $[21] = t13;
    } else {
        t13 = $[21];
    }
    return t13;
}
_s(Drafts, "0Lt1Ya575xL+9grTaCCiUYKcCCk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Drafts;
function _DraftsSortedDraftsMapTrOnMouseLeave(e_0) {
    e_0.currentTarget.style.backgroundColor = "transparent";
}
function _DraftsSortedDraftsMapTrOnMouseEnter(e) {
    e.currentTarget.style.backgroundColor = "#F8FAFC";
}
function _DraftsAnonymous(a_0, b) {
    return new Date(b.dateLastEditedISO).getTime() - new Date(a_0.dateLastEditedISO).getTime();
}
function _DraftsUseEffectFetchDraftsAnonymous(draft_1) {
    return draft_1 !== null;
}
function _DraftsUseEffectFetchDraftsAssessmentsMap(assessment) {
    return assessment.PATIENTpatient_id;
}
function _DraftsUseEffectFetchDraftsDraftRowsMap(draft) {
    return draft.ASSESSMENTassessment_id;
}
var _c;
__turbopack_context__.k.register(_c, "Drafts");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9ad1d3f9._.js.map
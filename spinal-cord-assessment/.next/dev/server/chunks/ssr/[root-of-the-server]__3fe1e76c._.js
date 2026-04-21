module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/spinal-cord-assessment/src/lib/supabaseClient.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "supabase",
    ()=>supabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/@supabase/supabase-js/dist/index.mjs [app-ssr] (ecmascript) <locals>");
;
const supabaseUrl = ("TURBOPACK compile-time value", "https://hguwpykhghwwigjagqrk.supabase.co");
const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhndXdweWtoZ2h3d2lnamFncXJrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjY1MTcyOSwiZXhwIjoyMDg4MjI3NzI5fQ.gznbM-EoqHbTm-84yp162N4y_1hfwusr0ZNCsKXvW84");
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey);
}),
"[project]/spinal-cord-assessment/src/components/layout/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/src/lib/supabaseClient.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function Header() {
    const [gpName, setGpName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Loading...");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchGP() {
            const { data: userData } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
            if (!userData?.user) {
                setGpName("Unknown User");
                return;
            }
            // Adjust table/column names if needed
            const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("Staff") // or GP table
            .select("title, given_name, family_name").eq("user_id", userData.user.id).single();
            if (error || !data) {
                setGpName("Unknown User");
                return;
            }
            const gp = data;
            const formatted = `${gp.title} ${gp.given_name[0]}. ${gp.family_name}`;
            setGpName(formatted);
        }
        fetchGP();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        style: {
            backgroundColor: "#33476D",
            color: "#FFFFFF",
            padding: "20px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "28px",
                            fontWeight: 700,
                            marginBottom: "4px"
                        },
                        children: "Health New Zealand"
                    }, void 0, false, {
                        fileName: "[project]/spinal-cord-assessment/src/components/layout/Header.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#1FC2D5"
                        },
                        children: "Te Whatu Ora"
                    }, void 0, false, {
                        fileName: "[project]/spinal-cord-assessment/src/components/layout/Header.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spinal-cord-assessment/src/components/layout/Header.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: "flex",
                    alignItems: "center",
                    gap: "14px"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: "18px",
                            fontWeight: 400,
                            color: "#AEB9D3"
                        },
                        children: gpName
                    }, void 0, false, {
                        fileName: "[project]/spinal-cord-assessment/src/components/layout/Header.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: "58px",
                            height: "58px",
                            borderRadius: "50%",
                            border: "4px solid #7E90BA",
                            position: "relative"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                fileName: "[project]/spinal-cord-assessment/src/components/layout/Header.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                fileName: "[project]/spinal-cord-assessment/src/components/layout/Header.tsx",
                                lineNumber: 120,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/spinal-cord-assessment/src/components/layout/Header.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/spinal-cord-assessment/src/components/layout/Header.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/spinal-cord-assessment/src/components/layout/Header.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RecentAssessments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/src/lib/supabaseClient.ts [app-ssr] (ecmascript)");
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchRecentAssessments() {
            setLoading(true);
            setError(null);
            const { data: assessmentData, error: assessmentError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("Assessment").select("assessment_id, assessment_date, status, current_version, PATIENTpatient_id").order("assessment_date", {
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
                ...new Set(assessments.map((a)=>a.PATIENTpatient_id))
            ];
            const { data: patientData, error: patientError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("Patient").select("patient_id, nhi_number").in("patient_id", patientIds);
            if (patientError) {
                setError(`Patient query failed: ${patientError.message}`);
                setLoading(false);
                return;
            }
            const { data: patientNameData, error: patientNameError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("Patient Name").select("PATIENTpatient_id, given_name, family_name").in("PATIENTpatient_id", patientIds);
            if (patientNameError) {
                setError(`Patient Name query failed: ${patientNameError.message}`);
                setLoading(false);
                return;
            }
            const patients = patientData ?? [];
            const patientNames = patientNameData ?? [];
            const patientMap = new Map();
            patients.forEach((p)=>patientMap.set(p.patient_id, p));
            const nameMap = new Map();
            patientNames.forEach((n)=>nameMap.set(n.PATIENTpatient_id, n));
            const mappedRows = assessments.map((a)=>{
                const patient = patientMap.get(a.PATIENTpatient_id);
                const name = nameMap.get(a.PATIENTpatient_id);
                return {
                    id: a.assessment_id,
                    patientId: a.PATIENTpatient_id,
                    nhiNumber: patient?.nhi_number ?? "N/A",
                    patientName: name ? `${name.given_name} ${name.family_name}` : `Patient #${a.PATIENTpatient_id}`,
                    date: formatDate(a.assessment_date),
                    versionNumber: `v${a.current_version}`,
                    status: a.status
                };
            });
            setRows(mappedRows);
            setLoading(false);
        }
        fetchRecentAssessments();
    }, []);
    const headerCellStyle = {
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
    const bodyCellStyle = {
        padding: "14px 12px",
        minHeight: "48px",
        verticalAlign: "middle"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: "#FFFFFF",
            border: "1px solid #D6D6D6",
            padding: "18px",
            color: "#15284C",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            minHeight: 0
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: "20px",
                    fontWeight: 600,
                    margin: "0 0 14px 0",
                    flexShrink: 0
                },
                children: "Recent Assessments"
            }, void 0, false, {
                fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                lineNumber: 186,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    overflowX: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "separate",
                        borderSpacing: 0,
                        fontSize: "14px",
                        color: "#15284C"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "NHI Number"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                        lineNumber: 216,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "Patient Name"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "Version Number"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                        lineNumber: 220,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                lineNumber: 215,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    style: {
                                        padding: "24px",
                                        textAlign: "center",
                                        color: "#6B7280"
                                    },
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                    lineNumber: 227,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                lineNumber: 226,
                                columnNumber: 15
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    style: {
                                        padding: "24px",
                                        textAlign: "center",
                                        color: "red"
                                    },
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                lineNumber: 232,
                                columnNumber: 15
                            }, this) : rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    style: {
                                        padding: "24px",
                                        textAlign: "center",
                                        color: "#6B7280"
                                    },
                                    children: "No recent assessments to display."
                                }, void 0, false, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                    lineNumber: 239,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                lineNumber: 238,
                                columnNumber: 15
                            }, this) : rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    onClick: ()=>router.push(`/history/${row.patientId}`),
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.backgroundColor = "#F8FAFC";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.backgroundColor = "transparent";
                                    },
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                ...bodyCellStyle,
                                                borderBottom: "1px solid #E5E7EB"
                                            },
                                            children: row.nhiNumber
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                ...bodyCellStyle,
                                                borderBottom: "1px solid #E5E7EB"
                                            },
                                            children: row.patientName
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                            lineNumber: 259,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                ...bodyCellStyle,
                                                borderBottom: "1px solid #E5E7EB"
                                            },
                                            children: row.date
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                            lineNumber: 260,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                ...bodyCellStyle,
                                                borderBottom: "1px solid #E5E7EB"
                                            },
                                            children: row.versionNumber
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                            lineNumber: 261,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                ...bodyCellStyle,
                                                borderBottom: "1px solid #E5E7EB",
                                                color: getStatusColor(row.status)
                                            },
                                            children: row.status
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                            lineNumber: 262,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, row.id, true, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                                    lineNumber: 245,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                            lineNumber: 224,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                    lineNumber: 205,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/spinal-cord-assessment/src/components/landing/recentAssessments.tsx",
        lineNumber: 173,
        columnNumber: 5
    }, this);
}
}),
"[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UpcomingReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/src/lib/supabaseClient.ts [app-ssr] (ecmascript)");
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [rows, setRows] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchUpcomingReviews() {
            setLoading(true);
            setError(null);
            const today = new Date();
            const yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, "0");
            const dd = String(today.getDate()).padStart(2, "0");
            const todayString = `${yyyy}-${mm}-${dd}`;
            const { data: assessmentData, error: assessmentError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("Assessment").select("assessment_id, PATIENTpatient_id, review_date").gte("review_date", todayString).order("review_date", {
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
                ...new Set(assessments.map((a)=>a.PATIENTpatient_id))
            ];
            const { data: patientData, error: patientError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("Patient").select("patient_id, nhi_number").in("patient_id", patientIds);
            if (patientError) {
                setError(`Patient query failed: ${patientError.message}`);
                setLoading(false);
                return;
            }
            const { data: patientNameData, error: patientNameError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("Patient Name").select("PATIENTpatient_id, given_name, family_name").in("PATIENTpatient_id", patientIds);
            if (patientNameError) {
                setError(`Patient Name query failed: ${patientNameError.message}`);
                setLoading(false);
                return;
            }
            const patients = patientData ?? [];
            const patientNames = patientNameData ?? [];
            const patientMap = new Map();
            patients.forEach((p)=>patientMap.set(p.patient_id, p));
            const nameMap = new Map();
            patientNames.forEach((n)=>nameMap.set(n.PATIENTpatient_id, n));
            const mappedRows = assessments.map((assessment)=>{
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
            });
            setRows(mappedRows);
            setLoading(false);
        }
        fetchUpcomingReviews();
    }, []);
    const headerCellStyle = {
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
    const bodyCellStyle = {
        padding: "14px 12px",
        minHeight: "48px",
        verticalAlign: "middle",
        borderBottom: "1px solid #E5E7EB"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
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
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "14px",
                    flexShrink: 0
                },
                children: "Upcoming Reviews"
            }, void 0, false, {
                fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    overflowX: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "separate",
                        borderSpacing: 0,
                        fontSize: "14px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "NHI"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                        lineNumber: 224,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "Patient Name"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                        lineNumber: 225,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                        lineNumber: 226,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                lineNumber: 223,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 3,
                                    style: {
                                        padding: "24px",
                                        textAlign: "center",
                                        color: "#6B7280"
                                    },
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                    lineNumber: 233,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                lineNumber: 232,
                                columnNumber: 15
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 3,
                                    style: {
                                        padding: "24px",
                                        textAlign: "center",
                                        color: "red"
                                    },
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                    lineNumber: 246,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                lineNumber: 245,
                                columnNumber: 15
                            }, this) : rows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 3,
                                    style: {
                                        padding: "24px",
                                        textAlign: "center",
                                        color: "#6B7280"
                                    },
                                    children: "No upcoming reviews"
                                }, void 0, false, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                lineNumber: 258,
                                columnNumber: 15
                            }, this) : rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    onClick: ()=>router.push(`/history/${row.patientId}`),
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.backgroundColor = "#F8FAFC";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.backgroundColor = "transparent";
                                    },
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: bodyCellStyle,
                                            children: row.nhi
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: bodyCellStyle,
                                            children: row.patientName
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                            lineNumber: 286,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: {
                                                ...bodyCellStyle,
                                                color: row.isToday ? "#C0392B" : "#15284C"
                                            },
                                            children: row.date
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, row.id, true, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                                    lineNumber: 272,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                    lineNumber: 214,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/spinal-cord-assessment/src/components/landing/upcoming.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
}),
"[project]/spinal-cord-assessment/src/components/landing/drafts.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Drafts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/spinal-cord-assessment/src/lib/supabaseClient.ts [app-ssr] (ecmascript)");
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
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [drafts, setDrafts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchDrafts() {
            setLoading(true);
            setError(null);
            const { data: draftData, error: draftError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("Draft Assessment").select("draft_id, ASSESSMENTassessment_id, last_saved_at, is_current_draft").eq("is_current_draft", "true");
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
                ...new Set(draftRows.map((draft)=>draft.ASSESSMENTassessment_id))
            ];
            const { data: assessmentData, error: assessmentError } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("Assessment").select("assessment_id, PATIENTpatient_id, current_version, status").in("assessment_id", assessmentIds);
            if (assessmentError) {
                setError(`Assessment query failed: ${assessmentError.message}`);
                setLoading(false);
                return;
            }
            const assessments = assessmentData ?? [];
            const patientIds = [
                ...new Set(assessments.map((assessment)=>assessment.PATIENTpatient_id))
            ];
            const { data: patientData } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("Patient").select("patient_id, nhi_number").in("patient_id", patientIds);
            const { data: patientNameData } = await __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$src$2f$lib$2f$supabaseClient$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["supabase"].from("Patient Name").select("PATIENTpatient_id, given_name, family_name").in("PATIENTpatient_id", patientIds);
            const patientMap = new Map();
            (patientData ?? []).forEach((p)=>{
                patientMap.set(p.patient_id, p);
            });
            const nameMap = new Map();
            (patientNameData ?? []).forEach((n)=>{
                nameMap.set(n.PATIENTpatient_id, n);
            });
            const mappedDrafts = draftRows.map((draft)=>{
                const assessment = assessments.find((a)=>a.assessment_id === draft.ASSESSMENTassessment_id);
                if (!assessment) return null;
                const patient = patientMap.get(assessment.PATIENTpatient_id);
                const name = nameMap.get(assessment.PATIENTpatient_id);
                return {
                    id: String(draft.draft_id),
                    assessmentId: assessment.assessment_id,
                    patientId: assessment.PATIENTpatient_id,
                    nhi: patient?.nhi_number ?? "N/A",
                    patientName: name ? `${name.given_name} ${name.family_name}` : `Patient #${assessment.PATIENTpatient_id}`,
                    dateLastEditedISO: draft.last_saved_at ?? new Date().toISOString(),
                    versionNumber: assessment.current_version ?? 1,
                    status: normalizeStatus(assessment.status ?? "DRAFT")
                };
            }).filter((draft)=>draft !== null);
            setDrafts(mappedDrafts);
            setLoading(false);
        }
        fetchDrafts();
    }, []);
    const sortedDrafts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return [
            ...drafts
        ].sort((a, b)=>new Date(b.dateLastEditedISO).getTime() - new Date(a.dateLastEditedISO).getTime());
    }, [
        drafts
    ]);
    function openDraft(patientId) {
        router.push(`/history/${patientId}`);
    }
    const headerCellStyle = {
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
    const bodyCellStyle = {
        padding: "14px 12px",
        minHeight: "48px",
        verticalAlign: "middle",
        borderBottom: "1px solid #E5E7EB"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
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
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: "20px",
                    fontWeight: 600,
                    marginBottom: "14px",
                    flexShrink: 0
                },
                children: "Pending Drafts"
            }, void 0, false, {
                fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    overflowX: "auto"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    style: {
                        width: "100%",
                        borderCollapse: "separate",
                        borderSpacing: 0,
                        fontSize: "14px"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "NHI"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                        lineNumber: 242,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "Patient Name"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                        lineNumber: 243,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "Version"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        style: headerCellStyle,
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    style: {
                                        padding: "24px",
                                        textAlign: "center"
                                    },
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                    lineNumber: 253,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                lineNumber: 252,
                                columnNumber: 15
                            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    style: {
                                        padding: "24px",
                                        textAlign: "center",
                                        color: "red"
                                    },
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                    lineNumber: 259,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                lineNumber: 258,
                                columnNumber: 15
                            }, this) : sortedDrafts.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    style: {
                                        padding: "24px",
                                        textAlign: "center"
                                    },
                                    children: "No drafts yet"
                                }, void 0, false, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                    lineNumber: 265,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this) : sortedDrafts.map((draft)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    onClick: ()=>openDraft(draft.patientId),
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.backgroundColor = "#F8FAFC";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.backgroundColor = "transparent";
                                    },
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: bodyCellStyle,
                                            children: draft.nhi
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                            lineNumber: 284,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: bodyCellStyle,
                                            children: draft.patientName
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: bodyCellStyle,
                                            children: formatDate(draft.dateLastEditedISO)
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                            lineNumber: 286,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: bodyCellStyle,
                                            children: [
                                                "v",
                                                draft.versionNumber
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                            lineNumber: 287,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$spinal$2d$cord$2d$assessment$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            style: bodyCellStyle,
                                            children: labelStatus(draft.status)
                                        }, void 0, false, {
                                            fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                            lineNumber: 288,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, draft.id, true, {
                                    fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                                    lineNumber: 271,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                            lineNumber: 250,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                    lineNumber: 232,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/spinal-cord-assessment/src/components/landing/drafts.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3fe1e76c._.js.map
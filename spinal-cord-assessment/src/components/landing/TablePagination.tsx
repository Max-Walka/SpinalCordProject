"use client";

type TablePaginationProps = {
  page: number;
  totalCount: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};

export default function TablePagination({
  page,
  totalCount,
  pageSize,
  onPageChange,
}: TablePaginationProps) {
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  if (totalCount <= 0) return null;

  return (
    <div
      style={{
        flexShrink: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px 16px",
        flexWrap: "nowrap",
        minHeight: "72px",
        paddingTop: "14px",
        marginTop: "10px",
        borderTop: "1px solid #E5E7EB",
      }}
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onPageChange(Math.max(1, page - 1))}
        style={{
          height: "38px",
          padding: "0 14px",
          fontSize: "14px",
          fontWeight: 500,
          fontFamily: "inherit",
          color: page <= 1 ? "#9CA3AF" : "#15284C",
          backgroundColor: "#FFFFFF",
          border: "1px solid #D6D6D6",
          borderRadius: "6px",
          cursor: page <= 1 ? "not-allowed" : "pointer",
          whiteSpace: "nowrap",
        }}
      >
        Previous page
      </button>
      <span style={{ fontSize: "14px", color: "#6B7280", whiteSpace: "nowrap" }}>
        Page {page} of {totalPages} ({(page - 1) * pageSize + 1}-
        {Math.min(page * pageSize, totalCount)} of {totalCount})
      </span>
      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onPageChange(page + 1)}
        style={{
          height: "38px",
          padding: "0 14px",
          fontSize: "14px",
          fontWeight: 500,
          fontFamily: "inherit",
          color: page >= totalPages ? "#9CA3AF" : "#15284C",
          backgroundColor: "#FFFFFF",
          border: "1px solid #D6D6D6",
          borderRadius: "6px",
          cursor: page >= totalPages ? "not-allowed" : "pointer",
          whiteSpace: "nowrap",
        }}
      >
        Next page
      </button>
    </div>
  );
}

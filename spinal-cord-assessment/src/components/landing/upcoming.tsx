"use client";

type Review = {
  nhi: string;
  name: string;
  date: string;
  isToday?: boolean;
};

const demoReviews: Review[] = [
  {
    nhi: "BHD21SE",
    name: "Michael Turner",
    date: "Today",
    isToday: true,
  },
  {
    nhi: "ABF24TH",
    name: "Ethan Hughes",
    date: "30/03/2026",
  },
  {
    nhi: "KAQ92YG",
    name: "Lauren Hayes",
    date: "09/04/2026",
  },
];

export default function UpcomingReviews() {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #D6D6D6",
        padding: "18px",
        color: "#15284C",
      }}
    >
      <h2
        style={{
          fontSize: "20px",
          fontWeight: 600,
          margin: "0 0 16px 0",
        }}
      >
        Upcoming Reviews
      </h2>

      {demoReviews.length === 0 ? (
        <p
          style={{
            margin: 0,
            fontSize: "14px",
            fontWeight: 400,
            color: "#6B7280",
          }}
        >
          No upcoming reviews
        </p>
      ) : (
        <div>
          {demoReviews.map((review, index) => (
            <div
              key={`${review.nhi}-${index}`}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px 0",
                borderBottom:
                  index === demoReviews.length - 1
                    ? "none"
                    : "1px solid #E5E7EB",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "18px",
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#15284C",
                }}
              >
                <span style={{ minWidth: "86px" }}>{review.nhi}</span>
                <span>{review.name}</span>
              </div>

              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: review.isToday ? "#C53B35" : "#15284C",
                }}
              >
                {review.date}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
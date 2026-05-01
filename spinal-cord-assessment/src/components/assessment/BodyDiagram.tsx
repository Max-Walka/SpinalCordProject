"use client";

import { useEffect, useRef, useState } from "react";
import { Exam, Score } from "@/types/exam";

type Props = {
  exam: Exam;
};

const scoreColours: Record<string, string> = {
  "0": "#E74C3C", // red
  "1": "#F1C40F", // yellow
  "2": "#2ECC71", // green
};

function levelToSvgLevel(side: "right" | "left", level: string) {
  return `${side}-${level.toLowerCase().replace("_", "-")}`;
}

function getWorstScore(a: Score, b: Score): string {
  const validScores = ["0", "1", "2"];

  if (!validScores.includes(String(a))) return String(b);
  if (!validScores.includes(String(b))) return String(a);

  return Number(a) <= Number(b) ? String(a) : String(b);
}

export default function BodyDiagram({ exam }: Props) {
  const [svgHtml, setSvgHtml] = useState("");
  const diagramRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function loadSvg() {
      const response = await fetch("/diagram.svg");

      if (!response.ok) {
        console.error("Could not load /diagram.svg");
        return;
      }

      const text = await response.text();
      setSvgHtml(text);
    }

    loadSvg();
  }, []);

  useEffect(() => {
    if (!svgHtml || !diagramRef.current) return;

    const diagramElement = diagramRef.current;

    (["right", "left"] as const).forEach((side) => {
      Object.keys(exam[side].lightTouch).forEach((level) => {
        const svgLevel = levelToSvgLevel(side, level);

        const lightTouchScore = exam[side].lightTouch[level];
        const pinPrickScore = exam[side].pinPrick[level];

        const finalScore = getWorstScore(lightTouchScore, pinPrickScore);
        const colour = scoreColours[finalScore] || "#F9F9F9";

        const paths = diagramElement.querySelectorAll(
          `[data-level="${svgLevel}"]`
        );

        paths.forEach((path) => {
          if (path instanceof SVGElement) {
            path.style.fill = colour;
            path.style.fillOpacity = "0.65";
          }
        });
      });
    });
  }, [exam, svgHtml]);

  return (
    <div
      ref={diagramRef}
      style={{
        width: "360px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
      dangerouslySetInnerHTML={{ __html: svgHtml }}
    />
  );
}
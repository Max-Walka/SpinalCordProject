"use client";

type Props = {

  result: any;

  topDown: boolean;

  setTopDown: React.Dispatch<React.SetStateAction<boolean>>;

  onCalculate: () => void;

};

function get(obj: any, paths: string[]) {
  for (const path of paths) {
    const value = path.split(".").reduce((acc, key) => acc?.[key], obj);
    if (value !== undefined && value !== null && value !== "") return value;
  }
  return "";
}

function ResultBox({ value, wide = false }: { value: any; wide?: boolean }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: wide ? "110px" : "54px",
        height: "32px",
        border: "1px solid #AEB4BE",
        backgroundColor: "#E5E5E5",
        color: "#15284C",
        fontSize: "14px",
        fontWeight: 500,
      }}
    >
      {value ?? ""}
    </span>
  );
}

export default function ResultsPanel({
  result,
  topDown,
  setTopDown,
  onCalculate,
}: Props) {

  const c = result?.classification ?? {};
  const t = result?.totals ?? {};

  const sensoryRight = get(c, ["neurologicalLevel.sensoryRight", "neurologicalLevels.sensoryRight"]);
  const sensoryLeft = get(c, ["neurologicalLevel.sensoryLeft", "neurologicalLevels.sensoryLeft"]);
  const motorRight = get(c, ["neurologicalLevel.motorRight", "neurologicalLevels.motorRight"]);
  const motorLeft = get(c, ["neurologicalLevel.motorLeft", "neurologicalLevels.motorLeft"]);

  const nli = get(c, ["neurologicalLevelOfInjury"]);
  const complete = get(c, ["completeOrIncomplete", "injuryComplete"]);
  const ais = get(c, ["ASIAImpairmentScale", "asiaImpairmentScale"]);

  const zppSensoryRight = get(c, ["zoneOfPartialPreservations.sensoryRight", "zoneOfPartialPreservation.sensoryRight"]);
  const zppSensoryLeft = get(c, ["zoneOfPartialPreservations.sensoryLeft", "zoneOfPartialPreservation.sensoryLeft"]);
  const zppMotorRight = get(c, ["zoneOfPartialPreservations.motorRight", "zoneOfPartialPreservation.motorRight"]);
  const zppMotorLeft = get(c, ["zoneOfPartialPreservations.motorLeft", "zoneOfPartialPreservation.motorLeft"]);

  return (
    <aside
      style={{
        width: "420px",
        maxWidth: "420px",
        color: "#15284C",
        borderRight: "2px solid #2D3E5E",
        padding: "24px 22px 24px 0",
        backgroundColor: "#F6F4EC",
      }}
    >
      <div
  style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "24px",
  }}
>
  <label
    style={{
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "14px",
      fontWeight: 600,
      color: "#15284C",
    }}
  >
    <input
      type="checkbox"
      checked={topDown}
      onChange={(e) => setTopDown(e.target.checked)}
    />
    Top-down propagation
  </label>

  <button
    type="button"
    onClick={onCalculate}
    style={{
      width: "140px",
      height: "40px",
      backgroundColor: "#2D3E5E",
      color: "#FFFFFF",
      border: "none",
      fontWeight: 600,
      cursor: "pointer",
    }}
  >
    Calculate
  </button>
</div>
      <h2 style={{ margin: "0 0 22px", fontSize: "28px", fontWeight: 700 }}>
        Classification
      </h2>

      <Section title="Neurological Levels">
        <div style={{ display: "grid", gridTemplateColumns: "90px 60px 60px", gap: "8px", alignItems: "center" }}>
          <span></span>
          <strong>R</strong>
          <strong>L</strong>

          <span>Sensory</span>
          <ResultBox value={sensoryRight} />
          <ResultBox value={sensoryLeft} />

          <span>Motor</span>
          <ResultBox value={motorRight} />
          <ResultBox value={motorLeft} />
        </div>
      </Section>

      <Section title="Injury Classification">
        <div style={{ display: "grid", gap: "10px" }}>
          <Row label="NLI" value={nli} wide />
          <Row label="Complete?" value={complete} wide />
          <Row label="AIS" value={ais} wide />
        </div>
      </Section>

      <Section title="Zone of Partial Preservation">
        <div style={{ display: "grid", gridTemplateColumns: "90px 60px 60px", gap: "8px", alignItems: "center" }}>
          <span></span>
          <strong>R</strong>
          <strong>L</strong>

          <span>Sensory</span>
          <ResultBox value={zppSensoryRight} />
          <ResultBox value={zppSensoryLeft} />

          <span>Motor</span>
          <ResultBox value={zppMotorRight} />
          <ResultBox value={zppMotorLeft} />
        </div>
      </Section>

      <Section title="Sub-scores">
        <div style={{ display: "grid", gridTemplateColumns: "95px 60px 60px 60px", gap: "8px", alignItems: "center" }}>
          <span></span>
          <strong>R</strong>
          <strong>L</strong>
          <strong>Total</strong>

          <span>UEMS</span>
          <ResultBox value={t?.right?.upperExtremity} />
          <ResultBox value={t?.left?.upperExtremity} />
          <ResultBox value={t?.upperExtremity} />

          <span>LEMS</span>
          <ResultBox value={t?.right?.lowerExtremity} />
          <ResultBox value={t?.left?.lowerExtremity} />
          <ResultBox value={t?.lowerExtremity} />

          <span>LT</span>
          <ResultBox value={t?.right?.lightTouch} />
          <ResultBox value={t?.left?.lightTouch} />
          <ResultBox value={t?.lightTouch} />

          <span>PP</span>
          <ResultBox value={t?.right?.pinPrick} />
          <ResultBox value={t?.left?.pinPrick} />
          <ResultBox value={t?.pinPrick} />
        </div>
      </Section>
    </aside>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: "28px" }}>
      <h3
        style={{
          margin: "0 0 12px",
          fontSize: "22px",
          fontWeight: 700,
          color: "#15284C",
        }}
      >
        {title}
      </h3>
      {children}
    </section>
  );
}

function Row({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: any;
  wide?: boolean;
}) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ width: "90px" }}>{label}</span>
      <ResultBox value={value} wide={wide} />
    </div>
  );
}
import type { NewPatientFormData } from "./NewPatientForm";

type Props = {
  formData: NewPatientFormData;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  color: "#15284C",
  marginBottom: "6px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: "42px",
  border: "1px solid #D6D6D6",
  backgroundColor: "#FFFFFF",
  padding: "10px 12px",
  fontSize: "14px",
  color: "#15284C",
  boxSizing: "border-box",
  outline: "none",
};

const ethnicityOptions = [
  "Afghani",
  "African American",
  "African nfd",
  "African nec",
  "Afrikaner",
  "American",
  "Arab",
  "Argentinian",
  "Asian nfd",
  "Assyrian",
  "Australian",
  "Austrian",
  "Bangladeshi",
  "Brazilian",
  "British nfd",
  "Burmese",
  "Cambodian",
  "Cambodian Chinese",
  "Canadian",
  "Caribbean",
  "Chilean",
  "Chin",
  "Chinese nfd",
  "Colombian",
  "Cook Islands Māori nfd",
  "Croatian",
  "Czech",
  "Danish",
  "Dutch",
  "Egyptian",
  "English",
  "Ethiopian",
  "Eurasian",
  "European nfd",
  "European nec",
  "Fijian",
  "Fijian Indian",
  "Filipino",
  "French",
  "German",
  "Greek",
  "Hong Kong Chinese",
  "Hungarian",
  "Indian nfd",
  "Indian Tamil",
  "Indigenous American",
  "Indigenous Australian",
  "Indonesian",
  "Iranian/Persian",
  "Iraqi",
  "Irish",
  "Israeli/Jewish",
  "Italian",
  "Japanese",
  "Kiribati",
  "Korean",
  "Laotian",
  "Latin American nfd",
  "Lebanese",
  "Malaysian",
  "Malaysian Chinese",
  "Māori",
  "Mexican",
  "Middle Eastern nfd",
  "Nepalese",
  "New Zealander",
  "New Zealand European",
  "Ni Vanuatu",
  "Nigerian",
  "Niuean",
  "Norwegian",
  "Other ethnicity nec",
  "Other South African",
  "Other Zimbabwean",
  "Pakistani",
  "Pacific Peoples nfd",
  "Papua New Guinean",
  "Polish",
  "Portuguese",
  "Punjabi",
  "Romanian",
  "Rotuman",
  "Russian",
  "Samoan",
  "Scottish",
  "Serbian",
  "Sikh",
  "Sinhalese",
  "Somali",
  "South African European",
  "South African Indian",
  "Southeast Asian nfd",
  "Southeast Asian nec",
  "Spanish",
  "Sri Lankan nfd",
  "Sri Lankan Tamil",
  "Swedish",
  "Swiss",
  "Tahitian",
  "Taiwanese",
  "Thai",
  "Tokelauan",
  "Tongan",
  "Tuvaluan",
  "Turkish",
  "Ukrainian",
  "Vietnamese",
  "Welsh",
  "Zimbabwean European",
].sort((a, b) => a.localeCompare(b));

export default function PersonalDetailsSection({ formData, onChange }: Props) {
  return (
    <section
      style={{
        borderBottom: "1px solid #5F6F8C",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "14px 18px",
          borderBottom: "1px solid #5F6F8C",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "20px",
            fontWeight: 600,
            color: "#15284C",
          }}
        >
          PERSONAL DETAILS
        </h2>

        <span
          style={{
            fontSize: "12px",
            color: "#B42318",
          }}
        >
          * required
        </span>
      </div>

      <div
        style={{
          padding: "20px 18px 24px 18px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: "18px 28px",
        }}
      >
        <div>
          <label htmlFor="prefix" style={labelStyle}>
            PREFIX
          </label>
          <input
            id="prefix"
            name="prefix"
            value={formData.prefix}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="firstName" style={labelStyle}>
            FIRST NAME *
          </label>
          <input
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="lastName" style={labelStyle}>
            LAST NAME *
          </label>
          <input
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="preferredName" style={labelStyle}>
            PREFERRED NAME
          </label>
          <input
            id="preferredName"
            name="preferredName"
            value={formData.preferredName}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth" style={labelStyle}>
            DATE OF BIRTH *
          </label>
          <input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="gender" style={labelStyle}>
            GENDER *
          </label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={onChange}
            style={inputStyle}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="ethnicity" style={labelStyle}>
            ETHNICITY
          </label>
          <select
            id="ethnicity"
            name="ethnicity"
            value={formData.ethnicity}
            onChange={onChange}
            style={inputStyle}
          >
            <option value="">Select ethnicity</option>
            {ethnicityOptions.map((ethnicity) => (
              <option key={ethnicity} value={ethnicity}>
                {ethnicity}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="nzCitizenshipStatus" style={labelStyle}>
            NZ CITIZENSHIP STATUS
          </label>
          <input
            id="nzCitizenshipStatus"
            name="nzCitizenshipStatus"
            value={formData.nzCitizenshipStatus}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="placeOfBirth" style={labelStyle}>
            PLACE OF BIRTH
          </label>
          <input
            id="placeOfBirth"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" style={labelStyle}>
            MOBILE PHONE NUMBER
          </label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="homePhoneNumber" style={labelStyle}>
            HOME PHONE NUMBER
          </label>
          <input
            id="homePhoneNumber"
            name="homePhoneNumber"
            value={formData.homePhoneNumber}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="emailAddress" style={labelStyle}>
            EMAIL ADDRESS
          </label>
          <input
            id="emailAddress"
            name="emailAddress"
            type="email"
            value={formData.emailAddress}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="nhiNumber" style={labelStyle}>
            NHI NUMBER *
          </label>
          <input
            id="nhiNumber"
            name="nhiNumber"
            value={formData.nhiNumber}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div style={{ gridColumn: "span 2" }}>
          <label htmlFor="addressLine1" style={labelStyle}>
            ADDRESS LINE 1
          </label>
          <input
            id="addressLine1"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div style={{ gridColumn: "span 2" }}>
          <label htmlFor="addressLine2" style={labelStyle}>
            ADDRESS LINE 2
          </label>
          <input
            id="addressLine2"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="city" style={labelStyle}>
            CITY
          </label>
          <input
            id="city"
            name="city"
            value={formData.city}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="suburb" style={labelStyle}>
            SUBURB
          </label>
          <input
            id="suburb"
            name="suburb"
            value={formData.suburb}
            onChange={onChange}
            style={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="postalCode" style={labelStyle}>
            POSTAL CODE
          </label>
          <input
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={onChange}
            style={inputStyle}
          />
        </div>
      </div>
    </section>
  );
}
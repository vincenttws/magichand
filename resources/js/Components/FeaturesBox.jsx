function FeaturesBox({ title, featureLogo, description }) {
  return (
    <div className="feature-box">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ fontSize: "24px" }}>{title}</h3>
        <img src={featureLogo} alt="logo" />
      </div>
      <p style={{ color: "rgba(107, 114, 128, 1)", fontSize: "14px" }}>{description}</p>
    </div>
  );
}

export default FeaturesBox
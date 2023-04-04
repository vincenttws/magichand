function FeaturesBox({ title, featureLogo, description }) {
  return (
    <div className="feature-box">
      <div style={{ paddingTop: "20px" }}>
        <h3 style={{ display: "inline-block", fontWeight: "bold", fontSize: "20px" }}>{title}</h3>
        <img src={featureLogo} alt="logo" style={{ display: "inline-block", float: "right" }} />
      </div>
      <p>{description}</p>
    </div>
  );
}

export default FeaturesBox
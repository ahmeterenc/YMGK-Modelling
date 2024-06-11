/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../styles/main.css";
import getChaosMapAnalysis from "../../api/api";

const ChaosMap = ({ chaosMap }) => {
  const [formData, setFormData] = useState({});
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const initialState = {};
    chaosMap.inputs?.forEach((input) => {
      initialState[input] = "";
    });
    setFormData(initialState);
    setImage(null);
  }, [chaosMap]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setImage(null);

    const formDataCopy = { ...formData };
    for (const input of chaosMap.inputs) {
      if (formDataCopy[input] < chaosMap.input_ranges[input].min) {
        formDataCopy[input] = chaosMap.input_ranges[input].min;
      } else if (formDataCopy[input] > chaosMap.input_ranges[input].max) {
        formDataCopy[input] = chaosMap.input_ranges[input].max;
      }
    }

    const response = await getChaosMapAnalysis(chaosMap.id, formDataCopy);
    console.log(response);
    const processedImagePath = response?.data?.plot_url;
    setImage(`${processedImagePath.replace(/\\/g, "/")}`);
    setLoading(false);
  };

  const handleInputChange = (e, input) => {
    setFormData({
      ...formData,
      [input]: e.target.value,
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(formData);

  return (
    <div className="map-item" style={{ display: "flex", marginBottom: "4rem" }}>
      <div>
        <h1>{chaosMap.name}</h1>
        <p style={{ maxWidth: "40rem", textAlign: "justify" }}>
          {chaosMap.description}
        </p>
        <form onSubmit={handleSubmit}>
          {chaosMap?.inputs?.map((input, i) => (
            <div key={i} className="inputs">
              <label style={{ textTransform: "capitalize" }}>{input}</label>
              <input
                placeholder={input}
                value={formData[input]}
                onChange={(e) => handleInputChange(e, input)}
              />
              <span style={{ fontSize: "0.8rem", color: "#555" }}>
                Önerilen Girdi Aralıkları: {chaosMap.input_ranges[input].min} -{" "}
                {chaosMap.input_ranges[input].max}
              </span>
            </div>
          ))}
          <div style={{ marginTop: "1rem", marginBottom: "8rem" }}>
            <button className="btn" type="submit">
              Gönder
            </button>
          </div>
        </form>
      </div>
      <div style={{ marginLeft: "2rem" }}>
        {image && (
          <div>
            <img
              src={
                image.startsWith("http")
                  ? image
                  : `http://localhost:8000/${image}`
              }
              alt={"sdfsd"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChaosMap;

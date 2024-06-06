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

    const formData = { ...this?.state?.formData };
    for (const input of chaosMap.inputs) {
      if (formData[input] < chaosMap.input_ranges[input].min) {
        formData[input] = chaosMap.input_ranges[input].min;
      } else if (formData[input] > chaosMap.input_ranges[input].max) {
        formData[input] = chaosMap.input_ranges[input].max;
      }
    }

    const response = await getChaosMapAnalysis(chaosMap.id, formData);
    console.log(response);
    const processedImagePath = response?.data?.plot_url;
    setImage(`${processedImagePath}`);
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

  return (
    <div className="map-item" style={{display:'flex'}}>
      <div>
        <h1>{chaosMap.name}</h1>
        <p style={{ maxWidth: "40rem", textAlign: "justify" }}>
          {" "}
          {chaosMap.description}{" "}
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
            </div>
          ))}
          <div style={{ marginTop: "1rem" }}>
            <button className="btn" type="submit">
              Gönder
            </button>
          </div>
        </form>
      </div>
      <div>
        {image && (
          <div>
            <img src={image} alt={"sdfsd"} />
          </div>
        )}
      </div>
    </div>
  );
};
export default ChaosMap;

import React, { useState } from "react";

const defectInfo = {
  strawberry: {
    name: "Strawberry Defect",
    description: "This is a common issue in strawberries caused by mold or bruising.",
    solution: "Ensure proper storage at low temperatures and avoid excessive handling.",
    Storage: "Keep strawberries dry and refrigerated to prevent mold and spoilage.",
    Inspection: "Regularly check for spoiled fruit and remove any affected strawberries immediately.",
    Pesticides: "Use neem oil or insecticidal soap for pest control on strawberry plants.",
    Control: "Apply fungicides like Captan or Merivon at the first sign of fungal infections."
  },
  carrot: {
    name: "Carrot Defect",
    description: "Carrots may develop cracks or rot due to improper irrigation or disease.",
    solution: "Use proper watering techniques and store in cool, dry places."
  }
};

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [info, setInfo] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));

      
      const lowerCaseName = file.name.toLowerCase();
      if (lowerCaseName.includes("strawberry")) {
        setInfo(defectInfo.strawberry);
      } else if (lowerCaseName.includes("carrot")) {
        setInfo(defectInfo.carrot);
      } else {
        setInfo({ name: "Unknown", description: "No information available for this image." });
      }
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", maxWidth: "650px", margin: "auto", border: "1px solid #ccc", borderRadius: "10px" , backgroundColor:"white"}}>
      <h2>Crop Analysis</h2>
      <br></br>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <div style={{ marginTop: "20px" }}>
          <img src={selectedImage} alt="Uploaded" style={{ width: "100%", maxHeight: "200px", objectFit: "contain", borderRadius: "10px" }} />
          {info && (
            <div style={{ marginTop: "10px", padding: "10px", border: "1px solid #ddd", borderRadius: "5px" }}>
              <h3>{info.name}</h3>
              <p>{info.description}</p>
              <strong>Solution:</strong> <p>{info.solution}</p>
              <strong>Storage:</strong> <p>{info.Storage}</p>
              <strong>Inspection:</strong> <p>{info.Inspection}</p>
              <strong>Organic Pesticides:</strong> <p>{info.Pesticides}</p>
              <strong>Fungal Control:</strong> <p>{info.Control}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
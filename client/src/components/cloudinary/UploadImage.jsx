import axios from "axios";
import React, { useState } from "react";

function UploadImage({ name, handleChangeimg }) {
  const [loading, setLoading] = useState(false);

  const uploadImage = async (e) => {
    e.preventDefault();
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "images");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/estdia/image/upload",
      data
    );

    setLoading(true);
    const file = await res.data;
    handleChangeimg(e, file.secure_url);
  };

  return (
    <div>
      <input type="file" name={name} onChange={(e) => uploadImage(e)} />
      {loading && <span>imagen cargada</span>}
    </div>
  );
}

export default UploadImage;

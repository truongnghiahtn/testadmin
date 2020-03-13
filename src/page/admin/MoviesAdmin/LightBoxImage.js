import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { apiDevFast } from "../../../utils/config";
const LightBoxImage = ({ image, toggler }) => {
  const [productIndex, setProductIndex] = useState(0);

  return (
    <FsLightbox
      toggler={toggler}
      type="image"
      sources={[apiDevFast + "/" + image]}
      sourceIndex={productIndex}
    />
  );
};
export default LightBoxImage;

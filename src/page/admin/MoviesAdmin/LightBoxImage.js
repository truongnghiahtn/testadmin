import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { apiDevFast } from "../../../utils/config";
const LightBoxImage = ({ image, toggler }) => {
  const [productIndex, setProductIndex] = useState(0);
  console.log(apiDevFast + "/" + image, toggler);

  return (
    <FsLightbox
      toggler={toggler}
      sources={[apiDevFast + "/" + image]}
      key={productIndex}
    />
  );
};
export default LightBoxImage;

import "./Image.scss";

const Image = ({ srcSet, alt }) => {
  console.log("Array.isArray", Array.isArray(srcSet));
  const arrayImages = Array.isArray(srcSet);
  let ImageComp;

  if (arrayImages) {
    const imageLength = srcSet?.length;
    if (imageLength === 1)
      ImageComp = (
        <img className={"image"} src={srcSet[0]} alt={`${alt ? alt : ""}`} />
      );
    else if (imageLength > 1)
      ImageComp = (
        <img
          className={"image"}
          src={srcSet[0]}
          srcSet={srcSet}
          alt={`${alt ? alt : ""}`}
        />
      );
    else
      ImageComp = (
        <div className={"image"} data-image={"No image"}>
          {"No image"}
        </div>
      );
  } else {
    srcSet
      ? (ImageComp = (
          <img className={"image"} src={srcSet} alt={`${alt ? alt : ""}`} />
        ))
      : (ImageComp = (
          <div className={"image"} data-image={"No image"}>
            {"No image"}
          </div>
        ));
  }

  return ImageComp;
};
export default Image;

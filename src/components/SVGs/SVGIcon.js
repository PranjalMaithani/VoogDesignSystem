const SVGIcon = ({ svg, ...props }) => {
  return <>{svg({ ...props })}</>;
};

export default SVGIcon;

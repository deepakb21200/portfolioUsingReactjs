// import Lottie from "lottie-react";

// const AnimationLottie = ({ animationPath, width }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationPath};

//   return (
//     <Lottie {...defaultOptions} />
//   );
// };

// export default AnimationLottie;






import Lottie from "lottie-react";

const AnimationLottie = ({
  animationPath,
  className = "",
  style = {},
}) => {
  return (
    <Lottie
      animationData={animationPath}
      loop={true}
      autoplay={true}
      className={className}
      style={style}

      
    />
  );
};

export default AnimationLottie;

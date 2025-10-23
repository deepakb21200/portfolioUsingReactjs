import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath};

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;

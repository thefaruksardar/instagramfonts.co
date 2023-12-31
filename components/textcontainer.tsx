import { useAnimate, animate, motion } from "framer-motion";
import toast from "react-hot-toast";

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

type AnimationSequence = Parameters<typeof animate>[0];
type TextContainerProps = {
  text: string;
  name: string;
  index: number;
};

function TextContainer({ text, name, index }: TextContainerProps) {
  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    const [starsAnimation, starsFadeOut, starsReset] = animateShapes("sparkle");
    const [circlesAnimation, circlesFadeOut, circlesReset] =
      animateShapes("circle");
    const [squaresAnimation, squaresFadeOut, squaresReset] =
      animateShapes("square");
    const [ringsAnimation, ringsFadeOut, ringsReset] = animateShapes("ring");

    animate([
      ...starsReset,
      ...circlesReset,
      ...squaresReset,
      ...ringsReset,
      ["p", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["p", { scale: 1 }],
      ...starsAnimation,
      ...circlesAnimation,
      ...squaresAnimation,
      ...ringsAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...starsFadeOut,
      ...circlesFadeOut,
      ...squaresFadeOut,
      ...ringsFadeOut,
    ]);
  };

  const listAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (i: number) => {
      // Calculate the delay
      let calculatedDelay = 0.025 * i;

      // Set a minimum delay of 1 second
      let delay = Math.max(calculatedDelay, 0.5);

      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: delay,
        },
      };
    },
  };

  return (
    <motion.div
      key={index}
      ref={scope}
      className="group hover:bg-slate-50 border-b last:border-none select-none"
      onClick={() => {
        navigator.clipboard.writeText(text), toast.success("Copied");
      }}
      variants={listAnimationVariants}
      initial={"initial"}
      whileInView={"animate"}
      custom={index}
      viewport={{ once: true }}
    >
      <span className="text-gray-400 text-xs pl-3 capitalize">{name}</span>
      <p
        onClick={onButtonClick}
        className="relative not-p text-center w-full px-6 pt-2 pb-6 text-xl text-gray-800 transition-colors "
      >
        <span className="group-hover:!text-2xl  transition-all">{text}</span>
        {text && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 block"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <>
                <svg
                  className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
                  key={index}
                  viewBox="0 0 122 117"
                  width="10"
                  height="10"
                >
                  <path
                    fill={`${colors[randomNumberBetween(0, 12)]}`}
                    d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                  />
                </svg>
                {/* Circle */}
                <svg
                  className={`absolute left-1/2 top-1/2 opacity-0 circle-${index}`}
                  key={index}
                  viewBox="0 0 122 117"
                  width="10"
                  height="10"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill={`${colors[randomNumberBetween(0, 12)]}`}
                  />
                </svg>

                {/* Square */}
                <svg
                  className={`absolute left-1/2 top-1/2 opacity-0 square-${index}`}
                  key={index}
                  viewBox="0 0 122 117"
                  width="25"
                  height="25"
                >
                  <circle
                    id="Ellipse 1"
                    cx="20"
                    cy="5"
                    r="4"
                    fill={`${colors[randomNumberBetween(0, 12)]}`}
                  />
                  <circle
                    id="Ellipse 2"
                    cx="20"
                    cy="35"
                    r="4"
                    fill={`${colors[randomNumberBetween(0, 12)]}`}
                  />
                  <circle
                    id="Ellipse 3"
                    cx="35"
                    cy="20"
                    r="4"
                    fill={`${colors[randomNumberBetween(0, 12)]}`}
                  />
                  <circle
                    id="Ellipse 4"
                    cx="5"
                    cy="20"
                    r="4"
                    fill={`${colors[randomNumberBetween(0, 12)]}`}
                  />
                  <circle
                    id="Ellipse 5"
                    cx="9"
                    cy="9"
                    r="4"
                    fill={`${colors[randomNumberBetween(0, 12)]}`}
                  />
                  <circle
                    id="Ellipse 6"
                    cx="10"
                    cy="30"
                    r="4"
                    fill={`${colors[randomNumberBetween(0, 12)]}`}
                  />
                  <circle
                    id="Ellipse 7"
                    cx="30"
                    cy="30"
                    r="4"
                    fill={`${colors[randomNumberBetween(0, 12)]}`}
                  />
                  <circle
                    id="Ellipse 8"
                    cx="31"
                    cy="10"
                    r="4"
                    fill={`${colors[randomNumberBetween(0, 12)]}`}
                  />
                </svg>
                {/* Ring */}
                <svg
                  className={`absolute left-1/2 top-1/2 opacity-0 ring-${index}`}
                  key={index}
                  viewBox="0 0 122 117"
                  width="25"
                  height="25"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="10"
                    fill="none"
                    stroke={`${colors[randomNumberBetween(0, 12)]}`}
                    stroke-width="5"
                  />
                </svg>
              </>
            ))}
          </span>
        )}
      </p>
    </motion.div>
  );
}

export default TextContainer;

function animateShapes(className: string) {
  const sparkles = Array.from({ length: 4 });
  const sparklesAnimation: AnimationSequence = sparkles.map((_, index) => [
    `.${className}-${index}`,
    {
      x: randomNumberBetween(-100, 100),
      y: randomNumberBetween(-50, 50),
      scale: randomNumberBetween(1.5, 2.5),
      opacity: 1,
    },
    {
      duration: 0.5,
      at: "<",
    },
  ]);

  const sparklesFadeOut: AnimationSequence = sparkles.map((_, index) => [
    `.${className}-${index}`,
    {
      opacity: 0,
      scale: 0,
    },
    {
      duration: 0.5,
      at: "<",
    },
  ]);

  const sparklesReset: AnimationSequence = sparkles.map((_, index) => [
    `.${className}-${index}`,
    {
      x: 0,
      y: 0,
    },
    {
      duration: 0.000001,
    },
  ]);

  return [sparklesAnimation, sparklesFadeOut, sparklesReset];
}

const colors = [
  "#ef4444",
  "#f97316",
  "#84cc16",
  "#eab308",
  "#22c55e",
  "#14b8a6",
  "#06b6d4",
  "#0ea5e9",
  "#6366f1",
  "#9333ea",
  "#c026d3",
  "#db2777",
  "#e11d48",
];

import { FC } from "react";

import { AnimationWrapper, Stone, Veil, Wand } from "./spinner.styled";

export const Spinner: FC = () => {
  return (
    <AnimationWrapper>
      <Veil>
        <Stone />
        <Wand />
      </Veil>
    </AnimationWrapper>
  );
};

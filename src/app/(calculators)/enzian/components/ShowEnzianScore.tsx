import React, { ComponentProps, PropsWithChildren, PropsWithoutRef } from "react";
import { EnzianScore } from "@/app/(calculators)/enzian/page";

function ShowEnzianScore({score, ...props}: PropsWithoutRef<ComponentProps<"div">> & {score: EnzianScore}) {
  const { a, bl, br, c, ol, or, p, tl, tr } = score;
  return (
    <div {...props}>{`P ${p}, O ${ol}/${or}, T ${tl}/${tr}, A ${a}, B ${bl}/${br}, C ${c}`}</div>
  );
}

export default ShowEnzianScore;

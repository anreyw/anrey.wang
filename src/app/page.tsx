import type { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <div className="mt-48 flex justify-center px-12">
      <p className="text-4xl" lang="zh">
        <ruby>
          教<rt>jiào</rt>
        </ruby>
        <ruby>
          外<rt>wài</rt>
        </ruby>
        <ruby>
          別<rt>bié</rt>
        </ruby>
        傳
        <br />
        <ruby>
          不<rt>bú</rt>
        </ruby>
        <ruby>
          立<rt>lì</rt>
        </ruby>
        <ruby>
          文<rt>wén</rt>
        </ruby>
        <ruby>
          字<rt>zì</rt>
        </ruby>
        <br />
        直指人心
        <br />
        見性成佛
      </p>
    </div>
  );
}

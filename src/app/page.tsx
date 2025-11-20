import type { JSX } from "react";

export default function Page(): JSX.Element {
  return (
    <main className="mt-48 flex justify-center px-12">
      <p className="text-4xl" lang="zh">
        <ruby>
          <span title="teaching">教</span>
          <rt>jiào</rt>
        </ruby>
        <ruby>
          <span title="outside">外</span>
          <rt>wài</rt>
        </ruby>
        <ruby>
          <span title="separate">別</span>
          <rt>bié</rt>
        </ruby>
        <ruby>
          <span title="transmission">傳</span>
          <rt>chuán</rt>
        </ruby>
        <br />
        <ruby>
          <span title="not">不</span>
          <rt>bú</rt>
        </ruby>
        <ruby>
          <span title="establish">立</span>
          <rt>lì</rt>
        </ruby>
        <ruby>
          <span title="written language">文</span>
          <rt>wén</rt>
        </ruby>
        <ruby>
          字<rt>zì</rt>
        </ruby>
        <br />
        <ruby>
          直<rt>zhí</rt>
        </ruby>
        <ruby>
          指<rt>zhǐ</rt>
        </ruby>
        <ruby>
          人<rt>rén</rt>
        </ruby>
        <ruby>
          心<rt>xīn</rt>
        </ruby>
        <br />
        <ruby>
          見<rt>jiàn</rt>
        </ruby>
        <ruby>
          性<rt>xìng</rt>
        </ruby>
        <ruby>
          成<rt>chéng</rt>
        </ruby>
        <ruby>
          佛<rt>fó</rt>
        </ruby>
      </p>
    </main>
  );
}

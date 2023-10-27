export type resultProps = {
  result: string;
};

const Result = ({ result }: resultProps) => {
  return (
    <div className="w-400 mt-40">
      <div className="leading-22 text-24">
        당신은 <span className="font-bold">{result}</span>으로 의심됩니다.
        <br />
        <br />
      </div>
      <div className="leading-22 text-18">
        오른쪽의 원인과 치료법은 참고하시되 절대적인 신뢰는 지양하시고, 정확한 진단은 가까운 병원에
        방문하시는 것을 권장합니다.
      </div>
    </div>
  );
};

export default Result;

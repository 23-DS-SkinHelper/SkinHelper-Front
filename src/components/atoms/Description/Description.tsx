// TODO- 하드코딩해놓은 부분 수정
// kor, eng, 원인 or 치료법, content

const Description = () => {
  return (
    <div className="ml-42 mt-46">
      <div className="text-28 leading-32 mb-24 w-full">
        <span className="font-bold">흑색종(melanoma)</span>의 원인은?
      </div>
      <div
        className="h-600 text-22 leading-28 bg-gray-200 rounded-10 p-30"
        style={{ overflowY: "scroll" }}
      >
        햇빛에 의한 각화증(Actinic keratoses, AK)은 피부에 나타나는 일종의 피부병변으로, 햇빛에
        노출되는 피부에 가장 흔하게 발생합니다. 이 질환은 자외선 노출의 장기간 누적 효과로 인해
        발생하며, 조기 발견 및 치료가 중요합니다. <br /> <br />
        1. 자외선 노출: 가장 주요한 원인 중 하나는 자외선 (UV) 노출입니다. 햇빛에 노출된 피부에
        장기간 노출하면 피부가 손상되고 각화증이 발생할 수 있습니다.
        <br /> <br />
        2. 피부 민감도: 일부 사람들은 다른 사람들보다 피부가 자외선 손상에 민감할 수 있습니다.
        이러한 개인들은 자외선에 노출될 때 더 쉽게 각화증을 개발할 수 있습니다.
        <br />
        <br />
        3. 고령: 고령자는 햇빛에 노출된 시간이 길기 때문에 각화증 발생 위험이 높아질 수 있습니다.
      </div>
    </div>
  );
};

export default Description;

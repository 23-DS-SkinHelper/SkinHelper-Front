export type descriptionProps = {
  kor: string;
  eng: string;
  classification: string;
  content: string;
};

const Description = ({ kor, eng, classification, content }: descriptionProps) => {
  const formattedContent = content.replace(
    /<span>(.*?)<\/span>/g,
    '<span class="font-bold">$1</span>'
  );

  return (
    <div className="ml-42 mt-46">
      <div className="text-28 leading-32 mb-24 w-full">
        <span className="font-bold">
          {kor}({eng})
        </span>
        의 {classification}은?
      </div>
      <div
        className={`h-600 w-full text-22 leading-28 bg-gray-200 rounded-10 p-30 ${
          classification === "치료법" ? "pb-80" : ""
        }`}
        style={{ overflowY: "scroll" }}
      >
        {formattedContent && <p dangerouslySetInnerHTML={{ __html: formattedContent }} />}
      </div>
    </div>
  );
};

export default Description;

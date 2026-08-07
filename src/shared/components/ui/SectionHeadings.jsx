const SectionHeadings = ({ sectionTitle, sectionParagraph }) => {
  return (
    <div className="my-10 md:my-13 space-y-4 text-center">
      <h1 className="text-4xl">{sectionTitle}</h1>
      <p>{sectionParagraph}</p>
    </div>
  );
};

export default SectionHeadings;

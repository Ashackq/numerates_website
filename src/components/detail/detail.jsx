import React from "react";

const Details = React.forwardRef((props, ref) => {
  const {
    count,
    hfsize,
    heading,
    fds,
    description,
    hrmarl,
    hrmarr,
    pos,
    hrenable,
    spcolor,
    color,
    wordColors,
    marginLeft,
    marginRight,
    headingRef,
    descriptionRef,
    clipPath,
  } = props;

  const getDescriptionWithColoredWords = () => {
    let modifiedDescription = description || "";

    wordColors.forEach(({ word, scolor }) => {
      const startIndex = modifiedDescription.indexOf(word);
      if (startIndex !== -1) {
        const endIndex = startIndex + word.length;
        const coloredWord = `<span style="color: ${scolor}">${word}</span>`;
        modifiedDescription =
          modifiedDescription.substring(0, startIndex) +
          coloredWord +
          modifiedDescription.substring(endIndex);
      }
    });

    modifiedDescription = modifiedDescription.replace(/\n/g, "<br />");

    return { __html: modifiedDescription };
  };

  const br = () => {
    return Array.from({ length: count }, (_, i) => <br key={i} />);
  };

  return (
    <div
      className={`text-center p-5 mx-[${marginLeft}] md:mx-[20px] relative text-[25px] leading-[39px]`}
      style={{ textAlign: pos }}
    >
      <p
        ref={headingRef}
        className={`text-[${hfsize}] font-bold font-montserrat block`}
        style={{
          color: spcolor,
          display: hrenable,
          clipPath: clipPath,
        }}
      >
        {heading}
      </p>

      {hrenable && (
        <hr
          className="my-4 border-[1px] border-aqua mx-auto"
          style={{
            marginLeft: hrmarl,
            marginRight: hrmarr,
            borderColor: spcolor,
          }}
        />
      )}

      {br()}
      <br />
      <p
        ref={descriptionRef}
        className="font-lora text-[25px] sm:text-[16px]"
        style={{ color, fontSize: fds }}
        dangerouslySetInnerHTML={getDescriptionWithColoredWords()}
      />
    </div>
  );
});

export default Details;

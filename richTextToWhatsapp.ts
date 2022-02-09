const RichTextToWhatsappFormatter = (text: string): string => {
  const boldRegex = /<strong>(.*?)<\/strong>/g;
  const italicRegex = /<em>(.*?)<\/em>/g;
  const strikeRegex = /<del>(.*?)<\/del>/g;

  const boldTag = "*";
  const italicTag = "~";
  const strikeThroughTag = "_";

  const boldReplace = (text: string) => {
    return `${boldTag}${text}${boldTag}`;
  };

  const italicReplace = (text: string) => {
    return `${italicTag}${text}${italicTag}`;
  };

  const strikeRegexReplace = (text: string) => {
    return `${strikeThroughTag}${text}${strikeThroughTag}`;
  };

  text = text.replace(boldRegex, boldReplace);
  text = text.replace(italicRegex, italicReplace);
  text = text.replace(strikeRegex, strikeRegexReplace);
  text = text.replace(/<br>/g, "\n");
  text = text.replace(/<\/?[^>]+(>|$)/g, "");
  return text;
};

const WhatsappFormattedTextToRichText = (text: string): string => {
  const boldRegex = /\*([^\*]+)\*/g;
  const italicRegex = /\~([^~]+)\~/g;
  const strikeRegex = /\_([^_]+)\_/g;

  const boldTag = "strong";
  const italicTag = "em";
  const strikeThroughTag = "del";

  const boldReplace = (text: string) => {
    return `<{${boldTag}}>${text}</{${boldTag}}>`;
  };

  const italicReplace = (text: string) => {
    return `<${italicTag}>${text}</${italicTag}>`;
  };

  const strikeRegexReplace = (text: string) => {
    return `<{${strikeThroughTag}}>${text}</{${strikeThroughTag}}>`;
  };

  text = text.replace(boldRegex, boldReplace);
  text = text.replace(italicRegex, italicReplace);
  text = text.replace(strikeRegex, strikeRegexReplace);
  text = text.replace(/\n/g, "<br/>");
  return text;
};

let whatsappText: string = `Hey *First Name*!
Thanks for your purchase from *business name* *product link* Hope you are enjoying "product name", and our service. :heart::smiley:
Please rate your experience based on your recent purchase:
Select the button that best describes your time with us.
Buttons:
• BAD
• GOOD
• EXCELLENT`;
let formatted: string = WhatsappFormattedTextToRichText(whatsappText);
console.log(formatted);

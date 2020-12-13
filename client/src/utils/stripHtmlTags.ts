export const stripHtmlTags = (str: string) => {
  if ((str===null) || (str==='')) {
    return '';
  } else {
    return str.replace(/<[^>]*>/g, '');
  }
}
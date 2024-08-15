function maxLenString(desc: string, maxLength: number = 30) {
  let trimmed = desc;
  if (desc.length > maxLength) {
    trimmed = desc.substring(0, maxLength - 3);
    trimmed = trimmed + '...';
  }
  return trimmed;
}

export { maxLenString };

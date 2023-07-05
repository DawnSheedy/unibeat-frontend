let counter = BigInt(0);

export const getUuid = () => {
  counter = counter + BigInt(1);
  return `${counter}-comp-uuid`;
};

export const formatPrice = (number: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

export const getUniqueValues = (data: any[], type: string) => {
  let types = data.map((item) => item[type]);
  if (type === "colors") {
    types = types.flat();
  }

  const set = new Set(types);
  return ["all", ...set];
};

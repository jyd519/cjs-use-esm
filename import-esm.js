global.importESM = async function (name) {
  const m = await import(name);
  return m.default;
};

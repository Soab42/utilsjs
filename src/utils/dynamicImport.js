export const getData = (fileName = "getting-started") =>
  import(`../docs/mdx/${fileName}.mdx`) // Use template literal to include fileName dynamically
    .then(async (module) => {
      return module.default;
    })
    .catch(() => getData("not-found"))
    .finally(() => {});

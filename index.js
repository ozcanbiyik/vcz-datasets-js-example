import fetch from "node-fetch";

async function loadVCZ() {
  const toolsUrl = "https://vibecoderszone.com/ai/tools.json";
  const categoriesUrl = "https://vibecoderszone.com/ai/categories.json";
  const tagsUrl = "https://vibecoderszone.com/ai/tags.json";

  const tools = await fetch(toolsUrl).then(res => res.json());
  const categories = await fetch(categoriesUrl).then(res => res.json());
  const tags = await fetch(tagsUrl).then(res => res.json());

  console.log("VCZ Dataset (JavaScript Example)");
  console.log("--------------------------------");
  console.log("Tools loaded:", tools.length);
  console.log("Categories loaded:", categories.length);
  console.log("Tags loaded:", tags.length);

  console.log("\nExample tool:");
  console.log(tools[0]);
}

loadVCZ();

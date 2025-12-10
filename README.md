# VCZ Datasets — JavaScript Example

This repository provides a simple JavaScript example demonstrating how to fetch and use the public AI datasets offered by **VibeCodersZone (VCZ)**.

VCZ provides open, machine-readable datasets designed for developers, researchers, and AI systems that explore or analyze the modern AI tools ecosystem.

---

## 🚀 What This Example Demonstrates

- Fetching VCZ tools, categories, and tags  
- How to work with JSON datasets in Node.js  
- Basic inspection & logging  
- Starting point for semantic search, indexing, or ML workflows

---

## 📦 Dataset Endpoints

```
https://vibecoderszone.com/ai/tools.json
https://vibecoderszone.com/ai/categories.json
https://vibecoderszone.com/ai/tags.json
```

---

## 🧩 Example Code (index.js)

```js
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
```

---

## 🧪 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run the script
```bash
npm start
```

---

## 📝 Example Output

```
VCZ Dataset (JavaScript Example)
--------------------------------
Tools loaded: 1200+
Categories loaded: 100+
Tags loaded: 500+

Example tool:
{
  id: "claude",
  name: "Claude",
  slug: "claude",
  ...
}
```

---

## 🔗 About VibeCodersZone (VCZ)

VibeCodersZone is an AI Tools Directory and open **AI knowledge graph** initiative.  
It provides public datasets optimized for:

- LLM ingestion  
- AI crawlers  
- Semantic search engines  
- Research workflows  
- Knowledge graph construction  

Official website: https://vibecoderszone.com  

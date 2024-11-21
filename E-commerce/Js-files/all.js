import { children, childrenTop, childrenBottom } from "./children.js";
import { mens, mensTop, mensBottom } from "./men.js";
import { womens, womensTop, womensBottom } from "./women.js";

// export let all = [];
// all = mens.concat(womens);
// all = all.concat(children);

export let allTop = [];
allTop = mensTop.concat(womensTop);
allTop = allTop.concat(childrenTop);

export let allBottom = [];
allBottom = mensBottom.concat(womensBottom);
allBottom = allBottom.concat(childrenBottom);

export let all = [];
all = allTop.concat(allBottom);



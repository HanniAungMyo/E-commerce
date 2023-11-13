import { CategoryBtn, categoryList } from "../core/selector";

const createCategory=(title)=>{
    const clone=CategoryBtn.content.cloneNode(true);
    const category=clone.querySelector("button")
      category.innerText=title
      
    return category;
}

export const categoryRender=(categoryArray)=>{
    categoryArray.forEach(el=>categoryList.append(createCategory(el)))
}


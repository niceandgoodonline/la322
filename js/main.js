let tree1 = document.getElementById("tree1");
let tree2 = document.getElementById("tree2");
let tree3 = document.getElementById("tree3");
let recipe = document.getElementById("recipe");
let bowImage = document.getElementById("bowImage");
tree1.style.display = "none";
tree2.style.display = "none";
tree3.style.display = "none";
recipe.style.display = "none";
bowImage.style.display = "none";

function toggleTree1Image() {
	if (tree1.style.display === "none") {
    	tree1.style.display = "block";
  	} else {
    	tree1.style.display = "none";
  	}
}

function toggleTree2Image() {
	if (tree2.style.display === "none") {
    	tree2.style.display = "block";
  	} else {
    	tree2.style.display = "none";
  	}
}

function toggleTree3Image() {
	if (tree3.style.display === "none") {
    	tree3.style.display = "block";
  	} else {
    	tree3.style.display = "none";
  	}
}

function toggleRecipeImage() {
	if (recipe.style.display === "none") {
    	recipe.style.display = "block";
  	} else {
    	recipe.style.display = "none";
  	}
}

function toggleBowImage() {
	if (bowImage.style.display === "none") {
    	bowImage.style.display = "block";
  	} else {
    	bowImage.style.display = "none";
  	}
}
// Recipe data
const recipes = [
    {
        id: 1,
        title: "Classic Spaghetti Carbonara",
        category: "dinner",
        prepTime: 10,
        cookTime: 15,
        servings: 4,
        image: "https://i.pinimg.com/736x/ae/b1/90/aeb1901fb8abaf35453345fa4b768ed6.jpg",
        description: "A creamy, authentic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
        ingredients: [
            { amount: 400, unit: "g", name: "spaghetti" },
            { amount: 200, unit: "g", name: "pancetta or guanciale" },
            { amount: 4, unit: "", name: "large eggs" },
            { amount: 100, unit: "g", name: "Pecorino Romano cheese" },
            { amount: 2, unit: "cloves", name: "garlic" },
            { amount: 1, unit: "tbsp", name: "olive oil" },
            { amount: "", unit: "", name: "Salt and black pepper to taste" }
        ],
        instructions: [
            "Bring a large pot of salted water to boil. Add spaghetti and cook according to package directions until al dente.",
            "While pasta cooks, heat olive oil in a large skillet over medium heat. Add pancetta and cook until crispy, about 5-7 minutes.",
            "In a bowl, whisk together eggs, grated cheese, and a generous amount of black pepper.",
            "Drain pasta, reserving 1 cup of pasta water. Add hot pasta to the skillet with pancetta.",
            "Remove skillet from heat. Quickly pour in egg mixture, stirring constantly to create a creamy sauce. Add pasta water as needed to achieve desired consistency.",
            "Serve immediately with extra cheese and black pepper."
        ],
        nutrition: {
            calories: 420,
            protein: 18,
            carbs: 52,
            fat: 16
        }
    },
    {
        id: 2,
        title: "Avocado Toast with Poached Eggs",
        category: "breakfast",
        prepTime: 10,
        cookTime: 5,
        servings: 2,
        image: "https://i.pinimg.com/736x/bf/87/86/bf878667704dbc2e40f3e9cb1fe67aa4.jpg",
        description: "A nutritious and delicious breakfast with creamy avocado, perfectly poached eggs, and a sprinkle of seasoning.",
        ingredients: [
            { amount: 2, unit: "slices", name: "whole grain bread" },
            { amount: 1, unit: "large", name: "ripe avocado" },
            { amount: 2, unit: "", name: "eggs" },
            { amount: 1, unit: "tsp", name: "white vinegar" },
            { amount: 1, unit: "tsp", name: "lemon juice" },
            { amount: "", unit: "", name: "Salt and pepper to taste" },
            { amount: "", unit: "", name: "Red pepper flakes (optional)" },
            { amount: "", unit: "", name: "Microgreens for garnish" }
        ],
        instructions: [
            "Toast bread slices until golden brown.",
            "Fill a pot with water and bring to a gentle simmer. Add vinegar.",
            "Crack each egg into a small bowl. Create a whirlpool in the simmering water and gently slide in the eggs. Poach for 3-4 minutes for runny yolks.",
            "While eggs poach, mash avocado with lemon juice, salt, and pepper.",
            "Spread avocado mixture on toast. Top with poached eggs.",
            "Season with salt, pepper, and red pepper flakes if desired. Garnish with microgreens and serve immediately."
        ],
        nutrition: {
            calories: 380,
            protein: 15,
            carbs: 32,
            fat: 22
        }
    },
    {
        id: 3,
        title: "Mediterranean Quinoa Salad",
        category: "lunch",
        prepTime: 15,
        cookTime: 15,
        servings: 4,
        image: "https://i.pinimg.com/1200x/37/af/9f/37af9ffdcff0b520a1022a149f1a28dd.jpg",
        description: "A refreshing and healthy salad packed with protein, vegetables, and Mediterranean flavors.",
        ingredients: [
            { amount: 1, unit: "cup", name: "quinoa" },
            { amount: 2, unit: "cups", name: "water or vegetable broth" },
            { amount: 1, unit: "large", name: "cucumber, diced" },
            { amount: 2, unit: "large", name: "tomatoes, diced" },
            { amount: 1/2, unit: "cup", name: "red onion, finely chopped" },
            { amount: 1/2, unit: "cup", name: "kalamata olives, pitted and halved" },
            { amount: 1/2, unit: "cup", name: "feta cheese, crumbled" },
            { amount: 1/4, unit: "cup", name: "fresh parsley, chopped" },
            { amount: 1/4, unit: "cup", name: "fresh mint, chopped" },
            { amount: 3, unit: "tbsp", name: "olive oil" },
            { amount: 2, unit: "tbsp", name: "lemon juice" },
            { amount: 1, unit: "clove", name: "garlic, minced" },
            { amount: "", unit: "", name: "Salt and pepper to taste" }
        ],
        instructions: [
            "Rinse quinoa under cold water. In a medium saucepan, bring quinoa and water (or broth) to a boil. Reduce heat, cover, and simmer for 15 minutes or until quinoa is fluffy and water is absorbed. Let cool.",
            "In a large bowl, combine cooled quinoa, cucumber, tomatoes, red onion, olives, feta cheese, parsley, and mint.",
            "In a small bowl, whisk together olive oil, lemon juice, minced garlic, salt, and pepper to create the dressing.",
            "Pour dressing over the salad and toss to combine.",
            "Refrigerate for at least 30 minutes before serving to allow flavors to meld.",
            "Serve chilled or at room temperature."
        ],
        nutrition: {
            calories: 320,
            protein: 10,
            carbs: 38,
            fat: 14
        }
    },
    {
        id: 4,
        title: "Chocolate Lava Cake",
        category: "dessert",
        prepTime: 15,
        cookTime: 12,
        servings: 4,
        image: "https://i.pinimg.com/736x/f6/a3/0f/f6a30f69e05b9f41bc33e1a61334df2d.jpg",
        description: "Decadent individual chocolate cakes with a molten center that oozes out when cut.",
        ingredients: [
            { amount: 4, unit: "oz", name: "bittersweet chocolate" },
            { amount: 4, unit: "tbsp", name: "unsalted butter" },
            { amount: 2, unit: "", name: "large eggs" },
            { amount: 2, unit: "tbsp", name: "granulated sugar" },
            { amount: 2, unit: "tbsp", name: "all-purpose flour" },
            { amount: "", unit: "", name: "Pinch of salt" },
            { amount: "", unit: "", name: "Butter and cocoa powder for ramekins" },
            { amount: "", unit: "", name: "Powdered sugar for dusting" },
            { amount: "", unit: "", name: "Vanilla ice cream for serving (optional)" }
        ],
        instructions: [
            "Preheat oven to 425°F (220°C). Butter four 6-ounce ramekins and dust with cocoa powder.",
            "Melt chocolate and butter together in a double boiler or microwave. Stir until smooth and let cool slightly.",
            "In a bowl, whisk eggs and sugar until thick and pale. Add the melted chocolate mixture and whisk to combine.",
            "Add flour and salt, folding gently until just combined. Do not overmix.",
            "Divide batter evenly among prepared ramekins.",
            "Bake for 12-14 minutes, until edges are firm but centers jiggle slightly.",
            "Let cool for 1 minute, then run a knife around edges and invert onto serving plates.",
            "Dust with powdered sugar and serve immediately with vanilla ice cream if desired."
        ],
        nutrition: {
            calories: 450,
            protein: 6,
            carbs: 42,
            fat: 28
        }
    },
    {
        id: 5,
        title: "Vegetable Stir Fry",
        category: "vegetarian",
        prepTime: 15,
        cookTime: 10,
        servings: 3,
        image: "https://i.pinimg.com/1200x/a9/5a/47/a95a479b8c941a04fbd3bfc34815eb7a.jpg",
        description: "A quick and healthy vegetable stir fry with tofu and a savory sauce.",
        ingredients: [
            { amount: 1, unit: "block", name: "firm tofu, pressed and cubed" },
            { amount: 2, unit: "cups", name: "broccoli florets" },
            { amount: 1, unit: "bell pepper", name: "red bell pepper, sliced" },
            { amount: 1, unit: "carrot", name: "carrot, julienned" },
            { amount: 1, unit: "cup", name: "snow peas" },
            { amount: 2, unit: "cloves", name: "garlic, minced" },
            { amount: 1, unit: "tbsp", name: "ginger, grated" },
            { amount: 3, unit: "tbsp", name: "soy sauce" },
            { amount: 1, unit: "tbsp", name: "sesame oil" },
            { amount: 1, unit: "tsp", name: "rice vinegar" },
            { amount: 1, unit: "tsp", name: "honey or maple syrup" },
            { amount: 1, unit: "tsp", name: "cornstarch" },
            { amount: 2, unit: "tbsp", name: "vegetable oil" },
            { amount: "", unit: "", name: "Sesame seeds for garnish" }
        ],
        instructions: [
            "In a small bowl, whisk together soy sauce, sesame oil, rice vinegar, honey, and cornstarch to make the sauce.",
            "Heat vegetable oil in a large wok or skillet over high heat. Add tofu and cook until golden brown on all sides. Remove from pan and set aside.",
            "Add garlic and ginger to the pan and stir-fry for 30 seconds until fragrant.",
            "Add broccoli and carrot and stir-fry for 3-4 minutes until slightly tender.",
            "Add bell pepper and snow peas and stir-fry for another 2 minutes.",
            "Return tofu to the pan and pour the sauce over everything. Stir-fry for 1-2 minutes until sauce thickens and coats the vegetables.",
            "Serve hot over rice or noodles, garnished with sesame seeds."
        ],
        nutrition: {
            calories: 280,
            protein: 16,
            carbs: 22,
            fat: 14
        }
    },
    {
        id: 6,
        title: "Berry Smoothie Bowl",
        category: "breakfast",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        image: "https://i.pinimg.com/1200x/e5/0d/97/e50d97a5e77587281925950e7c7c1ad5.jpg",
        description: "A thick and creamy smoothie bowl topped with fresh fruits, granola, and nuts.",
        ingredients: [
            { amount: 1, unit: "cup", name: "frozen mixed berries" },
            { amount: 1/2, unit: "banana", name: "frozen banana" },
            { amount: 1/2, unit: "cup", name: "Greek yogurt" },
            { amount: 1/4, unit: "cup", name: "milk or almond milk" },
            { amount: 1, unit: "tbsp", name: "honey or maple syrup" },
            { amount: 1/2, unit: "cup", name: "fresh berries" },
            { amount: 2, unit: "tbsp", name: "granola" },
            { amount: 1, unit: "tbsp", name: "sliced almonds" },
            { amount: 1, unit: "tsp", name: "chia seeds" }
        ],
        instructions: [
            "In a blender, combine frozen mixed berries, frozen banana, Greek yogurt, milk, and honey or maple syrup.",
            "Blend until thick and creamy, adding more milk if needed to reach desired consistency.",
            "Pour the smoothie into a bowl.",
            "Top with fresh berries, granola, sliced almonds, and chia seeds.",
            "Serve immediately with a spoon."
        ],
        nutrition: {
            calories: 420,
            protein: 18,
            carbs: 65,
            fat: 12
        }
    }
];

// DOM elements
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const recipesContainer = document.getElementById('recipes-container');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const recipeDetailContent = document.getElementById('recipe-detail-content');
const contactForm = document.getElementById('contact-form');

// Initialize the app
function init() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    // Display recipes
    displayRecipes(recipes);
    
    // Event listeners
    mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    themeToggle.addEventListener('click', toggleTheme);
    searchBtn.addEventListener('click', searchRecipes);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchRecipes();
    });
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', filterByCategory);
    });
    contactForm.addEventListener('submit', handleContactForm);
    
    // Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            showSection(targetSection);
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Close mobile menu
            navMenu.classList.remove('active');
        });
    });
}

// Toggle mobile menu
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

// Show section
function showSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

// Display recipes
function displayRecipes(recipesToShow) {
    recipesContainer.innerHTML = '';
    
    recipesToShow.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.className = 'recipe-card';
        recipeCard.setAttribute('data-id', recipe.id);
        
        recipeCard.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <div class="recipe-meta">
                    <span><i class="far fa-clock"></i> ${recipe.prepTime + recipe.cookTime} min</span>
                    <span><i class="far fa-user"></i> ${recipe.servings} servings</span>
                </div>
                <p class="recipe-description">${recipe.description}</p>
                <span class="recipe-category">${recipe.category}</span>
            </div>
        `;
        
        recipeCard.addEventListener('click', () => showRecipeDetail(recipe.id));
        recipesContainer.appendChild(recipeCard);
    });
}

// Show recipe detail
function showRecipeDetail(recipeId) {
    const recipe = recipes.find(r => r.id === parseInt(recipeId));
    if (!recipe) return;
    
    // Show recipe detail section
    showSection('recipe-detail');
    
    // Update active nav link
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === 'recipe-detail') {
            link.classList.add('active');
        }
    });
    
    // Populate recipe detail
    recipeDetailContent.innerHTML = `
        <a href="#" class="back-btn" id="back-btn">
            <i class="fas fa-arrow-left"></i> Back to Recipes
        </a>
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-img">
        <div class="recipe-detail-header">
            <h2 class="recipe-detail-title">${recipe.title}</h2>
            <div class="recipe-detail-meta">
                <div class="meta-item">
                    <i class="far fa-clock"></i>
                    <span>${recipe.prepTime + recipe.cookTime} min</span>
                </div>
                <div class="meta-item">
                    <i class="far fa-user"></i>
                    <span>${recipe.servings} servings</span>
                </div>
            </div>
        </div>
        
        <div class="servings-control">
            <button id="decrease-servings">-</button>
            <span>Servings: <span id="servings-count">${recipe.servings}</span></span>
            <button id="increase-servings">+</button>
        </div>
        
        <div class="recipe-section">
            <h3 class="section-title">Ingredients</h3>
            <ul class="ingredients-list" id="ingredients-list">
                ${recipe.ingredients.map(ing => `
                    <li>
                        <i class="fas fa-check-circle"></i>
                        <span class="ingredient-amount" data-base-amount="${ing.amount}">${ing.amount} ${ing.unit}</span>
                        ${ing.name}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div class="recipe-section">
            <h3 class="section-title">Instructions</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(instruction => `
                    <li>${instruction}</li>
                `).join('')}
            </ol>
        </div>
        
        <div class="recipe-section">
            <h3 class="section-title">Nutrition Facts</h3>
            <div class="nutrition-facts">
                <div class="nutrition-grid">
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.calories}</div>
                        <div class="nutrition-label">Calories</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.protein}g</div>
                        <div class="nutrition-label">Protein</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.carbs}g</div>
                        <div class="nutrition-label">Carbs</div>
                    </div>
                    <div class="nutrition-item">
                        <div class="nutrition-value">${recipe.nutrition.fat}g</div>
                        <div class="nutrition-label">Fat</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Back button event listener
    document.getElementById('back-btn').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('home');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === 'home') {
                link.classList.add('active');
            }
        });
    });
    
    // Servings control event listeners
    const servingsCount = document.getElementById('servings-count');
    const decreaseBtn = document.getElementById('decrease-servings');
    const increaseBtn = document.getElementById('increase-servings');
    let currentServings = recipe.servings;
    
    decreaseBtn.addEventListener('click', () => {
        if (currentServings > 1) {
            currentServings--;
            servingsCount.textContent = currentServings;
            updateIngredientAmounts(recipe.servings, currentServings);
        }
    });
    
    increaseBtn.addEventListener('click', () => {
        currentServings++;
        servingsCount.textContent = currentServings;
        updateIngredientAmounts(recipe.servings, currentServings);
    });
}

// Update ingredient amounts based on servings
function updateIngredientAmounts(baseServings, newServings) {
    const ratio = newServings / baseServings;
    const ingredientAmounts = document.querySelectorAll('.ingredient-amount');
    
    ingredientAmounts.forEach(element => {
        const baseAmount = parseFloat(element.getAttribute('data-base-amount'));
        const newAmount = (baseAmount * ratio).toFixed(1);
        const unit = element.textContent.split(' ').slice(1).join(' ');
        
        // Handle special cases for whole numbers
        if (newAmount % 1 === 0) {
            element.textContent = `${parseInt(newAmount)} ${unit}`;
        } else {
            element.textContent = `${newAmount} ${unit}`;
        }
    });
}

// Search recipes
function searchRecipes() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayRecipes(recipes);
        return;
    }
    
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm) ||
        recipe.description.toLowerCase().includes(searchTerm) ||
        recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchTerm))
    );
    
    displayRecipes(filteredRecipes);
}

// Filter by category
function filterByCategory() {
    const category = this.getAttribute('data-category');
    
    // Update active category button
    categoryBtns.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    
    if (category === 'all') {
        displayRecipes(recipes);
    } else {
        const filteredRecipes = recipes.filter(recipe => recipe.category === category);
        displayRecipes(filteredRecipes);
    }
}

// Handle contact form
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // In a real application, you would send this data to a server
    // For this demo, we'll just show a success message
    alert(`Thank you, ${formData.name}! Your message has been sent successfully.`);
    
    // Reset form
    contactForm.reset();
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

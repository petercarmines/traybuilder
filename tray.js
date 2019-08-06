const tray = {
    build: () => {
        //tray data
        let chosenEntree;
        let burgerStyles = ["Cheddar Style", "Cookout Style", "Out West Style", "Steak Style"]
        let hotDogStyles = ["Cookout Style", "Bacon Cheddar", "Mexi-Style"]
        let QuesadillaType = ["Chicken", "Beef"]
        let chickenStyles = ["Original Style", "Barbecue Style", "Cajun Style", "Club Style", "Cheddar Style"]


        let entrees = ["Burger", "BBQ", "Two Hotdog", "Big Double Burger", "Quesadilla", "Chicken Sandwich", "Spicy Chicken Sandwich",
            "Chargrilled Chicken Sandwich", "Chicken Strip"]
        let sides = ["Hushpuppies", "Slaw", "Onion Rings", "Fries", "Chicken Nuggets", "Chili", "Corndog", "Chicken Wrap", "Quesadilla", "Bacon Wrap"]

        let entree = entrees[Math.floor(Math.random() * entrees.length)]

        let side1 = sides[Math.floor(Math.random() * sides.length)]
        let side2 = sides[Math.floor(Math.random() * sides.length)]

        let drinks = ["Soda", "Huge Tea", "Bottle Water", "Float", "Milkshake"]

        //entree
        if (entree === "Burger") {
            chosenEntree = burgerStyles[Math.floor(Math.random() * burgerStyles.length)] + " Burger"
        }
        else if (entree === "Big Double Burger") {
            chosenEntree = burgerStyles[Math.floor(Math.random() * burgerStyles.length)] + " Big Double Burger"
        }
        else if (entree === "BBQ") {
            chosenEntree = "BBQ"
        }
        else if (entree === "Two Hotdog") {
            let style = hotDogStyles[Math.floor(Math.random() * hotDogStyles.length)]
            chosenEntree = style + " Two Hot Dog"
        }
        else if (entree === "Quesadilla") {
            chosenEntree = QuesadillaType[Math.floor(Math.random() * QuesadillaType.length)] + " Quesadilla"
        }
        else if ((entree === "Chicken Sandwich") || (entree === "Spicy Chicken Sandwich") || (entree === "Chargrilled Chicken Sandwich")) {
            chosenEntree = chickenStyles[Math.floor(Math.random() * chickenStyles.length)] + " " + entree
        }
        else if (entree = "Chicken Strip") {
            let half = Math.floor(Math.random() * 2) + 1
            if (half === 1) {
                chosenEntree = "Chicken Strip"
            }
            else if (half === 2) {
                let nextHalf = Math.floor(Math.random() * 2) + 1
                if (nextHalf === 1) {
                    chosenEntree = "Chicken Strip Sandwich"
                }
                else if (nextHalf === 2) {
                    chosenEntree = "Chicken Strip Club Sandwich"
                }
            }
        }

        //sides
        let fryToppings = ["Chili", "Cheese", "Chili Cheese", ""]
        let wrapStyles = ["Honey Mustard", "Cajun", "Ranch"]
        if (side1 === "Fries") {
            side1 = fryToppings[Math.floor(Math.random() * fryToppings.length)] + " Fries"
        }
        if (side2 === "Fries") {
            side2 = fryToppings[Math.floor(Math.random() * fryToppings.length)] + " Fries"
        }
        if (side1 === "Quesadilla") {
            side1 = "a " + QuesadillaType[Math.floor(Math.random() * QuesadillaType.length)] + " Quesadilla"
        }
        if (side2 === "Quesadilla") {
            side2 = "a " + QuesadillaType[Math.floor(Math.random() * QuesadillaType.length)] + " Quesadilla"
        }
        if (side1 === "Chicken Wrap") {
            side1 = "a " + wrapStyles[Math.floor(Math.random() * wrapStyles.length)] + " Chicken Wrap"
        }
        if (side2 === "Chicken Wrap") {
            side2 = "a " + wrapStyles[Math.floor(Math.random() * wrapStyles.length)] + " Chicken Wrap"
        }

        let chosenSides = side1 + ", " + side2

        if (side1 === side2) {
            chosenSides = "Double " + side1
        }

        //drink
        let drink = drinks[Math.floor(Math.random() * drinks.length)]

        if (drink === "Soda") {
            let sodas = ["Cheerwine", "Coke", "Sprite", "Mr. Pibb"]
            drink = sodas[Math.floor(Math.random() * sodas.length)]
        }
        if (drink === "Huge Tea") {
            let teas = ["Sweet", "Unsweet"]
            drink = "Huge " + teas[Math.floor(Math.random() * teas.length)] + " Tea"
        }
        if (drink === "Bottle Water") {
            drink = "Bottle of Water"
        }
        if (drink === "Float") {
            let floats = ["Coke", "Cheerwine"]
            drink = floats[Math.floor(Math.random() * floats.length)] + " Float"
        }
        if (drink === "Milkshake") {
            let shakeFlavors = ["Fresh Banana", "Banana Berry", "Banana Fudge", "Banana Nut", "Banana Pineapple", "Banana Pudding", "Blueberry",
                "Butterfinger", "Cappucino", "Caramel", "Caramel Fudge", "Blueberry Cheesecake", "Caramel Cheesecake",
                "Cherry Cheesecake", "Chocolate Chip Cheesecake", "Strawberry Cheesecake", "Cherry Cobbler", "Hershey's Chocolate",
                "Double Chocolate", "Chocolate Cherry", "Chocolate Chip Mint", "Chocolate Malt", "Chocolate Nut", "Heath Toffee",
                "M & M", "Mocha", "Orange Push-Up", "Oreo", "Oreo Mint", "Peach", "Peach Cobbler", "Peanut Butter",
                "Peanut Butter Banana", "Peanut Butter Fudge", "Pineapple", "Red Cherry", "Reese's Cup", "Snickers", "Strawberry",
                "Vanilla", "Walnut", "Watermelon"]
            let half = Math.floor(Math.random() * 2) + 1
            if (half === 1) {
                drink = shakeFlavors[Math.floor(Math.random() * shakeFlavors.length)] + " Milkshake"
            }
            else if (half === 2) {
                let half1 = shakeFlavors[Math.floor(Math.random() * shakeFlavors.length)]
                let half2 = shakeFlavors[Math.floor(Math.random() * shakeFlavors.length)]
                if (half1 === half2) {
                    half2 = shakeFlavors[Math.floor(Math.random() * shakeFlavors.length)]
                }
                drink = "Half " + half1 + " Half " + half2 + " Milkshake"
            }
        }

        //tray
        let tray = chosenEntree + " Tray with " + chosenSides + ", and a " + drink
        console.log(tray)
        return tray;
    }
}

tray.build()


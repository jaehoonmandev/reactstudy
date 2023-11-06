import React from "react";

import MealsSummary from "./MealsSummary";
import AvaulableMeals from "./AvaulableMeals";

const Meals = props => {
    return(
        <React.Fragment>
            <MealsSummary></MealsSummary>
            <AvaulableMeals></AvaulableMeals>
        </React.Fragment>
    );
};

export default Meals;
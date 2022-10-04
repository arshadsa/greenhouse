import React from 'react';
import './Description.css';

const Description = () => {
    return (
        <div className='container'>
            <p>
                Instructions :
            </p>

            <p>
            This application lets you calculate the greenhouse gas footprint of your menu options! Please add every ingredient in your recipe individually:
            </p>

            <ol>
                <li>Select the food type from the drop-down list, or start typing your ingredient name in the box.</li>
                <li>Select the country of origin for each ingredient - if this is unknown, select 'unknown'.</li>
                <li>Enter the amount in either kilograms, grams or ounce/pounds (select unit of measurement in the top right corner).</li>
                <li>Click the '+' button.</li>
                <li>Continue adding ingredients according to your recipe.</li>
                <li>When you are happy with your list, enter the number of servings this recipe will provide, click "Submit" and the total greenhouse gases will be then displayed, along with the emissions per serving in grams. You can use this figure to label your menus.</li>
                <li>The number of car miles equivalent to the greenhouse gases per serving is also displayed underneath the totals.</li>
            </ol>

            <p>Use the 'reset' button to enter a new recipe. Note that your previous recipe will not be saved</p>
        </div>
    );
};

export default Description;
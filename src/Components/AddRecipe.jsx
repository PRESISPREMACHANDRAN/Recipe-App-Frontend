import React, { useState } from 'react'
import Header from './Header'

const AddRecipe = () => {

    const [input, changeInput] = useState({
      image: "",
      recipeName: "",
      ingredients: "",
      cooking_Time: "",
      cuisineType: "",
      instructions: "",
      meal_Type: "",
      nutritional_information: ""

    });

    const readValue=(e)=>{
        changeInput({...input,[e.target.name]:e.target.value})
    }

    const submitValue=()=>{
        console.log(input)
    }
  return (
    <div>
      <Header />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Recipe Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="recipeName"
                  value={input.recipeName}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Ingredients
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ingredients"
                  value={input.ingredients}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Cooking time
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cooking_Time"
                  value={input.cooking_Time}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Instructions
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="instructions"
                  value={input.instructions}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Cuisine Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="cuisineType"
                  value={input.cuisineType}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Meal Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="meal_Type"
                  value={input.meal_Type}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Nutritional information
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="nutritional_information"
                  value={input.nutritional_information}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Recipe image
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  value={input.image}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="bn btn-danger" onClick={submitValue}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRecipe
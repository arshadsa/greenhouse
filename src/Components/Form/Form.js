import React from "react";
import "./Form.css";
import { useState } from "react";
import { useForm } from "react-hook-form";


const Form = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div>
      <>
        <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
          {/* <input {...register("firstName")} placeholder="First name" /> */}
          <div class="row align-items-center text-center ">
            <div class="col">
              <select className="w-75 p-2" {...register("food-ingredient")}>
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
              </select>
            </div>

            <div class="col">
              <select className="w-75 p-2" {...register("region-of-origin")}>
                <option value="">Select...</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
              </select>
            </div>
            <div class="col">
              <input
                className="w-75 p-2"
                {...register("amount")}
                placeholder="enter amount"
              />
            </div>
            <div class="col">
              <input className="w-50 p-2" type="submit" />
            </div>
            <p>{data}</p>
          </div>
        </form>

        <h3>Recipe Summary:</h3>
      </>
    </div>
  );
};

export default Form;

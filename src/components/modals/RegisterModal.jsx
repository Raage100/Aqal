import React from "react";
import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";

const RegisterModal = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <p>Register</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />
        <input placeholder="Email" />
        <input placeholder="vet ej" {...register("exampleRequired", { required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterModal;

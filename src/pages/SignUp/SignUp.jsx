import React, { useContext } from "react";
import signUpImg from "../../assets/login/signup.jpg";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    createUser(data.email, data.password).then((result) => {
      // console.log(result.user);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // console.log("profile updated");
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Swal.fire({
                title: "User Created Successfully",
                icon: "success",
                draggable: true,
              });
              reset();
              navigate("/");
            }
          });
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <div>
      <Helmet>
        <title>MR's Kitchen | SignUp</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <img src={signUpImg} alt="signup image" />
          </div>
          <div className="card md:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <h1 className="text-2xl font-bold">Sign Up</h1>
              <fieldset className="fieldset">
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label className="label font-semibold">Name</label>
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      className="input"
                      placeholder="Name"
                    />
                    {errors.name && (
                      <span className="text-red-500 mt-1">
                        Name is required
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="label font-semibold">Image URL</label>
                    <input
                      type="text"
                      {...register("imageURL", { required: true })}
                      className="input"
                      placeholder="Image URL"
                    />
                    {errors.imageURL && (
                      <span className="text-red-500 mt-1">
                        Image URL is required
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="label font-semibold">Email</label>
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      className="input"
                      placeholder="Email"
                    />
                    {errors.email && (
                      <span className="text-red-500 mt-1">
                        Email is required
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="label font-semibold">Password</label>
                    <input
                      type="password"
                      {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 20,
                      })}
                      className="input"
                      placeholder="Password"
                    />
                    {errors.password && (
                      <span className="text-red-500 mt-1">
                        Password is required
                      </span>
                    )}
                    {errors.minLength?.type === "minLength" && (
                      <span className="text-red-500 mt-1">
                        Password must be at least 6 characters
                      </span>
                    )}
                  </div>
                  <input
                    type="submit"
                    className="btn btn-neutral bg-[#D1A054] w-full border-none mt-4"
                  />
                </form>
                <p className="mt-3">
                  Already have an account?
                  <Link className="text-[#D1A054]" to="/login">
                    Sign In
                  </Link>
                </p>
                <div className="divider divider-horizontal"></div>
                <SocialLogin></SocialLogin>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

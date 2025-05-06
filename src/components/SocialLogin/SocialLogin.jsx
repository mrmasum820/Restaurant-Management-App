import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { signInWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleSocialLogin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
        // send data to database
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
          if (res.data.insertedId) {
            Swal.fire({
              title: "User Created Successfully",
              icon: "success",
              draggable: true,
            });
          }
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <button onClick={handleSocialLogin} className="btn">
      <FaGoogle />
      Google
    </button>
  );
};

export default SocialLogin;

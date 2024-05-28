import { useEffect, useState } from "react";
import React, { Fragment } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../images/success.jpg";
import PageLayout from "./PageLayout";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:5000/api/user/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);

  return (
    <Fragment>
      <PageLayout>
        {validUrl ? (
          <div className="flex flex-col items-center justify-center mt-10">
            <img src={success} alt="Success" className="w-64 h-auto mb-4 rounded-full" />
            <h1 className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-4 py-2 rounded-lg text-2xl mb-4">
              Email verified successfully
            </h1>
            <Link to="/signin">
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg text-xl hover:bg-green-600">
                Click to Login
              </button>
            </Link>
          </div>
        ) : (
          <h1 className="text-red-600 text-4xl font-bold">404 Not Found</h1>
        )}
      </PageLayout>
    </Fragment>
  );
};

export default EmailVerify;

// http://localhost:5000/api/user/${param.id}/verify/${param.token}`;

import { useState } from "react";
// import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   getDownloadURL,
//   getStorage,
//   ref,
//   uploadBytesResumable,
// } from "firebase/storage";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOutUserStart,
  signOutUserSuccess,
  signOutUserFailure,
} from "../redux/user/userSlice";
// import { app } from "../firebase";

export default function Profile() {
  // const fileRef = useRef(null);
  const { currentUser, loading, error } = useSelector((state) => state.user);
  // const [file, setFile] = useState(undefined);
  // const [filePerc, setFilePerc] = useState(0);
  // const [fileUploadError, setFileUploadError] = useState(false);
  const [FormData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const dispatch = useDispatch();

  console.log(FormData);

  // useEffect(() => {
  //   if (file) {
  //     handleFileUpload(file);
  //   }
  // }, [file]);

  // // Upload Image Function

  // const handleFileUpload = (file) => {
  //   const storage = getStorage(app);
  //   const fileName = new Date().getTime() + file.name;
  //   const storageRef = ref(storage, fileName);
  //   const uploadTask = uploadBytesResumable(storageRef, file);

  //   uploadTask.on(
  //     "state_changed",
  //     (snapshot) => {
  //       const progress =
  //         (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //       setFilePerc(Math.round(progress));
  //     },
  //     (error) => {
  //       setFileUploadError(true);
  //     },
  //     () => {
  //       getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
  //         setFormData({ ...FormData, avatar: downloadURL })
  //       );
  //     }
  //   );
  // };

  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.id]: e.target.value });
  };

  // UPDATE USER DETAILS FUNCTION

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(
        `https://ngo-muskan-react-1.onrender.com/api/user/update/${currentUser._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(FormData),
          credentials: "include",
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        dispatch(updateUserFailure(errorData.message || "Update failed"));
        return;
      }

      const data = await res.json();
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
    } catch (error) {
      dispatch(updateUserFailure(error.message));
    }
  };

  // USER SIGNOUT FUNCTION

  const handleSignout = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("https://ngo-muskan-react-1.onrender.com/api/auth/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (!res.ok) {
        const errorData = await res.json();
        dispatch(signOutUserFailure(errorData.message || "Signout failed"));
        return;
      }

      const data = await res.json();
      dispatch(signOutUserSuccess(data));
    } catch (error) {
      dispatch(signOutUserFailure(error.message));
    }
  };

  // Delete User Function

  const handleDeleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const res = await fetch(
        `https://ngo-muskan-react-1.onrender.com/api/user/delete/${currentUser._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (!res.ok) {
        const errorData = await res.json();
        dispatch(deleteUserFailure(errorData.message || "Delete failed"));
        return;
      }

      const data = await res.json();
      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <div className="max-w-lg m-auto p-3">
      <h1 className="text-3xl font-extrabold text-center my-7  font-montserrat uppercase text-slate-900">
        Profile
      </h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {/* <input
          // onChange={(e) => setFile(e.target.files[0])}
          // hidden={true}
          // type="file"
          // ref={fileRef}
          // accept="image/*"
        ></input> */}
        <img
          // onClick={() => fileRef.current.click()}
          src={FormData.avatar || currentUser.avatar}
          alt="profile "
          className="rounded-full h-24 w-24 object-cover self-center mt-2 cursor-none"
        ></img>
        {/* <p className="text-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error Image Upload (Image must be less than 2 mb)
            </span>
          ) : filePerc > 0 && filePerc < 100 ? (
            <span className="text-slate-700">{`Uploading ${filePerc}%`}</span>
          ) : filePerc === 100 ? (
            <span className="text-green-600 font-medium">
              Image Successfully Uploaded!
            </span>
          ) : (
            ""
          )}
        </p> */}

        <input
          type="text"
          id="username"
          placeholder="username"
          defaultValue={currentUser.username}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:outline-none"
        ></input>
        <input
          type="email"
          id="email"
          placeholder="email"
          defaultValue={currentUser.email}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:outline-none"
        ></input>
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
          className="p-3 border rounded-lg focus:outline-none"
        ></input>
        <button
          disabled={loading}
          className="p-3 bg-slate-700 rounded-lg text-white uppercase hover:opacity-95 disabled:opacity-80 font-roboto"
        >
          {loading ? "Loading..." : "Update"}
        </button>
      </form>

      <div className="flex justify-between mt-5">
        <span
          className="text-red-700 cursor-pointer font-medium font-roboto"
          onClick={handleDeleteUser}
        >
          Delete Account
        </span>
        <span
          className="text-red-700 cursor-pointer font-medium font-roboto"
          onClick={handleSignout}
        >
          Sign out
        </span>
      </div>

      <p className="text-red-700 mt-5 text-center font-medium">
        {" "}
        {error ? error : ""}
      </p>
      <p className="text-green-600 mt-5 text-center font-medium font-roboto">
        {updateSuccess ? "User is updated successfully" : ""}
      </p>
    </div>
  );
}

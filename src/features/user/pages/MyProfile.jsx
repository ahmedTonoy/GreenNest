import { use, useState } from "react";
import { AuthContext } from "../../../app/providers/auth/AuthContext";
import { toast } from "react-toastify";

const MyProfile = () => {
  const { user, updateUser } = use(AuthContext);

  const [showUpdaterForm, setShowUpdaterForm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.url.value;

    const profileData = {
      ...(displayName.trim() && { displayName: displayName.trim() }),
      ...(photoURL.trim() && { photoURL: photoURL.trim() }),
    };

    try {
      if (Object.keys(profileData).length === 0) {
        toast.warning(`You didn't change any profile info!`);
        return;
      }
      await updateUser(profileData);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="my-10 flex flex-col gap-3 items-center text-center">
      <h1 className="text-xl md:text-3xl">{`Hi 👋, ${user.displayName}`}</h1>
      <div className="border bg-base-100 p-1 rounded-xl shadow-md">
        <img className="rounded-xl w-30 h-30" src={user.photoURL} alt="" />
      </div>
      <p>
        Your Active Email:{" "}
        <span className="font-semibold text-primary">{user.email}</span>
      </p>
      {!showUpdaterForm ? (
        <p
          onClick={() => setShowUpdaterForm((prev) => !prev)}
          className="text-sm font-medium flex items-center gap-2 cursor-pointer"
        >
          <span>👉</span>{" "}
          <span className="mt-1.5 hover:font-semibold hover:underline">
            Click here to update your profile
          </span>
        </p>
      ) : (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input w-full"
                  placeholder="Enter updated profile name"
                />
                <label className="label">Photo URL</label>
                <input
                  name="url"
                  type="text"
                  className="input w-full"
                  placeholder="Enter updated profile photo URL"
                />
                <button className="btn btn-secondary mt-3">
                  Update Profile
                </button>
                <button
                  type="button"
                  onClick={() => setShowUpdaterForm((prev) => !prev)}
                  className="btn btn-outline mt-1"
                >
                  Cancel
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;

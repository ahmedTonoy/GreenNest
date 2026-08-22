import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLeaf,
  faTag,
  faBoxOpen,
  faSeedling,
  faStore,
  faCircleCheck,
  faCartShopping,
  faArrowLeft,
  faCalendarCheck,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate, ScrollRestoration, useLoaderData } from "react-router";
import { useState } from "react";
import { toast } from "react-toastify";

const PlantDetails = () => {
  const navigate = useNavigate();
  const plant = useLoaderData();

  const {
    plantName,
    category,
    price,
    rating,
    availableStock,
    careLevel,
    description,
    largeImage,
    providerName,
  } = plant;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    toast.success(`Consultation booked successfully for ${plantName}!`);

    setFormData({
      name: "",
      email: "",
    });

    document.getElementById("consultation-modal").close();
  };

  return (
    <main className="min-h-screen bg-base-200/40 py-8 md:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-base-content/60 hover:text-primary transform hover:scale-110 transition-transform cursor-pointer"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          Back
        </button>

        <section className="overflow-hidden rounded-3xl bg-base-100 shadow-xl">
          <div className="grid lg:grid-cols-2">
            <div className="relative flex min-h-105 items-center justify-center overflow-hidden bg-base-200 p-6 sm:p-10 lg:min-h-162.5">
              <div className="absolute left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
              <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-secondary/20 blur-3xl" />

              <img
                src={largeImage}
                alt={plantName}
                className="relative z-10 max-h-140 w-full rounded-2xl object-cover drop-shadow-2xl transition duration-500 hover:scale-105"
              />

              <div className="absolute left-6 top-6 z-20">
                <span className="badge badge-lg gap-2 border-none bg-base-100 px-4 py-4 shadow-md">
                  <FontAwesomeIcon icon={faLeaf} className="text-primary" />
                  {category}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
              <div className="mb-6">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Indoor Plant
                </p>
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                  {plantName}
                </h1>

                <div className="mt-4 flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <FontAwesomeIcon icon={faStar} className="text-warning" />
                    <span className="font-semibold">{rating}</span>
                  </div>
                  <span className="text-sm text-base-content/50">
                    Excellent customer rating
                  </span>
                </div>
              </div>

              <div className="mb-8 flex items-end gap-3 border-b border-base-300 pb-8">
                <span className="text-4xl font-bold text-primary">
                  ${price}
                </span>
                <span className="mb-1 text-sm text-base-content/50">
                  per plant
                </span>
              </div>

              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-base-200/70 p-4">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <FontAwesomeIcon icon={faSeedling} />
                    <span className="text-sm font-medium">Care Level</span>
                  </div>
                  <p className="font-semibold">{careLevel}</p>
                </div>

                <div className="rounded-2xl bg-base-200/70 p-4">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <FontAwesomeIcon icon={faBoxOpen} />
                    <span className="text-sm font-medium">Availability</span>
                  </div>
                  <p className="font-semibold">{availableStock} available</p>
                </div>

                <div className="rounded-2xl bg-base-200/70 p-4">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <FontAwesomeIcon icon={faTag} />
                    <span className="text-sm font-medium">Category</span>
                  </div>
                  <p className="font-semibold">{category}</p>
                </div>

                <div className="rounded-2xl bg-base-200/70 p-4">
                  <div className="mb-2 flex items-center gap-2 text-primary">
                    <FontAwesomeIcon icon={faStore} />
                    <span className="text-sm font-medium">Provider</span>
                  </div>
                  <p className="font-semibold">{providerName}</p>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="mb-3 text-lg font-bold">About this plant</h2>
                <p className="leading-7 text-base-content/65">{description}</p>
              </div>

              <div className="mb-6 flex items-center gap-2 text-sm font-medium text-success">
                <FontAwesomeIcon icon={faCircleCheck} />
                In stock and ready to bring home
              </div>

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  type="button"
                  className="btn btn-primary w-full rounded-xl text-base"
                  disabled={availableStock === 0}
                >
                  <FontAwesomeIcon icon={faCartShopping} />
                  Add to Cart
                </button>

                <button
                  type="button"
                  className="btn btn-outline btn-accent w-full rounded-xl text-base"
                  onClick={() =>
                    document.getElementById("consultation-modal").showModal()
                  }
                >
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
        <dialog id="consultation-modal" className="modal">
          <div className="modal-box max-w-lg rounded-3xl p-6 sm:p-8">
            <div className="mb-4">
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    className="text-accent"
                  />
                </div>

                <h2 className="text-xl font-bold">Book a Consultation</h2>
              </div>

              <p className="text-sm leading-6 text-base-content/60">
                Get personalized advice from our plant care experts about your{" "}
                <span className="font-semibold text-base-content">
                  {plantName}
                </span>
                .
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="w-full">
                <div className="label my-1.5">
                  <span className="label-text font-medium">Name</span>
                </div>

                <div className="relative">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-base-content/40"
                  />

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    className="input input-bordered w-full rounded-xl pl-10"
                  />
                </div>
              </label>

              <label className="w-full">
                <div className="label my-1.5">
                  <span className="label-text font-medium">Email</span>
                </div>

                <div className="relative">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-base-content/40"
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="input input-bordered w-full rounded-xl pl-10"
                  />
                </div>
              </label>

              <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  className="btn btn-ghost rounded-xl"
                  onClick={() =>
                    document.getElementById("consultation-modal").close()
                  }
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-accent rounded-xl">
                  <FontAwesomeIcon icon={faCalendarCheck} />
                  Book Now
                </button>
              </div>
            </form>
          </div>
        </dialog>
      </div>
      <ScrollRestoration />
    </main>
  );
};

export default PlantDetails;

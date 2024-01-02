"use client";

export default function Created(props) {
  return (
    <div className="card card-side bg-base-100 shadow-xl mx-10 my-6">
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          alt="Quiz Preview"
        />
      </figure>
      <div className="card-body w-80">
        <h2 className="card-title">{props.title}</h2>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">{props.tag}</div>
        </div>
        <p className="overflow-hidden">{props.description}</p>
        <div className="card-actions justify-end gap-6">
          <button
            className="btn btn-error"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Delete Quiz
          </button>
          <button className="btn btn-warning">Edit Quiz</button>
        </div>
      </div>

      {/* Modal for deleting quiz */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-xl text-center">{props.title}</h3>
          <p className="pt-3 pb-8 text-center">
            Are you sure you want to delete this Quiz?
          </p>
          <div className="flex justify-center gap-5">
            <button className="btn btn-error">Delete</button>
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

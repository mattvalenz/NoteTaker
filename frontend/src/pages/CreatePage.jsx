import { ArrowLeftIcon } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      toast.error("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      await axios.post("http://localhost:3000/api/notes", {
        title, 
        content
      })
      toast.success("Note created successfully!");
      navigate("/")
    } catch (error) {
      console.log("error creating note", error)
      toast.error("An error occurred while creating the note.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeftIcon className="size-5" />
            Back to Notes
          </Link>

          <div className="card bg-base-100 shadow-xl">
            <div className="card-body p-8">
              <h2 className="card-title text-2xl mb-6 text-base-content">
                Create New Note
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="form-control w-full">
                  <label className="label pb-2">
                    <span className="label-text text-base font-medium text-base-content">
                      Title
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Note Title"
                    className="input input-bordered w-full focus:input-primary"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-control w-full">
                  <label className="label pb-2">
                    <span className="label-text text-base font-medium text-base-content">
                      Content
                    </span>
                  </label>
                  <textarea
                    placeholder="Write your note here..."
                    className="textarea textarea-bordered w-full h-40 resize-none focus:textarea-primary"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </div>

                <div className="card-actions justify-end pt-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-8"
                    disabled={loading || !title.trim() || !content.trim()}
                  >
                    {loading ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Creating...
                      </>
                    ) : (
                      "Create Note"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;

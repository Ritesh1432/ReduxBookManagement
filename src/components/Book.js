import React, { useState } from "react";
import DisplayBook from "./DisplayBook";
import '../../src/css/Display.css'
import { useSelector, useDispatch } from "react-redux";
import { addBook } from "../redux/BookReducerSlice";


function Book() {
  const [books, setBooks] = useState({});

  const handleChange = (e) => {
    setBooks({ ...books, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(books));
    e.target.reset();
  };

  const result = useSelector((state) => state.bookreducer);
  const dispatch = useDispatch();

  return (
    <>
      <div className="row m-3">
        <div className="col-12 col-md-3 offset-md-1 addBookFormClass">
          <p className="text-center addBookTitle">Add Book</p>
          <form onSubmit={handleSubmit} method="post">
            <div>
              <label className="addBookLabelClass">Book Id:</label>
              <input
                type="number"
                className="form-control"
                name="bookid"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="addBookLabelClass">Title:</label>
              <input
                type="text"
                className="form-control"
                name="title"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="addBookLabelClass">Image Url:</label>
              <input
                type="text"
                className="form-control"
                name="imgsrc"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="addBookLabelClass">Author:</label>
              <input
                type="text"
                className="form-control"
                name="author"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="addBookLabelClass">Price:</label>
              <input
                type="number"
                className="form-control"
                name="price"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="addBookLabelClass">Description:</label>
              <input
                type="text"
                className="form-control"
                name="desc"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="addBookLabelClass">User Id:</label>
              <input
                type="number"
                className="form-control"
                name="userid"
                onChange={handleChange}
                required
              />
            </div>
            <div className="text-center mt-3">
            <button type="submit" className="btn btn-outline-primary btn-lg btn-block mt-2">
              Add
            </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6 offset-md-1">

            {result &&
              result.map((b, index) => 
              <div >
              <DisplayBook key={index} value={b} />
              </div>
              )}
        </div>
      </div>
    </>
  );
}

export default Book;

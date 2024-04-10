"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}-${month}-${date}`;
}

const createpost = () => {
  var x;
  const [isSubmitting, setSubmitting] = useState(false);
  const [iscontent, setcontent] = useState(false);
  const [isdescription, setddescription] = useState(false);
  const [displaycontent, setdisplaycontent] = useState(false);
  const [displaydescription, setdisplaydescription] = useState(false);

  function checkExist(name) {
    if (name === "content") {
      setcontent(true);
      setdisplaycontent(false);
      console.log(iscontent);
      return 0;
    } else {
      setddescription(true);
      setdisplaydescription(false);
      return 0;
    }
  }
  return (
    <div className="h-screen bg-slate-300 flex justify-center items-center">
      <center className="flex flex-col h-full items-center bg-blue-200 justify-center w-2/4 rounded-3xl">
        <h1 className="p-6 font-bold font-mono text-2xl text-slate-900">
          Create New Post
        </h1>
        <Formik
          initialValues={{
            blogName: "",
            keywords: "",
            description: "",
            image: "",
            content: "",
            category: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.blogName) {
              errors.blogName = "Required";
            }

            if (!values.keywords) {
              errors.keywords = "Required";
            }

            if (!values.image) {
              errors.image = "Required";
            }

            if (!values.category) {
              errors.category = "Required";
            }
            if (!iscontent) {
              setdisplaycontent(true);
              x = true;
            }
            if (!isdescription) {
              setdisplaydescription(true);
              x = true;
            }
            return errors;
          }}
          onSubmit={(values) => {
            if (x) {
              return 0;
            }
            console.log(iscontent);
            console.log(values);
          }}
        >
          {({ isSubmitting }) => (
            <div className="w-full h-3/4 flex justify-center items-center">
              {/* {console.log(getDate())} */}
              <Form className="flex flex-col w-3/4 h-full bg-teal-400 items-center justify-center p-4 rounded-3xl">
                <div className="flex w-full justify-between">
                  <div className="input-fields w-1/2 m-0">
                    <label className="self-baseline font-bold">Title</label>
                    <Field
                      type="text"
                      name="blogName"
                      placeholder="Blog Name"
                      className="mr-1 p-1"
                    />
                    <ErrorMessage name="blogName" component="div" />
                  </div>

                  <div className="input-fields w-1/2 m-0">
                    <label className="self-baseline font-bold">
                      Keywords{" "}
                      <span className="font-light text-gray-50 text-xs">
                        Comma Seperated
                      </span>
                    </label>
                    <Field
                      type="text"
                      name="keywords"
                      placeholder="Blog keywords"
                      className="mr-1 p-1"
                    />
                    <ErrorMessage name="keywords" component="div" />
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <div className="input-fields w-1/2 m-0">
                    <label className="self-baseline font-bold  mt-1">
                      Category
                    </label>
                    <Field
                      type="text"
                      name="category"
                      placeholder="Blog brief"
                      className="mr-1 p-1"
                    />
                    <ErrorMessage name="category" component="div" />
                  </div>

                  <div className="input-fields w-1/2 m-0">
                    <label className="self-baseline font-bold  mt-1">
                      Image URL
                    </label>
                    <Field
                      type="text"
                      name="image"
                      placeholder="Image URL"
                      className="mr-1 p-1"
                    />
                    <ErrorMessage name="image" component="div" />
                  </div>
                </div>

                <div className="input-fields w-full">
                  <label className="font-bold mt-1">Description</label>
                  <textarea
                    className="box-border p-1"
                    placeholder="Blog description "
                    rows={3}
                    name="description"
                    onChange={() => checkExist("description")}
                  ></textarea>
                  {displaydescription ? `Required` : ""}
                </div>
                <div className="input-fields w-full">
                  <label className="font-bold mt-1">Content</label>
                  <textarea
                    className="box-border p-1"
                    placeholder="Blog content "
                    rows={5}
                    onChange={() => checkExist("content")}
                  ></textarea>
                  {displaycontent ? "Required" : ""}
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-green-500 mt-4 p-2 rounded-lg"
                >
                  Submit
                </button>
              </Form>
            </div>
          )}
        </Formik>
      </center>
    </div>
  );
};
export default createpost;

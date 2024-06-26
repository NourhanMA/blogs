"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import NavbarOtherpages from "../components/NavbarOtherpages";
import { useRouter } from "next/navigation";
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}-${month}-${date}`;
}
var id = 30;
var arrayToLocal = [];

const createpost = () => {
  const router = useRouter();

  // const router = useRouter();

  class createdPost {
    constructor(
      id,
      title,
      category,
      keywords,
      description,
      content,
      image,
      updatedDate,
      pubDate
    ) {
      (this.id = id),
        (this.title = title),
        (this.category = category),
        (this.keywords = keywords),
        (this.description = description),
        (this.content = content),
        (this.image = image),
        (this.updatedDate = updatedDate),
        (this.pubDate = pubDate);
    }
    keywordsSlicer(str) {
      var str = str.split(", ");

      this.keywords = str;
      console.log(this.keywords);
    }
  }
  var x;
  const [iscontent, setcontent] = useState(false);
  const [isdescription, setddescription] = useState(false);
  const [displaycontent, setdisplaycontent] = useState(false);
  const [displaydescription, setdisplaydescription] = useState(false);
  const [contentText, setcontenttext] = useState("");
  const [descriptionText, setdescriptionText] = useState("");

  function checkExist(name, e) {
    if (name === "content") {
      setcontent(true);
      setcontenttext(e);
      setdisplaycontent(false);
      return 0;
    } else {
      setddescription(true);
      setdescriptionText(e);
      setdisplaydescription(false);
      return 0;
    }
  }
  return (
    <div className="h-screen">
      <NavbarOtherpages />
      <div className=" bg-slate-100 flex justify-center items-center h-[calc(92.5vh)]">
        <center className="flex flex-col h-full items-center justify-center w-2/4 rounded-3xl">
          <h1 className="p-6 font-semibold font-sans text-2xl text-slate-900">
            Create New Blog
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

              if (!values.category || values.category == "...") {
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
              id = id + 1;
              const createdNewPost = new createdPost(
                id,
                values.blogName,
                values.category,
                values.keywords,
                descriptionText,
                contentText,
                values.image,
                getDate(),
                getDate()
              );
              // console.log(keywords);
              createdNewPost.keywordsSlicer(values.keywords);
              arrayToLocal.push(createdNewPost);
              localStorage.setItem("newPost", JSON.stringify(arrayToLocal));
              router.push("/");
            }}
          >
            {({ isSubmitting }) => (
              <div className="w-full flex justify-center items-center">
                {/* {console.log(getDate())} */}
                <Form className="flex flex-col w-3/4 h-full bg-sky-700 items-center justify-center p-4 rounded-3xl">
                  <div className="input-fields w-full m-0">
                    <label className="self-baseline font-bold text-white">
                      Title
                    </label>
                    <Field
                      type="text"
                      name="blogName"
                      placeholder="Blog Name"
                      className="mr-1 p-1 rounded-md text-black"
                    />
                    <ErrorMessage
                      className="error"
                      name="blogName"
                      component="div"
                    />
                  </div>

                  <div className="input-fields w-full m-0">
                    <label className="self-baseline font-bold  text-white">
                      Keywords{" "}
                      <span className="font-light text-gray-50 text-xs">
                        Comma-space Seperation
                      </span>
                    </label>
                    <Field
                      type="text"
                      name="keywords"
                      placeholder="Blog keywords"
                      className="mr-1 p-1 rounded-md text-black"
                    />
                    <ErrorMessage
                      className="error"
                      name="keywords"
                      component="div"
                    />
                  </div>

                  <div className="input-fields w-full m-0 ">
                    <label className="self-baseline text-white font-bold  mt-1">
                      Category
                    </label>
                    <Field
                      as="select"
                      name="category"
                      placeholder="Blog brief"
                      className="mr-1 p-1 text-lg rounded-md text-black"
                    >
                      <option>...</option>
                      <option>Cookies</option>
                      <option>Pies</option>
                      <option>Desserts</option>
                      <option>Bread</option>
                      <option>Cakes</option>
                      <option>Breakfast</option>
                      <option>Pasta</option>
                      <option>Sandwiches</option>
                      <option>Soups & Stews</option>
                      <option>Salads</option>
                      <option>Pizza</option>
                      <option>Grilling</option>
                    </Field>
                    <ErrorMessage
                      className="error"
                      name="category"
                      component="div"
                    />
                  </div>

                  <div className="input-fields w-full m-0">
                    <label className="self-baseline text-white font-bold  mt-1">
                      Image URL
                    </label>
                    <Field
                      type="text"
                      name="image"
                      placeholder="Image URL"
                      className="mr-1 p-1 rounded-md text-black"
                    />
                    <ErrorMessage
                      className="error"
                      name="image"
                      component="div"
                    />
                  </div>

                  <div className="input-fields w-full">
                    <label className="font-bold text-white mt-1 self-baseline">
                      Description
                    </label>
                    <textarea
                      className="box-border p-1 rounded-md text-black"
                      placeholder="Blog description "
                      rows={3}
                      name="description"
                      onChange={(e) =>
                        checkExist("description", e.target.value)
                      }
                    ></textarea>
                    {displaydescription ? (
                      <div className="error">Required</div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="input-fields w-full">
                    <label className="font-bold text-white mt-1 self-baseline">
                      Content
                    </label>
                    <textarea
                      className="box-border p-1 rounded-md text-black"
                      placeholder="Blog content "
                      rows={5}
                      onChange={(e) => checkExist("content", e.target.value)}
                    ></textarea>
                    {displaycontent ? (
                      <div className="error">Required</div>
                    ) : (
                      ""
                    )}
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
    </div>
  );
};
export default createpost;

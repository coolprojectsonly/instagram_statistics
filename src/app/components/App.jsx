import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInstadata } from "./action";

function App() {
  const dispatch = useDispatch();

  const { data, error, status } = useSelector((state) => state.post);

  const [user, SetUser] = useState();

  const handleProcess = () => {
    dispatch(getInstadata({ user }));
    console.log(data?.data?.lastPosts);
  };

  if (status === "loading") {
    return <h1>Loading</h1>;
  }

  if (status === "error") {
    return <h1>Something Went Wrong</h1>;
  }

  return (
    <div style={{ border: "1px solid lightgray" }}>
      <h1>
        Instagram Stati<span style={{ color: "blue" }}>stics</span> App
        <div className="inputSection">
          <input
            type="text"
            onChange={(e) => SetUser(e.target.value)}
            placeholder="Enter Instagram user"
          ></input>
          {/* {data && data.data ? (
            <button
              onClick={handleProcess}
              style={{ backgroundColor: "green" }}
            >
              Display Profile
            </button>
          ) : ( */}
          <button onClick={handleProcess}>Process Data</button>
          {/* )} */}
        </div>
        <div
          className="profileWrapper"
          style={{ border: "1px solid lightgray" }}
        >
          {data && data.data && (
            <div className="profileContainer">
              <div className="profileImage">
                <img src={data?.data?.image}></img>
              </div>

              <div className="profileBio">
                <table>
                  <tbody>
                    <tr>
                      <td>Name:</td>
                      <td>{data?.data?.name}</td>
                    </tr>
                    <tr>
                      <td>Country:</td>
                      <td> {data?.data?.country}</td>
                    </tr>

                    <tr>
                      <td>UserName:</td>
                      <td> {data?.data?.screenName}</td>
                    </tr>

                    <tr>
                      <td>Account:</td>
                      <td>
                        {" "}
                        <a href={data.data.url}> {data?.data?.url}</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h2
                  style={{
                    textAlign: "center",
                    backgroundColor: "lightgray",
                    fontSize: "35px",
                    color: "indigo",
                  }}
                >
                  Latest Posts
                </h2>
                <div
                  style={{
                    width: "60vw",
                    height: "40vw",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  {data?.data?.lastPosts.map((item, index) => (
                    <div
                      className="profileImage"
                      style={{
                        margin: "10px",
                        marginTop: 0,
                        borderRadius: "20px",
                      }}
                      key={index}
                    >
                      <a href={item.url}>
                        <img src={item.image}></img>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </h1>
    </div>
  );
}

export default App;

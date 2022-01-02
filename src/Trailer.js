import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Trailer = ({ list }) => {
  const history = useHistory();
  let { id } = useParams();
  let data = list.find((elem) => elem.id == id);
  console.log(data);
  return data ? (
    <div>
      <button
        onClick={() => history.goBack()}
        className="btn btn-primary relative"
      >
        Go Home
      </button>
      <br />
      <img
        src={data.posterURL}
        className="w-50"
        style={{ borderRadius: "100%" }}
      />
      <h1 style={{ color: "white" }}>{data.title}</h1>
      <p style={{ color: "white" }}>
        <strong>description : </strong>
        {data.description.length > 100 ? (
          <>{data.description.substring(0, 100) + "..."}</>
        ) : (
          data.description
        )}
      </p>
      <iframe
        width="560"
        height="315"
        src={data.trailer}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  ) : (
    <>
      <button onClick={() => history.goBack()} className="btn btn-primary">
        Go Home
      </button>
      <h1>Movie not found</h1>
    </>
  );
};

export default Trailer;

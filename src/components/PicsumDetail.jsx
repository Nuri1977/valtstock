import React from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './PicsumDetail.css';

const PicsumDetail = () => {
  const { id } = useParams();
  const picsums = useSelector((state) => state.picsumReducer);
  let picsum = [];
  picsums.forEach((element) => {
    if (element.id === id) {
      picsum = element;
    }
  });
  console.log(picsum);

  return (
    <section className="flex justify-center">
      <div className="container picsum-detail text-center">
        <div className="flex justify-center">
          <button type="button" className="btn-secondary">Add to Album +</button>
          <button type="button" className="btn-primary">Download</button>
        </div>
        <div className="detail-image">
          <img src={picsum.download_url} alt="" className="detail-img" />
        </div>
        <span>UPLOADED BY</span>
        <h3 className="detail-author">{picsum.author}</h3>

        <div className="upload-date">28 Novenmer 2022</div>
        <NavLink to="/">
          <button type="button" className="btn-secondary">Go back</button>
        </NavLink>

      </div>
    </section>
  );
};

export default PicsumDetail;

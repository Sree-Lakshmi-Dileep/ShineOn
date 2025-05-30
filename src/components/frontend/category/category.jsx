import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // <-- import useNavigate
import toys from '../Toys/ToyList';
import './category.css';

function CategoryToysPage() {
  const { categoryName } = useParams();
  const navigate = useNavigate();  // <-- initialize navigate

  const filteredToys = toys.filter(
    (toy) =>
      toy.category &&
      categoryName &&
      toy.category.toLowerCase() === categoryName.toLowerCase()
  );

  return (
    <div className='contain'>
      <h1 className='cathead'>{categoryName}</h1>
      <div className="toy-list">
        {filteredToys.length > 0 ? (
          filteredToys.map((toy) => (
            <div key={toy.id} className="toy-card">
              <img src={toy.imageUrl} alt={toy.name} />
              <h3>{toy.name}</h3>
              <p>₹{toy.price.toFixed(2)}</p>
              <button
                className="more"
                onClick={() => navigate(`/toys/${toy.id}`)}  // <-- add navigation here
              >
                view details
              </button>
            </div>
          ))
        ) : (
          <p>No toys found in this category.</p>
        )}
      </div>
    </div>
  );
}

export default CategoryToysPage;

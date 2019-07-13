import { restaurants } from '../configs';
import { colors } from '../styles';

const RestaurantOptions = ({
  onClick,
}) => {
  const clickHandler = (e) => {
    const isActive = e.target.classList.value.includes('active');
    isActive ? e.target.classList.remove('active') : e.target.classList.add('active');
    onClick();
  }

  return (
    <section onClick={clickHandler}>
      {restaurants.map((vendor, i) => (
        <a key={i}>
          <img src={vendor.logo} />
        </a>
      ))}
      <style jsx>
      {`
        @keyframes rollOut {
          from {
            transform: translate(0, 0) rotate(0deg);
          }

          to {
            transform: translate(-500px, 0) rotate(360deg);
          }
        }

        .active {
          animation-name: rollOut;
          animation-duration: 1s;
          animation-fill-mode: both;
        }

        .active ~ * {
          display: none;
        }

        section {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }

        a {
          border-radius: 50%;
          display: block;
          text-decoration: none;
          width: 75px;
          height: 75px;
          border: 5px solid ${colors.white};
          padding: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${colors.white};
          margin: 0 10px;
          transition: border-color .35s;
        }

        a:hover {
          border-color: ${colors.grey.dark};
        }

        img {
          max-width: 80%;
          height: auto;
          pointer-events: none;
        }
      `}
      </style>
    </section>
  );
};

export default RestaurantOptions;

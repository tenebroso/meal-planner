import { useState } from 'react';
import { colors } from '../../styles';
import Expander from '../global/icons/Expander';

const Rail = ({
  children,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const onInteract = () => setIsExpanded(!isExpanded);

  const fadeIn = `
    @keyframes slideIn {
      from {
        transform: translate(-100%, 0);
      }

      to {
        transform: translate(0, 0);
      }
    }

    .slideIn {
      animation-name: slideIn;
      animation-duration: 1s;
      animation-fill-mode: both;
    }     
  `;


  return (
    <>
      <a
          onClick={onInteract}
        >
        <Expander />
      </a>
      <div
        className={isExpanded && `slide-in`}>
        {children}
      </div>
      <style jsx>
        {
          `
          div {
            box-shadow: 0 0 5px rgba(0, 0, 0, .25);
            display: flex;
            align-items: center;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 50%;
            background: ${colors.white};
            height: 100%;
            transform: translate(-100%, 0);
            width: 500px;
            max-width: 50vw;
            transition: 1s;
            animation-name: slideOut;
            animation-duration: 1s;
            animation-fill-mode: both;
            justify-content: center;
            opacity: 0;
          }

          div.slide-in {
            opacity: 1;
          }

          @keyframes slideIn {
            from {
              transform: translate(-100%, 0);
            }
      
            to {
              transform: translate(0, 0);
            }
          }

          @keyframes slideOut {
            from {
              transform: translate(0, 0);
            }
      
            to {
              transform: translate(-100%, 0);
            }
          }
      
          .slide-in {
            animation-name: slideIn;
            animation-duration: .5s;
            animation-fill-mode: both;
          } 
          
          .slide-out {
            animation-name: slideOut;
            animation-duration: .5s;
            animation-fill-mode: both;
          } 

          .will-change {
            will-change: transform;
          }
          
          a {
            background: ${colors.grey.dark};
            display: flex;
            justify-content: center;
            align-items: center;
            width: 32px;
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            cursor: pointer;
            transition: background-color .35s ease;
            z-index: 5;
          }

          a:hover {
            background-color: ${colors.black};
          }

          a:hover > div {
            opacity: 1;
          }
          `
        }
      </style>
    </>
  )
}

export default Rail;
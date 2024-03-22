import PropTypes from "prop-types";
import { TypographyRace } from "../Typography/Typography";

interface radioListProps {
  value: string;
  id: string;
  name: string;
  label: string;
  typographyText: string;
}

export const ChooseRadioType = ({
  radioList,
  setRadio,
  width,
}: {
  radioList: radioListProps[];
  width: string;
  setRadio: any;
}) => {
  return (
    <>
      <div className="radio-tile-group">
        {radioList.map((item) => (
          <div key={item.id} className="input-container">
            <input
              onClick={() => setRadio(item.value)}
              value={item.value}
              type="radio"
              id={item.id}
              name={item.name}
              className="radio-button"
            />
            <div className="radio-tile">
              <label htmlFor={item.id} className="radio-tile-label"></label>
            </div>
            <TypographyRace
              fontSize="0.875rem"
              content={item.typographyText}
              textAlign={"center"}
              fontWeight=""
              marginBottom=""
            />
          </div>
        ))}
      </div>
      <style>
        {`
            .radio-tile-group {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                width : ${width}
            }
            @media(max-width : 768px){
              .radio-tile-group {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                width : 100%;
              }
            }
            .radio-tile-group .input-container {
                position: relative;
                margin: 0.5rem;
            }
            .radio-tile-group .input-container .radio-button {
                opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                margin: 0;
                cursor: pointer;
            }
            .radio-tile-group .input-container .radio-tile {
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-orient: vertical;
                -webkit-box-direction: normal;
                -ms-flex-direction: column;
                flex-direction: column;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                width: 140px;
                height: 140px;
                border-radius: 8px;
                background-color : #D9D9D9;
                padding: 1rem;
                margin : 0px 0px 8px 0px;
                -webkit-transition: -webkit-transform 300ms ease;
                transition: -webkit-transform 300ms ease;
                transition: transform 300ms ease;
                transition: transform 300ms ease, -webkit-transform 300ms ease;
            }
            @media (max-width: 640px) {
                .radio-tile-group .input-container .radio-tile {
                    width: 152px;
                    margin: 0 auto;
                }
            }
            @media (max-width: 320px) {
                .radio-tile-group .input-container .radio-tile {
                    height :  35px;
                    width: 120px;
                }
            }
            .radio-tile-group .input-container .radio-tile-label {
                text-align: center;
                font-size: 14px;
                font-weight: 700;
                letter-spacing: 1px;
                color: #0A66C2;
            }
            @media (max-width: 640px) {
                .radio-tile-group .input-container .radio-tile-label {
                    font-size: 12px;
                }
            }
            @media (max-width: 320px) {
                .radio-tile-group .input-container .radio-tile-label {
                    font-size: 10px;
                }
            }
            .radio-tile-group .input-container .radio-button:checked + .radio-tile {
                border: 2px solid #0A66C2;
            }
            .radio-tile-group .input-container .radio-button:checked + .radio-tile > label {
            }
        `}
      </style>
    </>
  );
};

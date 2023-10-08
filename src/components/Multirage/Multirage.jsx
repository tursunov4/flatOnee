// import React, { useCallback, useEffect, useState, useRef } from "react";
// import PropTypes from "prop-types";
// import "./muliti.css"
// import http from "../../axios";

// const MultiRangeSlider = ({ onChange ,belgi }) => {
//     useEffect(()=>{
//        getRange()
//     },[])
//     const getRange =()=>{
//         http.get("/catalog/range/").then((res)=>{
//          setMinVal(res.data.min_price)
//          setMaxVal2(res.data.max_price)
//          setMaxVal(res.data.max_price)
//          setMinVal2(res.data.min_price)
//           console.log(res.data)
//         }).catch((err)=>{
//           console.log(err)
//         })
//       }

//   const [minVal, setMinVal] = useState("");
//   const [maxVal, setMaxVal] = useState("");
//   const [minVal2, setMinVal2] = useState("");
//   const [maxVal2, setMaxVal2] = useState("");
//   const minValRef = useRef(minVal2);
//   const maxValRef = useRef(maxVal2);
//   const range = useRef(null);

//   // Convert to percentage
//   const getPercent = useCallback(
//     (value) => Math.round(((value - minVal) / (maxVal - minVal)) * 100),
//     [minVal, maxVal]
//   );

//   // Set width of the range to decrease from the left side
//   useEffect(() => {
//     const minPercent = getPercent(minVal2);
//     const maxPercent = getPercent(maxValRef.current);

//     if (range.current) {
//       range.current.style.left = `${minPercent}%`;
//       range.current.style.width = `${maxPercent - minPercent}%`;
//     }
//   }, [minVal2, getPercent]);

//   // Set width of the range to decrease from the right side
//   useEffect(() => {
//     const minPercent = getPercent(minValRef.current);
//     const maxPercent = getPercent(maxVal2);

//     if (range.current) {
//       range.current.style.width = `${maxPercent - minPercent}%`;
//     }
//   }, [maxVal2, getPercent]);

//   // Get min and max values when their state changes
//   useEffect(() => {
//     onChange({ min: minVal2, max: maxVal2 });
//   }, [minVal2, maxVal2, onChange]);

//   return (
//     <div>
//       <input
//         type="range"
//         min={minVal}
//         max={maxVal}
//         value={minVal2}
//         onChange={(event) => {
//           const value = Math.min(Number(event.target.value), maxVal2 - 1);
//           setMinVal(value);
//           minValRef.current = value;
//         }}
//         className="thumb thumb--left"
//         style={{ zIndex: minVal2 > maxVal2 - 10000 && "5" }}
//       />
//       <input
//         type="range"
//         min={minVal}
//         max={maxVal}
//         value={maxVal2}
//         onChange={(event) => {
//           const value = Math.max(Number(event.target.value), minVal2 + 1);
//           setMaxVal(value);
//           maxValRef.current = value;
//         }}
//         className="thumb thumb--right"
//       />

//       <div className="slider">
//         <div className="slider__track" />
//         <div ref={range} className="slider__range" />
//         <div className="slider__left-value">{minVal2}$</div>
//         <div className="slider__right-value">{maxVal2}$</div>
//       </div>
//     </div>
//   );
// };

// MultiRangeSlider.propTypes = {
//   min: PropTypes.number.isRequired,
//   max: PropTypes.number.isRequired,
//   onChange: PropTypes.func.isRequired
// };

// export default MultiRangeSlider;


import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "./muliti.css"
import http from "../../axios";

const MultiRangeSlider = ({  onChange }) => {
  useEffect(()=>{
    getRange()
  },[])
  const getRange =()=>{
    http.get("/catalog/range/").then((res)=>{
       setName(res.data)
     console.log(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const  [name , setName] = useState({})
  const [minVal, setMinVal] = useState(name.min_price);
  const [maxVal, setMaxVal] = useState(name.max_price);
  const minValRef = useRef(name.min_price);
  const maxValRef = useRef(name.max_price);
  const range = useRef(null);
  console.log(minVal)

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - name.min_price) / (name.max_price - name.min_price)) * 100),
    [name.min_price, name.max_price]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="container">
      <input
        type="range"
        min={name.min_price}
        max={name.max_price}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > name.max_price - 100 && "5" }}
      />
      <input
        type="range"
        min={name.min_price}
        max={name.max_price}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}$</div>
        <div className="slider__right-value">{maxVal}$</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
